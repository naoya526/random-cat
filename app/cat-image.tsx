"use client"; //ユーザーのブラウザで実行
import { useState } from "react"; // 追加
import Image from "next/image";
import { fetchImage } from "./fetch-image";
import styles from "./page.module.css";
type CatImageProps = {
  url: string;
};
// props

export function CatImage({ url }: CatImageProps) {
    const [imageUrl,setImageUrl] = useState<string>(url);

    const refreshImage = async () => {
        setImageUrl("");
        const image = await fetchImage();
        setImageUrl(image.url);
    };
    return (
        <div className={styles.page}>
            <button onClick={refreshImage} className={styles.button}>
                他のわんこも見る
            </button>
            <div className={styles.frame}>
                {imageUrl && (
                    <Image 
                        src={imageUrl} 
                        alt="ランダムな犬の画像" 
                        className={styles.img}
                        width={400}
                        height={400}
                    />
                )} 
            </div>
    </div>
    );
}