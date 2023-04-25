import React from 'react';

interface PaddleProps {
  x: number;
  y: number;
  width: number;
  height: number;
}

const Paddle: React.FC<PaddleProps> = ({ x, y, width, height }) => {
  return (
    <div
      style={{
        position: 'absolute',
        left: x,
        top: y,
        width,
        height,
        backgroundColor: 'white',
      }}
    />
  );
};

export default Paddle;
