import React ,{ReactNode}from 'react';
import { Rnd} from 'react-rnd';

const childStyle = {
  height: "100%",
  width: "100%",
  backgroundColor: 'aqua',
};

interface RNDprops{
    children:ReactNode
}

const RND: React.FC<RNDprops> = ({ children }) => {
  return (
    <Rnd
      default={{
        x: 0,
        y: 0,
        width: 0,
        height: 0,
      }}
      style={{ display: 'inline-flex' , backgroundColor:"red"}}
    >
      {children}
    </Rnd>
  );
};

export default RND;
