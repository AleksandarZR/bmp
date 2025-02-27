"use client";
import React, { useState } from "react";

export enum MessageType {
    INFO = "info",
    ERROR = "error",
}

// Define a Record mapping for text colors based on MessageType
const textColorMap: Record<MessageType, string> = {
    [MessageType.INFO]: "text-primary-color",
    [MessageType.ERROR]: "text-red-500",
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
            <div className="border-4 border-secondary-color p-4 bg-tertiary-color rounded shadow-lg max-w-md m-auto text-center">
                <h2 className={`text-lg ${getTextColor()} font-bold`}>
                    {MessageType.INFO.toUpperCase()}{" "}
                    {/* Use the localized message */}
                </h2>
                <p className="text-gray-700 mb-4">{messageContent}</p>
                <div className="flex justify-center">
                    <button
                        onClick={handleClose}
                        className="bg-button-background-color text-button-text-color pt-1 pb-1 w-28 max-w-28 min-w-28 rounded-lg font-bold text-center"
                    >
                        OK
                    </button>
                </div>
            </div>
        </div>
    ) : null;
};

export default MessageWindow;
