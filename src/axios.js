import axios from "axios";

const instance = axios.create({
	// baseURL: "https://jade-uninterested-dog.cyclic.app",
	baseURL: "https://dev-todo-ser-ver.vercel.app/",
	//baseURL: "http://localhost:7000",
});
export default instance