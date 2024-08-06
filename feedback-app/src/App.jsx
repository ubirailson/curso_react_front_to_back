import React from 'react'
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom'
import Card from './component/shared/Card'
import Post from './pages/Post'
import Post2 from './pages/Post2'
import Header from './component/Header'
import FeedbackList from './component/FeedbackList'
import FeedbackStats from './component/FeedbackStats'
import FeedbackForm from './component/FeedbackForm'
import AboutPage from './pages/AboutPage'
import AboutIconLink from './component/AboutIconLink'
import { FeedbackProvider } from './context/FeedbackContext'

function App() {
    
    return (
        <div>
        <FeedbackProvider>
        {/* <Router> */}
            <Header text='Hello World' />
            <div className='container'>
                <Routes>
                    <Route exact path='/' element={
                        <>
                            <FeedbackForm />
                            <FeedbackStats />
                            <FeedbackList />
                        </>
                    }>                        
                    </Route>
                    <Route path='/about' element={<AboutPage />}/>
                    <Route path='/post:id/:name' element={<Post />}/>
                    <Route path='/post2/*' element={<Post2 />}/>
                </Routes>
                {/* <Card>
                    <NavLink to='/' activeClassName='active'>
                        Home
                    </NavLink>
                    <NavLink to='/about' activeClassName='active'>
                        About
                    </NavLink>
                </Card> */}
                <AboutIconLink />
            </div>
        {/* <Router /> */}
        </FeedbackProvider>
        </div>
    )
}

export default App