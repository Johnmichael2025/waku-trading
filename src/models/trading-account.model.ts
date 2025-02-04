import { User } from "./user.model"

export interface TradingAccount {
  id: number
  balance: number 
  credit: number 
  user: User
  name: string
  server: string 
  leverage: string 
  dateCreated: string
}