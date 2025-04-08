"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { type AddressDetailsData, addressDetailsSchema } from "@/lib/validation"
import type { FormData } from "@/lib/validation"

interface Step2Props {
  formData: FormData
  onNext: (data: AddressDetailsData) => void
  onPrevious: () => void
}

export function Step2({ formData, onNext, onPrevious }: Step2Props) {
  const form = useForm<AddressDetailsData>({
    resolver: zodResolver(addressDetailsSchema),
    defaultValues: {
      streetAddress: formData.streetAddress,
      city: formData.city,
      zipCode: formData.zipCode,
    },
  })

  const onSubmit = (data: AddressDetailsData) => {
    onNext(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <h2 className="text-xl font-semibold mb-4">Address Details</h2>

        <FormField
          control={form.control}
          name="streetAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Street Address</FormLabel>
              <FormControl>
                <Input placeholder="123 Main St" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel>City</FormLabel>
              <FormControl>
                <Input placeholder="New York" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="zipCode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Zip Code</FormLabel>
              <FormControl>
                <Input placeholder="10001" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-between pt-4">
          <Button type="button" variant="outline" onClick={onPrevious}>
            Previous
          </Button>
          <Button type="submit" disabled={form.formState.isSubmitting}>
            Next
          </Button>
        </div>
      </form>
    </Form>
  )
}
