import { ButtonState } from "@/app/enums/enums";

interface Properties {
    text: string;
    handler: any;
    state: ButtonState;
}

export default function ButtonClick(properties: Properties) {
    const handleClick = () => {
        if (properties.state === ButtonState.ENABLED) {
            properties.handler();
        }
    };

    return (
        <div
            onClick={handleClick}
            className={
                properties.state === ButtonState.DISABLED
                    ? "min-w-[120px] bg-color4 text-color2 pt-1 pb-1 pl-8 pr-8 rounded-lg font-bold text-center"
                    : "min-w-[120px] bg-color7 text-color1 pt-1 pb-1 pl-8 pr-8 rounded-lg font-bold text-center cursor-pointer"
            }
        >
            {properties.text}
        </div>
    );
}
