import React from 'react';
import styles from './CharactersList.module.scss';
import { CharactersListProps } from './interface';
import { ReactComponent as Sort } from '../../../assets/images/icons/sort.svg';

const CharactersList = ({
  items,
  title,
  type,
  showCharacters,
  setShowCharacters,
}: CharactersListProps) => {
  const handleShowSecondaryCharacters = () => {
    if (showCharacters.type === 'secondary') {
      setShowCharacters((prev) => !prev);
    }
  };

  return (
    <>
      {showCharacters.type === 'secondary' ? (
        <button onClick={handleShowSecondaryCharacters} className={styles.CharactersConteiner}>
          <p className={styles.HeaderText}>{title}</p>
          {showCharacters.characters ? (
            <Sort transform="rotate(180)" width={30} height={30} />
          ) : (
            <Sort width={30} height={30} />
          )}
        </button>
      ) : (
        <p className={styles.CharactersConteiner}>{title}</p>
      )}
      {showCharacters.characters && (
        <ul className={styles.List}>
          {items?.map(({ image, name, role }) =>
            role === type ? (
              <li className={styles.Item}>
                <img className={styles.Image} width={250} height={350} src={image} alt="" />
                <div className={styles.NameContainer}>
                  <p className={styles.Name}>{name.first}</p>
                </div>
              </li>
            ) : (
              ''
            ),
          )}
        </ul>
      )}
    </>
  );
};

export default CharactersList;
