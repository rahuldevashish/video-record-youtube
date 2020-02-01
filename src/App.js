import React from 'react';
import logo from './logo.svg';
import './App.css';
import store from './store';
import { Provider } from 'react-redux';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import VideoList from './components/VideoList';
import Footer from './components/common/Footer';
import Header from './components/common/Header';


function App()  {
  console.log(store.getState())
  return (
    <Provider  store= {store} >
      <div className="video-app">
      <Header/>
      <VideoList />
      <Footer />
    </div>
    </Provider>
  );
}

export default App;
