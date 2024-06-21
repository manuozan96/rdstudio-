import React from "react";
import Image from "next/image";
import styles from "../styles/ImageCard.module.css";

interface ImageData {
  src: string;
  text?: string;
  styles: { width: number; height: number };
}

interface ImageCardProps {
  imageData: ImageData[];
  buttonText: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ imageData, buttonText }) => {
  return (
    <div>
      {imageData.map((data, index) => (
        <div key={index} className={styles.imageContainer}>
          <Image
            src={data.src}
            alt="image"
            className={styles.image}
            width={data.styles.width}
            height={data.styles.height}
          />
          <div className={styles.textContainer}>
            <p className={styles.imageText}>{data.text}</p>
          </div>
        </div>
      ))}
      <button className={styles.button}>
        <span className={styles.buttonText}>{buttonText}</span>
      </button>
    </div>
  );
};

export default ImageCard;
