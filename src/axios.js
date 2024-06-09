import axios from "axios";

const instance = axios.create({
	// baseURL: "https://jade-uninterested-dog.cyclic.app",
	baseURL: "https://todo-ser-ver-jzmm.vercel.app/",
	//baseURL: "http://localhost:7000",
});
export default instance