import { useEffect } from 'react';
import { Box, makeStyles, Table, TableBody, TableCell, TableRow, Typography } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { getProductDetails } from '../../redux/actions/productActions';
import ActionItem from './ActionItem';
import clsx from 'clsx';    

const useStyle = makeStyles({
    component:{
        marginTop: 55,
        backgroundColor: '#f2f2f2'
    },
    container:{
        margin: '0px 80px',
        backgroundColor: '#ffffff',
        display:'flex'
    },
    detailsLeft:{
        minWidth: '40%'
    },
    detailsRight:{
        minWidth:' 60%',
        padding: '0px 20px',
        '& > *' : {
            marginTop: 10
        }
    },
    smallText: {
        fontSize: 14
    },
    grayText:{
        color: '#878787'
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
    description:{
        fontSize: '16px',
        padding:'20px 50px 0px 0px',
        lineHeight:'26px'
    }
})


const DetailView = ({ match }) =>{
const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
const sellerURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

const classes = useStyle();

const { products } = useSelector(state => state.getProductDetails);
const dispatch = useDispatch();

const date = new Date(new Date().getTime() + ( 5 * 24 * 60 * 60 * 1000));

useEffect(() =>{
    dispatch(getProductDetails(match.params.id));
},)

    return(
        <Box className={classes.component}>
            { products && Object.keys(products).length &&
                <Box className={classes.container}>
                    <Box className={classes.detailsLeft}> 
                        <ActionItem products={products} />
                    </Box>
                    <Box className={classes.detailsRight}>
                        <Typography> {products.title.longTitle} </Typography>
                        <Typography className={clsx(classes.smallText, classes.grayText)}> 
                        8 Ratings & 1 Review <span> <img src={fassured} style={{width: 77, marginLeft:20}} /></span>
                        </Typography>

                        <Typography>
                            <span className={classes.priceCost}>₹ {products.price.cost} </span>
                            <span className={classes.priceMrp}><strike> ₹ {products.price.mrp} </strike> </span>
                            <span className={classes.priceDiscount}>{products.price.discount} Off </span>
                        </Typography>
                        <Typography>
                        <Box className={classes.availableOffers}>
                           <h1>Available offers</h1>

                           <Typography> Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card</Typography>

                           <Typography>Bank Offer 15% Instant discount on first Pay Later order of ₹500 and above </Typography>

                           <Typography> No Cost EMI on Bajaj Finserv EMI Card on cart value above ₹2999 </Typography>
                        </Box>
                    </Typography>


                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell>Delivery</TableCell>
                                    <TableCell>{date.toDateString()} | ₹40</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Warranty</TableCell>
                                    <TableCell>No Warranty</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Seller</TableCell>
                                    <TableCell>
                                        <span>Super Coin</span>
                                        <Typography>GST Invoice Availble</Typography>
                                        <Typography>14 days return policy</Typography>
                                        <Typography>veiw more selleres stating from ₹300</Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        Seller Logo
                                    </TableCell>
                                    <TableCell>
                                    <Typography><img src={sellerURL} style={{width: 200}}/></Typography>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                        <Box>
                            <Typography className={classes.description}>
                                {products.description}
                            </Typography>
                        </Box>
                    </Box>

                </Box>
            }
        </Box>
    )
}

export default DetailView;