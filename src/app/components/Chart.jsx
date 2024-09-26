'use client';

import React from 'react';
import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from 'recharts';

export default function WeightLossChart({
  currentWeight,
  startWeight,
  goalWeight,
  title = 'Weight Loss Progress',
}) {
  const data = [
    { name: 'Start Weight', weight: startWeight },
    { name: 'Current Weight', weight: currentWeight },
    { name: 'Goal Weight', weight: goalWeight },
  ];

  const colors = {
    'Start Weight': 'hsla(4, 100%, 50%, 1)', // Red
    'Current Weight': 'hsla(226, 100%, 50%, 1)', // Blue
    'Goal Weight': 'hsla(123, 100%, 50%, 1)', // Green
  };

  return (
    <div className='w-full max-w-3xl mx-auto p-4 bg-white rounded-lg shadow-md'>
      <h2 className='text-xl font-bold mb-4 text-center'>{title}</h2>
      <div className='w-full h-[300px]'>
        <ResponsiveContainer width='100%' height='100%'>
          <BarChart data={data}>
            <XAxis dataKey='name' />
            <YAxis domain={['dataMin - 5', 'dataMax + 5']} />
            <Tooltip />
            <Legend />
            <Bar dataKey='weight' radius={[4, 4, 0, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[entry.name]} />
              ))}
              {data.map((entry, index) => (
                <text
                  x={index * (100 / 3) + 100 / 6}
                  y={entry.weight}
                  textAnchor='middle'
                  dy={-10}
                  fill='#333'
                  fontSize={12}
                  key={`label-${index}`}
                >
                  {entry.weight}
                </text>
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
