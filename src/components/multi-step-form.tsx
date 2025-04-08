"use client"

import { useFormState } from "@/hooks/use-form-state"
import { StepIndicator } from "@/components/ui/step-indicator"
import { Step1 } from "@/components/form-steps/step-1"
import { Step2 } from "@/components/form-steps/step-2"
import { Step3 } from "@/components/form-steps/step-3"
import { Summary } from "@/components/form-steps/summary"
import type { PersonalInfoData, AddressDetailsData, AccountSetupData } from "@/lib/validation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, CheckCircle } from "lucide-react"

export function MultiStepForm() {
  const {
    currentStep,
    formData,
    isSubmitting,
    isSubmitted,
    isError,
    error,
    updateFormData,
    nextStep,
    prevStep,
    submitForm,
    resetForm,
  } = useFormState()

  const handlePersonalInfoSubmit = (data: PersonalInfoData) => {
    updateFormData(data)
    nextStep()
  }

  const handleAddressDetailsSubmit = (data: AddressDetailsData) => {
    updateFormData(data)
    nextStep()
  }

  const handleAccountSetupSubmit = (data: AccountSetupData) => {
    updateFormData(data)
    nextStep()
  }

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-600 mb-4">
              <CheckCircle className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-semibold">Submission Successful!</h2>
            <p className="text-muted-foreground">
              Thank you for completing the form. Your information has been submitted successfully.
            </p>
            <Button onClick={resetForm} className="mt-4">
              Start Over
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardContent className="pt-6">
        <StepIndicator currentStep={currentStep} />

        {isError && (
          <Alert variant="destructive" className="mb-6">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              {error?.message || "There was an error submitting the form. Please try again."}
            </AlertDescription>
          </Alert>
        )}

        {currentStep === "personal-info" && <Step1 formData={formData} onNext={handlePersonalInfoSubmit} />}

        {currentStep === "address-details" && (
          <Step2 formData={formData} onNext={handleAddressDetailsSubmit} onPrevious={prevStep} />
        )}

        {currentStep === "account-setup" && (
          <Step3 formData={formData} onNext={handleAccountSetupSubmit} onPrevious={prevStep} />
        )}

        {currentStep === "summary" && (
          <Summary formData={formData} onPrevious={prevStep} onSubmit={submitForm} isSubmitting={isSubmitting} />
        )}
      </CardContent>
    </Card>
  )
}
