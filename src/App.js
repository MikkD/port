import './App.scss';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
// import Cursor from './components/Cursor/Cursor';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        {/* <Cursor /> */}
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
