import React, { Component } from 'react';
import Header from './components/Header';
import UndoList from './components/UndoList';

class TodoList extends Component {

  constructor(props){
    super(props);
    this.addUndoItem = this.addUndoItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.state = {
      undoList: []
    }
  }

  addUndoItem(value){
    this.setState({
      undoList: [value, ...this.state.undoList]
    })
  }

  deleteItem(index){
    const newUndoList = [...this.state.undoList]
    newUndoList.splice(index, 1);
    this.setState({
      undoList: newUndoList
    })
  }

  render(){
    const { undoList } = this.state;
    return(
      <div>
        <Header addUndoItem={this.addUndoItem}/>
        <UndoList deleteItem={this.deleteItem} list={undoList}/>
      </div>
    )
  }
}

export default TodoList;