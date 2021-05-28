import './reset.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import MyTravels from './components/MyTravels/MyTravels'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/meus-agendamentos" component={MyTravels} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
