import React from 'react';
import { Switch, Route ,useLocation} from 'react-router-dom';
import "./App.css";
import { Home, About, Events, Gallery, Booking, Navbar, Footer } from "./components/index";
// #776857  #2b5133 #333035 #371108 #000000

function App() {

  return (
    <div class="app">
      <header>
        <Navbar />
      </header>
      <main>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/events" component={Events} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/booking" component={Booking} />
          <Route path="/about" component={About} />
        </Switch>
      </main>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
