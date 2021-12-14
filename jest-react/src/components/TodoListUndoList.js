import React, { Component } from 'react';
import '../containers/TodoListPage/style.css';

class UndoList extends Component {

  render(){
    const { deleteItem, list, changeStatus, handleBlur, valueChange } = this.props;
    return(
      <div className="undoList">
        <div className="undoList-title">
          <p>正在进行</p>
          <div data-test="count" className="count">{list.length}</div>
        </div>
        <ul className="item-wrap">
          {
            list.map((item, index) => {
              return(
                <li key={`${item}-${index}`} data-test="list-item" className="item" onClick={() => changeStatus(index)}>
                  {
                    item.status === 'div' ? item.value :
                    <input className='undoList-input' value={item.value} type="text" data-test="input" onBlur={() => handleBlur(index)} onChange={(e) => valueChange(index, e.target.value)}/>
                  }
                  <span
                    className="delBtn"
                    data-test="delete-item"
                    onClick={(e) => {
                      e.stopPropagation()
                      deleteItem(index)
                    }}
                  >
                    -
                  </span>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default UndoList;