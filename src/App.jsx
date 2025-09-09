import { useState, useEffect } from 'react';
import Timer from './components/Timer';
import ThemeOptions from './components/ThemeOptions';
import './App.css';

function App() {
  const [isBreak, setIsBreak] = useState(0)
  const [themeIndex, setThemeIndex] = useState(() => {
    const stored = localStorage.getItem("pomocat-theme");
    return stored ? Number(stored) : 0;
  });

  const THEMES = [
    "#242424", // grey-900
    "#2a4365", // blue-900
    "#234e52", // teal-900
    "#22543d", // green-900
    "#744210", // yellow-900
    "#7b341e",  // orange-900
    "#702459", // pink-900
    "#44337a" // purple-900
   
    
];

useEffect(() => {
    document.body.style.backgroundColor = THEMES[themeIndex];
    localStorage.setItem("pomocat-theme", themeIndex);
  }, [themeIndex]);

  return (
      <div>
        <ThemeOptions 
        themeIndex={themeIndex}
        setThemeIndex={setThemeIndex}
        themes={THEMES} />
        <p className='relative flex flex-col text-4xl'>PomoCat</p>
      <div className='relative h-screen flex flex-col items-center justify-center'>
      <Timer isBreak={isBreak} setIsBreak={setIsBreak} />
      </div>
      </div>
  )
}

export default App
