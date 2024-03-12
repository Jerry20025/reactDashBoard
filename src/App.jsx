import './App.css'
import Dashboard from './Pages/Dashboard/Dashboard'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Support from './Pages/Support/Support'
import TransactionPage from './Pages/Transaction/TransactionPage'
const router=createBrowserRouter([
 {
  path:'/',
  element:<Dashboard/>
 },
 {
  path:'/transaction',
  element:<TransactionPage/>
 },
 {
  path:'/support',
  element:<Support/>
 }
])
function App() {

  return (
   <div>
      <RouterProvider router={router}>
        <Dashboard />
      </RouterProvider>
   </div>
  )
}

export default App
