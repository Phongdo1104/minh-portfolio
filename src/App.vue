<script setup lang="ts">
import { RouterView } from 'vue-router';
import HeaderPage from './views/HeaderPage.vue';
import MenuBurger from './views/MenuBurger.vue';
import SidebarMenu from './components/SidebarBlock.vue';
import { gsap } from "gsap";
import { reactive } from 'vue';
import { scrollToView, scrollTop } from './utils/utils';
import { useScrollInto } from './stores/scrollInto';

const store = useScrollInto();

let transitionTitle = reactive({
    title: String(document.title)
})

let firstEnter: boolean = true;
const tl = gsap.timeline();

function onBeforeEnter(el: any) {
    transitionTitle.title = String(document.title);
    if (!firstEnter) {
        const transition = document.getElementById('transition');
        const transitionText = document.getElementById('content-transition');

        transition?.setAttribute('style', 'opacity:1');
        transition?.setAttribute('style', 'opacity: 1')
        transitionText?.setAttribute('style', 'opacity:0');

        const headerLinks = document.getElementById('header-block');
        headerLinks?.setAttribute('style', 'pointer-events: none');
    } else {
        const beginTransition = document.getElementById('begin-transition');
        const beginTextTransition = document.getElementById('begin-content-transition');

        beginTextTransition?.setAttribute('style', 'opacity: 0; transform: translateY(-60px)');
        tl.to(beginTransition, {
            duration: 2,
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
    if (!firstEnter) {
        tl.to('#transition', {
            yPercent: 100,
            duration: 1,
            ease: 'power4.out',
            stagger: .5,
        }).to('#transition', {
            '--radiusBottomLeft': '0%',
            '--radiusBottomRight': '0%',
            duration: .5,
            stagger: .1
        }, '<15%').to('#content-transition', {
            duration: .5,
            opacity: 1,
            ease: 'slow(0.7,0.7,false)',
            onComplete: () => {
                if (store.label !== "" && store.label !== null) {
                    scrollTop();
                }
                firstEnter = false;
                done();
            }
        }, '<25%')
    } else {
        tl.to('#begin-transition', {
            duration: 1,
            ease: 'power4.out',
            stagger: .5,
        }, '<15%').to('#begin-content-transition', {
            duration: .5,
            opacity: 1,
            ease: 'slow(0.7,0.7,false)',
            onComplete: done
        }, '<25%')
    }
}

function onAfterEnter() {
    if (!firstEnter) {
        tl.to('#transition', {
            duration: 1,
            yPercent: 200,
            ease: 'slow(0.7,0.7,false)',
            stagger: .1,
            onComplete: () => {
                const transition = document.getElementById('transition');
                transition?.setAttribute('style', 'opacity:0; border-radius: 0 0 0 0');
                console.log(store.label);
                scrollToWorks(store.label);
            }
        })
            .to('#transition', {
                '--radiusTopLeft': '70%',
                '--radiusTopRight': '70%',
                duration: .75,
                stagger: .1
            }, '<15%')
            .to('#transition', {
                duration: .5,
                yPercent: -100,
                ease: 'slow(0.7,0.7,false)',
                stagger: .1,
                onComplete: () => {
                    const headerLinks = document.getElementById('header-block');
                    headerLinks?.setAttribute('style', 'pointer-events: unset');
                }
            })
    } else {
        firstEnter = false;

        tl.to('#begin-transition', {
            duration: 2,
            yPercent: 200,
            ease: 'slow(0.7,0.7,false)',
            stagger: .1,
            onComplete: () => {
                const beginTransition = document.getElementById('begin-transition');
                beginTransition?.setAttribute('style', 'opacity:0; border-radius: 0 0 0 0; transform: translate(0%, -100%)');
            }
        })
            .to('#begin-transition', {
                '--radiusTopLeft': '80%',
                '--radiusTopRight': '80%',
                duration: 1,
                stagger: .1,
                onComplete: () => {
                    const headerLinks = document.getElementById('header-block');
                    headerLinks?.setAttribute('style', 'pointer-events: unset');
                }
            }, '<5%')
    }
}

function scrollToWorks(scrollToStr: string) {
    if (document.title.toLowerCase() === 'my works' && scrollToStr !== "" && scrollToStr !== null) {
        scrollToView(store.label);
    }
    store.setNewLabel("");
}
</script>
<template>
    <div>
        <SidebarMenu />
        <div id="header-block">
            <!-- Header -->
            <HeaderPage />
        </div>
        <div id="menu-burger">
            <MenuBurger />
        </div>

        <!-- body -->
        <div id="body">
            <router-view v-slot="{ Component }">
                <transition :css="false" @before-enter="onBeforeEnter" @enter="onEnter" @after-enter="onAfterEnter"
                    mode="in-out">
                    <component :is="Component" />
                </transition>
            </router-view>
        </div>
        <!-- Animation -->
        <div id="transition" class="transition-overlay">
            <div class="text-transition">
                <h1 id="content-transition">{{ transitionTitle.title }}</h1>
            </div>
        </div>
        <div id="begin-transition" class="transition-overlay-begin">
            <div class="text-transition">
                <h1 id="begin-content-transition">{{ transitionTitle.title }}</h1>
            </div>
        </div>
    </div>
</template>
