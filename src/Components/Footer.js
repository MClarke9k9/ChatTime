import React from 'react';
import './Footer.css';

class Footer extends React.Component{
Copyright=()=>{
  return(
    <h3 variant="body2" color="textSecondary" align="center">
    {'Copyright © '}
   
    {'Mark Clarke '}
    
    {new Date().getFullYear()}
    {'.'}
  </h3>
  )
}
render(){
  return (
    <footer>
      <div class="footer 2-box is-center">
               {this.Copyright()}
        </div>
    </footer>
  )
}
 
}

export default Footer;