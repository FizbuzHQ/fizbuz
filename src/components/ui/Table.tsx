import * as React from 'react';

const Table = ({ children }) => {
    return (
        <div className="flex flex-col">
            <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                    <table className="min-w-full">{children}</table>
                </div>
            </div>
        </div>
    );
};

const Header = ({ columns }) => {
    return (
        <thead>
            <tr>
                {columns.map((c, i) => (
                    <th
                        key={i}
                        className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                    >
                        {c}
                    </th>
                ))}
            </tr>
        </thead>
    );
};

const Body = ({ children }) => {
    return <tbody>{children}</tbody>;
};

const Row = ({ num = undefined, children }) => {
    return <tr className={num === undefined || num % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>{children}</tr>;
};

const Data = ({ children }) => {
    return <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">{children}</td>;
};

export { Table, Header, Body, Row, Data };
