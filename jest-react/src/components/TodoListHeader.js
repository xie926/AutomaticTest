import React, { Component } from 'react';
import '../containers/TodoListPage/style.css';
import { connect } from 'react-redux';
import { actions } from '../containers/TodoListPage/store';

class Header extends Component {
  constructor(props){
    super(props);
    // this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputKeyUp = this.handleInputKeyUp.bind(this);
    this.state = {
      value: ''
    }
  }

  // handleInputChange(e){
  //   this.setState({
  //     value: e.target.value
  //   })
  // }

  handleInputKeyUp(e){
    if(e.keyCode === 13 && this.props.value !== ''){
      this.props.addUndoItem(this.props.value);
      this.props.handleInputChange('')
    }
  }

  render(){
    // const { value } = this.state;
    const { value, handleInputChange} = this.props

    return(
      <div className="header">
        <div className="header-content">
          TodoList
          <input
            className="header-input"
            data-test="header-input"
            value={value}
            onChange={e => handleInputChange(e.target.value)}
            onKeyUp={this.handleInputKeyUp}
            placeholder="Todo"
          />
        </div>
      </div>
    )
  }
}

const mapState = (state) => (
  {
    value: state.todo.inputValue
  }
)

const mapDispatch = (dispatch) => (
  {
    handleInputChange(value){
      dispatch(actions.changeInputValue(value))
    }
  }
)

export default connect(mapState, mapDispatch)(Header);