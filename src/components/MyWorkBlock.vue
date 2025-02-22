<template>
    <div>
        <swiper :effect="'flip'" :grabCursor="true" :pagination="{
            dynamicBullets: true,
        }" :navigation="true" :modules="modules" :id="id" class="swiper-wrapper">
            <swiper-slide :class="roleBgClass">
                <div class="h-100">
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
            <swiper-slide class="challenge-objective">
                <div class="video-showreel-block container text-center">
                    <img class="img-fluid business-obj-img-size" :src="businessObjBgSrc" alt="showreel-video">
                </div>
                <div class="challenge-objective-block">
                    <div class="container">
                        <div class="row my-role-description">
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
            <swiper-slide :class="workInfoBgClass">
                <div class="editing-work-block">
                </div>
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

@media (max-width: 646px) {

    .swiper-wrapper .swiper-button-prev,
    .swiper-wrapper .swiper-button-next {
        bottom: 0;
        height: 60%;
    }
}
</style>
<script lang="ts">
import '../assets/show-reel.css'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Pagination, Navigation],
        };
    },
    props: [
        'workTitle',
        'roleBgClass',
        'workInfoBgClass',
        'businessObjBgSrc',
        'id',
        'myBgDescription',
        'myRoleDescription',
        'editingStyleDesc',
        // 'videoTypeDesc',
        // 'moodToneDesc',
        // 'businessObj',
        // 'platformDesc',
    ]
};
</script>