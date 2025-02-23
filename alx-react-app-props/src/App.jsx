import UserContext from './components/UserContext
import ProfilePage from './components/ProfilePage'
import './App.css'

React.createContext()
function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return <ProfilePage userData={userData} />;
    
}
export default App;
