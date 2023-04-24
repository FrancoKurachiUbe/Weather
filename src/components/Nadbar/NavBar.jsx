import * as React from 'react';
import { useState } from "react";
import  AppBar from "@mui/material/AppBar";
import  Button from "@mui/material/Button";
import  Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";

import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import NavListDrawer from "./NavListDrawer";
import { Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

export default function NavBar({NavArrayLinks}) {
    const [open, setOpen] = useState(false)
    
    return(
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{display:{xs:"flex", sm:"none"}}}
                    onClick={() => setOpen(true)}
                    >
                        <DensityMediumIcon/>
                    </IconButton>
                    <Typography variant='h6' sx={{flexGrow: 1}} >
                        New
                    </Typography>

                    <Box sx={{display:{xs:"none", sm:"block"}}}>
                        {
                        NavArrayLinks.map(item =>(
                            <Button 
                                color='inherit' 
                                key={item.title}
                                component={NavLink}
                                to={item.path}
                            >
                                {item.title}
                            </Button>
                        ))
                        }
                    </Box>
                    
                </Toolbar>
            </AppBar>
            {/* <Button variant="contained" onClick={() => setOpen(true)}>Open</Button> */}

            <Drawer
                open={open}
                anchor="left"
                onClose={() => setOpen(false)}
                sx={{display:{xs:"flex", sm:"none"}}}
                >
                <NavListDrawer 
                    NavArrayLinks={NavArrayLinks}
                    NavLink={NavLink}
                    setOpen={setOpen}
                />

            </Drawer>
            
        </>
    )
}


