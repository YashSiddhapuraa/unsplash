import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SearchImagesState {
  search: string;
  page: number;
  perPage: number;
  loading: boolean;
  error: any;
  images: any[];
}

const initialState: SearchImagesState = {
  search: "",
  page: 0,
  perPage: 20,
  loading: false,
  error: null,
  images: [],
};

export const searchImagesSlice = createSlice({
  name: "searchImages",
  initialState,
  reducers: {
    getSearchString: (state, action: PayloadAction<string>) => {
      return { ...state, search: action.payload, page: 1 };
    },
    fetchImagesRequest: (state) => {
      return { ...state, loading: true, error: null, page: state.page + 1 };
    },
    fetchImagesSuccess: (state, action: PayloadAction<string[]>) => {
      return {
        ...state,
        loading: false,
        images: [...state.images, ...action.payload],
      };
    },
    fetchImagesFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  getSearchString,
  fetchImagesRequest,
  fetchImagesSuccess,
  fetchImagesFailure,
} = searchImagesSlice.actions;

export default searchImagesSlice.reducer;
