"use client";

import { JSX } from "react";

interface Properties {
    customStyle?: string;
    header?: string;
    children?: JSX.Element | JSX.Element[];
}

const Card = ({ customStyle = "", header = "Header", children }: Properties): JSX.Element => {
    return (
        <div
            id="container"
            // Allow it to receive a custom style
            className={`p-space3 min-h-[550px] bg-color0 rounded shadow-[8px_8px_8px_8px_rgba(0,0,0,0.2)] flex flex-col justify-start items-start ${customStyle}`}
        >
            <h1 className="py-space2 w-full text-center text-color8 font-bold bg-color7 rounded text-3xl">{header}</h1>

            <div id="children" className="pt-space2 flex flex-col justify-start items-start ">
                {children}
            </div>
        </div>
    );
};

export default Card;
