import React from 'react'
import './Profil.scss'
import { NavLink, useNavigate } from 'react-router-dom';
import { User, getUserData } from './auth';
import { Avatar, Box, Button, Stack, TextField, styled } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { Shadow } from 'tsparticles-engine';


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
      <Stack direction='column' spacing={3} className="profil_in">
        <Stack direction='column' spacing={3} className="profil_in2" sx={{
          gap:'5%',
        }}>
        <Box sx={{ display: 'flex', flexDirection:'row', gap:'15px', marginTop:'-10%'}}>
          <Avatar alt="Kevin" src="/static/images/avatar/1.jpg" 
          sx={{
            // "@media screen and (width < 1500px)":{
            //   fontSize:'15px',
            //   width:'80px',
            //   height:'80px',
            // },
            backgroundColor: 'white',
            width:'90px',
            height:'90px',
          
          }}/>
          <div className="profil_in_name">
            <p className="profil_in_name_text" style={{fontSize:'20px', marginTop:'25%'}}>
              kthierry
            </p>
          </div>
        </Box>
        <Box sx={{}}>
          <TextField label="Choose a username"
          type="Text"
          margin="none"
          InputLabelProps={{
            style: { color: "white" },
          }}
          inputProps={{
            style: { color: "white" },
          }}
          sx={{
            // "@media screen and (width < 1500px)":{
            //   // width: 200,
            // },
            ".css-x2l1vy-MuiInputBase-root-MuiOutlinedInput-root": {
              color: "white",
            },
          }}
          InputProps={{
            sx: {
              // "@media screen and (width < 1500px)":{
              //   fontSize:'10px',
              // },
              ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                border: "2px solid white",
              },
              "&:hover": {
                ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                  border: "2px solid white",
                },
              },
            },
          }}
          size="medium"
          variant="outlined"
          fullWidth
           />
        </Box>
          <NavLink  to={'/game'} style={{textDecoration:'none'}}>
            <div className='profil_in2_button' onClick={() => navigate('game')}>
              SAVE & START
            </div>
          </NavLink>
          
        </Stack>
      </Stack>
      
    </div>
  )
}

export default Profil