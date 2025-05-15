<script setup lang="ts">
import { RouterView } from 'vue-router';
import HeaderPage from './views/HeaderPage.vue';
import MenuBurger from './views/MenuBurger.vue';
import SidebarMenu from './components/SidebarBlock.vue';

import { gsap } from "gsap";
import { reactive, watch, ref } from 'vue';
import { useRoute } from 'vue-router';
import { scrollToView, scrollTop } from './utils/utils';
import { useScrollInto } from './stores/scrollInto';

const store = useScrollInto();

const route = useRoute();

const displayShowreel = ref(false);

watch(() => route.name, () => {
    let currentRouteName = route.name;
    const display = ['home', 'about-me'].includes(String(currentRouteName));
    displayShowreel.value = display;
});

let transitionTitle = reactive({
    title: String(document.title)
})

let firstEnter: boolean = true;
const tl = gsap.timeline();

function onBeforeLeave() {
    transitionTitle.title = String(document.title);
    const transition = document.getElementById('transition');

    transition?.setAttribute('style', 'opacity:1');
    transition?.setAttribute('style', 'opacity: 1')

    const headerLinks = document.getElementById('header-block');
    headerLinks?.setAttribute('style', 'pointer-events: none');
}

function onLeave(el: any, done: any) {
    tl.from('#transition', {
        yPercent: 100,
        ease: "expoScale(0.5,7,none)",
    }).to('#transition', {
        yPercent: -100,
        duration: .5,
        ease: "expoScale(0.5,7,none)",
        onComplete: () => {
            if (store.label !== "" && store.label !== null) {
                scrollTop();
            }
            firstEnter = false;
        }
    }).to('#content-transition', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "expoScale(0.5,7,none)",
        onComplete: () => {
            if (store.label) {
                scrollToWorks(store.label);
            } else {
                scrollTop();
            }
            done();
        }
    }, '<5%');
}

function onBeforeEnter() {
    if (!firstEnter) {
        tl.from('#transition', {
            yPercent: -100,
            duration: 0.25,
            ease: "expoScale(0.5,7,none)",
            onComplete: () => {
                const headerLinks = document.getElementById('header-block');
                headerLinks?.setAttribute('style', 'pointer-events: unset');
            }

        }).to('#transition', {
            duration: .5,
            yPercent: -200,
            ease: "expoScale(0.5,7,none)",
            onComplete: () => {
                const transition = document.getElementById('transition');
                transition?.setAttribute('style', 'opacity:0');

                tl.to('#content-transition', {
                    opacity: 0,
                    translateY: '60px',
                    duration: .5,
                    ease: "expoScale(0.5,7,none)",
                })
            }
        })
    } else {
        transitionTitle.title = String(document.title);
        const beginTextTransition = document.getElementById('begin-content-transition');

        beginTextTransition?.setAttribute('style', 'opacity: 0; transform: translateY(60px)');
        tl.to('#begin-transition', {
            duration: 1.5,
            opacity: 1,
            ease: 'slow(0.7,0.7,false)',
        }).to(beginTextTransition, {
            duration: .75,
            opacity: 1,
            y: 0,
            ease: 'slow(0.7,0.7,false)'
        }, '<25%')
    }
}

function onEnter(el: any, done: any) {
    if (firstEnter) {
        firstEnter = false;

        tl.from('#begin-transition', {
            yPercent: 0,
            duration: 0.75,
            ease: "expoScale(0.5,7,none)",
            onComplete: () => {
                const headerLinks = document.getElementById('header-block');
                headerLinks?.setAttribute('style', 'pointer-events: unset');
            }

        }).to('#begin-transition', {
            duration: .5,
            yPercent: -100,
            ease: "expoScale(0.5,7,none)",
        }).to('#enter-animation', {
            paddingTop: 0,
            duration: .1,
            ease: "expoScale(0.5,7,none)"
        }, '<15%');
    } else {
        tl.to('#enter-animation', {
            paddingTop: 0,
            duration: .1,
            ease: "expoScale(0.5,7,none)"
        }, '<25%');
    }
    done();
}

function scrollToWorks(scrollToStr: string) {
    if (document.title.toLowerCase() === 'my works' && scrollToStr !== "" && scrollToStr !== null) {
        scrollToView(store.label, false);
    }
    store.setNewLabel("");
}

window.addEventListener('resize', () => {
    const headerMobile = document.getElementById('fixedSidebar');

    if (!headerMobile) return;

    if (document.body.clientWidth <= 767) {
        headerMobile.style.opacity = '1';
        headerMobile.style.removeProperty('opacity');
        headerMobile.style.removeProperty('pointer-events');
    } else {
        headerMobile.style.opacity = '0';
        headerMobile.style.pointerEvents = "none";
    }
});
</script>
<template>
    <div id="animation-block">
        <!-- Animation -->
        <div id="transition" class="transition-overlay">
            <div class="text-transition">
                <p id="content-transition" class="h1_5 mobile-h1_5 font-oswald-regular">
                    {{ transitionTitle.title }}
                </p>
            </div>
        </div>
        <div id="begin-transition" class="transition-overlay-begin">
            <div class="text-transition">
                <p id="begin-content-transition" class="h1_5 mobile-h1_5 font-oswald-regular">
                    {{ transitionTitle.title }}
                </p>
            </div>
        </div>
    </div>
    <div id="page">
        <SidebarMenu />
        <div id="header-block">
            <!-- Header -->
            <HeaderPage />
        </div>
        <div id="menu-burger">
            <MenuBurger />
        </div>

        <!-- body -->
        <div id="content-page">
            <router-view v-slot="{ Component }">
                <transition @before-enter="onBeforeEnter" @enter="onEnter" @leave="onLeave"
                    @before-leave="onBeforeLeave" mode="out-in">
                    <component :is="Component" />
                </transition>
            </router-view>
        </div>
    </div>
</template>
