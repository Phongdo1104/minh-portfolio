<template>
    <swiper v-if="!['contact-me'].includes($route.name)" :effect="'flip'" :grabCursor="true" :pagination="{
        dynamicBullets: true,
    }" :navigation="true" :modules="modules" class="swiper-wrapper pt-5 pb-5" id="testimonial-swiper">
        <swiper-slide class="testimonial-block">
            <div class="text-center testimonial-text mb-4">
                <p class="fw-bold testimonial-block-text">
                    “Minh's creative touch made our AV tech content engaging on
                    YouTube, which helps contributing to our channel's growth. His energy and ownership were
                    outstanding.”
                </p>
            </div>
            <div class="d-flex justify-content-center">
                <img class="rounded-circle testimonial-avatar img-fluid" src="/images/Huu_Van.png"
                    alt="Mr. Tran Huu Van">
            </div>
            <div class="text-center mt-4">
                <a href="#" class="author h5">Mr. Tran Huu Van</a>
                <p class="mt-3 h5">Founder of Pointer Clicker</p>
            </div>
        </swiper-slide>
        <swiper-slide class="testimonial-block">
            <div class="text-center testimonial-text mb-4">
                <p class="fw-bold testimonial-block-text">
                    “Minh excels in engaging script-building and demonstrates creativity in editing and visual
                    animation. His dedication and problem-solving skills are commendable.”
                </p>
            </div>
            <div class="d-flex justify-content-center">
                <img class="rounded-circle testimonial-avatar img-fluid" src="/images/Hung_Z.png"
                    alt="Mr. Hoang Mach Hung (Hung Z)">
            </div>
            <div class="text-center mt-4">
                <a href="#" class="author h5">Mr. Hoang Mach Hung (Hung Z)</a>
                <p class="mt-3 h5">Founder of JHGO Channel</p>
            </div>
        </swiper-slide>
        <swiper-slide class="testimonial-block">
            <div class="text-center testimonial-text mb-4">
                <p class="fw-bold testimonial-block-text">
                    “Minh’s team produced a neat, visually detailed video from ideation to completion. The content
                    is ideal for lead generation. His dynamic and supportive approach was invaluable.”
                </p>
            </div>
            <div class="d-flex justify-content-center">
                <img class="rounded-circle testimonial-avatar img-fluid" src="/images/Ngoc_Minh.png"
                    alt="Mr. Doan Ngoc Minh">
            </div>
            <div class="text-center mt-4">
                <a href="#" class="author h5">Mr. Doan Ngoc Minh</a>
                <p class="mt-3 h5">Founder of Pointer Clicker</p>
            </div>
        </swiper-slide>
    </swiper>
</template>
<style>
#testimonial-swiper .swiper-button-prev {
    margin-left: 20%;
}

#testimonial-swiper .swiper-button-next {
    margin-right: 20%;
}

#testimonial-swiper .swiper-button-disabled {
    display: none !important;
}

@media (max-width: 768px) {
    #testimonial-swiper .swiper-button-prev,
    #testimonial-swiper .swiper-button-next {
        display: none !important;
    }
}
</style>
<script lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import '../assets/testimonial.css';
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
};
</script>