import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {WorkoutContextProvider} from './context/WorkoutContest';
import { AuthContestProvider } from './context/AuthContest';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContestProvider>
        <WorkoutContextProvider>
          <App />
        </WorkoutContextProvider>
    </AuthContestProvider>
  </React.StrictMode>
);
