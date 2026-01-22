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
    // console.log(new URL(`../../assets/world/${name}`, import.meta.url).href);
    return new URL(`../../assets/world/${name}`, import.meta.url).href;

};

// 模擬 Mock Data
const mockApiResponse = [
    {
        id: 1,
        image: getImageUrl('1.png'),
        title: '被編碼的幸福',
        subTitle: '',
        content: '地表崩壞後，人類社會全面依賴「知識晶片」。統治階級掌握「高維晶片」，負責制定真理與秩序；居民則被植入「限制晶片」，活在被修剪過的歷史、被設計的快樂與永恆滿足中。世界表面穩定、井然有序，沒有人質疑「幸福」的來源。'
    },
    {
        id: 2,
        image: getImageUrl('2.png'),
        title: '共鳴者的覺醒',
        subTitle: '',
        content: '一群女性因漏洞、事故或未知的神經共鳴，短暫接觸到未受限的晶片資料。虛假世界瞬間瓦解，她們看見真實天空的死寂、人類被當作能源與數據來源的殘酷事實。覺醒不是解放，而是精神崩潰與存在意義的全面崩塌。'
    },
    {
        id: 3,
        image: getImageUrl('3.png'),
        title: '日常中的裂縫',
        subTitle: '',
        content: '她們嘗試回到原本的生活，卻發現限制晶片開始「修正」她們的情緒與記憶。細微的異常逐漸浮現：夢境失控、快樂延遲、系統警告。她們彼此確認對方的存在，意識到原來自己並非個案，而是被忽略的錯誤集合。'
    },
    {
        id: 4,
        image: getImageUrl('4.png'),
        title: '被設計的任務',
        subTitle: '',
        content: '一次看似普通的晶片偷運行動展開。任務內容合理、報酬穩定，卻暗藏多層監控與誘導。行動途中，她們逐步發現這是統治階級用來篩選、定位並回收「異常個體」的陷阱。真相不再只是被看見，而是親手主動撕裂。'
    },
    {
        id: 4,
        image: getImageUrl('5.png'),
        title: '選擇的代價',
        subTitle: '',
        content: '她們站在抉擇點：配合系統、抹除覺醒，換取社會的短暫和平；或公開真相，引發失控、鎮壓，甚至人類文明的重置。抗爭不再是英雄式反抗，而是對「我的存在是否值得延續？」的集體回答。故事，在此正式開始。'
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
    <section class="world-view-section" id="world">
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
    // min-height: 100vh;
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
        text-shadow: 4px 4px 0px rgba(0, 114, 180, 0.432);
    }

    .sub-title-wrapper {
        position: relative;
        display: inline-block;
        // margin-top: 10px;

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
    bottom: -30px;
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