<template>
    <div id="showreel-container">
        <div class="close-video-btn">
            <span @click="onHideVideo">
                <img src="/svg/close-circle-simplify.svg" alt="close-video">
            </span>
        </div>
        <div class="showreel-block">
            <video id="showreel-video" width="100%" height="100px" class="video-js vjs-defaultskin"></video>
        </div>
    </div>
</template>
<style>
.video-js .vjs-big-play-button {
    display: none;
}
</style>
<script setup lang="ts">
import videojs from "video.js";
import { gsap } from "gsap";
import 'video.js/dist/video-js.css';
import './../assets/showreel.css'
import { onMounted, onBeforeUnmount } from "vue";

let player: any = null;
const videoOptions = {
    autoplay: false,
    controls: true,
    preload: "none",
    sources: [
        {
            src:
                "/videos/2024 Minh Nguyen Showreel.mp4",
            type: "video/mp4",
        },
    ]
}

const tl = gsap.timeline();

onMounted(() => {
    player = videojs(
        document.getElementById('showreel-video') || "", { ...videoOptions, }, () => {
            player.tech({ IWillNotUseThisInPlugins: true });
        },
    );
    player.on('touchstart', (e: any) => {
        const showreelVideo = document.getElementById('showreel-video');

        if (!showreelVideo) return;

        if (showreelVideo.classList.contains("vjs-playing")) {
            player.pause()
        } else {
            player.play()
        }
    });
});

onBeforeUnmount(() => {
    if (player) {
        player.dispose();
    }
});
function playVideoOnStart() {
    tl.to('#showreel-container', {
        opacity: 1,
        duration: 0.8,
        ease: "expoScale(0.5,7,none)",
        onComplete: () => {
            const videoElement = document.getElementById('showreel-container');
            videoElement!.style.pointerEvents = 'auto';
            player.muted(false);
            player.play();
        }
    })
}

function onHideVideo() {
    // muted video first to avoid unsynced hiding element process
    player.muted(true);
    tl.to('#showreel-container', {
        opacity: 0,
        duration: 0.8,
        ease: "expoScale(0.5,7,none)",
        onComplete: () => {
            const videoElement = document.getElementById('showreel-container');
            videoElement!.style.pointerEvents = 'none';
            player.pause();
            player.hasStarted(false);
            player.currentTime(0);
        }
    })
}

defineExpose({ playVideoOnStart });
</script>