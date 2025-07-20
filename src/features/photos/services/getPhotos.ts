import api from "@/services/api";
import { PhotoResponseData } from "../types/photo";

interface GetPhotosProps {
  query?: string;
  limit?: number;
  page?: number;
}

// function to get photos from API
// note: the API is on src/server/index.ts and there we catch the external route from pexels to AVOID security issues
export const getPhotos = async (params?: GetPhotosProps) =>
  api
    .get<PhotoResponseData>("/photos", { params })
    .then((response) => response.data);
