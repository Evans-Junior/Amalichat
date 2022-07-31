import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import  {FaUserAlt,FaSistrix,FaEllipsisH,FaPlus, FaCentercode}  from "react-icons/fa";
import './../options.css'
import CloseIcon from '@material-ui/icons/Close';
import { BiPlus,BiUserCircle } from "react-icons/bi";

const drawerWidth = 360;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  looseSpace:{
    padding:'0px',
    margin:'0px',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    
  },
  hide: {
    display: 'none',
  },
  drawer: {
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    width: drawerWidth,
    flexShrink: 0,
    backgroundColor: '#CD5C5C',   

  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',

    justifyContent:'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function Creategroup() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className='optionadd'>
         <div className='after' >

      
      
        <Toolbar className={classes.looseSpace}>
          <IconButton 
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, classes.looseSpace, open && classes.hide)}
          >
            <BiPlus size={20} className='personicon' />
          </IconButton>
          
        </Toolbar>
     
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        
      >
        <div className={classes.drawerHeader}>
          <input type='text' className='searchcontact' placeholder='Search for contacts' />
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <CloseIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
    
        <List className='listnocontact'>
          <label className='notcontact'>Resent Contacts</label>
          {['Kofi', 'Jesse', 'Amankwa', 'David'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <FaUserAlt size={20} className='personicon'/>
 : <FaUserAlt size={20} className='personicon'/>}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List className='listnocontact'>
          <label className='notcontact'>Not contacted yet</label>
          {['James', 'Jane', 'Sam', 'Philip'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <FaUserAlt size={20} className='personicon'/>
 : <FaUserAlt size={20} className='personicon'/>}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      
    </div>
    </div>
   
  );
}
