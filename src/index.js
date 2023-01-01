import React from 'react';
import { createRoot } from 'react-dom/client';
import CatsApp from './components/CatsApp';

import './styles/index.css';

const root = createRoot(document.getElementById('root'));
root.render(<CatsApp />);