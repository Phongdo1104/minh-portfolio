<template>
    <div id="showreel-container">
        <div class="close-video-btn">
            <span @click="onHideVideo">
                <img src="/svg/close-circle.svg" alt="close-video">
            </span>
        </div>
        <div class="showreel-block">
            <video id="showreel-video" width="100%" height="100px"
                class="video-js vjs-defaultskin"></video>
        </div>
    </div>
</template>
<script setup lang="ts">
import videojs from "video.js";
import 'video.js/dist/video-js.css';
import './../assets/showreel.css'
import { onMounted, onBeforeUnmount, useTemplateRef } from "vue";

let player: any = null;
const videoOptions = {
    autoplay: false,
    controls: true,
    preload: true,
    sources: [
        {
            src:
                "/videos/2024 Minh Nguyen Showreel.mp4",
            type: "video/mp4",
        },
    ]
}

onMounted(() => {
    player = videojs(
        document.getElementById('showreel-video') || "",
        {
            ...videoOptions,
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

function onHideVideo() {
    const showreelContainer = document.getElementById('showreel-container');
    const showreelVideo = document.getElementById('showreel-video');
    if (!showreelContainer || !showreelVideo) return;

    showreelContainer.style.opacity = '0';
    showreelContainer.style.pointerEvents = 'none';

    player.pause();
    player.hasStarted(false)
    player.currentTime(0);
}
</script>