"use client";

import { SignupForm } from "@/app/_components/SignupForm";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function page() {
  const router = useRouter();

  // Close modal when Escape is pressed
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") router.back();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [router]);

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Close if clicked on backdrop
    if (e.target === e.currentTarget) {
      router.back();
    }
  };

  return (
    <div style={backdropStyle} onClick={handleOutsideClick}>
      <div style={modalStyle}>
        <button onClick={() => router.back()} style={closeButtonStyle}>
          &times;
        </button>
        <SignupForm />
      </div>
    </div>
  );
}

// Styles (you can also move this to a CSS module if you want)
const backdropStyle: React.CSSProperties = {
  position: "fixed",
  inset: 0,
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const modalStyle: React.CSSProperties = {
  position: "relative",
  backgroundColor: "#fff",
  borderRadius: "8px",
  padding: "2rem",
  maxWidth: "400px",
  width: "90%",
  boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
};

const closeButtonStyle: React.CSSProperties = {
  position: "absolute",
  top: "0.5rem",
  right: "0.75rem",
  background: "none",
  border: "none",
  fontSize: "1.5rem",
  cursor: "pointer",
};
