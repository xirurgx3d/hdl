import jwt_decode from "jwt-decode";
import Api from "./Api";

export const checkUser = async () => {
  let token: any = localStorage.getItem('token');
  if (token) {
    try {
      const { data } = await Api.auth(token)
      return !data.error ? true : false
    } catch (error) {
      console.log(error)
      return false
    }
  }
  return false
}