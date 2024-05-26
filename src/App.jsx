import './App.css';
import Greeting from './assets/componentes/Greeting';
import Header from './assets/componentes/Header';
import LuckyNumber from './assets/componentes/LuckyNumber';

function App() {
  return (
    <>
      <Greeting name="Alex" />
      <Header />
      <ul>
        <LuckyNumber type="loto" />
        <LuckyNumber type="loto" />
        <LuckyNumber type="loto" />
        <LuckyNumber type="loto" />
        <LuckyNumber type="loto" />
      </ul>
      <ul>
        <LuckyNumber type="mega" />
        <LuckyNumber type="mega" />
        <LuckyNumber type="mega" />
        <LuckyNumber type="mega" />
        <LuckyNumber type="mega" />
      </ul>
    </>
  );
}

export default App;
