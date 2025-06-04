<script setup lang="ts">
import '../assets/my-works.css';
import FooterPage from '../components/FooterPage.vue'

</script>
<template>
    <div>
        <div class="workspace" id="enter-animation">
            <div class="container">
                <div class="before-header under-border">
                    <div class="text-white col-sm" id="my-works-desc">
                        <div v-motion :initial="{ opacity: 0, y: 50 }" :visible-once="{ opacity: 1, y: 0 }"
                            :duration="1000">
                            <h1 class="text-uppercase my-works title mobile-title">My Works</h1>
                        </div>
                        <div v-motion :initial="{ opacity: 0, y: 100 }" :visible-once="{ opacity: 1, y: 0 }"
                            :delay="50" :duration="1000">
                            <p class="body mobile-body description-work">
                                <strong>Since 2022</strong>, I've experienced <strong>planning, shooting, and
                                    editing</strong> a range of <strong>small and medium
                                    video projects</strong>, including long-and-short formed YouTube videos, TVCs, and
                                other social
                                media content.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="border-line w-100" v-motion :initial="{ opacity: 0 }" :visible-once="{ opacity: 1 }" :delay="100"
                            :duration="1000"></div>
                <div id="my-works-collection">
                    <div class="flex-block-parent">
                        <div class="row flex-works-reverse">
                            <div id="showreel-block" class="col-sm work-block-content" v-motion
                                :initial="{ opacity: 0, y: 50 }" :visible-once="{ opacity: 1, y: 0 }" :delay="50"
                                :duration="800">
                                <RouterLink to="/my-projects/showreel" class="text-uppercase h2 mobile-h2 works-highlight">
                                    <span>Showreel</span>
                                </RouterLink>
                                <p class="body mobile-body desc-work-display">The trailer capturing my edited videos in 2024</p>
                            </div>
                            <div id="tvc-block" class="col-sm work-block-content" v-motion :initial="{ opacity: 0, y: 50 }"
                                :visible-once="{ opacity: 1, y: 0 }" :delay="75" :duration="800">
                                <RouterLink to="/my-projects/tvc" class="text-uppercase h2 mobile-h2">
                                    <span>T.V.C</span>
                                </RouterLink>
                                <p class="body mobile-body desc-work-display">The motion graphics TVC marked the collaboration of LivWell
                                    and TVL Media</p>
                            </div>
                        </div>
                        <div class="row flex-works-reverse">
                            <div id="highlight-reel" class="col-sm work-block-content" v-motion
                                :initial="{ opacity: 0, y: 50 }" :visible-once="{ opacity: 1, y: 0 }" :delay="100"
                                :duration="800">
                                <RouterLink to="/my-projects/highlight-reel" class="text-uppercase h2 mobile-h2">
                                    <span>Highlight reel</span>
                                </RouterLink>
                                <p class="body mobile-body desc-work-display">A campaign highlights marked 15-year anniversary of FPT's
                                    community fund</p>
                            </div>
                            <div id="event-recap" class="col-sm work-block-content" v-motion :initial="{ opacity: 0, y: 50 }"
                                :visible-once="{ opacity: 1, y: 0 }" :delay="125" :duration="800">
                                <RouterLink to="/my-projects/event-recap" class="text-uppercase h2 mobile-h2">
                                    <span>Event recap</span>
                                </RouterLink>
                                <p class="body mobile-body desc-work-display">The recap video of a KOL in Huawei's product launching </p>
                            </div>
                        </div>
                        <div class="row flex-works-reverse">
                            <div id="talking-head" class="col-sm work-block-content" v-motion :initial="{ opacity: 0, y: 50 }"
                                :visible-once="{ opacity: 1, y: 0 }" :delay="150" :duration="800">
                                <RouterLink to="/my-projects/talking-head" class="text-uppercase h2 mobile-h2">
                                    <span>Talking head</span>
                                </RouterLink>
                                <p class="body mobile-body desc-work-display">The video on the career development in the collaboration
                                    between Huawei and TVL Media </p>
                            </div>
                            <div id="tech-guide" class="col-sm work-block-content" v-motion :initial="{ opacity: 0, y: 50 }"
                                :visible-once="{ opacity: 1, y: 0 }" :delay="175" :duration="800">
                                <RouterLink to="/my-projects/tech-guide" class="text-uppercase h2 mobile-h2">
                                    <span>Tech guide</span>
                                </RouterLink>
                                <p class="body mobile-body desc-work-display">The case of an AV Tech YouTube channel I had built</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Footer -->
        <div id="footer-block">
            <FooterPage />
        </div>
    </div>
</template>