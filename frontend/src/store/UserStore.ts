import {makeAutoObservable} from "mobx";

interface IUserStore {
  setIsAuth:(bool:boolean) => void
}

 class UserStore implements IUserStore{
  public _isAuth: boolean
  public _user:object
    constructor() {
        this._isAuth = false
        this._user = {}
        makeAutoObservable(this)
    }

  setIsAuth(bool: boolean) {
    this._isAuth = bool
    
    
  }
    setUser(user:object) {
        this._user = user
    }

    get isAuth() {
        return this._isAuth
    }
    get user() {
        return this._user
    }
}
export default new UserStore()