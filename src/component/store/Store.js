import React,{Component} from "react"
import { observable } from "mobx";
class Store{
    @observable inputValue="成功";
    @observable list=["45","46"];
}
var store=new Store();
export default store;
