import React from 'react';
import 'atoms/IconButton/IconButton.css';

const Svg = ({ color, icon }) => {
	switch (icon) {
		case 'close':
			return (
				<svg className="IconButtonSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 785 785">
					<g fill={color}>
						<path d="M724 112q0-22-15-38l-76-76q-16-15-38-15t-38 15l-164 165-164-165q-16-15-38-15t-38 15l-76 76q-16 16-16 38t16 38l164 164-164 164q-16 16-16 38t16 38l76 76q16 16 38 16t38-16l164-164 164 164q16 16 38 16t38-16l76-76q15-15 15-38t-15-38l-164-164 164-164q15-15 15-38z" />
					</g>
				</svg>
			);
		case 'menu':
			return (
				<svg className="IconButtonSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 857 857">
					<g fill={color}>
						<path d="M857 100v-71q0-15-10-25t-26-11h-785q-15 0-25 11t-11 25v71q0 15 11 25t25 11h785q15 0 26-11t10-25z m0 286v-72q0-14-10-25t-26-10h-785q-15 0-25 10t-11 25v72q0 14 11 25t25 10h785q15 0 26-10t10-25z m0 285v-71q0-14-10-25t-26-11h-785q-15 0-25 11t-11 25v71q0 15 11 26t25 10h785q15 0 26-10t10-26z" />
					</g>
				</svg>
			);
		case 'plus':
			return (
				<svg className="IconButtonSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 857 857">
					<g fill={color}>
						<path d="M679 314v72q0 14-11 25t-25 10h-143v143q0 15-11 25t-25 11h-71q-15 0-25-11t-11-25v-143h-143q-14 0-25-10t-10-25v-72q0-14 10-25t25-10h143v-143q0-15 11-25t25-11h71q15 0 25 11t11 25v143h143q14 0 25 10t11 25z m178 36q0-117-57-215t-156-156-215-58-216 58-155 156-58 215 58 215 155 156 216 58 215-58 156-156 57-215z" />
					</g>
				</svg>
			);
		case 'minus':
			return (
				<svg className="IconButtonSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 857 700">
					<g fill={color}>
						<path d="M679 314v72q0 14-11 25t-25 10h-429q-14 0-25-10t-10-25v-72q0-14 10-25t25-10h429q14 0 25 10t11 25z m178 36q0-117-57-215t-156-156-215-58-216 58-155 156-58 215 58 215 155 156 216 58 215-58 156-156 57-215z" />
					</g>
				</svg>
			);
		case 'pencil':
			return (
				<svg className="IconButtonSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 857 700">
					<g fill={color}>
						<path d="M203-7l50 51-131 131-51-51v-60h72v-71h60z m291 518q0 12-12 12-5 0-9-4l-303-302q-4-4-4-10 0-12 13-12 5 0 9 4l303 302q3 4 3 10z m-30 107l232-232-464-465h-232v233z m381-54q0-29-20-50l-93-93-232 233 93 92q20 21 50 21 29 0 51-21l131-131q20-22 20-51z" />
					</g>
				</svg>
			);
		default:
			return null;
	}
};

const NavToggle = props => {
	const { color, background, icon, onClick } = props;
	return (
		<button className="IconButton" onClick={onClick} style={{ backgroundColor: background }}>
			<Svg color={color} icon={icon} />
			{props.children && <span className="IconButtonText">{props.children}</span>}
		</button>
	);
};
export default NavToggle;
