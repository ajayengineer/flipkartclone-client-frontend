import { makeStyles, Box, Typography, Button, Divider } from "@material-ui/core";
import NavBar from "./NavBar";
import Banner from "./Banner";
import Slide from "./Slide";
import MidSection from "./MidSection";

// import { products } from "../../constants/data";

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import { getProducts as listProducts } from '../../redux/actions/productActions';


const useStyle = makeStyles ({
   component:{
      padding: 10,
      background: '#f2f2f2'
   },
   slideAdd:{
      display: 'flex'
   },
   slider:{
      width: '79%'
   },
   rightwrapper:{
      background: '#ffffff',
      padding: 10,
      margin:'12px 0 0 10px'
   }
})
const Home = () =>{
   const classes = useStyle();
   const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';

   const { products } = useSelector(state => state.getProducts)


   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(listProducts())
   }, [dispatch])

   return(
      <div>
          <NavBar />
          <Box className={classes.component}>
            <Banner />
            <Box className={classes.slideAdd}>
                  <Box className={classes.slider}>
                     <Slide 
                      timer={true} 
                      title="Deal of the day"
                      products={products}
                     /> 
                  </Box>
                  <Box className={classes.rightwrapper}>
                     <img src={adURL} style={{width: 250}} />
                  </Box>
            </Box>
            <MidSection />
            <Slide 
              timer={false}
              title="Discount for You"
              products={products}
             /> 
            <Slide 
              timer={false}
              title="Suggested Items"
              products={products}
             /> 
            <Slide 
              timer={false}
              title="Top Selection"
              products={products}
             /> 
            <Slide 
              timer={false}
              title="Recommended Items"
              products={products}
             /> 
            <Slide 
              timer={false}
              title="Best Sellers"
              products={products}
             /> 
          </Box>
          
      </div>
   )
}

export default Home;