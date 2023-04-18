import React, { useState } from 'react';
import styles from './Characters.module.scss';
import CharactersList from './CharactersList/CharactersList';
import { CharactersInterface } from './CharactersInterface';

const Characters = ({ currentAnime }: CharactersInterface) => {
  const [showSecondaryCharacters, setShowSecondaryCharacters] = useState<boolean>(false);
  const [showMainCharacterss, setShowMainCharacters] = useState<boolean>(true);

  const CharactersListMap = [
    {
      items: currentAnime?.characters,
      type: 'MAIN',
      title: 'Main Characters',
      showCharacters: {
        characters: showMainCharacterss,
        type: 'main',
      },
      setShowCharacters: setShowMainCharacters,
    },
    {
      items: currentAnime?.characters,
      type: 'SUPPORTING',
      title: 'Secondary Characters',
      showCharacters: {
        characters: showSecondaryCharacters,
        type: 'secondary',
      },
      setShowCharacters: setShowSecondaryCharacters,
    },
  ];

  return (
    <div className={styles.Characters}>
      <div className={styles.Overlay}>
        <h1 className={styles.Header}>Characters</h1>
        {CharactersListMap.map((props) => (
          <CharactersList {...props} />
        ))}
      </div>
    </div>
  );
};

export default Characters;
