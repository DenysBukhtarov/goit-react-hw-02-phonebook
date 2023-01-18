import React from "react";
import PropTypes from "prop-types";

function Button({ type, text, onClick, disabled }) { 
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
        >
            {text}
        </button>
    );
}

export default Button;

Button.propTypes = {
    options: PropTypes.shape({
        type: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        onClick: PropTypes.string.func,
        disabled: PropTypes.string.bool,
    }),
};