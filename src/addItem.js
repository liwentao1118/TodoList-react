import React from 'react'
import './css/addItem.css'
class AddItem extends React.Component{
    handleSubmit=(e)=>{
        e.preventDefault()
        this.props.onInputChange(this.inputNode.value)
        this.inputNode.value=''
    }
    render (){
        return (
            <form action="#" onSubmit={this.handleSubmit} className='add-item'>

                <input required ref={(input)=>this.inputNode=input}/>
                <input type='submit' value='添加'/>
            </form>
        )
    }
}
export default AddItem