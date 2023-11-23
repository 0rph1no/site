import './App.css';
import Wrapper from './components/Wrapper/Wrapper';
import Scroll from './components/Scroll/Scroll';
import { useState } from 'react';

function App() {
  const [index, setIndex] = useState(0);
  const handleScroll = (event) => {
    const elements = ["#aboutme", "#testimonials", "#top"]
    const deltaY = event.deltaY;
    if (deltaY > 0)
    {
      setIndex((index < 2 ? index+1 : 0))
      const nextSection = document.querySelector(elements[index])
      if (nextSection) {
        console.log(nextSection.textContent);
        nextSection.scrollIntoView({ behavior: 'smooth'});
      }
    }
  };
  return (
    <>
    <div className="App" onWheel={handleScroll}>
      <Scroll />
      <Wrapper />
    </div>
    </>
  );
}

export default App;
