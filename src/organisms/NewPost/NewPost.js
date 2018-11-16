import React from 'react';
import { database } from 'services/firebase';
import PostForm from 'molecules/PostForm/PostForm';
import EditModal from 'molecules/EditModal/EditModal';
import 'organisms/NewPost/NewPost.css';

const NewPost = ({ history, close }) => {
	const postList = database.ref('posts/');

	const handleSubmit = formData => {
		postList.push(formData, () => history.push(`posts/${formData.relPath}`));
	};
	return (
		<EditModal close={close} heading="Add New Post">
			<PostForm handleSubmit={handleSubmit} />
		</EditModal>
	);
};
export default NewPost;
