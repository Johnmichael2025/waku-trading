import { TradingAccount } from "./trading-account.model"
import { Transaction } from "./transaction.model"

export interface User {
  id: number
  firstName: string 
  lastName: string 
  email: string 
  password: string 
  phone: string
  country: string
  gender: string 
  language: string 
  identificationNumber: string
  address: string 
  city: string 
  postalCode: string
  countrySpecificID: string
  tradingAccounts: TradingAccount[]
  transactions: Transaction[]
}