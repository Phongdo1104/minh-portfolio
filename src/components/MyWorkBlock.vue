<template>
    <div>
        <swiper :effect="'flip'" :grabCursor="true" :pagination="{
            dynamicBullets: true,
        }" :navigation="true" :modules="modules" :id="id" class="swiper-wrapper my-works-blocks">
            <swiper-slide :class="roleBgClass">
                <div :class="darkenLayerFlg"></div>
                <div class="content h-100">
                    <div class="container title-works" v-motion :initial="{ opacity: 0, y: 100 }"
                        :visible-once="{ opacity: 1, y: 0 }" :delay="100" :duration="1000">
                        <span v-html="workTitle"></span>
                    </div>
                    <div class="description-work" v-motion :initial="{ opacity: 0, y: 100 }"
                        :visible-once="{ opacity: 1, y: 0 }" :delay="100" :duration="1000">
                        <div class="container showreel-work">
                            <div class="justify-content-start">
                                <div>
                                    <div class="my-background-title">
                                        <span>Description</span>
                                    </div>
                                    <div class="my-background-description">
                                        <span v-html="myBgDescription"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide :class="embeddedThumbnail">
                <div class="darken-layer"></div>
                <div class="content">
                    <div class="challenge-objective-block container">
                        <div v-if="embeddedLinksMobile !== ''">
                            <div class="embedded-link-wrapper embedded-desktop-hide embedded-desktop-block">
                                <div v-html="embeddedLinks"></div>
                            </div>
                            <div class="embedded-mobile-hide embedded-link-mobile-block" v-html="embeddedLinksMobile">
                            </div>
                        </div>
                        <div v-else>
                            <div class="embedded-link-wrapper">
                                <div v-html="embeddedLinks"></div>
                            </div>
                        </div>
                        <div class="row embedded-info">
                            <div class="col-sm my-background-block">
                                <div class="my-background-title">
                                    <span>My Role</span>
                                </div>
                                <div class="my-background-description">
                                    <span v-html="myRoleDescription"></span>
                                </div>
                            </div>
                            <div class="col-sm my-role-block">
                                <div class="my-role-title">
                                    <span>Editing Style</span>
                                </div>
                                <div class="my-background-description">
                                    <span v-html="editingStyleDesc"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <ThumbnailVideo :videoPath="thumbnailUrl" />
            </swiper-slide>
        </swiper>
    </div>
</template>
<style>
.swiper-wrapper .swiper-slide {
    height: auto;
}

.swiper-wrapper .swiper-button-prev,
.swiper-wrapper .swiper-button-next {
    display: none;
}

.swiper-wrapper .swiper-button-disabled {
    display: none !important;
}

.darken-layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1;
}

.content {
    z-index: 2;
    position: sticky;
    height: 100%;
}

@media (max-width: 646px) {

    .swiper-wrapper .swiper-button-prev,
    .swiper-wrapper .swiper-button-next {
        bottom: 0;
        height: 60%;
    }
}

.video-block-container {
    pointer-events: none;
}
</style>
<script lang="ts" setup>
import '../assets/my-work-partials.css'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

import ThumbnailVideo from './ThumbnailVideo.vue';

const props = defineProps([
    'workTitle',
    'roleBgClass',
    'workInfoBgClass',
    'businessObjBgSrc',
    'id',
    'myBgDescription',
    'myRoleDescription',
    'editingStyleDesc',
    'embeddedThumbnail',
    'darkenLayerFlg',
    'embeddedLinks',
    'thumbnailUrl',
    'embeddedLinksMobile'
]);

const modules = [Pagination, Navigation];
</script>