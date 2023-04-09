// import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import AlphabetSearch from '../../componets/AlphabetSearch/AlphabetSearch';
// import Footer from '../../componets/Footer/Footer';
// import Header from '../../componets/Header/Header';
// import { useGetAZListAnimeQuery } from '../../redux/api/asyncAction';
// import { aphSelector } from '../../redux/api/selectors';
// import { letterSelector } from '../../redux/filterSlice/selectors';
// import styles from './AlphabetAnime.module.scss';
// import { useAppSelector } from '../../redux/hooks';

// const AlphabetAnime = () => {
//   const animeAphArray = useAppSelector(aphSelector);

//   const currentLetter = useAppSelector(letterSelector);

//   const { data } = useGetAZListAnimeQuery(currentLetter);

//   console.log(data);

//   return (
//     <div className={styles.wrapper}>
//       <Header />
//       <main className={styles.AlphabetAnime}>
//         <div className={styles.AlphabetAnime__overlay}>
//           <ul className={styles.AlphabetAnime__list}>
//             {animeAphArray.map(({ animeId, animeTitle, animeImg }) => (
//               <Link to={`/anime/${animeId}`}>
//                 <li className={styles.AlphabetAnime__listItem}>
//                   <img className={styles.AlphabetAnime__listItemImg} src={animeImg} alt="anime" />
//                   <div className={styles.AlphabetAnime__container}>
//                     <h2 className={styles.AlphabetAnime__listItemTitle}>{animeTitle}</h2>
//                   </div>
//                 </li>
//               </Link>
//             ))}
//           </ul>
//           <AlphabetSearch />
//         </div>
//       </main>
//       <footer className={styles.FooterBackground}>
//         <div className={styles.FooterOverlay}>
//           <Footer />
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default AlphabetAnime;
