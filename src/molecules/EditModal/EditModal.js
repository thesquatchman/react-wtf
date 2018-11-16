import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import IconButton from 'atoms/IconButton/IconButton';
import 'molecules/EditModal/EditModal.css';

const EditModal = props => {
	const portalNode = document.createElement('div');

	useEffect(() => {
		document.body.appendChild(portalNode);
		return () => {
			document.body.removeChild(portalNode);
		};
	});

	return createPortal(
		<div className="EditModal">
			<div className="EditModalHeader">
				<IconButton color="#222" icon="close" onClick={props.close} />
				<span className="EditModalHeading">{props.heading}</span>
			</div>
			{props.children}
		</div>,
		portalNode
	);
};

export default EditModal;
