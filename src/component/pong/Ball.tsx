import React from 'react';

interface BallProps {
  x: number;
  y: number;
  size: number;
}

const Ball: React.FC<BallProps> = ({ x, y, size }) => {
  return (
    <div
      style={{
        position: 'absolute',
        left: x,
        top: y,
        width: size,
        height: size,
        borderRadius: '50%',
        backgroundColor: 'white',
      }}
    />
  );
};

export default Ball;
