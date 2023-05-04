import React from 'react'
import './Profil_page.scss'
import { Avatar, Box, Button, ButtonGroup, Switch, TextField, Typography, alpha, styled } from '@mui/material'
import { pink } from '@mui/material/colors';

const buttons = [
  <Button key="one">Last Matchs</Button>,
  <Button key="two">Last Week</Button>,
  <Button key="three">Last Month</Button>,
]; 



const PinkSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: 'white',
    '&:hover': {
      backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: 'white',
  },
}));

function Scoreboard() {

  const [name, setName] = React.useState('bitedouce');

  return (
    <div className="all">
      <div className="all_score">
        <div className="all_score_avatar">

          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" 
          sx={{
            width: '80px',
            height: '80px',
            marginLeft: '5%',
            marginRight:'5%'
          }} />

        <TextField
          sx={{marginRight:'45vw'}}
          InputLabelProps={{
            style: { color: "white" },
          }}
          inputProps={{
            style: { color: "white" },
          }}
          InputProps={{
            sx: {
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
          id="outlined-controlled"
          label="USERNAME"
          value={name}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setName(event.target.value);
        }}
      />

          <Typography variant="h6" gutterBottom sx={{
            margin:'0',
            color:'white',
          }}>
             Enable 2fa
          </Typography>
          <PinkSwitch defaultChecked sx={{margin:'0'}} />
          

        </div>
        
        <div className="all_score_score">
          <div className="all_score_score_date">
            <Box
              sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              '& > *': {
                m: 1,
                },
              }}
              >
                <Typography variant="h6" gutterBottom sx={{
                  margin:'0',
                  color:'white',
                }}>
                  SCOREBOARD
                </Typography>
              <ButtonGroup color='info'size="large" aria-label="large button group" sx={{
                margin:'0',
                color:'blue'
              }}>
                {buttons}
              </ButtonGroup>
            </Box>
          </div>
          <div className="all_score_score_stats">

          </div>
        </div>
        <div className="all_score_ladder">

        </div>
      </div>
    </div>
  )
}

export default Scoreboard