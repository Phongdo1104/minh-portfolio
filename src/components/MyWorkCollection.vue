<script setup lang="ts">
import MyWorkBlock from '../components/MyWorkBlock.vue';
</script>
<template>
    <div id="my-work-collection">
        <div
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :enter="{ opacity: 1, y: 0 }"
            :delay="0"
            :duration="600"
        >
            <MyWorkBlock workTitle="2024 Showreel" roleBgClass="showreel"
                businessObjBgSrc="/images/MyWorks/ShowReel_Info.png" workInfoBgClass="showreel" id="showreel-block"
                myBgDescription='CornPress is an internet publisher with a diverse<br>portfolio of websites, including <a href="#">Pointer Clicker</a>'
                myRoleDescription='Creative Direction / Video Editing / <br> Motion Design / Sound Design'
                businessObj='Convert the web content from Pointer Clicker into<br>engaging YouTube videos, focusing on both channel<br>growth and producing edutaining content'
                videoTypeDesc="Showreel" moodToneDesc="Energetic, Epic Cinematic"
                editingStyleDesc='Cinematic Aesthetic, <span class="d-none d-md-inline">Fast-Paced</span><span class="d-md-none d-block">Fast-Paced</span>'
                platformDesc='---' />
        </div>
        <div
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :visible-once="{ opacity: 1, y: 0 }"
            :delay="0"
            :duration="600"
        >
            <MyWorkBlock workTitle="Tutorial Video" roleBgClass="tutorial-bg"
                businessObjBgSrc="/images/MyWorks/TutorialBgBusiness.png" workInfoBgClass="tutorial-challenge-editing"
                id="tutorial-video"
                myBgDescription='CornPress is an internet publisher with a diverse<br>portfolio of websites, including <a href="#">Pointer Clicker</a>'
                myRoleDescription='Creative Direction / Video Editing / <br> Motion Design / Sound Design'
                businessObj='Convert the web content from Pointer Clicker into<br>engaging YouTube videos, focusing on both channel<br>growth and producing edutaining content'
                videoTypeDesc="Showreel" moodToneDesc="Energetic, Epic Cinematic"
                editingStyleDesc='Cinematic Aesthetic, <span class="d-none d-md-inline">Fast-Paced</span><span class="d-md-none d-block">Fast-Paced</span>'
                platformDesc='---' />
        </div>
        <div
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :visible-once="{ opacity: 1, y: 0 }"
            :delay="0"
            :duration="600"
        >
            <MyWorkBlock workTitle="Podcast Highlights" roleBgClass="podcast-bg"
                businessObjBgSrc="/images/MyWorks/PodcastHighlightBg.png" workInfoBgClass="podcast-bg"
                id="podcast-highlight"
                myBgDescription='CornPress is an internet publisher with a diverse<br>portfolio of websites, including <a href="#">Pointer Clicker</a>'
                myRoleDescription='Creative Direction / Video Editing / <br> Motion Design / Sound Design'
                businessObj='Convert the web content from Pointer Clicker into<br>engaging YouTube videos, focusing on both channel<br>growth and producing edutaining content'
                videoTypeDesc="Showreel" moodToneDesc="Energetic, Epic Cinematic"
                editingStyleDesc='Cinematic Aesthetic, <span class="d-none d-md-inline">Fast-Paced</span><span class="d-md-none d-block">Fast-Paced</span>'
                platformDesc='---' />
        </div>
        <div
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :visible-once="{ opacity: 1, y: 0 }"
            :delay="0"
            :duration="600"
        >
            <MyWorkBlock workTitle="Event Recap" roleBgClass="documentary-bg"
                businessObjBgSrc="/images/MyWorks/DocumentaryBg.png" workInfoBgClass="documentary-bg"
                id="documentary-block"
                myBgDescription='CornPress is an internet publisher with a diverse<br>portfolio of websites, including <a href="#">Pointer Clicker</a>'
                myRoleDescription='Creative Direction / Video Editing / <br> Motion Design / Sound Design'
                businessObj='Convert the web content from Pointer Clicker into<br>engaging YouTube videos, focusing on both channel<br>growth and producing edutaining content'
                videoTypeDesc="Showreel" moodToneDesc="Energetic, Epic Cinematic"
                editingStyleDesc='Cinematic Aesthetic, <span class="d-none d-md-inline">Fast-Paced</span><span class="d-md-none d-block">Fast-Paced</span>'
                platformDesc='---' />
        </div>
        <div
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :visible-once="{ opacity: 1, y: 0 }"
            :delay="0"
            :duration="600"
        >
            <MyWorkBlock workTitle="TVC Video" roleBgClass="tvc-bg" businessObjBgSrc="/images/MyWorks/TVCBg.png"
                workInfoBgClass="tvc-bg" id="tvc-video"
                myBgDescription='CornPress is an internet publisher with a diverse<br>portfolio of websites, including <a href="#">Pointer Clicker</a>'
                myRoleDescription='Creative Direction / Video Editing / <br> Motion Design / Sound Design'
                businessObj='Convert the web content from Pointer Clicker into<br>engaging YouTube videos, focusing on both channel<br>growth and producing edutaining content'
                videoTypeDesc="Showreel" moodToneDesc="Energetic, Epic Cinematic"
                editingStyleDesc='Cinematic Aesthetic, <span class="d-none d-md-inline">Fast-Paced</span><span class="d-md-none d-block">Fast-Paced</span>'
                platformDesc='---' />
        </div>
        <div
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :visible-once="{ opacity: 1, y: 0 }"
            :delay="0"
            :duration="600"
        >
            <MyWorkBlock workTitle="K.O.P Video" roleBgClass="kop-bg" businessObjBgSrc="/images/MyWorks/KOPVideoBg.png"
                workInfoBgClass="kop-bg" id="kop-video"
                myBgDescription='CornPress is an internet publisher with a diverse<br>portfolio of websites, including <a href="#">Pointer Clicker</a>'
                myRoleDescription='Creative Direction / Video Editing / <br> Motion Design / Sound Design'
                businessObj='Convert the web content from Pointer Clicker into<br>engaging YouTube videos, focusing on both channel<br>growth and producing edutaining content'
                videoTypeDesc="Showreel" moodToneDesc="Energetic, Epic Cinematic"
                editingStyleDesc='Cinematic Aesthetic, <span class="d-none d-md-inline">Fast-Paced</span><span class="d-md-none d-block">Fast-Paced</span>'
                platformDesc='---' />
        </div>
        <div
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :visible-once="{ opacity: 1, y: 0 }"
            :delay="0"
            :duration="600"
        >
            <MyWorkBlock workTitle="Street Videography" roleBgClass="short-video-bg"
                businessObjBgSrc="/images/MyWorks/ShortVideoBg.png" workInfoBgClass="short-video-bg" id="short-video"
                myBgDescription='CornPress is an internet publisher with a diverse<br>portfolio of websites, including <a href="#">Pointer Clicker</a>'
                myRoleDescription='Creative Direction / Video Editing / <br> Motion Design / Sound Design'
                businessObj='Convert the web content from Pointer Clicker into<br>engaging YouTube videos, focusing on both channel<br>growth and producing edutaining content'
                videoTypeDesc="Showreel" moodToneDesc="Energetic, Epic Cinematic"
                editingStyleDesc='Cinematic Aesthetic, <span class="d-none d-md-inline">Fast-Paced</span><span class="d-md-none d-block">Fast-Paced</span>'
                platformDesc='---' />
        </div>
    </div>
</template>