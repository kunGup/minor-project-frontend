import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import randomcolor from "randomcolor";

function BiaxialChart({arr}) {
    const data = arr.map((obj) => {
      return {
        name: obj.algo,
        "Time in sec": obj.execution_time,
        words: obj.words
      };
    });
    
  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
      <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
      <Tooltip />
      <Legend />
      <Bar yAxisId="left" dataKey="Time in sec" fill="#8884d8" />
      <Bar yAxisId="right" dataKey="words" fill="#82ca9d" />
    </BarChart>
  );
}

export default BiaxialChart