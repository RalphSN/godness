<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';
import logo from '@/assets/img/nav-logo.png';
import facebook from '@/assets/img/facebook.png';
import discord from '@/assets/img/discord.png';
import youtube from '@/assets/img/youtube.png';

const isScrolled = ref(false);
const currentSection = ref('');
const isMenuOpen = ref(false);

let observer = null;

const menuItems = [
    { name: '首頁', link: '#hero' },
    // { name: '消息', link: '#news' },
    // { name: '角色', link: '#character' },
    { name: '特色', link: '#features' },
];

const socialLinks = [
    // { name: 'Facebook', icon: facebook, url: 'https://www.facebook.com/' },
    // { name: 'Discord', icon: discord, url: 'https://discord.com/' },
    // { name: 'YouTube', icon: youtube, url: 'https://www.youtube.com/' },
]

watch(isMenuOpen, (val) => {
    const html = document.documentElement;
    const body = document.body;

    if (val) {
        html.style.overflow = 'hidden';
        body.style.overflow = 'hidden';
        // 針對行動端防止觸控滑動背景
        body.style.touchAction = 'none';
    } else {
        html.style.overflow = '';
        body.style.overflow = '';
        body.style.touchAction = '';
    }
});

const handleScroll = () => {
    const scrolly = window.scrollY > 50;
    if (isScrolled.value !== scrolly) {
        isScrolled.value = scrolly;
    }
};

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    const observerOptions = {
        root: null,
        rootMargin: '-25% 0px -65% 0px',
        threshold: 0
    };

    observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                currentSection.value = `#${entry.target.id}`;
            }
        });
    }, observerOptions);

    menuItems.forEach((item) => {
        const section = document.querySelector(item.link);
        if (section) {
            observer.observe(section);
        }
    });
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
    if (observer) {
        observer.disconnect();
    }
    // 恢復所有捲動設定
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
    document.body.style.touchAction = '';
});
</script>

<template>
    <nav :class="['navbar', { 'scrolled': isScrolled }]">
        <div class="logo">
            <a href="#"><img :src="logo" alt="logo"></a>
        </div>

        <button class="hamburger" @click="toggleMenu" :class="{ 'active': isMenuOpen }" aria-label="Menu">
            <span></span>
            <span></span>
            <span></span>
        </button>

        <div class="menu-container" :class="{ 'open': isMenuOpen }">
            <ul class="menu">
                <li v-for="item in menuItems" :key="item.name">
                    <a :href="item.link" @click="isMenuOpen = false"
                        :class="{ 'active': currentSection === item.link }">{{ item.name }}</a>
                </li>
            </ul>
            <ul class="social">
                <li v-for="social in socialLinks" :key="social.name">
                    <a :href="social.url" target="_blank" rel="noopener">
                        <img :src="social.icon" :alt="social.name">
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
$mobile-breakpoint: 768px;
$primary-blue: #3b6eb8;
$nav-transition: 0.35s ease;

.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 10px 40px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    z-index: 1000;
    transition: $nav-transition;
    box-sizing: border-box;

    @media (max-width: $mobile-breakpoint) {
        justify-content: space-between;
        padding: 10px;
    }

    &.scrolled {
        background: rgba(0, 0, 0, 0.95);
        padding: 0 40px;
        border-bottom: 1px solid #333;
    }

    .logo {
        margin-right: 5%;

        img {
            display: block;
        }
    }

    /* 漢堡按鈕樣式 */
    .hamburger {
        display: none;
        flex-direction: column;
        justify-content: space-between;
        width: 30px;
        height: 20px;
        background: transparent;
        border: none;
        cursor: pointer;
        z-index: 1001;

        span {
            width: 100%;
            height: 2px;
            background-color: white;
            transition: 0.3s;
        }

        /* 變成 X 的動畫 */
        &.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 8px);
        }

        &.active span:nth-child(2) {
            opacity: 0;
        }

        &.active span:nth-child(3) {
            transform: rotate(-45deg) translate(5px, -8px);
        }

        @media (max-width: $mobile-breakpoint) {
            display: flex;
        }
    }

    /* 選單容器 */
    .menu-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        gap: 30px;

        /* 手機版樣式 (預設隱藏，滑出顯示) */
        @media (max-width: $mobile-breakpoint) {
            position: fixed;
            top: 0;
            right: -100%;
            width: 100%;
            height: 100vh;
            background: rgba(0, 0, 0, 0.98);
            flex-direction: column;
            justify-content: center;
            transition: $nav-transition;
            visibility: hidden;
            opacity: 0;

            &.open {
                right: 0;
                visibility: visible;
                opacity: 1;
            }

            .menu {
                flex-direction: column;
                text-align: center;
                margin-bottom: 30px;
            }
        }
    }

    .menu {
        display: flex;
        gap: 40px;

        a {
            font-size: clamp(0.8rem, 0.8rem + 1vw, 1.5rem);
            color: gray;
            transition: $nav-transition;
            position: relative;
            white-space: nowrap;

            &::after {
                content: "";
                position: absolute;
                right: -20px;
                width: 1px;
                background-color: #ccc;
                top: 50%;
                transform: translateY(-50%);
                height: 14px;

                @media (max-width: $mobile-breakpoint) {
                    display: none;
                }
            }

            &::before {
                content: "";
                position: absolute;
                left: 0;
                bottom: -5px;
                width: 100%;
                height: 1px;
                background-color: $primary-blue;
                transform: scaleX(0);
                transition: transform 0.3s ease;
            }

            &.active {
                color: white;
            }

            &.active::before {
                transform: scaleX(1);
            }

            &:hover {
                color: white;
            }
        }

        li:last-child {
            a:after {
                display: none;
            }
        }
    }

    .social {
        display: flex;
        gap: 12px;

        a {
            display: flex;
            transition: $nav-transition;

            img {
                width: 36px;
                height: 36px;
                object-fit: contain;
            }

            &:hover {
                filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.5));
                transform: scale(1.05);
            }
        }
    }
}
</style>