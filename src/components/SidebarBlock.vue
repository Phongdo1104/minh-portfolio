<template>
    <div id="sidebar-block" class="sidenav display-sidebar">
        <span class="close-btn" @click="closeSideBar()">&times;</span>
        <RouterLink to="/" class="nav-link-txt" @click="closeSideBar()">
            Home
        </RouterLink>
        <RouterLink to="/about-me" class="nav-link-txt" @click="closeSideBar()">
            About me
        </RouterLink>
        <RouterLink to="/my-projects" class="nav-link-txt" @click="closeSideBar()">
            My Projects
        </RouterLink>
        <span @click="scrollToContact()" class="contact-me nav-link-txt">
            Contact
        </span>
    </div>
</template>

<script lang="ts" setup>
import './../assets/sidebar.css';

function closeSideBar() {
    const sidebar = document.getElementById('sidebar-block');
    if (!sidebar) {
        return;
    }

    sidebar.style.width = "0";
    sidebar.style.opacity = "0";

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
    closeSideBar();
}
</script>