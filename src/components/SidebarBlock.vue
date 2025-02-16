<template>
    <div id="sidebar-block" class="sidenav display-sidebar">
        <span class="close-btn" @click="closeSideBar(true)">&times;</span>
        <RouterLink to="/" @click="closeSideBar()">
            Home
        </RouterLink>
        <RouterLink to="/about-me" @click="closeSideBar()">
            About me
        </RouterLink>
        <RouterLink to="/my-works" @click="closeSideBar()">
            My Projects
        </RouterLink>
        <span @click="scrollToContact()" class="contact-me">
            Contact
        </span>
    </div>
</template>

<script lang="ts" setup>
import './../assets/sidebar.css';

function closeSideBar(skipScrollTop: boolean = false) {
    const sidebar = document.getElementById('sidebar-block');
    if (!sidebar) {
        return;
    }

    sidebar.style.width = "0";

    if (!skipScrollTop) {
        window.scrollTo({
            top: 0,
            behavior: 'instant'
        });
    }

    const menuBurger = document.getElementById('MenuBurger');
    if (!menuBurger) {
        return;
    }
    menuBurger.classList.remove('menu-burger-in');
    menuBurger.classList.add('menu-burger-out');
}

function scrollToContact() {
    const element = document.getElementById('footer-block')
    element?.scrollIntoView({ behavior: "smooth" });
    closeSideBar(true);
}
</script>