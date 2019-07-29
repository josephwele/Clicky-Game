import React from 'react';
class Navbar extends React.Component {

    
render(){
const navStyle = {
  background:'darkslateblue',
  color:"darkslateblue",
}
    return (
        <nav className="navbar  navbar-light py-3" style={navStyle}>
  <a className="navbar-brand pl-5 font-weight-bolder" href="#">Clicky Game</a>
  <div id="navbarText">
    <ul className="navbar-nav mr-auto" style={navStyle}>
      <li className="nav-item active text-center">
        <a className="nav-link float-none" href="#">Click an image to start!</a>
        <a className="nav-link float-left" href="#"><span>Score:{this.props.scoreParent}<span></span> | Top Score:<span>{this.props.topScoreParent}</span></span></a>
      </li>
    </ul>
  </div>
</nav>
        
        );

}
}
 
export default Navbar;