import React from 'react'
import { useParams } from 'react-router-dom'
function Post() {
    const params = useParams()
    return (
    <div>
      <h1>Post {params.id}</h1>
      <h1>Post {params.name}</h1>
      Mostra o parâmetro id que veio na URL de endereço
    </div>
    
)
}

export default Post
