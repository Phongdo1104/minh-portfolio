<template>
    <div>
        <div class="intro-block-container" id="enter-animation">
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
                                <div @click="goToIntroBlock()" class="vector-down" v-motion
                                    :initial="{ opacity: 0, y: 100 }" :visible-once="{ opacity: 1, y: 0 }" :delay="600"
                                    :duration="800">
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
            <div v-if="noZoomVideo1 === ''">
                <div id="first-project-block">
                    <div v-if="videoProject1 !== ''">
                        <video width="100%" autoplay muted loop preload="none" :src="videoProject1"></video>
                    </div>
                    <div v-else-if="imgProject1 !== ''">
                        <img class="img-fluid w-100" :src="imgProject1" alt="editing-style-img">
                    </div>
                </div>
            </div>
            <div v-else-if="noZoomVideo1 !== ''">
                <div class="video-controls">
                    <video id="no-zoom-video" width="100%" autoplay muted loop preload="none"
                        :src="noZoomVideo1"></video>
                    <div class="volume-icon">
                        <span @mouseover="mouseOverToggleMute()" @mouseleave="mouseLeaveToggleMute()">
                            <div class="volume-slider" @click="toggleMute()">
                                <img class="volume-icon-btn" id="volume-btn" src="/svg/mute-icon.svg" alt="volume-icon">
                            </div>
                            <input class="volume-scroll" id="volumeSlider" type="range" min="0" max="1" step="0.01">
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="container editing-style-block" id="project-info">
            <div class="row gap-element">
                <div class="col-sm">
                    <div class="h3 mobile-h3 font-oswald-bold" v-motion :initial="{ opacity: 0, y: 100 }"
                        :visible-once="{ opacity: 1, y: 0 }" :delay="200" :duration="800">
                        Editing Style
                    </div>
                    <div class="body mobile-body font-oswald-bold-sm padding-top-1rem" v-motion
                        :initial="{ opacity: 0, y: 100 }" :visible-once="{ opacity: 1, y: 0 }" :delay="200"
                        :duration="800">
                        <span v-html="editStyleCategory"></span>
                    </div>
                </div>
                <div class="col-sm block-desc-sm text-justify">
                    <div class="body mobile-body" v-motion :initial="{ opacity: 0, y: 100 }"
                        :visible-once="{ opacity: 1, y: 0 }" :delay="200" :duration="800">
                        <span v-html="editStyleContent"></span>
                    </div>
                </div>
            </div>
            <div v-if="embeddedAsset === ''" class="overflow-hidden project-container">
                <div>
                    <div v-if="editStyleVideo !== ''">
                        <video class="opacity-0-i" width="100%" autoplay muted loop preload="none" :src="editStyleVideo"
                            id="edit-style-block"></video>
                    </div>
                    <div v-else-if="editStyleImg !== ''" class="img-wrapper">
                        <img class="opacity-0-i" :src="editStyleImg" alt="editing-style-img" id="edit-style-block">
                    </div>
                </div>
            </div>
            <div v-else class="embedded-element-container">
                <div class="embedded-element" v-motion :initial="{ opacity: 0 }" :visible-once="{ opacity: 1 }"
                    :delay="400" :duration="800">
                    <div v-html="embeddedAsset"></div>
                </div>
            </div>
        </div>
        <div v-if="skipMiddle === 'false'">
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
            <div :class="{ 'bg-img': isBgColor }">
                <div class="overflow-hidden" :class="{ 'project-container': !isBgColor }">
                    <div v-if="intersectVideo !== ''" class="img-wrapper">
                        <video class="opacity-0-i" width="100%" autoplay muted loop preload="none" :src="intersectVideo"
                            id="middle-intersect-block"></video>
                    </div>
                    <div v-else-if="intersectImg" class="img-wrapper">
                        <img class="opacity-0-i" :src="intersectImg" id="middle-intersect-block">
                    </div>
                </div>
            </div>
        </div>
        <div class="overflow-hidden">
            <div id="third-project-block">
                <div v-if="videoProject3 !== ''">
                    <video width="100%" autoplay muted loop preload="none" :src="videoProject3"></video>
                </div>
                <div v-else-if="imgProject3 !== ''">
                    <img class="img-fluid w-100" :src="imgProject3" alt="editing-style-img">
                </div>
            </div>
        </div>
        <div class="container prev-next-btn">
            <div class="overflow-hidden project-container">
                <div>
                    <div v-if="endVideo !== ''" class="img-wrapper">
                        <video class="opacity-0-i" width="100%" autoplay muted loop preload="none" :src="endVideo"
                            id="end-block"></video>
                    </div>
                    <div v-else-if="endImg !== ''" class="img-wrapper">
                        <img class="opacity-0-i" :src="endImg" alt="editing-style-img" id="end-block">
                    </div>
                </div>
            </div>
            <div class="row text-center">
                <div class="col-sm d-md-none d-md-inline" v-motion :initial="{ opacity: 0, y: 100 }"
                    :visible-once="{ opacity: 1, y: 0 }" :duration="800">
                    <RouterLink :to="prevProject" class="pre-next prev-text font-oswald-regular mobile-nav-link-txt-2">
                        The Previous
                    </RouterLink>
                </div>
                <div class="col-sm" v-motion :initial="{ opacity: 0, y: 100 }" :visible-once="{ opacity: 1, y: 0 }"
                    :duration="800">
                    <RouterLink :to="nextProject" class="pre-next font-oswald-regular mobile-nav-link-txt-2">
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
import FooterPage from './FooterPage.vue';
import { onMounted } from 'vue'

