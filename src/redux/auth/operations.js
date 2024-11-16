import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

axios.defaults.baseURL = 'https://readjourney.b.goit.study/';

// POST @users/signup
// body: { name, email, password }

export const register = createAsyncThunk(
    'auth/register',

)