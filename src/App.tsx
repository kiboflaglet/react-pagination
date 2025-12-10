import './App.css'
import UserDummyAPI from './components/UserDummyJson/User.DummyAPI'
import UserLocalData from './components/UserLocalData/User.LocalData'

function App() {

  return (
    <>
      <UserLocalData />
      <UserDummyAPI />
    </>
  )
}

export default App
