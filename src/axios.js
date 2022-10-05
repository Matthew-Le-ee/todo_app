import axios from "axios";

const instance = axios.create({
	baseURL: "https://todo-server-steel.vercel.app",
});
export default instance