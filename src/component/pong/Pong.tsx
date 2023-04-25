import React, { Component, RefObject, RefAttributes } from 'react';
import Board from './Board';
import Ball from './Ball';
import Paddle from './Paddle';


type PongState = {
  ballX: number;
  ballY: number;
  ballSpeedX: number;
  ballSpeedY: number;
  ballSize: number;
  player1Y: number;
  player2Y: number;
};

type BoardProps = {
  canvasRef: RefObject<HTMLCanvasElement>;
  onMouseMove: (event: React.MouseEvent<HTMLCanvasElement>) => void;
} & RefAttributes<HTMLCanvasElement>; // Add RefAttributes to allow for the ref prop

class Pong extends Component<{}, PongState> {
  private canvasRef: RefObject<HTMLCanvasElement>;

  constructor(props: {}) {
    super(props);
    this.canvasRef = React.createRef();
    this.state = {
      ballX: 400,
      ballY: 300,
      ballSpeedX: 5,
      ballSpeedY: 5,
      ballSize: 20,
      player1Y: 250,
      player2Y: 250,
    };
  }

  componentDidMount() {
    const canvas = this.canvasRef.current;
    if (canvas) {
      const context = canvas.getContext('2d');
      if (context) {
        const render = () => {
          context.fillStyle = '#000';
          context.fillRect(0, 0, canvas.width, canvas.height);

          // Update ball position
          const { ballX, ballY, ballSpeedX, ballSpeedY, ballSize, player1Y, player2Y } = this.state;
          let newBallX = ballX + ballSpeedX;
          let newBallY = ballY + ballSpeedY;

          // Check if ball hits top or bottom of canvas
          if (newBallY < 0 || newBallY > canvas.height) {
            this.setState({ ballSpeedY: -ballSpeedY });
            newBallY = ballY + this.state.ballSpeedY;
          }

          // Check if ball hits left or right side of canvas
          if (newBallX < 0 || newBallX > canvas.width) {
            this.setState({ ballSpeedX: -ballSpeedX });
            newBallX = ballX + this.state.ballSpeedX;
          }

          // Check if ball hits player1's paddle
          if (newBallX < 20 && newBallY > player1Y && newBallY < player1Y + 60) {
            this.setState({ ballSpeedX: -ballSpeedX });
            newBallX = ballX + this.state.ballSpeedX;
          }

          // Check if ball hits player2's paddle
          if (newBallX > canvas.width - 30 && newBallY > player2Y && newBallY < player2Y + 60) {
            this.setState({ ballSpeedX: -ballSpeedX });
            newBallX = ballX + this.state.ballSpeedX;
          }

      // Move player2's paddle towards the ball
      const newPlayer2Y = player2Y + (newBallY - (player2Y + 30)) * 0.1;

      // Update state
      this.setState({
        ballX: newBallX,
        ballY: newBallY,
        player2Y: newPlayer2Y,
      });

      // Draw objects on canvas
      context.fillStyle = '#FFF';
      context.fillRect(10, player1Y, 10, 60);
      context.fillRect(canvas.width - 20, player2Y, 10, 60);
      context.fillRect(newBallX - ballSize / 2, newBallY - ballSize / 2, ballSize, ballSize);

      // Call render function again
      requestAnimationFrame(render);
    };
    requestAnimationFrame(render);
  }
}
}

handleMouseMove = (event: React.MouseEvent<HTMLCanvasElement>) => {
  const canvas = this.canvasRef.current;
  if (canvas) {
    const rect = canvas.getBoundingClientRect();
    const mouseY = event.clientY - rect.top - canvas.height / 2;
    this.setState({ player1Y: mouseY });
  }
};

render() {
const { ballX, ballY, ballSize, player1Y, player2Y } = this.state;
return (
  <div style={{ position: 'relative' }}>
    <Board canvasRef={this.canvasRef} />
    <Ball x={ballX} y={ballY} size={ballSize} />
    <Paddle x={10} y={player1Y} width={10} height={80} />
    <Paddle x={820} y={player2Y} width={10} height={80} />
  </div>
  );
  }
}

export default Pong;