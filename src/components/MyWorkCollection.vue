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
                myBgDescription='A showcase of past projects woven together under a storyline, which highlights editing skills while delivering clear and impactful message through supers'
                myRoleDescription='Creative Direction /Video Editing / Sound Design'
                editingStyleDesc='Cinematic / Fast-paced / Text Overlays'
            />
        </div>
        <div
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :visible-once="{ opacity: 1, y: 0 }"
            :delay="0"
            :duration="600"
        >
            <MyWorkBlock workTitle="Tech Guide" roleBgClass="tutorial-bg"
                businessObjBgSrc="/images/MyWorks/TutorialBgBusiness.png" workInfoBgClass="tutorial-challenge-editing"
                id="tutorial-video"
                myBgDescription='Pointer Clicker YouTube Channel delivers engaging tech guides and practical tips, ensuring viewers gain valuable insights with clarity and ease'
                myRoleDescription='Videography / Video Production / Scriptwriting'
                editingStyleDesc='Tech Guide / Product Showcase / Tutorial B-Roll'
            />
        </div>
        <div
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :visible-once="{ opacity: 1, y: 0 }"
            :delay="0"
            :duration="600"
        >
            <MyWorkBlock workTitle="Event Highlights" roleBgClass="podcast-bg"
                businessObjBgSrc="/images/MyWorks/PodcastHighlightBg.png" workInfoBgClass="podcast-bg"
                id="podcast-highlight"
                myBgDescription='Event highlights featuring Shark Thai Van Linh - a KOL in career growth and self-development, as guest speaker at the Huawei MatePad Pro launch'
                myRoleDescription='Photography Direction / Videography / Video Editing'
                editingStyleDesc='Modern / Vibrant / Elegant'
            />
        </div>
        <div
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :visible-once="{ opacity: 1, y: 0 }"
            :delay="0"
            :duration="600"
        >
            <MyWorkBlock workTitle="Motion T.V.C." roleBgClass="documentary-bg"
                businessObjBgSrc="/images/MyWorks/DocumentaryBg.png" workInfoBgClass="documentary-bg"
                id="documentary-block"
                myBgDescription="A video ad showcasing LivWell's face scan feature - a wellness and insurance mobile app, in collaboration with Shark Thai Van Linh, a Vietnamese KOL in business, career, and wellness"
                myRoleDescription='Photography Direction / Graphic Motion Design / Video Editing'
                editingStyleDesc='Modern / Vibrant / Data Visualization'
            />
        </div>
        <div
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :visible-once="{ opacity: 1, y: 0 }"
            :delay="0"
            :duration="600"
        >
            <MyWorkBlock workTitle="Podcast Highlights" roleBgClass="tvc-bg" businessObjBgSrc="/images/MyWorks/TVCBg.png"
                workInfoBgClass="tvc-bg" id="tvc-video"
                myBgDescription='A series showcasing the stories of employees at Arches - a business consulting service, reflecting its dynamic, multinational work environmentt'
                myRoleDescription='Videography / Editing'
                editingStyleDesc='Professionalism / Dynamic / Energetic / Fast-paced.'
            />
        </div>
        <div
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :visible-once="{ opacity: 1, y: 0 }"
            :delay="0"
            :duration="600"
        >
            <MyWorkBlock workTitle="K.O.P / Talking Head" roleBgClass="kop-bg" businessObjBgSrc="/images/MyWorks/KOPVideoBg.png"
                workInfoBgClass="kop-bg" id="kop-video"
                myBgDescription='Handy tips with Huawei MatePad Pro 12.2” shared by Shark Thai Van Linh - a KOL on career growth and self development'
                myRoleDescription='Photography Direction / Video Editing / Motion Graphics Design'
                editingStyleDesc='Modern / Vibrant / Elegant'
            />
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
                myBgDescription='-'
                myRoleDescription='Photography Direction / Video Editing / Motion Graphics Design'
                editingStyleDesc='Modern / Vibrant / Elegant'
            />
        </div>
    </div>
</template>