import { Typography, Box, makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";

const useStyle = makeStyles({
    component:{
        backgroundColor: '#ffffff',
        padding: '20px'
    },
    priceSection:{
        fontSize:14,
        '& > *': {
            fontSize:14
        }
    },
    totalAmount:{
        fontSize:18,
        fontWeight:600,
        borderTop:'1px solid #e0e0e0',
        borderBottom:'1px solid #e0e0e0',
        padding: '20px 0px',
        margin:'10px 0px'
    }
})
const TotalView = ({ cartItems, item }) => {
    const classes = useStyle();
    const [price, setPrice] = useState(0);
    const [discount, setDiscount] = useState(0);

    useEffect(() => {
        totalAmout();
    }, [cartItems]);

    const totalAmout = () =>{
         let price = 0, discount = 0;

        cartItems.map(item => {
            price += item.price.mrp;
            discount += (item.price.mrp - item.price.cost);
        });
        setPrice(price);
        setDiscount(discount);
    }
    return (
        <Box className={classes.component}>
            <Box>
                <Typography> <b>Price Details </b></Typography>
            </Box>
            <Box className={classes.priceSection}>
               <Typography> Price:  ({cartItems.length} Item) <span style={{float: 'right'}}> ₹{price}  </span></Typography>
               <Typography> Discount: <span style={{float: 'right'}}> - {discount} </span>  </Typography>
               <Typography> Dilivery Charge: <span style={{float: 'right'}}> ₹40 </span>  </Typography>
               <Typography className={classes.totalAmount}> Total Amout: <span style={{float: 'right'}}> {price - discount + 40}</span>  </Typography>
               <Typography style={{color:'green'}}> You will save: <span style={{float: 'right'}}> {discount - 40} on this order</span>  </Typography>
            </Box>
        </Box>
    )
}

export default TotalView;