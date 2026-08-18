import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import Dashboard from './pages/Dashboard/Dasboard'
import Payment from './pages/Payment/Payment'
import PaymentPin from './pages/Payment/PIN'
import PaymentConfirm from './pages/Payment/Payment_Confirm'
import Struk from './pages/Payment/struk'
import TopUp from './pages/Topup/topup'
import TopUpSuccess from './pages/Topup/TopUpSuccess'
import History from './pages/Transaction/History'
import Profile from './pages/Profile/Profile'
import EditProfile from './pages/Profile/EditProfile'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/payment/pin" element={<PaymentPin />} />
      <Route path="/payment/confirm" element={<PaymentConfirm />} />
      <Route path="/payment/struk" element={<Struk />} />
      <Route path="/topup" element={<TopUp />} />
      <Route path="/topup/success" element={<TopUpSuccess />} />
      <Route path="/transaction" element={<History />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/edit" element={<EditProfile />} />
    </Routes>
  )
}

export default App