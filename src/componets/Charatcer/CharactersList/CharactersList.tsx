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
        <section className={styles.CharactersList__charactersConteiner}>
          <h2 className={styles.CharactersList__headerText}>{title}</h2>
          <button
            className={styles.CharactersList__swapButton}
            onClick={handleShowSecondaryCharacters}>
            {showCharacters.characters ? (
              <Sort transform="rotate(180)" width={30} height={30} />
            ) : (
              <Sort width={30} height={30} />
            )}
          </button>
        </section>
      ) : (
        <h2 className={styles.CharactersList__charactersConteiner}>{title}</h2>
      )}
      {showCharacters.characters && (
        <ul className={styles.CharactersList__list}>
          {items?.map(({ image, name, role }) =>
            role === type ? (
              <li className={styles.CharactersList__item}>
                <img
                  className={styles.CharactersList__image}
                  width={250}
                  height={350}
                  src={image}
                  alt=""
                />
                <div className={styles.CharactersList__nameContainer}>
                  <p className={styles.CharactersList__name}>{name.first}</p>
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
