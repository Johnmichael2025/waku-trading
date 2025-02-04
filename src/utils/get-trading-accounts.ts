export const getTradingAccounts = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/trading-accounts`
  );
  return await res.json();
};