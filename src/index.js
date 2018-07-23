import React from 'react'
import ReactDOM from 'react-dom'
import TodoItem from './todoItem'
import AddItem from './addItem'
import About from './about'
import './css/index.css'
import {BrowserRouter as Router, Route ,Link} from 'react-router-dom'
const KEY = 'todos'
class ToduComponent extends React.Component{
    constructor(){
        super ()
        let jsonStr  = localStorage.getItem(KEY)
        ;
        this.state=({
            todos:JSON.parse(jsonStr)||[]
        })
    }
    handleAddItem=(value)=>{
     let todos = this.state.todos;
     todos.push(value)
        this.setState({
            todos:todos
        })
        localStorage.setItem(KEY,JSON.stringify(todos))
    }
    handleDelete=(index)=>{
        let todos = this.state.todos
        todos = todos.filter((val,i)=>{
            return index !== i
        })
        this.setState({
            todos:todos
        })
        localStorage.setItem(KEY,JSON.stringify(todos))
    }
    render(){
        let subTitle = null
        let length = this.state.todos.length
        if (length%2===0){
            subTitle=<h4>明日复明日,明日何其多  #还剩下{length}条待解决</h4>
        } else{
            subTitle=<h4>今日事,今日毕 #还剩下{length}条待解决</h4>
        }
        const list = this.state.todos.map((val,index)=> {
            return <TodoItem val={val} key={index} index={index} onDelete={this.handleDelete}/>
        })
        return (
            <div className='todo-list'>
                <Link to='/about'>关于我的</Link>
                <h2>代办事项</h2>
                {subTitle}
                {length===0?<p>恭喜你, 事情已经全部完成</p>:<ul>{list}</ul> }
                <AddItem onInputChange={this.handleAddItem} />
            </div>
        )
    }
}
class App extends React.Component{
    render (){
        return (
            <Router>
                <div>
                    <Route path='/' exact={true} component={ToduComponent}/>
                    <Route path='/about' component={About}/>

                </div>

            </Router>
        )
    }
}
ReactDOM.render(
   <App/>,
    document.getElementById('root')
)