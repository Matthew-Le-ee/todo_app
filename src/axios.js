import axios from "axios";

const instance = axios.create({
	baseURL: "https://jade-uninterested-dog.cyclic.app",
});
export default instance