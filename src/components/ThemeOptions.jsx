import { useState, useEffect, useRef } from "react";
import './ThemeOptions.css';

export default function ThemeOptions ({ themeIndex, setThemeIndex, themes }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

    return (
    <div ref={dropdownRef} className="relative left-33 top-35 flex items-center gap-3 z-20">
      <button 
      onClick={() => setOpen(!open)}
      className="mb-2 text-lg">Theme</button>

    {open && (
      <div className="absolute top-12 left-10 mt-1 py-2 px-4 rounded shadow-lg grid grid-cols-4 gap-x-2 gap-y-4 z-10 dropdown">
        {themes.map((theme,i) => (
            <button 
            key={i}
            onClick={() => {
              setThemeIndex(i);
            }}
            className={`relative w-12 h-12 rounded-full border-2 border-white
              ${i === themeIndex ? "ring-2 ring-white shadow-lg" : "border-transparent"}`} 
            style={{ backgroundColor: theme}}
              />
        ))}
      </div>
      )}
    </div>
    );
}   