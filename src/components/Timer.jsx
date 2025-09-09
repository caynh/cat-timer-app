import { useState, useEffect } from "react";
import CatAnimation from "./CatAnimation";

export default function Timer({isBreak, setIsBreak}) {
    const workTime = 25 * 60;
    const breakTime = 5 * 60;

    const [time, setTime] = useState(workTime);
    const [isRunning, setIsRunning] = useState(false);

    //Format time
    const formatTime = (t) => {
        const minutes = Math.floor(t / 60);
        const seconds = t % 60;
        return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    };

    //Timer countdown
    useEffect(() => {
        let timer;
        if (isRunning && time > 0) {
            timer = setInterval(() => setTime((t) => t-1), 1000);
        } else if (time === 0) {
            setIsRunning(false);
        }
        return () => clearInterval(timer);
    }, [isRunning, time]);

    return (
        <div className="relative flex flex-col items-center gap-4">
            <p className="fixed top-80 p-4 text-8xl">{formatTime(time)}</p>

            <CatAnimation isBreak={isBreak} time={time} isRunning={isRunning} />
            <div className="flex gap-2">
                <button onClick={() => setIsRunning(true)} className="px-4 py-2 bg-orange-500 text-white rounded">
                Start
                </button>
                <button onClick={() => setIsRunning(false)} className="px-4 py-2 bg-orange-500 text-white rounded">
                Pause
                </button>
                <button onClick={() => {
                    setIsRunning(false);
                    setIsBreak(false);
                    setTime(workTime);
                }} className="px-4 py-2 bg-orange-500 text-white rounded">
                Reset
                </button>
                <button onClick={() => {
                    setIsBreak(true);
                    setTime(breakTime);
                    setIsRunning(true);
                }} className="px-4 py-2 bg-orange-500 text-white rounded">
                Break
                </button>
            </div>
        </div>
    )




}