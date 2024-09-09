// Stepper.tsx
import React from 'react';
import { View } from 'react-native';
import StepIndicator from 'react-native-step-indicator';

const stepIndicatorStyles = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize: 40,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#00529D',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#00529D',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#00529D',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#00529D',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepLabelColor: '#00529D',
  stepIndicatorLabelCurrentColor: '#00529D',
};

const labels = ['Cart', 'Address', 'Payment', 'Summary'];

const Stepper: React.FC<{ currentStep: number }> = ({ currentStep }) => {
  return (
    <View>
      <StepIndicator
        stepCount={4}
        customStyles={stepIndicatorStyles}
        currentPosition={currentStep}
        labels={labels}
      />
    </View>
  );
};

export default Stepper;
