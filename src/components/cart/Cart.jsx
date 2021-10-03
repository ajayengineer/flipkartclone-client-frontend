import {Box, makeStyles, Typography, Button} from '@material-ui/core';
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { removeFromCart } from '../../redux/actions/cartActions';

//Components
import CartItem from './cartItem';
import EmptyCart from './EmptyCart';
import TotalView from './TotalView';

const useStyle = makeStyles({
    component:{
        marginTop:55,
        padding:'30px 135px',
        backgroundColor:'#dfeafd',
        marginTop:'0px',
        display:'flex'
    },
    leftComponent:{
        width:'67%'
    },
    rightComponent:{
        width:'31%',
        marginLeft: '20px'
    },
    header:{
        padding: '15px 24px',
        backgroundColor:'#ffffff'
    },
    plaecOrder:{
        backgroundColor:'#fb641b',
        color:'#ffffff',
        display:'flex',
        marginLeft: 'auto',
    },
    buttomPart:{
        padding:'16px 24px',
        backgroundColor:'#ffffff',
        borderTop:' 1px solid #ccc'
    }
})

const Cart = () =>{
    const classes = useStyle();
    const { cartItems } = useSelector(state => state.cart);

    const dispatch = useDispatch();

    useEffect(() =>{
        console.log(cartItems);
    })

    const removeItemFromCart = (id) =>{
        dispatch(removeFromCart(id));
    }
    return(
        <div>
            {
                cartItems.length ? 
                 <Box className={classes.component}>
                     <Box className={classes.leftComponent}>
                        <Box className={classes.header}>
                            <Typography style={{fontWeight:600, fontSize:18}}>My Cart ({cartItems.length})</Typography>
                        </Box>
                        {
                            cartItems.map(item =>(
                                <CartItem item={item} removeItemFromCart={removeItemFromCart} />
                            ))
                        }
                        <Box className={classes.buttomPart}>
                            <Button variant="contained" className={classes.plaecOrder}> Place Order </Button>
                        </Box>
                     </Box>
                     <Box className={classes.rightComponent}>
                        <TotalView cartItems={cartItems} />
                     </Box>
                </Box>
                
                : <EmptyCart />
            }
        </div>
    )
}

export default Cart;