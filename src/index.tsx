import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App'
import { BrowserRouter } from 'react-router-dom'
import ThemeProvider from './app/providers/ThemeProvider/ui/ThemeProvider'
import 'shared/config/i18next/i18next'

const rootElement = document.getElementById('root')
if (!rootElement) {
    throw new Error('Root element not found')
}
const root = createRoot(rootElement)

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
)
