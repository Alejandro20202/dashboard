import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import PaymentGoalCard from "@/components/PaymentGoalCard";
import EngagementChart from "@/components/EngagementChart";
import TotalBalanceCard from "@/components/TotalBalanceCard";
import CreditAmountCard from "@/components/CreditCard";
import MandatoryPayments from "@/components/MandatoryPayments";
import PaymentHistory from "@/components/PaymentHistory";
import { Calendar, Plus } from "lucide-react";

export default function Dashboard() {
  return (
    <div style={{ minHeight: "100vh", background: "#eef0ef", padding: "16px" }}>
      <Navbar />

      <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
        {/* Sidebar — hidden on mobile via CSS class */}
        <div className="sidebar-wrap">
          <Sidebar />
        </div>

        {/* Main content */}
        <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: "16px" }}>

          {/* Page header */}
          <div className="page-header">
            <h1 style={{ fontSize: "clamp(20px,3vw,30px)", fontWeight: 800, color: "#1a1a2e", letterSpacing: "-0.5px", lineHeight: 1.2 }}>
              Welcome Back,{" "}
              <span style={{ color: "#9ca3af", fontWeight: 400 }}>Sujon</span>
            </h1>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
              <button className="pill-btn" style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <Calendar size={13} color="#9ca3af" />
                <span className="date-text">29 Jun, 2025 – 29 Aug, 2025</span>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <button className="pill-btn pill-btn-dark" style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <Plus size={13} /> Add New Wallet
              </button>
            </div>
          </div>

          {/* Top row: 3 cards */}
          <div className="top-grid">
            <PaymentGoalCard />
            <EngagementChart />
            <TotalBalanceCard />
          </div>

          {/* Bottom row: history + right column */}
          <div className="bottom-grid">
            <PaymentHistory />
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <CreditAmountCard />
              <MandatoryPayments />
            </div>
          </div>

        </div>
      </div>

      <style>{`
        /* ── Sidebar ── */
        .sidebar-wrap { flex-shrink: 0; }

        /* ── Header ── */
        .page-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
        }

        /* ── Pill buttons ── */
        .pill-btn {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 999px;
          padding: 8px 16px;
          font-size: 13px;
          color: #4b5563;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
          font-weight: 500;
          white-space: nowrap;
        }
        .pill-btn-dark { color: #1a1a2e; font-weight: 600; }

        /* ── Grids ── */
        .top-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr 1fr;
          gap: 16px;
        }
        .bottom-grid {
          display: grid;
          grid-template-columns: 1.7fr 1fr;
          gap: 16px;
        }

        /* ── Responsive: tablet ── */
        @media (max-width: 1024px) {
          .top-grid {
            grid-template-columns: 1fr 1fr;
          }
          .top-grid > *:last-child {
            grid-column: 1 / -1;
          }
          .bottom-grid {
            grid-template-columns: 1fr;
          }
        }

        /* ── Responsive: mobile ── */
        @media (max-width: 640px) {
          .sidebar-wrap { display: none; }
          .top-grid {
            grid-template-columns: 1fr;
          }
          .top-grid > *:last-child {
            grid-column: auto;
          }
          .bottom-grid {
            grid-template-columns: 1fr;
          }
          .date-text { display: none; }
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }

        /* ── Navbar responsive helpers ── */
        .hidden-mobile { display: flex; }
        .show-mobile { display: none; }
      `}</style>
    </div>
  );
}
