'use client'
import { useState } from 'react';

interface WithdrawRequest {
  id: number;
  lawyer_id: number;
  amount: number;
  status: string;
  created_at: string;
  lawyer: {
    name: string;
  };
}

const WithdrawRequestsPage = () => {
  const [withdrawRequests] = useState<WithdrawRequest[]>([
    {
      id: 1,
      lawyer_id: 1,
      amount: 500.0,
      status: 'PENDING',
      created_at: new Date().toISOString(),
      lawyer: { name: 'John Doe' },
    },
    {
      id: 2,
      lawyer_id: 2,
      amount: 750.0,
      status: 'APPROVED',
      created_at: new Date().toISOString(),
      lawyer: { name: 'Alice Johnson' },
    },
    {
      id: 3,
      lawyer_id: 3,
      amount: 300.0,
      status: 'REJECTED',
      created_at: new Date().toISOString(),
      lawyer: { name: 'Michael White' },
    },
  ]);

  return (
    <div className="w-full font-sans min-h-screen pt-28 pl-10 lg:pl-72 bg-[#f2f6fa] text-black overflow-auto">
      <h1 className="text-2xl font-bold mb-4">Withdraw Request History</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-2 px-4 border-b text-left">ID</th>
              <th className="py-2 px-4 border-b text-left">Lawyer</th>
              <th className="py-2 px-4 border-b text-left">Amount</th>
              <th className="py-2 px-4 border-b text-left">Status</th>
              <th className="py-2 px-4 border-b text-left">Created At</th>
            </tr>
          </thead>
          <tbody>
            {withdrawRequests.map((request, index) => (
              <tr
                key={request.id}
                className={`border-t ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'} hover:bg-gray-200`}
              >
                <td className="py-2 px-4 border-b">{request.id}</td>
                <td className="py-2 px-4 border-b">{request.lawyer.name}</td>
                <td className="py-2 px-4 border-b">${request.amount.toFixed(2)}</td>
                <td className="py-2 px-4 border-b">{request.status}</td>
                <td className="py-2 px-4 border-b">{new Date(request.created_at).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WithdrawRequestsPage;
