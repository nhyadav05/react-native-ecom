import React, { useMemo } from 'react';
import { View } from 'react-native';
import StepIndicator from 'react-native-step-indicator';

interface StepperProps {
  currentStep: number;
  stepLabels?: string[];
  stepCount?: number;
}

const Stepper: React.FC<StepperProps> = ({ currentStep, stepLabels, stepCount }) => {
  // Memoize styles for better performance
  const stepIndicatorStyles = useMemo(() => ({
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
  }), []);

  // Default values if not provided
  const labels = stepLabels || ['Cart', 'Address', 'Payment', 'Summary'];
  const count = stepCount || labels.length;

  return (
    <View>
      <StepIndicator
        stepCount={count}
        customStyles={stepIndicatorStyles}
        currentPosition={currentStep}
        labels={labels}
      />
    </View>
  );
};

export default Stepper;
