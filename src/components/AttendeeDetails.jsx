import { useState } from 'react';
import PropTypes from 'prop-types';
import CloudinaryUpload from './CloudinaryUpload';

const AttendeeDetails = ({ onNext, onBack }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [specialRequest, setSpecialRequest] = useState('');
  const [profilePhoto, setProfilePhoto] = useState('');
  const [error, setError] = useState('');

  const handleNext = () => {
    if (!name) {
      setError('Name is required.');
      return;
    }
    if (!email) {
      setError('Email is required.');
      return;
    }
    if (!profilePhoto) {
      setError('Profile photo URL is required.');
      return;
    }
    setError('');

    // Construct the new data to merge into ticketData
    const attendeeData = {
      fullName: name,
      email,
      specialRequest,
      avatar: profilePhoto,
    };

    onNext(attendeeData);
  };

  return (
    <div className="attendee-details-container p-6 rounded-xl shadow-lg bg-gray-900 text-white">
      <h2 className="text-2xl font-semibold mb-4">Attendee Details</h2>
      <CloudinaryUpload
        setProfilePhoto={setProfilePhoto}
        error={error === 'Profile photo URL is required.' ? error : ''}
      />

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={e => setName(e.target.value)}
        className="w-full p-2 my-2 rounded bg-gray-800 border border-gray-600"
      />

      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="w-full p-2 my-2 rounded bg-gray-800 border border-gray-600"
      />

      {profilePhoto && (
        <div className="mt-4">
          <img
            src={profilePhoto}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-blue-500"
          />
        </div>
      )}

      <textarea
        placeholder="Special request?"
        value={specialRequest}
        onChange={e => setSpecialRequest(e.target.value)}
        className="w-full p-2 my-2 rounded bg-gray-800 border border-gray-600"
      />

      {error && <p className="text-red-500 mt-2">{error}</p>}

      <div className="flex justify-between mt-4">
        <button onClick={onBack} className="px-4 py-2 bg-gray-700 rounded">
          Back
        </button>
        <button onClick={handleNext} className="px-4 py-2 bg-blue-600 rounded">
          Next
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
