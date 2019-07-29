import React from 'react';
class Navbar extends React.Component {

    
render(){
const navStyle = {
  background:'darkslateblue'
}
const aStyle ={
  color:'white',
  fontWeight:'bold',
  fontSize:30
}
    return (
        <nav className="navbar  navbar-light py-3" style={navStyle}>
  <a className="navbar-brand pl-5 font-weight-bolder" style={aStyle} href="#">Clicky Game</a>
  <a className="nav-link" style={aStyle} href="#">Click an image to start!</a>      
  <div id="navbarText">
    <ul className="navbar-nav">
      <li className="nav-item active text-center">
         <a className="nav-link" style={aStyle}href="#"><span>Score:{this.props.scoreParent}<span></span> | Top Score:<span>{this.props.topScoreParent}</span></span></a>
      </li>
    </ul>
  </div>
</nav>
        
        );

}
}
 
export default Navbar;