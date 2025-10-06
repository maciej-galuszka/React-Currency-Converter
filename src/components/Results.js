export function Results({
  amount,
  amountConverted,
  fromCurrency,
  toCurrency,
  isLoading,
}) {
  return (
    <div className="results">
      {isLoading ? (
        <p>
          Loading...<span className="loader"></span>
        </p>
      ) : (
        <p>{`${amount} ${fromCurrency} = ${amountConverted} ${toCurrency}`}</p>
      )}
    </div>
  );
}
