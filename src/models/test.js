import axios from "axios";
axios.defaults.baseURL = "http://localhost/blog/public/api/";

async function getDataUser() {
    return await axios.get(`users`).then(response => {
        if (response.data.success) {
            return response.data.data;
        } else {
            return [];
        };
    })
}
async function addUser(data) {
    return await axios.post(`users`, data).then(response => {
        if (response.data.success) {
            return response.data.data;
        } else {
            return {};
        };
    })

}
async function updateUser(id, data) {
    return await axios.put(`users/` + id, data).then(response => {
        if (response.data.success) {
            console.log(234242, response.data.data);

            return response.data.data;
        } else {
            return {};
        };
    })

}
export { getDataUser, addUser, updateUser }