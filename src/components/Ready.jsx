import PropTypes from 'prop-types';
import { usePDF } from 'react-to-pdf';
import QRCode from 'react-qr-code';
import { useState } from 'react';

const Ready = ({ ticketData, setStep, resetForm }) => {
  const { toPDF, targetRef } = usePDF({ filename: 'conference-ticket.pdf' });

  // Generate a 6-digit ticket number
  const [ticketNumber] = useState(
    () => `#${Math.floor(Math.random() * 900000 + 100000)}`
  );

  const handleNewTicket = () => {
    resetForm();
    setStep(1);
  };

  const handleBack = () => setStep(2); // Go back to Attendee Details step

  const buttonStyles = 'px-6 py-2 text-white rounded-md transition-colors';

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div ref={targetRef} className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">
          Tech Innovators Summit 2024
        </h2>

        <div className="flex flex-col items-center gap-6 border-2 border-dashed border-blue-200 p-6 rounded-lg">
          {ticketData?.avatar ? (
            <img
              src={ticketData.avatar}
              alt="Attendee Avatar"
              className="w-32 h-32 rounded-full object-cover border-4 border-blue-500"
            />
          ) : (
            <div className="w-32 h-32 rounded-full border-4 border-blue-500 flex items-center justify-center text-gray-500">
              No Avatar
            </div>
          )}

          <div className="text-center">
            <h3 className="text-2xl font-semibold text-gray-800">
              {ticketData?.fullName || 'No Name'}
            </h3>
            <p className="text-gray-600 mb-2">
              {ticketData?.email || 'No Email'}
            </p>
            {ticketData?.ticketType && (
              <div className="bg-blue-100 px-3 py-1 rounded-full text-sm font-medium text-blue-800">
                {ticketData.ticketType.toUpperCase()} TICKET
              </div>
            )}
          </div>

          <div className="text-center mt-4">
            <div className="text-sm text-gray-500">Ticket Number</div>
            <div className="text-xl font-bold text-blue-600">
              {ticketNumber}
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <QRCode value={ticketNumber || ''} size={128} />
        </div>
      </div>

      <div className="mt-8 flex gap-4 justify-center">
        <button
          onClick={toPDF}
          className={`${buttonStyles} bg-green-600 hover:bg-green-700`}
        >
          Download PDF
        </button>
        <button
          onClick={handleNewTicket}
          className={`${buttonStyles} bg-blue-600 hover:bg-blue-700`}
        >
          Book Another Ticket
        </button>
        <button
          onClick={handleBack}
          className={`${buttonStyles} bg-gray-600 hover:bg-gray-700`}
        >
          Back
        </button>
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
  }).isRequired,
  setStep: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
};

export default Ready;
