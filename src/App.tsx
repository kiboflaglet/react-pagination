import './App.css'
import UserDummyAPI from './components/UserDummyJson/User.DummyAPI'
import UserLocalData from './components/UserLocalData/User.LocalData'
import UserTanStackTable from './components/UserTanStackTable/UserTanStackTable'

function App() {

  return (
    <>
      <UserLocalData />
      <UserDummyAPI />
      <UserTanStackTable />
    </>
  )
}

export default App
