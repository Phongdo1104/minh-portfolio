<template>
    <div class="d-flex menu-burger d-md-mobile" id="MenuBurger" @click="openSideBar()">
    </div>
</template>
<script lang="ts" setup>

function openSideBar() {
    const sidebar = document.getElementById('sidebar-block');
    if (!sidebar) {
        return;
    }

    sidebar.style.width = "400px";
    sidebar.style.opacity = "100";
}

window.onscroll = () => {
    const menuBurger = document.getElementById("MenuBurger");
    const headerBlock = document.getElementById('header-block')?.getBoundingClientRect();

    if (!headerBlock || !menuBurger) {
        return;
    }

    let headerVisible = headerBlock.top >= 0 &&
        headerBlock.left >= 0 &&
        headerBlock.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        headerBlock.right <= (window.innerWidth || document.documentElement.clientWidth)

    if (!headerVisible) {
        menuBurger.style.opacity = "1";
        menuBurger.style.display = "block";
        menuBurger.style.pointerEvents = "auto";
    } else {
        menuBurger.style.opacity = "0";
        menuBurger.style.display = "none";
        menuBurger.style.pointerEvents = "none";
    }
}
</script>