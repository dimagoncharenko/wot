import store from './store';
import { Provider } from 'react-redux';
import Home from 'app/Home';

const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;
