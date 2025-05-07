<template>
    <div>
        <div class="intro-block" id="enter-animation">
            <div class="container">
                <div class="intro-block">
                    <div class="d-sm-none d-sm-inline before-header-block">
                        <div class="nav-link-txt" v-motion :initial="{ opacity: 0, y: 100 }"
                            :visible-once="{ opacity: 1, y: 0 }" :delay="200" :duration="800">
                            <div class="title-return-btn nav-link-txt">
                                <RouterLink to="/my-projects" class="nav-link-txt font-oswald-regular">
                                    Back To My Projects
                                </RouterLink>
                            </div>
                        </div>
                    </div>
                    <div class="h2 mobile-h2 text-uppercase title-block" v-motion :initial="{ opacity: 0, y: 100 }"
                        :visible-once="{ opacity: 1, y: 0 }" :delay="200" :duration="800">
                        <span class="font-oswald-bold" v-html="projectTitle"></span>
                    </div>
                    <div class="desc-block">
                        <div class="row">
                            <div class="col-sm left-side d-md-none d-md-inline">
                                <div v-motion :initial="{ opacity: 0, y: 100 }" :visible-once="{ opacity: 1, y: 0 }"
                                    :delay="400" :duration="800">
                                    <div class="title-return-btn nav-link-txt">
                                        <RouterLink to="/my-projects" class="nav-link-txt font-oswald-regular">
                                            Back To My Projects
                                        </RouterLink>
                                    </div>
                                </div>
                                <div @click="goToIntroBlock()" class="vector-down" v-motion :initial="{ opacity: 0, y: 100 }"
                                    :visible-once="{ opacity: 1, y: 0 }" :delay="600" :duration="800">
                                    <span class="go-to-intro">
                                        <img class="img-fluid" src="/svg/vector-down.svg" alt="go-to-intro">
                                    </span>
                                </div>
                            </div>
                            <div class="col-sm right-side">
                                <div class="font-oswald-bold h3 mobile-h3 d-md-none d-md-inline" v-motion
                                    :initial="{ opacity: 0, y: 100 }" :visible-once="{ opacity: 1, y: 0 }" :delay="200"
                                    :duration="800">
                                    Description
                                </div>
                                <div class="body mobile-body text-uppercase" v-motion :initial="{ opacity: 0, y: 100 }"
                                    :visible-once="{ opacity: 1, y: 0 }" :delay="400" :duration="800">
                                    <span class="font-oswald-regular" v-html="categoryDesc"></span>
                                </div>
                                <div class="body mobile-body desc-info-top" v-motion :initial="{ opacity: 0, y: 100 }"
                                    :visible-once="{ opacity: 1, y: 0 }" :delay="600" :duration="800">
                                    <span v-html="contentDesc"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="overflow-hidden">
            <div id="first-project-block">
                <img class="img-fluid w-100" :src="imgProject1" alt="editing-style-img">
            </div>
        </div>
        <div class="container editing-style-block">
            <div class="row">
                <div class="col-sm">
                    <div class="h3 mobile-h3 font-oswald-bold" v-motion :initial="{ opacity: 0, y: 100 }"
                        :visible-once="{ opacity: 1, y: 0 }" :delay="200" :duration="800">
                        Editing Style
                    </div>
                    <div class="body mobile-body font-oswald-bold-sm" v-motion :initial="{ opacity: 0, y: 100 }"
                        :visible-once="{ opacity: 1, y: 0 }" :delay="400" :duration="800">
                        <span v-html="editStyleCategory"></span>
                    </div>
                </div>
                <div class="col-sm block-desc-sm">
                    <div class="body mobile-body" v-motion :initial="{ opacity: 0, y: 100 }"
                        :visible-once="{ opacity: 1, y: 0 }" :delay="200" :duration="800">
                        <span v-html="editStyleContent"></span>
                    </div>
                </div>
            </div>
            <div class="overflow-hidden">
                <div class="img-content-wrapper">
                    <div class="img-wrapper" v-motion :initial="{ opacity: 0, y: 100 }"
                        :visible-once="{ opacity: 1, y: 0 }" :delay="200" :duration="800">
                        <img :src="editStyleImg" alt="editing-style-img">
                    </div>
                </div>
            </div>
        </div>
        <div class="overflow-hidden">
            <div id="second-project-block">
                <img class="img-fluid w-100" :src="imgProject2" alt="editing-style-img">
            </div>
        </div>
        <div class="container img-content-wrapper">
            <div class="overflow-hidden">
                <div class="img-wrapper" v-motion :initial="{ opacity: 0, y: 100 }" :visible-once="{ opacity: 1, y: 0 }"
                    :delay="200" :duration="800">
                    <img :src="intersectImg" alt="editing-style-img">
                </div>
            </div>
        </div>
        <div class="overflow-hidden">
            <div id="third-project-block">
                <img class="img-fluid w-100" :src="imgProject3" alt="editing-style-img">
            </div>
        </div>
        <div class="container prev-next-btn">
            <div class="img-content-wrapper" v-motion :initial="{ opacity: 0, y: 100 }"
                :visible-once="{ opacity: 1, y: 0 }" :delay="200" :duration="800">
                <div class="img-wrapper">
                    <img :src="endImg" alt="editing-style-img">
                </div>
            </div>
            <div class="row text-center">
                <div class="col-sm" v-motion :initial="{ opacity: 0, y: 100 }" :visible-once="{ opacity: 1, y: 0 }"
                    :delay="200" :duration="800">
                    <span class="font-oswald-bold nav-link-txt-2 mobile-nav-link-txt-2">The Previous</span>
                </div>
                <div class="col-sm" v-motion :initial="{ opacity: 0, y: 100 }" :visible-once="{ opacity: 1, y: 0 }"
                    :delay="200" :duration="800">
                    <span class="font-oswald-bold nav-link-txt-2 mobile-nav-link-txt-2">The Next Project</span>
                </div>
            </div>
        </div>
        <!-- Footer -->
        <div id="footer-block">
            <FooterPage />
        </div>
    </div>
