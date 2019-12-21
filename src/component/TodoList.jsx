import React,{Fragment,Component} from "react"
import Store from "./store/Store"
import {observer} from "mobx-react"
import {action} from "mobx"
import './TodoList.less'
@observer
class TodoList extends Component{
  render(){
      return (
          <Fragment>
              <input value={Store.inputValue} onChange={this.changeInput.bind(this)}/>
              <button  className="btn" onClick={this.addInputValue.bind(this)}>提交</button>
              <div>
                  <ul>
                      {
                      Store.list.map((item,index)=>{
                          return <li onClick={this.delete.bind(this,index)}>{item}</li>
                      })
                      }
                  </ul>
              </div>
          </Fragment>
      )
  }

  @action
  changeInput(e){
     
      Store.inputValue=e.target.value;
  }
  @action
  addInputValue(){
      Store.list.push(Store.inputValue);
      Store.inputValue="";
      console.log(Store.list.slice())
  }

  @action
  delete(index){
      var store=Store.list.splice(index,1);
  }
}
export default TodoList;