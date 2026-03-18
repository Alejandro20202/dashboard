"use client";
import { Search, Bell } from "lucide-react";
import { useState } from "react";

const navLinks = ["Dashboard", "Reports", "Documents", "History", "Contacts"];

export default function Navbar() {
  const [active, setActive] = useState("Dashboard");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={{
      background: "#fff",
      borderRadius: "20px",
      boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
      padding: "0 24px",
      height: "64px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "20px",
      position: "relative",
    }}>
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px", flexShrink: 0 }}>
        <div style={{
          width: "36px", height: "36px", borderRadius: "10px",
          background: "#1f8a5b", display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          {/* Q icon */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="11" r="6" stroke="white" strokeWidth="2"/>
            <path d="M15.5 15.5L19 19" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
        <span style={{ fontWeight: 700, fontSize: "16px", color: "#1a1a2e" }}>Quixotic</span>
      </div>

      {/* Desktop nav links */}
      <div style={{ display: "flex", alignItems: "center", gap: "28px" }} className="hidden-mobile">
        {navLinks.map((link) => (
          <button key={link} onClick={() => setActive(link)} style={{
            fontSize: "14px",
            fontWeight: active === link ? 600 : 400,
            color: active === link ? "#1a1a2e" : "#9ca3af",
            background: "none", border: "none", cursor: "pointer",
            transition: "color 0.2s",
            padding: "4px 0",
            borderBottom: active === link ? "2px solid #1f8a5b" : "2px solid transparent",
          }}>
            {link}
          </button>
        ))}
      </div>

      {/* Right actions */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
        <button style={{
          width: "36px", height: "36px", borderRadius: "50%",
          background: "#f5f7f6", border: "none", cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center", color: "#6b7280",
        }}>
          <Search size={16} />
        </button>
        <button style={{
          width: "36px", height: "36px", borderRadius: "50%",
          background: "#f5f7f6", border: "none", cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center",
          color: "#6b7280", position: "relative",
        }}>
          <Bell size={16} />
          <span style={{
            position: "absolute", top: "7px", right: "7px",
            width: "8px", height: "8px", background: "#ef4444",
            borderRadius: "50%", border: "1.5px solid white",
          }} />
        </button>
        <div style={{
          width: "36px", height: "36px", borderRadius: "50%",
          background: "linear-gradient(135deg,#f59e0b,#ea580c)",
          display: "flex", alignItems: "center", justifyContent: "center",
          color: "white", fontWeight: 700, fontSize: "14px", cursor: "pointer",
          boxShadow: "0 4px 10px rgba(234,88,12,0.3)",
        }}>S</div>

        {/* Hamburger for mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="show-mobile"
          style={{ background: "none", border: "none", cursor: "pointer", color: "#6b7280", display: "none" }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div style={{
          position: "absolute", top: "68px", left: 0, right: 0,
          background: "#fff", borderRadius: "16px", padding: "12px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.1)", zIndex: 100,
        }}>
          {navLinks.map((link) => (
            <button key={link} onClick={() => { setActive(link); setMenuOpen(false); }} style={{
              display: "block", width: "100%", textAlign: "left",
              padding: "10px 14px", borderRadius: "10px",
              fontSize: "14px", fontWeight: active === link ? 600 : 400,
              color: active === link ? "#1f8a5b" : "#6b7280",
              background: active === link ? "#e8f5ee" : "none",
              border: "none", cursor: "pointer",
            }}>{link}</button>
          ))}
        </div>
      )}
    </nav>
  );
}
