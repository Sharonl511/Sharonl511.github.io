// =============================================================
// VIDEO LINKS
// Paste each YouTube link between its quotes and save.
// Any normal YouTube link works, for example:
//   https://www.youtube.com/watch?v=abc123XYZ00
//   https://youtu.be/abc123XYZ00
// Leave a link empty ("") to show its "Coming Soon" frame.
// =============================================================
const VIDEO_LINKS = {
  demoReel:           "",   // homepage
  dramaQueenFilm:     "",   // Drama Queen: final short film
  dramaQueenRigTest:  "",   // Drama Queen: rig emotion test
  geckoMailFilm:      "",   // Gecko Mail: final short film
  geckoMailTurntable: "",   // Gecko Mail: character turntable
};


// You don't need to change anything below this line.

// Pulls the video ID (the 11-character code) out of a YouTube link.
function getYouTubeId(url) {
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/
  );
  return match ? match[1] : null;
}

// Every video frame on a page has a data-video="..." name that
// matches one of the links above. When that link is filled in,
// the "Coming Soon" placeholder is swapped for a YouTube player.
function loadVideos() {
  document.querySelectorAll("[data-video]").forEach(function (frame) {
    const link = VIDEO_LINKS[frame.dataset.video] || "";
    const videoId = getYouTubeId(link.trim());
    if (!videoId) return;

    const player = document.createElement("iframe");
    // youtube-nocookie.com is YouTube's privacy-enhanced mode.
    // rel=0 keeps the suggested videos at the end to your own channel.
    player.src = "https://www.youtube-nocookie.com/embed/" + videoId + "?rel=0";
    player.title = frame.getAttribute("aria-label") || "Video";
    player.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    player.allowFullscreen = true;

    frame.innerHTML = "";
    frame.appendChild(player);
  });
}

loadVideos();
