import React, { useState } from "react";

const Fireworks = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleFireworks = () => {
        setIsActive(!isActive);
    };

    return (
        <div>
            <button
                onClick={toggleFireworks}
                className={`btn ${isActive ? "bg-red-500" : "bg-green-500"
                    } text-white mt-2`}
            >
                {isActive ? "Stop Fireworks" : "Start Fireworks"}
            </button>
            {isActive && (
                <iframe
                    src="/toybox_animations/fireworks.html"
                    title="Fireworks Animation"
                    className="w-full h-60 mt-4 border-2 border-gray-500"
                ></iframe>
            )}
        </div>
    );
};

export default Fireworks;