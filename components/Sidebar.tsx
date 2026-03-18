"use client";
import { LayoutGrid, BarChart2, Wallet, CreditCard, ArrowLeftRight, Mail, Clock, Settings, LogOut } from "lucide-react";
import { useState } from "react";

const topIcons = [
  { icon: LayoutGrid, label: "Dashboard" },
  { icon: BarChart2, label: "Reports" },
  { icon: Wallet, label: "Wallet" },
  { icon: CreditCard, label: "Cards" },
  { icon: ArrowLeftRight, label: "Transfer" },
  { icon: Mail, label: "Messages" },
  { icon: Clock, label: "History" },
];

export default function Sidebar() {
  const [active, setActive] = useState(0);

  return (
    <aside style={{
      width: "64px",
      background: "#fff",
      borderRadius: "20px",
      boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "20px 0",
      flexShrink: 0,
    }} className="sidebar-desktop">
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
        {topIcons.map(({ icon: Icon, label }, i) => (
          <button
            key={i}
            title={label}
            onClick={() => setActive(i)}
            style={{
              width: "44px", height: "44px",
              display: "flex", alignItems: "center", justifyContent: "center",
              borderRadius: "14px",
              background: active === i ? "#1f8a5b" : "transparent",
              color: active === i ? "#fff" : "#9ca3af",
              border: "none", cursor: "pointer",
              transition: "all 0.2s",
              boxShadow: active === i ? "0 6px 18px rgba(31,138,91,0.35)" : "none",
            }}
          >
            <Icon size={20} />
          </button>
        ))}
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
        {[{ icon: Settings, label: "Settings" }, { icon: LogOut, label: "Logout" }].map(({ icon: Icon, label }, i) => (
          <button key={i} title={label} style={{
            width: "44px", height: "44px",
            display: "flex", alignItems: "center", justifyContent: "center",
            borderRadius: "14px", background: "transparent",
            color: "#9ca3af", border: "none", cursor: "pointer",
            transition: "all 0.2s",
          }}>
            <Icon size={20} />
          </button>
        ))}
      </div>
    </aside>
  );
}
