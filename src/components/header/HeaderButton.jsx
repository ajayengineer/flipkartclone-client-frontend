import { useContext, useState } from "react";
import { Button, Box, makeStyles, Typography, Badge  } from "@material-ui/core";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';

//Components Imported
import LoginDialog from '../login/Login';
import {LoginContext} from '../../context/ContextProvider';
import Profile from './Profile';

const useStyle = makeStyles({
    login: {
      background: '#fff',
      color:'#2874f0',
      textTransform: 'none',
      fontWeight: 600,
      borderRadius: 2,
      padding: '5px 40px',
      boxShadow: 'none',
    },
    wrapper:{
        margin: '0 7% 0 auto',
        display: 'flex',
        alignItems: 'center',
        '& > *':{
            marginRight:50,
            fontSize: 12,
        }
    },
    container:{
        display: 'flex',
        color: '#ffffff',
    }
    
})

const HeaderButtons =() => {
const classes = useStyle();
const [open, setOpen] = useState(false);
const {account, setAccount} = useContext(LoginContext);


const openloginDialog = () =>{
    setOpen(true);
}
    return(
        <Box className={classes.wrapper}>

            {
            account ? <Profile account={account} setAccount={setAccount}/> :
            <Button variant="contained" onClick={()=> openloginDialog()} className={classes.login}>Login</Button>
            }
             

            <Typography>More</Typography>
            <Link to='/cart' className={classes.container}>
            <Badge badgeContent={4} color="secondary">
              <ShoppingCartIcon />
            </Badge>
                
                <Typography style={{marginLeft: 10}}>Cart</Typography>
            </Link>
            <LoginDialog open={open} setOpen={setOpen} setAccount={setAccount} />
        </Box>
    )
}

export default HeaderButtons;