import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Example from './component/dataEx/Example';
import Homepage from './pages/Homepage';
// import Mainpage from './pages/Mainpage';

function App() {
  return (
    <>
      {/* <Mainpage /> */}
      <BrowserRouter>
        <Switch>
          <Route>
            <Homepage />
          </Route>
        </Switch>
      </BrowserRouter>
      {/* <Example /> */}
    </>
  );
}

export default App;
