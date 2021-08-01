import "./styles.css";

//追加ボタンの動作
const onClickAdd = () => {
  alert();
};

//IDを取得
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd()); //クリックイベントの付与。と関数を渡す。
