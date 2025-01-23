"use client";

import { JSX } from "react";

interface Properties {
    customStyle?: string;
    imagePath?: string;
    children?: JSX.Element | JSX.Element[]; // in case child elements are needed
}

/* https://github.com/facebook/create-react-app/pull/8177

Downsides to React.FC/React.FunctionComponent
1. Provides an implicit definition of children
2. Doesn't support generics.
3. Makes "component as namespace pattern" more awkward.
4. Doesn't work correctly with defaultProps
5. It's as long, or longer than the alternative (especially longer if you use FunctionalComponent)

Benefits of React.FC:
1. Provides an explicit return type  */

// This is prefered approach to define a component
const Template = ({ customStyle="", imagePath, children }: Properties): JSX.Element => {
    return (
        <div
            id="container"
            // Allow it to receive a custom style
            className={`relative w-full h-full ${customStyle}`}
        >
            <h1>Template</h1>

            {children}
        </div>
    );
};

export default Template;
