<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

// --- 特色資料 (根據新設計調整結構) ---
const features = [
    {
        id: 1,
        title: '勝利',
        subTitle: '卡牌皆可 UR',
        desc: '更高自由的角色搭配，打破初始品質限制。',
        img: 'https://images.unsplash.com/photo-1630327947180-2646d97e7041?q=80&w=1000&auto=format&fit=crop', // 示意圖：神代利世風格
        copyright: '©Sui Ishida/Shueisha, Tokyo Ghoul Production Committee'
    },
    {
        id: 2,
        title: '策略',
        subTitle: '屬性剋制戰鬥',
        desc: '羽赫、甲赫、鱗赫、尾赫，利用剋制關係主導戰局。',
        img: 'https://images.unsplash.com/photo-1549492423-40025024443e?q=80&w=1000&auto=format&fit=crop', // 示意圖：戰鬥畫面
        copyright: '©Sui Ishida/Shueisha, Tokyo Ghoul Production Committee'
    },
    {
        id: 3,
        title: '簡單操作',
        subTitle: '華麗連擊體驗',
        desc: '即使是新手也能輕鬆打出帥氣的赫子連招。',
        img: 'https://images.unsplash.com/photo-1614726365723-49faaa55a6d3?q=80&w=1000&auto=format&fit=crop', // 示意圖：操作演示
        copyright: '©Sui Ishida/Shueisha, Tokyo Ghoul Production Committee'
    }
];

