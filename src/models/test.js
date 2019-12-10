import axios from "axios";
axios.defaults.baseURL = "http://localhost/qlsach/public/api/";
const _header = {
    "Content-Type": "application/x-www-form-urlencoded"
}
async function getRequest(_path) {
    console.log(333333333, _path);
    return await axios.get(_path).then(response => {

        if (response.data.success) {
            return response.data.data;
        } else {
            return [];
        };
    })
}
async function postRequest(_path, data) {
    console.log(123123, data);

    return await axios.post(_path, data, _header).then(response => {
        console.log(111111111);

        if (response.data.success) {
            return response.data.data;
        } else {
            return {};
        };
    })

}
async function putRequest(_path, data) {
    return await axios.put(_path, data).then(response => {
        if (response.data.success) {
            return response.data.data;
        } else {
            return {};
        };
    })
}
async function deleteRequest(_path) {
    return await axios.delete(_path).then(response => {
        if (response.data.success) {
            return response.data.data;
        } else {
            return {};
        };
    })
}
export { getRequest, postRequest, putRequest, deleteRequest }