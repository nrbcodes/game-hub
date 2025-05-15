import useGenres from "@/hooks/useGenres";

const GenresList = () => {
  const { data } = useGenres();
  return (
    <ul>
      {data.map((g) => (
        <li key={g.id}>{g.name}</li>
      ))}
    </ul>
  );
};

export default GenresList;
