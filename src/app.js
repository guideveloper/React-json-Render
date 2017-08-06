import React from 'react';
import { render } from 'react-dom';
import VehicleList from './components/VehicleList';

const app = document.getElementById('app');

render(<VehicleList />, app);