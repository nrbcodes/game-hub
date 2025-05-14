import useGames from "@/hooks/useGames";
import apiClient from "@/services/api-client";
import React, { useEffect, useState } from "react";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <p>{error}</p>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
