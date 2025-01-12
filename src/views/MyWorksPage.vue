<script setup lang="ts">
import { reactive } from 'vue';
import '../assets/my-works.css';
import MyWorkCollection from '../components/MyWorkCollection.vue'
import FooterPage from '../components/FooterPage.vue'

let showCollection: any = reactive({
    value: false
});

function scrollToView(refName: string) {
    const element = document.getElementById(refName)
    element?.scrollIntoView({ behavior: "smooth" });
}

window.onscroll = () => {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        showCollection.value = true;
    }
}
</script>
<template>
    <div>
        <div class="workspace">
            <div class="container">
                <div class="row">
                    <div class="text-white col-sm">
                        <div
                            v-motion
                            :initial="{ opacity: 0, y: 50 }"
                            :visible-once="{ opacity: 1, y: 0 }"
                            :delay="50"
                            :duration="1000"
                        >
                            <p class="text-uppercase my-works">My Works</p>
                        </div>
                        <div
                            v-motion
                            :initial="{ opacity: 0, y: 100 }"
                            :visible-once="{ opacity: 1, y: 0 }"
                            :delay="100"
                            :duration="1000"
                        >
                            <p class="h5">
                                Since 2020, I've self-taught and edited a range of videos, including tutorials,
                                documentaries, K.O.P., TVCs, and short movies
                            </p>
                        </div>
                    </div>
                    <div class="col-sm text-end h4"
                        v-motion
                        :initial="{ opacity: 0, y: 100 }"
                        :visible-once="{ opacity: 1, y: 0 }"
                        :delay="100"
                        :duration="1000"
                    >
                        <div class="row">
                            <div class="col">
                                <div class="works-header">
                                    <div class="pt-4">
                                        <a href="#" @click="scrollToView('tutorial-video')"
                                            class="text-white text-decoration-none">Tutorial</a>
                                    </div>
                                    <div class="pt-4">
                                        <a href="#" @click="scrollToView('documentary-block')"
                                            class="text-white text-decoration-none">Documentary</a>
                                    </div>
                                    <div class="pt-4">
                                        <a href="#" @click="scrollToView('tvc-video')"
                                            class="text-white text-decoration-none">T.V.C</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="works-header">
                                    <div class="pt-4">
                                        <a href="#" @click="scrollToView('showreel-block')"
                                            class="text-white text-decoration-none">Showreel</a>
                                    </div>
                                    <div class="pt-4">
                                        <a href="#" @click="scrollToView('podcast-highlight')"
                                            class="text-white text-decoration-none">Podcast Highlights</a>
                                    </div>
                                    <div class="pt-4">
                                        <a href="#" @click="scrollToView('kop-video')"
                                            class="text-white text-decoration-none">K.O.P</a>
                                    </div>
                                    <div class="pt-4">
                                        <a href="#" @click="scrollToView('short-video')"
                                            class="text-white text-decoration-none">Short Movie</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="scroll-text">
                <div class="marquee branding-text text-center text-uppercase"
                    v-motion
                    :initial="{ opacity: 0, x: 10 }"
                    :enter="{ opacity: 1, x: 0 }"
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
        <MyWorkCollection />
        <!-- Footer -->
        <div id="footer-block">
            <FooterPage />
        </div>
    </div>
</template>