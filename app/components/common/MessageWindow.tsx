"use client";
import React, { useState } from "react";
import ButtonClick from "./ButtonClick";

export enum MessageType {
    INFO = "info",
    ERROR = "error",
}

// Define a Record mapping for text colors based on MessageType
const textColorMap: Record<MessageType, string> = {
    [MessageType.INFO]: "text-color6",
    [MessageType.ERROR]: "text-color8",
};

interface MessageWindowProps {
    messageType: MessageType;
    messageContent: string;
    onClose: () => void; // Add onClose prop to handle closing the window
}

const MessageWindow: React.FC<MessageWindowProps> = ({
    messageType,
    messageContent,
    onClose,
}) => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
        onClose(); // Call the onClose function when closing
    };

    // Retrieve the text color using the Record instead of a switch statement
    const getTextColor = () => textColorMap[messageType] || "text-black";

    return isVisible ? (
        <div className="fixed inset-0 flex items-center justify-center z-45">
            <div className="border-4 border-color1 min-w-[300px] min-h-[200px] bg-color0 rounded shadow-lg max-w-md m-auto text-center flex flex-col justify-between items-center">
                <h2 className={`min-w-[100%] text-lg ${getTextColor()} font-bold bg-color1`}>
                    {messageType.toUpperCase()}{" "}
                </h2>
                <p className="px-space22 py-space22 text-gray-700">{messageContent}</p>
                <div className="flex justify-center pb-space2 sm:pb-space22">
                    <ButtonClick
                        text="OK"
                        handler={handleClose}
                    />
                </div>
            </div>
        </div>
    ) : null;
};

export default MessageWindow;
