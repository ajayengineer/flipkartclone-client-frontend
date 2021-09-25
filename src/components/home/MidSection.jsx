import { Box, makeStyles } from "@material-ui/core";
import { mergeClasses } from "@material-ui/styles";
import {ImageURL} from '../../constants/data';


const useStyle = makeStyles ({
    wrapper:{
        display: 'flex',
        marginTop:20,
        justifyContent: 'space-between'
    },
    imgwith:{
        width: '33%'
    },
    covidAdd:{
        width: '100%',
        marginTop:20
    }
})
const MidSection = ()=>{
    const classes = useStyle();
    const coronaURL = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';

    return (
        <>
            <Box className={classes.wrapper}>
            {
              ImageURL.map(image =>(
                  <img src={image} className={classes.imgwith} />
              ))  
            }
            </Box>

            <Box>
                <img src={coronaURL} className={classes.covidAdd} />
            </Box>
        </>
    )
}

export default MidSection;