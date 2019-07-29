import React, { Component } from 'react'

export default class Content extends Component {
  state ={
    score:0
  };
   handleClick =(e)=>
   {
    e.target.className.includes('foo')?this.setZero(e):this.handleScore(e)
    e.target.src = this.props.imgArr[Math.ceil(Math.random()*11)]
  }
    handleScore =(e)=>{
      e.target.className += " foo"
      const Score = this.state.score + 1
      this.setState({score:Score});
      console.log(this.state.score)
      this.props.handleChange(Score)
    };
    setZero =(e)=>{
      const Zero = 0
      this.setState({score:Zero})
      console.log(this.state.score)
      this.props.handleChange(Zero)
    }
      
  
  
    render() {
        return (
            <div>
                <div className="container">
  <div className="row">
    <div className="col-sm">
      <img id="1" src={this.props.imgArr[Math.ceil(Math.random()*11)]} className="img-thumbnail" alt="image" onClick={this.handleClick}/>
    </div>
    <div className="col-sm">
     <img id="2" src={this.props.imgArr[Math.ceil(Math.random()*11)]}  className="img-thumbnail" alt="image" onClick={this.handleClick}/>
    </div>
    <div className="col-sm">
     <img id="3" src={this.props.imgArr[Math.ceil(Math.random()*11)]} className="img-thumbnail" alt="image" onClick={this.handleClick}/>
    </div>
    <div className="col-sm">
     <img id="4" src={this.props.imgArr[Math.ceil(Math.random()*11)]} className="img-thumbnail" alt="image" onClick={this.handleClick}/>
    </div>
  </div>
  <div className="container">
  <div className="row">
    <div className="col-sm">
      <img id="1" src={this.props.imgArr[Math.ceil(Math.random()*11)]} className="img-thumbnail" alt="image" onClick={this.handleClick}/>
    </div>
    <div className="col-sm">
     <img id="2" src={this.props.imgArr[Math.ceil(Math.random()*11)]}  className="img-thumbnail" alt="image" onClick={this.handleClick}/>
    </div>
    <div className="col-sm">
     <img id="3" src={this.props.imgArr[Math.ceil(Math.random()*11)]} className="img-thumbnail" alt="image" onClick={this.handleClick}/>
    </div>
    <div className="col-sm">
     <img id="4" src={this.props.imgArr[Math.ceil(Math.random()*11)]} className="img-thumbnail" alt="image" onClick={this.handleClick}/>
    </div>
  </div>
  <div className="container">
  <div className="row">
    <div className="col-sm">
      <img id="1" src={this.props.imgArr[Math.ceil(Math.random()*11)]} className="img-thumbnail" alt="image" onClick={this.handleClick}/>
    </div>
    <div className="col-sm">
     <img id="2" src={this.props.imgArr[Math.ceil(Math.random()*11)]}  className="img-thumbnail" alt="image" onClick={this.handleClick}/>
    </div>
    <div className="col-sm">
     <img id="3" src={this.props.imgArr[Math.ceil(Math.random()*11)]} className="img-thumbnail" alt="image" onClick={this.handleClick}/>
    </div>
    <div className="col-sm">
     <img id="4" src={this.props.imgArr[Math.ceil(Math.random()*11)]} className="img-thumbnail" alt="image" onClick={this.handleClick}/>
    </div>
  </div>
</div>
</div>
</div>
</div>

        )
    }
}
