
import { makeAutoObservable } from "mobx";
import { createContext } from "react";

class ProductStore {
  _state: any = 'www'
  constructor() {
    makeAutoObservable(this);
  }
  setState(state: any) {
    
    this._state = state
  }
  get getState() {
    
    return this._state
  }
}

export default new ProductStore();