import ScrollTrigger from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { gsap } from "gsap";
import { windowSize } from "@/stores/windowSize";

gsap.registerPlugin(ScrollTrigger, Observer);

const props = defineProps([
    'projectTitle',
    'categoryDesc',
    'contentDesc',
    'videoProject1',
    'noZoomVideo1',
    'imgProject1',
    'editStyleCategory',
    'editStyleContent',
    'editStyleVideo',
    'editStyleImg',
    'embeddedAsset',
    'skipMiddle',
    'videoProject2',
    'imgProject2',
    'intersectClass',
    'intersectVideo',
    'intersectImg',
    'isBgColor',
    'videoProject3',
    'imgProject3',
    'endVideo',
    'endImg',
    'prevProject',
    'nextProject',
    'isEmbedded'
]);

let windowSizeStore = windowSize();
let oldVolumeValue = 0.5;
let isBgColor = props.isBgColor === 'true';

function setupInputVolume() {
    const video = <HTMLVideoElement>document.getElementById("no-zoom-video");
    const slider = <HTMLInputElement>document.getElementById("volumeSlider");
    const toggleMute = document.getElementById('volume-btn');
    if (!slider || !video || !toggleMute) return;

    video.volume = 0;
    slider.value = "0";

    slider.addEventListener('input', function () {
        let minI = parseInt((<HTMLInputElement>slider).min);
        let maxI = parseInt((<HTMLInputElement>slider).max);
        let valueI = parseFloat((<HTMLInputElement>slider).value);
        slider.style.background = `linear-gradient(to right, red 0%, red ${(valueI - minI) / (maxI - minI) * 100}%, #DEE2E6 ${(valueI - minI) / (maxI - minI) * 100}%, #DEE2E6 100%)`
        video.volume = valueI;
        video.muted = valueI === 0;
        oldVolumeValue = video.volume;

        if (valueI === 0) {
            toggleMute.setAttribute('src', '/svg/mute-icon.svg');
        } else {
            let toggleMuteSrc = <string>toggleMute.getAttribute('src');
            if (toggleMuteSrc && !toggleMuteSrc.includes("/svg/full-volume.svg")) {
                toggleMute.setAttribute('src', '/svg/full-volume.svg');
            }
        }
    })
}

function activeHeaderBtn() {
    const myProjectBtn = document.getElementById("my-projects");
    const myProjectSideBtn = document.getElementById("my-projects-side");

    console.log("test 1");

    if (!myProjectBtn || !myProjectSideBtn) return;

    console.log("test");

    myProjectBtn.classList.add("router-link-exact-active");
    myProjectSideBtn.classList.add("router-link-exact-active");
}

