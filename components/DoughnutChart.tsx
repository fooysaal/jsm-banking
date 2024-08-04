"use client"
import { Doughnut } from 'react-chartjs-2'
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({accounts}: DoughnutChartProps) => {
    const data = {
        datasets: [
            {
                label: 'Banks',
                data: [12500, 23511, 52150],
                backgroundColor: ['#0747b6', '#f7b500', '#f70000'],
            }
        ],
        labels: ['Bank 1', 'Bank 2', 'Bank 3']
    }

  return (
    <Doughnut 
        data={data} 
        options={{
            cutout: '60%',
            plugins: {
                legend: {
                    display: false
                }
            }
        }}
    />
  )
}

export default DoughnutChart