import { useEffect, useState } from "react";
import { makeStyles, InputBase, List, ListItem } from '@material-ui/core';
import {Search} from '@material-ui/icons';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts as listProducts } from '../../redux/actions/productActions';

const useStyle = makeStyles((theme)=>({
    search: {
        borderRadius: theme.shape.borderRadius,
        backgroundColor:'#fff',
        marginLeft: 10,
        width: '38%',
        display: 'flex',
        color:'black',
        paddingLeft: 10,
        paddingTop: 5,
      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'blue',
        marginTop:5,
      },
      inputRoot: {
        color: 'inherit',
        width:'100%',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        fontSize:12,
      },
      list:{
        backgroundColor:'#ffffff',
        position:'absolute',
        color:'#000000'
      }
}))

const SearchBar = () =>{
    const classes = useStyle();
    const [text,setText] = useState();

    const getText = (text) => {
      setText(text);
    }

   const getProducts = useSelector(state => state.getProducts)
   const { products } = getProducts;

   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(listProducts())
   }, [dispatch])


    return(
        <div className={classes.search}>
        <InputBase
          placeholder="Search for Products, Brands and More..."
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
          onChange={(e) => getText(e.target.value)}
        />
        <div className={classes.searchIcon}>
          <Search />
        </div>
        {
          text && 
          <List className={classes.list}>
             {
               products.filter(product => product.title.lognTitle.toLowerCase().includes(text.toLowerCase())).map(product => {
                  <ListItem>
                    {product.title.lognTitle}
                  </ListItem>
               })
             }
          </List>
        }
      </div>
    )
}

export default SearchBar;