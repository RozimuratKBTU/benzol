
import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

interface DataPoint {
  name: string;
  classic: number;
  ai: number;
}

interface ResultsChartProps {
  data: DataPoint[];
}

const ResultsChart: React.FC<ResultsChartProps> = ({ data }) => {
  return (
    <div className="w-full h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="name" stroke="#888" />
          <YAxis stroke="#888" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              border: 'none'
            }} 
          />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="classic" 
            name="Классикалық модель" 
            stroke="#7E69AB" 
            activeDot={{ r: 8 }}
            strokeWidth={2} 
          />
          <Line 
            type="monotone" 
            dataKey="ai" 
            name="ИИ модель" 
            stroke="#F97316" 
            activeDot={{ r: 8 }}
            strokeWidth={2} 
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ResultsChart;
