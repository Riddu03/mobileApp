import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {CartProvider} from './context/CartContext.jsx';
import {ExportProvider} from './context/ExportContext.jsx';


createRoot(document.getElementById('root')).render(
<StrictMode>
<CartProvider>
<ExportProvider>
<App />
</ExportProvider>
</CartProvider>
</StrictMode>,
)
