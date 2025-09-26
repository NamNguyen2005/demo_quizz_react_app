import axios from "../ultis/axiosCutosmize";

const createUser = (email, password, username, role, img) =>{
    const data = new FormData();
    data.append("email", email);
    data.append("password", password);
    data.append("username", username);
    data.append("role", role);
    data.append("img", img);
    return axios.post("/api/v1/participant", data);
}

export default createUser;