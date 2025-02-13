import { useState } from 'react';
import PropTypes from 'prop-types';

const CloudinaryUpload = ({ setProfilePhoto, error }) => {
  const [photoUrl, setPhotoUrl] = useState('');

  const handlePhotoUrlChange = e => {
    setPhotoUrl(e.target.value);
    setProfilePhoto(e.target.value);
  };

  return (
    <div className="upload-container p-4 bg-gray-800 rounded">
      <input
        type="text"
        placeholder="Paste your photo URL"
        value={photoUrl}
        onChange={handlePhotoUrlChange}
        className="w-full p-2 my-2 rounded bg-gray-800 border border-gray-600"
      />
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

CloudinaryUpload.propTypes = {
  setProfilePhoto: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default CloudinaryUpload;
