import React from 'react';

export type TrackingStep = {
  id: string;
  label: string;
  status: 'completed' | 'ready' | 'shipped' | 'inactive' | 'order_approved' | 'order_ready';
  connectedTo?: {
    next?: string;
    prev?: string;
  };
};

interface TrackingIndicatorProps {
  steps: TrackingStep[];
  currentStepId: string;
  className?: string;
}

export const TrackingIndicator: React.FC<TrackingIndicatorProps> = ({
  steps,
  currentStepId,
  className = ''
}) => {
  // Find current step index
  const currentStepIndex = steps.findIndex(step => step.id === currentStepId);

  // Calculate progress width based on current step
  const progressWidth = `${((currentStepIndex + 1) / steps.length) * 100}%`;

  // Get status color
  const getStatusColor = (status: TrackingStep['status']) => {
    switch (status) {
      case 'completed':
        return 'bg-[#7EB23D] text-white';
      case 'ready':
        return 'bg-[#00BAFF] text-white';
      case 'shipped':
        return 'bg-[#F4F5F5] text-[#778080]';
      case 'inactive':
        return 'bg-[#F4F5F5] text-[#778080]';
      default:
        return 'bg-[#F4F5F5] text-[#778080]';
    }
  };

  // Get connection line color
  const getConnectionColor = (fromStep: TrackingStep, toStepId: string) => {
    const toStep = steps.find(step => step.id === toStepId);
    if (!toStep) return 'bg-[#F4F5F5]';

    if (fromStep.status === 'completed' && toStep.status === 'completed') {
      return 'bg-[#7EB23D]';
    }
    if (fromStep.status === 'completed' && toStep.status === 'ready') {
      return 'bg-[#00BAFF]';
    }
    return 'bg-[#F4F5F5]';
  };

  return (
    <div className={`flex flex-col gap-3 w-full ${className}`}>
      {/* Progress Bars */}
      <div className="relative w-full h-2">
        {/* Background Bar */}
        <div className="absolute top-0 left-0 w-full h-2 bg-[#F4F5F5] rounded-full" />
        
        {/* Active Progress Bar */}
        <div 
          className="absolute top-0 left-0 h-2 bg-[#7EB23D] rounded-full transition-all duration-300 ease-in-out shadow-md"
          style={{ width: progressWidth }}
        />
      </div>

      {/* Step Buttons */}
      <div className="flex justify-between w-full gap-[26px]">
        {steps.map((step, index) => {
          const hasNextConnection = step.connectedTo?.next;
          
          return (
            <React.Fragment key={step.id}>
              <button
                className={`h-[52px] px-[30px] rounded-full font-semibold text-[20px] leading-[29px] transition-all duration-300 ${
                  getStatusColor(step.status)
                } ${step.status === 'completed' ? 'shadow-md' : ''}`}
                style={{ fontFamily: 'Ploni DL 1.1 AAA' }}
                disabled={step.status === 'inactive'}
              >
                {step.label}
              </button>

              {/* Connection Line */}
              {hasNextConnection && index < steps.length - 1 && (
                <div className={`flex-1 h-[2px] mt-[26px] ${
                  getConnectionColor(step, step.connectedTo.next)
                }`} />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
