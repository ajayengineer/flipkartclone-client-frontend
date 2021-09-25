import { navData } from "../../constants/data";
import {Box, Typography, makeStyles} from '@material-ui/core';

const useStyle = makeStyles({
    component:{
        display: 'flex',
        margin: '60px 130px 0px 130px',
    },
    container:{
        textAlign: 'center',
        padding: '12px 8px',
        margin: '0px 18px'
    },
    image:{
        width: 64,
    },
    text:{
        fontSize: 14,
    }
})

const NavBar = () => {
    const classes = useStyle();
    return(
        <Box className={classes.component}>
            {
                navData.map(data =>(
                    <Box className={classes.container}>
                        <img src={data.url} className={classes.image} /> 
                        <Typography className={classes.text}> {data.text} </Typography>
                    </Box>
                ))
            }

        </Box>
    )
}


export default NavBar;