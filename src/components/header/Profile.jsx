import { useState } from "react";
import { Box, Typography, makeStyles, Menu, MenuItem } from "@material-ui/core";
import LogoutIcon from '@material-ui/icons/PowerSettingsNew';

const useStyle = makeStyles({
    usertextname:{
        textTransform: 'capitalize',
        fontSize: '14px',
        cursor:'pointer'
    },
    profileOuter:{
        position:'relative!important'
    },
    logoutBox:{
        position:'absolute!important'
    },
    logoutFont:{
        fontSize: '18px',
        paddingRight:10,
        color: '#2455f4'
    }
})

const Profil = ({ account, setAccount }) =>{
    const [open, setOpen] = useState(false); 
    const classes = useStyle();

    const handleClose = () =>{
        setOpen(false);
    }

    const handleClick = (event) =>{
        setOpen(event.currentTarget);
    }

    const logout = () =>{
        setAccount('');
    }
    return(
        <Box className={classes.profileOuter}>
            <Typography onClick={handleClick} className={classes.usertextname}>
                {account}
            </Typography>
            <Menu
                anchorEl={open}
                open={open}
                onClose={handleClose}
                className={classes.logoutBox}
           >
            <MenuItem onClick={()=> {handleClose(); logout();} }>  <LogoutIcon className={classes.logoutFont} /> Logout </MenuItem>
         </Menu>
        </Box>
    )
}

export default Profil;