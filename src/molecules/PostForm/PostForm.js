import React, { useState } from 'react';
import PostRender from 'molecules/PostRender/PostRender';
import 'molecules/PostForm/PostForm.css';

const defaultData = {
	relPath: '',
	order: 0,
	title: '',
	body: ''
};

const PostForm = props => {
	const [data, setData] = useState(props.defaultData || defaultData);

	const handleChange = event => {
		setData({ ...data, [event.target.name]: event.target.value });
	};

	const handleSubmit = event => {
		event.preventDefault();
		props.handleSubmit(data);
	};

	return (
		<div className="PostFormWrapper">
			<form className="PostForm" onSubmit={handleSubmit}>
				<div className="input-group">
					<label htmlFor="relPath">Slug</label>
					<input
						id="relPath"
						type="text"
						onChange={handleChange}
						name="relPath"
						value={data.relPath}
					/>
				</div>
				<div className="input-group">
					<label htmlFor="order">Order</label>
					<input id="order" type="number" onChange={handleChange} name="order" value={data.order} />
				</div>
				<div className="input-group">
					<label htmlFor="title">Title</label>
					<input id="title" type="text" onChange={handleChange} name="title" value={data.title} />
				</div>
				<div className="input-group input-group-expand">
					<label htmlFor="body">Content</label>
					<textarea
						name="body"
						onChange={handleChange}
						id="body"
						cols="30"
						rows="10"
						value={data.body}
					/>
				</div>

				<button className="PostFormSubmit" type="submit">
					save
				</button>
			</form>
			<div className="PostPreview">
				<PostRender {...data} />
			</div>
		</div>
	);
};

export default PostForm;
