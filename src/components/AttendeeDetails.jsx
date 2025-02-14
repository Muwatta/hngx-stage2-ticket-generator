import { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import CloudinaryUpload from './CloudinaryUpload';

const AttendeeDetails = ({ onNext, onBack }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [specialRequest, setSpecialRequest] = useState('');
  const [profilePhoto, setProfilePhoto] = useState('');
  const [error, setError] = useState('');

  const validateEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleNext = useCallback(() => {
    if (!name.trim() || !email.trim() || !profilePhoto) {
      setError('All fields are required.');
      return;
    }
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');

    // Pass the collected data to the parent via onNext
    onNext({
      fullName: name.trim(),
      email: email.trim(),
      specialRequest: specialRequest.trim(),
      avatar: profilePhoto,
    });
  }, [name, email, specialRequest, profilePhoto, onNext]);

  return (
    <div className="max-w-lg mx-auto p-6 bg-[#02191D] text-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Attendee Details</h2>

      {/* Image Upload Section */}
      <div className="bg-[#02191D] p-4 rounded-lg mb-4">
        <h3 className="text-sm mb-2">Upload Profile Photo</h3>
        <CloudinaryUpload setProfilePhoto={setProfilePhoto} error={error} />
      </div>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={e => setName(e.target.value)}
        className="w-full p-2 mb-3 rounded bg-[#02191D] border border-gray-500"
        aria-label="Enter your full name"
      />

      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="w-full p-2 mb-3 rounded bg-[#02191D] border border-gray-500"
        aria-label="Enter your email address"
      />

      <textarea
        placeholder="Special request?"
        value={specialRequest}
        onChange={e => setSpecialRequest(e.target.value)}
        className="w-full p-2 mb-3 rounded bg-[#02191D] border border-gray-500"
        aria-label="Special request?"
      />

      {error && <p className="text-red-400 mb-3">{error}</p>}

      <div className="flex justify-between mt-4">
        <button
          onClick={onBack}
          className="px-4 py-2 bg-gray-700 rounded"
          aria-label="Go to previous step"
        >
          Back
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-teal-700 hover:bg-teal-600 rounded"
          aria-label="Proceed to next step"
        >
          Get My Free Ticket
        </button>
      </div>
    </div>
  );
};

AttendeeDetails.propTypes = {
  onNext: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default AttendeeDetails;
