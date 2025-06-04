import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
    Legend, ResponsiveContainer, Cell
 } from 'recharts'

const CustomBarChart = () => {

    // function to alternate Colors
    const getBarColor = (entry) => {
        switch (entry?.priority) {
            case 'Low':
                return '#00BC7D'

            case 'Medium':
                return '#FE9900'
            
            case 'High':
                return '#FF1f57'

            default:
                return '#00BC7D'
        }
    };

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className='bg-white shadow-md rounded-lg p-2 border border-gray-300'>
                    <p className='text-xs font-semibold text-purple-800 mb-1'>
                        {payload[0].payload.priority}
                    </p>
                    <p className='text-sm text-gray-600'>
                        Count:{" "}
                        <span className='text-sm font-medium text-gray-900'>
                            {payload[0].payload.count}
                        </span>
                    </p>
                </div>
            )
        }
        return null;
    }

  return (
    <div>
        <ResponsiveContainer>
            <BarChart>
                <CartesianGrid>
                    <XAxis />
                    <YAxis />
                </CartesianGrid>
            </BarChart>
        </ResponsiveContainer>
    </div>
  )
}

export default CustomBarChart