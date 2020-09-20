# TextAlive App API basic example

This example corresponds to the first section of the API tutorial, "Get Started."
It shows each word when being vocalized.
It also displays playback control if it is not connected to a TextAlive host.

To see this example connected to a TextAlive host, use [TextAlive App Debugger](https://developer.textalive.jp/app/run/?ta_app_url=https%3A%2F%2Ftaisukef.github.io%2Ftextalive-app-basic%2F&ta_song_url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DygY2qObZv24).

- API tutorial step 1. "Get Started": https://developer.textalive.jp/app/
- Live demo: https://taisukef.github.io/textalive-app-basic/

**日本語は [README.md](./README.md) にあります。**

## Run this app with different songs

Web applications developed with TextAlive App API can play a song of your choice (if not designed to work with a specific one) by specifying a query parameter in the URL as  `ta_song_url={song URL}`.

- [Bless your breath by WADATAKEAKI feat. Hatsune Miku](https://taisukef.github.io/textalive-app-basic/?ta_song_url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Da-Nf3QUFkOU)
- [Greenlights Serenade by Omoi feat. Hatsune Miku](https://taisukef.github.io/textalive-app-basic/?ta_song_url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DXSLhsjepelI)

## TextAlive App API

![TextAlive](https://i.gyazo.com/thumb/1000/5301e6f642d255c5cfff98e049b6d1f3-png.png)

TextAlive App API is the JavaScript API for developing "lyric apps" (cf. lyric videos) that show lyrics synchronized with the music playback.

For more details on the TextAlive App API, please visit the website [TextAlive for Developers](https://developer.textalive.jp/).

---
forked from
https://github.com/TextAliveJp/textalive-app-basic
