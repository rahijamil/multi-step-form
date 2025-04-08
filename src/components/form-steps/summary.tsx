"use client"

import { Button } from "@/components/ui/button"
import type { FormData } from "@/lib/validation"

interface SummaryProps {
  formData: FormData
  onPrevious: () => void
  onSubmit: () => void
  isSubmitting: boolean
}

export function Summary({ formData, onPrevious, onSubmit, isSubmitting }: SummaryProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-4">Summary</h2>

      <div className="space-y-4">
        <section className="border rounded-lg p-4">
          <h3 className="font-medium mb-2">Personal Information</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="text-muted-foreground">Full Name:</div>
            <div>{formData.fullName}</div>
            <div className="text-muted-foreground">Email:</div>
            <div>{formData.email}</div>
            <div className="text-muted-foreground">Phone Number:</div>
            <div>{formData.phoneNumber}</div>
          </div>
        </section>

        <section className="border rounded-lg p-4">
          <h3 className="font-medium mb-2">Address Details</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="text-muted-foreground">Street Address:</div>
            <div>{formData.streetAddress}</div>
            <div className="text-muted-foreground">City:</div>
            <div>{formData.city}</div>
            <div className="text-muted-foreground">Zip Code:</div>
            <div>{formData.zipCode}</div>
          </div>
        </section>

        <section className="border rounded-lg p-4">
          <h3 className="font-medium mb-2">Account Setup</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="text-muted-foreground">Username:</div>
            <div>{formData.username}</div>
            <div className="text-muted-foreground">Password:</div>
            <div>••••••</div>
          </div>
        </section>
      </div>

      <div className="flex justify-between pt-4">
        <Button type="button" variant="outline" onClick={onPrevious}>
          Previous
        </Button>
        <Button onClick={onSubmit} disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </div>
    </div>
  )
}
