// =============================================================
// DEMO REEL
// Paste your YouTube link between the quotes below and save.
// Any normal YouTube link works, for example:
//   https://www.youtube.com/watch?v=abc123XYZ00
//   https://youtu.be/abc123XYZ00
// Leave it empty ("") to show the "Demo Reel Coming Soon" frame.
// =============================================================
const DEMO_REEL_URL = "";


// You don't need to change anything below this line.

// Pulls the video ID (the 11-character code) out of a YouTube link.
function getYouTubeId(url) {
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/
  );
  return match ? match[1] : null;
}

// Swaps the placeholder for a YouTube player when a link is set.
function loadDemoReel() {
  const frame = document.getElementById("reel-frame");
  const videoId = getYouTubeId(DEMO_REEL_URL.trim());
  if (!frame || !videoId) return;

  const player = document.createElement("iframe");
  player.src = "https://www.youtube-nocookie.com/embed/" + videoId + "?rel=0";
  player.title = "Yixuan Lu demo reel";
  player.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  player.allowFullscreen = true;

  frame.innerHTML = "";
  frame.appendChild(player);
}

loadDemoReel();
