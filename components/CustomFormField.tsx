'use client'
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control } from "react-hook-form";
import { FormFieldType } from "./forms/PatientForm";
import { Button } from "./ui/button";

interface CustomProps {
    control: Control<any>;
    fieldType: FormFieldType;
    name: string; // Include the name prop in CustomProps
}

const CustomFormField = ({ control, fieldType, name }: CustomProps) => {
    return (
        <>
            <FormField
                control={control}
                name={name} // Use the dynamic name prop
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                            <Input placeholder="shadcn" {...field} />
                        </FormControl>
                        <FormDescription>
                            This is your public display name.
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <Button type="submit">Submit</Button>
        </>
    );
};

export default CustomFormField;






















// 'use client'
// import {
//     FormControl,
//     FormDescription,
//     FormField,
//     FormItem,
//     FormLabel,
//     FormMessage,
//   } from "@/components/ui/form"
//   import { Input } from "@/components/ui/input"
//   import { Control } from "react-hook-form"
//   import { FormFieldType } from "./forms/PatientForm"
// import { Button } from "./ui/button"

//   interface CustomProps {
//     control: Control<any>,
//     fieldType: FormFieldType
//   }

// const CustomFormField = ({ control, fieldType, name }: CustomProps) => {
//   return (
//     <><FormField
//           control={control}
//           name="username"
//           render={({ field }) => (
//               <FormItem>
//                   <FormLabel>Username</FormLabel>
//                   <FormControl>
//                       <Input placeholder="shadcn" {...field} />
//                   </FormControl>
//                   <FormDescription>
//                       This is your public display name.
//                   </FormDescription>
//                   <FormMessage />
//               </FormItem>
//           )} 
//           />
//           <Button type="submit">Submit</Button>
//     </>
// </form>
// </Form>
//   )
// }

// export default CustomFormField