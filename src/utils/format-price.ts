export const formatPrice = (num: number) => {
  return (
    "$" +
    num.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
      useGrouping: true,
    })
  );
}
