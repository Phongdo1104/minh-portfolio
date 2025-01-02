<script lang="ts" setup>
import '../assets/about-me.css'
import TestimonialBlock from '../components/TestimonialBlock.vue'
import FooterPage from '../components/FooterPage.vue'
</script>

<template>
    <div>
        <div class="desk-angle-1">
            <div class="container pb-5" id="about-me">
                <div class="row">
                    <div class="col-md mb-5"
                        v-motion
                        :initial="{ opacity: 0, y: 100 }"
                        :visible-once="{ opacity: 1, y: 0 }"
                        :delay="100"
                        :duration="1000"
                    >
                        <div class="position-relative d-flex justify-content-center">
                            <img class="avatar img-fluid" src="/images/minh2-edited.png" alt="MinhDarkBG" />
                            <h1
                                class="position-absolute text-white fw-bold display-1 text-overlay text-center text-uppercase">
                                About me
                            </h1>
                        </div>
                    </div>
                    <div class="col-md me-5"
                        v-motion
                        :initial="{ opacity: 0, y: 100 }"
                        :visible-once="{ opacity: 1, y: 0 }"
                        :delay="100"
                        :duration="1000"
                    >
                        <div class="text-white">
                            <div class="text-end" id="nameHeader">
                                <span class="fw-bold" id="fullName">Minh Nguyen</span>
                            </div>
                            <div class="nav-bar mt-4 mb-5"></div>
                            <div class="mb-5">
                                <p class="h5 fw-bold">
                                    Driven by a passion for digital branding, I am a 24-year-old self-taught social
                                    media video editor.
                                </p>
                            </div>
                            <div class="mb-5">
                                <p class="h5">
                                    My focus is on enhancing digital brands with creative professionalism rooted in
                                    clients' original stories.
                                </p>
                            </div>
                            <div class="mb-2">
                                <p class="h5">I am proficient in the following tools:</p>
                            </div>
                            <div class="row col-auto d-flex justify-content-start mb-5" id="tools">
                                <div class="col-auto">
                                    <img class="logo-tools img-fluid" src="/images/PRIcons.png" alt="PremierIcon" />
                                </div>
                                <div class="col-auto ms-3">
                                    <img class="logo-tools img-fluid" src="/images/AFIcons.png" alt="PremierIcon" />
                                </div>
                                <div class="col-auto ms-3">
                                    <img class="logo-tools img-fluid" src="/images/CapCut_logoIcons.png"
                                        alt="PremierIcon" />
                                </div>
                            </div>
                            <div class="mb-5 h5" id="experience">
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
                    <div class="col-sm text-center text-white video-editing-block ps-5 pe-5">
                        <div class="text-uppercase title-achievements h2">
                            Video Editing
                        </div>
                        <div class="achievements-count">4</div>
                        <div class="achievements-description h5">
                            Since 2020, I've self-taught and edited a range of videos, including tutorials,
                            documentaries, K.O.P., and TVCs.</div>
                    </div>
                    <div class="col-sm text-white d-flex align-items-center justify-content-center p-5">
                        <a href="#">
                            <img class="show-reel img-fluid" src="/svg/Showreel.svg" alt="showReelButton">
                        </a>
                    </div>
                    <div class="col-sm text-center text-white marketing-block ps-5 pe-5">
                        <div class="text-uppercase title-achievements h2">
                            Social Media Marketing
                        </div>
                        <div class="achievements-count">2</div>
                        <div class="achievements-description h5">
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
                    <p class="h1 me-3">Content Creation Visual Storytelling Flimmaking Video Editing Digital Branding
                        Backstage Professionalism Premiere Pro After Effects Cap Cut</p>
                    <p class="h1">Content Creation Visual Storytelling Flimmaking Video Editing Digital Branding
                        Backstage Professionalism Premiere Pro After Effects Cap Cut</p>
                </div>
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
</template>
