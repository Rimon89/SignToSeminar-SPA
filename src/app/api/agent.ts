import axios, { AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import { ISeminar } from '../models/seminar';
import { IUser } from '../models/user';

axios.defaults.baseURL = 'https://localhost:5001/api';

const responseBody = (response: AxiosResponse) => response.data;

axios.interceptors.response.use(undefined, error => {
    const {status, config, data} = error.response
    
    if(status === 400 && config.method === 'post' && data !== null){
        toast.error(data)
    }
})

const requests = {
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
    del: (url: string) => axios.delete(url).then(responseBody)
}

const Seminars = {
    list: (): Promise<ISeminar[]> => requests.get('/seminars')
}

const Users = {
    create: (user: IUser) => requests.post('/users', user)
}

export default {
    Users,
    Seminars
}