import { useState } from 'react';
import Timer from './components/Timer';
import './App.css';

function App() {
  const [isBreak, setIsBreak] = useState(0)

  return (
    <div>
        <p className='relative flex flex-col top-20 text-4xl'>CatTime</p>
      <div className='relative h-screen flex flex-col items-center justify-center'>
      <Timer isBreak={isBreak} setIsBreak={setIsBreak} />
      </div>
    </div>
  )
}

export default App
