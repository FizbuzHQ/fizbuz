import * as React from 'react';
import { Alert } from './Alert';

const Flash = ({ flash, location = null }) => {
    const info = flash ? flash : location && location.state && location.state.flash ? location.state.flash : null;
    if (info) {
        return (
            <div className="p-1">
                <Alert mode={info.mode} message={info.message} />
            </div>
        );
    } else {
        return null;
    }
};

export default Flash;
