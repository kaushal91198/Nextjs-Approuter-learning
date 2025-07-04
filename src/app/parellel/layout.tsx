// app/layout.tsx
import React from "react";

export default function RootLayout({
  children,
  feed,
  ads,
}: {
  children: React.ReactNode;
  feed: React.ReactNode;
  ads: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <h1>🏠 Dashboard Layout</h1>
        <div style={{ display: "flex", gap: "20px" }}>
          <div style={{ flex: 2, border: "1px solid blue", padding: "10px" }}>
            <h2>📢 Feed</h2>
            {feed}
          </div>
          <div style={{ flex: 1, border: "1px solid green", padding: "10px" }}>
            <h2>🧲 Ads</h2>
            {ads}
          </div>
        </div>
        <div style={{ marginTop: "30px", borderTop: "1px dashed gray", paddingTop: "10px" }}>
          <h2>📄 Main Page Content</h2>
          {children}
        </div>
      </body>
    </html>
  );
}
