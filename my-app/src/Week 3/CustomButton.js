import React from "react";

export function CustomButton() {
    const handleClick = () => {
        console.log("Button clicked!");
    };

    return (
        <button
            onClick={handleClick}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
            Click Me
        </button>
    );
}
