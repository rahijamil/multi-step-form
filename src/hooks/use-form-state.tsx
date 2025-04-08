"use client";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { submitFormData } from "@/lib/api";
import type { FormData } from "@/lib/validation";

export type FormStep =
  | "personal-info"
  | "address-details"
  | "account-setup"
  | "summary";

const initialFormData: FormData = {
  fullName: "",
  email: "",
  phoneNumber: "",
  streetAddress: "",
  city: "",
  zipCode: "",
  username: "",
  password: "",
  confirmPassword: "",
};

export function useFormState() {
  const [currentStep, setCurrentStep] = useState<FormStep>("personal-info");
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const mutation = useMutation({
    mutationFn: submitFormData,
    onSuccess: (data) => {
      console.log("Form submitted successfully:", formData);
      console.log("API Response:", data);
    },
    onError: (error) => {
      console.error("Error submitting form:", error);
    },
  });

  const updateFormData = (data: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const nextStep = () => {
    if (currentStep === "personal-info") setCurrentStep("address-details");
    else if (currentStep === "address-details") setCurrentStep("account-setup");
    else if (currentStep === "account-setup") setCurrentStep("summary");
  };

  const prevStep = () => {
    if (currentStep === "address-details") setCurrentStep("personal-info");
    else if (currentStep === "account-setup") setCurrentStep("address-details");
    else if (currentStep === "summary") setCurrentStep("account-setup");
  };

  const submitForm = () => {
    mutation.mutate(formData);
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setCurrentStep("personal-info");
    mutation.reset();
  };

  return {
    currentStep,
    formData,
    isSubmitting: mutation.isPending,
    isSubmitted: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error,
    updateFormData,
    nextStep,
    prevStep,
    submitForm,
    resetForm,
  };
}
