import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import Dashboard from './pages/Dashboard/Dasboard'
import Payment from './pages/Payment/Payment'
//import PaymentPin from './pages/Payment/PIN'
import PaymentConfirm from './pages/Payment/Payment_Confirm'
//import TopUp from './pages/Topup/topup'
//import History from './pages/Transaction/History'
//import Profile from './pages/Profile/Profile'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/payment/confirm" element={<PaymentConfirm />} />
      {/* <Route path="/payment/pin" element={<PaymentPin />} />
      <Route path="/topup" element={<TopUp />} />
      <Route path="/transaction" element={<History />} />
      <Route path="/profile" element={<Profile />} /> */}
    </Routes>
  )
}

export default App