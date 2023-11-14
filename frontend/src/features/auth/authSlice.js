import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import authService from './authService'

const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
    user: user ? user : null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

    }
})

export const login = createAsyncThunk('auth/login', async(user, thunkAPI) => {
    try{
        return await authService.login(user)
    }catch(error){

    }
})

export default authSlice.reducer