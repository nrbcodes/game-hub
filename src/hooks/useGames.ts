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

const useGames = (selectedGenre: Genre | null) =>
  useData<Game>("/games", { params: { genres: selectedGenre?.id } }, [
    selectedGenre?.id,
  ]);

export default useGames;
