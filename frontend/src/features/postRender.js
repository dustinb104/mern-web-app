import axios from 'axios'

const renderPosts = async(userData) => {
    const API_URL = '/api/posts/'



    const response = await axios.get(API_URL, userData.token)

    if(response.data){
        console.log(response.data)
    }

    return response.data
    // return userData.token
}

export default renderPosts