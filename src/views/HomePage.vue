<template>
    <div>
        <div class="profile-block">
            <div class="container-fluid p-0 m-0 profile-block-md">
                <div class="row before-header">
                    <div class="col-md-5 text-white d-flex align-items-center profile-parent-block">
                        <div v-motion :initial="{ opacity: 0, x: -100 }" :visible-once="{ opacity: 1, x: 0 }"
                            :delay="100" :duration="1000">
                            <div class="info-profile">
                                <div class="showreel-btn d-md-none-max">
                                    <a href="#">
                                        <img class="img-fluid" src="/svg/Vector.svg" alt="Showreel-btn">
                                    </a>
                                </div>
                                <div class="intro-line">
                                    <p>I help tell your greatness through the lens of bold <br> and creative
                                        storytelling
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
            <div id="view-btn-block">
                <RouterLink to="/my-works" class="view-btn">
                    View
                </RouterLink>
            </div>
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
                <div class="overflow-hidden position-relative">
                    <div class="preview" id="tvl-media-preview">
                        <div class="tvl-preview-img preview-view-btn">
                        </div>
                    </div>
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
                                    Produce video products of Shark Thai Van Linh - a Vietnamese KOL on career growth
                                    and self development
                                </div>
                            </div>
                            <div class="read-more-block">
                                <img class="img-fluid" src="/images/Demonstrate_display.png" alt="TVL Media Info">
                                <span class="read-more-button read-more-button-right read-more-button-right-mobile"
                                    id="tvl-media-more" @mousemove="moveProjectTvl">Read
                                    More</span>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Pointer Clicker -->
                <div>
                    <div class="preview" id="pointer-clicker-preview">
                        <div class="pointer-clicker-preview-img preview-view-btn">
                        </div>
                    </div>
                </div>
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
                            <span class="read-more-button read-more-button-center read-more-button-right-mobile"
                                id="pointer-clicker-more" @mousemove="moveProjectPointerClicker">Read
                                More</span>
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
                    <div class="preview" id="arches-preview">
                        <div class="arches-preview-img preview-view-btn">
                        </div>
                    </div>
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
                                <span class="read-more-button read-more-button-right read-more-button-right-mobile"
                                    id="arches-preview-more" @mousemove="moveProjectArches">Read
                                    More</span>
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
<script lang="ts" setup>
import '../assets/home-page.css';
import '../assets/show-reel.css';
import { gsap } from "gsap";

import TestimonialBlock from '../components/TestimonialBlock.vue';
import FooterPage from '../components/FooterPage.vue';
import { truncateSync } from 'fs';

function scrollTop() {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" })
}

let isInside = false;

const moveStuff = (e: any, targetStr: any, containerStr: any) => {
    const targetElement = document.getElementById(targetStr);
    const containerElement = document.getElementById(containerStr);
    const viewBtn = document.getElementById('view-btn-block');

    if (!containerElement || !targetElement || !viewBtn) return;

    let insideContainer = containerElement.matches(':hover');

    if (insideContainer !== isInside) {
        isInside = insideContainer;
        if (isInside) {
            gsap.to(targetElement, {
                scale: 1
            });
            gsap.to(viewBtn, {
                scale: 1
            });
        } else {
            gsap.to(targetElement, {
                scale: 0
            })
            gsap.to(viewBtn, {
                scale: 0
            });
        }
    }
}

const moveProject = (e: any, containerStr: any) => {
    const previewTarget = document.getElementById(containerStr);
    if (!previewTarget) return;

    const previewRect = previewTarget.getBoundingClientRect();
    const offsetX = previewRect.width / 2;
    const offsetY = previewRect.height / 2;

    previewTarget.style.left = e.clientX - offsetX + "px";
    previewTarget.style.top = e.clientY - offsetY + "px";
}

const moveViewButton = (e: any, url: string) => {
    const viewBtn = document.getElementById('view-btn-block');
    if (!viewBtn) return;

    const viewBtnRect = viewBtn.getBoundingClientRect();
    const offsetX = viewBtnRect.width / 2;
    const offsetY = viewBtnRect.height / 2;

    viewBtn.style.left = e.clientX + "px";
    viewBtn.style.top = e.clientY + "px";
    console.log(viewBtn.style.left, viewBtn.style.top);
}

const displayPreviewImg = (e: any) => {
    let id = e.srcElement.id;
    switch (id) {
        case 'tvl-media-more':
            moveStuff(e, 'tvl-media-preview', 'tvl-media-more');
            break;

        case 'pointer-clicker-more':
            moveStuff(e, 'pointer-clicker-preview', 'pointer-clicker-more');
            break;

        case 'arches-preview-more':
            moveStuff(e, 'arches-preview', 'arches-preview-more');
            break;

        default:
            handleHidePreviewImg();
            break;
    }
}

const handleHidePreviewImg = () => {
    const tvlMediaPreview = document.getElementById('tvl-media-preview');
    const pointerClickerPreview = document.getElementById('pointer-clicker-preview');
    const archesPreview = document.getElementById('arches-preview');
    const viewBtn = document.getElementById('view-btn-block');

    if (tvlMediaPreview && tvlMediaPreview.style.scale !== '0') {
        gsap.to(tvlMediaPreview, {
            scale: 0
        })
    }

    if (pointerClickerPreview && pointerClickerPreview.style.scale !== '0') {
        gsap.to(pointerClickerPreview, {
            scale: 0
        })
    }

    if (archesPreview && archesPreview.style.scale !== '0') {
        gsap.to(archesPreview, {
            scale: 0
        })
    }

    if (viewBtn && viewBtn.style.scale !== '0') {
        gsap.to(viewBtn, {
            scale: 0
        })
    }
    isInside = false;
}

const moveProjectTvl = (e: any) => {
    moveProject(e, 'tvl-media-preview');
    // moveViewButton(e, '');
}
const moveProjectPointerClicker = (e: any) => {
    moveProject(e, 'pointer-clicker-preview');
}
const moveProjectArches = (e: any) => {
    moveProject(e, 'arches-preview');
}

window.addEventListener('mousemove', displayPreviewImg);
</script>