// Swiper 設定
const swiperOptions = {
    modules: [Pagination, Navigation, EffectCoverflow],
    effect: 'coverflow', // 使用 3D 卡片覆蓋效果
    grabCursor: true,
    centeredSlides: true, // 目前顯示的卡片置中
    slidesPerView: 'auto', // 自動計算每頁顯示數量 (配合 CSS寬度)
    coverflowEffect: {
        rotate: 0, // 不旋轉
        stretch: 0, // 拉伸間距
        depth: 200, // 景深感
        modifier: 1,
        slideShadows: false, // 不使用預設陰影
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // RWD 設定
    breakpoints: {
        768: { // 電腦版設定
            coverflowEffect: {
                depth: 300,
                stretch: 50,
            }
        }
    }
};
</script>

<template>
    <section id="features" class="features-section">
        <div class="container">
            <div class="section-header">
                <h2 class="title">遊戲特色 <span class="en">FEATURE</span></h2>
                <div class="red-line"></div>
            </div>

            <div class="features-swiper-container">
                <Swiper v-bind="swiperOptions" class="features-swiper">
                    <SwiperSlide v-for="feat in features" :key="feat.id">
                        <div class="feature-card">
                            <div class="card-frame"></div>

                            <div class="card-img-box">
                                <img :src="feat.img" :alt="feat.title" class="card-img" />
                                <div class="img-overlay-text">UR</div>
                            </div>

                            <div class="card-content">
                                <h3 class="card-title">{{ feat.title }}</h3>
                                <div class="card-subtitle-group">
                                    <h4 class="card-subtitle">{{ feat.subTitle }}</h4>
                                    <p class="card-desc">{{ feat.desc }}</p>
                                </div>
                            </div>

                            <p class="card-copyright">{{ feat.copyright }}</p>
                        </div>
                    </SwiperSlide>
                </Swiper>

                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
                <div class="swiper-pagination"></div>
            </div>

        </div>
    </section>
</template>

<style lang="scss" scoped>
.features-section {
    background-color: #080808;
    padding: 100px 0;
    overflow: hidden;
    /* 增加一點幾何背景紋理，提升層次感 */
    background-image: linear-gradient(45deg, #0a0a0a 25%, transparent 25%, transparent 75%, #0a0a0a 75%, #0a0a0a),
        linear-gradient(45deg, #0a0a0a 25%, transparent 25%, transparent 75%, #0a0a0a 75%, #0a0a0a);
    background-size: 60px 60px;
    background-position: 0 0, 30px 30px;
}

.container {
    max-width: 1400px;
    /* 增加寬度以容納大卡片 */
    margin: 0 auto;
    padding: 0 20px;
}

.section-header {
    text-align: center;
    margin-bottom: 60px;

    .title {
        font-size: 48px;
        color: white;
        margin: 0 0 15px;

        .en {
            display: block;
            font-size: 24px;
            color: var(--primary-red);
            letter-spacing: 5px;
            font-family: 'Arial Black';
        }
    }

    .red-line {
        width: 60px;
        height: 4px;
        background: var(--primary-red);
        margin: 0 auto;
    }
}

.features-swiper-container {
    position: relative;
    padding: 20px 0 60px; // 底部留空間給分頁器
}

.features-swiper {
    padding: 20px; // 讓陰影不會被切掉

    .swiper-slide {
        width: 800px; // 卡片預設寬度 (電腦版)
        height: 500px;
        position: relative;
        /* 未選中的卡片變暗變小 */
        transition: all 0.3s;
        opacity: 0.4;
        transform: scale(0.9);

        &.swiper-slide-active {
            opacity: 1;
            transform: scale(1);
            z-index: 10;
        }

        /* RWD 手機版 */
        @media (max-width: 960px) {
            width: 90%; // 手機版寬度佔滿
            height: auto;
            aspect-ratio: 16 / 9; // 維持比例
        }
    }
}

/* 卡片樣式核心 */
.feature-card {
    width: 100%;
    height: 100%;
    background: #111;
    border: 2px solid #333;
    position: relative;
    display: flex;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);

    /* 卡片外框裝飾線 */
    .card-frame {
        position: absolute;
        top: 10px;
        left: 10px;
        right: 10px;
        bottom: 10px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        pointer-events: none;
        z-index: 2;

        &::after {
            // 紅色角落裝飾
            content: '';
            position: absolute;
            bottom: -5px;
            right: -5px;
            width: 20px;
            height: 20px;
            border-bottom: 3px solid var(--primary-red);
            border-right: 3px solid var(--primary-red);
        }
    }

    /* 左側圖片區 */
    .card-img-box {
        flex: 3; // 佔比 3/5
        position: relative;
        overflow: hidden;
        clip-path: polygon(0 0, 100% 0, 85% 100%, 0% 100%); // 斜切效果

        .card-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s;
        }

        .img-overlay-text {
            position: absolute;
            top: 20px;
            right: 40px;
            font-size: 24px;
            color: var(--primary-red);
            font-weight: bold;
            writing-mode: vertical-rl; // 直排文字
            letter-spacing: 5px;
        }

        &:hover .card-img {
            transform: scale(1.1);
        }
    }

    /* 右側內容區 */
    .card-content {
        flex: 2; // 佔比 2/5
        padding: 40px 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;
        z-index: 3;
        background: linear-gradient(to right, rgba(17, 17, 17, 0.9), rgba(17, 17, 17, 1)); // 漸層背景

        .card-title {
            font-size: 48px;
            color: white;
            margin: 0 0 20px;
            text-shadow: 2px 2px 0 var(--primary-red);
        }

        .card-subtitle-group {
            border-left: 4px solid var(--primary-red);
            padding-left: 15px;
        }

        .card-subtitle {
            font-size: 28px;
            color: var(--primary-red);
            margin: 0 0 10px;
        }

        .card-desc {
            font-size: 16px;
            color: #aaa;
            margin: 0;
            line-height: 1.6;
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

    /* RWD 手機版卡片變成上下排列 */
    @media (max-width: 960px) {
        flex-direction: column;

        .card-img-box {
            flex: auto;
            height: 60%;
            clip-path: none; // 取消斜切
        }

        .card-content {
            flex: auto;
            height: 40%;
            padding: 20px;
            background: #111; // 取消漸層

            .card-title {
                font-size: 32px;
            }

            .card-subtitle {
                font-size: 20px;
            }
        }

        .card-frame,
        .img-overlay-text {
            display: none;
        }

        // 手機版簡化裝飾
    }
}

/* 自訂 Swiper 導航樣式 */
.swiper-button-prev,
.swiper-button-next {
    color: var(--primary-red);
    background: rgba(0, 0, 0, 0.8);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid var(--primary-red);

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

    // 手機版隱藏箭頭，改用滑動
}

:deep(.swiper-pagination-bullet) {
    background: #555;
    opacity: 1;
    width: 12px;
    height: 12px;
    border-radius: 0; // 方形點
    transform: rotate(45deg); // 菱形
    margin: 0 8px !important;

    &.swiper-pagination-bullet-active {
        background: var(--primary-red);
        box-shadow: 0 0 10px var(--primary-red);
    }
}
</style>