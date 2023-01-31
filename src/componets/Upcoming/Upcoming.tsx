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
            src="https://s3-alpha-sig.figma.com/img/5ed8/66c0/a322bd8823a25e08c38cb9286d54d90a?Expires=1675641600&Signature=AGbRQ4hPq-dYeuN2mO3lJCUCfjJl242ttwMCpNIwGiLbKVzP1hjfSI0ezZsboElB5Pe7XZTLr9GPcz~XUwIK1yz5gAi-7cm2mgahiqzrgMWo-xNBRJWTKbmNdkQv-j4xOiTSnpKyLyv0f4GqhCRnWJhqbLJlnjYpVdZtXCKxLYFqbkDYaCL-Vd-0T-5e7Ll-BNEsSKV9QaFf6zTNEbczt7~SEgvf0d5zD6LCm~klNiY~dBXy4n646BgR2uyHgeDgSzuj0M4H1HUBMW3sKbOXwxyisnJL4YUyloAaztFJHxlBxxafK-39FkrJI1N4pJOyo18jMDfziktQs56avfRwrw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
          />
        </div>
        <div>
          <h3 className={styles.Upcoming__name}>Suzume no tojimari</h3>
          <ul className={styles.Upcoming__genresList}>
            {genresArray.map((obj, index) => (
              <li className={styles.Upcoming__genresListItem} key={index}>
                {obj}
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
