<template>
    <div class="menu-burger menu-burger-out d-md-mobile" id="scrollTopBtn">
        <span class="d-flex" href="#" @click="scrollToTop()">
            <img class="img-fluid" src="/svg/menu-btn.svg" alt="ScrollTop">
        </span>
    </div>
</template>
<script lang="ts" setup>
function scrollToTop() {
    console.log("scroll");
    // window.scrollTo(0, 0);
}

window.onscroll = () => {
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    const headerBlock = document.getElementById('header-block')?.getBoundingClientRect();

    if (!headerBlock) {
        return;
    }

    let headerVisible = headerBlock.top >= 0 &&
        headerBlock.left >= 0 &&
        headerBlock.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        headerBlock.right <= (window.innerWidth || document.documentElement.clientWidth)

    if (!headerVisible) {
        scrollTopBtn?.classList.add("menu-burger-in");
        scrollTopBtn?.classList.remove("menu-burger-out");
    } else {
        scrollTopBtn?.classList.add("menu-burger-out");
        scrollTopBtn?.classList.remove("menu-burger-in");
    }
}
</script>