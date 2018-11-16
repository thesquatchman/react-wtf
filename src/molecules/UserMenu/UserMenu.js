import React, { useState } from 'react';
import IconButton from 'atoms/IconButton/IconButton';
import NewPost from 'organisms/NewPost/NewPost';
import 'molecules/UserMenu/UserMenu.css';

const UserMenu = props => {
	const [newOpen, setNewOpen] = useState(false);
	return props.user ? (
		<div className="UserMenu">
			<IconButton icon="plus" color="#222" onClick={() => setNewOpen(true)} />
			{newOpen && <NewPost close={() => setNewOpen(false)} />}
		</div>
	) : null;
};

export default UserMenu;
