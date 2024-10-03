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
import { Control, Field } from "react-hook-form";
import { FormFieldType } from "./forms/PatientForm";
import { Button } from "./ui/button";
import Image from 'next/image';

interface CustomProps {
    control: Control<any>;
    fieldType: FormFieldType;
    name: string; // Include the name prop in CustomProps
    label?: string;
    placeholder?: string;
    iconSrc?: string;
    iconAlt?: string;
    disabled?: boolean;
    dateFormat?: string;
    showTimeSelect?: boolean,
    children?: React.ReactNode;
    renderSkeleton?: (field: any) => React.ReactNode,
}

const RenderField = ({ field, props }: {field: any; props: CustomProps}) => {

    const { fieldType, iconSrc, iconAlt, placeholder }

    switch (fieldType) {
        case FormFieldType.INPUT:
            return (
                <div className="flex rounded-md border border-dark-500 bg-dark-400">
                    {iconSrc && (
                        <Image
                            src={iconSrc}
                            height={23}
                            width={23}
                            alt={iconAlt || 'icon'}
                            className="ml-2"
                        />
                    )}
                    <FormControl>
                        <Input
                            placeholder={placeholder}
                            {...field}
                            className="shad-input border-0"
                        />
                    </FormControl>
                </div>
            )
            default:
                break;
    }
}

const CustomFormField = (props: CustomProps) => {
    const { control, fieldType, name, label } = props;

    return (
        <>
            <FormField
                control={control}
                name={name} // Use the dynamic name prop
                render={({ field }) => (
                    <FormItem className="flex-1">
                        {fieldType !== FormFieldType.CHECKBOX && label && (
                            <FormLabel>{label}</FormLabel>
                        )}

                        <RenderField field={field} props={props} />

                        <FormMessage className="shad-error"/>

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