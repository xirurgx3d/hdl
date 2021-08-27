import { AxiosInstance } from "axios"

export abstract class RequstAbstract{
  protected readonly request: AxiosInstance
  constructor(request: AxiosInstance) {
    this.request = request
  }
}