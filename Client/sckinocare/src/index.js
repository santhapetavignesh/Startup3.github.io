import ReactDom from 'react-dom'
import App from './App';
import { Provider } from 'react-redux';
import store from './Redux/Store';

ReactDom.render(<Provider store={store}>
    <App/>
    </Provider>,document.getElementById('root'))