import React, { useRef, useEffect } from 'react';


interface BoardProps {
  canvasRef: React.RefObject<HTMLCanvasElement>;
}

class Board extends React.Component<BoardProps> {
  private canvasRef = this.props.canvasRef;

  componentDidMount() {
    const canvas = this.canvasRef.current;
    const ctx = canvas.getContext('2d');
    const { width, height } = canvas;

    // Draw the board background
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, width, height);

    // Draw the net
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(width / 2, 0);
    ctx.lineTo(width / 2, height);
    ctx.stroke();

    // rest of the code...
  }
  return <canvas ref={canvasRef} width={640} height={480} />;
  // rest of the code...
}

export default Board;
