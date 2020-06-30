import React from 'react';
import logo from '../logo.svg';
import '../css/App.css';
import StickyHeader from "./header/StickyHeader";
import BackgroundCarousel from "./sections/BackgroundCarousel";
import CostumesDisplay from "./sections/CostumesDisplay";
import Promotions from "./sections/Promotions";
import {ParallaxProvider} from "react-scroll-parallax";
import SubscribeStripe from "./sections/SubscribeStripe";
import Footer from "./sections/Footer";
import Sections from "./sections/Sections";

function App() {
      return (
          <div>
              <StickyHeader/>
              <BackgroundCarousel/>
              <Sections/>
              <CostumesDisplay/>
              <Promotions/>
              <SubscribeStripe/>
              <Footer/>
          </div>
      );
}

export default App;
