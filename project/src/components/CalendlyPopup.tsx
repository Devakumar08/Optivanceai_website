import React from 'react';
import { PopupWidget } from 'react-calendly';

const CalendlyPopup = () => (
  <PopupWidget
    url="https://calendly.com/optivance-devakumar"
    rootElement={document.getElementById('root')}
    text="Schedule time with me"
    textColor="#ffffff"
    color="#0069ff"
  />
);

export default CalendlyPopup;
