import * as React from 'react';
import { SuccessIcon, ErrorIcon, WarnIcon, InfoIcon } from './Icons';

enum Mode {
    INFO,
    WARN,
    ERROR,
    SUCCESS,
}
interface AlertProps {
    message: string;
    title?: string;
    mode?: Mode;
}

function Alert({ message, title = undefined, mode = Mode.INFO }: AlertProps) {
    let bgcolor,
        text,
        Icon = undefined;

    if (mode === Mode.SUCCESS) {
        bgcolor = 'bg-green-50';
        Icon = SuccessIcon;
        text = 'text-green-800';
    } else if (mode === Mode.ERROR) {
        bgcolor = 'bg-red-50';
        Icon = ErrorIcon;
        text = 'text-red-800';
    } else if (mode === Mode.WARN) {
        bgcolor = 'bg-yellow-50';
        Icon = WarnIcon;
        text = 'text-yellow-800';
    } else if (mode === Mode.INFO) {
        bgcolor = 'bg-blue-50';
        Icon = InfoIcon;
        text = 'text-blue-800';
    } else {
        bgcolor = 'bg-white';
        text = 'text-black';
    }

    return (
        <div className={`rounded-md ${bgcolor} p-4`}>
            <div className="flex">
                <div className="flex-shrink-0">
                    <Icon />
                </div>
                <div className="ml-3">
                    {title && (
                        <>
                            <h3 className={`text-sm leading-5 font-medium ${text}`}>{title}</h3>
                            <div className={`mt-2 text-sm leading-5 ${text}`}>
                                <p>{message}</p>
                            </div>
                        </>
                    )}
                    {!title && <p className={`text-sm leading-5 ${text}`}>{message}</p>}
                </div>
            </div>
        </div>
    );
}

export { Alert, Mode };
