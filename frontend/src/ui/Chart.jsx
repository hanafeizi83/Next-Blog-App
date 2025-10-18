"use client";
import { useAuth } from 'context/AuthContext';
import { useDarkmode } from 'context/DarkModeContext';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';

const COLORS = ["#e36954", "#92a7ff"];
export default function Chart() {
  const { user } = useAuth();
const {isDarkmode}=useDarkmode();
  const likes = user?.likedPosts?.length ?? 0;
  const saves = user?.bookmarkedPosts?.length ?? 0;
  const total = likes + saves;

  const data =
    total > 0
      ? [
        { name: "لایک شده ها", value: (likes / total) * 100 },
        { name: "ذخیره شده ها", value: (saves / total) * 100 },
      ]
      : [
        { name: "لایک شده ها", value: 0 },
        { name: "ذخیره شده ها", value: 0 },
      ];

  if (!user) {
    return <div>در حال بارگذاری اطلاعات...</div>;
  }

  if (total === 0) {
    return <div>هیچ پستی لایک یا ذخیره نشده است.</div>;
  }
  return (
    <div className='col-span-5 md:col-span-2 col-start-1 row-start-3  md:col-start-1 md:row-start-2 space-y-1' style={{ width: "100%", height: 300 }}>
      <h2 className='font-medium text-xl text-secondary-800'>آمار بلاگ های ذخیره شده و لایک شده</h2>
      <ResponsiveContainer width="100%" height="100%" className={'bg-secondary-0 shadow-md rounded-3xl'}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={120}
            fill="#8884d8"
            label={(entry) => (
              <text
                fill={`${isDarkmode ? '#fff':'#000'}`}     
                fontSize={16}        
                x={entry.x}
                y={entry.y}
                textAnchor="middle"
                dominantBaseline="central"
              >
                {`${entry.name}: ${entry.value.toFixed(1)}%`}
              </text>
            )}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${entry.name}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
