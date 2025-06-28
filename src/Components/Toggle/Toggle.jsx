// ThemeToggle.jsx
import React from "react";
import { useTheme } from "../Theme/Theme_Context";

const Toggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
};

export default Toggle;
