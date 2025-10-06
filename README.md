# React Currency Converter 💱

This is a responsive currency converter web application built with React. It allows users to convert between multiple currencies in real time and demonstrates the use of custom hooks, state management, props, and `useEffect` for dynamic UI updates.

## Features ✨

- Currency conversion 💵: Convert between multiple currencies such as USD, EUR, GBP, PLN, JPY, and more.
- Dynamic page title 🔄: Updates the browser tab title with the latest conversion using `useEffect` and reverts back after a short delay.
- Reverse currencies ↔️: Swap the source and target currencies with a single click.
- Error handling & loader ⏳❌: Shows a loader while fetching exchange rates and displays error messages if conversion fails.
- Responsive design 📱💻: Works seamlessly on mobile, tablet, and desktop.
- Reusable components 🧩: Modular design with separate components for `Header`, `ConverterForm`, `ReverseButton`, and `Results`.
- Custom styling for select inputs 🎨: Uses `react-select` with custom styles for consistent UI.

## Usage 🖱️

- Enter the amount to convert in the input field.
- Select the source currency (From) and target currency (To) using the dropdowns.
- Click the reverse button to swap currencies instantly.
- Converted amount updates automatically as you type or change currencies.
- Browser tab title shows conversion details dynamically for a brief period.

## Technologies used 💻

- React (Functional Components & Hooks)
- JavaScript (ES6+)
- CSS3 (Flexbox & Grid)
- react-select for styled dropdowns
- Custom hooks (`useCurrencyConverter`) for API fetching and state management

## React / JavaScript skills used 🛠️

- State management with `useState`  
- Side effects and cleanup using `useEffect`  
- Props passing and component composition  
- Custom hooks for data fetching and logic encapsulation (`useCurrencyConverter`)  
- Conditional rendering (showing results, loader, and errors)  
- Dynamic UI updates (updating document title)  
- Event handling (onChange, onClick)  
- Modular component design (`Header`, `ConverterForm`, `ReverseButton`, `Results`)  
- Working with third-party libraries (`react-select`)  
- Responsive design with CSS media queries  

## Code Structure 🏗️

- **Custom Hook (`useCurrencyConverter`)** 🔧: Handles fetching currency exchange rates and provides conversion results, loading state, and error handling.  
- **Low-level components** 🔹: `ReverseButton`, `Results`, `SelectInput` (optional), handling specific UI pieces.  
- **Top-level component (`App.jsx`)** 🎛️: Manages global state, coordinates conversion logic, handles dynamic effects, and renders child components.

## License 📄

This project is open source and available under the MIT License.

## Acknowledgements 🙏

- Exchange rates API (custom or free APIs like exchangerate.host)
- react-select: https://react-select.com
- SVG icons: https://www.flaticon.com

## 📦 Getting Started

To run the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/react-currency-converter.git
   
2. Navigate to the project directory:
   ```bash
   cd react-currency-converter
   
3. Install dependencies:
   ```bash
   npm install

4. Start the development server:
   ```bash
   npm start

The app will open in your default browser at http://localhost:3000.
