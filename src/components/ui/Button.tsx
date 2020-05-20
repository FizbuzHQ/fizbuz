import * as React from 'react';

const Button = (props) => {
    //const {} = props;
    return (
        <button type="button" {...props}>
            {props.children}
        </button>
    );
};

export default Button;
