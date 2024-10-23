import React from 'react';

const Header = () => {
    return (
        <header className="bg-green-600 text-white p-4 flex justify-between items-center">
            <div className="text-2xl font-bold">Light</div>
            <nav>
                <ul className="flex space-x-4">
                    <li><a href="#" className="hover:underline">Dashboard</a></li>
                    <li><a href="#" className="hover:underline">Reports</a></li>
                    <li><a href="#" className="hover:underline">Analytics</a></li>
                    <li><a href="#" className="hover:underline">Settings</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;