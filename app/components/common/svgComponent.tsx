import * as React from "react";
const SvgComponent = (props: any) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <path
            stroke="#FFF"
            strokeWidth={1.89}
            d="M3.832 14.033c-.5-.899-.75-1.348-.75-1.838s.25-.94.75-1.838l1.275-2.292 1.348-2.25c.528-.882.792-1.323 1.216-1.568.425-.245.939-.253 1.966-.27l2.623-.041 2.623.042c1.027.016 1.54.024 1.966.27.424.244.688.685 1.216 1.567l1.348 2.25 1.275 2.293c.5.898.75 1.347.75 1.837s-.25.94-.75 1.838l-1.275 2.292-1.348 2.25c-.528.882-.792 1.323-1.216 1.568-.425.245-.939.253-1.966.27l-2.623.041-2.623-.041c-1.027-.017-1.541-.025-1.966-.27-.424-.245-.688-.686-1.216-1.568l-1.348-2.25-1.275-2.292Z"
        />
        <circle
            cx={12.26}
            cy={12.195}
            r={2.835}
            stroke="#FFF"
            strokeWidth={1.89}
        />
    </svg>
);

export default SvgComponent;
