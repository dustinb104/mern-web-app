import {Link} from 'react-router-dom'
// import {Component} from 'react'
// import {useState, useEffect} from 'react'
import RenderPosts from '../features/postRender'
// import PostItem from '../components/PostItem'

// function mapRenderedPosts(posts) {
//     const mappedPosts = posts.map((post) => {return (
//         <li>{post}</li>
// )})
// }

function Home({token}) {

    // var posts = []

    const posts = RenderPosts({token})
    console.log(posts)
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