import React from "react";
import { useGlobalContext } from "./context";

const Buttons = () => {
    const { handlePage, page, nbPages, isLoading } = useGlobalContext();
    return (
        <div className="btn-container">
            <button
                disabled={page === 0 || isLoading}
                onClick={() => handlePage("dec")}
            >
                prev
            </button>
            <p>
                {page + 1} of {nbPages}
            </p>
            <button
                onClick={() => handlePage("inc")}
                disabled={page === nbPages - 1 || isLoading}
            >
                next
            </button>
        </div>
    );
};

export default Buttons;
