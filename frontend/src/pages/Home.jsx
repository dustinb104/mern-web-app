import {Link} from 'react-router-dom'
// import {useState, useEffect} from 'react'
import renderPosts from '../features/postRender'

function Home({token}) {

    // const [userToken, setUserToken] = useState({
    //     token: {token}
    // })

    // useEffect(() => {
    //     setUserToken(sessionStorage.getItem('token'))
    //     console.log(sessionStorage.getItem('token'))
    //     const posts = renderPosts({userToken})
    //     // console.log(posts)
    // },[])

    const posts = renderPosts({token})
    console.log(posts)

    return (
        <div class = 'p-2'>
            <h1>This is the Home Page</h1>
            <Link to="profile">Profile Page</Link>
        </div>
    )
}

export default Home