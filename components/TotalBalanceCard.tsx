"use client";
import { ArrowUpRight, ArrowUp, ArrowDown } from "lucide-react";
import { AreaChart, Area, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { v: 18000 }, { v: 22000 }, { v: 19000 }, { v: 26000 },
  { v: 24000 }, { v: 29000 }, { v: 27000 }, { v: 32678 },
];

export default function TotalBalanceCard() {
  return (
    <div style={{
      background: "#fff", borderRadius: "20px",
      boxShadow: "0 4px 20px rgba(0,0,0,0.06)", padding: "20px",
      display: "flex", flexDirection: "column",
    }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
        <div>
          <p style={{ fontWeight: 700, fontSize: "14px", color: "#1a1a2e" }}>Payment Goal</p>
          <p style={{ fontSize: "12px", color: "#9ca3af", marginTop: "2px" }}>Total amount goal</p>
        </div>
        <button style={{
          width: "30px", height: "30px", borderRadius: "50%",
          background: "#f5f7f6", border: "none", cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <ArrowUpRight size={14} color="#9ca3af" />
        </button>
      </div>

      {/* Balance */}
      <p style={{ fontSize: "11px", color: "#9ca3af", marginTop: "16px" }}>Total Balance</p>
      <p style={{ fontWeight: 800, fontSize: "26px", color: "#1a1a2e", marginTop: "4px", letterSpacing: "-0.5px" }}>
        $32,678.<span style={{ fontSize: "18px", fontWeight: 600 }}>90</span>
      </p>

      {/* Area chart */}
      <div style={{ margin: "14px -4px 0" }}>
        <ResponsiveContainer width="100%" height={70}>
          <AreaChart data={data} margin={{ top: 4, right: 4, left: 4, bottom: 0 }}>
            <defs>
              <linearGradient id="balGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1f8a5b" stopOpacity={0.2} />
                <stop offset="100%" stopColor="#1f8a5b" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Tooltip hide />
            <Area type="monotone" dataKey="v" stroke="#1f8a5b" strokeWidth={2.5}
              fill="url(#balGrad)" dot={false} />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Buttons */}
      <div style={{ display: "flex", gap: "10px", marginTop: "16px" }}>
        <button style={{
          flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "6px",
          background: "#1f8a5b", color: "white", border: "none", cursor: "pointer",
          borderRadius: "999px", padding: "11px 0", fontSize: "13px", fontWeight: 600,
          boxShadow: "0 6px 18px rgba(31,138,91,0.35)", transition: "all 0.2s",
        }}>
          <ArrowUp size={14} /> Send
        </button>
        <button style={{
          flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "6px",
          background: "#f5f7f6", color: "#374151", border: "none", cursor: "pointer",
          borderRadius: "999px", padding: "11px 0", fontSize: "13px", fontWeight: 600,
          transition: "all 0.2s",
        }}>
          <ArrowDown size={14} /> Receive
        </button>
      </div>
    </div>
  );
}
