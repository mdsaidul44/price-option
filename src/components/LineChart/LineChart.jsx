
import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

import { PieChart, Pie, ResponsiveContainer } from 'recharts';

const LineChart = () => {
   const mathMarksData = [
    { "id": 1, "name": "Alice", "math": 85, "physics": 78, "chemistry": 90 },
    { "id": 2, "name": "Bob", "math": 75, "physics": 70, "chemistry": 85 },
    { "id": 3, "name": "Charlie", "math": 90, "physics": 82, "chemistry": 88 },
    { "id": 4, "name": "David", "math": 65, "physics": 60, "chemistry": 75 },
    { "id": 5, "name": "Eve", "math": 80, "physics": 75, "chemistry": 92 },
    { "id": 6, "name": "Frank", "math": 70, "physics": 68, "chemistry": 80 },
    { "id": 7, "name": "Grace", "math": 95, "physics": 88, "chemistry": 94 },
    { "id": 8, "name": "Hannah", "math": 78, "physics": 72, "chemistry": 85 },
    { "id": 9, "name": "Ian", "math": 88, "physics": 82, "chemistry": 90 },
    { "id": 10, "name": "Jack", "math": 82, "physics": 76, "chemistry": 88 }
  ];


  const data01 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];

  const data02 = [
    { name: 'A1', value: 100 },
    { name: 'A2', value: 300 },
    { name: 'B1', value: 100 },
    { name: 'B2', value: 80 },
    { name: 'B3', value: 40 },
    { name: 'B4', value: 30 },
    { name: 'B5', value: 50 },
    { name: 'C1', value: 100 },
    { name: 'C2', value: 200 },
    { name: 'D1', value: 150 },
    { name: 'D2', value: 50 },
  ];
  
    return (
        <div>
           <div>
           <LChart width={800} height={400} data={mathMarksData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
            <Line dataKey="math" stroke='red'></Line>
            <Line dataKey="physics" stroke='yellow'></Line>
            </LChart>
           </div>
            <div className='h-96'>
                <ResponsiveContainer>
                    <PieChart width={400} height={400}> 
                    <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                        <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={90} fill="#82ca9d" label></Pie>
                    </PieChart>
                    </ResponsiveContainer> 
 
            </div>
        </div>
         
    );
};

export default LineChart;