import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import GenreListSkeleton from "./GenreListSkeleton";

const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const GenresList = () => {
  const { data, isLoading } = useGenres();
  return (
    <List>
      {isLoading && Array(20).fill(<GenreListSkeleton />)}
      {data.map((g) => (
        <ListItem key={g.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(g.image_background)}
            />
            <Text fontSize="lg">{g.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;
