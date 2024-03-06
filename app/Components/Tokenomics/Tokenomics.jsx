'use client'

import React from 'react'
import {
    Pie,
    Legend,
    Cell,
    ResponsiveContainer,
    Label
} from "recharts";
import dynamic from "next/dynamic";

export default function Tokenomics() {
    const PieChart = dynamic(() => (
        import("recharts").then(recharts => recharts.PieChart)
    ), { ssr: false });

    const data = [
        { name: "Foundation", value: 20 },
        { name: "Crowdsale Investor", value: 80 },
    ];

    const COLORS = ['#FBA834', '#387ADF'];

    // Calculate total value
    const totalValue = data.reduce((acc, { value }) => acc + value, 0);

    return (
        <div className='w-full md:flex flex-col gap-4 p-6 bg-white hidden'>
            <h1 className='text-2xl font-semibold pb-[10px]'>Tokenomics</h1>

            <h1 className='text-lg font-semibold'>Initial Distribution</h1>

            <div className='flex gap-4 items-center'>
                {data && <PieChart width={400} height={400}>
                    <Legend layout="vertical" verticalAlign="middle" align="right" />
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={100}
                        innerRadius={70}
                        fill="#8884d8"
                        dataKey="value">
                        {data.map((entry, index) => (
                            <Cell
                                radius={"100%"}
                                values={entry.value + "%"}
                                key={`cell-${index}`}
                                fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>}
            </div>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam veniam odit quae in, nihil quam minus placeat. Officia voluptates recusandae modi aliquam cum pariatur illum quis temporibus facere explicabo. Earum omnis itaque saepe labore dolorum accusantium, cumque sunt qui molestias quis quisquam accusamus dolores repellendus dolorem non velit architecto reiciendis ab quia necessitatibus, error neque odio at in? Omnis numquam ratione odio fugiat neque. Sit tempora nemo enim amet, reprehenderit quo aperiam tenetur distinctio tempore magni quaerat facilis voluptas unde dolores. Architecto unde hic vero saepe harum ducimus recusandae quae iusto, quia blanditiis cumque esse dolores, a corrupti, laboriosam quidem?</div>
        </div>
    )
}
