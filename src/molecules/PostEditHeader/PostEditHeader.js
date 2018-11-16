import React from 'react';
import IconButton from 'atoms/IconButton/IconButton';
import 'molecules/PostEditHeader/PostEditHeader.css';

const PostEditHeader = props => {
	return (
		<div className="editHeader">
			<IconButton color="#222" icon="pencil" onClick={props.toggleModal}>
				edit post
			</IconButton>
			<IconButton color="#222" icon="minus" onClick={props.deletePost}>
				delete post
			</IconButton>
		</div>
	);
};

export default PostEditHeader;
