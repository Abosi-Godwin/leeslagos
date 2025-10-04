const usdFormatter = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN" ,minimumFractionDigits: 0,
  maximumFractionDigits: 2
});
export const formatCurrency = amount => usdFormatter.format(amount);
 