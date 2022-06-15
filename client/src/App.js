import './App.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import { Route, Switch } from 'react-router-dom'
import Header from './componants/Header';
import PrivateRoute from './utils/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Header/>
      <PrivateRoute exact path='/'>
        <HomePage />
      </PrivateRoute>
      <Route path='/login'>
        <LoginPage />
      </Route>
    </div>
  );
}

export default App;
