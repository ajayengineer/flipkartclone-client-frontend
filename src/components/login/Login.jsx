import { useState } from 'react';
import { Dialog, DialogContent, makeStyles, Box, Typography, TextField, Button, capitalize } from '@material-ui/core';
import { authenticateSignup, authenticateLogin } from '../../service/api';
import ErrorIcon from '@material-ui/icons/ErrorOutline';

const useStyle = makeStyles({
    component:{
        height: '70vh',
        width: '90vh',
        padding: '0px!important'
    },
    image:{
        backgroundImage: `url(${'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png'})`,
        height: '70vh',
        width: '40%',
        backgroundRepeat: 'no-repeat',
        background: '#2874f0',
        backgroundPosition: 'center 85%',
    },
    text:{
        padding: '10px',
        color: '#ffffff'
    },
    mainloginbox:{
        display: 'flex'
    },
    login:{
        padding: '25px 35px',
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        '& > *':{
            marginTop: 20
        }
    },
    text2:{
        color: '#878787',
        fontSize: '12px'
    },
    loginBtn:{
        textTransform: 'none',
        background: '#fb641b',
        color:'#ffffff',
        height: 48,
        borderRadius: 2
    },
    requiestBtn:{
        textTransform: 'none',
        color: '#2874f0',
        fontSize: '15px',
        height: 48,
        boxShadow: '0 2px 4px 0 rgb(0 0 0 / 20%)',
        background:'none'
    },
    text3:{
        textTransform: 'none',
        color: '#2874f0',
        fontSize: '15px',
        background:'none',
        textAlign: 'center',
        cursor: 'pointer'
    },
    signup:{
        padding: '25px 35px',
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        '& > *':{
            marginTop: 5
        }
    },
    erromsg:{
        color: 'red',
        fontSize: '10px',
        fontWeight:600,
        lineHeight: '23px'
    },
    errorIc:{
        float:'left',
        paddingRight: '10px'
    }
})

const initialvalue = {
    login: {
        view: 'login',
        heading: 'Login',
        subHeading: 'Get access to your Orders, Wishlist and Recommendetions'
    }, signup:{
        view: 'signup',
        heading: 'Looks like your new here!',
        subHeading: 'Sign up with your mobile number to get started'
    }
}

const signupInitialValue = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: ''   
}

const loginInitialValue ={
    username: '',
    password: ''
}

const Login = ({open, setOpen, setAccount}) =>{
    const classes = useStyle();

    const [logindetail, setLogindetail] = useState(initialvalue.login);
    const [signup, setSignup] = useState(signupInitialValue);
    const [login, setLogin] = useState(loginInitialValue);
    const [error, setError] = useState(false);

    const handaleClose = () =>{
        setOpen(false);
        setLogindetail(initialvalue.login)
    }

    const loginSettings = () =>{
        setLogindetail(initialvalue.signup)
    }

    const signupUser = async () =>{
       let response = await authenticateSignup(signup);
       if(!response) return;
       handaleClose();
       setAccount(signup.username);
    }

    const loginUser = async () =>{
        let response = await authenticateLogin(login);
        if(!response) {
            setError(true);
            return
        }
       
        handaleClose();
        setAccount(login.username);
    }



    const onInputChange = (e) =>{
        setSignup({...signup, [e.target.name]: e.target.value });
        console.log(signup);
    }

    const onValueChange = (e) =>{
        setLogin({ ...login, [e.target.name]: e.target.value })
    }

    return(
        <Dialog open={open} onClose={handaleClose}>
            <DialogContent className={classes.component}>
                <Box className={classes.mainloginbox}>
                    <Box className={classes.image}>
                        <Typography variant="h5" className={classes.text} style={{marginTop: 45}}> {logindetail.heading} </Typography>
                        <Typography className={classes.text}> 
                            {logindetail.subHeading}
                        </Typography>
                    </Box>
                    {
                        logindetail.view === 'login' ?
                        <Box className={classes.login}>
                            <TextField onChange={(e) => onValueChange(e)} name='username' label='Enter Email/Mobile Number' />
                            <TextField onChange={(e) => onValueChange(e)} name='password' label='Enter Password' />
                            {error && <Typography className={classes.erromsg}> <ErrorIcon className={classes.errorIc} /> Invalid Username or Password </Typography>}
                            <Typography className={classes.text2}>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
                            <Button onClick={() => loginUser()} variant="contained" className={classes.loginBtn}>Login</Button>
                            <Typography style={{textAlign: 'center'}} className={classes.text2}>OR</Typography>
                            <Button variant="contained" className={classes.requiestBtn}>Requiest OTP</Button>
                            <Typography onClick={()=> loginSettings()} className={classes.text3}>New to Flipkart? Create an account</Typography>
                        </Box> :

                        <Box className={classes.signup}>
                            <TextField onChange={(e) => onInputChange(e)} name='firstname' label='Enter First Name' />
                            <TextField onChange={(e) => onInputChange(e)} name='lastname' label='Enter Last Name' />
                            <TextField onChange={(e) => onInputChange(e)} name='username' label='Enter User Name' />
                            <TextField onChange={(e) => onInputChange(e)} name='email' label='Enter Email Id' />
                            <TextField onChange={(e) => onInputChange(e)} name='password' label='Enter Password' />
                            <TextField onChange={(e) => onInputChange(e)} name='phone' label='Enter Phone Number' />
                            <Button onClick={() => signupUser()} variant="contained" className={classes.loginBtn} style={{marginTop: 20}}>Signup</Button>
                        </Box>
                    }
                </Box>
            </DialogContent>
        </Dialog>
    )
}

export default Login;