import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import { MagicCursor, MagicCursorProvider } from 'react-magic-cursor';
// import 'react-magic-cursor/dist/cursor.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <MagicCursorProvider thickness={2}> */}
      {/* <div className="App"> */}
        {/* <MagicCursor /> */}
        <App />
      {/* </div> */}
    {/* </MagicCursorProvider> */}
  </StrictMode>,
)
