import {Link} from 'react-router-dom'
// import {Component} from 'react'
import {useEffect} from 'react'
// import RenderPosts from '../features/postRender'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
// import PostItem from '../components/PostItem'

// function mapRenderedPosts(posts) {
//     const mappedPosts = posts.map((post) => {return (
//         <li>{post}</li>
// )})
// }

function Home() {

    const navigate = useNavigate()

    const {user} = useSelector((state) => state.auth)

    // var posts = []

    useEffect(() => {
        if(!user){
            navigate('/login')
        }
    },[])

    // const posts = RenderPosts({token})
    // console.log(posts)
    // componentDidMount(){
    //     console.log(posts)
    // }
    // var mappedPosts = []
    // const mappedPosts = posts.map((post) => {(
    //         <PostItem key={post._id} post={post}/>
    // )})

    return (
        <div class = 'p-2'>
            <h1>This is the Home Page</h1>
            <Link to="profile">Profile Page</Link>
            {/* <div>
                {posts.forEach((post) => {(
                    <PostItem key={post._id} post={post}/>
                )})}
            </div> */}
        </div>
    )
}

export default Home