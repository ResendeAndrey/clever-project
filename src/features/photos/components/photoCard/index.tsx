/*
  This file defines a PhotoCard component which displays information about a photo,
  including an image, photographer details, and a link to the photographer's portfolio.
  The component makes use of the FavoritePhotoContext to manage favorite photo state, allowing users to mark a photo as favorite by clicking a star icon.
  The component leverages other components like Image and StarIcon for rendering the photo and favorite icon respectively.
*/

import Image from "@/components/Image";
import { PhotoListData } from "../../types/photo";
import Link from "@/assets/links.svg";
import { StarIcon } from "@/components/StarIcon";
import { useContext } from "react";
import { FavoritePhotoContext } from "@/context/favoritePhoto/favoritePhoto";

interface PhotoCardProps {
  photo: PhotoListData;
}

export const PhotoCard = ({ photo }: PhotoCardProps) => {
  const { favoriteId, updateFavoriteId } = useContext(FavoritePhotoContext);
  return (
    <div className="flex  items-start justify-between w-[90%] md:max-w-[600px] md:w-full ">
      <div className="flex gap-3 items-start">
        <button
          className="flex cursor-pointer"
          onClick={() => updateFavoriteId(photo.id)}
        >
          <StarIcon favorite={favoriteId === photo.id} />
        </button>

        <Image
          src={photo.src.medium}
          alt={photo.alt}
          className="rounded-lg w-[75px] h-[75px] shrink-0"
        />

        <div className="flex flex-col flex-1 md:max-w-[300px]">
          <span className="font-bold text-sm">{photo.photographer}</span>
          <span className="text-sm">{photo.alt}</span>
          <div className="flex gap-1 items-center text-sm">
            <span style={{ color: photo.avg_color }}>{photo.avg_color}</span>
            <span
              style={{ backgroundColor: photo.avg_color }}
              className="w-4 h-4 rounded"
            ></span>
          </div>
        </div>
      </div>
      <a
        href={photo.photographer_url}
        className="flex gap-1 text-primary text-[12px] items-center"
        target="_blank"
        title={photo.photographer}
      >
        <img src={Link} alt="Link" className="w-[12px] h-[12px]" />
        Portfolio
      </a>
    </div>
  );
};
