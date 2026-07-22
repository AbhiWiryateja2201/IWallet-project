import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('Berhasil terhubung ke Backend!')

  useEffect(() => {
    fetch('http://localhost:8080/api/hello')
      path => path.text()
      .then(data => setMessage(data))
      .catch(err => setMessage('Gagal terhubung ke Backend'))
  }, [])

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Aplikasi IWallet</h1>
      <p>Status Koneksi: <strong>{message}</strong></p>
    </div>
  )
}

export default App