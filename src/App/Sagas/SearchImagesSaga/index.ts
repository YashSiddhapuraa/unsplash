// src/sagas/index.ts
import { all, call, put, select, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  fetchImagesRequest,
  fetchImagesSuccess,
  fetchImagesFailure,
} from "../../features/searchImages"; // Adjust the import path accordingly

const getImagesState = (state: any) => state.searchImages;

interface ImageResponse {
  data: any; // Define this according to the actual response data structure from your API
}

function* fetchImagesSaga(): Generator<any, void, ImageResponse> {
  try {
    const imagesState: ReturnType<typeof getImagesState> = yield select(
      getImagesState
    );
    const response = yield call(
      axios.get,
      `${import.meta.env.VITE_UNSPLASH_BASE_URL}/photos`,
      {
        params: {
          client_id: import.meta.env.VITE_UNSPLASH_ACCESS_KEY,
          query: imagesState.search,
          per_page: 20,
          page: imagesState.page,
        },
      }
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
