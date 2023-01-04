import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppLayout } from './components/layout';
import HomePage from './pages/Home';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<AuthLayout />}>
          <Route path='login' element={<Login />}/>
          <Route path='register' element={<Register />}/>
        </Route> */}
        <Route path='/' element={<AppLayout />}>
          <Route index element={<HomePage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
