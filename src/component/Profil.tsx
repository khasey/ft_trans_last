import React from 'react'
import './Profil.scss'
import { NavLink, useNavigate } from 'react-router-dom';
import { User, getUserData } from './auth';



function Profil() {

  const navigate = useNavigate();

  const [user, setUser] = React.useState<User | null>(null);

  React.useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);


  getUserData(2)
  .then((userData) =>{
    console.log("user data = " + userData)
    console.log(userData.login); // Affiche "andre"
    console.log(userData.image); // Affiche "https://cdn.intra.42.fr/users/1234567890/andre.jpg"
  })
  .catch((error) => {
    console.error(error);
  });


  return (
    <div className="profil">
      <div className="profil_in">
        <div className="profil_in_up">
          <div className="profil_in_up_photo">
          {user && <img src={user.image_url} alt={user.login} />}
          </div>
          <div className="profil_in_up_name">
            {user &&<p className="profil_in_up_name_text">{user.login}</p>}
          </div>
        </div>
        <div className="profil_in_middle">

        </div>
        <NavLink className="profil_in_down" to={'/game'} style={{textDecoration: 'none'}}>
          <div onClick={() => navigate('game')} className="profil_in_down_button">
            <p className="profil_in_down_button_text">
              SAVE & PLAY
            </p>
          </div>
        </NavLink>
      </div>
    </div>
  )
}

export default Profil