import Carousel from 'react-material-ui-carousel';
import { bannerData } from '../../constants/data';
import { makeStyles, Slide } from '@material-ui/core';

const useStyle = makeStyles({
   image:{
       width: '100%',
       heigh:280,
   }
})
const Banner=()=>{
    const classes = useStyle();
    return(
        <Carousel
        autoPlay={true}
        stopAutoPlayOnHover={true}
        animation="slide"
        swipe={true}
        indicators={false}
        navButtonsAlwaysVisible={true}
        >
            {
                bannerData.map(image=>(
                    <img src={image} className={classes.image} />
                ))
            }
        </Carousel>
    )
}

export default Banner;