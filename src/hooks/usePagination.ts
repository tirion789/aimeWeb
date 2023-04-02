import { useState } from 'react';

export const usePagination = (array: number[]) => {
  const [lastIndexSlice, setLastIndexSlice] = useState(4);
  const [firestIndexSlice, setFirestIndexSlice] = useState(0);
  const [currentPaginationButton, setCurrentPaginationButton] = useState(1);
  const PREV = firestIndexSlice > 0 ? firestIndexSlice + 1 : firestIndexSlice;
  const VISIBLE = lastIndexSlice === array.length - 1 ? lastIndexSlice + 1 : lastIndexSlice;
  const buttonsArrayLastElement = array.slice(PREV, VISIBLE)[2];
  const buttonArrayFirstElement = array.slice(PREV, VISIBLE)[0];

  const handlePaginationClickNext = () => {
    if (currentPaginationButton >= 3 && lastIndexSlice !== array.length - 1) {
      setLastIndexSlice((prev) => prev + 1);
      setFirestIndexSlice((prev) => prev + 1);
    }
    setCurrentPaginationButton((prev) => prev + 1);
  };

  const handlePaginationClickPrev = () => {
    if (currentPaginationButton <= array.length - 2 && firestIndexSlice !== 0) {
      setLastIndexSlice((prev) => prev - 1);
      setFirestIndexSlice((prev) => prev - 1);
    }
    setCurrentPaginationButton((prev) => prev - 1);
  };

  const handleClickPaginationButton = (button: number) => {
    setCurrentPaginationButton(button);
    if (button === array.length - 1 || button === array[0]) {
      return;
    }
    if (
      (button === buttonsArrayLastElement && array.slice(PREV, VISIBLE).length === 3) ||
      (button === 4 && firestIndexSlice === 0)
    ) {
      setLastIndexSlice((prev) => prev + 1);
      setFirestIndexSlice((prev) => prev + 1);
    } else if (button === buttonArrayFirstElement) {
      setFirestIndexSlice((prev) => prev - 1);
      setLastIndexSlice((prev) => prev - 1);
    }
  };

  const handleClickOnLastPage = () => {
    setFirestIndexSlice(array.length - 5);
    setLastIndexSlice(array.length - 1);
    setCurrentPaginationButton(array.length);
  };

  const handleClickOnFirstPage = () => {
    setFirestIndexSlice(array.length - array.length);
    setLastIndexSlice(4);
    setCurrentPaginationButton(1);
  };

  return {
    lastIndexSlice,
    firestIndexSlice,
    currentPaginationButton,
    handleClickOnFirstPage,
    handleClickOnLastPage,
    handlePaginationClickNext,
    handlePaginationClickPrev,
    handleClickPaginationButton,
  };
};
