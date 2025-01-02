<template>
    <div class="background">
        <div class="container contact-block"
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :visible-once="{ opacity: 1, y: 0 }"
            :delay="100"
            :duration="1000"
        >
            <div class="body-info-contact">
                <div class="d-flex justify-content-center">
                    <div class="rect">
                        <div class="orange-rect">
                            <div class="position-relative">
                                <div
                                    class="position-absolute top-50 start-50 translate-middle text-white info-title text-center w-100">
                                    CONTACT
                                </div>
                            </div>
                        </div>
                        <div class="body-rect">
                            <div class="h5 text-end">
                                <div>Reach out via
                                    <a href="#" class="fw-bold info-text">
                                        minh.nguyen.editor@gmail.com
                                    </a>
                                </div>
                                <div>or book your call
                                    <a href="#" class="fw-bold info-text">
                                        right here
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row d-flex justify-content-end sub-contact-block pb-5">
                <div class="col-sm d-flex align-items-start justify-content-center contact-info">
                    <div class="text-end contact-info-text-block">
                        <div class="sub-title-contact h1 text-white text-uppercase">Address</div>
                        <div class="description-contact text-white">
                            Tran Phu, District 5,
                            <br>
                            Ho Chi Minh City, Vietnam
                        </div>
                    </div>
                </div>
                <div class="col-sm d-flex align-items-start justify-content-center">
                    <div class="text-end contact-info-text-block">
                        <div class="sub-title-contact h1 text-white text-uppercase">Phone call</div>
                        <div class="description-contact text-white">
                            (+84)93 784 4873
                        </div>
                    </div>
                </div>
                <div class="col-sm d-flex align-items-start justify-content-center">
                    <div class="text-end contact-info-text-block">
                        <div class="sub-title-contact h1 text-white text-uppercase">Social Media</div>
                        <div class="description-contact text-white d-block d-md-none">
                            You can click on the buttons below
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Footer -->
    <div id="footer-block">
        <FooterPage />
    </div>
</template>
<script lang="ts" setup>
import '../assets/contact-me.css'
import FooterPage from '../components/FooterPage.vue'
</script>