import './global.css'
import styles from './App.module.css'

import { Header } from './Header/Header'

function App() {

  return (
    <div className={styles.container}>
      <Header />
    </div>
  )
}

export default App
