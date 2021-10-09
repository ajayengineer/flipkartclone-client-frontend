import { Box, Button, makeStyles } from '@material-ui/core';
import { mergeClasses } from '@material-ui/styles';
import { useDispatch } from 'react-redux';
import {addToCart } from '../../redux/actions/cartActions';
import {useHistory} from 'react-router-dom';


const useStyle = makeStyles ({
    buttonsConntainer:{
        display:'flex'
    },
    image:{
        padding: '16px 20px',
        border: '#f0f0f0'
    },
    addToCartBtn:{
        backgroundColor: 'yellow',
        fontSize:'16px',
        textAlign:'center',
        width:'45%',
        margin:'10px'
    },
    buyNow:{
        backgroundColor: 'orange',
        fontSize:'16px',
        textAlign:'center',
        margin:'10px',
        width:'45%'

    }
})
const ActionItems = ({ products }) =>{
    const classes = useStyle();
    const history = useHistory();

    const dispatch = useDispatch();

    const addItemToCart = () =>{
        dispatch(addToCart(products.id)); 
        history.push('/cart')
    }

    return(
        <Box>
            <img src={products.detailUrl} className={classes.image} />
            <Box className={classes.buttonsConntainer}>
                <Button onClick={() => addItemToCart()} className={classes.addToCartBtn}> Add to Cart</Button>
                <Button className={classes.buyNow}>Buy Now</Button>
            </Box>
        </Box>
    )
}

export default ActionItems;