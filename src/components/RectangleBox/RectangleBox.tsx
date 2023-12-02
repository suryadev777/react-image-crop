import React from 'react';
import { Rnd } from 'react-rnd';


interface RectangleBoxProps {
  width: number;
  height: number;
  fillColor: string;
  alpha: number;
}



const RectangleBox: React.FC<RectangleBoxProps> = ({ width, height, fillColor, alpha }) => {
  const fillStyle = `${fillColor}${Math.round(alpha * 255).toString(16)}`;

  return (
    <div>
    <Rnd default={{x:0,y:0,height:height,width:width}} bounds={".image-m32"} dragAxis='both' style={{position:"absolute"}}>

    <div
      className='rectangle-box'
      style={{
        position:"relative",
        width: "100%",
        height: "100%",
        backgroundColor: fillStyle,
        zIndex: 100,
      }}
    />
    </Rnd>
    <div className="toll-bar">
        <button>
        <PlusOutlined />
        </button>
      </div>
    </div>
    
  );
};

export default RectangleBox;
