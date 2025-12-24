<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// --- 回到頂部按鈕邏輯 ---
const showBackTop = ref(false);

const handleScroll = () => {
    // 當滾動超過 500px 時顯示按鈕
    showBackTop.value = window.scrollY > 500;
};

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(() => window.addEventListener('scroll', handleScroll));
onUnmounted(() => window.removeEventListener('scroll', handleScroll));
</script>

<template>
    <footer class="footer-section">
        <div class="footer-line"></div>

        <div class="container">
            <div class="social-links">
                <a href="#" class="social-btn fb" title="Facebook">FB</a>
                <a href="#" class="social-btn yt" title="YouTube">YT</a>
                <a href="#" class="social-btn dc" title="Discord">DC</a>
                <a href="#" class="social-btn ig" title="Instagram">IG</a>
            </div>

            <div class="footer-brand">
                <h2 class="footer-logo">TOKYO GHOUL</h2>
                <p class="slogan">正版授權 3D 戰鬥手遊</p>
            </div>

            <div class="footer-legal">
                <div class="legal-links">
                    <a href="#">使用者服務條款</a>
                    <span class="divider">|</span>
                    <a href="#">隱私權政策</a>
                    <span class="divider">|</span>
                    <a href="#">客服中心</a>
                </div>
                <p class="copyright">
                    © Sui Ishida/Shueisha, Tokyo Ghoul Production Committee<br>
                    © 2025 Komoe Game Inc. All Rights Reserved.
                </p>
                <div class="rating">
                    <span class="rating-badge">15+</span>
                    <span class="rating-text">本遊戲內容涉及暴力、恐怖、不當言語。請注意使用時間，避免沉迷。</span>
                </div>
            </div>
        </div>

        <button class="back-top-btn" :class="{ show: showBackTop }" @click="scrollToTop" aria-label="Back to Top">
            ↑
        </button>
    </footer>
</template>

<style lang="scss" scoped>
.footer-section {
    background-color: #050505;
    color: #666;
    text-align: center;
    position: relative;
    padding-bottom: 40px;
}

.footer-line {
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--primary-red), transparent);
    margin-bottom: 60px;
}

.container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 20px;
}

/* 社群按鈕 */
.social-links {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 40px;

    .social-btn {
        width: 50px;
        height: 50px;
        border: 1px solid #333;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #999;
        font-weight: bold;
        transition: 0.3s;
        background: #111;

        &:hover {
            background: var(--primary-red);
            border-color: var(--primary-red);
            color: white;
            transform: translateY(-5px);
            box-shadow: 0 5px 15px rgba(185, 0, 0, 0.4);
        }
    }
}

/* 品牌區 */
.footer-brand {
    margin-bottom: 40px;

    .footer-logo {
        color: white;
        font-style: italic;
        margin: 0 0 10px;
        font-size: 28px;
        letter-spacing: 2px;
    }

    .slogan {
        font-size: 14px;
        letter-spacing: 5px;
        color: var(--primary-red);
    }
}

/* 法律條款與分級 */
.footer-legal {
    border-top: 1px solid #222;
    padding-top: 30px;

    .legal-links {
        margin-bottom: 20px;

        a {
            color: #999;
            font-size: 14px;
            transition: 0.3s;

            &:hover {
                color: white;
            }
        }

        .divider {
            margin: 0 10px;
            color: #333;
        }
    }

    .copyright {
        font-size: 12px;
        line-height: 1.6;
        margin-bottom: 20px;
    }

    .rating {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        font-size: 12px;

        .rating-badge {
            background: black;
            border: 1px solid #666;
            color: white;
            padding: 2px 6px;
            font-weight: bold;
        }
    }
}

/* 回到頂部按鈕樣式 */
.back-top-btn {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: var(--primary-red);
    color: white;
    border: none;
    font-size: 24px;
    cursor: pointer;
    z-index: 99;

    /* 斜切角造型 */
    clip-path: polygon(20% 0, 100% 0, 100% 80%, 80% 100%, 0 100%, 0 20%);

    /* 預設隱藏 (往下移) */
    opacity: 0;
    transform: translateY(20px);
    pointer-events: none;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

    &.show {
        opacity: 1;
        transform: translateY(0);
        pointer-events: auto;
    }

    &:hover {
        background: white;
        color: var(--primary-red);
        transform: scale(1.1);
    }
}
</style>