import React from "react";
import { useNavigate } from "react-router-dom";
import Fireworks from "./Fireworks";

const ToyBox = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-900 text-white mt-20 flex flex-col items-center relative">
            {/* Back button in the top-right corner */}
            <div className="absolute top-5 right-10 p-5">
                <button
                    onClick={() => navigate("/")}
                    className="btn btn-primary"
                >
                    Back
                </button>
            </div>

            {/* Centered Welcome Message */}
            <div className="flex flex-col items-center justify-center mt-10">
                <h1 className="text-5xl font-bold text-center">
                    Welcome to the Toy Box
                </h1>
            </div>

            {/* Description */}
            <p className="text-lg mb-6 text-center mt-5">
                Click on one of the animations below to explore!
            </p>

            {/* Animation List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 w-full max-w-5xl">
                {/* Fireworks Animation */}
                <div className="bg-gray-800 p-4 rounded-lg text-center shadow-lg hover:bg-gray-700 cursor-pointer">
                    <h2 className="text-xl font-bold mb-2">Fireworks</h2>
                    <Fireworks />
                </div>
            </div>
        </div>
    );
};

export default ToyBox;