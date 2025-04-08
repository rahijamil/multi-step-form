# Multi-Step Form with Validation

A multi-step form built with Next.js (App Router), React Hook Form, Zod, TailwindCSS, and TanStack Query.

## Features

- Three-step form with validation
- Form state management
- Dark mode support
- Responsive design
- Summary page before submission
- API submission simulation with TanStack Query

## Tech Stack

- Next.js (App Router)
- React Hook Form for form handling
- Zod for validation
- TailwindCSS for styling
- shadcn/ui components
- TanStack Query for API calls

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/rahijamil/multi-step-form.git
cd multi-step-form
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Form Steps

1. **Personal Information**
   - Full Name (required)
   - Email (required, valid format)
   - Phone Number (required, must be at least 10 digits)

2. **Address Details**
   - Street Address (required)
   - City (required)
   - Zip Code (required, only numbers, min 5 digits)

3. **Account Setup**
   - Username (required, min 4 characters)
   - Password (required, min 6 characters)
   - Confirm Password (must match password)

## Implementation Details

- Uses React Hook Form with Zod validation
- Form state is managed with a custom hook
- Responsive design with TailwindCSS
- Dark mode support using next-themes
- Form data is logged to the console on submission
