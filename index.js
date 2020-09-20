/**
 * TextAlive App API basic example
 * https://github.com/taisukef/textalive-app-basic
 * forked from https://github.com/TextAliveJp/textalive-app-basic
 *
 * API チュートリアル「1. 開発の始め方」のサンプルコードを改変したものです。
 * 発声中の歌詞を単語単位で表示します。
 * また、このアプリが TextAlive ホストと接続されていなければ再生コントロールを表示します。
 * https://developer.textalive.jp/app/
 */

const { Player } = TextAliveApp;

const songurl = "http://www.youtube.com/watch?v=ygY2qObZv24";

const appAuthor = "Taisuke Fukuno";
const appName = "Baisc Sample";

const animateWord = (now, unit) => {
  if (unit.contains(now)) {
    text.textContent = unit.text;
  }
};

const player = new Player({ app: { appAuthor, appName }, mediaElement: media });

player.addListener({
  onAppReady(app) {
    if (!app.managed) {
      control.style.display = "block";
      const p = player;
      document.querySelectorAll(".play").forEach((btn) => btn.onclick = () => p.video && p.requestPlay());
      jump.onclick = () => p.video && p.requestMediaSeek(p.video.firstChar.startTime);
      pause.onclick = () => p.video && p.requestPause();
      rewind.onclick = () => p.video && p.requestMediaSeek(0);
      document.querySelector("#header a").setAttribute("href", "https://developer.textalive.jp/app/run/?ta_app_url=https%3A%2F%2Ftextalivejp.github.io%2Ftextalive-app-basic%2F&ta_song_url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DygY2qObZv24");
    } else {
      document.querySelector("#header a").setAttribute("href", "https://textalivejp.github.io/textalive-app-basic/");
    }
    if (!app.songUrl) {
      player.createFromSongUrl(songurl);
    }
  },
  onVideoReady(v) {
    document.querySelector("#artist span").textContent = player.data.song.artist.name;
    document.querySelector("#song span").textContent = player.data.song.name;
    let w = player.video.firstWord;
    while (w) {
      w.animate = animateWord;
      w = w.next;
    }
  },
  onTimerReady(t) {
    if (!player.app.managed) {
      document.querySelectorAll("button").forEach((btn) => btn.disabled = false);
    }
    jump.disabled = !player.video.firstChar;
  },
  onThrottledTimeUpdate(pos) {
    document.querySelector("#position strong").textContent = Math.floor(pos);
  },
  onPlay() {
    overlay.style.display = "none";
  },
  onPause() {
    text.textContent = "-";
  },
  onStop() {
    text.textContent = "-";
  },
});
