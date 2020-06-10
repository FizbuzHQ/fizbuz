import * as React from 'react';

const TextArea = ({ display, field, register, errors, placeholder = undefined, ...rest }) => {
    return (
        <>
            <div className="my-6">
                <label htmlFor={field} className="block text-sm font-medium leading-5 text-gray-700">
                    {display}
                </label>
                <div className={`mt-1 relative rounded-md shadow-sm`}>
                    <textarea
                        rows={3}
                        id={field}
                        name={field}
                        ref={register}
                        className={`form-input block w-full sm:text-sm sm:leading-5 ${
                            errors[field] &&
                            'pr-10 border-red-300 text-red-900 placeholder-red-300 focus:border-red-300 focus:shadow-outline-red'
                        }`}
                        placeholder={placeholder}
                        aria-invalid={errors[field] !== undefined}
                        aria-describedby={errors[field] ? `${field}-error` : undefined}
                        {...rest}
                    />
                </div>
                {errors[field] && (
                    <p className="mt-2 text-sm text-red-600" id={`${field}-error`}>
                        {errors[field].message}
                    </p>
                )}
            </div>
        </>
    );
};

export default TextArea;
