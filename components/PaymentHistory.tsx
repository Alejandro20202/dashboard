"use client";
import { ArrowUpRight } from "lucide-react";

const DribbbleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" fill="#ea4c89"/>
    <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const AmazonIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24">
    <rect width="24" height="24" rx="4" fill="#FF9900"/>
    <text x="12" y="16" textAnchor="middle" fontSize="11" fontWeight="800" fill="#1a1a2e" fontFamily="Arial">a</text>
    <path d="M6 17c2.5 1.5 5.5 2 9 1" stroke="#1a1a2e" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M14 17l1.5.8-.8 1.5" stroke="#1a1a2e" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const payments = [
  { name: "Dribbble Design", change: "+18.67%", date: "16 Jun 2025", time: "10:30 PM", status: "Successful", amount: "89,345.23 USD", icon: <DribbbleIcon /> },
  { name: "Google Pay", change: "+9.34%", date: "15 Jun 2025", time: "11:45 PM", status: "Successful", amount: "12,345.89 USD", icon: <GoogleIcon /> },
  { name: "Amazon Shopping", change: "+12.23%", date: "14 Jun 2025", time: "10:15 PM", status: "Successful", amount: "32,123.67 USD", icon: <AmazonIcon /> },
];

export default function PaymentHistory() {
  return (
    <div style={{ background: "#fff", borderRadius: "20px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", padding: "20px" }}>
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px" }}>
        <div>
          <p style={{ fontWeight: 700, fontSize: "14px", color: "#1a1a2e" }}>Payment History</p>
          <p style={{ fontSize: "12px", color: "#9ca3af", marginTop: "2px" }}>Recent payments history</p>
        </div>
        <button style={{ width: "30px", height: "30px", borderRadius: "50%", background: "#f5f7f6", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <ArrowUpRight size={14} color="#9ca3af" />
        </button>
      </div>
      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "480px" }}>
          <thead>
            <tr>
              {["Name", "Date", "Time", "Status", "Amount"].map((h) => (
                <th key={h} style={{ textAlign: h === "Amount" ? "right" : "left", paddingBottom: "12px", fontSize: "11px", color: "#9ca3af", fontWeight: 500, borderBottom: "1px solid #f0f2f1" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {payments.map((p, i) => (
              <tr key={i} style={{ borderBottom: i < payments.length - 1 ? "1px solid #f5f7f6" : "none" }}>
                <td style={{ padding: "14px 0" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div style={{ width: "38px", height: "38px", borderRadius: "50%", background: "#f9fafb", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 2px 8px rgba(0,0,0,0.07)" }}>
                      {p.icon}
                    </div>
                    <div>
                      <p style={{ fontWeight: 600, fontSize: "13px", color: "#1a1a2e" }}>{p.name}</p>
                      <p style={{ fontSize: "11px", color: "#1f8a5b", marginTop: "2px" }}>{p.change}</p>
                    </div>
                  </div>
                </td>
                <td style={{ fontSize: "12px", color: "#6b7280", padding: "14px 8px 14px 0", whiteSpace: "nowrap" }}>{p.date}</td>
                <td style={{ fontSize: "12px", color: "#6b7280", padding: "14px 8px 14px 0", whiteSpace: "nowrap" }}>{p.time}</td>
                <td style={{ padding: "14px 8px 14px 0" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                    <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#22c55e", display: "inline-block" }} />
                    <span style={{ fontSize: "12px", color: "#16a34a", fontWeight: 500 }}>{p.status}</span>
                  </div>
                </td>
                <td style={{ textAlign: "right", fontSize: "12px", fontWeight: 700, color: "#1a1a2e", padding: "14px 0", whiteSpace: "nowrap" }}>{p.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
