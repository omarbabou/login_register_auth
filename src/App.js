import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Provider } from 'react-redux';

import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Home from './components/Home';
import ResetPassword from './components/Auth/ResetPassword';
import ResetPasswordConfirm from './components/Auth/ResetPasswordConfirm';
import Activate from './components/Auth/Activate';
import store from './redux/store';

import './App.css';
import Layout from './components/hocs/Layout';

const App = () => {
  return (
    <Provider store={store}>
       <BrowserRouter>
       <Layout> 
         <Routes>
              <Route path="/" element={<Login/>}/>
              <Route path="/register" element={<Signup/>}/>
              <Route path="/home" element={<Home/>}/>
              <Route path="/reset-password" element={<ResetPassword/>}/>
              <Route path="/password/reset/confirm/:uid/:token" element={<ResetPasswordConfirm/>}/>
              <Route path="/activate/:uid/:token" element={<Activate/>}/>
          
         </Routes>
         </Layout> 
       </BrowserRouter>
    </Provider>
   
  );
}

export default App;
