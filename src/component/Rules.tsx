import React from 'react'
import './Rules.scss'

function Rules() {
  return (
        <div className="all">
          <div className="all_rules">
            <span className='all_rules_title'>RULES</span>
            <div className='all_rules_textRules'>
            <p style={{textIndent: '2em'}}>Pong est un jeu vidéo classique qui simule un jeu de tennis de table en utilisant des graphismes simples. Voici les règles de base du jeu : </p>
            <p><li>Deux joueurs s'affrontent, chacun contrôlant une raquette à l'écran.Le jeu commence avec une balle au milieu de l'écran.</li>
            
            <li>Les joueurs doivent faire rebondir la balle avec leur raquette pour l'envoyer vers le côté opposé de l'écran, et essayer de faire en sorte que l'adversaire ne puisse pas la renvoyer.Si un joueur manque la balle, l'autre joueur marque un point.</li>
            <li>Le premier joueur à atteindre un nombre prédéfini de points (généralement 11 ou 21) remporte le jeu.</li></p>
            <p style={{textIndent: '2em', textAlign: 'left'}}>Voici quelques règles supplémentaires qui peuvent varier selon les versions du jeu :</p>
            <p><li>La balle peut rebondir sur les murs de chaque côté de l'écran, mais pas sur les murs supérieur et inférieur.Les joueurs peuvent déplacer leur raquette verticalement le long de l'écran pour frapper la balle.</li>
            <li>La balle peut changer de direction et de vitesse après avoir été touchée par une raquette, ce qui peut rendre le jeu plus difficile. Certains jeux de Pong ont des fonctionnalités supplémentaires, comme des obstacles ou des bonus qui apparaissent à l'écran.</li></p>
            </div>
          </div>
        </div>
      )
    }
export default Rules