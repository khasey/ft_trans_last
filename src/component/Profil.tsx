import React from 'react'
import './Profil.scss'
import { NavLink, useNavigate } from 'react-router-dom';
import { User, getUserData } from './auth';
import { Avatar, Box, Button, Stack, TextField, styled } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { Shadow } from 'tsparticles-engine';

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'blue',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'white',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white',
    },
    '&:hover fieldset': {
      borderColor: 'white',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
    },
  },
});

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
        
        <Box sx={{ display: 'flex', alignItems:'center', justifyContent:'flex-start', gap:'10px'}}>
          <Avatar alt="Kevin" src="/static/images/avatar/1.jpg" 
          sx={{
            backgroundColor: 'blue',
            width:'80px',
            height:'80px',
            boxShadow: '0px 2px 5px 0px black',
          
          }}/>
          <div className="profil_in_name">
            <p className="profil_in_name_text">
              kthierry
            </p>
          </div>
        </Box>
        
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          {/* <TextField color="info" id="input-with-sx" label="Choose a username" variant="standard" sx={{}}/> */}
          <CssTextField label="Choose a username" id="custom-css-outlined-input" sx={{color:'white'}}/>
        </Box>
        <NavLink to={'/game'}>
          <Button variant="contained" onClick={() => navigate('game')}
          sx={{
            width: 250,
            height: 60,
            borderRadius: 40,
            fontSize: 'large',
            backgroundColor:'Blue',
            color:'white',
            '&:hover' : {
              backgroundColor:'rgb(0, 60, 252)',
            },
          }}>
          Save & Connect
          </Button>
        </NavLink>
      </Stack>
    </div>
  )
}

export default Profil