import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './js/App';
import * as serviceWorker from './serviceWorker';
import ScriptTag from 'react-script-tag';
import './css/libs/animate.css';
import './css/libs/bootstrap-datepicker.css';
import './css/libs/bootstrap.css.map';
import './css/libs/bootstrap.css';
import './css/libs/estilos.css';
import './css/libs/flexslider.css';
import './css/libs/icomoon.css';
import './css/libs/magnific-popup.css';
import './css/libs/owl.carousel.min.css';
import './css/libs/owl.theme.default.min.css';
import './css/libs/style.css';
import './css/libs/style.css.map';


ReactDOM.render(
  <React.StrictMode>
      <ScriptTag isHydrating={true} type="text/javascript" src="./js/lib/modernizr-2.6.2.min.js" />
      <ScriptTag isHydrating={true} type="text/javascript" src="./js/lib/js/lib/respond.min.js" />
      <ScriptTag isHydrating={true} type="text/javascript" src="./js/lib/jquery.min.js" />
      <ScriptTag isHydrating={true} type="text/javascript" src="./js/lib/jquery.easing.1.3.js" />
      <ScriptTag isHydrating={true} type="text/javascript" src="./js/lib/bootstrap.min.js" />
      <ScriptTag isHydrating={true} type="text/javascript" src="./js/lib/jquery.waypoints.min.js" />
      <ScriptTag isHydrating={true} type="text/javascript" src="./js/lib/jquery.flexslider-min.js" />
      <ScriptTag isHydrating={true} type="text/javascript" src="./js/lib/owl.carousel.min.js" />
      <ScriptTag isHydrating={true} type="text/javascript" src="./js/lib/jquery.magnific-popup.min.js" />
      <ScriptTag isHydrating={true} type="text/javascript" src="./js/lib/magnific-popup-options.js" />
      <ScriptTag isHydrating={true} type="text/javascript" src="./js/lib/bootstrap-datepicker.js" />
      <ScriptTag isHydrating={true} type="text/javascript" src="./js/lib/jquery.stellar.min.js" />
      <ScriptTag isHydrating={true} type="text/javascript" src="./js/lib/main.js" />
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
