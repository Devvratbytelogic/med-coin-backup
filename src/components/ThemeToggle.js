import React, { useState, useEffect } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export default function ThemeToggle() {
    const [darkMode, setDarkMode] = useState(() => {
        // Get theme from localStorage if available, otherwise default to false
        const savedTheme = localStorage.getItem("theme");
        return savedTheme === "dark" ? true : false;
    });

    useEffect(() => {
        const theme = darkMode ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", theme);
        // Save theme to localStorage
        localStorage.setItem("theme", theme);
    }, [darkMode]);

    return (
        <div className="theme_toggle_wrapper">
            <div
                onClick={() => setDarkMode(!darkMode)}
                className="theme_toggle"
            >
                {darkMode ? <FiMoon className="w-5 h-5" /> : <FiSun className="w-5 h-5" />}
            </div>
        </div>
    );
}
