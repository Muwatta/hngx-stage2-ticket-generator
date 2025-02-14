import { useState } from 'react';
import PropTypes from 'prop-types';

const CloudinaryUpload = ({ setProfilePhoto, error }) => {
  const [photoUrl, setPhotoUrl] = useState('');
  const [photoFile, setPhotoFile] = useState(null);

  const handlePhotoUrlChange = e => {
    setPhotoUrl(e.target.value);
    setPhotoFile(null);
    setProfilePhoto(e.target.value);
  };

  const handleFileChange = e => {
    const file = e.target.files[0];
    if (file) {
      setPhotoFile(file);
      setPhotoUrl('');
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="upload-container p-4 bg-[#11263D] rounded">
      <input
        type="text"
        placeholder="Paste your photo URL"
        value={photoUrl}
        onChange={handlePhotoUrlChange}
        disabled={photoFile !== null}
        className="w-full p-2 my-2 rounded bg-[#0C192C] border border-gray-600 text-white"
      />

      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        disabled={photoUrl !== ''}
        className="w-full p-2 my-2 rounded bg-[#0C192C] border border-gray-600 text-white"
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
