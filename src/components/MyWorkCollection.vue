<script setup lang="ts">
import MyWorkBlock from '../components/MyWorkBlock.vue';
</script>
<template>
    <div id="my-work-collection">
        <div v-motion :initial="{ opacity: 0, y: 100 }" :enter="{ opacity: 1, y: 0 }" :delay="0" :duration="600">
            <MyWorkBlock workTitle="2024 Showreel" roleBgClass="showreel" businessObjBgSrc="/images/mediaHolder.png"
                workInfoBgClass="loop-showreel-gif" id="showreel-block" embeddedLinks='<iframe width="560" height="315"
                            src="https://www.youtube.com/embed/iVhZhoVYjBo?si=IJPiz-arc8Jk9MWr"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                embeddedClass="embedded-link-wrapper"
                myBgDescription='A showcase of past projects woven together under a storyline, which highlights editing skills while delivering clear and impactful message through supers'
                myRoleDescription='Creative Direction /Video Editing / Sound Design'
                editingStyleDesc='Cinematic / Fast-paced / Text Overlays' embeddedThumbnail='showreel'
                darkenLayerFlg=''
                thumbnailUrl="/images/MyWorks/Showreel/Showreel.mp4" />
        </div>
        <div v-motion :initial="{ opacity: 0, y: 100 }" :visible-once="{ opacity: 1, y: 0 }" :delay="0" :duration="600">
            <MyWorkBlock workTitle="Tech Guide" roleBgClass="tech-guide-bg" businessObjBgSrc="/images/mediaHolder.png"
                workInfoBgClass="loop-showreel-gif" id="tutorial-video"
                embeddedLinks='<iframe width="560" height="315" src="https://www.youtube.com/embed/yT3FjRpkfjA?si=daVKHFDjuueX4Nfh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                embeddedClass="embedded-link-wrapper"
                myBgDescription='Pointer Clicker YouTube Channel delivers engaging tech guides and practical tips, ensuring viewers gain valuable insights with clarity and ease'
                myRoleDescription='Videography / Video Production / Scriptwriting'
                editingStyleDesc='Tech Guide / Product Showcase / Tutorial B-Roll' embeddedThumbnail='tech-guide-bg'
                darkenLayerFlg=''
                thumbnailUrl="/images/MyWorks/TechGuide/Tech.mp4" />
        </div>
        <div v-motion :initial="{ opacity: 0, y: 100 }" :visible-once="{ opacity: 1, y: 0 }" :delay="0" :duration="600">
            <MyWorkBlock workTitle="Event Highlights" roleBgClass="event-highlight-bg"
                businessObjBgSrc="/images/mediaHolder.png" workInfoBgClass="loop-showreel-gif" id="event-recap"
                embeddedLinks='<iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Flinhthaiofficial%2Fvideos%2F604544468898831%2F&width=2320&show_text=false&height=1305&appId" width="2320" height="1305" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>'
                embeddedClass="embedded-link-wrapper-facebook"
                myBgDescription='Event highlights featuring Shark Thai Van Linh - a KOL in career growth and self-development, as guest speaker at the Huawei MatePad Pro launch'
                myRoleDescription='Photography Direction / Videography / Video Editing'
                editingStyleDesc='Modern / Vibrant / Elegant' embeddedThumbnail='event-highlight-bg'
                darkenLayerFlg=''
                thumbnailUrl="/images/MyWorks/EventRecap/Event.mp4" />
        </div>
        <div v-motion :initial="{ opacity: 0, y: 100 }" :visible-once="{ opacity: 1, y: 0 }" :delay="0" :duration="600">
            <MyWorkBlock workTitle="Motion T.V.C." roleBgClass="motion-tvc-bg"
                businessObjBgSrc="/images/mediaHolder.png" workInfoBgClass="loop-showreel-gif" id="tvc-video"
                embeddedLinks='<iframe width="560" height="315" src="https://player.vimeo.com/video/1042747953?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                embeddedClass="embedded-link-wrapper"
                myBgDescription="A video ad showcasing LivWell's face scan feature - a wellness and insurance mobile app, in collaboration with Shark Thai Van Linh, a Vietnamese KOL in business, career, and wellness"
                myRoleDescription='Photography Direction / Graphic Motion Design / Video Editing'
                editingStyleDesc='Modern / Vibrant / Data Visualization' embeddedThumbnail='motion-tvc-bg'
                darkenLayerFlg=''
                thumbnailUrl="/images/MyWorks/TVC/TVC.mp4" />
        </div>
        <div v-motion :initial="{ opacity: 0, y: 100 }" :visible-once="{ opacity: 1, y: 0 }" :delay="0" :duration="600">
            <MyWorkBlock workTitle="Podcast Highlights" roleBgClass="podcast-bg"
                businessObjBgSrc="/images/mediaHolder.png" workInfoBgClass="loop-showreel-gif" id="podcast-highlight"
                embeddedLinks='<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7055074561360363520?compact=1" height="399" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>'
                embeddedClass="embedded-link-wrapper"
                myBgDescription='A series showcasing the stories of employees at Arches - a business consulting service, reflecting its dynamic, multinational work environmentt'
                myRoleDescription='Videography / Editing'
                editingStyleDesc='Professionalism / Dynamic / Energetic / Fast-paced.' embeddedThumbnail='podcast-bg'
                darkenLayerFlg='enable-dark-layer'
                thumbnailUrl="/images/MyWorks/Podcast/Podcast.mp4" />
        </div>
        <div v-motion :initial="{ opacity: 0, y: 100 }" :visible-once="{ opacity: 1, y: 0 }" :delay="0" :duration="600">
            <MyWorkBlock workTitle="K.O.P / Talking Head" roleBgClass="kop-bg"
                businessObjBgSrc="/images/mediaHolder.png" workInfoBgClass="loop-showreel-gif" id="kop-video"
                embeddedLinks='<iframe width="560" height="315" src="https://www.youtube.com/embed/PJ8X0krx-9E?si=iZA0Zzd6UutkrOPG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                embeddedClass="embedded-link-wrapper"
                myBgDescription='Handy tips with Huawei MatePad Pro 12.2” shared by Shark Thai Van Linh - a KOL on career growth and self development'
                myRoleDescription='Photography Direction / Video Editing / Motion Graphics Design'
                editingStyleDesc='Modern / Vibrant / Elegant' embeddedThumbnail='kop-bg' darkenLayerFlg=''
                thumbnailUrl="/images/MyWorks/KOP/KOP.mp4" />
        </div>
        <div v-motion :initial="{ opacity: 0, y: 100 }" :visible-once="{ opacity: 1, y: 0 }" :delay="0" :duration="600">
            <MyWorkBlock workTitle="Street Videography" roleBgClass="street-video-bg"
                businessObjBgSrc="/images/mediaHolder.png" workInfoBgClass="loop-showreel-gif" id="street-video"
                embeddedLinks='<iframe width="560" height="315" src="https://player.vimeo.com/video/1042747953?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                embeddedClass="embedded-link-wrapper"
                myBgDescription='-' myRoleDescription='Photography Direction / Video Editing / Motion Graphics Design'
                editingStyleDesc='Modern / Vibrant / Elegant' embeddedThumbnail='street-video-bg'
                darkenLayerFlg='enable-dark-layer'
                thumbnailUrl="/images/MyWorks/Showreel/Showreel.mp4" />
        </div>
    </div>
</template>