</template>
<script lang="ts" setup>
import "../assets/my-projects-main.css";
import FooterPage from './FooterPage.vue';
import { onMounted, onActivated } from 'vue'

import ScrollTrigger from "gsap/ScrollTrigger";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

const props = defineProps([
    'projectTitle',
    'categoryDesc',
    'contentDesc',
    'imgProject1',
    'editStyleCategory',
    'editStyleContent',
    'editStyleImg',
    'imgProject2',
    'intersectImg',
    'imgProject3',
    'endImg'
]);

function assignScrollTriggerToElement(elementName: string, startVal: any, endVal: any, startScale: any, endScale: any) {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: elementName,
            scrub: true,
            start: startVal + " center",
            end: endVal,
        }
    })

    if (startScale > endScale) {
        tl.to(elementName, {
            scale: startScale,
            opacity: 0.75,
            duration: 1000,
            ease: "expoScale(0.5,7,none)"
        })
            .to(elementName, {
                scale: endScale,
                opacity: 1,
                duration: 1000,
                ease: "expoScale(0.5,7,none)"
            })
    } else {
        tl.from(elementName, {
            scale: startScale,
            opacity: 0.9,
            duration: 500,
            ease: "expoScale(0.5,7,none)"
        })
            .to(elementName, {
                scale: endScale,
                opacity: 1,
                duration: 1000,
                ease: "expoScale(0.5,7,none)"
            })
    }
}

function goToIntroBlock() {
    const firstProjectBlock = document.getElementById("first-project-block");
    if (!firstProjectBlock) return;

    firstProjectBlock.scrollIntoView();
}

onMounted(() => {
    assignScrollTriggerToElement('#first-project-block', "-4000px", "center", 3, 1);
    assignScrollTriggerToElement('#second-project-block', "-450px", "+=100%", 0.75, 1);
    assignScrollTriggerToElement('#third-project-block', "-2500px", "center", 3, 1);
})
</script>