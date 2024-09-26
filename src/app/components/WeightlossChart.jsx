import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const WeightLossChart = ({ startWeight, currentWeight, goalWeight }) => {
  const data = {
    labels: ['Start Weight', 'Current Weight', 'Goal Weight'],
    datasets: [
      {
        label: 'Weight (kg)',
        data: [startWeight, currentWeight, goalWeight],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)', // Start Weight color
          'rgba(54, 162, 235, 0.2)', // Current Weight color
          'rgba(75, 192, 192, 0.2)', // Goal Weight color
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default WeightLossChart;
