import { UseFormRegisterReturn } from "react-hook-form";
interface iDataInput {
  type: string;
  id: string;
  placeholder: string;
  register: UseFormRegisterReturn;
}

export const Input = ({ type, id, placeholder, register }: iDataInput) => {
  return (
    <>
      <input type={type} id={id} {...register} />
      <span>{placeholder}</span>
    </>
  );
};
