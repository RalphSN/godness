<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';

import heroTitle from '@/assets/img/hero-title.png';
import heroTitleMobile from '@/assets/mobile/hero-title.png';

let apkDL = () => {
    location.href = "https://cdn.g18apk.xyz/gnsr15cps/NS-NSR15.apk";
}
const comingSoon = () => {
    alert('Coming Soon!');
}
const isMobile = ref(false);
let mql;

const target = ref(null);
const mouseX = ref(0);
const mouseY = ref(0);

const bgFactor = 0.02;
const textFactor = 0.05;

const updateIsMobile = () => {
    isMobile.value = window.matchMedia('(max-width: 768px)').matches;
};

const titleSrc = computed(() => (isMobile.value ? heroTitleMobile : heroTitle));

const handleMouseMove = (e) => {
    const x = e.clientX - window.innerWidth / 2;
    const y = e.clientY - window.innerHeight / 2;

    mouseX.value = x;
    mouseY.value = y;
};

const bgStyle = computed(() => ({
    transform: `translate(${mouseX.value * bgFactor}px, ${mouseY.value * bgFactor}px) scale(1.1)`
}));

const contentStyle = computed(() => ({
    transform: `translate(${mouseX.value * -textFactor}px, ${mouseY.value * -textFactor}px)`
}));

const showScroll = ref(true);

const checkScroll = () => {
    showScroll.value = window.scrollY < 100;
};

onMounted(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', checkScroll);

    mql = window.matchMedia('(max-width: 768px)');
    updateIsMobile();

    if (mql.addEventListener) mql.addEventListener('change', updateIsMobile);
    else mql.addListener(updateIsMobile);
});

onUnmounted(() => {
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('scroll', checkScroll);

    if (mql) {
        if (mql.removeEventListener) mql.removeEventListener('change', updateIsMobile);
        else mql.removeListener(updateIsMobile);
    }
});
</script>

<template>
    <section id="hero" class="hero-section" ref="target">

        <div class="video-bg" :style="bgStyle">
            <video class="placeholder-video" autoplay muted loop playsinline
                poster="https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=2069">
            </video>
            <div class="fallback-img"></div>
        </div>

        <div class="overlay"></div>

        <div class="content fade-in-up" :style="contentStyle">
            <div class="hero-img"><img src="@/assets/img/hero-img.png" alt=""></div>
            <div class="hero-info">
                <h1 class="main-title"><img :src="titleSrc" alt="title"></h1>
                <p class="subtitle"><img src="@/assets/img/hero-subtitle.png" alt="subtitle"></p>

                <div class="btn-group">
                    <button class="store-btn apk" @click="comingSoon"><img src="@/assets/img/apk.png" alt=""></button>
                    <div class="store-btns">
                        <button class="store-btn ios" @click="comingSoon">
                            <img src="@/assets/img/apple.png" alt="">
                        </button>
                        <button class="store-btn android" @click="comingSoon">
                            <img src="@/assets/img/google.png" alt="">
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="scroll-indicator" :class="{ 'hidden': !showScroll }">
            <div class="mouse">
                <div class="wheel"></div>
            </div>
            <div class="arrows">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>

    </section>
</template>

<style lang="scss" scoped>
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(40px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes scrollWheel {
    0% {
        opacity: 1;
        transform: translateY(0);
    }

    100% {
        opacity: 0;
        transform: translateY(20px);
    }
}

@keyframes scrollArrow {
    0% {
        opacity: 0;
        transform: rotate(45deg) translate(-5px, -5px);
    }

    50% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: rotate(45deg) translate(5px, 5px);
    }
}

@keyframes floating {
    0% {
        transform: translateY(10px);
    }

    50% {
        transform: translateY(-20px);
    }

    100% {
        transform: translateY(10px);
    }
}

@keyframes autoGlint {
    0% {
        left: -150%;
    }

    20% {
        left: 150%;
    }

    100% {
        left: 150%;
    }
}

