import { container, title } from "assets/jss/material-kit-react.js";

import imagesStyles from "assets/jss/material-kit-react/imagesStyles.js";

const depoimentsStyle = theme=>({
  section: {
    padding: "70px 0"
  },
  container,
  space50: {
    height: "50px",
    display: "block"
  },
  card:{
    background: "#00B6FF",
    "&:hover":{
    boxShadow: "3px 3px 5px rgba(0, 0, 0, 0.5)",
    },
    padding: "1em",
    borderRadius: "10px",
    width: "100%",
    margin:"auto",
    display: "inline-block",
    clipPath: "circle(110% at 50% 20%)",
    transition: "all .5s ease-in-out",
    cursor: "pointer",
    color: "#fff",
    textAlign: "center",
    "& span": {
      float: "right",
      fontWeight: "bold",
      transition: "color .5s",
      position: "relative",
      marginRight: "4%",
    },
    "& h1": {
      margin: 0,
      fontSize: "25px",
      minHeight:"56px",
    },
    "& h2":{
      color:"#eee",
      fontSize: "20px",
      marginTop:"2px", 
    },
    "& p": {
      marginTop:"10px",
      textAlign:"center",
      fontSize: "20px",
      lineHeight: "30px",
      "& strong":{
        fontSize: "30px",
        padding: "5px",
      }
    }
  },
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    textAlign:"center",
  },
  subTitle:{
    textAlign:"center",
  },
  btnAgendar:{
    display: "block",
    margin:"auto",
    fontSize: "100%",
  },
  icons:{
    width: "30px !important",
    height: "30px !important",
  },
  typo: {
    paddingLeft: "25%",
    marginBottom: "40px",
    position: "relative",
    width: "100%"
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: "10px",
    color: "#c0c1c2",
    display: "block",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "13px",
    left: "0",
    marginLeft: "20px",
    position: "absolute",
    width: "260px"
  },
  itemGrid: {
    [theme.breakpoints.down("sm")]: {
    margin:"10px",  
    },  
    [theme.breakpoints.up("sm")]: {
      margin:"auto",  
      }
  },
  ...imagesStyles
});

export default depoimentsStyle;
