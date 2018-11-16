import React from 'react';
import ReactMarkdown from 'react-markdown';
import 'molecules/PostRender/PostRender.css';

const Post = props => {
	return (
		<div className="post">
			<h2>{props.title}</h2>
			<ReactMarkdown source={props.body} escapeHtml={false} />
		</div>
	);
};
export default Post;
