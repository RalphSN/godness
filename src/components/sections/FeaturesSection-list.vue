<script setup>
import { onMounted, ref } from 'vue';

// 特色資料
const features = [
    {
        id: 1,
        title: '赫子戰鬥系統',
        en: 'KAGUNE BATTLE',
        desc: '還原原作設定，羽赫、甲赫、鱗赫、尾赫相互剋制。利用屬性優勢，在 3D 戰場上體驗爽快的連擊與處決技。',
        img: 'https://images.unsplash.com/photo-1620553765457-df4408df483d?q=80&w=1000', // 示意圖 (紅)
        align: 'left' // 圖片在左
    },
    {
        id: 2,
        title: '共喰進化',
        en: 'EVOLUTION',
        desc: '吞噬其他喰種以增強自身實力。隨著劇情推進，解鎖「半赫者」甚至「赫者」型態，獲得壓倒性的力量。',
        img: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000', // 示意圖 (藍/紫)
        align: 'right' // 圖片在右
    },
    {
        id: 3,
        title: '多人共鬥',
        en: 'MULTIPLAYER',
        desc: '組建屬於你的小隊，與好友一同挑戰強大的搜查官，或是參與 10v10 的陣營對抗戰，爭奪區域控制權。',
        img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000', // 示意圖 (暗黑電競感)
        align: 'left' // 圖片在左
    }
];

// --- 滾動觸發動畫邏輯 (Intersection Observer) ---
// 這是一個現代瀏覽器原生的 API，用來偵測元素「是否出現在畫面上」
const itemsRef = ref([]);

onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            // 當元素進入畫面 20% 時，加上 'visible' class
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 });

    // 綁定所有特色區塊
    itemsRef.value.forEach((el) => {
        if (el) observer.observe(el);
    });
});
</script>

<template>
    <section id="features" class="features-section">
        <div class="container">
            <div class="section-header">
                <h2 class="title">遊戲特色 <span class="en">FEATURES</span></h2>
                <div class="red-line"></div>
            </div>

            <div class="features-list">
                <div v-for="(feat, index) in features" :key="feat.id" :class="['feature-item', feat.align]"
                    ref="itemsRef">
                    <div class="feature-img-box">
                        <div class="img-inner">
                            <img :src="feat.img" :alt="feat.title" />
                        </div>
                        <div class="border-deco"></div>
                    </div>

                    <div class="feature-text">
                        <h3 class="feat-title">
                            <span class="num">0{{ index + 1 }}.</span>
                            {{ feat.title }}
                        </h3>
                        <span class="feat-en">{{ feat.en }}</span>
                        <p class="feat-desc">{{ feat.desc }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.features-section {
    background-color: #080808;
    padding: 100px 20px;
    overflow: hidden;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
}

.section-header {
    text-align: center;
    margin-bottom: 80px;

    .title {
        font-size: 48px;
        color: white;
        margin: 0 0 15px;

        .en {
            display: block;
            font-size: 24px;
            color: var(--primary-red);
            letter-spacing: 2px;
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

.features-list {
    display: flex;
    flex-direction: column;
    gap: 100px;
    /* 每個區塊之間的距離 */
}

.feature-item {
    display: flex;
    align-items: center;
    gap: 60px;
    opacity: 0;
    /* 預設隱藏 */
    transition: all 1s ease-out;
    /* 動畫時間 */

    /* 根據 align 屬性決定左右順序 */
    &.left {
        flex-direction: row;
    }

    &.right {
        flex-direction: row-reverse;
        text-align: right;
    }

    /* 進場動畫前的初始位置 */
    &.left {
        transform: translateX(-50px);
    }

    &.right {
        transform: translateX(50px);
    }

    /* 當 Observer 加上 visible class 後的狀態 */
    &.visible {
        opacity: 1;
        transform: translateX(0);
    }

    /* RWD 手機版統一變直排 */
    @media (max-width: 768px) {
        flex-direction: column !important;
        /* 強制直排 */
        gap: 30px;
        text-align: center !important;
        /* 強制置中 */
    }
}

.feature-img-box {
    flex: 1;
    position: relative;

    .img-inner {
        width: 100%;
        height: 300px;
        overflow: hidden;
        clip-path: polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%);
        /* 斜切角造型 */

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s;
        }
    }

    /* 裝飾框線 (原本偏移一點點) */
    .border-deco {
        position: absolute;
        top: 20px;
        left: 20px;
        width: 100%;
        height: 100%;
        border: 2px solid var(--primary-red);
        z-index: -1;
        transition: transform 0.3s;
    }

    &:hover {
        .img-inner img {
            transform: scale(1.1);
        }

        /* 圖片放大 */
        .border-deco {
            transform: translate(-10px, -10px);
        }

        /* 框線移動 */
    }

    @media (max-width: 768px) {
        width: 100%;
    }
}

.feature-text {
    flex: 0 0 400px;

    .feat-title {
        font-size: 36px;
        color: white;
        margin: 0;
        font-weight: 900;

        .num {
            color: #333;
            font-size: 48px;
            margin-right: 10px;
            font-style: italic;
        }
    }

    .feat-en {
        display: block;
        font-size: 14px;
        color: var(--primary-red);
        letter-spacing: 3px;
        margin-bottom: 20px;
        font-weight: bold;
    }

    .feat-desc {
        color: #aaa;
        line-height: 1.8;
        font-size: 16px;
    }

    @media (max-width: 768px) {
        flex: auto;
        width: 100%;
    }
}
</style>