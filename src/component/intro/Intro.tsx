import React from 'react'
import './Intro.scss'
import { NavLink, useNavigate } from 'react-router-dom'
import EastIcon from '@mui/icons-material/East';

function Intro() {

    const navigate = useNavigate();

  return (
    <div className="alli">
        <div className="alli_r">
            <NavLink className="button_next" to={'/profil'} style={{textDecoration:'none'}} onClick={() => navigate('profil')}>
                <div className="button_next_t">
                    Passer l'introduction
                </div>
                <EastIcon fontSize='large'/>
            </NavLink>
            <div style={{ overflow: 'hidden', position: 'absolute', left: 10, top: 50, width: 50, height: 50 }}>
                <div className='all_movie' style={{marginTop:'-290px'}}>
                    <object width="420" height="315">
                        <param name="movie" value="https://www.youtube.com/v/EjMNNpIksaI?version=3&amp;hl=en_US&autoplay=1&amp;autohide=2"></param>
                        <param name="allowFullScreen" value="true"></param>
                        <param name="allowscriptaccess" value="always"></param>
                        <iframe width="420" height="315" src="https://www.youtube.com/embed/EjMNNpIksaI?autoplay=1" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
                    </object>
                </div>
            </div>
            <p id="start">Il y a peu de temps, dans un navigateur pas si lointain que ça...&hellip;</p>
            <h1>PONG</h1>
            <div id="titles">
                <div id="titlecontent">
                <p className="center">EPISODE 3<br/>
                  LA REVANCHE DU SITE </p>
                <p>
                <p>C'est dans une période troublée que deux joueurs s'affrontent sur une table de ping pong.</p>
                <p>Deux joueurs légendaires disposant chacun de la puissance exponentielle de la fameuse arme intergalactique, autrement nommée : Raquette de Ping Pong.</p>
                <p>Ils se livrent une bataille sans merci pour le controle de la galaxie et que l'Etoile Noire, a.k.a la balle, ne s'écrase pas dans leur camp.</p>
                <p>A chaque fois que l'Etoile Noire s'écrase dans le camp d'un des joueurs, le lanceur gagne un point, symbole d'honneur et d'espoir pour les citoyens de la galaxie.</p>
                <p>Il a été défini selon le traité de Naboo que la bataille se finissait en 11 ou 21 points.</p>
                <p>Les joueurs se doivent de combattre jusqu'à ce que mort s'en suive ou que la bataille se finisse.</p>
                <p>Pour info, le pilote de l'Etoile Noire a bu un coup avant de prendre le volant et il rebondit contre les parois de la galaxie.</p>
                <p className="center">Que la force soit avec toi, Luc !</p>
                <p>Luc Hichote, rien a voir avec Luke Skywalker.</p>
                <p>Lucky Shot, t'as compris ???</p>
                <p>Et oui, c'est un jeu de mot de génie.</p>
                <p>Bon je te laisse, bisous.</p>
                </p>
                </div>
            </div>
            <iframe style={{ visibility: "hidden" }} width={560} height={315} src="https://www.youtube.com/embed/1KAOq7XX2OY" frameBorder={0} allowFullScreen></iframe>
        </div>
    </div>
  )
}
export default Intro