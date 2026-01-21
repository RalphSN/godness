<script setup>
import { ref, onMounted, computed } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

// --- 資料模擬 ---
const isLoading = ref(true);
const worldData = ref([]);
const activeIndex = ref(0);
const swiperInstance = ref(null);

// 動態引入圖片 (對應檔案結構 src/assets/img/)
const getImageUrl = (name) => {
    console.log(new URL(`../../assets/img/${name}`, import.meta.url).href);
    return new URL(`../../assets/img/${name}`, import.meta.url).href;

};

// 模擬 Mock Data
const mockApiResponse = [
    {
        id: 1,
        image: getImageUrl('swiper1.jpg'),
        title: '覺醒力量，改寫命運',
        subTitle: 'Awakening Power',
        content: '在這個混沌的世界中，潛藏著未知的力量。少女們身穿戰鬥裝束，為了守護最後的希望而戰。每一次的覺醒，都是對命運的抗爭。'
    },
    {
        id: 2,
        image: getImageUrl('swiper2.jpg'),
        title: '探索秘境，收集奇遇',
        subTitle: 'Explore The Unknown',
        content: '廢墟之下掩埋著舊時代的文明遺產。深入無人踏足的禁區，尋找失落的科技與魔法，將其轉化為對抗強敵的利刃。'
    },
    {
        id: 3,
        image: getImageUrl('swiper3.jpg'),
        title: '策略搭配，決定勝負',
        subTitle: 'Strategic Battle',
        content: '單純的力量不足以生存。分析敵人的弱點，靈活運用屬性剋制與技能連攜。戰場上的瞬息萬變，唯有智者能掌握勝利的關鍵。'
    },
    {
        id: 4,
        image: getImageUrl('swiper4.jpg'),
        title: '角色養成，強者崛起',
        subTitle: 'Character Growth',
        content: '與性格迥異的夥伴們建立羈絆，解鎖專屬劇情與強大技能。從默默無聞的新兵，成長為獨當一面的傳奇指揮官。'
    }
];

// 模擬 API 請求
const fetchWorldData = async () => {
    try {
        isLoading.value = true;
        // 模擬網路延遲 800ms 展示 Loading 效果
        await new Promise(resolve => setTimeout(resolve, 800));
        worldData.value = mockApiResponse;
    } catch (e) {
        console.error("API Error", e);
    } finally {
        isLoading.value = false;
    }
};

onMounted(() => {
    fetchWorldData();
});

// Swiper 事件
const onSwiper = (swiper) => {
    swiperInstance.value = swiper;
};

const onSlideChange = (swiper) => {
    activeIndex.value = swiper.realIndex;
};

// 取得當前顯示的資料內容
const currentContent = computed(() => {
    return worldData.value[activeIndex.value] || {};
});

</script>

<template>
    <section class="world-view-section">
        <div class="bg-scanlines"></div>
        <div class="bg-vignette"></div>

        <div class="container">

            <div class="header-group" :class="{ 'fade-in': !isLoading }">
                <h2 class="main-title">世界觀</h2>
                <div class="sub-title-wrapper">
                    <span class="sub-title">WORLD OUTLOOK</span>
                    <div class="deco-line"></div>
                </div>
            </div>

            <div v-if="isLoading" class="skeleton-loader">
                <div class="sk-image"></div>
                <div class="sk-text-block">
                    <div class="sk-title"></div>
                    <div class="sk-desc"></div>
                    <div class="sk-desc short"></div>
                </div>
            </div>

            <div v-else class="content-wrapper">

                <div class="carousel-stage animate-up">

                    <button class="nav-arrow prev" @click="swiperInstance?.slidePrev()">
                        <div class="arrow-graphic"></div>
                    </button>

                    <div class="swiper-box">
                        <div class="frame-border top-left"></div>
                        <div class="frame-border bottom-right"></div>

                        <Swiper :modules="[Navigation, EffectFade, Autoplay]" effect="fade"
                            :fadeEffect="{ crossFade: true }" :speed="600" :loop="true"
                            :autoplay="{ delay: 5000, disableOnInteraction: false }" @swiper="onSwiper"
                            @slideChange="onSlideChange" class="world-swiper">
                            <SwiperSlide v-for="item in worldData" :key="item.id">
                                <div class="slide-inner">
                                    <img :src="item.image" :alt="item.title" class="slide-img" />
                                    <div class="img-overlay"></div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>

                    <button class="nav-arrow next" @click="swiperInstance?.slideNext()">
                        <div class="arrow-graphic"></div>
                    </button>
                </div>

                <div class="text-info-stage">
                    <transition name="text-fade" mode="out-in">
                        <div :key="activeIndex" class="info-content">
                            <div class="info-header">
                                <h3 class="info-title">{{ currentContent.title }}</h3>
                                <span class="info-subtitle">{{ currentContent.subTitle }}</span>
                            </div>

                            <div class="info-divider"></div>

                            <p class="info-desc">
                                {{ currentContent.content }}
                            </p>
                        </div>
                    </transition>

                    <div class="pagination-nums">
                        <span class="current">0{{ activeIndex + 1 }}</span>
                        <span class="slash">/</span>
                        <span class="total">0{{ worldData.length }}</span>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@400;700;900&family=Tekno:wght@400&display=swap');

/* === 變數定義 === */
$primary-blue: #2ebdff;
$tech-grey: #2a2a2a;
$bg-dark: #0a0a0a;
$text-white: #f0f0f0;


.world-view-section {
    position: relative;
    width: 100%;
    min-height: 100vh;
    background-color: $bg-dark;
    color: $text-white;
    font-family: 'Noto Serif TC', serif;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 80px 0;
    padding-top: 120px;
}

