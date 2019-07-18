import React from 'react';
function Navbar(props) {
    const navStyle = {
        background:'darkslateblue'
    }

    return (
        <nav className="navbar  navbar-light py-3" style={navStyle}>
  <a className="navbar-brand pl-5 font-weight-bolder" href="#">Clicky Game</a>
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active text-center">
        <a className="nav-link float-left" href="#">Click an image to start!</a>
      </li>
    </ul>
    <span className="navbar-text active mr-2 pr-2">
      <span>Score:<span>0</span>|Top Score:<span>0</span></span>
    </span>
  </div>
</nav>
        
        );

}
    
 
export default Navbar;