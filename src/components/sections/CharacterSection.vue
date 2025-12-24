<script setup>
import { ref, computed } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectFade, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

// --- 1. 角色資料 (這裡放幾位經典角色) ---
const characters = [
    {
        id: 1,
        name: '金木 研',
        subName: 'Ken Kaneki',
        cv: '花江 夏樹',
        type: 'rinkaku', // 鱗赫 (紅色)
        typeLabel: '鱗赫',
        desc: '「如果不戰鬥的話，就贏不了...」原本是普通的大學生，在事故後被移植了喰種的器官，成為了半喰種。',
        img: 'https://images.unsplash.com/photo-1630327947180-2646d97e7041?q=80&w=1000&auto=format&fit=crop', // 示意圖
        color: '#B90000' // 主題色
    },
    {
        id: 2,
        name: '霧嶋 董香',
        subName: 'Touka Kirishima',
        cv: '雨宮 天',
        type: 'ukaku', // 羽赫 (藍紫色)
        typeLabel: '羽赫',
        desc: '「我要在這裡生活下去。」咖啡廳「安定區」的店員。為了融入人類社會而努力上學，但戰鬥時會展現冷酷的一面。',
        img: 'https://images.unsplash.com/photo-1549492423-40025024443e?q=80&w=1000&auto=format&fit=crop', // 示意圖
        color: '#5C2D91'
    },
    {
        id: 3,
        name: '月山 習',
        subName: 'Shuu Tsukiyama',
        cv: '宮野 真守',
        type: 'koukaku', // 甲赫 (紫色/金)
        typeLabel: '甲赫',
        desc: '「Tre... Bien!」被稱為「美食家」的喰種。對金木研有著異常的執著，追求極致的美食體驗。',
        img: 'https://images.unsplash.com/photo-1614726365723-49faaa55a6d3?q=80&w=1000&auto=format&fit=crop', // 示意圖
        color: '#7B1FA2'
    }
];

// --- 2. 控制邏輯 ---
const activeIndex = ref(0);
const swiperRef = ref(null);

const onSwiper = (swiper) => {
    swiperRef.value = swiper;
};

const onSlideChange = (swiper) => {
    activeIndex.value = swiper.realIndex;
};

// 取得目前角色的主題色 (用於動態樣式)
const activeColor = computed(() => characters[activeIndex.value].color);
</script>

<template>
    <section id="character" class="char-section">
        <div class="bg-gradient"
            :style="{ background: `radial-gradient(circle at 70% 50%, ${activeColor}33 0%, transparent 60%)` }"></div>
        <div class="bg-noise"></div>

        <div class="container">
            <div class="section-header">
                <h2 class="title">角色介紹 <span class="en">CHARACTER</span></h2>
            </div>

            <div class="char-content">

                <div class="char-visual">
                    <Swiper :modules="[EffectFade, Autoplay]" effect="fade" :speed="600" :allowTouchMove="false"
                        @swiper="onSwiper" @slideChange="onSlideChange" class="char-swiper">
                        <SwiperSlide v-for="char in characters" :key="char.id">
                            <div class="img-wrapper">
                                <img :src="char.img" :alt="char.name" class="char-img" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div class="char-info">
                    <div class="info-inner" :key="activeIndex">
                        <div class="type-badge" :style="{ borderColor: activeColor, color: activeColor }">
                            {{ characters[activeIndex].typeLabel }}
                        </div>

                        <h3 class="name">
                            {{ characters[activeIndex].name }}
                            <span class="sub-name">{{ characters[activeIndex].subName }}</span>
                        </h3>

                        <div class="cv-box">
                            <span class="label">CV.</span>
                            <span class="cv-name">{{ characters[activeIndex].cv }}</span>
                            <button class="voice-btn">
                                <i class="icon-sound">🔊</i> Voice
                            </button>
                        </div>

                        <p class="desc">{{ characters[activeIndex].desc }}</p>
                    </div>

                    <div class="nav-buttons">
                        <button class="nav-btn prev" @click="swiperRef?.slidePrev()">
                            ← PREV
                        </button>
                        <div class="dots">
                            <span v-for="(char, index) in characters" :key="char.id"
                                :class="['dot', { active: index === activeIndex }]"
                                @click="swiperRef?.slideTo(index)"></span>
                        </div>
                        <button class="nav-btn next" @click="swiperRef?.slideNext()">
                            NEXT →
                        </button>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
