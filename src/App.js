import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "./axios";

const App = () => {
	const [text, setText] = useState("");
	const [List, setList] = useState([]);
	const postText = () => {
	    Axios.post(`/post`, {text})
		.then((res)=> 
		 setList((prevList)=> [...prevList,res.data])
		)
	};

	const updateList = (id) => {
	    Axios.put(`/post/${id}`, {text})
		.then((res)=> 
		   setList((prevList)=> prevList.map((post)=> post._id === id ? res.data : post))
		)
	};

	const deleteList = (id) => {
	    Axios.delete(`/post/${id}`);
		setList((prevList) => prevList.filter((post)=> post._id !== id ));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setText('')
	};

	const fetchData = () => {
		Axios.get('/post')
		.then((res)=> setList(res.data))
	}

	useEffect(() => {
		fetchData();
	}, []);

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
