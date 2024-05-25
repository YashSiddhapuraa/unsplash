import { useEffect } from "react";
import { SqaureSpaceSVG } from "../../Assets/Icons/SquareSpaceSVG";
import Gallery from "../../Components/Gallery";
import SearchBar from "../../Components/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../App/store";
import { fetchImagesRequest } from "../../App/features/searchImages";
import InfiniteScroll from "react-infinite-scroll-component";

const Home = () => {
  const { search, images } = useSelector(
    (state: RootState) => state.searchImages
  );

  const dispatch = useDispatch();

  const fetchMoreData = () => {
    dispatch(fetchImagesRequest(search));
  };

  useEffect(() => {
    dispatch(fetchImagesRequest());
  }, []);

  return (
    <div className="p-8">
      <div className="w-full flex items-end gap-4 mb-[56px]">
        <div className="w-full">
          <div className="w-full flex items-end justify-between mb-5">
            <div>
              <h1 className="text-[40px] font-bold leading-tight">Unsplash</h1>
              <p className="text-lg font-normal leading-5 my-[8px]">
                The internet’s source for visuals.
              </p>
              <p className="text-lg font-normal leading-5 my-[8px]">
                Powered by creators everywhere.
              </p>
            </div>
            <div className="flex items-center gap-1">
              <p>Supported by </p>
              <SqaureSpaceSVG />
            </div>
          </div>
          <SearchBar />
        </div>
        <div className="w-full flex gap-2"></div>
      </div>
      <InfiniteScroll
        dataLength={images.length - 5}
        next={fetchMoreData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
        // below props only if you need pull down functionality
        refreshFunction={() => {}}
        pullDownToRefresh
        pullDownToRefreshThreshold={50}
        pullDownToRefreshContent={
          <h3 style={{ textAlign: "center" }}>&#8595; Pull down to refresh</h3>
        }
        releaseToRefreshContent={
          <h3 style={{ textAlign: "center" }}>&#8593; Release to refresh</h3>
        }
      >
        <Gallery images={images} />
      </InfiniteScroll>
    </div>
  );
};

export default Home;
