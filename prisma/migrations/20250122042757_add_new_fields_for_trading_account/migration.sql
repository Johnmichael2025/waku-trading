/*
  Warnings:

  - Added the required column `currency` to the `TradingAccount` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `TradingAccount` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TradingAccount" ADD COLUMN     "currency" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL;
