export const getTradingAccounts = async () => {
  console.log(process.env.NEXT_PUBLIC_API_BASE_URL, 'base url')
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/trading-accounts`
    );
    return await res.json();
  } catch {
    return [];
  }
};