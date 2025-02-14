import PropTypes from 'prop-types';

const ProgressBar = ({ currentStep }) => {
  // Each step is 50% because you have 3 steps total:
  // Step 1 -> 0%
  // Step 2 -> 50%
  // Step 3 -> 100%
  const fillWidth = `${(currentStep - 1) * 50}%`;

  return (
    <div className="flex justify-center mb-8">
      <div className="relative w-full max-w-xl">
        {/* Background Track */}
        <div className="absolute top-1/2 transform -translate-y-1/2 w-full h-1 bg-[#0A4023]"></div>
        {/* Progress Fill */}
        <div
          className="absolute top-1/2 transform -translate-y-1/2 h-1 bg-[#166534]"
          style={{ width: fillWidth }}
        ></div>

        <div className="flex justify-between">
          {/* Step 1 Circle */}
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              currentStep >= 1 ? 'bg-[#10B981]' : 'bg-[#166534]'
            }`}
          ></div>

          {/* Step 2 Circle */}
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              currentStep >= 2 ? 'bg-[#10B981]' : 'bg-[#166534]'
            }`}
          ></div>

          {/* Step 3 Circle */}
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              currentStep >= 3 ? 'bg-[#10B981]' : 'bg-[#166534]'
            }`}
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
