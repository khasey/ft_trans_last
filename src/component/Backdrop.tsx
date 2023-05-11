import * as React from 'react';
import Box from '@mui/material/Box';
import { Avatar } from '@mui/material';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import './Backdrop.scss';

type Anchor = 'right';

export default function Backdrop() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };
  return (
    <div>
      {(['right'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} sx={{
            marginLeft:'-20%',
            fontSize:'12px',
            color:'#ffffff6b',
            '&:hover':{
                color:'#f0f8ff'
            }
          }}>CHAT</Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {/* {list(anchor)} */}
            <Box className="inside_chat" sx={{
                width:'600px',
                height:'100%',
                display:'flex',
                flexDirection:'column',
                justifyContent:'flex-start',
                alignItems:'center',
                gap:'5px',
                backgroundColor:'black',
                "@media screen and (width < 1500px)":{
                  width:'350px',
                },
            }}>
                {/* ----------------title------------ */}
                <Box className="inside_chat_title"
                sx={{
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center',
                    width:'100%',
                    height:'100px',
                    backgroundColor:'white',
                    borderRadius: '40px',
                    marginTop:'5px',
                }}
                >
                    <div className="inside_chat_title_text" >CHAT</div>
                </Box>
                {/* ------------------profil-section---------------- */}
                <Box className="inside_chat_profil"
                sx={{
                    width:'100%',
                    height:'150px',
                    backgroundColor:'white',
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center',
                    borderRadius:'40px',
                }}>
                    <Avatar className="inside_chat_profil_photo"
                    sx={{
                        width:'100px',
                        height:'100px',
                        "@media screen and (width < 1500px)":{
                          width:'80px',
                          height:'80px',
                        },
                    }}>

                    </Avatar>
                    <Box className="inside_chat_profil_name"
                    sx={{
                        width:'200px',
                        height:'60px',
                        marginLeft:'10px',
                        border:'solid black 2px',
                        borderRadius:'40px',
                        "@media screen and (width < 1500px)":{
                          width:'150px',
                          height:'40px',
                        },
                    }}>
                    </Box>
                </Box>
                {/* -----------------------icon menu------------------------- */}
                <Box className="inside_chat_icon"
                sx={{
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center',
                    width:'100%',
                    height:'80px',
                    backgroundColor:'white',
                    borderRadius:'40px',
                    gap:'100px',
                    "@media screen and (width < 1500px)":{
                      gap:'60px',
                    },
                }}>
                    <Diversity3Icon className='inside_chat_icon_1'/>
                    <PersonAddIcon className='inside_chat_icon_2'/>
                    <GroupAddIcon  className='inside_chat_icon_3'/>
                </Box>
                {/* -------------------------chat area------------------------ */}
                <Box className="inside_chat_chatArea" 
                sx={{
                    width:'100%',
                    height:'100%',
                    backgroundColor:'white',
                    borderRadius:'40px',
                    marginBottom:'10px',
                }}>

                </Box>
            </Box>

          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
