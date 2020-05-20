import * as React from 'react';

const Tag = (props) => {
    const { children, mode, ...rest } = props;
    const className = `cursor-pointer inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 ${
        mode === 'off' ? 'bg-gray-100 text-gray-800' : 'bg-green-100 text-green-800'
    }`;
    return (
        <span {...rest} className={className}>
            {children}
        </span>
    );
};

export default Tag;
