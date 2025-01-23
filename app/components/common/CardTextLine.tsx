"use client";

import { JSX } from "react";

interface Properties {
    customStyle?: string;
    textLine?: string;
}

const CardTextLine = ({
    customStyle = "",
    textLine,
}: Properties): JSX.Element => {
    let a = "aaa";

    return (
        <div id="container" className={`w-full ${customStyle}`}>
            <div>{textLine}</div>
        </div>
    );
};

export default CardTextLine;
