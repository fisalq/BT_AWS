import axios from 'axios';
import constants from "./constants";
import CryptoJS from "crypto-js";

const cancelToken = axios.CancelToken.source()

const axiosClient = axios.create({
    baseURL: constants.HOST_URL,
});

axiosClient.defaults.baseURL = constants.HOST_URL;
// axiosClient.defaults.withCredentials = true;
axiosClient.defaults.headers.common = constants.headers;

let access_token = '';

if(window.sessionStorage.getItem('persist:root')) {
    const object = JSON.parse(window.sessionStorage.getItem('persist:root'))
    const bytes = CryptoJS.AES.decrypt(object.authReducer.replace(/['"]+/g, ''), Object.keys(object)[0]);
    const decrypted = bytes.toString(CryptoJS.enc.Utf8);
    access_token = JSON.parse(decrypted).__token
}

axiosClient.interceptors.request.use(
    (config) => {
        if (access_token) {
            config.headers["Authorization"] = `Bearer ${access_token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosClient.cancelToken = cancelToken

export const cancel = message => {
    axiosClient.cancelToken.cancel(message)
}

export const isCancel = value => {
    return axios.isCancel(value)
}

export function getRequest(URL) {
    return axiosClient.get(`${URL}`).then(response =>response.data);
}

export function postRequest(URL, payload) {
    return axiosClient.post(`${URL}`, payload).then((response) => response);
}

export function patchRequest(URL, payload) {
    return axiosClient.patch(`${URL}`, payload).then(response => response);
}

export function deleteRequest(URL) {
    return axiosClient.delete(`${URL}`).then(response => response);
}

export default axiosClient;