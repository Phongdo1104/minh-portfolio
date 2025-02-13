<script lang="ts" setup>
import '../assets/header-page.css'
import { ref } from 'vue'

let show = ref(false);

function closePopup() {
    show.value = false;
    window.scrollTo({
        top: 0,
        behavior: 'instant'
    });
}

function scrollToView(refName: string) {
    const element = document.getElementById(refName)
    element?.scrollIntoView({ behavior: "smooth" });
}
</script>
<template>
    <div class="d-block d-md-none header-sp fixed-header" id="fixedHeader">
        <!-- <div class="position-absolute top-0 start-0 ms-3">
            <RouterLink to="/">
                <img id="logo-home-page" src="/images/Logo_LightIcon.png" alt="" />
            </RouterLink>
        </div> -->
        <div class="position-absolute top-0 end-0 mt-3 me-3">
            <div href="#" @click="show = !show">
                <img id="menu-icon" src="/svg/menu.svg" alt="" />
            </div>
        </div>
    </div>
    <div class="container-sm d-none d-md-block">
        <div class="header-router">
            <!-- <div class="col-md">
                <RouterLink to="/">
                    <img id="logo-home-page" src="/images/Logo_LightIcon.png" alt="" />
                </RouterLink>
            </div> -->
            <div class="col-auto row align-self-center">
                <div class="d-none d-md-block" id="header-links">
                    <RouterLink to="/" class="header-btn text-decoration-none fw-bold text-center" id="home-page">
                        Home
                    </RouterLink>
                    <RouterLink to="/about-me" class="header-btn text-decoration-none ms-5 fw-bold" id="about-me">
                        About Me
                    </RouterLink>
                    <RouterLink to="/my-works" class="header-btn text-decoration-none ms-5 fw-bold" id="my-projects">
                        My Projects
                    </RouterLink>
                    <span class="text-decoration-none ms-5">
                        <button type="button" id="get-in-touch" @click="scrollToView('footer-block')">Get In Touch</button>
                    </span>
                </div>
            </div>
        </div>
    </div>
    <div class="header-bg-mobile">
        <transition :duration="450" name="nested">
            <div v-if="show" class="d-block d-md-none h1 sidebar-navigation sidebar-block fixed-header-text"
                id="fixedSidebar" data-toggle="animation" data-animation-reset="true" data-animation="slide-right">
                <div class="menu-mobile-bg">
                </div>
                <div class="sidebar-content">
                    <div class="fixed-header-text">
                        <RouterLink to="/" @click="closePopup()" class="mb-3 text-white text-decoration-none text-center sidebar-item w-100">
                            Home
                        </RouterLink>
                        <RouterLink to="/about-me" @click="closePopup()" class="mb-3 text-white text-decoration-none text-center sidebar-item w-100">
                            About me
                        </RouterLink>
                        <RouterLink to="/my-works" @click="closePopup()" class="mb-3 text-white text-decoration-none text-center sidebar-item w-100">
                            My Projects
                        </RouterLink>
                        <RouterLink to="/contact-me" @click="closePopup()"
                            class="mb-3 text-white text-decoration-none text-center sidebar-item w-100">
                            Get in touch
                        </RouterLink>
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
</style>