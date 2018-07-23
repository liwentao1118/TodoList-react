import React from 'react'
import './css/todoItem.css'




class TodoItem extends React.Component {
    handleDelete=()=>{
        this.props.onDelete(this.props.index)
    }
    render() {
        return (
            <li className='todo-item'>
                <span className='item-name'>{this.props.val}</span>
                <span className='item-remove' onClick={this.handleDelete} >X</span>
            </li>
        );
    }
}

TodoItem.propTypes = {};

export default TodoItem;