/* === 背景特效 === */
.bg-scanlines {
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(45deg,
            #111 0px,
            #111 2px,
            #161616 2px,
            #161616 4px);
    z-index: 0;
}

.bg-vignette {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle, transparent 40%, #000 100%);
    z-index: 1;
    pointer-events: none;
}

.container {
    position: relative;
    z-index: 2;
    width: 90%;
    max-width: 1280px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

/* === Header === */
.header-group {
    text-align: center;
    margin-bottom: 50px;
    opacity: 0;

    &.fade-in {
        animation: fadeInDown 0.8s ease forwards;
    }

    .main-title {
        font-size: 60px;
        font-weight: 900;
        margin: 0;
        letter-spacing: 5px;
        text-shadow: 4px 4px 0px rgba(180, 0, 0, 0.2);
    }

    .sub-title-wrapper {
        position: relative;
        display: inline-block;
        margin-top: 10px;

        .sub-title {
            font-family: sans-serif;
            font-size: 14px;
            letter-spacing: 12px;
            color: #666;
            text-transform: uppercase;
        }

        .deco-line {
            width: 100%;
            height: 2px;
            background: $primary-blue;
            margin-top: 5px;
            box-shadow: 0 0 10px $primary-blue;
        }
    }
}

/* === Loading Skeleton === */
.skeleton-loader {
    width: 100%;
    max-width: 900px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    animation: pulse 1.5s infinite;

    .sk-image {
        width: 100%;
        height: 450px;
        background: #1a1a1a;
        border: 1px solid #333;
    }

    .sk-text-block {
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }

    .sk-title {
        width: 150px;
        height: 30px;
        background: #222;
    }

    .sk-desc {
        width: 100%;
        height: 16px;
        background: #222;
    }

    .sk-desc.short {
        width: 60%;
    }
}

/* === 內容區塊 === */
.content-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
}

/* 輪播區 */
.carousel-stage {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    opacity: 0;

    &.animate-up {
        animation: slideUpFade 0.8s ease-out 0.2s forwards;
    }

    @media (max-width: 768px) {
        gap: 0;
    }
}

.swiper-box {
    position: relative;
    width: 800px;
    height: 450px;
    /* 16:9 ratio approx */
    background: #000;

    @media (max-width: 1024px) {
        width: 90vw;
        height: 50vw;
    }

    /* 裝飾紅框角 */
    .frame-border {
        position: absolute;
        width: 20px;
        height: 20px;
        border: 2px solid $primary-blue;
        z-index: 10;
        transition: 0.3s;

        &.top-left {
            top: -10px;
            left: -10px;
            border-bottom: none;
            border-right: none;
        }

        &.bottom-right {
            bottom: -10px;
            right: -10px;
            border-top: none;
            border-left: none;
        }
    }

    &:hover .frame-border {
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        opacity: 0.5;
    }
}

.world-swiper {
    width: 100%;
    height: 100%;
}

.slide-inner {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;

    .slide-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 5s ease;
    }

    /* 覆蓋層加強氛圍 */
    .img-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(to bottom, transparent 80%, rgba(0, 0, 0, 0.8));
    }
}

/* 圖片緩慢放大 */
.swiper-slide-active .slide-img {
    transform: scale(1.1);
}

/* 導航按鈕 */
.nav-arrow {
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 20px;
    outline: none;
    transition: 0.3s;

    @media (max-width: 768px) {
        position: absolute;
        z-index: 20;

        &.prev {
            left: 0;
        }

        &.next {
            right: 0;
        }
    }

    .arrow-graphic {
        width: 20px;
        height: 20px;
        border-top: 3px solid #666;
        border-right: 3px solid #666;
        transform: rotate(45deg);
        transition: 0.3s;
    }

    &.prev .arrow-graphic {
        transform: rotate(-135deg);
    }

    &:hover .arrow-graphic {
        border-color: $primary-blue;
        filter: drop-shadow(0 0 5px $primary-blue);
    }
}

/* 文字資訊區 */
.text-info-stage {
    width: 100%;
    max-width: 800px;
    text-align: center;
    position: relative;
    min-height: 150px;
}

.info-content {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.info-header {
    display: flex;
    align-items: baseline;
    gap: 15px;
    margin-bottom: 15px;

    .info-title {
        font-size: 32px;
        font-weight: bold;
        margin: 0;
        color: #fff;
    }

    .info-subtitle {
        font-size: 14px;
        color: $primary-blue;
        font-family: sans-serif;
        text-transform: uppercase;
        letter-spacing: 2px;
    }
}

.info-divider {
    width: 60px;
    height: 2px;
    background: #444;
    margin-bottom: 20px;
}

.info-desc {
    font-size: 16px;
    line-height: 1.8;
    color: #bbb;
    max-width: 90%;
    margin: 0;
}

/* 頁碼 */
.pagination-nums {
    position: absolute;
    right: 0;
    bottom: 0;
    font-family: sans-serif;
    font-size: 14px;
    color: #666;

    .current {
        color: $primary-blue;
        font-weight: bold;
        font-size: 18px;
    }

    .slash {
        margin: 0 5px;
    }
}

/* === Animations === */
@keyframes fadeInDown {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slideUpFade {
    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes pulse {
    0% {
        opacity: 0.6;
    }

    50% {
        opacity: 1;
    }

    100% {
        opacity: 0.6;
    }
}

/* Vue Transitions */
.text-fade-enter-active,
.text-fade-leave-active {
    transition: all 0.5s ease;
}

.text-fade-enter-from {
    opacity: 0;
    transform: translateY(10px);
}

.text-fade-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}
</style>