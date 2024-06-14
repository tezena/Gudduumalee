"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

function DisputeForm() {
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");

  const router=useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // addTrial({ date, note });
    setDate("");
    setNote("");
  };

  const caseData = {
    id: "1",
    caseName: "Smith vs. Johnson",
    clientName: "John Smith",
    description:
      "This is a civil case regarding a property dispute between John Smith and Sarah Johnson.",
    trials: [
      {
        date: "2024-01-15",
        note: "Initial hearing. Both parties presented their opening statements.",
      },
      {
        date: "2024-02-20",
        note: "Witness testimonies from both sides.",
      },
      {
        date: "2024-02-20",
        note: "Witness testimonies from both sides.",
      },
      {
        date: "2024-02-20",
        note: "Witness testimonies from both sides.",
      },
      {
        date: "2024-02-20",
        note: "Witness testimonies from both sides.",
      },
    ],
  };
  return (
    <div className="container  mx-auto px-4 pt-10 relative">
      <span className="fixed top-28  left-4 bg-white  cursor-pointer" onClick={()=>router.back()}> 
        <Icon
          icon="grommet-icons:link-previous"
          style={{ color: "gray" }}
          width={30}
          height={30}
        />
      </span>
      <div className="mb-4 p-4 border rounded shadow-md">
        <h1 className="text-2xl font-bold mb-2">{caseData.caseName}</h1>
        <p className="text-lg mb-1">
          <strong>Client Name:</strong> {caseData.clientName}
        </p>
        <p className="text-lg mb-1">
          <strong>Description:</strong> {caseData.description}
        </p>
        <p className="text-lg mb-1">
          <strong>Case ID:</strong> {caseData.id}
        </p>
        {/* Add more case details as needed */}
      </div>

      <div className="mb-4 px-4 border h-[200px] rounded shadow-md overflow-auto">
        <h2 className="text-xl font-bold mb-2 sticky top-0 bg-white ">Previous Trials</h2>
        {caseData.trials.length === 0 ? (
          <p>No trials added yet.</p>
        ) : (
          <ul>
            {caseData.trials.map((trial) => (
              <li key={trial.date} className="mb-2">
                <p>
                  <strong>Date:</strong> {trial.date}
                </p>
                <p>
                  <strong>Note:</strong> {trial.note}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="p-4 border rounded shadow-md">
        <h2 className="text-xl font-bold mb-2">Add Next Trial</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-700"
            >
              Date
            </label>
            <input
              type="datetime-local"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#7B3B99] focus:ring-[#7B3B99] sm:text-sm"
              required
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="note"
              className="block text-sm font-medium text-gray-700"
            >
              Note
            </label>
            <textarea
              id="note"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#7B3B99] focus:ring-[#7B3B99 ]sm:text-sm"
              required
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#7B3B99] hover:bg-[#59286f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add Trial
          </button>
        </form>
      </div>
    </div>
  );
}

export default DisputeForm;
