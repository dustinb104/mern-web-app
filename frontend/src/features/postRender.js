import axios from 'axios'
// import {useState} from 'react'

const RenderPosts = async(userData) => {
    const API_URL = '/api/posts/'

    const bearerToken = {
        headers: {
            Authorization: `Bearer ${userData.token}`
        },
    }

    // const [state, setState] = useState()

    // const response = []

    const response = await axios.get(API_URL, bearerToken)
    // setState(response.date)
    // if(response.data){
    //     console.log(response.data)
    // }

    // const renderedPosts = response

    return response.data
    // return userData.token
}

export default RenderPosts