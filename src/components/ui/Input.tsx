import * as React from 'react';

const Input = ({
    display,
    field,
    register,
    errors,
    placeholder = undefined,
    defaultValue = undefined,
    addOn = undefined,
    ...rest
}) => {
    //console.log(errors);
    return (
        <>
            <div className="my-6">
                <label htmlFor={field} className="block text-sm font-medium leading-5 text-gray-700">
                    {display}
                </label>
                <div className={`mt-1 ${addOn ? 'flex' : 'relative'} rounded-md shadow-sm`}>
                    {addOn && (
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                            {addOn}
                        </span>
                    )}

                    <input
                        id={field}
                        name={field}
                        ref={register}
                        className={`form-input ${
                            addOn ? 'flex-1 px-3 py-2 rounded-none rounded-r-md' : 'block'
                        } w-full sm:text-sm sm:leading-5 ${
                            errors[field] &&
                            'pr-10 border-red-300 text-red-900 placeholder-red-300 focus:border-red-300 focus:shadow-outline-red'
                        }`}
                        placeholder={placeholder}
                        //defaultValue={defaultValue}
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

export default Input;
