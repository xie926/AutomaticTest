import React, { Component } from 'react';


class UndoList extends Component {
  constructor(props){
    super(props)
  }

  render(){
    const { deleteItem, list } = this.props;
    return(
      <div>
        <div data-test="count">{list.length}</div>
        <ul>
          {
            list.map((item, index) => {
              return(
                <li key={`${item}-${index}`} data-test="list-item">
                  {item}
                  <span
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