
import { makeAutoObservable } from "mobx";
import { observable, computed, action } from 'mobx';

class ProductStore {
  @observable show:any = 2;
  constructor() {
    makeAutoObservable(this)
  }
  
  @computed get isOpenLeftPanel() {
    return this.show;
    console.log('wwww')
  }
  get Showses() {
    return this.show;
  }
  
  set toggleLeftPanel(val:any) {
    
    this.show = val
  }
}

export default new ProductStore();