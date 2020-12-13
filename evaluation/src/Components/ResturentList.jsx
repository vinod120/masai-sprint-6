import React from 'react'
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import PhoneIcon from '@material-ui/icons/Phone';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Rating from '@material-ui/lab/Rating';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme)=>({
    root:{
        marginTop:10,
        padding:10
    },
    container:{
        width: 650,
    },
    establish:{
        color: '#89959b',
        textTransform: "uppercase",
        letterSpacing: ".01em",
        fontSize:12,
        marginTop: 7,
        textAlign:'left',
        marginBottom:2
    },
    resturent_name:{
        color: '#cb202d',
        fontSize: 24,
        fontWeight: 600,
        cursor: 'pointer',
        textAlign: 'left'
    },
    city_name:{
        color: '#333739',
        textAlign:'left',
        fonSize: 14,
        marginTop:5,
        fontWeight: 'bold'
    },
    city_address:{
        marginTop:5,
        maxWidth: 300,
        overflow: 'hidden',
        textOverflow: "ellipsis",
        whiteSpace: 'nowrap',
        color: '#89959b',
        textAlign: 'left'
    },
    buttons: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    cuisin_address:{
        maxWidth: 600,
        overflow: 'hidden',
        textOverflow: "ellipsis",
        whiteSpace: 'nowrap',
        color: '#89959b',
        textAlign: 'left'
    },
}))

const ResturentList = (props) => {
    console.log(props)
    const classes = useStyles()
    
    const {name , id, thumb, cuisines, timings, average_cost_for_two, location, establishment, user_rating, R} = props.item.restaurant
    console.log("name",name, "id",id, "thumb",thumb, "cuisines", cuisines, "timings", timings, "avg",average_cost_for_two, "location", location.address, "city", location.city , "establishment", establishment[0], "user_rating", user_rating)
    const clr = user_rating.rating_obj.bg_color.type
    const style = {
        color: clr,
    }
    let photo = thumb ? thumb: 'https://via.placeholder.com/150'
    return (
        <>
            <Container className={classes.container}>
                <Paper elevation={3} className={classes.root} >
                        <Box display="flex" flexDirection="row">
                            <Box p={1} style={{marginRight:10}}>
                                <img src={photo} alt="vinod" width="150px" height="150px" style={{borderRadius:5}}/>
                            </Box>
                            <Box>
                                <div className={classes.establish}>{establishment[0]}</div>
                                <div className={classes.resturent_name}><Link to={`/dashboard/${R.res_id}`}style={{textDecoration:'none', color: '#cb202d'}}>{name}</Link></div>
                                <div style={{textAlign:'left', fontSize:12}}>
                               <Rating name="read-only" style={{...style, fontSize:15}} value={user_rating.aggregate_rating} readOnly /><span style={{marginTop:-5}}>({user_rating.votes} Reviews) | {user_rating.rating_text}</span></div>
                                <div className={classes.city_name}>{location.city}</div>
                                <div className={classes.city_address} style={{fontSize:15}}>{location.address}</div>
                            </Box>
                        </Box>
                        <div style={{borderTop: '1px solid #e7e7e7', borderBottom: '1px solid hsla(0,0%,100%,.1)'}}></div>
                        <Box style={{textAlign:'left', marginLeft:7}} className={classes.cuisin_address}>
                            <pre><span style={{color:'#89959b', marginRight:10}}>CUISINES:        </span><span style={{color:'#33373d'}}>{cuisines}</span></pre>
                            <pre><span style={{color:'#89959b', marginRight:10}}>COST FOR TWO:    </span><span style={{color:'#33373d'}}>{average_cost_for_two}</span></pre>
                            <pre><span style={{color:'#89959b', marginRight:10}}>HOURS:           </span><span style={{color:'#33373d'}}>{timings}</span></pre>
                        </Box>
                        <div style={{borderTop: '1px solid #e7e7e7', borderBottom: '1px solid hsla(0,0%,100%,.1)'}}></div>
                        <Box>
                            <ButtonGroup variant="outlined" aria-label="outlined  button group" className={classes.buttons}>
                                <Button style={{width:'33.33%', borderLeft:0, borderTop:0, borderBottom:0, padding:15, textTransform:'none', fontWeight:'bold', color:'#595c60', fontSize:14}}> <PhoneIcon style={{marginRight:5, fontSize:16}}></PhoneIcon>Call</Button>
                                <Button style={{width:'33.33%',  borderTop:0, borderBottom:0, padding:15, textTransform:'none', fontWeight:'bold', color:'#595c60', fontSize:14}}><MenuBookIcon style={{marginRight:5, fontSize:16}}></MenuBookIcon>View Menu</Button>
                                <Button style={{width:'33.33%',  borderTop:0, borderBottom:0, borderRight:0, backgroundColor:'#099E44', padding:15, textTransform:'none', color:'whitesmoke', fontWeight:'bold', fontSize:14}}><ShoppingCartIcon style={{marginRight:5, fontSize:16}}></ShoppingCartIcon>Order Now</Button>
                            </ButtonGroup>
                        </Box>
                        <div style={{borderTop: '1px solid #e7e7e7', borderBottom: '1px solid hsla(0,0%,100%,.1)'}}></div>
                </Paper>
            </Container>
        </>
    )
}

export default ResturentList