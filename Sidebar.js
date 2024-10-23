import React from 'react';

const Sidebar = () => {
    return (
        <aside className="bg-white w-64 p-4 border-r">
            <h2 className="font-bold mb-4">Quick Access</h2>
            <ul>
                <li><a href="#" className="block py-2 hover:bg-gray-100">Recent Transactions</a></li>
                <li><a href="#" className="block py-2 hover:bg-gray-100">Portfolio Overview</a></li>
                <li><a href="#" className="block py-2 hover:bg-gray-100">Alerts</a></li>
            </ul>
        </aside>
    );
};

export default Sidebar;