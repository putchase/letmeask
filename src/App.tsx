import { Home } from './pages/Home'
import { NewRoom } from './pages/NewRoom'
import { Room } from './pages/Room'
import { AdminRoom } from './pages/AdminRoom'

import { BrowserRouter, Route, Switch } from 'react-router-dom' 

import { AuthContextProvider } from './contexts/AuthContext'

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route exact component={Home} path="/" />
          <Route component={NewRoom} path="/rooms/new" />
          <Route component={Room} path="/rooms/:id" />
          <Route component={AdminRoom} path="/admin/rooms/:id" />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}
 
export default App;