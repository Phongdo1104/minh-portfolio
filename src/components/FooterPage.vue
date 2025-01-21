<template>
    <div class="footer-bg overflow-hidden" v-motion-fade>
        <div class="position-relative d-flex justify-content-center footer-info-block"
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :visible-once="{ opacity: 1, y: 0 }"
            :delay="100"
            :duration="1000"
        >
            <img class="img-fluid footer-img" src="/images/Footer-resize.png" alt="Minh_with_header.png">
            <div
                class="position-absolute d-flex border-bottom border-dark border-3 justify-content-between d-none slogan-top">
                <div class="slogan-text">let's make</div>
                <div class="slogan-text">a spectacular</div>
            </div>
            <div
                class="position-absolute h1 d-flex border-bottom border-dark border-3 justify-content-between d-none slogan-bottom">
                <div>
                    <img class="gif-slogan img-fluid" src="/images/YouTube_videos_edited.gif" alt="">
                </div>
                <div class="slogan-text">together!</div>
            </div>
            <div class="position-absolute info-btn contact-info-block">
                <div class="row d-flex justify-content-evenly" id="icon-contact">
                    <a href="https://www.behance.net/minhngeditor" target="_blank" class="col-auto btn-prop d-none responsive-icon-black">
                        <img class="icon-contact" src="/svg/Instagram.svg" alt="">
                    </a>
                    <a href="https://www.behance.net/minhngeditor" target="_blank" class="col-auto btn-prop d-flex responsive-icon-white invert-color-icon">
                        <img class="icon-contact" src="/svg/Instagram.svg" alt="">
                    </a>
                    <a href="https://www.linkedin.com/in/minh-nguyen-smvideoeditor" target="_blank" class="icon-mid-left col-auto btn-prop invert-color-icon">
                        <img class="icon-contact" src="/svg/Linkedin.svg" alt="">
                    </a>
                    <a href="mailto:minh.nguyen.editor@gmail.com" class="icon-mid-right col-auto btn-prop invert-color-icon">
                        <img class="icon-contact" src="/svg/Mail.svg" alt="">
                    </a>
                    <a href="#" class="col-auto btn-prop d-none responsive-icon-black">
                        <img class="icon-contact" src="/svg/Icon.svg" alt="">
                    </a>
                    <a href="#" class="col-auto btn-prop d-flex responsive-icon-white invert-color-icon">
                        <img class="icon-contact" src="/svg/Icon.svg" alt="">
                    </a>
                </div>
            </div>
            <div class="position-absolute bottom-0 text-white copyright">
                <p>© Design by Minh Nguyen 2024</p>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import '../assets/footer-page.css';
</script>