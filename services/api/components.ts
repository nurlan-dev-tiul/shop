import { Components } from "@prisma/client"
import { axiosInstance } from "../axios"
import { ApiRoutes } from "../api.routes";

export const getAll = async(): Promise<Components[]> => {
  const { data } = await axiosInstance.get<Components[]>(ApiRoutes.COMPONENTS);

  return data;
}