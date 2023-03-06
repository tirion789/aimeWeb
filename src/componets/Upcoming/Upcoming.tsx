import React from 'react';
import { genresArray } from '../../common/const';
import styles from './Upcoming.module.scss';

const Upcoming = () => {
  return (
    <div className={styles.Upcoming}>
      <h2 className={styles.Upcoming__title}>Upcoming</h2>
      <div className={styles.Upcoming__container}>
        <div className={styles.Upcoming__imageContainer}>
          <img
            src="https://s3-alpha-sig.figma.com/img/5ed8/66c0/a322bd8823a25e08c38cb9286d54d90a?Expires=1678665600&Signature=GP5jj-g6MNF04NeUFDfPJTOvwrYmGSPGyyVKS9~-wFET9wE7xTAeWqzNfaEGIiV1ikuXyX~YQckdjjSaA8pi1277hKYPeVAr4idLI0xMYgNDzUPLUcNraENVHE6F-Cye9fYzph6qUFOisdY~wgtGexhgo0DsG2DvcXyDvXAHwmFEVrCDkl6S39JrlD4Or6-2b-8OFV6kxz8wFjJoDqOytogttGIpctr~gW4HOvNJipLfVxFj6xPeQ5495Zd2oqFU89fLEmiYSo5Twt~SBtZ3DvOUTmeLkOVLC1HBGEmQ3q8t9ojhH8eIKBhz-4njmZZ-MGPF8bXW6XvTsB6YWI1pSg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
          />
        </div>
        <div>
          <h3 className={styles.Upcoming__name}>Suzume no tojimari</h3>
          <ul className={styles.Upcoming__genresList}>
            {genresArray.map((string, index) => (
              <li className={styles.Upcoming__genresListItem} key={index}>
                {string}
              </li>
            ))}
          </ul>
          <p className={styles.Upcoming__description}>
            A modern action adventure road story where a 17-year-old girl named Suzume helps a
            mysterious young man close doors from the outer side that are releasing disasters all
            over in Japan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
