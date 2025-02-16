<template>
    <div>
        <div class="profile-block">
            <div class="container-fluid p-0 m-0 profile-block-md">
                <div class="row before-header">
                    <div class="col-md-5 text-white d-flex align-items-center profile-parent-block">
                        <div v-motion :initial="{ opacity: 0, x: -100 }"
                            :visible-once="{ opacity: 1, x: 0 }" :delay="100" :duration="1000">
                            <div class="info-profile">
                                <div class="showreel-btn d-md-none-max">
                                    <a href="#">
                                        <img class="img-fluid" src="/svg/Vector.svg" alt="Showreel-btn">
                                    </a>
                                </div>
                                <div class="intro-line">
                                    <p>I help tell your greatness through the lens of bold <br> and creative storytelling
                                        through videos.</p>
                                </div>
                                <div class="row col-sm-auto">
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
                    <div id="title-works-works" v-motion :initial="{ opacity: 0, y: 100 }"
                        :visible-once="{ opacity: 1, y: 0 }" :delay="50" :duration="1000">
                        My Experience
                    </div>
                </div>
            </div>
            <div class="container-fluid m-0 p-0 works-collection">
                <!-- TVL Media -->
                <div class="overflow-hidden">
                    <div class="row m-0" v-motion :initial="{ opacity: 0, x: 100 }" :visible-once="{ opacity: 1, x: 0 }"
                        :delay="100" :duration="1000">
                        <div class="col-sm p-0 d-md-none-max d-md-block-max">
                            <div class="bg-img-block">
                                <img class="img-fluid" src="/images/Demonstrate.png" alt="PointerClicker">
                            </div>
                        </div>
                        <div class="col-xl p-0 d-md-block-mobile d-none-block-mobile logo-project-mobile">
                            <img class="img-fluid w-100" src="/images/Demonstrate.png" alt="PointerClicker">
                        </div>
                        <div class="col-sm p-0 description-works">
                            <div class="info-project-block">
                                <div class="text-uppercase display-3 pb-3 title-work">TVL Media</div>
                                <div class="h4 genre-description">
                                    <p>Videographer / Video Editor</p>
                                    <div class="border-line"></div>
                                </div>
                                <div class="pt-5 sub-description-works h4">
                                    Produce video products of Shark Thai Van Linh - a Vietnamese KOL on career growth and self development
                                </div>
                            </div>
                            <div class="read-more-block">
                                <img class="img-fluid" src="/images/Demonstrate_display.png" alt="TVL Media Info">
                                <a href="#"
                                    class="read-more-button read-more-button-left read-more-button-right-mobile">Read
                                    More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Pointer Clicker -->
                <div class="row m-0" v-motion :initial="{ opacity: 0, x: -100 }" :visible-once="{ opacity: 1, x: 0 }"
                    :delay="100" :duration="1000">
                    <div class="col-xl p-0 d-md-block-mobile d-none-block-mobile logo-project-mobile">
                        <img class="img-fluid w-100" src="/images/Demonstrate.png" alt="PointerClicker">
                    </div>
                    <div class="col-sm p-0 description-works">
                        <div class="info-project-block">
                            <div class="text-uppercase display-4 pb-3 title-work">Pointer Clicker</div>
                            <div class="h4 genre-description">
                                <p>Video Content Creator / Videographer</p>
                                <div class="border-line"></div>
                            </div>
                            <div class="pt-5 sub-description-works h4">
                                Produce edutaining YouTube videos from website AV tech content
                            </div>
                        </div>
                        <div class="read-more-block">
                            <img class="img-fluid" src="/images/Demonstrate_display.png" alt="Pointer Clicker Info">
                            <a href="#"
                                class="read-more-button read-more-button-center read-more-button-right-mobile">Read
                                More</a>
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
                    <div class="row m-0" v-motion :initial="{ opacity: 0, x: 100 }" :visible-once="{ opacity: 1, x: 0 }"
                        :delay="100" :duration="1000">
                        <div class="col-sm p-0 d-md-none-max d-md-block-max">
                            <div class="bg-img-block">
                                <img class="img-fluid" src="/images/Demonstrate.png" alt="PointerClicker">
                            </div>
                        </div>
                        <div class="col-xl p-0 d-md-block-mobile d-none-block-mobile logo-project-mobile">
                            <img class="img-fluid w-100" src="/images/Demonstrate.png" alt="PointerClicker">
                        </div>
                        <div class="col-sm p-0 description-works">
                            <div class="info-project-block">
                                <div class="text-uppercase display-3 pb-3 title-work">Arches</div>
                                <div class="h4 genre-description">
                                    <p>Social Media Content Creator</p>
                                    <div class="border-line"></div>
                                </div>
                                <div class="pt-5 sub-description-works h4">
                                    Create social media content for an APEC business consulting startup
                                </div>
                            </div>
                            <div class="read-more-block">
                                <img class="img-fluid" src="/images/Demonstrate_display.png" alt="JHGO Channel Info">
                                <a href="#"
                                    class="read-more-button read-more-button-left read-more-button-right-mobile">Read
                                    More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- All My Projects -->
            <div class="all-my-works" v-motion :initial="{ opacity: 0, y: 100 }" :visible-once="{ opacity: 1, y: 0 }"
                :delay="100" :duration="1000">
                <RouterLink to="/my-works" class="text-decoration-none" @click="scrollTop()">
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
<script lang="ts">
import '../assets/home-page.css'
import '../assets/show-reel.css'

import TestimonialBlock from '../components/TestimonialBlock.vue'
import FooterPage from '../components/FooterPage.vue'

export default {
    components: {
        FooterPage,
        TestimonialBlock
    },
    methods: {
        scrollTop() {
            window.scrollTo({ top: 0, left: 0, behavior: "instant" })
        }
    }
};
</script>