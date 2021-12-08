import React, { Component } from 'react';
import '../style.css';

class Header extends Component {
  constructor(props){
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputKeyUp = this.handleInputKeyUp.bind(this);
    this.state = {
      value: ''
    }
  }

  handleInputChange(e){
    this.setState({
      value: e.target.value
    })
  }

  handleInputKeyUp(e){
    if(e.keyCode === 13 && this.state.value !== ''){
      this.props.addUndoItem(this.state.value);
      this.setState({
        value: ''
      })
    }
  }

  render(){
    const { value } = this.state;

    return(
      <div className="header">
        <div className="header-content">
          TodoList
          <input
            className="header-input"
            data-test="input"
            value={value}
            onChange={this.handleInputChange}
            onKeyUp={this.handleInputKeyUp}
            placeholder="Todo"
          />
        </div>
      </div>
    )
  }
}

export default Header;