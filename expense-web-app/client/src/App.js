import { GlobalStyle } from "./global/styles/Global.style";
import HomePage from "./pages/HomePage";
import TransactionProvider from "./contexts/GlobalState";

function App() {
  return (
    <TransactionProvider>
      <GlobalStyle />
      <HomePage />
    </TransactionProvider>
  );
}

export default App;
