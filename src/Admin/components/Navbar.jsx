import { useStateContext } from '../../contexts/ContextProvider';
import { motion } from 'framer-motion';
import { Person, SwitchLeftOutlined, Dehaze } from '@mui/icons-material';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = ({ navbarMenuRef, showMenu, setShowMenu }) => {
    const navigate = useNavigate();
    const { setMode, setShowSidebar } = useStateContext();
    const { loggedUser } = useSelector(state => state.user);

    const switchMode = () => {
        navigate('/');
        setShowMenu(false);
        localStorage.setItem('mode', 'user');
        setMode('user');
    };

    return (
        <header className="sticky top-0 w-full h-[4rem] bg-darkGray z-[100] flex items-center justify-between px-4 md:px-6 lg:px-8 shadow-md border-b border-gray-700">
            {/* Left: Logo & Menu Toggle */}
            <div className="flex items-center gap-4">
                <button
                    className="text-white hover:text-orange transition"
                    onClick={() => setShowSidebar(prev => !prev)}
                >
                    <Dehaze />
                </button>
                <h1
                    onClick={() => navigate('/')}
                    className="text-2xl md:text-3xl font-bold text-orange cursor-pointer font-[cursive] transition hover:scale-105"
                >
                    Aayan-Infotech
                </h1>
            </div>

            {/* Right: User Info */}
            <div className="flex items-center gap-4">
                <p className="hidden sm:block text-white text-lg font-medium capitalize">
                    {loggedUser?.name}
                </p>

                <div className="relative">
                    <span
                        onClick={() => setShowMenu(prev => !prev)}
                        className="bg-orange text-black font-semibold flex items-center justify-center rounded-full w-10 h-10 text-xl cursor-pointer hover:scale-105 transition"
                    >
                        {loggedUser?.name?.charAt(0)?.toUpperCase() || 'U'}
                    </span>

                    {showMenu && (
                        <motion.div
                            ref={navbarMenuRef}
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-[110%] right-0 mt-2 w-48 bg-lightGray border border-white rounded-md shadow-xl py-2 z-[999]"
                        >
                            <button
                                onClick={switchMode}
                                className="flex items-center gap-3 w-full px-4 py-2 text-sm text-left text-white hover:bg-darkGray transition"
                            >
                                <SwitchLeftOutlined className="text-orange" />
                                <span>Switch Mode</span>
                            </button>
                        </motion.div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Navbar;
