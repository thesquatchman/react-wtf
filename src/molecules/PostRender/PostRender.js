import React from 'react';
import ReactMarkdown from 'react-markdown';
import 'molecules/PostRender/PostRender.css';

const Post = props => {
	return (
		<div className="post">
			<h1>{props.title}</h1>
			<ReactMarkdown source={props.body} escapeHtml={false} />
		</div>
	);
};
export default Post;
