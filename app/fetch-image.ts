//fetch-image.ts

type Image = {
    url: string;
}

//非同期関数:async function
//同期関数: function
export async function fetchImage(): Promise<Image> {
  //Promise:非同期処理の結果を表すオブジェクト
  //res: response
  const res = await fetch("https://api.thecatapi.com/v1/images/search?limit=1");
  const images = await res.json();
  //.json(): JSON形式のデータをJavaScriptオブジェクトに変換
  console.log("fetchImage:画像情報を取得しました",images);
  return images[0];
}