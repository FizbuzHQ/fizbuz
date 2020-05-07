import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Transition from '../Tailwind/Transition';
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

function DashboardLinks({ mode }: { mode?: string }) {
    return (
        <Link
            to="/home"
            className={
                mode === 'mobile'
                    ? 'block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out'
                    : 'px-3 py-2 rounded-md text-sm font-medium leading-5 text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out'
            }
        >
            Dashboard
        </Link>
    );
}

function ProfileActions({ mode }: { mode?: string }) {
    const { logout } = useAuth0();
    const logoutWithRedirect = () => {
        logout({
            returnTo: window.location.origin,
        });
    };
    return (
        <>
            <Link
                to="/profile"
                className={
                    mode === 'mobile'
                        ? 'block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out'
                        : 'block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out'
                }
            >
                Your Profile
            </Link>
            <Link
                to="/settings"
                className={
                    mode === 'mobile'
                        ? 'block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out'
                        : 'block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out'
                }
            >
                Settings
            </Link>
            <Link
                to="/"
                onClick={() => logoutWithRedirect()}
                className={
                    mode === 'mobile'
                        ? 'block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out'
                        : 'block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out'
                }
            >
                Sign out
            </Link>
        </>
    );
}

const Nav = () => {
    const { user } = useAuth0();
    const [profileMenuOpen, setProfileMenuOpen] = useState(false);

    return (
        <nav className="bg-gray-800">
            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Logo />
                        </div>
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex">
                                <DashboardLinks />
                            </div>
                        </div>
                    </div>
                    <div className="hidden sm:ml-6 sm:block">
                        <div className="flex items-center">
                            <button
                                type="button"
                                className="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
                            >
                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                    />
                                </svg>
                            </button>
                            {/* Profile dropdown */}
                            <div className="ml-3 relative">
                                <div>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setProfileMenuOpen(!profileMenuOpen);
                                        }}
                                        onBlur={() => {
                                            // HACK: push this back in the event loop so that clicking on items in the menu isn't broken
                                            setTimeout(() => setProfileMenuOpen(false), 100);
                                        }}
                                        className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-white transition duration-150 ease-in-out"
                                    >
                                        <img className="h-8 w-8 rounded-full" src={user.picture} alt="" />
                                    </button>
                                </div>
                                {/*
                Profile dropdown panel, show/hide based on dropdown state.
  
                Entering: "transition ease-out duration-100"
                  From: "transform opacity-0 scale-95"
                  To: "transform opacity-100 scale-100"
                Leaving: "transition ease-in duration-75"
                  From: "transform opacity-100 scale-100"
                  To: "transform opacity-0 scale-95"
              */}
                                <Transition
                                    show={profileMenuOpen}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg">
                                        <div className="py-1 rounded-md bg-white shadow-xs">
                                            <ProfileActions />
                                        </div>
                                    </div>
                                </Transition>
                            </div>
                        </div>
                    </div>
                    {/* Start mobile version */}
                    <div className="-mr-2 flex sm:hidden">
                        <button
                            type="button"
                            onClick={() => {
                                setProfileMenuOpen(!profileMenuOpen);
                            }}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
                        >
                            {/* Icon when menu is closed. */}
                            {/* Menu open: "hidden", Menu closed: "block" */}
                            <svg
                                className={`${profileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
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
                                className={`${profileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
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

            {/* Mobile menu, toggle classNamees based on menu state.
          Menu open: "block", Menu closed: "hidden" */}
            <div className={`${profileMenuOpen ? 'block' : 'hidden'} sm:hidden`}>
                <div className="px-2 pt-2 pb-3">
                    <DashboardLinks mode="mobile" />
                </div>
                <div className="pt-4 pb-3 border-t border-gray-700">
                    <div className="flex items-center px-5">
                        <div className="flex-shrink-0">
                            <img className="h-10 w-10 rounded-full" src={user.picture} alt="profile" />
                        </div>
                        <div className="ml-3">
                            <div className="text-base font-medium leading-6 text-white">{user.name}</div>
                            <div className="text-sm font-medium leading-5 text-gray-400">{user.email}</div>
                        </div>
                    </div>
                    <div className="mt-3 px-2">
                        <ProfileActions mode="mobile" />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
