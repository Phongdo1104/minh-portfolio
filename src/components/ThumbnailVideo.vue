<template>
    <div class="thumbnail-video">
        <video width="100%" height="100%" type="video/mp4"
            preload="none"
            loop
            autoplay
            muted>
            <source :src="props.videoPath" type="video/mp4" />
        </video>
    </div>
</template>
<script setup lang="ts">
import './../assets/video-loop.css'

const props = defineProps(['videoPath']);
</script>