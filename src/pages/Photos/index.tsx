/*
  Page for displaying a list of photos

*/

import { useGetPhotos } from "@/features/photos/hooks/query/useGetPhotos";
import Logo from "@/assets/logo.svg";
import { PhotoCard } from "@/features/photos/components/photoCard";
import Loading from "@/components/Loading";

const PhotosList = () => {
  const { data, isLoading } = useGetPhotos();

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="flex items-center my-10 gap-10 flex-col ">
      <div className="flex flex-col items-start gap-5 w-[90%] md:max-w-[600px] md:w-full ">
        <img src={Logo} alt="Logo" />
        <p className="text-2xl font-bold">All photos</p>
      </div>
      {data?.photos.map((photo) => (
        <PhotoCard key={photo.id} photo={photo} />
      ))}
    </div>
  );
};
export default PhotosList;
