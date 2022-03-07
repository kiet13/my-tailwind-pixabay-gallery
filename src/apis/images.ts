import { pixabayClient } from "./requests";
import { IImage } from "../models";

const getImages = async (searchTerm: string): Promise<IImage[]> => {
  const res = await pixabayClient.get(
    `/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${searchTerm}&image_type=photo&pretty=true`
  );
  return res.data?.hits;
};

export const imagesApis = {
  getImages,
};
