export interface CharactersListProps {
  items:
    | [
        {
          image: string;
          name: { first: string; full: string; last: string | null; userPreffered: string };
          role: string;
        },
      ]
    | undefined;
  type: string;
  title: string;
  showCharacters: {
    characters: boolean;
    type: string;
  };
  setShowCharacters: React.Dispatch<React.SetStateAction<boolean>>;
}
