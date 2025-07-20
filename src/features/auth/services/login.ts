import { UserPayloadProps, UserProps } from "@/features/auth/types/user";
import api from "@/services/api";

// function to make a request to the login endpoint

export const RequestLogin = (data: UserPayloadProps) =>
  api
    .post("/login", data)
    .then((response: { data: UserProps }) => response.data);
