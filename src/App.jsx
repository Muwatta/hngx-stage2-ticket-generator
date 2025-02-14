import { useState, useEffect } from 'react';
import AttendeeDetails from './components/AttendeeDetails';
import Ready from './components/Ready';
import TicketSelection from './components/TicketSelection';
import ProgressBar from './components/ProgressBar';
import SkeletonLoader from './components/SkeletonLoader';
import useDB from './hooks/useDB';

export default function App() {
  const [step, setStep] = useState(1);
  const [ticketData, setTicketData] = useState({
    fullName: '',
    email: '',
    avatar: '',
    ticketType: '',
    id: null,
  });
  const [loading, setLoading] = useState(true);
  const { saveFormData, getAllFormData } = useDB();

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await getAllFormData();
        if (data && data.length > 0) {
          setTicketData(data[0]); // Assuming we want the first record
        }
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };
    loadData();
  }, [getAllFormData]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // shorter time just for demo; adjust as needed
    return () => clearTimeout(timer);
  }, []);

  const handleNext = (data = {}) => {
    const updatedData = {
      ...ticketData,
      ...data,
      id: ticketData.id || Date.now(),
    };
    setTicketData(updatedData);
    saveFormData(updatedData).catch(error => {
      console.error('Failed to save data:', error);
    });
    setStep(prev => prev + 1);
  };

  const handleBack = () => {
    setStep(prev => prev - 1);
  };

  const resetForm = () => {
    setTicketData({
      fullName: '',
      email: '',
      avatar: '',
      ticketType: '',
      id: null,
    });
    setStep(1);
  };

  if (loading) {
    return <SkeletonLoader />;
  }

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 py-8"
      style={{ backgroundColor: '#0A2B2B' }} // Dark teal background
    >
      {/* Main Content Card */}
      <div className="max-w-2xl w-full bg-[#0F3D3D] text-white rounded-lg shadow-lg p-6">
        {/* Progress Bar Moved Inside the Card */}
        <div className="mb-4">
          <ProgressBar currentStep={step} />
        </div>

        {/* Step Components */}
        {step === 1 && <TicketSelection onNext={handleNext} />}
        {step === 2 && (
          <AttendeeDetails onNext={handleNext} onBack={handleBack} />
        )}
        {step === 3 && (
          <Ready
            ticketData={ticketData}
            setStep={setStep}
            resetForm={resetForm}
          />
        )}
      </div>
    </div>
  );
}
