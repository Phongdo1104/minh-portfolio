<template>
    <div class="menu-burger menu-burger-out d-md-mobile" id="MenuBurger">
        <span class="d-flex" href="#" @click="openSideBar()">
            <img class="img-fluid" src="/svg/menu-btn.svg" alt="MenuBurger">
        </span>
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
        menuBurger.classList.add("menu-burger-in");
        menuBurger.classList.remove("menu-burger-out");
    } else {
        menuBurger.classList.add("menu-burger-out");
        menuBurger.classList.remove("menu-burger-in");
    }
}
</script>