/* 頁面佈局 */
.char-section {
    position: relative;
    min-height: 100vh;
    background-color: #050505;
    overflow: hidden;
    display: flex;
    align-items: center;
    padding: 80px 0;
}

/* 背景特效 */
.bg-gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: background 0.8s ease;
    /* 顏色切換過渡 */
    z-index: 0;
}

.bg-noise {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E");
    z-index: 1;
    pointer-events: none;
}

.container {
    max-width: 1400px;
    width: 90%;
    margin: 0 auto;
    position: relative;
    z-index: 2;
}

.section-header {
    margin-bottom: 40px;
    border-left: 5px solid var(--primary-red);
    padding-left: 20px;

    .title {
        font-size: 42px;
        color: white;
        margin: 0;

        .en {
            font-size: 20px;
            color: #666;
            display: block;
            font-weight: normal;
            letter-spacing: 2px;
        }
    }
}

/* 內容區塊 Flex 佈局 */
.char-content {
    display: flex;
    align-items: center;
    gap: 50px;
    height: 600px;

    @media (max-width: 960px) {
        flex-direction: column;
        height: auto;
    }
}

/* 左側：立繪 */
.char-visual {
    flex: 1;
    width: 100%;
    height: 100%;
    position: relative;

    .char-swiper {
        width: 100%;
        height: 100%;
    }

    .img-wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        .char-img {
            max-height: 100%;
            max-width: 100%;
            object-fit: contain;
            /* 加上一點投影增加立體感 */
            filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.5));
            /* 這裡可以加上進場動畫 */
            animation: float 6s ease-in-out infinite;
        }
    }
}

@keyframes float {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-10px);
    }
}

/* 右側：資訊 */
.char-info {
    flex: 0 0 450px;
    /* 固定寬度 */
    color: white;

    @media (max-width: 960px) {
        flex: auto;
        width: 100%;
        text-align: center;
    }

    /* 資訊切換動畫 */
    .info-inner {
        animation: slideIn 0.5s ease-out;
    }
}

@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateX(20px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.type-badge {
    display: inline-block;
    border: 1px solid;
    padding: 5px 15px;
    font-size: 14px;
    letter-spacing: 2px;
    margin-bottom: 20px;
    backdrop-filter: blur(5px);
}

.name {
    font-size: 60px;
    line-height: 1;
    margin: 0 0 20px;
    font-weight: 900;

    .sub-name {
        display: block;
        font-size: 24px;
        font-weight: normal;
        opacity: 0.5;
        margin-top: 5px;
        font-family: 'Arial', sans-serif;
    }

    @media (max-width: 768px) {
        font-size: 40px;
    }
}

.cv-box {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 30px;
    font-size: 18px;

    @media (max-width: 960px) {
        justify-content: center;
    }

    .label {
        color: var(--primary-red);
        font-weight: bold;
    }

    .voice-btn {
        background: #222;
        border: 1px solid #444;
        color: #ccc;
        padding: 5px 12px;
        border-radius: 20px;
        cursor: pointer;
        font-size: 12px;
        display: flex;
        align-items: center;
        gap: 5px;
        transition: 0.3s;

        &:hover {
            background: white;
            color: black;
        }
    }
}

.desc {
    font-size: 16px;
    line-height: 1.8;
    color: #bbb;
    margin-bottom: 50px;
    border-top: 1px solid #333;
    padding-top: 20px;
}

/* 導航控制列 */
.nav-buttons {
    display: flex;
    align-items: center;
    gap: 20px;
    border-top: 1px solid #333;
    padding-top: 30px;

    @media (max-width: 960px) {
        justify-content: center;
    }

    .nav-btn {
        background: transparent;
        border: none;
        color: #666;
        font-weight: bold;
        cursor: pointer;
        font-size: 16px;
        transition: 0.3s;

        &:hover {
            color: white;
        }
    }

    .dots {
        display: flex;
        gap: 10px;

        .dot {
            width: 40px;
            height: 4px;
            background: #333;
            cursor: pointer;
            transition: 0.3s;

            &.active {
                background: var(--primary-red);
            }
        }
    }
}
</style>