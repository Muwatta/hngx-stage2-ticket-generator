import { useState } from 'react';
import PropTypes from 'prop-types';

const TicketSelection = ({ onNext }) => {
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [error, setError] = useState('');

  const tickets = [
    {
      type: 'Standard',
      price: 50,
      description: 'Standard Ticket',
      available: 'Available',
    },
    {
      type: 'VIP',
      price: 100,
      description: 'VIP Ticket',
      available: 'Available',
    },
    {
      type: 'Free',
      price: 0,
      description: 'Free Ticket',
      available: 'Limited',
    },
  ];

  const handleNext = () => {
    if (!selectedTicket) {
      setError('Please select a ticket type.');
      return;
    }
    setError('');
    onNext({ ticketType: selectedTicket });
  };

  return (
    <div className="flex flex-col items-center bg-[#0C192C] text-white p-6 rounded-2xl shadow-lg w-full max-w-xl">
      <h2 className="text-xl font-semibold mb-4">Ticket Selection</h2>
      <div className="bg-[#11263D] p-4 rounded-xl w-full text-center">
        <h3 className="text-lg italic font-bold text-gray-300">
          Algorise Tech Explorers| Cohort &apos;25
        </h3>
        <p className="text-gray-400 text-sm">
          Join us for an unforgettable experience
        </p>
        <p className="text-gray-500 text-xs mt-1">
          📍 Undisclosed | March 25, 2026 | 7:00 PM
        </p>
      </div>

      <div className="flex gap-3 mt-4">
        {tickets.map((ticket, index) => (
          <button
            key={index}
            className={`p-3 rounded-lg border transition-all w-32 text-center ${
              selectedTicket === ticket.type
                ? 'bg-[#1E3A5F] border-[#1E90FF]'
                : 'bg-[#11263D] border-gray-500 hover:border-white'
            }`}
            onClick={() => setSelectedTicket(ticket.type)}
          >
            <p className="text-lg font-bold">
              {ticket.price ? `$${ticket.price}` : 'Free'}
            </p>
            <p className="text-xs text-gray-400">{ticket.description}</p>
            <p className="text-xs text-gray-500">{ticket.available}</p>
          </button>
        ))}
      </div>

      {error && <p className="text-red-500 mt-2">{error}</p>}

      <div className="mt-4 w-full">
        <label className="text-sm text-gray-400">Number of Tickets</label>
        <select className="bg-[#11263D] text-white p-2 rounded-lg w-full mt-1 border border-gray-600">
          {[...Array(5).keys()].map(num => (
            <option key={num + 1} value={num + 1}>
              {num + 1}
            </option>
          ))}
        </select>
      </div>

      <div className="flex justify-between w-full mt-4">
        <button
          onClick={() => onNext({})} // Use onNext to handle the Cancel action
          className="px-4 py-2 bg-gray-700 rounded"
        >
          Cancel
        </button>
        <button onClick={handleNext} className="px-4 py-2 bg-blue-600 rounded">
          Next
        </button>
      </div>
    </div>
  );
};

TicketSelection.propTypes = {
  onNext: PropTypes.func.isRequired,
};

export default TicketSelection;
