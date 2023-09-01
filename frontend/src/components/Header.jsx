import {Link} from 'react-router-dom'

function Header(){
    return(
        <header class = ' h-5 bg-primary ml-3 mr-3'>
            <div>
                <ul class = 'd-flex flex-row justify-content-between'>
                    <li>
                        <Link to = '/' class = 'text-dark'>Home</Link>
                    </li>
                    <li>
                        <Link to = 'profile' class = 'text-dark'>Profile</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header