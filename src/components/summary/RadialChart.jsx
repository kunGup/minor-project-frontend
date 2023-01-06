import React from 'react'
import { RadialBarChart, RadialBar, Legend } from "recharts";
import randomcolor from "randomcolor";

function RadialChart({ arr }) {
    const data = arr.map((obj) => {
      return {
        name: obj.algo,
        similarity: obj.similarity_score,
        fill: randomcolor({
          luminosity: "bright",
          hue: "blue",
        }),
      };
    });
    data.push({
      name: "original text",
      similarity: 1,
      fill: randomcolor({
        luminosity: "bright",
        hue: 'blue'
      }),
    });
  return (
    <div>
    <RadialBarChart
      width={420}
      height={320}
      innerRadius={20}
      outerRadius={140}
      startAngle={0}
      endAngle={180}
      data={data}
    >
      <RadialBar
        minAngle={0}
        label={{ position: "insideEnd", fill: "#000" }}
        background
        clockWise
        dataKey="similarity"
      />
      <Legend
        iconSize={10}
        width={120}
        height={140}
        layout="vertical"
        verticalAlign="middle"
        wrapperStyle={{
          top: 0,
          right: 0,
          lineHeight: "20px",
        }}
      />
    </RadialBarChart>
    </div>
  );
}

export default RadialChart