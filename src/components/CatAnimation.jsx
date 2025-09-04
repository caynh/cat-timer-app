import './CatAnimation.css';

export default function CatAnimation({ isBreak, time, isRunning }) {
    let message = "";
    let catState = "idle";

    if (time === 0) {
        if (isBreak) {
            message = "Kitty is ready to work again!";
            catState = "working";
        } else {
            message = "Kitty is hungry! Time for a break!";
            catState = "sleeping";
        }
    } else if (isBreak) {
    if (isRunning) {
      message = "Kitty is sleeping...(Break time)";
      catState = "sleeping";
    } else {
      message = "Kitty is chilling (Paused)";
      catState = "idle";
    }
  } else {
    if (isRunning) {
      message = "Kitty is working! (Focus time)";
      catState = "working";
    } else {
      message = "Kitty is waiting to start work!";
      catState = "idle";
    }
  }

  return (
    <div>
        <div className="relative bottom-30 ml-18 flex flex-col items-center">
            <div className={`cat-sprite ${catState}`} />
        </div>
        <p className="text-lg text-center">{message}</p>
    </div>
  );
}