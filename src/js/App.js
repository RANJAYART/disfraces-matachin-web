import React from 'react';
import logo from '../logo.svg';
import '../css/App.css';
import StickyHeader from "./header/StickyHeader";
import ImageSliderSection from "./sections/ImageSliderSection";

function App() {
  return (
      <div>
          <StickyHeader></StickyHeader>
          <ImageSliderSection></ImageSliderSection>
      </div>
  );
}

export default App;
