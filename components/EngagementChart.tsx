"use client";
import { ArrowUpRight, LayoutGrid } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, LabelList } from "recharts";

const data = [
  { month: "JAN", value: 1800 },
  { month: "FEB", value: 2500 },
  { month: "MAR", value: 2200 },
  { month: "APR", value: 4800 },
  { month: "MAY", value: 3500 },
  { month: "JUN", value: 3000 },
];

const CustomLabel = (props: any) => {
  const { x, y, width, index } = props;
  if (index !== 3) return null;
  const cx = x + width / 2;
  return (
    <g>
      {/* Bubble */}
      <rect x={cx - 24} y={y - 32} width={48} height={22} rx={11} fill="#1f8a5b" />
      <text x={cx} y={y - 17} textAnchor="middle" fill="white" fontSize={10} fontWeight={700}>+17.8%</text>
      {/* Dot on top of bar */}
      <circle cx={cx} cy={y} r={5} fill="white" stroke="#1f8a5b" strokeWidth={2} />
    </g>
  );
};

export default function EngagementChart() {
  return (
    <div style={{
      background: "#fff", borderRadius: "20px",
      boxShadow: "0 4px 20px rgba(0,0,0,0.06)", padding: "20px",
    }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{
            width: "34px", height: "34px", background: "#f5f7f6",
            borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <LayoutGrid size={16} color="#6b7280" />
          </div>
          <span style={{ fontWeight: 700, fontSize: "14px", color: "#1a1a2e" }}>Engagement Rate</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <button style={{
            fontSize: "12px", color: "#9ca3af", padding: "5px 12px",
            borderRadius: "999px", background: "transparent", border: "none", cursor: "pointer",
          }}>Monthly</button>
          <button style={{
            fontSize: "12px", color: "white", padding: "5px 12px",
            borderRadius: "999px", background: "#1f8a5b", border: "none", cursor: "pointer",
            fontWeight: 600, boxShadow: "0 4px 12px rgba(31,138,91,0.3)",
          }}>Annually</button>
          <button style={{
            width: "30px", height: "30px", borderRadius: "50%",
            background: "#f5f7f6", border: "none", cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <ArrowUpRight size={14} color="#9ca3af" />
          </button>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={data} barSize={40} margin={{ top: 40, right: 4, left: -20, bottom: 0 }}>
          <XAxis dataKey="month" axisLine={false} tickLine={false}
            tick={{ fontSize: 11, fill: "#9ca3af", fontWeight: 500 }} />
          <YAxis axisLine={false} tickLine={false}
            tick={{ fontSize: 11, fill: "#9ca3af" }}
            tickFormatter={(v) => `${v / 1000}k`} />
          <Tooltip
            cursor={false}
            contentStyle={{ borderRadius: "12px", border: "none", boxShadow: "0 8px 20px rgba(0,0,0,0.1)", fontSize: "12px" }}
            formatter={(value: number) => [`${value.toLocaleString()}`, ""]}
          />
          <Bar dataKey="value" radius={[10, 10, 10, 10]}>
            <LabelList content={<CustomLabel />} />
            {data.map((entry, index) => (
              <Cell key={index} fill={entry.month === "APR" ? "#1f8a5b" : "#d4eddf"} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
