
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Компонент для атома с определенным цветом
const Atom = ({ position, color, size = 0.4 }: { position: THREE.Vector3, color: string, size?: number }) => {
  return (
    <mesh position={position}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial color={color} roughness={0.3} metalness={0.7} />
    </mesh>
  );
};

// Компонент для связи между атомами
const Bond = ({ start, end, color = "#ffffff" }: { start: THREE.Vector3, end: THREE.Vector3, color?: string }) => {
  // Вычисляем направление связи
  const direction = new THREE.Vector3().subVectors(end, start);
  const midPoint = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);
  const length = direction.length();
  
  // Нормализуем направление для правильного поворота
  direction.normalize();
  
  // Создаем кватернион для вращения
  const quaternion = new THREE.Quaternion();
  quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction);
  
  return (
    <mesh position={midPoint} quaternion={quaternion}>
      <cylinderGeometry args={[0.05, 0.05, length, 12]} />
      <meshStandardMaterial color={color} roughness={0.3} metalness={0.4} />
    </mesh>
  );
};

// Компонент для двойной связи
const DoubleBond = ({ start, end, color = "#ffffff", offset = 0.1 }: { 
  start: THREE.Vector3, 
  end: THREE.Vector3, 
  color?: string, 
  offset?: number 
}) => {
  // Вычисляем направление связи
  const direction = new THREE.Vector3().subVectors(end, start);
  const perp = new THREE.Vector3(-direction.z, 0, direction.x).normalize().multiplyScalar(offset);
  
  const start1 = new THREE.Vector3().addVectors(start, perp);
  const end1 = new THREE.Vector3().addVectors(end, perp);
  
  const start2 = new THREE.Vector3().subVectors(start, perp);
  const end2 = new THREE.Vector3().subVectors(end, perp);
  
  return (
    <>
      <Bond start={start1} end={end1} color={color} />
      <Bond start={start2} end={end2} color={color} />
    </>
  );
};

// Полная модель бензола
const BenzeneMolecule = ({ rotate = true }: { rotate?: boolean }) => {
  const groupRef = useRef<THREE.Group>(null);
  
  // Вращение модели
  useFrame(({ clock }) => {
    if (groupRef.current && rotate) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.2;
      groupRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.3) * 0.2;
    }
  });
  
  // Расчет позиций для атомов
  const radius = 1.2;
  const atomPositions: THREE.Vector3[] = [];
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 3) * i;
    atomPositions.push(new THREE.Vector3(
      radius * Math.cos(angle),
      0,
      radius * Math.sin(angle)
    ));
  }
  
  // Атомы водорода расположены по периферии
  const hydrogenPositions = atomPositions.map((pos) => {
    return new THREE.Vector3(
      pos.x * 1.35,
      0,
      pos.z * 1.35
    );
  });
  
  return (
    <group ref={groupRef}>
      {/* Атомы углерода */}
      {atomPositions.map((pos, i) => (
        <Atom key={`carbon-${i}`} position={pos} color="#444444" />
      ))}
      
      {/* Атомы водорода */}
      {hydrogenPositions.map((pos, i) => (
        <Atom key={`hydrogen-${i}`} position={pos} color="#ffffff" size={0.25} />
      ))}
      
      {/* Химические связи углерод-углерод (чередуются одинарные и двойные) */}
      {atomPositions.map((pos, i) => {
        const nextIndex = (i + 1) % atomPositions.length;
        return i % 2 === 0 ? (
          <Bond 
            key={`carbon-bond-${i}`}
            start={pos} 
            end={atomPositions[nextIndex]}
            color="#777777"
          />
        ) : (
          <DoubleBond 
            key={`carbon-double-bond-${i}`}
            start={pos} 
            end={atomPositions[nextIndex]}
            color="#777777"
          />
        );
      })}
      
      {/* Связи углерод-водород */}
      {atomPositions.map((carbon, i) => (
        <Bond 
          key={`hydrogen-bond-${i}`}
          start={carbon} 
          end={hydrogenPositions[i]}
          color="#777777"
        />
      ))}
    </group>
  );
};

interface BenzeneModelProps {
  height?: string;
  interactive?: boolean;
}

const BenzeneModel: React.FC<BenzeneModelProps> = ({ 
  height = "400px", 
  interactive = true
}) => {
  return (
    <div style={{ height, width: '100%' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#7E69AB" />
        <BenzeneMolecule rotate={!interactive} />
        {interactive && <OrbitControls enablePan={false} enableZoom={true} />}
      </Canvas>
    </div>
  );
};

export default BenzeneModel;
