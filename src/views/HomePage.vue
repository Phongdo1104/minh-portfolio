<template>
    <div class="profile-block">
        <div class="container profile-block-md profile-block-mobile">
            <div class="row d-md-none-max d-flex-block-max">
                <div class="col-md-2 text-white d-flex align-items-center profile-parent-block">
                    <div class="position-relative w-100"
                        v-motion
                        :initial="{ opacity: 0, x: -100 }"
                        :visible-once="{ opacity: 1, x: 0 }"
                        :delay="100"
                        :duration="1000"
                    >
                        <div class="position-absolute info-profile">
                            <div>
                                <p>I am here to delivers high-quality social media videos for businesses looking to
                                    enhance
                                    their online
                                    presence with a focus on creativity and professionalism</p>
                            </div>
                            <div class="row col-sm-auto d-flex justify-content-start mt-3">
                                <div class="col-sm">
                                    <RouterLink to="/about-me" class="text-decoration-none">
                                        <button id="about-me-btn" class="pt-2 pb-2 w-100 fw-bold border border-2">
                                            About Me
                                        </button>
                                    </RouterLink>
                                </div>
                                <div class="col-sm">
                                    <RouterLink to="/contact-me" class="text-decoration-none">
                                        <button id="contact-btn-profile"
                                            class="pt-2 pb-2 w-100 fw-bold border border-2 border-dark">
                                            Get In Touch
                                        </button>
                                    </RouterLink>
                                </div>
                            </div>
                        </div>
                        <div class="showreel-btn-parent d-none d-md-block">
                            <a href="#">
                                <img class="showreel-btn" src="/svg/Showreel.svg" alt="Showreel-btn">
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-md img-profile-block"
                    v-motion
                    :initial="{ opacity: 0, x: 100 }"
                    :visible-once="{ opacity: 1, x: 0 }"
                    :delay="100"
                    :duration="1000"
                >
                    <img class="img-fluid" src="/images/Profile.png" alt="">
                </div>
            </div>
            <div class="mobile-introduction-block d-none-block-mobile d-md-block-max">
                <div class="w-100"
                    v-motion
                    :initial="{ opacity: 0, y: -100 }"
                    :visible-once="{ opacity: 1, y: 0 }"
                    :delay="100"
                    :duration="1000"
                >
                    <div class="info-profile">
                        <div>
                            <p>I am here to delivers high-quality social media videos for businesses looking to
                                enhance
                                their online
                                presence with a focus on creativity and professionalism</p>
                        </div>
                        <div class="container">
                            <div class="row d-flex justify-content-start mt-3">
                                <div class="col">
                                    <RouterLink to="/about-me" class="text-decoration-none">
                                        <button id="about-me-btn" class="pt-2 pb-2 w-100 fw-bold border border-2">
                                            About Me
                                        </button>
                                    </RouterLink>
                                </div>
                                <div class="col">
                                    <RouterLink to="/contact-me" class="text-decoration-none">
                                        <button id="contact-btn-profile"
                                            class="pt-2 pb-2 w-100 fw-bold border border-2 border-dark">
                                            Get In Touch
                                        </button>
                                    </RouterLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="showreel-btn-parent d-none d-md-block">
                        <img class="showreel-btn" src="/svg/Showreel.svg" alt="Showreel-btn">
                    </div>
                </div>
                <div class="col-md img-profile-block position-relative"
                    v-motion
                    :initial="{ opacity: 0, x: -100 }"
                    :visible-once="{ opacity: 1, x: 0 }"
                    :delay="100"
                    :duration="1000"
                >
                    <img class="img-fluid" src="/images/Minh_Mobile_Profile_No_Showreel.png" alt="">
                </div>
            </div>
        </div>
        <div class="marquee-profile-block"
            v-motion
            :initial="{ opacity: 0, x: 10 }"
            :enter="{ opacity: 1, x: 0 }"
            :delay="100"
            :duration="1000"
        >
            <div class="marquee-info">
                <div class="marquee-homepage branding-text text-center text-uppercase">
                    <p class="me-3">Minh nguyen | Video editor</p>
                    <p class="me-3">| Minh nguyen | Video editor</p>
                    <p class="me-3">| Minh nguyen | Video editor</p>
                </div>
            </div>
        </div>
    </div>
    <div id="selected-works-block">
        <div class="title d-none d-md-block">
            <div class="text-center">
                <div id="title-works-works"
                    v-motion
                    :initial="{ opacity: 0, y: 100 }"
                    :visible-once="{ opacity: 1, y: 0 }"
                    :delay="50"
                    :duration="1000"
                >
                    My Selected Works
                </div>
                <div id="sub-description"
                    v-motion
                    :initial="{ opacity: 0, y: 100 }"
                    :visible-once="{ opacity: 1, y: 0 }"
                    :delay="100"
                    :duration="1000"
                >
                    The great mission comes with its unique stories
                </div>
            </div>
        </div>
        <div class="container-fluid m-0 p-0 works-collection">
            <!-- Pointer Click -->
            <div class="overflow-hidden">
                <swiper :effect="'flip'" :grabCursor="true" :pagination="{
                        dynamicBullets: true,
                    }" :navigation="true" :modules="modules" class="swiper-wrapper-selected-project"
                    v-motion
                    :initial="{ opacity: 0, x: 100 }"
                    :visible-once="{ opacity: 1, x: 0 }"
                    :delay="100"
                    :duration="1000"
                >
                        <swiper-slide>
                            <div class="row m-0 h-100">
                                <div class="col-sm p-0 d-md-none-max d-md-block-max">
                                    <div class="bg-img-block">
                                        <img class="img-fluid" src="/images/PointerClicker.png" alt="PointerClicker">
                                    </div>
                                </div>
                                <div class="col-xl p-0 d-md-block-mobile d-none-block-mobile logo-project-mobile">
                                    <img class="img-fluid w-100" src="/images/PointerClicker.png" alt="PointerClicker">
                                </div>
                                <div class="col-sm p-0 description-works">
                                    <div class="pointer-clicker-info-project-block mobile-info-block">
                                        <div class="text-uppercase display-3 pb-5 title-work">Pointer Clicker</div>
                                        <div class="h4 genre-description-pointer">
                                            <div class="text-uppercase">Visual Storytelling / Creative Direction / Video
                                                Production
                                            </div>
                                        </div>
                                        <div class="pt-5 sub-description-works h4">
                                            Produce edutaining YouTube videos from website AV tech content
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="row m-0 h-100">
                                <div class="col-sm-7 p-0 d-md-none-max d-md-block-max">
                                    <div id="pointer-click-brief-info-block">
                                        <img class="img-fluid" src="/images/PointerClicker_brief_1.75x.jpg"
                                            alt="PointerClicker">
                                    </div>
                                </div>
                                <div class="col-xl p-0 d-md-block-mobile d-none-block-mobile logo-project-mobile">
                                    <img class="img-fluid w-100" src="/images/PointerClicker.png" alt="PointerClicker">
                                </div>
                                <div class="col-sm-5 p-0 description-works">
                                    <div class="pointer-clicker-info-project-block mobile-info-block">
                                        <div class="text-uppercase display-3 black-text-color-title">Brief</div>
                                        <div class="pt-5 sub-description-works h4">
                                            Effectively conveys blog content into the edutaining YouTube videos
                                        </div>
                                        <div class="pt-5 h4 genre-description-pointer">
                                            <div>And this is how I execute it
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="row m-0 h-100">
                                <div class="col-sm p-0 d-md-none-max d-md-block-max" id="pointer-review-info-bg">
                                </div>
                                <div class="col-xl p-0 d-md-block-mobile d-none-block-mobile logo-project-mobile">
                                    <img class="img-fluid w-100" src="/images/PointerClicker.png" alt="PointerClicker">
                                </div>
                                <div class="col-sm p-0 description-works">
                                    <div class="review-info-project-block mobile-info-block-review">
                                        <div class="text-uppercase display-3 pb-5 black-text-color-title">Tutorial / Review
                                        </div>
                                        <div class="h4 genre-description-pointer">
                                            <span>Mood & Tone:</span> Energetic, Edutaining
                                        </div>
                                        <div class="h4 genre-description-pointer">
                                            <span>Editing Style:</span> Fast-Paced, Montage-Driven
                                        </div>
                                        <div class="h4 genre-description-pointer">
                                            <span>Channel:</span> YouTube
                                        </div>
                                    </div>
                                    <div class="read-more-block">
                                        <img class="img-fluid" src="/images/PointerClicker_Team.png" alt="POINTER CLICKER TEAM">
                                        <a href="#"
                                            class="read-more-button read-more-button-left read-more-button-right-mobile">Read
                                            More</a>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                </swiper>
            </div>
            <!-- ARCHES -->
            <div class="row m-0"
                v-motion
                :initial="{ opacity: 0, x: -100 }"
                :visible-once="{ opacity: 1, x: 0 }"
                :delay="100"
                :duration="1000"
            >
                <div class="col-xl p-0 d-md-block-mobile d-none-block-mobile logo-project-mobile">
                    <img class="img-fluid w-100" src="/images/ARCHES.png" alt="PointerClicker">
                </div>
                <div class="col-sm p-0 description-works">
                    <div class="arches-project">
                        <div class="text-uppercase display-4 pb-5 title-work">Arches</div>
                        <div class="h4 genre-description-arches">
                            <div class="text-uppercase">Brand Promotion / Video Production / Content Creation</div>
                        </div>
                        <div class="pt-5 sub-description-works h4">
                            Highlight Arches employees' stories visually to enhance brand presence on LinkedIn
                        </div>
                    </div>
                    <div class="read-more-block">
                        <img class="img-fluid" src="/images/ARCHES_TEAM.png" alt="ARCHES TEAM">
                        <a href="#" class="read-more-button read-more-button-center read-more-button-right-mobile">Read
                            More</a>
                    </div>
                </div>
                <div class="col-sm p-0 d-md-none-max d-md-block-max">
                    <div class="bg-img-block">
                        <img class="img-fluid" src="/images/ARCHES.png" alt="PointerClicker">
                    </div>
                </div>
            </div>
            <!-- JHGO Channel -->
            <div class="overflow-hidden">
                <div class="row m-0"
                    v-motion
                    :initial="{ opacity: 0, x: 100 }"
                    :visible-once="{ opacity: 1, x: 0 }"
                    :delay="100"
                    :duration="1000"
                >
                    <div class="col-sm p-0 d-md-none-max d-md-block-max">
                        <div class="bg-img-block">
                            <img class="img-fluid" src="/images/JHGO.png" alt="PointerClicker">
                        </div>
                    </div>
                    <div class="col-xl p-0 d-md-block-mobile d-none-block-mobile logo-project-mobile">
                        <img class="img-fluid w-100" src="/images/JHGO.png" alt="PointerClicker">
                    </div>
                    <div class="col-sm p-0 description-works">
                        <div class="info-project-block">
                            <div class="text-uppercase display-3 pb-5 title-work">JHGO Channel</div>
                            <div class="h4 genre-description">
                                <div class="text-uppercase">Content Creation / Video Production / Scriptwriting</div>
                            </div>
                            <div class="pt-5 sub-description-works h4">
                                Produce engaging historical and discovery videos to build JHGO's YouTube community
                            </div>
                        </div>
                        <div class="read-more-block">
                            <img class="img-fluid" src="/images/JHGO_TEAM.png" alt="JHGO CHANNEL TEAM">
                            <a href="#" class="read-more-button read-more-button-left read-more-button-right-mobile">Read
                                More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- All My Projects -->
        <div class="all-my-works"
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :visible-once="{ opacity: 1, y: 0 }"
            :delay="100"
            :duration="1000"
        >
            <RouterLink to="/my-works" class="text-decoration-none" @click="scrollTop()">
                <span>All My Projects</span>
            </RouterLink>
        </div>
    </div>
    <!-- TestimonialBlock -->
    <div id="testimonial-block">
        <TestimonialBlock
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :visible-once="{ opacity: 1, y: 0 }"
            :variants="{ custom: { scale: 2 } }"
            :delay="100"
            :duration="1000"
        />
    </div>
    <!-- Footer -->
    <div id="footer-block">
        <FooterPage />
    </div>
</template>
<style>
.swiper-wrapper-selected-project .swiper-slide {
    height: auto;
}

.swiper-wrapper-selected-project .swiper-button-prev,
.swiper-wrapper-selected-project .swiper-button-next {
    display: none;
}

.swiper-wrapper-selected-project .swiper-button-disabled {
    display: none !important;
}
</style>
<script lang="ts">
import '../assets/home-page.css'
import '../assets/show-reel.css'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';

import TestimonialBlock from '../components/TestimonialBlock.vue'
import FooterPage from '../components/FooterPage.vue'

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
        FooterPage,
        TestimonialBlock
    },
    setup() {
        return {
            modules: [Pagination, Navigation],
        };
    },
    methods: {
        scrollTop() {
            window.scrollTo({ top: 0, left: 0, behavior: "instant" })
        }
    }
};
</script>