.hero-section {
    position: relative;
    min-height: 100vh;
    width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 20px;
    background: url('@/assets/img/hero-bg.jpg') no-repeat center center / cover;

    @media (max-width: 768px) {
        padding: 0;
        background: url('@/assets/mobile/hero-bg.png') no-repeat center center / cover;
    }

}

.video-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -2;
    transition: transform 0.1s linear;

    display: none;

    .fallback-img {
        width: 100%;
        height: 100%;
        background: url('@/assets/img/hero-bg.jpg') no-repeat center center/cover;
        filter: grayscale(80%) brightness(0.4);
    }

    video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0.6;

    }
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, transparent 0%, #050505 90%);
    z-index: -1;
    pointer-events: none;
}

.content {
    width: 100%;
    padding: 0 5%;
    margin-top: 95px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 1;
    animation: fadeInUp 1s ease-out 0.3s forwards;
    opacity: 0;
    transition: transform 0.1s linear;


    @media (max-width: 768px) {
        flex-direction: column-reverse;
        padding: 0;
    }

    .hero-img {
        width: 50%;
        animation: floating 5s ease-in-out infinite;
        max-width: 600px;

        @media (max-width: 768px) {
            width: 100%;
        }

        img {
            width: 100%;
            height: auto;
            object-fit: contain;
        }
    }

    .hero-info {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        max-width: 600px;

        @media (max-width: 768px) {
            width: 100%;
        }

        img {
            width: 100%;
            height: auto;
            object-fit: contain;
        }
    }

    .main-title {
        max-width: 80%;
    }

    .subtitle {
        max-width: 80%;
        margin-bottom: 30px;
    }
}

.btn-group {
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: url('@/assets/img/btn-bg.png') no-repeat center center/contain;
    max-width: 80%;
    width: 100%;
    height: auto;
    aspect-ratio: 5 / 2;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        gap: 15px;
        position: absolute;
        bottom: 100px;
        background: none;
    }

    @media (max-width: 430px) {
        bottom: 30px;
    }

    .store-btns {
        display: flex;
        gap: 10px;

        @media (max-width: 768px) {
            flex-direction: column;
        }
    }

    .store-btn {
        cursor: pointer;
        backdrop-filter: blur(5px);
        transition: transform 0.2s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        position: relative;
        overflow: hidden;

        @media (max-width: 768px) {
            width: 160px;
        }

        img {
            width: 100%;
            height: auto;
            object-fit: contain;
        }

        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: -150%;
            width: 50%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
            transform: skewX(-25deg);
            animation: autoGlint 4s infinite;
        }

        &:hover {
            transform: scale(1.05);
        }
    }

    .apk {
        width: 50%;

        @media (max-width: 768px) {
            width: 170px;
        }
    }
}


.scroll-indicator {
    position: absolute;
    bottom: 120px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    transition: opacity 0.5s;
    z-index: 10;

    @media (max-width: 768px) {
        bottom: 40px;
        transform: scale(0.7) translateX(-50%);
    }

    &.hidden {
        opacity: 0;
        pointer-events: none;
    }

    .mouse {
        width: 30px;
        height: 50px;
        border: 2px solid rgba(255, 255, 255, 0.6);
        border-radius: 20px;
        position: relative;


        .wheel {
            width: 4px;
            height: 8px;
            background: white;
            border-radius: 2px;
            position: absolute;
            top: 10px;
            right: 40.5%;
            animation: scrollWheel 1.5s infinite;
        }
    }

    .arrows {
        span {
            display: block;
            width: 10px;
            height: 10px;
            border-bottom: 2px solid rgba(255, 255, 255, 0.6);
            border-right: 2px solid rgba(255, 255, 255, 0.6);
            transform: rotate(45deg);
            margin: -5px;
            animation: scrollArrow 2s infinite;

            &:nth-child(2) {
                animation-delay: 0.2s;
            }

            &:nth-child(3) {
                animation-delay: 0.4s;
            }
        }
    }
}
</style>