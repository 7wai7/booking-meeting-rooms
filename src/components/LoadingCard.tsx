export default function LoadingCard() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "auto",
          alignItems: "center",
          gap: "16px",
          color: "#e5e7eb",
        }}
      >
        {/* Spinner */}
        <div
          style={{
            width: "3rem",
            height: "3rem",
            border: "4px solid #1e293b",
            borderTop: "4px solid #2563eb",
            borderRadius: "50%",
            animation: "spin 1s linear infinite",
          }}
        />

        <div style={{ fontSize: "1.3rem", fontWeight: 500, color: "black" }}>
          Loading…
        </div>
      </div>

      {/* keyframes */}
      <style>
        {`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}
      </style>
    </>
  );
}
