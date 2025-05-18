<template>
    <div id="sidebar-block" class="sidenav display-sidebar">
        <span class="close-btn" @click="closeSideBar()">&times;</span>
        <RouterLink to="/" class="nav-link-txt" @click="closeSideBar()">
            Home
        </RouterLink>
        <RouterLink to="/about-me" class="nav-link-txt" @click="closeSideBar()">
            About me
        </RouterLink>
        <RouterLink to="/my-projects" class="nav-link-txt" @click="closeSideBar()" id="my-projects-side">
            My Projects
        </RouterLink>
        <span @click="scrollToContact()" class="contact-me nav-link-txt">
            Contact
        </span>
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