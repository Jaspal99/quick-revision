import { createPortal } from "react-dom";

export default function Modal({ children }: { children: React.ReactNode }) {
  const root = document.getElementById("modal-root");

  if (!root) {
    throw new Error("Modal root element not found");
  }

  return createPortal(
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "5px",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        {children}
      </div>
    </div>,
    root,
  );
}
