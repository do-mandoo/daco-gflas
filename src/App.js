import { Helmet } from 'react-helmet-async';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './pages/Homepage';
// import Mainpage from './pages/Mainpage';

function App() {
  return (
    <>
      <Helmet>
        <title>gflas</title>
      </Helmet>
      <BrowserRouter>
        <Switch>
          <Route>
            <Homepage />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
