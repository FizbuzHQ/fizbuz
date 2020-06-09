import * as React from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { useCurrentUserQuery } from 'src/generated/graphql';
// import AppNav from '../components/nav/AppNav';
import Transition from 'src/components/tailwind/Transition';
// import Footer from 'src/components/nav/Footer';
import { InboxIcon, CalendarIcon, ChartIcon, FolderIcon, TeamIcon, HomeIcon } from 'src/components/ui/Icons';
import './AppLayout.css';
import Button from 'src/components/ui/Button';
import { useAuth0 } from 'src/auth/auth0';
import Loading from 'src/components/ui/Loading';

const Sidebar = ({ setMenuOpen }) => {
    return (
        <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
            <div className="flex-shrink-0 flex items-center px-4">
                <Link to="/">
                    <img className="h-8 w-auto" src="/fizbuz-logo.svg" alt="Fizbuz logo" />
                </Link>
            </div>
            <nav className="mt-5 px-2">
                <Link
                    to="/home"
                    className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-100 transition ease-in-out duration-150"
                    onClick={() => {
                        setMenuOpen(false);
                    }}
                    /*className="group flex items-center px-2 py-2 text-base leading-6 font-medium text-gray-900 rounded-md bg-gray-100 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150"*/
                >
                    <HomeIcon />
                    Dashboard
                </Link>
                <Link
                    to="/home/profile"
                    className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-100 transition ease-in-out duration-150"
                    onClick={() => {
                        setMenuOpen(false);
                    }}
                >
                    <TeamIcon />
                    Profile
                </Link>
                <Link
                    to="/onboarding/skills"
                    className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-100 transition ease-in-out duration-150"
                    onClick={() => {
                        setMenuOpen(false);
                    }}
                >
                    <FolderIcon />
                    Onboard / Skills
                </Link>
                <a
                    href="#"
                    className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-100 transition ease-in-out duration-150"
                    onClick={() => {
                        setMenuOpen(false);
                    }}
                >
                    <CalendarIcon />
                    Calendar
                </a>
                <a
                    href="#"
                    className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-100 transition ease-in-out duration-150"
                    onClick={() => {
                        setMenuOpen(false);
                    }}
                >
                    <InboxIcon />
                    Documents
                </a>
                <a
                    href="#"
                    className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-100 transition ease-in-out duration-150"
                    onClick={() => {
                        setMenuOpen(false);
                    }}
                >
                    <ChartIcon />
                    Reports
                </a>
            </nav>
        </div>
    );
};

const Account = () => {
    const { data } = useCurrentUserQuery();
    const { logout } = useAuth0();
    //console.log(data);
    return (
        <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
            <div className="flex items-center">
                <div>
                    <img
                        className="inline-block h-10 w-10 rounded-full"
                        src={data.currentUser.profile.photo}
                        alt="profile photo"
                    />
                </div>
                <div className="ml-3">
                    <p className="text-base leading-6 font-medium text-gray-700 group-hover:text-gray-900">
                        {data.currentUser.profile.name}
                    </p>
                    <Button
                        mode="secondary"
                        size="xs"
                        onClick={() => {
                            localStorage.clear();
                            logout({ returnTo: window.location.origin });
                        }}
                    >
                        Log Out
                    </Button>
                </div>
            </div>
        </div>
    );
};

const AppLayout = ({ component: Component }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { data } = useCurrentUserQuery();
    if (!data || !data.currentUser) {
        return <Loading />;
    }
    //console.log(data);
    return (
        <>
            <Helmet>
                <title>Fizbuz</title>
            </Helmet>
            <div>
                <div className="h-screen flex overflow-hidden bg-white">
                    <div className={`md:hidden ${!menuOpen && 'hidden'}`}>
                        <div className="fixed inset-0 flex z-40">
                            {/* Off-canvas menu overlay, show/hide based on off-canvas menu state. */}
                            <Transition
                                show={menuOpen}
                                enter="transition-opacity ease-linear duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="transition-opacity ease-linear duration-300"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="fixed inset-0">
                                    <div className="absolute inset-0 bg-gray-600 opacity-75"></div>
                                </div>
                            </Transition>
                            <Transition
                                show={menuOpen}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="-translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="-translate-x-full"
                            >
                                <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
                                    <div className="absolute top-0 right-0 -mr-14 p-1">
                                        <button
                                            className="flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-gray-600"
                                            aria-label="Close sidebar"
                                            onClick={() => {
                                                setMenuOpen(false);
                                            }}
                                        >
                                            <svg
                                                className="h-6 w-6 text-white"
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
                                    <Sidebar setMenuOpen={setMenuOpen} />
                                    <Account />
                                </div>
                            </Transition>
                            <div className="flex-shrink-0 w-14">{/* Force sidebar to shrink to fit close icon */}</div>
                        </div>
                    </div>

                    {/* Static sidebar for desktop */}
                    <div className="hidden md:flex md:flex-shrink-0">
                        <div className="flex flex-col w-64 border-r border-gray-200 bg-white">
                            <Sidebar setMenuOpen={setMenuOpen} />
                            <Account />
                        </div>
                    </div>
                    <div className="flex flex-col w-0 flex-1 overflow-hidden">
                        <div className="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
                            <button
                                className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150"
                                aria-label="Open sidebar"
                                onClick={() => {
                                    setMenuOpen(true);
                                }}
                            >
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </button>
                        </div>
                        <main
                            className="flex-1 relative z-0 overflow-y-auto pt-2 pb-6 focus:outline-none md:py-6"
                            tabIndex={0}
                        >
                            {/*<div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                                <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
                            </div>*/}
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                                <Component />
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AppLayout;
