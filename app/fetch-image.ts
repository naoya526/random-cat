//fetch-image.ts
"use server"; //サーバーで実行
import { CAT_API_KEY } from "./env"; // 追加
type Image = {
    url: string;
}

//非同期関数:async function
//同期関数: function
export async function fetchImage(): Promise<Image> {
  //Promise:非同期処理の結果を表すオブジェクト
  //res: response
  const res = await fetch("https://dog.ceo/api/breeds/image/random", {
    headers: { "x-api-key": CAT_API_KEY }, // 追加
  });
  const data = await res.json();
  //.json(): JSON形式のデータをJavaScriptオブジェクトに変換
  console.log("fetchImage:画像情報を取得しました",data);
  return { url: data.message };
}