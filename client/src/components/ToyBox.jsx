import React from "react";

const ToyBox = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
            <h1 className="text-5xl font-bold mb-6">Welcome to the Toy Box!</h1>
            <p className="text-lg mb-6">Explore fun animations and projects here.</p>
            <iframe
                src="/toybox.html"
                title="Toy Box Animation"
                className="w-full h-96 border-2 border-gray-500"
                style={{ maxWidth: "800px" }}
            ></iframe>
        </div>
    );
};

export default ToyBox;