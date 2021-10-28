import React, { Component } from 'react'

export default class Content extends Component {
     constructor(props){
          super(props);
          this.state={
               value:"",
          }
     }
     change=e=>{
          this.setState({value:e.target.value})
     }
     render() {
          return (
               <div>
                    <img src={this.props.log} alt="" />
                    
                    <br /><input className="number" type="number" name="number" id="number" onChange={this.change} />
                    <br />
                    <a
                      className="App-link"
                      href={"https://api.whatsapp.com/send?phone="+this.state.value}
                      target="_blank"
                      rel="noreferrer" 
                    >
                      {this.state.value}
                    </a>
               </div>
          )
     }
}
