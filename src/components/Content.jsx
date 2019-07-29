import React, { Component } from 'react'

export default class Content extends Component {
  state ={
    score:0
  };
   handleClick =(e)=>
   {
    const str = e.target.className
    {str.includes('foo')?this.handleScore(e):this.setZero(e)}
    e.target.className += "foo"

          
    };
    handleScore =(e)=>{
      const Score = this.state.score + 1
      this.setState({score:Score});
      console.log(this.state.score)
    };
    setZero =(e)=>{
      const Zero = 0
      this.setState({score:Zero})
      console.log(this.state.score)
    }
      
  
  
    render() {
        return (
            <div>
                <div className="container">
  <div className="row">
    <div className="col-sm">
      <img id="1" src={"https://us.123rf.com/450wm/dualororua/dualororua1801/dualororua180100125/93204701--cartoon-happy-girl-raises-hands-up-.jpg?ver=6"} className="img id=1-thumbnail" alt="image" onClick={this.handleClick}/>
    </div>
    <div className="col-sm">
     <img id="2" src={"https://us.123rf.com/450wm/dualororua/dualororua1801/dualororua180100006/93140161--vector-illustration-of-cute-little-boy-in-green-shirt-walking-.jpg?ver=6"}  className="img id=1-thumbnail" alt="image" onClick={this.handleClick}/>
    </div>
    <div className="col-sm">
     <img id="3" src={"https://us.123rf.com/450wm/dualororua/dualororua1711/dualororua171100145/89762182--cartoon-girl-wearing-winter-clothes-waving-.jpg?ver=6"} className="img id=1-thumbnail" alt="image" onClick={this.handleClick}/>
    </div>
    <div className="col-sm">
     <img id="4" src={"https://us.123rf.com/450wm/dualororua/dualororua1706/dualororua170600539/80388661--cute-girl-go-to-school-.jpg?ver=6"} className="img id=1-thumbnail" alt="image" onClick={this.handleClick}/>
    </div>
  </div>
</div>
<div className="container">
  <div className="row">
    <div className="col-sm">
      <img id="5" src={"https://us.123rf.com/450wm/dualororua/dualororua1706/dualororua170600505/80427881--vector-illustration-of-cartoon-boy-holding-a-book-with-waving-hand-.jpg?ver=6"} className="img id=1-thumbnail" alt="image" onClick={this.handleClick}/>
    </div>
    <div className="col-sm">
     <img id="6" src={"https://us.123rf.com/450wm/dualororua/dualororua1706/dualororua170600050/79430164--muslim-girl-holding-shopping-bag-wearing-red-clothes-.jpg?ver=6"}  className="img id=1-thumbnail" alt="image" onClick={this.handleClick}/>
    </div>
    <div className="col-sm">
     <img id="7" src={"https://us.123rf.com/450wm/dualororua/dualororua1601/dualororua160100051/51075975--cute-mouse-cartoon-waving-.jpg?ver=6"} className="img id=1-thumbnail" alt="image" onClick={this.handleClick}/>
    </div>
    <div className="col-sm">
     <img id="8" src={"https://us.123rf.com/450wm/lenm/lenm1307/lenm130700202/20780205--illustration-of-a-little-kid-girl-superhero-rescue-an-orange-cat-.jpg?ver=6"} className="img id=1-thumbnail" alt="image" onClick={this.handleClick}/>
    </div>
  </div>
</div>
<div className="container">
  <div className="row">
    <div className="col-sm">
      <img id="9" src={"https://us.123rf.com/450wm/dualororua/dualororua1611/dualororua161100209/66653741--cute-boy-prince-with-red-cloak-.jpg?ver=6"} className="img id=1-thumbnail" alt="image" onClick={this.handleClick}/>
    </div>
    <div className="col-sm">
     <img id="10" src={"https://us.123rf.com/450wm/dualororua/dualororua1712/dualororua171200407/92421979--happy-boy-cartoon-wearing-green-christmas-sweater-.jpg?ver=6"}  className="img id=1-thumbnail" alt="image" onClick={this.handleClick}/>
    </div>
    <div className="col-sm">
     <img id="11" src={"https://us.123rf.com/450wm/dualororua/dualororua1706/dualororua170600555/80387152--cute-boy-in-a-school-uniform-giving-thumbs-up-.jpg?ver=6"} className="img id=1-thumbnail" alt="image" onClick={this.handleClick}/>
     </div>
    <div className="col-sm">
     <img id="12" src={"https://us.123rf.com/450wm/dualororua/dualororua1704/dualororua170400084/75548396--happy-little-girl-cartoon-.jpg?ver=6"} className="img id=1-thumbnail" alt="image" onClick={this.handleClick}/>
    </div>
  </div>
  </div>
  </div>
        )
    }
}
