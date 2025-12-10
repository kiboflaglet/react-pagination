import './App.css'
import UserDummyAPI from './components/UserDummyJson/User.DummyAPI'
import UserLocalData from './components/UserLocalData/User.LocalData'
import UserTanStackTable from './components/UserTanStackTable/UserTanStackTable'
import UserTanStackTableServer from './components/UserTanStackTableServer/UserTanStackTableServer'

function App() {

  return (
    <>
      <UserLocalData />
      <UserDummyAPI />
      <UserTanStackTable />
      <UserTanStackTableServer />
    </>
  )
}

export default App
