/*
  This file exports a function called useGetPhotos that uses the useQuery hook from the @tanstack/react-query library to fetch data from the getPhotos function.
  The function returns an object with the queryKey, queryFn, and refetchOnWindowFocus properties.
  The queryKey property is an array of strings that specifies the key for the query.
  The queryFn property is a function that is called to fetch data from the API.
  The refetchOnWindowFocus property is a boolean that specifies whether to refetch the data when the window is focused.
  If necessary we can catch this data without a new request to the API
*/

import { useQuery } from "@tanstack/react-query";
import { getPhotos } from "../../services/getPhotos";
import { toast } from "sonner";
import { PhotoResponseData } from "../../types/photo";

export const useGetPhotos = () => {
  return useQuery({
    queryKey: ["photos"],
    queryFn: () =>
      getPhotos({ query: "nature", limit: 10, page: 1 })
        .catch((err) => toast.error(err.message))
        .then((response) => response as PhotoResponseData),
    refetchOnWindowFocus: false
  });
};
