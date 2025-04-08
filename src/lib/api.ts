import type { FormData } from "./validation";

// Simulate API endpoint for form submission
export async function submitFormData(
  data: FormData
): Promise<{ success: boolean; message: string }> {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return {
    success: true,
    message: "Form submitted successfully!",
  };
}
