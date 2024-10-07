// "use client"

// import { zodResolver } from "@hookform/resolvers/zod"
// import { useForm } from "react-hook-form"
// import { z } from "zod"
// import { Button } from "@/components/ui/button"
// import { Form} from "@/components/ui/form"
// import { Input } from "@/components/ui/input"
// import CustomFormField from "../CustomFormField"
// import SubmitButton from "../SubmitButton"
// import { useState } from "react"
// import { UserFormValidation } from "@/Lib/validation"
// import { useRouter } from "next/navigation"
// import { createUser } from "@/Lib/actions/patient.actions"

// export enum FormFieldType {
//   INPUT = 'input',
//   TEXTAREA = 'textarea',
//   PHONE_INPUT = 'phoneInput',
//   CHECKBOX = 'chexkbox',
//   DATE_PICKER = 'datepicker',
//   SELECT = 'select',
//   SKELETON = 'skeleton',
// }



// const PatientForm = () => {
//   const router = useRouter();
//   const [isLoading, setIsLoading] = useState(false);

//   const form = useForm<z.infer<typeof UserFormValidation>>({
//     resolver: zodResolver(UserFormValidation),
//     defaultValues: {
//       name: "",
//       email: "",
//       phone: "",
//     },
//   })

//   // 2. Define a submit handler.
//   async function onSubmit({ name, email, phone}: z.infer<typeof UserFormValidation>) {
//     setIsLoading(true);

//     try {
//       const userData = { name, email, phone };

//       const user = await createUser(userData);

//       if(user) router.push(`/patients/${user.$id}/register`)
//     } catch (error) {
//       console.error(error)
//     }
//   }
//   return (
//     <div>
//         <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
//         <section className="mb-12 space-y-4">
//             <h1 className="header">Hi, There👋</h1>
//             <p className="text-dark-700">Schedule Your First Appointment.</p>
//         </section>

//         <CustomFormField
//           fieldType={FormFieldType.INPUT}
//           control={form.control}
//           name="name"
//           label="Full Name"
//           placeholder="Enter your full name"
//           iconSrc="/assets/icons/user.svg"
//           iconAlt="user"
//         />

//         <CustomFormField
//           fieldType={FormFieldType.INPUT}
//           control={form.control}
//           name="email"
//           label="Email"
//           placeholder="Enter your email Address"
//           iconSrc="/assets/icons/email.svg"
//           iconAlt="email"
//         />
//           <CustomFormField
//           fieldType={FormFieldType.PHONE_INPUT}
//           control={form.control}
//           name="phone"
//           label="phone Number"
//           placeholder="Please Enter Your Phone Number"
//           iconSrc="/assets/icons/email.svg"
//           iconAlt="email"
//         />

//         <SubmitButton isLoading={isLoading}>Get Started</SubmitButton>

//       </form>
//     </Form>
//     </div>
//   )
  
// }

// export default PatientForm
