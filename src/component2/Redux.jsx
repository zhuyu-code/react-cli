import React, { Component } from 'react'
import {connect} from "react-redux"
import {HandleChange,HandleAdd,HandleDelete} from "./util/Name";
import './Redux.css'
 class Redux extends Component {
    render() {
        return (
            <div className="main">
               <input placeholder="请输入内容" value={this.props.inputValue} onChange={this.props.handleChange}/>
               <button onClick={this.props.handleAdd}>提交</button>
               <ul>
                   {
                       this.props.list.map(item=>{
                           return (<li onClick={this.props.handleDelete}>{item}</li>)
                       })
                   }
               </ul>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        inputValue:state.inputValue,
        list:state.list
    }
}
const mapDispatchToProps = (dispatch,props) => {
    return {
       handleChange(e){
        const value=e.target.value;
        const action={
            type:HandleChange,
            inputValue:value
        }
        dispatch(action)
       },
       handleAdd(){
        const action={
            type:HandleAdd
        }
        dispatch(action);
       },
       handleDelete(index){
           const action={
               type:HandleDelete,
               index:index
           };
           dispatch(action);
       }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Redux)