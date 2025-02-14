import PropTypes from 'prop-types';
import { usePDF } from 'react-to-pdf';
import QRCode from 'react-qr-code';
import { useState } from 'react';
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const Ready = ({ ticketData, setStep }) => {
  const { toPDF, targetRef } = usePDF({ filename: 'conference-ticket.pdf' });
  const [ticketNumber] = useState(
    () => `#${Math.floor(Math.random() * 900000 + 100000)}`
  );

  return (
    <div className="p-4 flex justify-center">
      <div
        ref={targetRef}
        className="bg-[#0A2B2B] text-white rounded-xl shadow-lg p-6 max-w-sm border border-[#19c3c3]"
      >
        {/* Header */}
        <h2 className="text-3xl font-bold text-center mb-1">
          Techember Fest ’25
        </h2>
        <p className="text-sm text-gray-300 text-center flex items-center justify-center gap-1">
          <FaMapMarkerAlt /> 04 Rumens road, Ikoyi, Lagos
        </p>
        <p className="text-sm text-gray-300 text-center flex items-center justify-center gap-1">
          <FaCalendarAlt /> March 15, 2025 | 7:00 PM
        </p>

        {/* Avatar */}
        <div className="flex justify-center my-4">
          {ticketData?.avatar ? (
            <img
              src={ticketData.avatar}
              alt="Attendee Avatar"
              className="w-32 h-32 rounded-lg object-cover border-4 border-[#19c3c3]"
            />
          ) : (
            <div className="w-32 h-32 rounded-lg border-4 border-[#19c3c3] flex items-center justify-center text-gray-500">
              No Avatar
            </div>
          )}
        </div>

        {/* Attendee Info Table */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <table className="w-full text-sm">
            <tbody>
              <tr>
                <td className="text-gray-400">Name:</td>
                <td className="text-white font-medium">
                  {ticketData?.fullName || 'No Name'}
                </td>
              </tr>
              <tr>
                <td className="text-gray-400">Email:</td>
                <td className="text-white font-medium">
                  {ticketData?.email || 'No Email'}
                </td>
              </tr>
              <tr>
                <td className="text-gray-400">Ticket Type:</td>
                <td className="text-white font-medium">
                  {ticketData?.ticketType || '-'}
                </td>
              </tr>
              <tr>
                <td className="text-gray-400">Ticket No:</td>
                <td className="text-white font-medium">{ticketNumber}</td>
              </tr>
              <tr>
                <td className="text-gray-400">Special Request:</td>
                <td className="text-white font-medium">
                  {ticketData?.specialRequest || 'None'}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* QR Code */}
        <div className="flex flex-col items-center my-4">
          <QRCode value={ticketNumber} size={100} />
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
          <button
            onClick={toPDF}
            className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-600"
          >
            Download PDF
          </button>
          <button
            onClick={() => setStep(1)}
            className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-600"
          >
            Book Another Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

Ready.propTypes = {
  ticketData: PropTypes.shape({
    avatar: PropTypes.string,
    fullName: PropTypes.string,
    email: PropTypes.string,
    ticketType: PropTypes.string,
    specialRequest: PropTypes.string,
  }).isRequired,
  setStep: PropTypes.func.isRequired,
};

export default Ready;
