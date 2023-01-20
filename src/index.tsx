import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './app/store'
import PageLayout from './components/page-layout/PageLayout'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <PageLayout>
          <App />
        </PageLayout>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
