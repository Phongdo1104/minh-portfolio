<script setup lang="ts">
import FooterPage from '../components/FooterPage.vue'
import '../assets/not-found.css'
</script>
<template>
    <div class="background contact-block">
        <div class="body-info-contact">
            <div class="d-flex justify-content-center">
                <div class="rect">
                    <div class="body-rect">
                        <div class="h5 text-center p-3">
                            Sorry, this page doesn't exist!
                        </div>
                        <div class="text-center">
                            <router-link to="/">
                                <button type="button" class="btn-return">Back to home</button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Footer -->
        <div id="footer-block">
            <FooterPage />
        </div>
    </div>
</template>