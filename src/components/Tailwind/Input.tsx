import * as React from 'react';

const Input = ({ display, field, placeholder, validationRef, errors, errorMessage }) => {
    return (
        <>
            <div>
                <label htmlFor={field} className="block text-sm font-medium leading-5 text-gray-700">
                    {display}
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                        id={field}
                        name={field}
                        ref={validationRef}
                        className={`form-input block w-full sm:text-sm sm:leading-5 ${
                            errors[field] &&
                            'pr-10 border-red-300 text-red-900 placeholder-red-300 focus:border-red-300 focus:shadow-outline-red'
                        }`}
                        placeholder={placeholder}
                        aria-invalid={errors[field] !== undefined}
                        aria-describedby={errors[field] ? `${field}-error` : undefined}
                    />
                    {errors[field] && (
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    fillRule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                    )}
                </div>
            </div>
            {errors[field] && (
                <p className="mt-2 text-sm text-red-600" id={`${field}-error`}>
                    {errorMessage}
                </p>
            )}
        </>
    );
};

export default Input;
