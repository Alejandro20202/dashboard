"use client";
import { ArrowUpRight } from "lucide-react";

/* Credit card icon with chip look */
const CardIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="5" width="20" height="14" rx="3" stroke="#1f8a5b" strokeWidth="1.8"/>
    <path d="M2 10h20" stroke="#1f8a5b" strokeWidth="1.8"/>
    <rect x="5" y="13" width="4" height="2.5" rx="0.5" fill="#1f8a5b" opacity="0.5"/>
  </svg>
);

export default function CreditAmountCard() {
  return (
    <div style={{ background: "#fff", borderRadius: "20px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", padding: "20px" }}>
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "14px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{
            width: "38px", height: "38px", background: "#e8f5ee",
            borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <CardIcon />
          </div>
          <div>
            <p style={{ fontWeight: 700, fontSize: "13px", color: "#1a1a2e" }}>Amount of credit</p>
            <p style={{ fontSize: "11px", color: "#9ca3af", marginTop: "2px" }}>Total refund amount with fee</p>
          </div>
        </div>
        <button style={{ width: "30px", height: "30px", borderRadius: "50%", background: "#f5f7f6", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <ArrowUpRight size={14} color="#9ca3af" />
        </button>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <p style={{ fontWeight: 800, fontSize: "24px", color: "#1a1a2e" }}>
          $8,945.<span style={{ fontSize: "18px", fontWeight: 600 }}>89</span>
        </p>
        <span style={{ background: "#e8f5ee", color: "#1f8a5b", fontSize: "11px", fontWeight: 600, padding: "4px 10px", borderRadius: "999px" }}>
          +2.8%
        </span>
      </div>
    </div>
  );
}
