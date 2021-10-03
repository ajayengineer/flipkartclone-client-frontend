import { Box, makeStyles, Typography, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const useStyle = makeStyles({
    component:{
        marginTop:55,
        padding:'30px 135px',
        backgroundColor:'#dfeafd',
        marginTop:'0px'
    },
    leftComponent:{
        width:'100%',
        backgroundColor:'#ffffff',
        paddingBottom: 30
    },
    header:{
        padding: '15px 24px'
        
    },
    image:{
        width: '200px',
    },
    EmptyPart:{
        margin: '0px auto',
        textAlign:'center'
    },
    TextFormal:{
        fontSize:'14px',
        textAlign:'center'
    },
    shopBtn:{
        backgroundColor:'orange',
        marginTop:20,
        fontSize:14,
        color:'#ffffff'
    }
})

const EmptyCart = () =>{
    const emptycarturl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';
    const classes = useStyle();
    const history = useHistory();

    const addItem = () =>{
        history.push('/')
    }
    
    return (
        <Box className={classes.component}>
            <Box className={classes.leftComponent}>
                <Box className={classes.header}>
                <Typography style={{fontWeight:600, fontSize:18}}>My Cart</Typography>
                </Box>
                <Box className={classes.EmptyPart}>
                   <img src={emptycarturl} className={classes.image}/>
                   <Typography className={classes.TextFormal}> Missing Cart items?</Typography>
                   <Typography className={classes.TextFormal}> Login to see the items you added previously </Typography>
                   <Button onClick={() => addItem()} className={classes.shopBtn} variant="contained">Shop Now</Button>
                </Box>
            </Box>
        </Box>

    )
}

export default EmptyCart;