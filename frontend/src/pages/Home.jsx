import {Link} from 'react-router-dom'

function Home() {
    return (
        <div class = 'p-2'>
            <h1>This is the Home Page</h1>
            <Link to="profile">Profile Page</Link>
        </div>
    )
}

export default Home