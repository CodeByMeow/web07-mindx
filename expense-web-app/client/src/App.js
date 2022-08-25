import { GlobalStyle } from "./global/styles/Global.style";
import Header from "./components/Header";
import Content from "./components/Content";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Content />
    </div>
  );
}

export default App;
