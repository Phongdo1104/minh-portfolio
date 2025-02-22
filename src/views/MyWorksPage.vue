<script setup lang="ts">
import '../assets/my-works.css';
import MyWorkCollection from '../components/MyWorkCollection.vue'
import FooterPage from '../components/FooterPage.vue'

function scrollToView(refName: string) {
    const element = document.getElementById(refName)
    element?.scrollIntoView({ behavior: "smooth" });
}

</script>
<template>
    <div>
        <div class="workspace">
            <div class="container">
                <div class="row before-header">
                    <div class="text-white col-sm">
                        <div v-motion :initial="{ opacity: 0, y: 50 }" :visible-once="{ opacity: 1, y: 0 }" :delay="50"
                            :duration="1000">
                            <p class="text-uppercase my-works">My Works</p>
                        </div>
                        <div v-motion :initial="{ opacity: 0, y: 100 }" :visible-once="{ opacity: 1, y: 0 }"
                            :delay="100" :duration="1000">
                            <p class="h5">
                                <strong>Since 2022</strong>, I've experienced <strong>planning, shooting, and
                                    editing</strong> a range of <strong>small and medium
                                    video projects</strong>, including long-and-short formed YouTube videos, TVCs, and
                                other social
                                media content.
                            </p>
                        </div>
                    </div>
                    <div class="col-sm text-end h4" v-motion :initial="{ opacity: 0, y: 100 }"
                        :visible-once="{ opacity: 1, y: 0 }" :delay="100" :duration="1000">
                        <div class="row">
                            <div class="col">
                                <div class="works-header">
                                    <div class="pt-4">
                                        <span @click="scrollToView('tutorial-video')"
                                            class="text-white text-decoration-none">Tutorial</span>
                                    </div>
                                    <div class="pt-4">
                                        <span @click="scrollToView('documentary-block')"
                                            class="text-white text-decoration-none">Event Recap</span>
                                    </div>
                                    <div class="pt-4">
                                        <span @click="scrollToView('tvc-video')"
                                            class="text-white text-decoration-none">T.V.C</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="works-header">
                                    <div class="pt-4">
                                        <span @click="scrollToView('showreel-block')"
                                            class="text-white text-decoration-none">Showreel</span>
                                    </div>
                                    <div class="pt-4">
                                        <span @click="scrollToView('podcast-highlight')"
                                            class="text-white text-decoration-none">Podcast Highlights</span>
                                    </div>
                                    <div class="pt-4">
                                        <span @click="scrollToView('kop-video')"
                                            class="text-white text-decoration-none">K.O.P</span>
                                    </div>
                                    <div class="pt-4">
                                        <span @click="scrollToView('short-video')"
                                            class="text-white text-decoration-none">Street Videography</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="scroll-text">
                <div class="marquee branding-text text-center text-uppercase" v-motion :initial="{ opacity: 0, x: 10 }"
                    :enter="{ opacity: 1, x: 0 }" :delay="100" :duration="1000">
                    <p class="h1 me-3">Content Creation Visual Storytelling Flimmaking Video Editing Digital Branding
                        Backstage Professionalism Premiere Pro After Effects Cap Cut</p>
                    <p class="h1">Content Creation Visual Storytelling Flimmaking Video Editing Digital Branding
                        Backstage Professionalism Premiere Pro After Effects Cap Cut</p>
                </div>
            </div>
        </div>
        <MyWorkCollection />
        <!-- Footer -->
        <div id="footer-block">
            <FooterPage />
        </div>
    </div>
</template>