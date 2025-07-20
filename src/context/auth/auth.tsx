/*
  This context is used to manage the authentication state of the user.
  It is used to store the user's name and password and to check if the user is authenticated.
  It is also used to store the user's id and to check if the user is authenticated.
  It is also used to store the user's name and to check if the user is authenticated.
  It is also used to store the user's name and to check if the user is authenticated.
*/

import {
  createContext,
  useMemo,
  useState,
  useCallback,
  useEffect
} from "react";
import { UserPayloadProps, UserProps } from "../../features/auth/types/user";

import { UseMutateAsyncFunction, useMutation } from "@tanstack/react-query";
import { RequestLogin } from "@/features/auth/services/login";
import { toast } from "sonner";
import useCheckStorage from "@/hooks/customs/useCheckStorage";
import api from "@/services/api";

interface AuthContextType {
  isAuthenticated: boolean;
  user: UserProps | null;
  login: UseMutateAsyncFunction<UserProps, Error, UserPayloadProps, unknown>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<UserProps | null>(null);
  const { userStorage } = useCheckStorage();

  // Login mutation function
  const login = useMutation({
    mutationFn: async (data: UserPayloadProps) =>
      RequestLogin(data).then((response) => response),
    onSuccess: (response) => {
      setIsAuthenticated(true);
      setUser(response);
      localStorage.setItem("user", JSON.stringify(response));
    },
    onError: () => {
      toast.error("Invalid credentials");
    }
  });

  //logout function

  const logout = useCallback(() => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem("user");
  }, []);

  // Check if user is authenticated

  useEffect(() => {
    if (userStorage) {
      setIsAuthenticated(true);
      setUser(JSON.parse(userStorage));
      api.defaults.headers.Authorization = `Bearer ${
        JSON.parse(userStorage).token
      }`;
    }
  }, [userStorage]);

  const ProviderValueMemoized = useMemo(
    () => ({
      isAuthenticated,
      user,
      login: login.mutateAsync,
      logout
    }),
    [isAuthenticated, user, login, logout]
  );

  return (
    <AuthContext.Provider value={ProviderValueMemoized}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
