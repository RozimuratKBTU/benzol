
import React, { useEffect, useRef } from 'react';

const AINetworkAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Установка размера canvas равным размеру контейнера
    const resizeObserver = new ResizeObserver(entries => {
      for (const entry of entries) {
        if (entry.target === canvas) {
          canvas.width = entry.contentRect.width;
          canvas.height = entry.contentRect.height;
        }
      }
    });
    
    resizeObserver.observe(canvas);
    
    // Класс для узла нейросети
    class Node {
      x: number;
      y: number;
      radius: number;
      layer: number;
      connections: Node[];
      activity: number;
      targetActivity: number;
      color: string;
      pulseDirection: number;
      pulseSpeed: number;
      
      constructor(x: number, y: number, radius: number, layer: number) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.layer = layer;
        this.connections = [];
        this.activity = 0;
        this.targetActivity = 0;
        this.color = layer === 0 ? '#F97316' : (layer === 3 ? '#7E69AB' : '#6E59A5');
        this.pulseDirection = 1;
        this.pulseSpeed = 0.01 + Math.random() * 0.02;
      }
      
      update() {
        // Плавно меняем активность к целевому значению
        this.activity += (this.targetActivity - this.activity) * 0.05;
        
        // Добавляем "пульсацию" для визуального эффекта
        if (this.activity > 0.8) this.pulseDirection = -1;
        if (this.activity < 0.2) this.pulseDirection = 1;
        
        this.activity += this.pulseDirection * this.pulseSpeed;
        this.activity = Math.max(0, Math.min(1, this.activity));
      }
      
      draw(ctx: CanvasRenderingContext2D) {
        // Рисуем соединения
        for (const connection of this.connections) {
          const gradient = ctx.createLinearGradient(this.x, this.y, connection.x, connection.y);
          gradient.addColorStop(0, `rgba(110, 89, 165, ${this.activity * 0.7})`);
          gradient.addColorStop(1, `rgba(110, 89, 165, ${connection.activity * 0.7})`);
          
          ctx.beginPath();
          ctx.moveTo(this.x, this.y);
          ctx.lineTo(connection.x, connection.y);
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 1 + this.activity * 2;
          ctx.stroke();
        }
        
        // Рисуем узел
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * (0.7 + this.activity * 0.5), 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = 0.3 + this.activity * 0.7;
        ctx.fill();
        ctx.globalAlpha = 1;
        
        // Добавляем свечение
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * (0.7 + this.activity * 0.5), 0, Math.PI * 2);
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 2;
        ctx.stroke();
      }
    }
    
    // Создаем нейросеть
    const createNeuralNetwork = (width: number, height: number) => {
      const nodes: Node[] = [];
      const layers = 4; // Входной слой, 2 скрытых слоя, выходной слой
      const nodesPerLayer = [6, 8, 8, 4]; // Количество узлов в каждом слое
      
      // Создаем узлы
      for (let layer = 0; layer < layers; layer++) {
        for (let i = 0; i < nodesPerLayer[layer]; i++) {
          const x = layer * (width / (layers - 1));
          const y = height / 2 + (i - nodesPerLayer[layer] / 2 + 0.5) * (height / Math.max(...nodesPerLayer));
          const node = new Node(x, y, 10, layer);
          nodes.push(node);
        }
      }
      
      // Создаем соединения между слоями
      for (let layer = 0; layer < layers - 1; layer++) {
        const startIndices = nodes.filter(node => node.layer === layer);
        const endIndices = nodes.filter(node => node.layer === layer + 1);
        
        for (const startNode of startIndices) {
          for (const endNode of endIndices) {
            // Создаем соединение не для всех узлов, для более естественного вида
            if (Math.random() < 0.7) {
              startNode.connections.push(endNode);
            }
          }
        }
      }
      
      return nodes;
    };
    
    let nodes: Node[] = [];
    
    // Функция для инициализации анимации
    const init = () => {
      if (!canvas) return;
      nodes = createNeuralNetwork(canvas.width, canvas.height);
    };
    
    // Функция для активации начального слоя
    const activateInputLayer = () => {
      const inputNodes = nodes.filter(node => node.layer === 0);
      for (const node of inputNodes) {
        node.targetActivity = Math.random() > 0.3 ? Math.random() * 0.5 + 0.5 : Math.random() * 0.3;
      }
      
      // Запускаем активацию следующего слоя через некоторое время
      setTimeout(() => activateHiddenLayer(1), 500);
    };
    
    // Функция для активации скрытых слоев
    const activateHiddenLayer = (layer: number) => {
      const currentNodes = nodes.filter(node => node.layer === layer);
      
      for (const node of currentNodes) {
        // Находим входящие узлы
        const inputNodes = nodes.filter(n => n.connections.includes(node));
        if (inputNodes.length > 0) {
          // Активность текущего узла зависит от активности входящих узлов
          const avgActivity = inputNodes.reduce((sum, n) => sum + n.activity, 0) / inputNodes.length;
          node.targetActivity = Math.min(1, avgActivity * (1 + Math.random() * 0.5));
        }
      }
      
      // Если есть еще слои, активируем следующий
      if (layer < 3) {
        setTimeout(() => activateHiddenLayer(layer + 1), 500);
      } else {
        // После активации всех слоев сбрасываем активность и начинаем заново через паузу
        setTimeout(() => {
          for (const node of nodes) {
            node.targetActivity = 0;
          }
          setTimeout(activateInputLayer, 1000);
        }, 1000);
      }
    };
    
    // Функция для рендеринга
    const render = () => {
      if (!ctx || !canvas) return;
      
      // Очищаем canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Обновляем и рисуем узлы
      for (const node of nodes) {
        node.update();
      }
      
      // Рисуем соединения и узлы
      for (const node of nodes) {
        node.draw(ctx);
      }
      
      // Запрашиваем следующий кадр
      requestAnimationFrame(render);
    };
    
    // Запускаем анимацию
    init();
    activateInputLayer();
    render();
    
    // Очистка при размонтировании
    return () => {
      resizeObserver.disconnect();
    };
  }, []);
  
  return (
    <div className="w-full h-full min-h-[300px]">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};

export default AINetworkAnimation;
