"use client";
import { ArrowUpRight, Wifi } from "lucide-react";

export default function PaymentGoalCard() {
  return (
    <div style={{
      background: "#fff", borderRadius: "20px",
      boxShadow: "0 4px 20px rgba(0,0,0,0.06)", padding: "20px",
      display: "flex", flexDirection: "column", gap: "16px",
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

      {/* VISA Card */}
      <div style={{
        background: "linear-gradient(135deg, #1f8a5b 0%, #0f5c38 100%)",
        borderRadius: "18px",
        padding: "18px 20px",
        position: "relative",
        overflow: "hidden",
        boxShadow: "0 10px 30px rgba(15,92,56,0.4)",
      }}>
        {/* Decorative blobs */}
        <div style={{
          position: "absolute", top: "-25px", right: "-25px",
          width: "100px", height: "100px",
          background: "rgba(255,255,255,0.08)", borderRadius: "50%",
        }} />
        <div style={{
          position: "absolute", bottom: "-35px", left: "-15px",
          width: "120px", height: "120px",
          background: "rgba(255,255,255,0.05)", borderRadius: "50%",
        }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
            <span style={{ color: "white", fontWeight: 800, fontSize: "20px", letterSpacing: "3px", fontStyle: "italic" }}>VISA</span>
            <Wifi size={18} color="rgba(255,255,255,0.7)" style={{ transform: "rotate(90deg)" }} />
          </div>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "11px", marginBottom: "4px" }}>Credit Card</p>
          <p style={{ color: "white", fontWeight: 700, fontSize: "20px", marginBottom: "16px" }}>$ 78,989.09</p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "12px", letterSpacing: "2px" }}>•••• 909090</span>
            <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "11px" }}>EXP 09/26</span>
          </div>
        </div>
      </div>

      {/* Weekly Revenue */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <p style={{ fontSize: "11px", color: "#9ca3af", marginBottom: "3px" }}>Weekly Revenue</p>
          <p style={{ fontWeight: 700, fontSize: "18px", color: "#1a1a2e" }}>+3,945 USD</p>
        </div>
        <span style={{
          background: "#e8f5ee", color: "#1f8a5b",
          fontSize: "11px", fontWeight: 600,
          padding: "4px 10px", borderRadius: "999px",
        }}>+12.8%</span>
      </div>
    </div>
  );
}
