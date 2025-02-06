export const getTradingAccounts = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/trading-accounts`
    );
    return await res.json();
  } catch {
    return [];
  }
};