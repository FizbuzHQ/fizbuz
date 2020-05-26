import * as React from 'react';

const Button = (props) => {
    const { mode, children, ...rest } = props;

    const modeClasses = ((mode) => {
        switch (mode) {
            case 'primary':
                return 'text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700';
            case 'secondary':
                return 'text-indigo-700 bg-indigo-100 hover:bg-indigo-50 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo active:bg-indigo-200';
            default:
                return 'text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50';
        }
    })(mode);

    const className = `inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md ${modeClasses} transition ease-in-out duration-150`;

    return (
        <button type="button" className={className} {...rest}>
            {children}
        </button>
    );
};

export default Button;
