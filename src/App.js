import React from 'react';
import Main from './components/MainComponent'
import './App.css';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/ConfigureStore';

const store = ConfigureStore();

class App extends React.Component {

  render() {
    return (
      <Provider store= {store}>
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
      
    );
  }
}
  
export default App;
