/*
  This component is a custom input component that uses React Hook Form to manage form state and validation.
  It takes a label, field name, control, and error prop and returns an input element with the appropriate attributes and styles.
*/

import clsx from "clsx";
import { Control, FieldValues, Path, useController } from "react-hook-form";

type RHFInputProps<T extends FieldValues> =
  React.InputHTMLAttributes<HTMLInputElement> & {
    fieldName: Path<T>;
    control: Control<T, unknown>;
    label?: string | React.ReactNode;
    error?: string;
  };
const Input = <T extends FieldValues>({
  label,
  fieldName,
  control,
  error,
  ...rest
}: RHFInputProps<T>) => {
  const { field } = useController({ control, name: fieldName });

  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label
          className="text-sm font-medium text-gray-700"
          htmlFor={fieldName}
        >
          {label}
        </label>
      )}

      <input
        {...field}
        {...rest}
        id={fieldName}
        className={clsx(
          "px-3 py-2 border rounded-md outline-none transition-colors ",
          error
            ? "border-red-500 focus:ring-red-500"
            : "border-gray-300 focus:ring-blue-500"
        )}
      />

      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
};

export default Input;
