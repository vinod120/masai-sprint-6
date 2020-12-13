import { Box, Card, Grid, List, ListItem, Typography } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import DirectionsOutlinedIcon from '@material-ui/icons/DirectionsOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Avatar from '@material-ui/core/Avatar';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  function TabPanelVertical(props) {
    const { children, value_1, index_1, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value_1 !== index_1}
        id={`vertical-tabpanel-${index_1}`}
        aria-labelledby={`vertical-tab-${index_1}`}
        {...other}
      >
        {value_1 === index_1 && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

  TabPanelVertical.propTypes = {
    children: PropTypes.node,
    index_1: PropTypes.any.isRequired,
    value_1: PropTypes.any.isRequired,
  };
  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }

  function a11yPropsVertical(index_1) {
    return {
      id: `vertical-tab-${index_1}`,
      'aria-controls': `vertical-tabpanel-${index_1}`,
    };
  }
  
  
const useStyles = makeStyles({
    root:{
        textAlign:'left'
    },
  title: {
    fontWeight: 700,
    color:'rgb(28,28,28)',
    cursor:'pointer'
  },
  subHeading:{
      color: 'rgb(105, 105, 105)',
      cursor:'pointer',
      '&:hover': {
        color: '#212121',
      },
  },
  buttonDisplay:{
      marginLeft: 15,
      borderRadius: 10,
      border:'1px solid rgb(156, 156, 156)',
      textTransform: 'none',
  }
});
const SingleResturant = (props) => {
    const classes = useStyles()
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const [value_1, setValue_1] = React.useState(0);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    const handleChangeVertical = (event, newValue_1)=>{
        setValue_1(newValue_1)
    }
    const handleChangeIndex = (index) => {
      setValue(index);
    };
    console.log(props)
    const { id } = props.match.params
    const data = useSelector(state=>state.zomato.data)
    console.log(data)
    const obj = data.find(item=>item.restaurant.R.res_id == id)
    console.log(obj)
    const {featured_image, name, cuisines, location, timings, user_rating, phone_numbers, highlights} = obj.restaurant
    const clr = user_rating.rating_obj.bg_color.type
    const style = {
        color: clr,
    }
    return (
        <>
            <Box maxWidth="xl" className={classes.root}>
                <Grid>
                    {
                        featured_image ? <img src={featured_image} alt="vinod"/> : <img src='https://via.placeholder.com/150' alt="vinod" />
                    }
                </Grid>
                <Box display="flex" p={1}>
                    <Box p={1} flexGrow={1}>
                        <Typography variant="h3" gutterBottom className={classes.title}>
                            {name}
                        </Typography>
                        <Grid className={classes.subHeading}>
                            {cuisines}
                            <br />
                            {location.city}
                        </Grid>
                    <Grid>
                        <Typography style={{color:'rgb(244, 162, 102)'}}> 
                            Open now - <span style={{color:'rgb(105, 105, 105)'}}>{timings} 
                            <Tooltip title={timings}>
                                <IconButton aria-label="delete">
                                    <InfoOutlinedIcon />
                                </IconButton>
                            </Tooltip>
                            </span>
                        </Typography> 
                    </Grid>
                    <Grid display="flex">
                        <Button variant="contained" className={classes.buttonDisplay} color="secondary" style={{width:150}}>
                            <StarBorderIcon style={{marginRight:5}}/>Add Review
                        </Button>
                        <Button variant="outlined" className={classes.buttonDisplay}>
                            <DirectionsOutlinedIcon style={{marginRight:5}} color="secondary"/> Direction
                        </Button>
                        <Button variant="outlined" className={classes.buttonDisplay}>
                            <BookmarkBorderOutlinedIcon style={{marginRight:5}} color="secondary"/>Bookmark
                        </Button>
                        <Button variant="outlined" className={classes.buttonDisplay}>
                            <ShareOutlinedIcon style={{marginRight: 5}} color="secondary"/>Share
                        </Button>
                    </Grid>
                    </Box>
                    <Box p={1}>
                        <Rating name="size-large" size="large" value={user_rating.aggregate_rating} style={{...style}}/>
                        <br />
                        <span style={{color:'rgb(75, 75, 75)', borderBottom:'1px dashed rgb(181, 181, 181)', marginLeft:10}}>{user_rating.votes} Reviews</span>
                    </Box>
                </Box>
                <Box>
                    <AppBar position="static" color="default">
                        <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="secondary"
                        textColor="secondary"
                        variant="fullWidth"
                        aria-label="full width tabs example"
                        >
                        <Tab label="Overview" {...a11yProps(0)} />
                        <Tab label="Order Online" {...a11yProps(1)} />
                        <Tab label="Reivews" {...a11yProps(2)} />
                        <Tab label="Highlights" {...a11yProps(3)} />
                        <Tab label="Photos" {...a11yProps(4)} />
                        </Tabs>
                    </AppBar>
                        <SwipeableViews
                            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                            index={value}
                            onChangeIndex={handleChangeIndex}
                        >
                            <TabPanel value={value} index={0} dir={theme.direction}>
                                <Typography style={{fontSize:30}}>About this place</Typography>
                                    <Box display="flex">
                                        <Box display="flex" style={{marginTop:10}}>
                                            <Button variant="outlined" style={{marginRight:10}}>
                                                <Box display="flex">
                                                    <Grid><Avatar src="https://b.zmtcdn.com/data/o2_assets/ebd42529c3342bdaf8b624a63a571fcc1585754330.png" /></Grid>
                                                    <Grid style={{marginLeft:5}}>
                                                        <Typography style={{color:'rgb(156, 156, 156)', fontSize:10}}>RESTAURANT SAFETY MEASURE</Typography>
                                                        <Typography style={{textTransform:'none', fontSize:15}}>Well Sanitized Kitchen</Typography>
                                                    </Grid>
                                                </Box>
                                            </Button>
                                            <Button variant="outlined" style={{marginRight:10}}>
                                                <Box display="flex">
                                                    <Grid><Avatar src="https://b.zmtcdn.com/data/o2_assets/fa7443fb81df3ff2c54186672599c3db1585754076.png" /></Grid>
                                                    <Grid style={{marginLeft:5}}>
                                                        <Typography style={{color:'rgb(156, 156, 156)', fontSize:10}}>RESTAURANT SAFETY MEASURE</Typography>
                                                        <Typography style={{textTransform:'none', fontSize:15}}>Rider Hand Wash</Typography>
                                                    </Grid>
                                                </Box>
                                            </Button>
                                            <Button variant="outlined" style={{marginRight:10}}>
                                                <Box display="flex">
                                                    <Grid><Avatar src="https://b.zmtcdn.com/data/o2_assets/8ecc61badb80ea685f0afc71a4d721671585754288.png" /></Grid>
                                                    <Grid style={{marginLeft:5}}>
                                                        <Typography style={{color:'rgb(156, 156, 156)', fontSize:10}}>RESTAURANT SAFETY MEASURE</Typography>
                                                        <Typography style={{textTransform:'none', fontSize:15}}>Daily Temp. Checks</Typography>
                                                    </Grid>
                                                </Box>
                                            </Button>
                                        </Box>
                                        <Box style={{marginLeft:20}}>
                                            <Card >
                                                <Typography style={{textTransform:'none', fontSize:25, padding:10}}>Call</Typography>
                                                <span style={{color:'rgb(245, 112, 130)'}}>{phone_numbers}</span>
                                            </Card>
                                        </Box>
                                    </Box>
                            </TabPanel>
                            <TabPanel value={value} index={1} dir={theme.direction}>
                                <div>
                                    <Tabs
                                        orientation="vertical"
                                        variant="scrollable"
                                        value={value_1}
                                        onChange={handleChangeVertical}
                                        aria-label="Vertical tabs example"
                                        indicatorColor="secondary"
                                        textColor="secondary"
                                        className={classes.tabs}
                                        style={{textAlign:'left'}}
                                    >
                                        <Tab label="Recommended (34)" {...a11yPropsVertical(0)} />
                                        <Tab label="Salads (4)" {...a11yPropsVertical(1)} />
                                        <Tab label="Quick Bites (5)" {...a11yPropsVertical(2)} />
                                        <Tab label="Starters (15)" {...a11yPropsVertical(3)} />
                                        <Tab label="Main Course (15)" {...a11yPropsVertical(4)} />
                                        <Tab label="Pizza and Pasta (17)" {...a11yPropsVertical(5)} />
                                        <Tab label="Burgers and Sandwitches (9)" {...a11yPropsVertical(6)} />
                                    </Tabs>
                                    <TabPanelVertical value={value_1} index_1={0}>
                                        Recommended (34)
                                    </TabPanelVertical>
                                    <TabPanelVertical value={value_1} index_1={1}>
                                         Salads (4)
                                    </TabPanelVertical>
                                    <TabPanelVertical value={value_1} index_1={2}>
                                        Quick Bites (5)
                                    </TabPanelVertical>
                                    <TabPanelVertical value={value_1} index_1={3}>
                                        Starters (15)
                                    </TabPanelVertical>
                                    <TabPanelVertical value={value_1} index_1={4}>
                                        Main Course (15)
                                    </TabPanelVertical>
                                    <TabPanelVertical value={value_1} index_1={5}>
                                        Pizza and Pasta (17)
                                    </TabPanelVertical>
                                    <TabPanelVertical value={value_1} index_1={6}>
                                        Burgers and Sandwitches (9)
                                    </TabPanelVertical>
                                </div>
                            </TabPanel>
                            <TabPanel value={value} index={2} dir={theme.direction}>
                                <Typography style={{fontSize:25, textTransform:'none'}}>Reviews</Typography>
                                <Box display="flex">
                                    <Grid style={{fontSize: 20, color:'rgb(150, 150,  150)'}}>
                                        All Reviews ({user_rating.votes}) <ArrowDropDownIcon style={{marginLeft: 10}}/>
                                    </Grid>
                                    <Grid style={{fontSize: 20, color:'rgb(150, 150,  150)', marginLeft:50}}>
                                        Newest First <ArrowDropDownIcon style={{marginLeft: 10}}/>
                                    </Grid>
                                    <Grid style={{marginLeft:150}}>
                                        Tap to rate your experience
                                        <br />
                                        <Rating name="pristine" value={null} />
                                        <br />
                                        <span style={{fontSize:20, color: 'rgb(237, 90, 107)'}}>Write a Review</span>
                                    </Grid>
                                </Box>
                            </TabPanel>
                            <TabPanel value={value} index={3} dir={theme.direction}>
                                <Typography style={{fonSize:30, textTransform:'none'}}>{name} House Menu</Typography>
                                <br />
                                <Typography variant="h5">Highlights</Typography>
                                <br />
                                
                                <List>
                                {
                                    highlights.map(item=>{
                                        return(
                                            <>
                                                <ListItem>{item}</ListItem>
                                            </>
                                        )
                                    })
                                }
                                </List>
                            </TabPanel>
                            <TabPanel value={value} index={4} dir={theme.direction}>
                            <Typography style={{fonSize:30, textTransform:'none'}}>{name} House Photos</Typography>
                            </TabPanel>
                        </SwipeableViews>
                    </Box>
                
            </Box>
        </>
    )
}

export default SingleResturant