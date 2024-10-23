import React from 'react';

const Dashboard = () => {
    const transactions = [
        { date: '2024-10-20', description: 'Investment A', amount: '$10,000', status: 'Completed' },
        { date: '2024-10-21', description: 'Dividend B', amount: '$1,200', status: 'Completed' },
        { date: '2024-10-22', description: 'Fee C', amount: '$150', status: 'Pending' },
    ];

    return (
        <main className="flex-1 p-4">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-white p-4 rounded shadow">
                    <h3 className="font-bold">Total Assets</h3>
                    <p className="text-xl">$1,250,000</p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                    <h3 className="font-bold">Total Liabilities</h3>
                    <p className="text-xl">$500,000</p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                    <h3 className="font-bold">Net Worth</h3>
                    <p className="text-xl">$750,000</p>
                </div>
            </div>
            <h2 className="text-xl font-bold mb-2">Recent Transactions</h2>
            <table className="w-full border-collapse">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border px-4 py-2">Date</th>
                        <th className="border px-4 py-2">Description</th>
                        <th className="border px-4 py-2">Amount</th>
                        <th className="border px-4 py-2">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction, index) => (
                        <tr key={index} className="hover:bg-gray-100">
                            <td className="border px-4 py-2">{transaction.date}</td>
                            <td className="border px-4 py-2">{transaction.description}</td>
                            <td className="border px-4 py-2">{transaction.amount}</td>
                            <td className="border px-4 py-2">{transaction.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    );
};

export default Dashboard;