
import React, { Children } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import "./style.css";
interface ImageProps {
  children?: React.ReactNode;
  src: string;
  alt?: string;
  align?: "center" | "left" | "right";
  height?: string;
  width?: string;
}

const ImageView: React.FC<ImageProps> = ({ children: children ,src, alt = "image", align = "center", height, width }) => {
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: align === "center" ? "center" : align === "left" ? "flex-start" : "flex-end",
  };

  return (
    <div style={containerStyle}>
      <img src={src} alt={alt} className="image-m32"style={{ height, width }} />
      {React.Children.map(children, (child) => child)}
      
    </div>
  );
    
};

export default ImageView;
