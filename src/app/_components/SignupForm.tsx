"use client"
import React, { useState } from "react";

export function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Add your login logic here
    alert(`Logging in with:\nEmail: ${email}\nPassword: ${password}`);
  };

  return (
    <div style={styles.card}>
      <h2 style={styles.title}>Signup</h2>
      <p style={styles.description}>
        Enter your email below to login to your account.
      </p>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label htmlFor="email" style={styles.label}>
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="m@example.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="password" style={styles.label}>
            Password
          </label>
          <input
            id="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button}>
          Sign in
        </button>
      </form>
    </div>
  );
}

const styles = {
  card: {
    maxWidth: "400px",
    margin: "2rem auto",
    padding: "2rem",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    fontFamily: "sans-serif",
  },
  title: {
    fontSize: "24px",
    marginBottom: "0.5rem",
  },
  description: {
    fontSize: "14px",
    color: "#666",
    marginBottom: "1.5rem",
  },
  form: {
    display: "grid",
    gap: "1rem",
  },
  inputGroup: {
    display: "grid",
    gap: "0.5rem",
  },
  label: {
    fontWeight: "bold",
    fontSize: "14px",
  },
  input: {
    padding: "0.5rem",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  button: {
    marginTop: "1rem",
    padding: "0.75rem",
    fontSize: "16px",
    backgroundColor: "#0070f3",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};
