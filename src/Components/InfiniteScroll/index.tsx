import React, { useState, useEffect, useRef, ReactNode } from "react";

interface InfiniteScrollProps {
  children: ReactNode;
  fetchMore: () => Promise<void>;
  loadingComponent: ReactNode;
  loading: boolean;
}

const InfiniteScroll: React.FC<InfiniteScrollProps> = ({
  children,
  fetchMore,
  loadingComponent,
  loading,
}) => {
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      fetchMore();
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <div>
      {children}
      <div id="sentinel" style={{ height: "10px" }}></div>
      {loading && loadingComponent}
    </div>
  );
};

export default InfiniteScroll;
