import React from 'react'
import backgImage from '../image/sky.PNG'
function Jumbotron(prop){
  const styleB ={
    backgroundImage:'url('+backgImage+')',
    color:'white',
  fontWeight:'bold',
  fontSize:20
  }
    return(
        <div className="jumbotron jumbotron-fluid" style={styleB}>
  <div className="container text-center mt-3 mb-5 pt-5 pb-3">
    <h1 className="display-5" style={{fontSize:40,fontWeight:"bolder"}}>Clicky Game!</h1>
    <p className="lead ">Click on an image to earn points, but don't click on any more than once!</p>
  </div>
</div>
    )
}
export default Jumbotron