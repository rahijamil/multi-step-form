import type { FormStep } from "@/hooks/use-form-state";

interface StepIndicatorProps {
  currentStep: FormStep;
}

export function StepIndicator({ currentStep }: StepIndicatorProps) {
  const steps = [
    { id: "personal-info", label: "Personal Info" },
    { id: "address-details", label: "Address" },
    { id: "account-setup", label: "Account" },
    { id: "summary", label: "Summary" },
  ];

  return (
    <div className="mb-8">
      <div className="flex justify-between">
        {steps.map((step, index) => {
          const isActive = step.id === currentStep;
          const isCompleted =
            (currentStep === "address-details" && index === 0) ||
            (currentStep === "account-setup" && index <= 1) ||
            (currentStep === "summary" && index <= 2);

          return (
            <div key={step.id} className="flex flex-col items-center">
              <div
                className={`
                  flex items-center justify-center w-8 h-8 rounded-full mb-2
                  ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : isCompleted
                      ? "bg-green-500 text-white"
                      : "bg-muted text-muted-foreground"
                  }
                `}
              >
                {isCompleted ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                ) : (
                  index + 1
                )}
              </div>
              <span
                className={`text-xs ${
                  isActive ? "font-medium" : "text-muted-foreground"
                }`}
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
      <div className="relative mt-2">
        <div className="absolute top-0 left-0 h-1 bg-muted w-full"></div>
        <div
          className="absolute top-0 left-0 h-1 bg-primary transition-all duration-300"
          style={{
            width:
              currentStep === "personal-info"
                ? "25%"
                : currentStep === "address-details"
                ? "50%"
                : currentStep === "account-setup"
                ? "75%"
                : "100%",
          }}
        ></div>
      </div>
    </div>
  );
}
