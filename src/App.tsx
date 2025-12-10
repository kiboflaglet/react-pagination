import './App.css'
import UserDummyAPI from './components/UserDummyJson/User.DummyAPI'
import UserLocalData from './components/UserLocalData/User.LocalData'
import UserTanStackTableClient from './components/UserTanStackTableClient/UserTanStackTableClient'
import UserTanStackTableServer from './components/UserTanStackTableServer/UserTanStackTableServer'

function App() {

  return (
    <>
      <UserLocalData />
      <UserDummyAPI />
      <UserTanStackTableClient />
      <UserTanStackTableServer />
    </>
  )
}

export default App
