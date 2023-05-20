import React from 'react';
import { createRoot } from 'react-dom/client';
import ApexApp from './components/ApexApp';
import './styles/index.css';

const root = createRoot(document.getElementById('root'));
root.render(<ApexApp /> );