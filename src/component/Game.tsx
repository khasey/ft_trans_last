import React, { useState } from 'react';
import { ClassNames } from '@emotion/react';
import './Game.scss'
import SendIcon from '@mui/icons-material/Send';
import { BsArrowRightSquareFill } from "react-icons/bs";

const Game = () => {
    // const [messages, setMessages] = useState<string[]>([]);


    // const handleMessageSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    //     event.preventDefault();
    //     const message = (event.target as HTMLFormElement).message.value;
    //     if (!message) {
    //       return;
    //     }
    //     setMessages([...messages, message]);
    //     (event.target as HTMLFormElement).message.value = '';
    //   };
      
    return (
        <div className="all">
            <div className="all_game">
                <div className="all_game_game">
                    <div className="all_game_game_pong">
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Game;


