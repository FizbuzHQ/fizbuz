import * as React from 'react';

const Select = ({ display, field, register, errors, children, ...rest }) => {
    return (
        <div>
            <label htmlFor={field} className="block text-sm leading-5 font-medium text-gray-700">
                {display}
            </label>
            <select
                id={field}
                name={field}
                ref={register}
                className="mt-1 form-select block w-full pl-3 pr-10 py-2 text-base leading-6 border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                {...rest}
            >
                {children}
            </select>
            {errors[field] && (
                <p className="mt-2 text-sm text-red-600" id={`${field}-error`}>
                    {errors[field].message}
                </p>
            )}
        </div>
    );
};

export default Select;
