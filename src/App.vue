<script setup lang="ts">
import { useRoute, RouterView } from 'vue-router'
import HeaderPage from './views/HeaderPage.vue'
import ScrollTop from './views/ScrollTop.vue'
import { watch } from 'vue'

const route = useRoute();

watch(() => route.name, () => {
    let currentRouteName = route.name;
    const display = ['my-works', 'contact-me'].includes(String(currentRouteName));
    const testimonialBlock = document.getElementById('testimonial-block');
    if (!display) {
        testimonialBlock?.classList.add('d-block');
        testimonialBlock?.classList.remove('d-none');
    } else {
        testimonialBlock?.classList.remove('d-block');
        testimonialBlock?.classList.add('d-none');
    }
});

window.onscroll = () => {
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn?.classList.add("scroll-top-in");
        scrollTopBtn?.classList.remove("scroll-top-out");
    } else {
        scrollTopBtn?.classList.add("scroll-top-out");
        scrollTopBtn?.classList.remove("scroll-top-in");
    }
}
</script>
<template>
    <div id="header-block">
        <!-- Header -->
        <HeaderPage />
    </div>
    <!-- body -->
    <div class="before-header" id="body">
        <router-view v-slot="{ Component }">
            <!-- Use a custom transition or fallback to `fade` -->
            <component :is="Component" />
            <!-- <transition :name="route.meta.transition || 'fade'">
            </transition> -->
        </router-view>
    </div>
    <div id="scroll-top">
        <ScrollTop />
    </div>
</template>
