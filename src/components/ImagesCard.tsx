import React from "react";
import Image, { StaticImageData } from "next/image";
import styles from "../styles/ImageCard.module.css";

interface ImageData {
  src: StaticImageData;
  text?: string;
  className?: string;
}

interface ImageCardProps {
  imageData: ImageData[];
}

const ImageCard: React.FC<ImageCardProps> = ({ imageData }) => {

  return (
    <div className={styles.imageContainer}>
      {" "}
      {imageData.map((data, index) => (
        <div
          key={index}
          className={styles.imageContainer}
        >
          <Image
            src={data.src}
            alt="image"
            className={styles.image}
          />
          {data.text && (
            <div className={styles.textContainer}>
              <p className={styles.imageText}>{data.text}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ImageCard;
