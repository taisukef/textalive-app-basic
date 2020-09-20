# TextAlive App API basic example

API チュートリアル「1. 開発の始め方」のサンプルコードです。
発声中の歌詞を単語単位で表示します。
また、このアプリが TextAlive ホストと接続されていなければ再生コントロールを表示します。

TextAlive ホストと接続された状態をテストするには [TextAlive App Debugger](https://developer.textalive.jp/app/run/?ta_app_url=https%3A%2F%2Ftaisukef.github.io%2Ftextalive-app-basic%2F&ta_song_url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DygY2qObZv24) のページにアクセスしてください。

- API チュートリアル「1. 開発の始め方」: https://developer.textalive.jp/app/
- サンプルコードのデモページ: https://taisukef.github.io/textalive-app-basic/

**English version available in [README.en.md](./README.en.md).**

## 違う楽曲で試すには

TextAlive App API で開発されたWebアプリケーションは、（特定の楽曲向けに作り込んでいない限り）URLのクエリパラメタで `ta_song_url={楽曲のURL}` を指定すると異なる楽曲で演出を試せます。

- [ブレス・ユア・ブレス by 和田たけあき feat. 初音ミク](https://taisukef.github.io/textalive-app-basic/?ta_song_url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Da-Nf3QUFkOU)
- [グリーンライツ・セレナーデ by Omoi feat. 初音ミク](https://taisukef.github.io/textalive-app-basic/?ta_song_url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DXSLhsjepelI)

## TextAlive App API

![TextAlive](https://i.gyazo.com/thumb/1000/5301e6f642d255c5cfff98e049b6d1f3-png.png)

TextAlive App API は、音楽に合わせてタイミングよく歌詞が動くWebアプリケーション（リリックアプリ）を開発できるJavaScript用のライブラリです。

TextAlive App API について詳しくはWebサイト [TextAlive for Developers](https://developer.textalive.jp/) をご覧ください。

---
forked from
https://github.com/TextAliveJp/textalive-app-basic
