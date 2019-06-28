import {createStore} from 'redux';
import modules from './modules';

const configure = () => {
  const devtool = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

  return createStore(modules, devtool);
};

export default configure;