<script lang="ts" setup>
import '../assets/header-page.css'
import { useRoute } from 'vue-router';
import { ref } from 'vue'

let show = ref(false);

let isActive = ref(false);

const route = useRoute();

function showSideMenuMobile() {
    show.value = !show.value;

    const currentPath = route.path;
    if (!currentPath) return;

    isActive.value = currentPath.includes("my-projects");
}

function closePopup() {
    show.value = false;
}

function scrollToView(refName: string, closePopupFlg: boolean = false) {
    const element = document.getElementById(refName)
    element?.scrollIntoView({ behavior: "smooth" });

    if (closePopupFlg) {
        show.value = false;
    }
}
</script>
<template>
    <div class="d-block d-md-none header-sp fixed-header" id="fixedHeader">
        <div class="position-absolute top-0 end-0 mt-3 me-3">
            <div href="#" @click="showSideMenuMobile()">
                <img id="menu-icon" src="/svg/menu-btn.svg" alt="" />
            </div>
        </div>
    </div>
    <div class="container-sm d-none d-md-block">
        <div class="header-router">
            <div class="col-auto row align-self-center">
                <div class="d-none d-md-block" id="header-links">
                    <RouterLink to="/" class="nav-link-txt text-decoration-none fw-bold text-center" id="home-page">
                        Home
                    </RouterLink>
                    <RouterLink to="/about-me" class="nav-link-txt text-decoration-none ms-5 fw-bold" id="about-me">
                        About Me
                    </RouterLink>
                    <RouterLink to="/my-projects" class="nav-link-txt text-decoration-none ms-5 fw-bold"
                        id="my-projects">
                        My Projects
                    </RouterLink>
                    <span class="text-decoration-none ms-5 nav-link-txt d-inline-block">
                        <button type="button" id="get-in-touch" @click="scrollToView('footer-block')">Get In
                            Touch</button>
                    </span>
                </div>
            </div>
        </div>
    </div>
    <div class="header-bg-mobile" id="mobile-header">
        <transition appear name="fade">
            <div v-if="show" class="hide-header h1 sidebar-navigation sidebar-block fixed-header-text" id="fixedSidebar"
                data-toggle="animation" data-animation-reset="true" data-animation="slide-right">
                <div class="menu-mobile-bg" v-motion :initial="{ opacity: 0, x: -100 }" :enter="{ opacity: 1, x: 0 }"
                    :delay="150" :duration="500">
                </div>
                <div class="sidebar-content">
                    <div class="fixed-header-text">
                        <RouterLink to="/" @click="closePopup()"
                            class="mb-3 text-decoration-none text-center sidebar-item w-100" v-motion
                            :initial="{ opacity: 0, y: 100 }" :enter="{ opacity: 1, y: 0 }" :duration="500">
                            Home
                        </RouterLink>
                        <RouterLink to="/about-me" @click="closePopup()"
                            class="mb-3 text-decoration-none text-center sidebar-item w-100" v-motion
                            :initial="{ opacity: 0, y: 100 }" :enter="{ opacity: 1, y: 0 }" :delay="50" :duration="500">
                            About me
                        </RouterLink>
                        <RouterLink to="/my-projects" @click="closePopup()"
                            class="mb-3 text-decoration-none text-center sidebar-item w-100"
                            :class="{ 'router-link-exact-active': isActive }" id="my-project-mobile-btn" v-motion
                            :initial="{ opacity: 0, y: 100 }" :enter="{ opacity: 1, y: 0 }" :delay="100"
                            :duration="500">
                            My Projects
                        </RouterLink>
                        <span to="/contact-me" @click="scrollToView('footer-block', true)"
                            class="mb-3 text-decoration-none text-center sidebar-item w-100 mobile-contact-me" v-motion
                            :initial="{ opacity: 0, y: 100 }" :enter="{ opacity: 1, y: 0 }" :delay="150"
                            :duration="500">
                            Get in touch
                        </span>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>
<style>
.outer,
.inner {
    background: #eee;
    padding: 30px;
    min-height: 100px;
}

.inner {
    background: #ccc;
}

/* Nested transition effect */
.nested-enter-active,
.nested-leave-active {
    transition: all 0.15s ease-in-out;
}

/* delay leave of parent element */
.nested-leave-active {
    transition-delay: 0.05s;
}

.nested-enter-from,
.nested-leave-to {
    transform: translateY(30px);
    opacity: 0;
}

/* we can also transition nested elements using nested selectors */
.nested-enter-active .inner,
.nested-leave-active .inner {
    transition: all 0.15s ease-in-out;
}

/* delay enter of nested element */
.nested-enter-active .inner {
    transition-delay: 0.1s;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
    transform: translateX(30px);
    /*
  	Hack around a Chrome 96 bug in handling nested opacity transitions.
    This is not needed in other browsers or Chrome 99+ where the bug
    has been fixed.
  */
    opacity: 0.001;
}

/* Slide fade Transition effect */
.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
}
</style>