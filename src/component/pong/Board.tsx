import React from "react";
import './Board.scss'

interface BoardProps {
  canvasRef: React.RefObject<HTMLCanvasElement>;
}

class Board extends React.Component<BoardProps> {
  private canvasRef = this.props.canvasRef;

  componentDidMount() {
    const canvas = this.canvasRef.current;
    const ctx = canvas?.getContext('2d') as CanvasRenderingContext2D | null;

    if (!ctx) {
      throw new Error('Could not get 2D rendering context');
    }

    let animationFrameId: number;

    const render = () => {
      if (!canvas) return;
      // Draw the background
      ctx.fillStyle = '#111';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw the middle line
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(canvas.width  / 2 - 1, 0, 2, canvas.height);

      // Request a new animation frame
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Clean up the animation frame when the component unmounts
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }

  render() {
    return <canvas ref={this.canvasRef} className="board"
    width={1200} 
    height={700} 
    />;
  }
}

export default Board;