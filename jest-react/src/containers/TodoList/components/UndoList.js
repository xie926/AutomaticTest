import React, { Component } from 'react';
import '../style.css';

class UndoList extends Component {

  render(){
    const { deleteItem, list } = this.props;
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
                <li key={`${item}-${index}`} data-test="list-item" className="item">
                  {item}
                  <span
                    className="delBtn"
                    data-test="delete-item"
                    onClick={() => deleteItem(index)}
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