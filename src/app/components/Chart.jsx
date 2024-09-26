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
  
  // Relatable colors for the weight loss journey (darker to lighter shades)
  const colors = {
    'Start Weight': 'rgb(94, 234, 212)', // Darker blue for start weight
    'Current Weight': 'rgb(94, 234, 212)', // Intermediate teal for current weight
    'Goal Weight': 'rgb(94, 234, 212)', // Light green for goal weight
  };

  return (
    <div className='w-full max-w-3xl mx-auto p-4 bg-gray-100 rounded-lg text-gray-800'>
      <h2 className='text-2xl font-bold mb-4 text-center text-offblack'>
        {title}
      </h2>
      <div className='w-full h-[300px]'>
        <ResponsiveContainer width='100%' height='100%'>
          <BarChart data={data}>
            <XAxis dataKey='name' />
            <YAxis domain={['dataMin - 5', 'dataMax + 5']} />
            <Tooltip />
            <Bar dataKey='weight' radius={[4, 4, 0, 0]}>
              {data.map((entry, index) => (
                <React.Fragment key={`${entry.name}-${index}`}>
                  <Cell fill={colors[entry.name]} />
                  <text
                    x={index * (100 / 3) + 100 / 6}
                    y={entry.weight > 5 ? entry.weight : 10} // Ensures labels don't overlap with the bottom
                    textAnchor='middle'
                    dy={-10}
                    fill='#555'
                    fontSize={12}
                  >
                    {entry.weight}
                  </text>
                </React.Fragment>
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
