import React, { useContext } from 'react';
import { AppContext } from 'store/Provider';
import { NAV_OPEN } from 'store/storeConstants';
import IconButton from 'atoms/IconButton/IconButton';
import 'atoms/NavToggle/NavToggle.css';

const NavToggle = props => {
	const { state, dispatch } = useContext(AppContext);
	return (
		<div className="NavToggle">
			<IconButton
				color="#fff"
				background="#282c34"
				onClick={() => {
					dispatch({ type: NAV_OPEN });
				}}
				icon={state.navOpen ? 'close' : 'menu'}
			/>
		</div>
	);
};
export default NavToggle;
