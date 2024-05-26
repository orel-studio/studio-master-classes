import './App.scss'
import { Header } from './stages/header/Header'
import { Services } from './stages/services/Services'

function App() {
  console.log('app')
  return (
    <div className='main'>
      <Header/>
      <Services/>
    </div>
  )
}

export default App
