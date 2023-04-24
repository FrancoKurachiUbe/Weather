import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
/* Icons */
import DeleteIcon from '@mui/icons-material/Delete';
import  Inbox  from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
//import { NavLink } from 'react-router-dom';
//import InboxIcon from '@mui/icons-material/InboxIcon';

export default function NavListDrawer({NavArrayLinks, NavLink, setOpen}) {
    return(
        <>
        <Box sx={{width:250}}>
            <nav aria-label="main mailbox folders">
                <List>
                    {
                        NavArrayLinks.map(item => (
                        <ListItem disablePadding key={item.title}>
                            <ListItemButton
                                componet={NavLink}
                                to={item.path}
                                onClick={() => setOpen(false)}
                            >
                                <ListItemText primary={item.title}/>
                            </ListItemButton>
                        </ListItem>
                        ))
                    }                  
                </List>
            </nav>
        </Box>
        
        </>
    )
}
/* 
3:20
*/