import { GlobalStyle } from "./global/styles/Global.style";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import HomePage from "./pages/HomePage";
import TransactionProvider from "./contexts/GlobalState";
import CategoriesContextProvider from "./contexts/CategoriesContext";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <CategoriesContextProvider>
        <TransactionProvider>
          <GlobalStyle />
          <HomePage />
        </TransactionProvider>
      </CategoriesContextProvider>
    </LocalizationProvider>
  );
}

export default App;
