<script setup lang="ts">
import '../assets/my-works.css';
import MyWorkBlock from '../components/MyWorkBlock.vue';
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
        <div id="my-work-collection">
            <div>
                <MyWorkBlock
                    workTitle="2024 Showreel"
                    roleBgClass="showreel"
                    businessObjBgSrc="/images/MyWorks/ShowReel_Info.png"
                    workInfoBgClass="showreel"
                    id="showreel-block"
                    myBgDescription='CornPress is an internet publisher with a diverse<br>portfolio of websites, including <a href="#">Pointer Clicker</a>'
                    myRoleDescription='Creative Direction / Video Editing / <br> Motion Design / Sound Design'
                    businessObj='Convert the web content from Pointer Clicker into<br>engaging YouTube videos, focusing on both channel<br>growth and producing edutaining content'
                    videoTypeDesc="Showreel"
                    moodToneDesc="Energetic, Epic Cinematic"
                    editingStyleDesc='Cinematic Aesthetic, <span class="d-none d-md-inline">Fast-Paced</span><span class="d-md-none d-block">Fast-Paced</span>'
                    platformDesc='---'
                />
            </div>
            <div>
                <MyWorkBlock
                    workTitle="Tutorial Video"
                    roleBgClass="tutorial-bg"
                    businessObjBgSrc="/images/MyWorks/TutorialBgBusiness.png"
                    workInfoBgClass="tutorial-challenge-editing"
                    id="tutorial-video"
                    myBgDescription='CornPress is an internet publisher with a diverse<br>portfolio of websites, including <a href="#">Pointer Clicker</a>'
                    myRoleDescription='Creative Direction / Video Editing / <br> Motion Design / Sound Design'
                    businessObj='Convert the web content from Pointer Clicker into<br>engaging YouTube videos, focusing on both channel<br>growth and producing edutaining content'
                    videoTypeDesc="Showreel"
                    moodToneDesc="Energetic, Epic Cinematic"
                    editingStyleDesc='Cinematic Aesthetic, <span class="d-none d-md-inline">Fast-Paced</span><span class="d-md-none d-block">Fast-Paced</span>'
                    platformDesc='---'
                />
            </div>
            <div>
                <MyWorkBlock
                    workTitle="Podcast Highlights"
                    roleBgClass="podcast-bg"
                    businessObjBgSrc="/images/MyWorks/PodcastHighlightBg.png"
                    workInfoBgClass="podcast-bg"
                    id="podcast-highlight"
                    myBgDescription='CornPress is an internet publisher with a diverse<br>portfolio of websites, including <a href="#">Pointer Clicker</a>'
                    myRoleDescription='Creative Direction / Video Editing / <br> Motion Design / Sound Design'
                    businessObj='Convert the web content from Pointer Clicker into<br>engaging YouTube videos, focusing on both channel<br>growth and producing edutaining content'
                    videoTypeDesc="Showreel"
                    moodToneDesc="Energetic, Epic Cinematic"
                    editingStyleDesc='Cinematic Aesthetic, <span class="d-none d-md-inline">Fast-Paced</span><span class="d-md-none d-block">Fast-Paced</span>'
                    platformDesc='---'
                />
            </div>
            <div>
                <MyWorkBlock
                    workTitle="Documentary"
                    roleBgClass="documentary-bg"
                    businessObjBgSrc="/images/MyWorks/DocumentaryBg.png"
                    workInfoBgClass="documentary-bg"
                    id="documentary-block"
                    myBgDescription='CornPress is an internet publisher with a diverse<br>portfolio of websites, including <a href="#">Pointer Clicker</a>'
                    myRoleDescription='Creative Direction / Video Editing / <br> Motion Design / Sound Design'
                    businessObj='Convert the web content from Pointer Clicker into<br>engaging YouTube videos, focusing on both channel<br>growth and producing edutaining content'
                    videoTypeDesc="Showreel"
                    moodToneDesc="Energetic, Epic Cinematic"
                    editingStyleDesc='Cinematic Aesthetic, <span class="d-none d-md-inline">Fast-Paced</span><span class="d-md-none d-block">Fast-Paced</span>'
                    platformDesc='---'
                />
            </div>
            <div>
                <MyWorkBlock
                    workTitle="TVC Video"
                    roleBgClass="tvc-bg"
                    businessObjBgSrc="/images/MyWorks/TVCBg.png"
                    workInfoBgClass="tvc-bg"
                    id="tvc-video"
                    myBgDescription='CornPress is an internet publisher with a diverse<br>portfolio of websites, including <a href="#">Pointer Clicker</a>'
                    myRoleDescription='Creative Direction / Video Editing / <br> Motion Design / Sound Design'
                    businessObj='Convert the web content from Pointer Clicker into<br>engaging YouTube videos, focusing on both channel<br>growth and producing edutaining content'
                    videoTypeDesc="Showreel"
                    moodToneDesc="Energetic, Epic Cinematic"
                    editingStyleDesc='Cinematic Aesthetic, <span class="d-none d-md-inline">Fast-Paced</span><span class="d-md-none d-block">Fast-Paced</span>'
                    platformDesc='---'
                />
            </div>
            <div>
                <MyWorkBlock
                    workTitle="K.O.P Video"
                    roleBgClass="kop-bg"
                    businessObjBgSrc="/images/MyWorks/KOPVideoBg.png"
                    workInfoBgClass="kop-bg"
                    id="kop-video"
                    myBgDescription='CornPress is an internet publisher with a diverse<br>portfolio of websites, including <a href="#">Pointer Clicker</a>'
                    myRoleDescription='Creative Direction / Video Editing / <br> Motion Design / Sound Design'
                    businessObj='Convert the web content from Pointer Clicker into<br>engaging YouTube videos, focusing on both channel<br>growth and producing edutaining content'
                    videoTypeDesc="Showreel"
                    moodToneDesc="Energetic, Epic Cinematic"
                    editingStyleDesc='Cinematic Aesthetic, <span class="d-none d-md-inline">Fast-Paced</span><span class="d-md-none d-block">Fast-Paced</span>'
                    platformDesc='---'
                />
            </div>
            <div>
                <MyWorkBlock
                    workTitle="Short Video"
                    roleBgClass="short-video-bg"
                    businessObjBgSrc="/images/MyWorks/ShortVideoBg.png"
                    workInfoBgClass="short-video-bg"
                    id="short-video"
                    myBgDescription='CornPress is an internet publisher with a diverse<br>portfolio of websites, including <a href="#">Pointer Clicker</a>'
                    myRoleDescription='Creative Direction / Video Editing / <br> Motion Design / Sound Design'
                    businessObj='Convert the web content from Pointer Clicker into<br>engaging YouTube videos, focusing on both channel<br>growth and producing edutaining content'
                    videoTypeDesc="Showreel"
                    moodToneDesc="Energetic, Epic Cinematic"
                    editingStyleDesc='Cinematic Aesthetic, <span class="d-none d-md-inline">Fast-Paced</span><span class="d-md-none d-block">Fast-Paced</span>'
                    platformDesc='---'
                />
            </div>
        </div><!-- Footer -->
        <div id="footer-block">
            <FooterPage />
        </div>
    </div>
</template>