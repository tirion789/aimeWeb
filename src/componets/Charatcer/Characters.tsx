import React, { useState } from 'react';
import { useAppSelector } from '../../redux/hooks';
import { currentItemSelector } from '../../redux/animeSlice/selectors';
import styles from './Characters.module.scss';
import CharactersList from './CharactersList/CharactersList';

const Characters = () => {
  const currentAnime = useAppSelector(currentItemSelector);
  const [showSecondaryCharacters, setShowSecondaryCharacters] = useState<boolean>(false);
  const [showMainCharacterss, setShowMainCharacterss] = useState<boolean>(true);

  const CharactersListMap = [
    {
      items: currentAnime?.characters,
      type: 'MAIN',
      title: 'Main Characters',
      showCharacters: {
        characters: showMainCharacterss,
        type: 'main',
      },
      setShowCharacters: setShowMainCharacterss,
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
      <div className={styles.Characters__overlay}>
        <h1 className={styles.Characters__header}>Characters</h1>
        {CharactersListMap.map((props) => (
          <CharactersList {...props} />
        ))}
      </div>
    </div>
  );
};

export default Characters;