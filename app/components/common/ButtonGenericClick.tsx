import { ButtonState } from "@/app/enums/enums";

interface Properties {
    text: string;
    handler: any;
    state: ButtonState;
}

export default function ButtonGenericClick(properties: Properties) {
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
                    ? "min-w-[120px] bg-secondary-color text-white pt-1 pb-1 pl-8 pr-8 rounded-lg font-bold text-center"
                    : "min-w-[120px] bg-button-background-color text-button-text-color pt-1 pb-1 pl-8 pr-8 rounded-lg font-bold text-center cursor-pointer"
            }
        >
            {properties.text}
        </div>
    );
}
