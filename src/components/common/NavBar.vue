<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import logo from '@/assets/img/nav-logo.png';

const isScrolled = ref(false);
const currentSection = ref('');
const isMenuOpen = ref(false);

// 1. 把 observer 變數宣告在最外面，這樣 onUnmounted 才讀得到
let observer = null;

const menuItems = [
    { name: '首頁', link: '#hero' },
    { name: '消息', link: '#news' },
    { name: '角色', link: '#character' },
    { name: '特色', link: '#features' },
];

const handleScroll = () => {
    isScrolled.value = window.scrollY > 50;
};

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);

    // 2. 修改判定邏輯：使用 rootMargin 設定一條「中間基準線」
    const observerOptions = {
        root: null,
        // 這行的意思是：把判定範圍縮小到螢幕正中間的一條線
        // 只要區塊碰到螢幕中間，就會變成 active，不管區塊長短都有效
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0
    };

    observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            // 只要碰到中間那條線 (isIntersecting)
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
    // 3. 這裡加個保險，確定 observer 存在才斷開
    if (observer) {
        observer.disconnect();
    }
});
</script>
<template>
    <nav :class="['navbar', { 'scrolled': isScrolled }]">
        <div class="logo">
            <h2><img :src="logo" alt="logo"></h2>
        </div>

        <button class="hamburger" @click="toggleMenu" :class="{ 'active': isMenuOpen }">
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
        </div>
    </nav>
</template>

<style lang="scss" scoped>
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 0 40px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    z-index: 1000;
    transition: 0.35s ease;
    box-sizing: border-box;

    @media (max-width: 768px) {
        justify-content: space-between;
    }

    &.scrolled {
        background: rgba(0, 0, 0, 0.95);
        padding: 0 40px;
        border-bottom: 1px solid #333;
    }

    .logo {
        margin-right: 5%;
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
            transform: rotate(45deg) translate(5px, 5px);
        }

        &.active span:nth-child(2) {
            opacity: 0;
        }

        &.active span:nth-child(3) {
            transform: rotate(-45deg) translate(5px, -6px);
        }

        @media (max-width: 768px) {
            display: flex;
        }
    }

    /* 選單容器 */
    .menu-container {
        display: flex;
        align-items: center;
        gap: 30px;

        /* 手機版樣式 (預設隱藏，滑出顯示) */
        @media (max-width: 768px) {
            position: fixed;
            top: 0;
            right: -100%;
            width: 100%;
            height: 100vh;
            background: rgba(0, 0, 0, 0.98);
            flex-direction: column;
            justify-content: center;
            transition: 0.4s ease;

            &.open {
                right: 0;
                /* 滑出來 */
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
            font-size: 20px;
            color: gray;
            transition: 0.35s;
            position: relative;

            &::after {
                content: "";
                position: absolute;
                right: -20px;
                width: 1px;
                background-color: #ccc;
                top: 10px;
                bottom: 10px;


                @media (max-width: 768px) {
                    display: none;
                }
            }

            &::before {
                content: "";
                position: absolute;
                left: 0;
                bottom: -5px;
                width: 100%;
                height: 3px;
                background-color: #3b6eb8;
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
}
</style>