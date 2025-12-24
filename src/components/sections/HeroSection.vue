<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';

// --- 1. 視差效果邏輯 (Parallax) ---
const target = ref(null); // 綁定整個 section
const mouseX = ref(0);
const mouseY = ref(0);

// 設定靈敏度 (數值越小移動越不明顯，製造層次感)
const bgFactor = 0.02; // 背景移動幅度小 (遠景)
const textFactor = 0.05; // 文字移動幅度大 (近景)

const handleMouseMove = (e) => {
    // 計算滑鼠相對於視窗中心的偏移量
    const x = e.clientX - window.innerWidth / 2;
    const y = e.clientY - window.innerHeight / 2;

    mouseX.value = x;
    mouseY.value = y;
};

// 計算 CSS transform 樣式
const bgStyle = computed(() => ({
    transform: `translate(${mouseX.value * bgFactor}px, ${mouseY.value * bgFactor}px) scale(1.1)`
}));

const contentStyle = computed(() => ({
    transform: `translate(${mouseX.value * -textFactor}px, ${mouseY.value * -textFactor}px)`
}));

// --- 2. 滾動提示邏輯 (Scroll Indicator) ---
const showScroll = ref(true);

const checkScroll = () => {
    // 如果滾動超過 100px 就隱藏提示
    showScroll.value = window.scrollY < 100;
};

// --- 生命週期綁定 ---
onMounted(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', checkScroll);
});

onUnmounted(() => {
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('scroll', checkScroll);
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
                <h1 class="main-title"><img src="@/assets/img/hero-title.png" alt="title"></h1>
                <p class="subtitle"><img src="@/assets/img/hero-subtitle.png" alt="subtitle"></p>

                <div class="btn-group">
                    <button class="store-btn ios">
                        <img src="@/assets/img/apple.png" alt="">
                    </button>
                    <button class="store-btn android">
                        <img src="@/assets/img/google.png" alt="">
                    </button>
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
/* 進場動畫 */
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

/* 滾動提示動畫 */
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

.hero-section {
    position: relative;
    height: 100vh;
    width: 100%;
    overflow: hidden;
    /* 防止視差移動時跑出白邊 */
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 20px;
    background: url('@/assets/img/hero-bg.jpg') no-repeat 100% 100%/cover;
}

.video-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -2;
    transition: transform 0.1s linear;
    /* 讓跟隨滑鼠更平滑 */

    /* 預設背景圖 (當沒有影片時) */
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
        /* 調整影片亮度 */
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
    /* 讓滑鼠事件能穿透到下層 */
}

.content {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    animation: fadeInUp 1s ease-out 0.3s forwards;
    opacity: 0;
    transition: transform 0.1s linear;

    .hero-img {
        width: 50%;
        animation: floating 5s ease-in-out infinite;

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }

    .hero-info {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

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
    gap: 20px;
    justify-content: center;
    align-items: center;
    background: url('@/assets/img/btn-bg.png') no-repeat center center/contain;
    max-width: 80%;
    width: 100%;
    height: auto;
    aspect-ratio: 5 / 2;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        gap: 15px;
    }

    .store-btn {
        cursor: pointer;
        backdrop-filter: blur(5px);
        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        position: relative;
        overflow: hidden;

        img {
            width: 100%;
            height: auto;
            object-fit: contain;
        }

        .icon {
            font-size: 24px;
        }

        /* 按鈕掃光特效 */
        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 50%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
            transform: skewX(-25deg);
            transition: 0.5s;
        }

        &:hover {
            transform: translateY(-3px);

            &::before {
                left: 150%;
            }
        }
    }
}

/* 滾動提示樣式 */
.scroll-indicator {
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    transition: opacity 0.5s;
    z-index: 10;

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