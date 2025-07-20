/*
  Page for user login
  Using react hook form to deal with form validation
*/

import { useForm } from "react-hook-form";
import Logo from "@/assets/logo.svg";
import Input from "@/components/RHFInput";
import { UserPayloadProps } from "@/features/auth/types/user";
import PasswordLabel from "@/features/auth/components/PasswordLabel";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginValidationSchema } from "@/features/auth/utils/validationSchema";
import { useContext } from "react";
import { AuthContext } from "@/context/auth/auth";
import { useNavigate } from "react-router-dom";
import api from "@/services/api";

const Login = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<UserPayloadProps>({
    defaultValues: {} as UserPayloadProps,
    mode: "onChange",
    resolver: yupResolver(loginValidationSchema)
  });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data: UserPayloadProps) => {
    login(data).then((response) => {
      navigate("/");
      api.defaults.headers.Authorization = `Bearer ${response.token}`;
    });
  };
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col items-center gap-5 md:w-[400px] ">
          <img src={Logo} alt="Logo" data-testid="login-logo" />
          <p className="text-2xl font-bold">Sign in to your account</p>
          <Input
            control={control}
            fieldName={"username"}
            label="Username"
            {...register("username")}
            error={errors.username?.message}
          />
          <Input
            control={control}
            fieldName={"password"}
            label={<PasswordLabel />}
            {...register("password")}
            type="password"
            error={errors.password?.message}
          />

          <button
            className="px-4 py-2 text-white bg-primary rounded-md w-full cursor-pointer hover:bg-primary/80"
            type="submit"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
