import React from "react";
import { useState } from "react";
import Questions from "./Questions";

function MainContent() {
   



    return (
        <div className="main-content shadow sm:rounded-md sm:overflow-hidden md:grid md:grid-cols-3 md:gap-6 m-5 p-4">
            <h1 className="text-2xl font-medium leading-6 text-gray-900 m-2">Main Content</h1>
            <Questions className="mt-5 md:mt-0" />
        </div>

    );
}

export default MainContent;
