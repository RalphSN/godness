<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const showBackTop = ref(false);

const handleScroll = () => {
    showBackTop.value = window.scrollY > 500;
};

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(() => window.addEventListener('scroll', handleScroll));
onUnmounted(() => window.removeEventListener('scroll', handleScroll));
</script>

<template>
    <footer class="game-footer">
        <div class="footer-header">
            <h3>《女神檔案》</h3>
            <p>遊戲類型：超人氣動漫改編奇幻RPG <span>|</span> 發行平台：App Store、Google Play</p>
        </div>

        <div class="footer-divider"></div>

        <div class="footer-main">
            <div class="footer-left">
                <div class="game-info">
                    <img src="@/assets/img/footer-logo.png" alt="Game Icon" class="game-icon">
                    <img src="@/assets/img/footer-title.png" alt="Game Logo" class="game-logo">
                </div>
                <img src="@/assets/img/rank.png" alt="Rating 15+" class="rating-img">
            </div>

            <div class="footer-right">
                <ul class="legal-list">
                    <li><span>◆</span>《女神檔案》依遊戲軟體分級管理辦法分類為輔15級。</li>
                    <li><span>◆</span> 遊戲部分情節涉及暴力、不當言語，十五歲以上之人始得使用。</li>
                    <li><span>◆</span> 本遊戲為免費使用，內另有提供購買虛擬遊戲幣、物品等付費服務。</li>
                </ul>
                <!--<div class="privacy-link">
                    <a href="#">隱私政策</a>
                </div>-->
            </div>

            <div class="footer-blank"></div>
        </div>

        <button class="back-top-btn" :class="{ show: showBackTop }" @click="scrollToTop">
           <img src="@/assets/img/go-top.png" alt="至頂部按鈕">
        </button>
    </footer>
</template>

<style lang="scss" scoped>
.game-footer {
    background-color: #1f2021;
    color: #a0a0a0;
    padding: 40px 0;
    font-family: "Microsoft JhengHei", sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.footer-header {
    text-align: center;
    margin-bottom: 25px;

    h3 {
        color: #cccccc;
        font-size: 1.2rem;
        margin-bottom: 8px;
    }

    p {
        font-size: 0.9rem;
        color: #888;

        @media (max-width: 768px) {
            font-size: 0.75rem;
        }

        span {
            margin: 0 10px;
            color: #444;
        }
    }
}

.footer-divider {
    width: 100%;
    // max-width: 1200px;
    height: 1.1px;
    background-color: #636363;
    margin-bottom: 30px;
}

.footer-main {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 40px;
    flex-wrap: wrap;
}

.footer-left {
    display: flex;
    align-items: center;
    gap: 15px;

    .game-info {
        display: flex;
        align-items: center;
        gap: 10px;

        .game-icon {
            width: 48px;
            height: 48px;
            border-radius: 8px;
            background-color: #333;
        }

        .game-logo {
            height: 60px;
            width: auto;
            min-width: 100px;
        }
    }

    .rating-img {
        height: 55px;
        width: auto;
    }
}

.footer-right {
    text-align: center;

    .legal-list {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
            font-size: 0.85rem;
            line-height: 1.8;
            color: #888;
            white-space: nowrap;
            text-align: center;

            @media (max-width: 768px) {
                font-size: 0.75rem;
            }
        }

        span {
            font-size: 1rem;
            transform: scale(2);
        }
    }

    .privacy-link {
        margin-top: 10px;
        text-align: center;

        a {
            color: #a0a0a0;
            text-decoration: none;
            font-size: 1.1rem;
            border-bottom: 1px solid transparent;
            transition: 0.3s;

            &:hover {
                color: #fff;
                border-bottom: 1px solid #fff;
            }
        }
    }
}

.footer-blank {
    width: 310px; // 協助對位

    @media(max-width: 768px) {
        display: none;
    }
}

.back-top-btn {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 45px;
    height: 45px;
    border-radius: 15px;
    background: #2222225b;
    color: #fff;
    border: 1px solid #94e1ffd8;
    cursor: pointer;
    z-index: 99;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.3s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;

    img {
        width: 24px;
        height: 30px;
    }

    &.show {
        opacity: 1;
        transform: translateY(0);
    }

    &:hover {
        background: #333;
        border-color: #94E0FF;
    }
}

@media (max-width: 768px) {
    .footer-main {
        flex-direction: column;
        gap: 25px;
        text-align: center;
        padding: 20px;
    }

    .footer-right .legal-list li {
        white-space: normal;
        text-align: left;
    }

    .footer-header p span {
        display: none;
    }

    .footer-header p {
        line-height: 1.6;
    }
}
</style>