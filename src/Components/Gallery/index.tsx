import React from "react";
import "./styles.css";

export type GalleryPropsType = {
  images: Array<any>;
};

const Gallery: React.FC<GalleryPropsType> = ({ images }) => {
  return (
    <div className="photosWrapper">
      {images?.map((galleryphoto, index) => {
        return (
          <div className="galleryImagesWrapper relative" key={index}>
            <img
              src={galleryphoto?.urls?.small}
              alt={galleryphoto.alt_description}
              // onClick={() => toggle(galleryphoto.id)}
              key={index}
              className="galleryImage"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="flex items-center gap-3">
                  <img
                    src={galleryphoto.user.profile_image.small}
                    className="rounded-xl"
                  />
                  <div className="text-xl font-semibold mb-2">
                    {galleryphoto.user.name}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;
