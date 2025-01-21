-- CreateTable
CREATE TABLE "TradingAccount" (
    "id" SERIAL NOT NULL,
    "balance" DOUBLE PRECISION NOT NULL,
    "credit" DOUBLE PRECISION NOT NULL,
    "userId" INTEGER NOT NULL,
    "server" TEXT,
    "leverage" TEXT,

    CONSTRAINT "TradingAccount_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TradingAccount" ADD CONSTRAINT "TradingAccount_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
