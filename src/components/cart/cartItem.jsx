import { Card, Box, makeStyles, Typography, Button, capitalize } from '@material-ui/core';

//Components
import AddButton from './AddButton';

const myStyle = makeStyles({
    component:{
        display:'flex',
        borderRadius:'0px',
        borderBottom: '1px solid #ccc',
        padding: '10px 0px'
    },
    leftComponent:{
        marginTop:20,
        marginLeft:20,
        display: 'flex',
        flexDirection: 'column'
    },
    rightComponent:{
        marginTop:20,
        marginLeft:30
    },
    priceCost:{
        fontSize: '22px',
        color: 'green',
        fontWeight: 600
    },
    priceMrp:{
        fontSize: '14px',
        color: '#666666'
    },
    priceDiscount:{
        fontSize: '16px',
        color: 'orange',
        paddingLeft: 20
    },
    availableOffers:{
        fontSize: '16px',
        color:'#666666',
        fontStyle: 'italic',
        '& > *':{
            fontSize: '14px'
        }
    },
    image:{
        width: '80px',
        margin: '0px 20px 20px 20px'
    },
    removeBtn:{
        backgroundColor: 'red',
        marginTop: 20,
        fontSize:'16px',
        textTransform:'capitalize'
    }
})


const cartItem = ({ item, removeItemFromCart }) =>{
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    const classes = myStyle();
    
    return(
        <Card className={classes.component}>
            <Box className={classes.leftComponent}>
                    <img src={item.url} className={classes.image} />
                    <AddButton />
            </Box>
            <Box className={classes.rightComponent}>
                   <Typography> {item.title.longTitle} </Typography>
                   <Typography style={{marginTop:10, fontSize:14, color:'#878787'}}>
                        Seller: Fortun 500 
                        <span><img src={fassured} style={{width:'50px', marginLeft:10}} /></span>
                   </Typography>
                   <Typography>
                            <span className={classes.priceCost}>₹ {item.price.cost} </span>
                            <span className={classes.priceMrp}><strike> ₹ {item.price.mrp} </strike> </span>
                            <span className={classes.priceDiscount}>{item.price.discount} Off </span>
                   </Typography>
                   <Button onClick={() => removeItemFromCart(item.id)} variant="contained" className={classes.removeBtn}>Remove</Button>
            </Box>
        </Card>
    )
}

export default cartItem;