import Input from 'react-select';
import { ReverseButton } from './ReverseButton';

const options = [
  { value: 'EUR', label: 'EUR - Euro' },
  { value: 'USD', label: 'USD - US Dollar' },
  { value: 'GBP', label: 'GBP - British Pound' },
  { value: 'CHF', label: 'CHF - Swiss Franc' },
  { value: 'PLN', label: 'PLN - Polish Zloty' },
  { value: 'JPY', label: 'JPY - Japanese Yen' },
  { value: 'AUD', label: 'AUD - Australian Dollar' },
  { value: 'CAD', label: 'CAD - Canadian Dollar' },
  { value: 'BRL', label: 'BRL - Brazilian Real' },
  { value: 'INR', label: 'INR - Indian Rupee' },
  { value: 'CNY', label: 'CNY - Chinese Yuan' },
];

export function Form({
  amount,
  onSetAmount,
  fromCurrency,
  onSetFromCurrency,
  toCurrency,
  onSetToCurrency,
  onReverseCurrencies,
  customStyles,
}) {
  return (
    <form className="form">
      <input
        className="form__control"
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => onSetAmount(e.target.value)}
      ></input>
      <Input
        classNamePrefix="form"
        styles={customStyles}
        options={options}
        placeholder="From"
        value={options.find((obj) => obj.value === fromCurrency)}
        onChange={(option) => onSetFromCurrency(option.value)}
      />
      <Input
        classNamePrefix="form"
        styles={customStyles}
        options={options}
        placeholder="To"
        value={options.find((obj) => obj.value === toCurrency)}
        onChange={(option) => onSetToCurrency(option.value)}
      />
      <ReverseButton onReverseCurrencies={onReverseCurrencies} />
    </form>
  );
}
