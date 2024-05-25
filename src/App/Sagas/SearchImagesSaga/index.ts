// src/sagas/index.ts
import { all, call, put, select, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  fetchImagesRequest,
  fetchImagesSuccess,
  fetchImagesFailure,
} from "../../features/searchImages";
import { PayloadAction } from "@reduxjs/toolkit";

const getImagesState = (state: any) => state.searchImages;

function* fetchImagesSaga(action: PayloadAction<any>) {
  try {
    const imagesState = yield select(getImagesState);
    const response = yield call(
      axios.get,
      `${import.meta.env.VITE_UNSPLASH_BASE_URL}/photos?client_id=${
        import.meta.env.VITE_UNSPLASH_ACCESS_KEY
      }&query=${imagesState.search}&per_page=${
        // action.payload.perPage
        20
      }&page=${
        imagesState.page
        // action.payload.page
      }`
    );

    yield put(fetchImagesSuccess(response.data));
  } catch (error: any) {
    yield put(fetchImagesFailure(error.message));
  }
}

function* watchFetchImages() {
  yield takeLatest(fetchImagesRequest.type, fetchImagesSaga);
}

export default function* rootSaga() {
  yield all([watchFetchImages()]);
}
