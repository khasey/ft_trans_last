import React, { useState } from 'react';
import { ClassNames } from '@emotion/react';
import './Game.scss'
import SendIcon from '@mui/icons-material/Send';
import { BsArrowRightSquareFill } from "react-icons/bs";

const Game = () => {
    const [messages, setMessages] = useState<string[]>([]);


    const handleMessageSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        const message = (event.target as HTMLFormElement).message.value;
        if (!message) {
          return;
        }
        setMessages([...messages, message]);
        (event.target as HTMLFormElement).message.value = '';
      };
      
    return (
        <div className="all">
            <div className="all_game">
                <div className="all_game_game">
                    <div className="all_game_game_pong">
                        {/* <Pong/>  */}
                    </div>
                    <div className="all_game_game_score">
                    </div>
                </div>
                <div className="all_game_chat">
                    <div className="all_game_chat_text">
                        <div className="all_game_chat_text_reply">
                            {messages.map((message, index) => (
                                <div key={index} className="all_game_chat_text_message">
                                    <span className="all_game_chat_text_message_text">{message}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <form onSubmit={handleMessageSubmit}>
                        <div className="all_game_chat_input">
                            <div className="all_game_chat_input_text">
                                <input style={{outline:'none'}} className='all_game_chat_input_text_form' type="text" name="message" placeholder="Type your message..."/>
                            </div>
                            <div className="all_game_chat_input_button">
                                <button type="submit" className='all_game_chat_input_button_push'><BsArrowRightSquareFill/></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Game;


