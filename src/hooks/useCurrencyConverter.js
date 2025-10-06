import { useEffect, useState } from 'react';

export function useCurrencyConverter(fromCurrency, toCurrency, amount) {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [amountConverted, setAmountConverted] = useState('');

  useEffect(
    function () {
      setError('');
      if (!fromCurrency || !toCurrency || !amount) return;
      if (fromCurrency === toCurrency) return setAmountConverted(amount);
      setIsLoading(true);
      async function fetchCurrencyData() {
        try {
          const res = await fetch(
            `https://api.frankfurter.app/latest?amount=1&from=${fromCurrency}&to=${toCurrency}`
          );
          if (!res.ok)
            throw new Error('Something went wrong... Please try again!');
          const data = await res.json();
          setAmountConverted(
            Number(amount * data.rates[toCurrency]).toFixed(2)
          );
        } catch (err) {
          if (err.message === 'Failed to fetch')
            return setError(
              'Failed to fetch data. Make sure you have an internet connection and refresh the page.'
            );
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }

      fetchCurrencyData();
    },
    [amount, fromCurrency, toCurrency]
  );

  return { amountConverted, error, isLoading };
}
