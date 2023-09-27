import axios from 'axios'


const loginUser = async (userData) => {
    const API_URL = '/api/users/'
    // const API_URL = 'http://localhost:5000/api/users/'
    // console.log(userData.formData)
    const response = await axios.post(API_URL + 'login', userData.formData)

    if(response.data){
        localStorage.setItem('user',JSON.stringify(response.data))
    }

    // console.log(response.data)

    return response.data
}

export default loginUser