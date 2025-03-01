'use client'

import * as React from 'react'

const VisuallyHidden = ({
	children,
	...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
	return (
		<span
			{...props}
			className="absolute w-[1px] h-[1px] p-0 -m-[1px] overflow-hidden whitespace-nowrap border-0"
			style={{
				clip: 'rect(0, 0, 0, 0)',
			}}
		>
			{children}
		</span>
	)
}

export {VisuallyHidden}
