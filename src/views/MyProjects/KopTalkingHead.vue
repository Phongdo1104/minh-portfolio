<script lang="ts" setup>
import MyWorkBlockHorizontal from '@/components/MyWorkBlockHorizontal.vue';

const styleContent = 'After experiencing ' + "Huawei's" + 'MatePad Pro and its key features during the launch phase, my first impression was:' + '"It feels like taking notes on paper, yet functions like a laptop — a handcrafted digital experience." That inspired the motion design, which mimics note-taking animations and blends modern, elegant visuals to bring the' + "product’s" + 'versatility to life.';
</script>
<template>
    <div>
        <MyWorkBlockHorizontal
            projectTitle="Talking Head"
            categoryDesc="Photography Direction, Editing, Motion Graphics "
            contentDesc="A hands-on review video produced in collaboration with Huawei and Shark Thai Van Linh - a KOL on career growth and self development, showcasing workplace efficiency tips through the practical application of the Huawei MatePad Pro."
            imgProject1="/images/place-holder-my-projects.png"
            editStyleCategory="Modern, Vibrant, Data Visualization."
            editStyleContent="After experiencing Huawei&apos;s MatePad Pro and its key features during the launch phase, my first impression was: &quot;It feels like taking notes on paper, yet functions like a laptop — a handcrafted digital experience.&quot; That inspired the motion design, which mimics note-taking animations and blends modern, elegant visuals to bring the product&apos;s versatility to life."
            editStyleImg="/images/place-holder-my-projects.png" imgProject2="/images/place-holder-my-projects.png"
            intersectImg="/images/place-holder-my-projects.png" imgProject3="/images/place-holder-my-projects.png"
            endImg="/images/place-holder-my-projects.png"
            prevProject='/my-projects/event-recap'
            nextProject='/my-projects/highlight-reel' />
    </div>
</template>