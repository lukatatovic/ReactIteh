import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import FloatingCircle from './components/shared/FloatingCircle';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import About from './pages/About';
import SignUp from './pages/auth/SignUp';
import Login from './pages/auth/Login';
import VerifyEmail from './pages/auth/VerifyEmail';

function App() {
  return (
    <div
    className='min-h-screen bg-gradient-to-br
  from-gray-900 via-green-900 to-emerald-900 flex items-center justify-center relative overflow-hidden'
  >
    <FloatingCircle
      color='bg-green-500'
      size='w-64 h-64'
      top='-5%'
      left='10%'
      delay={0}
    />
    <FloatingCircle
      color='bg-emerald-500'
      size='w-48 h-48'
      top='70%'
      left='80%'
      delay={5}
    />
    <FloatingCircle
      color='bg-lime-500'
      size='w-32 h-32'
      top='40%'
      left='-10%'
      delay={2}
    />

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/login' element={<Login />} />
      <Route path='/verify-email/:email' element={<VerifyEmail />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/about' element={<About />} />
    </Routes>

    <Toaster position='top-center' reverseOrder={false} />
    </div>
  );
}

export default App;
