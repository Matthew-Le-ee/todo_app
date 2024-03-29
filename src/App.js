import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "./axios";

const App = () => {
	const [text, setText] = useState("");
	const [List, setList] = useState([]);
	const postText = () => {
		if(text.trim()=== ""){
			alert('please enter a valid task')
			return;
		}
		Axios.post(`/post`, {
			text,
		});
		setText('')
	};
	const updateList = (id) => {
		Axios.put(`/post/${id}`, {
			text,
		});
	};
	const deleteList = (id) => {
		Axios.delete(`/post/${id}`);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setText('')
	};
	useEffect(() => {
		Axios.get("/post")
		.then(res=> {
			setList(res.data)
		})
	}, [List]);
	return (
		<>
			<div className="flex justify-center items-center pt-10">
				<form action="" method="post" onSubmit={handleSubmit}>
					<input
						type="text"
						className="bg-black text-white rounded-lg py-[7px] w-[300px] mr-2 focus:ring-white"
						onChange={(e) => setText(e.target.value)}
					/>
					<button
						className="bg-black text-white p-[5px] rounded-lg"
						onClick={postText}
					>
						Add List
					</button>
				</form>
			</div>

			{List.map((hi) => (
				<>
					<div className="card bg-black text-white p-[10px] text-center mt-4">
						<h2 className="text-white py-[10px]" key={hi._id}>
							{hi.text}
						</h2>
						<input
							type="text"
							placeholder=" Update. . . . . "
							className="bg-black text-white rounded-lg py-[7px] w-[300px] mr-2 focus:ring-white"
							onChange={(e) => {
								setText(e.target.value);
							}}
						/>
						<button
							className="mx-4 bg-white text-black font-bold p-[5px] rounded-lg"
							onClick={() => updateList(hi._id)}
						>
							Update
						</button>
						<button
							className="bg-black text-white p-[5px] rounded-lg"
							onClick={() => deleteList(hi._id)}
						>
							Delete
						</button>
					</div>
				</>
			))}
		</>
	);
};

export default App;
