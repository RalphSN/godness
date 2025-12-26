<script setup>
import { ref, computed } from 'vue';

// --- 定義假資料 ---
const newsData = [
    { id: 1, title: '【公告】12/24 聖誕節版本更新維護通知', date: '2025-12-24', type: 'notice', link: '#' },
    { id: 2, title: '【活動】「聖夜的喰種」限定卡池開啟！SSR金木研登場', date: '2025-12-23', type: 'event', link: '#' },
    { id: 3, title: '【系統】關於部分玩家登入異常問題說明', date: '2025-12-22', type: 'system', link: '#' },
    { id: 4, title: '【活動】新手登入七日禮，領取限定赫子外觀', date: '2025-12-20', type: 'event', link: '#' },
    { id: 5, title: '【公告】違規帳號處罰名單公示 (12月第3期)', date: '2025-12-18', type: 'notice', link: '#' },
];

const tabs = [
    { label: '全部', value: 'all' },
    { label: '最新公告', value: 'notice' },
    { label: '活動資訊', value: 'event' },
    { label: '系統訊息', value: 'system' },
];

const activeTab = ref('all');

const filteredNews = computed(() => {
    if (activeTab.value === 'all') {
        return newsData.slice(0, 5);
    } else {
        return newsData.filter(item => item.type === activeTab.value);
    }
});

const getTypeLabel = (type) => {
    const map = { notice: '公告', event: '活動', system: '系統' };
    return map[type] || '訊息';
};
</script>

<template>
    <section id="news" class="news-section">
        <div class="container">

            <div class="section-header">
                <h2 class="title">最新情報 <span class="en">NEWS</span></h2>
                <div class="red-line"></div>
            </div>

            <div class="news-tabs">
                <button v-for="tab in tabs" :key="tab.value" :class="['tab-btn', { active: activeTab === tab.value }]"
                    @click="activeTab = tab.value">
                    {{ tab.label }}
                </button>
            </div>

            <div class="news-list-container">
                <ul class="news-list">
                    <li v-for="item in filteredNews" :key="item.id" class="news-item">
                        <a :href="item.link" class="news-link">
                            <span class="news-date">{{ item.date }}</span>
                            <span :class="['news-tag', 'tag-' + item.type]">{{ getTypeLabel(item.type) }}</span>
                            <span class="news-title">{{ item.title }}</span>
                        </a>
                    </li>
                </ul>

                <div v-if="filteredNews.length === 0" class="no-data">
                    暫無相關情報
                </div>
            </div>

            <div class="more-btn-wrapper">
                <a href="#" class="more-btn">
                    MORE NEWS <span class="arrow">→</span>
                </a>
            </div>

        </div>
    </section>
</template>

<style lang="scss" scoped>
.news-section {
    position: relative;
    min-height: 100vh;
    padding: 100px 20px;
    background-color: #0a0a0a;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E");

    @media (max-width: 768px) {
        padding: 60px 20px;
    }
}

.container {
    max-width: 1200px;
    margin: 0 auto;
}

.section-header {
    text-align: center;
    margin-bottom: 50px;

    .title {
        font-size: 48px;
        color: white;
        margin: 0 0 15px;

        .en {
            display: block;
            font-size: 24px;
            color: var(--primary-red);
            letter-spacing: 2px;
            font-family: 'Arial Black', sans-serif;
        }
    }

    .red-line {
        width: 60px;
        height: 4px;
        background: var(--primary-red);
        margin: 0 auto;
    }

    @media (max-width: 768px) {
        margin-bottom: 30px;

        .title {
            font-size: 32px;

            .en {
                font-size: 18px;
            }
        }
    }
}

.news-tabs {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-bottom: 40px;
    flex-wrap: wrap;

    .tab-btn {
        background: transparent;
        border: 1px solid #333;
        color: #999;
        padding: 10px 25px;
        font-size: 16px;
        cursor: pointer;
        transition: all 0.3s;
        position: relative;
        overflow: hidden;

        &.active {
            color: white;
            border-color: var(--primary-red);
            background: var(--primary-red);
            box-shadow: 0 0 15px rgba(185, 0, 0, 0.3);
        }

        &:hover:not(.active) {
            border-color: #666;
            color: white;
        }
    }
}

.news-list {
    list-style: none;
    padding: 0;
    margin: 0;
    border-top: 1px solid #222;

    .news-item {
        border-bottom: 1px solid #222;
        transition: background 0.3s;

        &:hover {
            background: rgba(185, 0, 0, 0.05);

            .news-link .news-title {
                color: var(--primary-red);
            }
        }
    }

    .news-link {
        display: flex;
        align-items: center;
        padding: 20px 15px;
        color: #ccc;
        text-decoration: none;
        transition: 0.3s;

        @media (max-width: 768px) {
            flex-wrap: wrap;
            padding: 15px 10px;
        }
    }

    .news-date {
        font-family: monospace;
        color: #666;
        margin-right: 20px;
        font-size: 14px;

        @media (max-width: 768px) {
            width: 100%;
            margin-bottom: 5px;
        }
    }

    .news-tag {
        padding: 4px 12px;
        font-size: 12px;
        margin-right: 20px;
        border-radius: 2px;
        color: white;
        min-width: 60px;
        text-align: center;

        &.tag-notice {
            background-color: #d32f2f;
        }

        &.tag-event {
            background-color: #f57c00;
        }

        &.tag-system {
            background-color: #7b1fa2;
        }

        @media (max-width: 768px) {
            margin-right: 10px;
        }
    }

    .news-title {
        flex: 1;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 18px;
        transition: color 0.3s;

        @media (max-width: 768px) {
            flex: auto;
            width: calc(100% - 80px);
            font-size: 16px;
        }
    }
}

.no-data {
    text-align: center;
    padding: 40px;
    color: #666;
}

.more-btn-wrapper {
    text-align: center;
    margin-top: 40px;

    .more-btn {
        display: inline-block;
        padding: 12px 40px;
        border: 2px solid #333;
        color: #999;
        font-weight: bold;
        transition: all 0.3s;

        .arrow {
            display: inline-block;
            transition: transform 0.3s;
            margin-left: 5px;
        }

        &:hover {
            border-color: var(--primary-red);
            color: var(--primary-red);
            background: rgba(185, 0, 0, 0.1);

            .arrow {
                transform: translateX(5px);
            }
        }
    }
}
</style>