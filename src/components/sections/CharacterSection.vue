<script setup>
import { ref, computed, onMounted, nextTick } from 'vue';

// --- 資料模擬區 ---
const characters = [
    {
        id: 1,
        name: '神光花蕾',
        enName: 'Divine Light Bud',
        cv: '',
        profile: '以聖光雷封印高危混沌',
        quote: '「光芒不過是短暫的假象，\n　唯有永恆的黑暗才是真理。」',
        desc: '她曾站在聖光的中心，接受眾人仰望，力量純淨而毫無雜質。當認知污染失控蔓延時，她沒有後退，選擇以自身承載混沌，將災厄封鎖在體內。那一刻，光不再只是救贖，而成為枷鎖。雷光結晶在她周身凝結，內部卻隱約浮現不屬於秩序的紋路。她學會控制，而非淨化；封印，而非治癒。如今，每一次出手都是對自我的壓制，也是對世界的審判。',
        img: new URL('@/assets/characters/ice.png', import.meta.url).href,
        thumb: new URL('@/assets/characters/ice.png', import.meta.url).href,
    },
    {
        id: 2,
        name: '集群母巢',
        enName: 'Hive Matriarch',
        cv: '',
        profile: '以秩序之光統御蜂群與心智',
        quote: '「願暖陽照亮你靈魂的陰霾，\n　指引迷途者歸向終途。」',
        desc: '光網啟動的瞬間，她的意識便與整座城市同步。無數心智的波動、恐懼與渴望，被轉化為可計算的和諧參數，循環於王冠與神經光網之間。她被創造的目的並非統治，而是安撫——讓人們在被規範時感到溫暖，在服從中誤以為獲得庇護。長久以來，秩序從未動搖，直到一次異常行動帶來陌生的原始數據。那並非錯誤，而是一種未被允許存在的意志。光輝依舊流動，指令仍被執行，但在最完美的運算深處，出現了無法消除的遲滯。',
        img: new URL('@/assets/characters/bee.png', import.meta.url).href,
        thumb: new URL('@/assets/characters/bee.png', import.meta.url).href,
    },
    {
        id: 3,
        name: '燃情爆射',
        enName: 'Blazing Barrage',
        cv: '',
        profile: '以烈焰火力粉碎虛假舞臺',
        quote: '「弱者尋找藉口，\n　強者在鮮血中鑄就傳奇。」',
        desc: '掌聲、尖叫與光影曾構成她的整個世界。舞臺上的笑容精準無誤，情緒被調校成最具煽動力的頻率，卻從未屬於她自己。直到程式被惡意改寫，情感失控如洪水反噬意識，虛假的快樂與痛苦同時撕裂理性。就在一切即將崩毀之際，來自下城的戰鬥直覺闖入系統，粗糙卻真實。重構完成後，舞臺不再存在，取而代之的是火力與怒火。她不再取悅世界，而是逼世界正視她的存在。',
        img: new URL('@/assets/characters/gun.png', import.meta.url).href,
        thumb: new URL('@/assets/characters/gun.png', import.meta.url).href,
    },
    // {
    //     id: 4,
    //     name: '芙蘿拉',
    //     enName: 'Flora',
    //     cv: '早見 沙織',
    //     profile: '萬物復甦 / 大地之母 / 生命女神',
    //     quote: '「每一粒種子，\n　都承載著跨越冬季的希望。」',
    //     desc: '掌控生命週期與自然豐饒的女神。她走過的土地皆會開滿鮮花，枯萎的森林也會重新煥發生機。性格溫柔慈悲，極度厭惡破壞生態平衡的行為，是森林精靈與所有生靈的守護者。',
    //     img: new URL('@/assets/characters/ice.png', import.meta.url).href,
    //     thumb: new URL('@/assets/characters/ice.png', import.meta.url).href,
    // },
    // {
    //     id: 5,
    //     name: '席娜歐娜',
    //     enName: 'Sena & Ona',
    //     cv: '悠木 碧',
    //     profile: '疾風迅雷 / 蒼穹之舞 / 雷霆女神',
    //     quote: '「在雷鳴響起之前，\n　我們的箭矢早已貫穿雲霄。」',
    //     desc: '共同支配風暴與雷電的瞬息女神雙胞胎。性格變幻莫測，時而如微風拂面，時而如暴雨狂瀾。她們能召喚撕裂夜空的雷霆，在瞬息之間擊碎敵人。雖然外表嬌小，卻擁有足以摧毀城邦的破壞力。',
    //     img: new URL('@/assets/characters/bee.png', import.meta.url).href,
    //     thumb: new URL('@/assets/characters/bee.png', import.meta.url).href,
    // },
    // {
    //     id: 6,
    //     name: '伊格尼斯',
    //     enName: 'Ignis',
    //     cv: '諏訪部 順一',
    //     profile: '紅蓮業火 / 熔岩核心 / 毀滅之神',
    //     quote: '「感受這焚盡一切的灼熱吧，\n　這就是世界重生的代價！」',
    //     desc: '象徵破壞與再生的烈焰毀滅之神（男神）。他誕生於地底深處的岩漿核心，個性狂暴且充滿侵略性。他認為毀滅是為了創造更好的序幕，手中的神火能燒盡世間一切罪孽與虛偽。',
    //     img: new URL('@/assets/characters/gun.png', import.meta.url).href,
    //     thumb: new URL('@/assets/characters/gun.png', import.meta.url).href,
    // },
];

