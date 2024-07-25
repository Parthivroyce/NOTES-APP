import { AddCircleOutlineOutlined, MenuOutlined, StickyNote2Outlined } from "@mui/icons-material";
import { AppBar, Avatar, Box, Container, IconButton, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import { deePurple, deepPurple } from "@mui/material/colors";
import zIndex from "@mui/material/styles/zIndex";
import { color } from "@mui/system";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const drawerWidth = 210;
const drawerLinkList = [
    {
        label:'My Notes',
        icon:<StickyNote2Outlined/>,
        path:'/'
    },
    {
        label:'Create',
        icon:<AddCircleOutlineOutlined/>,
        path:'/create'
    }
];

const Layout = ({children, window}) => {
    const navigate = useNavigate();
    const container = window !== undefined ? () => window().document.body : undefined;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer =(
        <div>
            <div>
                <Typography variant="h5" textAlign={'center'} marginY={2}>
                    Notes Hub
                </Typography>
            </div>
            <List>
                {drawerLinkList.map((drawerLink)=>(
                    <ListItem key={drawerLink.label}>
                        <ListItemButton
                            onClick={()=>navigate(drawerLink.path)}
                        >
                            <ListItemIcon>
                                {drawerLink.icon}
                            </ListItemIcon>
                            <ListItemText primary={drawerLink.label} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </div>
    )

    return ( 
        <Container sx={{display:'flex'}}>
            <AppBar sx={{width:'100%'}}>
                <Toolbar>
                    <IconButton
                        sx={{mr:2}} 
                        onClick={handleDrawerToggle}
                    >
                        <MenuOutlined sx={{color:'white'}}/>
                    </IconButton>
                    <Typography variant="h5" flexGrow={1}>
                        Notes Hub
                    </Typography>
                    <Avatar src="logo512.png"/>
                </Toolbar>
            </AppBar>
            
            <Drawer
                open={mobileOpen}
                onClose={handleDrawerToggle}
                container={container}
                variant="temporary"
                anchor="left"
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                  }}
                sx={{
                    width:drawerWidth,
                    // display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                {drawer}
            </Drawer>
            {/* <Drawer
                variant="permanent"
                sx={{
                    zIndex:1000,
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                open
            >
                {drawer}
            </Drawer> */}
            <Box
                // flexGrow={1}
                component="main"
                sx={{ p: 3 , width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar/>
                {children}
            </Box>
        </Container>
     );
}
 
export default Layout;