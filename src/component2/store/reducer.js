import {HandleChange,HandleAdd,HandleDelete} from "../util/Name"
const defaultState={
    inputValue:"",
    list:["第一件事","第二件事","第三件事"]
}
export default (state=defaultState,action)=>{
    if(action.type===HandleChange){
        const newState=JSON.parse(JSON.stringify(state));
        newState.inputValue=action.inputValue;
        return newState;
    }
    if(action.type===HandleAdd){
        const newState=JSON.parse(JSON.stringify(state));
        newState.list=[...newState.list,newState.inputValue];
        newState.inputValue="";
        return newState;
    }
    if(action.type===HandleDelete){
        const newState=JSON.parse(JSON.stringify(state));
        newState.list.splice(newState.index,1);
        return newState;
    }
    return state;
}