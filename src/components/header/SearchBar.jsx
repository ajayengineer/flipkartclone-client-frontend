import { makeStyles, InputBase } from '@material-ui/core';
import {Search} from '@material-ui/icons';

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
}))

const SearchBar = () =>{
    const classes = useStyle();

    return(
        <div className={classes.search}>
        <InputBase
          placeholder="Search for Products, Brands and More..."
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
        />
        <div className={classes.searchIcon}>
          <Search />
        </div>
      </div>
    )
}

export default SearchBar;