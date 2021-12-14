import React, { Component } from 'react';
import axios from 'axios';
import Header from './components/Header';
import UndoList from './components/UndoList';

class TodoList extends Component {

  constructor(props){
    super(props);
    this.addUndoItem = this.addUndoItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.valueChange = this.valueChange.bind(this);
    this.state = {
      undoList: []
    }
  }

  componentDidMount(){
    /*
      {
        data: [{
          value: 'xieyan',
          status: 'div'
        }],
        success: true

      }
    */
    setTimeout(() => {
      axios.get('/undolist.json').then(res => {
        this.setState({
          undoList: res.data
        })
      }).catch(e => {
        console.log(e)
      })
    }, 4000)
  }

  addUndoItem(value){
    this.setState({
      undoList: [{
        status: 'div',
        value: value
      }, 
      ...this.state.undoList]
    })
  }

  deleteItem(index){
    const newUndoList = [...this.state.undoList]
    newUndoList.splice(index, 1);
    this.setState({
      undoList: newUndoList
    })
  }

  changeStatus(index){
    const newUndoList = this.state.undoList.map((item, listIndex) => {
      if(listIndex === index){
        item.status = 'input'
      }else{
        item.status = 'div'
      }
      return item;
    })
    this.setState({
      undoList: newUndoList
    })
  }

  handleBlur(index){
    const newUndoList = this.state.undoList.map((item, listIndex) => {
      if(listIndex === index){
        item.status = 'div'
      }
      return item;
    })
    this.setState({
      undoList: newUndoList
    })
  }

  valueChange(index, value){
    const newUndoList = this.state.undoList.map((item, listIndex) => {
      if(listIndex === index){
        item.value = value
      }
      return item;
    })
    this.setState({
      undoList: newUndoList
    })
  }

  render(){
    const { undoList } = this.state;
    return(
      <div>
        <Header addUndoItem={this.addUndoItem}/>
        <UndoList deleteItem={this.deleteItem} list={undoList} changeStatus={this.changeStatus} handleBlur={this.handleBlur} valueChange={this.valueChange}/>
      </div>
    )
  }
}

export default TodoList;