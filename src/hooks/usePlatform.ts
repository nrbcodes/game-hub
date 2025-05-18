import Platforms from "@/data/Platforms";
import useData from "./useData";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatform = () => ({ data: Platforms, error: null, isLoading: false });
export default usePlatform;
