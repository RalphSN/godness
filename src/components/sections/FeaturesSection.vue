<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

import swiper1 from '@/assets/img/swiper1.jpg';
import swiper2 from '@/assets/img/swiper2.jpg';
import swiper3 from '@/assets/img/swiper3.jpg';
import swiper4 from '@/assets/img/swiper4.jpg';

const features = [
    { id: 1, img: swiper1, copyright: '' },
    { id: 2, img: swiper2, copyright: '' },
    { id: 3, img: swiper3, copyright: '' },
    { id: 4, img: swiper4, copyright: '' },
];

const displayFeatures = [...features, ...features].map((item, index) => ({
    ...item,
    uniqueKey: `slide-${index}`
}));

const swiperInstance = ref(null);
const activeIndex = ref(0);

const onSwiper = (swiper) => {
    swiperInstance.value = swiper;
};

const onSlideChange = (swiper) => {
    activeIndex.value = swiper.realIndex % features.length;
};

const handleDotClick = (index) => {
    if (swiperInstance.value) {
        swiperInstance.value.slideToLoop(index);
    }
};

const swiperOptions = {
    modules: [Navigation, EffectCoverflow, Autoplay],
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    effect: 'coverflow',
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loopedSlides: 4,

    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        768: {
            coverflowEffect: { depth: 300, stretch: 50 }
        }
    }
};
</script>

<template>
    <section id="features" class="features-section">
        <div class="container">
            <div class="section-header">
                <h2 class="title"><img src="@/assets/img/features-title.png" alt=""></h2>
            </div>

            <div class="features-swiper-container">
                <Swiper v-bind="swiperOptions" class="features-swiper" @swiper="onSwiper" @slideChange="onSlideChange">
                    <SwiperSlide v-for="feat in displayFeatures" :key="feat.uniqueKey">
                        <div class="feature-card">
                            <div class="card-img-box">
                                <img :src="feat.img" class="card-img" />
                                <img src="@/assets/img/swiper-bg.png" class="swiper-bg" alt="">
                            </div>
                            <p class="card-copyright">{{ feat.copyright }}</p>
                        </div>
                    </SwiperSlide>
                </Swiper>

                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>

                <div class="custom-pagination">
                    <span v-for="(item, index) in features" :key="item.id" class="pagination-bullet"
                        :class="{ 'active': activeIndex === index }" @click="handleDotClick(index)"></span>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.features-section {
    padding: 100px 0;
    overflow: hidden;
    background: url('@/assets/img/feature-bg.jpg') no-repeat center center / cover;

    // display: flex;
    // flex-direction: column;
    // justify-content: center;
    // align-items: center;
}

.container {
    margin: 0 auto;
    padding: 0 20px;
}

.section-header {
    text-align: center;
    padding-left: 25%;

    @media (max-width: 1440px) {
        padding-left: 15%;
    }

    @media (max-width: 1024px) {
        padding-left: 2%;
    }

    @media (max-width: 768px) {
        padding-left: 0;
    }

    .title {
        width: 200px;

        @media (max-width: 768px) {
            width: 100px;
        }

        img {
            width: 100%;
            height: auto;
            object-fit: contain;
        }
    }
}

.features-swiper-container {
    position: relative;
    padding: 20px 0 60px;
}

.features-swiper {
    overflow: visible;

    .swiper-slide {
        width: 800px;
        aspect-ratio: 1000 / 562;
        position: relative;
        transition: all 0.3s;
        opacity: 0.4;
        transform: scale(0.9);

        &.swiper-slide-active {
            opacity: 1;
            transform: scale(1);
        }

        @media (max-width: 768px) {
            width: 90%;
            height: auto;
            aspect-ratio: 16 / 9;
        }
    }
}

.feature-card {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);

    .card-img-box {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;

        .card-img {
            position: relative;
            width: 96%;
            height: auto;
            object-fit: contain;
            transition: transform 0.5s;
            z-index: 2;
        }

        .swiper-bg {
            position: absolute;
            width: 100%;
            height: auto;
            object-fit: contain;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            z-index: 1;
        }
    }

    .card-copyright {
        position: absolute;
        bottom: 15px;
        right: 20px;
        font-size: 10px;
        color: #555;
        margin: 0;
        z-index: 3;
    }

    @media (max-width: 960px) {
        flex-direction: column;

        .card-img-box {
            flex: auto;
            height: 60%;
            clip-path: none;
        }
    }
}

.swiper-button-prev,
.swiper-button-next {
    color: var(--primary-red);
    background: rgba(0, 0, 0, 0.8);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid var(--primary-red);
    display: none;

    &::after {
        font-size: 24px;
        font-weight: bold;
    }

    &:hover {
        background: var(--primary-red);
        color: white;
    }

    @media (max-width: 768px) {
        display: none;
    }
}

.custom-pagination {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    z-index: 10;

    background: url('@/assets/img/custom-bg.png') no-repeat center center / cover;
    padding: 5px 0;

    .pagination-bullet {
        width: 12px;
        height: 12px;
        background: #94E0FF;
        margin: 0 8px;
        cursor: pointer;
        transition: all 0.3s;
        transform: scale(0.8);

        @media (max-width: 768px) {
            width: 8px;
            height: 8px;
        }

        &.active {
            background: #274275;
            transform: scale(1);
        }
    }
}
</style>