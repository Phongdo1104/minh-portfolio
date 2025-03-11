<template>
    <div class="thumbnail-video">
        <video width="100%" height="100%" type="video/mp4"
            :src="props.videoPath"
            loop
            autoplay
            muted>
        </video>
    </div>
</template>
<script setup lang="ts">
import './../assets/video-loop.css'

const props = defineProps(['videoPath']);
</script>