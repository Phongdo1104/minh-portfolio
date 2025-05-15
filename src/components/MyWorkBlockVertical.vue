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
                <div v-if="videoProject1 !== ''">
                    <video width="100%" autoplay muted loop preload="none" :src="videoProject1"></video>
                </div>
                <div v-else-if="imgProject1 !== ''">
                    <img class="img-fluid w-100" :src="imgProject1" alt="editing-style-img">
                </div>
            </div>
        </div>
        <div class="container editing-style-block" id="project-info">
            <div class="row flex-embedded-reverse">
                <div class="col-sm">
                    <div v-if="embeddedAsset1 !== ''">
                        <div v-html="embeddedAsset1" v-motion :initial="{ opacity: 0, y: 100 }"
                                :visible-once="{ opacity: 1, y: 0 }" :delay="200" :duration="800"></div>
                    </div>
                </div>
                <div class="col-sm flex-content-reverse">
                    <div class="block-desc-sm">
                        <div class="body mobile-body" v-motion :initial="{ opacity: 0, y: 100 }"
                            :visible-once="{ opacity: 1, y: 0 }" :delay="200" :duration="800">
                            <span v-html="editStyleContent"></span>
                        </div>
                    </div>
                    <div class="editing-style editing-style-first">
                        <div class="h3 mobile-h3 font-oswald-bold" v-motion :initial="{ opacity: 0, y: 100 }"
                            :visible-once="{ opacity: 1, y: 0 }" :delay="200" :duration="800">
                            Editing Style
                        </div>
                        <div>
                            <div class="body mobile-body font-oswald-bold-sm editing-style-title" v-motion :initial="{ opacity: 0, y: 100 }"
                                :visible-once="{ opacity: 1, y: 0 }" :delay="400" :duration="800">
                                <span v-html="editStyleCategory"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="overflow-hidden">
            <div id="second-project-block">
                <div v-if="videoProject2 !== ''">
                    <video width="100%" autoplay muted loop preload="none" :src="videoProject2"></video>
                </div>
                <div v-else-if="imgProject2 !== ''">
                    <img class="img-fluid w-100" :src="imgProject2" alt="editing-style-img">
                </div>
            </div>
        </div>
        <div class="container prev-next-btn">
            <div class="container editing-style-block" id="project-info">
                <div class="row flex-embedded-reverse">
                    <div class="col-sm">
                        <div v-if="embeddedAsset2 !== ''">
                            <div class="fb-embedded-element" v-html="embeddedAsset2" v-motion :initial="{ opacity: 0, y: 100 }"
                                :visible-once="{ opacity: 1, y: 0 }" :delay="200" :duration="800"></div>
                        </div>
                    </div>
                    <div class="col-sm flex-content-reverse">
                        <div class="block-desc-sm">
                            <div class="body mobile-body" v-motion :initial="{ opacity: 0, y: 100 }"
                                :visible-once="{ opacity: 1, y: 0 }" :delay="200" :duration="800">
                                <span v-html="editStyleContent"></span>
                            </div>
                        </div>
                        <div class="editing-style">
                            <div class="h3 mobile-h3 font-oswald-bold" v-motion :initial="{ opacity: 0, y: 100 }"
                                :visible-once="{ opacity: 1, y: 0 }" :delay="200" :duration="800">
                                Editing Style
                            </div>
                            <div>
                                <div class="body mobile-body font-oswald-bold-sm editing-style-title" v-motion :initial="{ opacity: 0, y: 100 }"
                                    :visible-once="{ opacity: 1, y: 0 }" :delay="400" :duration="800">
                                    <span v-html="editStyleCategory"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row text-center">
                <div class="col-sm d-md-none d-md-inline" v-motion :initial="{ opacity: 0, y: 100 }" :visible-once="{ opacity: 1, y: 0 }"
                    :duration="800">
                    <RouterLink :to="prevProject" class="pre-next font-oswald-bold nav-link-txt-2 mobile-nav-link-txt-2">
                        The Previous
                    </RouterLink>
                </div>
                <div class="col-sm" v-motion :initial="{ opacity: 0, y: 100 }" :visible-once="{ opacity: 1, y: 0 }"
                    :duration="800">
                    <RouterLink :to="nextProject" class="pre-next font-oswald-bold nav-link-txt-2 mobile-nav-link-txt-2">
                        The Next Project
                    </RouterLink>
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
import "../assets/my-work-partials.css"
import FooterPage from './FooterPage.vue';
import { onMounted, computed } from 'vue'

import ScrollTrigger from "gsap/ScrollTrigger";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

let firstLoad = false;

const props = defineProps([
    'projectTitle',
    'categoryDesc',
    'contentDesc',
    'videoProject1',
    'imgProject1',
    'editStyleCategory',
    'editStyleContent',
    'embeddedAsset1',
    'videoProject2',
    'imgProject2',
    'embeddedAsset2',
    'prevProject',
    'nextProject',
    'isEmbedded'
]);

function assignScrollTriggerToElement(elementName: string, startVal: any, endVal: any, startScale: any, endScale: any) {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: elementName,
            scrub: 0.25,
            start: startVal + " bottom",
            end: endVal,
            invalidateOnRefresh: true
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
            opacity: 0.5,
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
    const firstProjectBlock = document.getElementById("project-info");
    if (!firstProjectBlock) return;

    firstProjectBlock.scrollIntoView();
}

onMounted(() => {
    assignScrollTriggerToElement('#first-project-block', "-450px", "+=150%", 0.75, 1.25);
    assignScrollTriggerToElement('#second-project-block', "-250px", "+=150%", 0.75, 1.25);
    setTimeout(() => {
        gsap.delayedCall(0, () => {
            ScrollTrigger.refresh();
        });
    }, 250);
})
</script>