import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Welcome from './pages/Welcome'
import About from './pages/About'
import Contact from './pages/Contact'
import { ScoreContextProvider } from './store/score-context'
import GuessNumberGame from './pages/GuessNumberGame'
import Login from './pages/Login'
import { AuthContext } from './store/auth-context'
import { useContext } from 'react'

function App() {
  const { isLoggedIn } = useContext(AuthContext)

  return (
    // <AuthContextProvider>
    <ScoreContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<RootLayout></RootLayout>}>
            <Route index element={<Welcome />}></Route>
            <Route path='about' element={<About></About>}></Route>
            <Route path='contact' element={<Contact></Contact>}></Route>

            {/* Only show the game route if the user is logged in */}
            {
              isLoggedIn && (
                <Route
                  path="game"
                  element={
                    <ScoreContextProvider>
                      <GuessNumberGame />
                    </ScoreContextProvider>
                  }
                />
              )}

            <Route path='login' element={<Login></Login>}></Route>
          </Route>
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </ScoreContextProvider>
    // </AuthContextProvider>
  )
}

export default App