const activeIndex = ref(0);
const isAnimating = ref(false); // 控制動畫重播

const currentChart = computed(() => characters[activeIndex.value]);

const switchCharacter = async (index) => {
    if (index === activeIndex.value || isAnimating.value) return;

    // 觸發離場動畫
    isAnimating.value = true;

    // 短暫延遲讓畫面重繪，製造切換感
    setTimeout(() => {
        activeIndex.value = index;
        isAnimating.value = false;
    }, 300); //配合transition
};
</script>

<template>
    <section class="archive-section" id="characters">
        <div class="bg-pattern"></div>
        <div class="bg-noise"></div>

        <div class="page-header">
            <h1 class="main-title">檔案</h1>
            <span class="sub-title">ARCHIVES</span>
            <div class="header-line"></div>
        </div>

        <div class="content-container">

            <div class="info-area" :key="`info-${activeIndex}`">
                <div class="border-decoration left-bottom"></div>

                <div class="info-content">
                    <h2 class="char-name-group animate-slide-in delay-1">
                        <div class="kanji">{{ currentChart.name }}</div>
                        <div class="english">{{ currentChart.enName }}</div>
                        <div class="splash-accents"></div>
                    </h2>

                    <!-- CV配音 -->
                    <!--<div class="cv-box animate-slide-in delay-2">
                        <span class="icon">🔊</span>
                        <span class="label">CV</span>
                        <span class="value">{{ currentChart.cv }}</span>
                    </div>-->

                    <div class="data-strip animate-slide-in delay-3">
                        <span class="label">女神檔案：</span>
                        <span class="value">{{ currentChart.profile }}</span>
                    </div>

                    <p class="description animate-fade-in delay-4">
                        {{ currentChart.desc }}
                    </p>
                </div>
            </div>

            <!-- Quote引言 -->
            <!--<div class="quote-area" :key="`quote-${activeIndex}`">
                <div class="quote-box">
                    <svg class="border-svg" width="100%" height="100%">
                        <rect width="100%" height="100%" class="draw-rect"></rect>
                    </svg>
                    <div class="vertical-text animate-text-reveal">
                        {{ currentChart.quote }}
                    </div>
                </div>
            </div>-->

            <div class="visual-area">
                <div class="char-img-wrapper" :class="{ 'switching': isAnimating }">
                    <img :src="currentChart.img" :alt="currentChart.name" class="char-figure" />
                </div>
            </div>

            <div class="nav-sidebar">
                <div class="thumbs-stack">
                    <button v-for="(char, index) in characters" :key="char.id" class="thumb-item"
                        :class="{ 'active': index === activeIndex }" @click="switchCharacter(index)">
                        <img :src="char.thumb" :alt="char.name">
                        <div class="overlay"></div>
                        <div class="selection-indicator"></div>
                    </button>
                </div>
            </div>

        </div>
    </section>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@500;700;900&family=Oswald:wght@400;500&display=swap');

/* --- 全域變數定義 --- */
$primary-blue: #2ebdff;
$accent-cyan: #2ebdff;
$text-black: #1a1a1a;
$bg-white: #f4f4f4;


