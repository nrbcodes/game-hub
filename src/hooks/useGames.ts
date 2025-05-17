import useData from "./useData";
import { Genre } from "./useGenres";

// parent_platforms: [{
//     "platform": {
//         "id": 1,
//         "name": "PC",
//         "slug": "pc"
//     }
// },
// {
//     "platform": {
//         "id": 2,
//         "name": "PlayStation",
//         "slug": "playstation"
//     }
// }]

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null
) =>
  useData<Game>(
    "/games",
    { params: { genres: selectedGenre?.id, platforms: selectedPlatform?.id } },
    [selectedGenre?.id, selectedPlatform?.id]
  );

export default useGames;
