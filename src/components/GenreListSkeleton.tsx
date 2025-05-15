import {
  HStack,
  List,
  ListItem,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";
import React from "react";

const GenreListSkeleton = () => {
  return (
    <List>
      <ListItem paddingY="5px">
        <HStack>
          <SkeletonCircle boxSize="32px" />
          <SkeletonText noOfLines={2} width="100px" />
        </HStack>
      </ListItem>
    </List>
  );
};

export default GenreListSkeleton;
