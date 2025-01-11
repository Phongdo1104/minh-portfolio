<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderPage from './views/HeaderPage.vue'
import ScrollTop from './views/ScrollTop.vue'
import { gsap } from "gsap";

let firstEnter: boolean = true;
let resetEnterDuration: boolean = true;
const tl = gsap.timeline();

function onBeforeEnter(el: any) {
    document.body.classList.add('stop-scrolling');
    const transition = document.getElementById("transition");
    if (firstEnter) {
        transition?.classList.add("transform-scale-y");
    }
    el.style.scaleX = 1;
    el.style.opacity = 1;
}

function onEnter(el: any, done: any) {
    let enterDuration = 0.1;
    if (firstEnter && resetEnterDuration) {
        enterDuration = 0;
    }

    tl.to("#transition li", {
        duration: .5,
        scaleX: 1,
        transformOrigin: "bottom left",
        stagger: enterDuration,
        onComplete: () => {
            const transition = document.getElementById("transition");
            transition?.classList.remove('pointer-event-none');
            transition?.classList.remove("transform-scale-y");
            firstEnter = false;
            resetEnterDuration = false;
            done();
        }
    })
}

function onAfterEnter() {
    const transition = document.getElementById("transition");
    transition?.classList.add('pointer-event-none');

    tl.to("#transition li", {
        duration: .5,
        scaleX: 0,
        transformOrigin: "bottom left",
        stagger: .1,
        onComplete: () => {
            document.body.classList.remove('stop-scrolling');
        }
    })
}

</script>
<template>
    <div class="stop-scrolling">
        <div id="header-block">
            <!-- Header -->
            <HeaderPage />
        </div>

        <!-- body -->
        <div class="before-header" id="body">
            <router-view v-slot="{ Component }">
                <transition :css="false" @before-enter="onBeforeEnter" @enter="onEnter" @after-enter="onAfterEnter"
                    mode="in-out">
                    <component :is="Component" />
                </transition>
            </router-view>
        </div>
        <div id="scroll-top">
            <ScrollTop />
        </div>
        <!-- Animation -->
        <div>
            <ul id="transition">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    </div>
</template>
