import { makeStyles } from '@material-ui/core/styles';
const drawerWidth = 240;
export const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    toolbar: {
      paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar,
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    menuButtonHidden: {
      display: 'none',
    },
    title: {
      flexGrow: 1,
  },
  userTitle: {
    marginRight: 15,
    marginLeft:15,
    fontSize:14
},
    drawerPaper: {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerPaperClose: {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    fixedHeight: {
      height: 'auto',
  },
    formControl: {
      margin: theme.spacing(2),
      minWidth: 180,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
  },
  setingButt: {
      frontSize:'14px'
  },
  toolbars: {
    padding:'0 20px',
    backgroundColor: '#cac9c93b',
    marginBottom:20,
    boxShadow:'0 0 5px rgba(0,0,0,.2)'
  },
  prodHandbutt: {
    fontSize:8
  },
  prodTitle: {
    fontSize:16
  },
  handleboxe: {
    backgroundColor: '#cac9c93b',
    
  },
  prodImgbox: {
    width:26
  },
  prodAddbutt: {
    margin:'0 0 10px 25px'
  },
  add_buttons: {
    width:260
  },
  add_video: {
    marginTop:10
  },
  youtubeList: {
    maxWidth: 560,
    padding: '15px 10px',
    marginTop: 30,
    border: '1px solid rgb(221, 221, 221)'
  }


  }));