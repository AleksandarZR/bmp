import { ButtonState } from "@/app/enums/enums";
import { JSX } from "react";

interface Properties {
    text: string;
    handler: any;
    state: ButtonState;
    customStyle?: string;
}

const ButtonClick = ({text="Click Me", handler, state=ButtonState.ENABLED, customStyle}: Properties): JSX.Element => {
    const handleClick = () => {
        if (state === ButtonState.ENABLED) {
            handler();
        }
    };

    return (
        <div
            onClick={handleClick}
            className={
                state === ButtonState.DISABLED
                    ? `min-w-[120px] bg-color4 text-color2 pt-1 pb-1 pl-8 pr-8 rounded-lg font-bold text-center ${customStyle}`
                    : `min-w-[120px] bg-color7 text-color1 pt-1 pb-1 pl-8 pr-8 rounded-lg font-bold text-center cursor-pointer ${customStyle}`
            }
        >
            {text}
        </div>
    );
}

export default ButtonClick;
