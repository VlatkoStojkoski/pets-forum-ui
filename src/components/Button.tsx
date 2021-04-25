import React from 'react';

interface ButtonProps {
	children: React.ReactNode;
	color?: 'accent';
}

const Button: React.FC<ButtonProps> = ({ children, color, ...props }) => {
	return <button className={`button ${color || ''}`}>{children}</button>;
};

export { Button };
