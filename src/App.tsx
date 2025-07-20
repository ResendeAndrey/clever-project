import { Toaster } from "sonner";
import Router from "./routes";
import { AuthContextProvider } from "./context/auth/auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FavoritePhotoProvider } from "./context/favoritePhoto/favoritePhoto";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <FavoritePhotoProvider>
          <Toaster />
          <Router />
        </FavoritePhotoProvider>
      </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default App;
