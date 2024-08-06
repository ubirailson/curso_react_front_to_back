import React from 'react'
import { Navigate, useNavigate, Routes, Route } from 'react-router-dom'
function Post2() {
    const status = 200
    const navigate = useNavigate()
    const onClick = () => {
      console.log('Hello')
      navigate('/about')
    }
    if(status ===404) {
      return <Navigate to='/notfound' />
    }
    return (
    <div>
      <h1>Post 2</h1>
      <button onClick={onClick}>Click</button>
      <Routes>
        <Route path='/show' element={<h1>Hello Post2!</h1>} />
      </Routes>
    </div>
    
)
}

export default Post2
