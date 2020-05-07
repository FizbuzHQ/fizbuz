import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '../../auth/auth0';

function Logo() {
    const logo = '/logo.png';
    return (
        <Link to="/">
            <img className="block lg:hidden h-8 w-auto" src={logo} alt="logo" />
            <img className="hidden lg:block h-8 w-auto" src={logo} alt="logo" />
        </Link>
    );
}

function LoginButton(props) {
    const { mode } = props;
    const { loginWithRedirect } = useAuth0();
    return (
        <button
            onClick={() => loginWithRedirect()}
            className={
                mode === 'mobile'
                    ? 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                    : 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            }
            type="button"
        >
            Sign In
        </button>
    );
}

function DefaultNav() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className="bg-white shadow">
            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="flex-shrink-0 flex items-center">
                            <Logo />
                        </div>
                        <div className="hidden sm:ml-6 sm:flex">&nbsp;</div>
                    </div>
                    <div className="hidden sm:ml-6 sm:flex sm:items-center">
                        {/* Log in button */}
                        <div className="ml-3 relative">
                            <div>
                                <LoginButton />
                            </div>
                        </div>
                    </div>
                    <div className="-mr-2 flex items-center sm:hidden">
                        {/* Mobile menu button */}
                        <button
                            onClick={() => {
                                setMenuOpen(!menuOpen);
                            }}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                        >
                            {/* Icon when menu is closed. */}
                            {/* Menu open: "hidden", Menu closed: "block" */}
                            <svg
                                className={`${menuOpen ? 'hidden' : 'block'} h-6 w-6`}
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                            {/* Icon when menu is open. */}
                            {/* Menu open: "block", Menu closed: "hidden" */}
                            <svg
                                className={`${menuOpen ? 'block' : 'hidden'} h-6 w-6`}
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/*
                Mobile menu, toggle classes based on menu state.
                Menu open: "block", Menu closed: "hidden"
            */}
            <div className={`${menuOpen ? 'block' : 'hidden'} sm:hidden`}>
                <div className="pt-2 pb-3">&nbsp;</div>
                <div className="pt-4 pb-3 border-t border-gray-200">
                    <div className="flex items-center px-4">
                        <div className="flex-shrink-0">
                            <LoginButton mode="mobile" />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default DefaultNav;
