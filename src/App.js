import './App.css';
import Editor from './editor/editor'
import Preview from './preview/preview';
import {Component} from 'react'

let initialState= `
# Welcome
## Try Something

- imagine
- or just write  

[for inspiration](https://www.imagination.com)

this is an  inline \`<div></div>\`

this is a block of code 
\`\`\`
let x=1
let z = 3
\`\`\`

> Block Quotes!
**_both!_**

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`
;

class App extends Component{
  constructor(){
    super()
    this.state={
      text: initialState
    }
  }
  handleChange=(e)=>{
    this.setState({text: e.target.value})
  }
  render(){
    return(
      <div>
        <Editor handleChange={this.handleChange} text= {this.state.text}/>
        <Preview text= {this.state.text}/>
      </div>
    );
  }
}

export default App;