function assignScrollTriggerToElement(elementName: string, startScale: number, endScale: number) {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: elementName,
            scrub: 1,
            start: "-900px bottom",
            end: "top bottom",
            invalidateOnRefresh: true,
            onLeave: (self: any) => {
                self.kill(true, true);
                self.animation.progress(1);
            }
        }
    })

    if (startScale > endScale) {
        tl.to(elementName, {
            scale: startScale,
            opacity: 0,
            duration: 1000,
            ease: "power3.in"
        })
            .to(elementName, {
                scale: endScale,
                opacity: 1,
                duration: 1000,
                ease: "power3.in"
            })
    } else {
        tl.from(elementName, {
            scale: startScale,
            opacity: 0,
            duration: 1000,
            ease: "power3.in"
        })
            .to(elementName, {
                scale: endScale,
                opacity: 1,
                duration: 1000,
                ease: "power3.in"
            })
    }
}

function goToIntroBlock() {
    const firstProjectBlock = document.getElementById("project-info");
    if (!firstProjectBlock) return;

    firstProjectBlock.scrollIntoView();
}

onMounted(() => {
    activeHeaderBtn();
    if (props.noZoomVideo1 === '' || props.noZoomVideo1 === null) {
        assignScrollTriggerToElement('#first-project-block', 0.75, 1.25);
    } else {
        setupInputVolume();
    }
    assignScrollTriggerToElement('#second-project-block', 0.75, 1.25);
    assignScrollTriggerToElement('#third-project-block', 0.75, 1.25);
    if (props.embeddedAsset === '' || props.embeddedAsset === null) {
        assignScrollTriggerToElement('#edit-style-block', 3, 1);
    }
    assignScrollTriggerToElement('#middle-intersect-block', 3, 1);
    assignScrollTriggerToElement('#end-block', 3, 1);
    setTimeout(() => {
        gsap.delayedCall(0, () => {
            ScrollTrigger.refresh();
        });
    }, 250);
})

function mouseOverToggleMute() {
    // if (parseInt(windowSizeStore.width) > 767 && parseInt(windowSizeStore.height) > 350) {
    // }
    const volumeSlider = document.getElementById('volumeSlider');

    if (!volumeSlider) return;

    volumeSlider.style.width = '150px';
    volumeSlider.style.setProperty('--height-thumb', "1rem");
}

function mouseLeaveToggleMute() {
    // if (parseInt(windowSizeStore.width) > 767 && parseInt(windowSizeStore.height) > 350) {
    // }
    const volumeSlider = document.getElementById('volumeSlider');

    if (!volumeSlider) return;

    volumeSlider.style.width = '0';
    volumeSlider.style.setProperty('--height-thumb', "0");
}

function toggleMute() {
    const toggleMute = document.getElementById('volume-btn');
    const slider = <HTMLInputElement>document.getElementById("volumeSlider");
    const video = <HTMLVideoElement>document.getElementById("no-zoom-video");
    if (!toggleMute || !slider || !video) return;

    const sliderValue = parseFloat(slider.value);
    if (sliderValue > 0) {
        toggleMute.setAttribute('src', '/svg/mute-icon.svg');
        slider.value = "0";
        video.volume = 0;
        video.muted = true;

        updateSliderVolumeWithNoValue();
    } else {
        let volumeValue = oldVolumeValue;
        // if (parseInt(windowSizeStore.width) > 767 && parseInt(windowSizeStore.height) > 350) {
        //     if (volumeValue === 0) {
        //         oldVolumeValue = 0.1;
        //         volumeValue = oldVolumeValue;
        //     }
        // } else {
        //     volumeValue = 1;
        // }
        if (volumeValue === 0) {
            oldVolumeValue = 0.1;
            volumeValue = oldVolumeValue;
        }
        slider.value = String(volumeValue);
        video.volume = volumeValue;
        video.muted = false;

        updateSliderVolumeWithNoValue();
        toggleMute.setAttribute('src', '/svg/full-volume.svg');
    }
}

function updateSliderVolumeWithNoValue() {
    const slider = <HTMLInputElement>document.getElementById("volumeSlider");
    if (!slider) return;

    let minI = parseInt((<HTMLInputElement>slider).min);
    let maxI = parseInt((<HTMLInputElement>slider).max);
    let valueI = parseFloat((<HTMLInputElement>slider).value);
    slider.style.background = `linear-gradient(to right, red 0%, red ${(valueI - minI) / (maxI - minI) * 100}%, #DEE2E6 ${(valueI - minI) / (maxI - minI) * 100}%, #DEE2E6 100%)`
}
</script>