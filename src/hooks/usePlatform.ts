import platforms from "@/data/platforms";
import useData from "./useData";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatform = () => ({ data: platforms, error: null, isLoading: false });
export default usePlatform;
