"use client";
import { ArrowUpRight } from "lucide-react";

/* Realistic avatar faces using SVG */
const Avatar = ({ bg, seed }: { bg: string; seed: number }) => (
  <svg width="40" height="40" viewBox="0 0 40 40">
    <circle cx="20" cy="20" r="20" fill={bg}/>
    {/* Hair */}
    <ellipse cx="20" cy="13" rx="8" ry="7" fill="rgba(0,0,0,0.35)"/>
    {/* Face */}
    <circle cx="20" cy="22" r="9" fill="#FDDBB4"/>
    {/* Eyes */}
    <circle cx={seed % 2 === 0 ? 17 : 16} cy="21" r="1.3" fill="#333"/>
    <circle cx={seed % 2 === 0 ? 23 : 24} cy="21" r="1.3" fill="#333"/>
    {/* Smile */}
    <path d="M17 25 Q20 27.5 23 25" stroke="#c0845a" strokeWidth="1" fill="none" strokeLinecap="round"/>
  </svg>
);

const avatars = [
  { bg: "#f59e0b", seed: 0 },
  { bg: "#3b82f6", seed: 1 },
  { bg: "#10b981", seed: 2 },
  { bg: "#8b5cf6", seed: 3 },
];

export default function MandatoryPayments() {
  return (
    <div style={{ background: "#fff", borderRadius: "20px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", padding: "20px" }}>
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px" }}>
        <div>
          <p style={{ fontWeight: 700, fontSize: "13px", color: "#1a1a2e" }}>Mandatory Payments</p>
          <p style={{ fontSize: "11px", color: "#9ca3af", marginTop: "2px" }}>Recent payments</p>
        </div>
        <button style={{ width: "30px", height: "30px", borderRadius: "50%", background: "#f5f7f6", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <ArrowUpRight size={14} color="#9ca3af" />
        </button>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        {avatars.map((a, i) => (
          <div key={i} style={{
            width: "42px", height: "42px", borderRadius: "50%",
            border: "2.5px solid white",
            marginLeft: i > 0 ? "-12px" : "0",
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            zIndex: avatars.length - i,
            position: "relative",
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <Avatar bg={a.bg} seed={a.seed} />
          </div>
        ))}
        <div style={{
          width: "42px", height: "42px", borderRadius: "50%",
          background: "#1f8a5b",
          display: "flex", alignItems: "center", justifyContent: "center",
          color: "white", fontWeight: 700, fontSize: "12px",
          border: "2.5px solid white",
          marginLeft: "-12px",
          boxShadow: "0 4px 12px rgba(31,138,91,0.35)",
          position: "relative", zIndex: 0, flexShrink: 0,
        }}>+2</div>
      </div>
    </div>
  );
}
