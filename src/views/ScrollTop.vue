<template>
    <div class="scroll-top scroll-top-out" id="scrollTopBtn">
        <a href="#" @click="scrollToTop()">
            <img class="img-fluid" src="/svg/ScrollTop.svg" alt="ScrollTop">
        </a>
    </div>
</template>
<script lang="ts" setup>
function scrollToTop() {
    window.scrollTo(0, 0);
}

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