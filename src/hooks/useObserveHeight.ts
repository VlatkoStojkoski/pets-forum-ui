import React, { useEffect, useState } from 'react';

import ResizeObserver from 'resize-observer-polyfill';

export const useObserveHeight = (
	componentRef: React.RefObject<HTMLElement>
): number => {
	const [componentHeight, setComponentHeight] = useState(0);

	useEffect(() => {
		if (componentRef.current) {
			new ResizeObserver(() =>
				setComponentHeight(componentRef.current?.offsetHeight || 0)
			).observe(componentRef.current);
		}
	}, [componentRef]);

	return componentHeight;
};
