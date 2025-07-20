import { createContext, useEffect, useState } from "react";

interface FavoritePhotoProviderProps {
  favoriteId: number | null;
  updateFavoriteId: (id: number) => void;
}

const FavoritePhotoContext = createContext<FavoritePhotoProviderProps>(
  {} as FavoritePhotoProviderProps
);

const FavoritePhotoProvider = ({ children }: { children: React.ReactNode }) => {
  const [favoriteId, setFavoriteId] = useState<number | null>(null);

  // function to update the favorite id and put it in local storage to persist the data
  const updateFavoriteId = (id: number) => {
    setFavoriteId((prev) => {
      if (prev === id) {
        localStorage.removeItem("favoriteId");
        return null;
      }
      localStorage.setItem("favoriteId", id.toString());
      return id;
    });
  };

  // check if there is a favorite id in local storage
  useEffect(() => {
    const storedFavoriteId = localStorage.getItem("favoriteId");
    if (storedFavoriteId) {
      setFavoriteId(parseInt(storedFavoriteId));
    }
  }, []);

  return (
    <FavoritePhotoContext.Provider value={{ favoriteId, updateFavoriteId }}>
      {children}
    </FavoritePhotoContext.Provider>
  );
};

export { FavoritePhotoProvider, FavoritePhotoContext };