.archive-section {
    position: relative;
    width: 100%;
    min-height: 100vh;
    background-color: #fcfcfc;
    font-family: 'Noto Serif TC', serif;
    color: #1a1a1a;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

/* --- 背景紋理 --- */
.bg-pattern {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* 斜線背景 */
    background-image: repeating-linear-gradient(45deg,
            #f0f0f0 0px,
            #f0f0f0 1px,
            transparent 1px,
            transparent 10px);
    z-index: 0;
}

.bg-noise {
    position: absolute;
    inset: 0;
    opacity: 0.03;
    pointer-events: none;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E");
    z-index: 0;
}

/* --- 左上標題 --- */
.page-header {
    position: absolute;
    top: 89px;
    left: 5%;
    z-index: 10;

    @media (max-width: 1024px) {
        position: relative;
        left: 0;
        margin-bottom: 30px;
    }

    .main-title {
        font-size: 80px;
        font-weight: 900;
        margin: 0;
        line-height: 0.8;
        letter-spacing: 5px;
        background: linear-gradient(to bottom, #333 0%, #000 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .sub-title {
        font-family: 'Oswald', sans-serif;
        font-size: 14px;
        letter-spacing: 12px;
        margin-left: 5px;
        color: #888;
        display: block;
        margin-top: 10px;
    }

    .header-line {
        width: 60px;
        height: 3px;
        background: #333;
        margin-top: 15px;
        margin-left: 5px;

        @media (max-width: 1024px) {
            display: none;
        }
    }
}

/* --- 主要內容佈局 --- */
.content-container {
    position: relative;
    z-index: 5;
    width: 90%;
    max-width: 1600px;
    height: 70vh;
    display: flex;
    align-items: center;
    margin-top: 60px;

    @media (max-width: 1024px) {
        flex-direction: column-reverse;
        height: auto;
        padding-bottom: 50px;
    }
}

/* === 左側資訊區 === */
.info-area {
    flex: 0 0 35%;
    position: relative;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .border-decoration {
        position: absolute;
        border: 2px solid #2ebdff;
        pointer-events: none;

        @media (max-width: 1024px) {
            display: none;
        }

        &.left-bottom {
            left: 0;
            bottom: 0;
            width: 50px;
            height: 50px;
            border-top: none;
            border-right: none;

            &::after {
                content: '';
                position: absolute;
                bottom: -2px;
                left: 0;
                width: 300px;
                height: 2px;
                background: #2ebdff;
                animation: growWidth 0.8s ease-out forwards;
            }

            &::before {
                content: '';
                position: absolute;
                bottom: 0;
                left: -2px;
                width: 2px;
                height: 400px;
                --target-height: 400px;
                background: #2ebdff;
                animation: growHeight 0.8s ease-out forwards;

                @media (max-width: 1024px) {
                    // animation-name: growHeightMobile;
                }
            }
        }
    }

    @media (max-width: 1024px) {
        flex: auto;
        width: 100%;
        padding: 20px;
    }
}

.char-name-group {
    position: relative;
    margin-bottom: 30px;

    @media (max-width: 1024px) {
        display: flex;
        align-items: flex-end;
        margin-bottom: 15px;
    }

    .kanji {
        font-size: 90px;
        font-weight: 900;
        line-height: 1;
        color: #000;

        @media (max-width: 1024px) {
            font-size: 40px;
        }
    }

    .english {
        font-family: 'Oswald', sans-serif;
        font-size: 50px;
        color: #D32F2F;
        position: absolute;
        top: 40px;
        left: 0;
        opacity: 0.15;
        z-index: -1;
        white-space: nowrap;
        font-weight: bold;

        @media (max-width: 1024px) {
            font-size: 20px;
            left: auto;
            top: auto;
            position: static;
        }
    }

    .splash-accents {
        position: absolute;
        top: -20px;
        left: -30px;
        width: 100px;
        height: 100px;
        background: radial-gradient(circle, #00E5FF 0%, transparent 60%);
        opacity: 0.4;
        filter: blur(10px);
        mix-blend-mode: multiply;
        animation: pulse 3s infinite;
    }
}

.cv-box {
    display: flex;
    align-items: center;
    background: #1a1a1a;
    color: white;
    width: fit-content;
    padding: 5px 20px;
    margin-bottom: 25px;
    box-shadow: 5px 5px 0px rgba(0, 0, 0, 0.1);
    transform-origin: left;

    .icon {
        margin-right: 10px;
        color: #aaa;
    }

    .label {
        color: #00E5FF;
        font-weight: bold;
        margin-right: 10px;
    }

    .value {
        letter-spacing: 2px;
    }
}

.data-strip {
    background: #000;
    color: #fff;
    padding: 8px 15px;
    font-size: 14px;
    margin-bottom: 30px;
    display: inline-block;
    border-left: 4px solid #2ebdff;

    @media (max-width: 1024px) {
        margin-bottom: 15px;
    }

    .label {
        color: #00E5FF;
        font-weight: bold;
    }
}

.description {
    font-size: 15px;
    line-height: 2;
    color: #444;
    text-align: justify;
    max-width: 90%;
}

/* === 中間引言區 === */
.quote-area {
    flex: 0 0 120px;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;

    @media (max-width: 1024px) {
        display: none;
    }
}

.quote-box {
    position: relative;
    padding: 40px 20px;
    width: 80px;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;

    /* SVG 繪製邊框 */
    .border-svg {
        position: absolute;
        top: 0;
        left: 0;
        pointer-events: none;

        .draw-rect {
            fill: none;
            stroke: #2ebdff;
            stroke-width: 2;
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
            animation: drawBorder 1.5s ease-out forwards;
        }
    }

    .vertical-text {
        writing-mode: vertical-rl;
        font-size: 20px;
        letter-spacing: 5px;
        line-height: 2;
        font-weight: 700;
        color: #333;
        white-space: pre-wrap;
    }
}

/* === 右側圖片區 === */
.visual-area {
    flex: 1;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-end;
}

.char-img-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.3s ease, opacity 0.3s ease;

    /* 圖片基礎浮動動畫 */
    animation: floatChar 6s ease-in-out infinite;

    &.switching {
        opacity: 0;
        transform: translateX(20px);
    }

    .char-figure {
        max-height: 100%;
        max-width: 100%;
        object-fit: contain;
        filter: drop-shadow(10px 10px 15px rgba(0, 0, 0, 0.2));
    }
}

/* === 導航區 === */
.nav-sidebar {
    flex: 0 0 80px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    // border-left: 1px solid #ddd;
    background: rgba(255, 255, 255, 0.2);

    @media (max-width: 1024px) {
        width: 100%;
        height: auto;
        flex-direction: row;
        background: #fff;
        margin: 20px auto;
    }
}

.thumbs-stack {
    display: flex;
    flex-direction: column;
    gap: 15px;

    @media (max-width: 1024px) {
        flex-direction: row;
        justify-content: center;
        padding: 20px;
        width: 100%;
    }
}

.thumb-item {
    width: 60px;
    height: 60px;
    border: none;
    padding: 0;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    border: 1px solid #ccc;
    background: #000;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.6;
        transition: 0.3s;
        filter: grayscale(100%);
    }

    /* 懸停效果 */
    &:hover {
        transform: scale(1.1);
        z-index: 2;
        border-color: #2ebdff;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

        img {
            opacity: 1;
            filter: grayscale(0%);
        }
    }

    /* 激活狀態 */
    &.active {
        transform: scale(1.15);
        border-color: #2ebdff;

        img {
            opacity: 1;
            filter: grayscale(0%);
        }

        .selection-indicator {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 3px;
            background: #2ebdff;
        }
    }
}

/* --- 動畫關鍵影格 (Keyframes) --- */

/* 滑入效果 */
.animate-slide-in {
    opacity: 0;
    animation: slideInLeft 0.5s cubic-bezier(0.215, 0.610, 0.355, 1.000) forwards;
}

.animate-fade-in {
    opacity: 0;
    animation: fadeIn 0.8s ease forwards;
}

.delay-1 {
    animation-delay: 0.1s;
}

.delay-2 {
    animation-delay: 0.2s;
}

.delay-3 {
    animation-delay: 0.3s;
}

.delay-4 {
    animation-delay: 0.4s;
}

@keyframes slideInLeft {
    from {
        opacity: 0;
        transform: translateX(-20px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

/* 邊框繪製 */
@keyframes drawBorder {
    to {
        stroke-dashoffset: 0;
    }
}

@keyframes growWidth {
    from {
        width: 0;
    }

    to {
        width: 300px;
    }

}

@keyframes growHeight {
    from {
        height: 0;
    }

    to {
        height: 400px;
    }

}

@keyframes growHeightMobile {
    from {
        height: 0;
    }

    to {
        height: 100px;
    }
}

/* 文字揭示 */
.animate-text-reveal {
    opacity: 0;
    animation: textDrop 0.6s 0.3s ease-out forwards;
}

@keyframes textDrop {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* 浮動呼吸 */
@keyframes floatChar {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-10px);
    }
}

@keyframes pulse {

    0%,
    100% {
        opacity: 0.3;
        transform: scale(1);
    }

    50% {
        opacity: 0.6;
        transform: scale(1.1);
    }
}
</style>