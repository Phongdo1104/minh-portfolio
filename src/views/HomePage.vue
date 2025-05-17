<template>
    <div>
        <div id="show-reel-video-block">
            <ShowReelVideo />
        </div>
        <div class="profile-block" id="enter-animation">
            <div>
                <div class="background-profile-container background-profile-color">
                </div>
                <div class="background-profile-video">
                    <video width="100%" autoplay muted loop preload="none" src="/videos/showreel-cut-1.mp4"></video>
                </div>
            </div>
            <div class="container-fluid p-0 m-0 profile-block-md">
                <div class="row before-header">
                    <div class="col-md-5 text-white d-flex align-items-center profile-parent-block">
                        <div v-motion :initial="{ opacity: 0, x: -100 }" :visible-once="{ opacity: 1, x: 0 }"
                            :delay="100" :duration="1000">
                            <div class="info-profile">
                                <div class="showreel-btn d-md-none-max">
                                    <span @click="displayShowreelVideo('showreel-container')">
                                        <img class="img-fluid" src="/svg/Vector.svg" alt="Showreel-btn">
                                    </span>
                                </div>
                                <div class="intro-line">
                                    <p class="body mobile-body">
                                        I help tell your greatness through the lens of <strong>bold</strong> and
                                        <i>creative</i> touch.
                                    </p>
                                </div>
                                <div class="row col-sm-auto">
                                    <div class="col">
                                        <RouterLink to="/about-me" class="text-decoration-none">
                                            <button id="about-me-btn" class="pt-2 pb-2 w-100 border border-2">
                                                About Me
                                            </button>
                                        </RouterLink>
                                    </div>
                                    <div class="col">
                                        <button id="contact-btn-profile"
                                            class="pt-2 pb-2 w-100 border border-2 border-dark"
                                            @click="scrollToView('footer-block')">
                                            Get In Touch
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md w-100 img-profile-block" v-motion :initial="{ opacity: 0, y: 100 }"
                        :visible-once="{ opacity: 1, y: 0 }" :delay="100" :duration="1000">
                        <img class="img-fluid profile-image" src="/images/profile-trim-remove-bg.png" alt="">
                    </div>
                </div>
            </div>
            <div class="marquee-profile-block" v-motion :initial="{ opacity: 0, x: 10 }" :enter="{ opacity: 1, x: 0 }"
                :delay="100" :duration="1000">
                <div class="marquee-info">
                    <div class="marquee-homepage branding-text text-center text-uppercase">
                        <p class="me-3 title-ex mobile-title-ex mobile-title">Minh nguyen | Video editor</p>
                        <p class="me-3 title-ex mobile-title-ex mobile-title">| Minh nguyen | Video editor</p>
                        <p class="me-3 title-ex mobile-title-ex mobile-title">| Minh nguyen | Video editor</p>
                    </div>
                </div>
            </div>
        </div>
        <div id="selected-works-block">
            <div id="view-btn-block">
                <RouterLink to="/my-projects" class="view-btn">
                    View
                </RouterLink>
            </div>
            <div class="title d-none d-md-block">
                <div class="text-center">
                    <div id="title-works-works" class="h1" v-motion :initial="{ opacity: 0, y: 100 }"
                        :visible-once="{ opacity: 1, y: 0 }" :delay="50" :duration="1000">
                        My Experience
                    </div>
                </div>
            </div>
            <div class="container-fluid m-0 p-0 works-collection">
                <!-- TVL Media -->
                <div class="overflow-hidden position-relative">
                    <!-- <div class="preview" id="tvl-media-preview">
                        <div class="tvl-preview-img preview-view-btn">
                        </div>
                    </div> -->
                    <div class="row m-0" v-motion :initial="{ opacity: 0, x: 100 }" :visible-once="{ opacity: 1, x: 0 }"
                        :delay="100" :duration="1000">
                        <div class="col-sm p-0 d-md-none-max d-md-block-max">
                            <div class="bg-img-block">
                                <img class="img-fluid" src="/images/Demonstrate.png" alt="TVL Media">
                            </div>
                        </div>
                        <div class="col-xl p-0 d-md-block-mobile d-none-block-mobile logo-project-mobile">
                            <img class="img-fluid w-100" src="/images/Demonstrate.png" alt="PointerClicker">
                        </div>
                        <div class="col-sm p-0 description-works">
                            <div class="info-project-block">
                                <div class="text-uppercase h2 pb-3 title-work mobile-h1">TVL Media</div>
                                <div class="genre-description">
                                    <p class="body mobile-body">Videographer / Video Editor</p>
                                    <div class="border-line"></div>
                                </div>
                                <div class="pt-5 sub-description-works body mobile-body">
                                    Produce video products of Shark Thai Van Linh - a Vietnamese KOL on career growth
                                    and self development
                                </div>
                            </div>
                            <div class="read-more-block">
                                <img class="img-fluid" src="/images/Demonstrate_display.png" alt="TVL Media Info">
                                <RouterLink to="/my-projects/talking-head"
                                    class="read-more-button read-more-button-right read-more-button-right-mobile"
                                    id="tvl-media-more">Read
                                    More</RouterLink>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Pointer Clicker -->
                <!-- <div>
                    <div class="preview" id="pointer-clicker-preview">
                        <div class="pointer-clicker-preview-img preview-view-btn">
                        </div>
                    </div>
                </div> -->
                <div class="row m-0" v-motion :initial="{ opacity: 0, x: -100 }" :visible-once="{ opacity: 1, x: 0 }"
                    :delay="100" :duration="1000">
                    <div class="col-xl p-0 d-md-block-mobile d-none-block-mobile logo-project-mobile">
                        <img class="img-fluid w-100" src="/images/Demonstrate.png" alt="Pointer Clicker">
                    </div>
                    <div class="col-sm p-0 description-works">
                        <div class="info-project-block">
                            <div class="text-uppercase h2 pb-3 title-work mobile-h1">Pointer Clicker</div>
                            <div class="genre-description">
                                <p class="body mobile-body">Video Content Creator / Videographer</p>
                                <div class="border-line"></div>
                            </div>
                            <div class="pt-5 sub-description-works body mobile-body">
                                Produce edutaining YouTube videos from website AV tech content
                            </div>
                        </div>
                        <div class="read-more-block">
                            <img class="img-fluid" src="/images/Demonstrate_display.png" alt="Pointer Clicker Info">
                            <RouterLink to="/my-projects/tech-guide"
                                class="read-more-button read-more-button-center read-more-button-right-mobile"
                                id="pointer-clicker-more">Read
                                More</RouterLink>
                        </div>
                    </div>
                    <div class="col-sm p-0 d-md-none-max d-md-block-max">
                        <div class="bg-img-block">
                            <img class="img-fluid" src="/images/Demonstrate.png" alt="PointerClicker">
                        </div>
                    </div>
                </div>
                <!-- ARCHES -->
                <div class="overflow-hidden">
                    <!-- <div class="preview" id="arches-preview">
                        <div class="arches-preview-img preview-view-btn">
                        </div>
                    </div> -->
                    <div class="row m-0" v-motion :initial="{ opacity: 0, x: 100 }" :visible-once="{ opacity: 1, x: 0 }"
                        :delay="100" :duration="1000">
                        <div class="col-sm p-0 d-md-none-max d-md-block-max">
                            <div class="bg-img-block">
                                <img class="img-fluid" src="/images/Demonstrate.png" alt="ARCHES">
                            </div>
                        </div>
                        <div class="col-xl p-0 d-md-block-mobile d-none-block-mobile logo-project-mobile">
                            <img class="img-fluid w-100" src="/images/Demonstrate.png" alt="PointerClicker">
                        </div>
                        <div class="col-sm p-0 description-works">
                            <div class="info-project-block">
                                <div class="text-uppercase pb-3 title-work h2 mobile-h1">Arches</div>
                                <div class="genre-description">
                                    <p class="body mobile-body">Social Media Content Creator</p>
                                    <div class="border-line"></div>
                                </div>
                                <div class="pt-5 sub-description-works body mobile-body">
                                    Create social media content for an APEC business consulting startup
                                </div>
                            </div>
                            <div class="read-more-block">
                                <img class="img-fluid" src="/images/Demonstrate_display.png" alt="JHGO Channel Info">
                                <RouterLink to="/my-projects/podcast-highlight"
                                    class="read-more-button read-more-button-right read-more-button-right-mobile"
                                    id="arches-preview-more">Read
                                    More</RouterLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- All My Projects -->
            <div class="all-my-works" v-motion :initial="{ opacity: 0, y: 100 }" :visible-once="{ opacity: 1, y: 0 }"
                :delay="100" :duration="1000">
                <RouterLink to="/my-projects" class="nav-link-txt-2 text-decoration-none" @click="scrollTopSmooth()">
                    <span>See My Works</span>
                </RouterLink>
            </div>
        </div>
        <!-- TestimonialBlock -->
        <div id="testimonial-block">
            <TestimonialBlock v-motion :initial="{ opacity: 0, y: 100 }" :visible-once="{ opacity: 1, y: 0 }"
                :variants="{ custom: { scale: 2 } }" :delay="100" :duration="1000" />
        </div>
        <!-- Footer -->
        <div id="footer-block">
            <FooterPage />
        </div>
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
<script lang="ts" setup>
import '../assets/home-page.css';
import '../assets/my-work-partials.css';
import { scrollTopSmooth, scrollToView } from '@/utils/utils';
import { displayShowreelVideo } from './../utils/showreelVideo';
import ShowReelVideo from './../components/ShowReelVideo.vue';

import TestimonialBlock from '../components/TestimonialBlock.vue';
import FooterPage from '../components/FooterPage.vue';

</script>