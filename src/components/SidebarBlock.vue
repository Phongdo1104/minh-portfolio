<template>
    <div id="sidebar-block" class="sidenav display-sidebar">
        <span class="close-btn" @click="closeSideBar()">&times;</span>
        <RouterLink to="/" class="nav-link-txt sidebar-highlight-btn" @click="closeSideBar()">
            <span>Home</span>
        </RouterLink>
        <RouterLink to="/about-me" class="nav-link-txt sidebar-highlight-btn" @click="closeSideBar()">
            <span>About me</span>
        </RouterLink>
        <RouterLink to="/my-projects" class="nav-link-txt sidebar-highlight-btn" @click="closeSideBar()" id="my-projects-side">
            <span>My Projects</span>
        </RouterLink>
        <div class="sidebar-highlight-btn">
            <span @click="scrollToContact()" class="contact-me nav-link-txt">
                Contact
            </span>
        </div>
    </div>
</template>

<script lang="ts" setup>
import './../assets/sidebar.css';
import { closeSideBar } from '@/utils/utils';

function scrollToContact() {
    const element = document.getElementById('footer-block')
    element?.scrollIntoView({ behavior: "smooth" });
    closeSideBar();
}
</script>