import { TRANSACTION_STATUS } from "@/enums/transaction-status.enum"
import { TRANSACTION_TYPE } from "@/enums/transaction-type.enum"
import { WITHDRAW_TYPE } from "@/enums/withdraw-type.enum"
import { User } from "./user.model"
import { TradingAccount } from "./trading-account.model"

export interface Transaction {
  id: number 
  transactionType: TRANSACTION_TYPE
  withdrawalType?: WITHDRAW_TYPE
  status: TRANSACTION_STATUS
  amount: number 
  user: User
  tradingAccount: TradingAccount
  tradingAccountId?: number
  transferToAccountId?: number
  dateCreated: string
}