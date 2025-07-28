import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WebApp from '@twa-dev/sdk' // <-- тут, сверху

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>🎾 Tennis Mini App</h1>
      <button onClick={() => WebApp.sendData("signup")}>
        ✅ Записаться на матч
      </button>
    </div>
  )
}

export default App // <-- здесь, внизу и СНАРУЖИ функции
