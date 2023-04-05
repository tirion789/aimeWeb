import { useState } from 'react';

export const usePagination = (array: number[]) => {
  const INITIAL_STATE_LAST_INDEX_SLICE = 4;
  const INITIAL_STATE_FIRST_INDEX_SLICE = 0;

  const [lastIndexSlice, setLastIndexSlice] = useState(INITIAL_STATE_LAST_INDEX_SLICE);
  const [firestIndexSlice, setFirestIndexSlice] = useState(INITIAL_STATE_FIRST_INDEX_SLICE);
  const [currentPaginationButton, setCurrentPaginationButton] = useState(1);

  const PREV = firestIndexSlice > 0 ? firestIndexSlice + 1 : firestIndexSlice;
  const VISIBLE = lastIndexSlice === array.length - 1 ? lastIndexSlice + 1 : lastIndexSlice;
  const buttonsArrayLastElement = array.slice(PREV, VISIBLE)[2];
  const buttonArrayFirstElement = array.slice(PREV, VISIBLE)[0];
  const THIRD_ELEMENT_OF_ARRAY = 3;
  const PAGE = 1;

  const handlePaginationClickNext = () => {
    if (currentPaginationButton >= THIRD_ELEMENT_OF_ARRAY && lastIndexSlice !== array.length - 1) {
      setLastIndexSlice((prev) => prev + PAGE);
      setFirestIndexSlice((prev) => prev + PAGE);
    }
    setCurrentPaginationButton((prev) => prev + PAGE);
  };

  const handlePaginationClickPrev = () => {
    if (
      currentPaginationButton <= array.length - 2 &&
      firestIndexSlice !== INITIAL_STATE_FIRST_INDEX_SLICE
    ) {
      setLastIndexSlice((prev) => prev - PAGE);
      setFirestIndexSlice((prev) => prev - PAGE);
    }
    setCurrentPaginationButton((prev) => prev - PAGE);
  };

  const handleClickPaginationButton = (button: number) => {
    setCurrentPaginationButton(button);
    if (button === array.length - 1 || button === array[0]) {
      return;
    }
    if (
      (button === buttonsArrayLastElement &&
        array.slice(PREV, VISIBLE).length === THIRD_ELEMENT_OF_ARRAY) ||
      (button === INITIAL_STATE_LAST_INDEX_SLICE &&
        firestIndexSlice === INITIAL_STATE_FIRST_INDEX_SLICE)
    ) {
      setLastIndexSlice((prev) => prev + PAGE);
      setFirestIndexSlice((prev) => prev + PAGE);
    } else if (button === buttonArrayFirstElement) {
      setFirestIndexSlice((prev) => prev - PAGE);
      setLastIndexSlice((prev) => prev - PAGE);
    }
  };

  const handleClickOnLastPage = () => {
    setFirestIndexSlice(array.length - 5);
    setLastIndexSlice(array.length - 1);
    setCurrentPaginationButton(array.length);
  };

  const handleClickOnFirstPage = () => {
    setFirestIndexSlice(INITIAL_STATE_FIRST_INDEX_SLICE);
    setLastIndexSlice(INITIAL_STATE_LAST_INDEX_SLICE);
    setCurrentPaginationButton(PAGE);
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
