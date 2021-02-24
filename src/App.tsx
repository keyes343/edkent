import React from 'react';
import './App.scss';
import Router from './Pages/Router';
// import ReactGA from 'react-ga';

const App = () => {
  // Initialize google analytics page view tracking

  // React.useEffect(()=>{
  //   ReactGA.initialize('UA-171800971-1',{
  //       debug: true,
  //       titleCase: false,
  //   });
  //   ReactGA.pageview(window.location.pathname + window.location.search);
  // },[])
  
  return (
    <div>
        <Router />
    </div>
  );
}

export default App;
