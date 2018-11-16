import React, { useContext, useState } from 'react';
import { database } from 'services/firebase';
import { AppContext } from 'store/Provider';
import PostRender from 'molecules/PostRender/PostRender';
import PostForm from 'molecules/PostForm/PostForm';
import EditModal from 'molecules/EditModal/EditModal';
import PostEditHeader from 'molecules/PostEditHeader/PostEditHeader';
import 'organisms/Post/Post.css';

const Post = ({ match, history }) => {
	const { state } = useContext(AppContext);
	const [isEditing, setIsEditing] = useState(false);

	const post = state.posts.find(post => post.relPath === match.params.postPath);
	const toggleModal = () => setIsEditing(!isEditing);

	const handleSubmit = formData => {
		database.ref(`posts/${post.key}`).set(formData, () => toggleModal());
	};
	const deletePost = e => {
		e.preventDefault();
		if (post.relPath) {
			if (window.confirm('Delete? Really?')) {
				database.ref(`posts/${post.key}`).remove(() => history.push('/'));
			}
		}
	};
	return post ? (
		<div className="postWrapper">
			{post.key && state.user && <PostEditHeader {...{ toggleModal, deletePost }} />}
			{isEditing && (
				<EditModal close={toggleModal} heading="Edit Post">
					<PostForm defaultData={{ ...post }} handleSubmit={handleSubmit} />
				</EditModal>
			)}
			<PostRender {...post} />
		</div>
	) : null;
};
export default Post;
