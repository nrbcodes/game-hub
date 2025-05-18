import useGenres, { Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import GenreListSkeleton from "./GenreListSkeleton";
import { GameQuery } from "@/App";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  gameQuery: GameQuery;
}

const GenresList = ({ onSelectGenre, gameQuery }: Props) => {
  const { data, isLoading } = useGenres();
  return (
    <>
      <Heading fontSize="2xl" marginBottom={5}>
        Genres
      </Heading>
      <List>
        {isLoading &&
          Array.from({ length: 20 }).map((_, index) => (
            <GenreListSkeleton key={index} />
          ))}

        {data.map((g) => (
          <ListItem key={g.id} paddingY="5px">
            <HStack>
              <Image
                objectFit="cover"
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(g.image_background)}
              />
              <Button
                fontWeight={gameQuery.genre?.id === g.id ? "bold" : "normal"}
                whiteSpace="normal"
                fontSize="lg"
                textAlign="left"
                variant="link"
                onClick={() => onSelectGenre(g)}
              >
                {g.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenresList;
