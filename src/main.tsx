// main.tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import RectangleBox from './components/RectangleBox/RectangleBox';
import getBoxPosition  from './utils/getBoxPosition';
import ImageView from './components/Image/ImageView';
const imgscr = "../Assets/chapter2.jpg"
const App = () => {
  return (
    <div>
    <ImageView src= {imgscr} width='300px' height='100%'>
      <RectangleBox width={100} height={100} fillColor="#d3662c" alpha={0.5}/>
      <RectangleBox width={100} height={100} fillColor="#d3662c" alpha={0.5}/>
    </ImageView>
    <button onClick={()=>console.log(getBoxPosition("image-m32","rectangle-box"))}> export</button>
    </div>
  );
};

const container = document.getElementById('root')
const root = createRoot(container!);

root.render(<App />);
