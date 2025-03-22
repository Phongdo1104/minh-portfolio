<script lang="ts" setup>
import '../assets/about-me.css'
import TestimonialBlock from '../components/TestimonialBlock.vue'
import FooterPage from '../components/FooterPage.vue'
import ShowReelVideo from '../components/ShowReelVideo.vue';

import { displayShowreelVideo } from './../utils/showreelVideo';
</script>

<template>
    <div>
        <div id="show-reel-video-block">
            <ShowReelVideo />
        </div>
        <div class="desk-angle-1" id="enter-animation">
            <div class="container" id="about-me">
                <div class="row before-header">
                    <div class="col-md about-me-info-block"
                        v-motion
                        :initial="{ opacity: 0, y: 100 }"
                        :visible-once="{ opacity: 1, y: 0 }"
                        :delay="100"
                        :duration="1000"
                    >
                        <div class="position-relative d-flex justify-content-center">
                            <img class="avatar img-fluid" src="/images/minh2-edited-v2.png" alt="MinhDarkBG" />
                            <h1
                                class="fw-bold display-1 text-overlay">
                                About me
                            </h1>
                        </div>
                    </div>
                    <div class="col-md"
                        v-motion
                        :initial="{ opacity: 0, y: 100 }"
                        :visible-once="{ opacity: 1, y: 0 }"
                        :delay="100"
                        :duration="1000"
                    >
                        <div class="about-me-info">
                            <div class="text-start" id="nameHeader">
                                <span class="fw-bold h1 mobile-h1-ex" id="fullName">Minh Ng.</span>
                            </div>
                            <div class="nav-bar mt-4 mb-5"></div>
                            <div class="mb-5 body mobile-body">
                                <p>
                                    Driven by a passion for digital branding, I am a 24-year-old self-taught social
                                    media video editor.
                                </p>
                            </div>
                            <div class="mb-5 body mobile-body" id="experience">
                                <p>Until 2024, I have gained 4 years of experience in the following areas:</p>
                                <ul class="fw-bold">
                                    <li class="mb-2">Video production & editing</li>
                                    <li class="mb-2">Social media marketing</li>
                                    <li class="mb-2">Filmmaking & backstage work</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="achievements" class="row"
                    v-motion
                    :initial="{ opacity: 0, y: 100 }"
                    :visible-once="{ opacity: 1, y: 0 }"
                    :delay="100"
                    :duration="1000"
                >
                    <div class="col-md text-center text-white video-editing-block">
                        <div class="title-achievements h3">
                            Video Editing
                        </div>
                        <div class="achievements-count h1">4</div>
                        <div class="achievements-description body mobile-body">
                            Since 2020, I've self-taught and edited a range of videos, including tutorials,
                            documentaries, K.O.P., and TVCs.</div>
                    </div>
                    <div class="col-md show-reel-display-btn">
                        <span href="#" id="showreel-btn-svg" @click="displayShowreelVideo('showreel-container')">
                            <img class="show-reel img-fluid" src="/svg/Vector.svg" alt="showReelButton">
                        </span>
                    </div>
                    <div class="col-md text-center text-white marketing-block">
                        <div class="title-achievements h3">
                            Social Media Marketing
                        </div>
                        <div class="achievements-count h1">2</div>
                        <div class="achievements-description body mobile-body">
                            In 2022, I started as a SM marketer and centered my creativity based on understanding SNS
                            platforms
                        </div>
                    </div>
                </div>
            </div>
            <div id="scroll-text">
                <div class="marquee branding-text text-center text-uppercase overflow-hidden"
                    v-motion
                    :initial="{ opacity: 0, x: 10 }"
                    :visible-once="{ opacity: 1, x: 0 }"
                    :delay="100"
                    :duration="1000"
                >
                    <p class="me-3">Content Creation Visual Storytelling Flimmaking Video Editing Digital Branding
                        Backstage Professionalism Premiere Pro After Effects Cap Cut</p>
                    <p>Content Creation Visual Storytelling Flimmaking Video Editing Digital Branding
                        Backstage Professionalism Premiere Pro After Effects Cap Cut</p>
                </div>
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
    </div>
</template>
