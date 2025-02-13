import PropTypes from 'prop-types';

const ProgressBar = ({ currentStep }) => {
  return (
    <div className="flex justify-center mb-8">
      <div className="relative w-full max-w-xl">
        <div className="absolute top-1/2 transform -translate-y-1/2 w-full h-1 bg-gray-300"></div>
        <div
          className={`absolute top-1/2 transform -translate-y-1/2 h-1 bg-blue-600`}
          style={{ width: `${(currentStep - 1) * 50}%` }}
        ></div>
        <div className="flex justify-between">
          <div
            className={`w-8 h-8 rounded-full ${
              currentStep >= 1 ? 'bg-blue-600' : 'bg-gray-300'
            } flex items-center justify-center`}
          ></div>
          <div
            className={`w-8 h-8 rounded-full ${
              currentStep >= 2 ? 'bg-blue-600' : 'bg-gray-300'
            } flex items-center justify-center`}
          ></div>
          <div
            className={`w-8 h-8 rounded-full ${
              currentStep >= 3 ? 'bg-blue-600' : 'bg-gray-300'
            } flex items-center justify-center`}
          ></div>
        </div>
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  currentStep: PropTypes.number.isRequired,
};

export default ProgressBar;
