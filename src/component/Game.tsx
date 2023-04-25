import { ClassNames } from '@emotion/react';
import './Game.scss'
import SendIcon from '@mui/icons-material/Send';
import { BsArrowRightSquareFill } from "react-icons/bs";
import Pong from './pong/Pong';

const Game = () => {
    return(
    <div className="all">
        <div className="all_game">
            <div className="all_game_game">
            <div className="all_game_game_pong">
                   <Pong/> 
                </div>
                <div className="all_game_game_score">

                </div>
            </div>
            <div className="all_game_chat">
                <div className="all_game_chat_text">

                    <div className="all_game_chat_text_reply">

                    </div>
                    <div className="all_game_chat_text_reply1">
                        
                    </div>

                </div>
                <div className="all_game_chat_input">
                    <div className="all_game_chat_input_text">
                        <span className='all_game_chat_input_text_t'>type your message....</span>
                    </div>
                    <div className="all_game_chat_input_button">
                        <div className="all_game_chat_input_button_icon">
                        <BsArrowRightSquareFill/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Game

