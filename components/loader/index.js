import React from "react";
import styles from "./loader.module.scss";
import Image from "next/image";
import { useLoader } from "../../contexts/LoaderContext";

export default function Loader() {
  const { isLoading } = useLoader();

  if (!isLoading) {
    return null;
  }

  return (
    <div className={styles.back__preloader}>
      <div className={styles.back__circle_loader}></div>
      <div className={styles.back__loader_logo}>
        <Image
          src="/images/loader/loader.png"
          width={80}
          height={80}
          alt="Preload Logo"
        />
      </div>
    </div>
  );
}
