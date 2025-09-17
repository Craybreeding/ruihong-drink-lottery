// 瑞虹太阳宫周边奶茶咖啡店数据（基于高德地图真实数据，去重后只保留最近的一家）
const stores = [
    // 奶茶店（基于高德地图真实数据）
    {
        id: 1,
        name: "喜茶",
        location: "瑞虹路181号LG-9a",
        rating: 4.5,
        specialty: "多肉葡萄",
        specialtyPrice: "¥28",
        specialtyDesc: "新鲜葡萄果肉，口感丰富",
        emoji: "🍇",
        color: "#ff6b6b",
        avgPrice: "¥25-35",
        category: "奶茶"
    },
    {
        id: 2,
        name: "LELECHA乐乐茶",
        location: "瑞虹路瑞虹天地1层L1-32室",
        rating: 4.2,
        specialty: "脏脏茶",
        specialtyPrice: "¥26",
        specialtyDesc: "网红脏脏茶，颜值与口感并存",
        emoji: "🧋",
        color: "#D2691E",
        avgPrice: "¥20-30",
        category: "奶茶"
    },
    {
        id: 3,
        name: "茉酸奶",
        location: "瑞虹路181号瑞虹天地太阳宫L4-K1",
        rating: 4.3,
        specialty: "牛油果酸奶奶昔",
        specialtyPrice: "¥22",
        specialtyDesc: "健康酸奶，牛油果香浓",
        emoji: "🥑",
        color: "#32CD32",
        avgPrice: "¥18-28",
        category: "奶茶"
    },
    {
        id: 4,
        name: "7分甜",
        location: "瑞虹路181号瑞虹新天地太阳宫L4层",
        rating: 4.1,
        specialty: "杨枝甘露",
        specialtyPrice: "¥18",
        specialtyDesc: "港式甜品，芒果椰香",
        emoji: "🥭",
        color: "#FFD700",
        avgPrice: "¥15-25",
        category: "奶茶"
    },
    {
        id: 5,
        name: "茉莉奶白",
        location: "瑞虹路181号L5-K5&K6单元",
        rating: 4.2,
        specialty: "茉莉奶白",
        specialtyPrice: "¥16",
        specialtyDesc: "茉莉花香，奶香浓郁",
        emoji: "🌸",
        color: "#FFB6C1",
        avgPrice: "¥12-22",
        category: "奶茶"
    },
    {
        id: 6,
        name: "茶米有言",
        location: "瑞虹路181号瑞虹天地太阳宫5层K2室",
        rating: 4.0,
        specialty: "茶米奶茶",
        specialtyPrice: "¥15",
        specialtyDesc: "茶香米香，口感独特",
        emoji: "🍚",
        color: "#8B4513",
        avgPrice: "¥12-20",
        category: "奶茶"
    },
    {
        id: 7,
        name: "椰小小·元气椰子水",
        location: "瑞虹路181号瑞虹天地太阳宫L4-2a",
        rating: 4.1,
        specialty: "元气椰子水",
        specialtyPrice: "¥18",
        specialtyDesc: "新鲜椰子水，元气满满",
        emoji: "🥥",
        color: "#F5DEB3",
        avgPrice: "¥15-25",
        category: "奶茶"
    },
    {
        id: 8,
        name: "Blueglass",
        location: "瑞虹路181号1层111-112室",
        rating: 4.4,
        specialty: "酸奶杯",
        specialtyPrice: "¥32",
        specialtyDesc: "健康酸奶，颜值超高",
        emoji: "🥛",
        color: "#87CEEB",
        avgPrice: "¥25-40",
        category: "奶茶"
    },
    {
        id: 9,
        name: "TANING手挞柠檬茶",
        location: "瑞虹路181号瑞虹天地太阳宫L5-K48",
        rating: 4.0,
        specialty: "手挞柠檬茶",
        specialtyPrice: "¥16",
        specialtyDesc: "手挞工艺，柠檬清香",
        emoji: "🍋",
        color: "#FFD700",
        avgPrice: "¥12-20",
        category: "奶茶"
    },
    {
        id: 10,
        name: "KOI Thé",
        location: "瑞虹路181号B1层LG-9B室",
        rating: 4.3,
        specialty: "黄金珍奶",
        specialtyPrice: "¥20",
        specialtyDesc: "经典珍奶，Q弹珍珠",
        emoji: "🧋",
        color: "#FFA500",
        avgPrice: "¥15-25",
        category: "奶茶"
    },
    {
        id: 11,
        name: "柠季·手打柠檬茶",
        location: "瑞虹路181号瑞虹天地太阳宫F3-24室",
        rating: 4.1,
        specialty: "手打柠檬茶",
        specialtyPrice: "¥15",
        specialtyDesc: "手打工艺，柠檬清香",
        emoji: "🍋",
        color: "#32CD32",
        avgPrice: "¥12-20",
        category: "奶茶"
    },
    {
        id: 12,
        name: "蜜雪冰城",
        location: "飞虹路207号(临平路地铁站1号口步行100米)",
        rating: 4.0,
        specialty: "柠檬水",
        specialtyPrice: "¥4",
        specialtyDesc: "性价比之王，柠檬清香",
        emoji: "🍋",
        color: "#FFD700",
        avgPrice: "¥4-12",
        category: "奶茶"
    },
    {
        id: 13,
        name: "血糯米奶茶&黄记猪头肉",
        location: "飞虹路219号1层(临平路地铁站1号口步行150米)",
        rating: 3.8,
        specialty: "血糯米奶茶",
        specialtyPrice: "¥8",
        specialtyDesc: "传统血糯米，口感独特",
        emoji: "🍚",
        color: "#8B4513",
        avgPrice: "¥6-15",
        category: "奶茶"
    },
    {
        id: 14,
        name: "奈雪的茶",
        location: "瑞虹路188号瑞虹天地月亮湾L1层",
        rating: 4.2,
        specialty: "霸气芝士草莓",
        specialtyPrice: "¥28",
        specialtyDesc: "新鲜草莓，芝士奶盖",
        emoji: "🍓",
        color: "#FF69B4",
        avgPrice: "¥20-35",
        category: "奶茶"
    },
    {
        id: 15,
        name: "CHAGEE霸王茶姬",
        location: "瑞虹路188号1层109室",
        rating: 4.3,
        specialty: "伯牙绝弦",
        specialtyPrice: "¥18",
        specialtyDesc: "古风茶饮，茶香浓郁",
        emoji: "🍵",
        color: "#8B4513",
        avgPrice: "¥15-25",
        category: "奶茶"
    },
    {
        id: 16,
        name: "KOI PLUS",
        location: "瑞虹路188号瑞虹天地月亮湾1层",
        rating: 4.3,
        specialty: "KOI PLUS",
        specialtyPrice: "¥25",
        specialtyDesc: "升级版KOI，宠物友好",
        emoji: "🐕",
        color: "#FFA500",
        avgPrice: "¥20-30",
        category: "奶茶"
    },
    {
        id: 17,
        name: "混果汁",
        location: "太阳宫负一楼(临平路地铁站出入口旁)",
        rating: 4.1,
        specialty: "混果汁",
        specialtyPrice: "¥22",
        specialtyDesc: "新鲜果汁，健康美味",
        emoji: "🍊",
        color: "#FF8C00",
        avgPrice: "¥18-28",
        category: "奶茶"
    },
    {
        id: 18,
        name: "涵春茶肆",
        location: "瑞虹路181号太阳宫5楼K43琦王花生和匡朵蛋糕对面",
        rating: 4.0,
        specialty: "涵春茶",
        specialtyPrice: "¥18",
        specialtyDesc: "传统茶饮，春意盎然",
        emoji: "🌿",
        color: "#32CD32",
        avgPrice: "¥15-25",
        category: "奶茶"
    },
    {
        id: 19,
        name: "BONJOUR本就",
        location: "瑞虹路181号瑞虹太阳宫LG层-73室",
        rating: 4.2,
        specialty: "本就茶饮",
        specialtyPrice: "¥22",
        specialtyDesc: "法式茶饮，优雅品味",
        emoji: "🇫🇷",
        color: "#FFB6C1",
        avgPrice: "¥18-28",
        category: "奶茶"
    },
    {
        id: 20,
        name: "爷爷不泡茶NOYEYENOTEA",
        location: "瑞虹路181号瑞虹天地太阳宫5层L5-K52",
        rating: 4.1,
        specialty: "爷爷不泡茶",
        specialtyPrice: "¥16",
        specialtyDesc: "传统茶饮，爷爷味道",
        emoji: "👴",
        color: "#8B4513",
        avgPrice: "¥12-20",
        category: "奶茶"
    },

    // 咖啡店（基于高德地图真实数据，去重后只保留最近的一家）
    {
        id: 21,
        name: "星巴克臻选",
        location: "瑞虹路181号瑞虹新天地太阳宫L6层",
        rating: 4.3,
        specialty: "焦糖玛奇朵",
        specialtyPrice: "¥35",
        specialtyDesc: "经典意式咖啡，香浓顺滑",
        emoji: "☕",
        color: "#4ecdc4",
        avgPrice: "¥30-45",
        category: "咖啡"
    },
    {
        id: 22,
        name: "M Stand",
        location: "瑞虹路181号瑞虹天地太阳宫LG层54",
        rating: 4.4,
        specialty: "燕麦拿铁",
        specialtyPrice: "¥32",
        specialtyDesc: "精品咖啡，燕麦奶香浓郁",
        emoji: "🥛",
        color: "#8B4513",
        avgPrice: "¥25-40",
        category: "咖啡"
    },
    {
        id: 23,
        name: "%Arabica",
        location: "瑞虹路181号瑞虹新天地太阳宫L6层",
        rating: 4.5,
        specialty: "西班牙拿铁",
        specialtyPrice: "¥38",
        specialtyDesc: "日式精品咖啡，口感丝滑",
        emoji: "🇯🇵",
        color: "#2F4F4F",
        avgPrice: "¥30-45",
        category: "咖啡"
    },
    {
        id: 24,
        name: "b3coffee必三咖啡",
        location: "瑞虹路181号L5-K59号(5楼中庭)",
        rating: 4.2,
        specialty: "必三咖啡",
        specialtyPrice: "¥25",
        specialtyDesc: "精品咖啡，必三品质",
        emoji: "☕",
        color: "#8B4513",
        avgPrice: "¥20-30",
        category: "咖啡"
    },
    {
        id: 25,
        name: "Birdie Cup Coffee小鸟杯",
        location: "瑞虹路181号太阳宫L5-K50",
        rating: 4.3,
        specialty: "小鸟杯咖啡",
        specialtyPrice: "¥28",
        specialtyDesc: "精品咖啡，小鸟杯特色",
        emoji: "🐦",
        color: "#8B4513",
        avgPrice: "¥20-35",
        category: "咖啡"
    },
    {
        id: 26,
        name: "Manner Coffee",
        location: "瑞虹路181号瑞虹新天地太阳宫L4层",
        rating: 4.4,
        specialty: "澳白",
        specialtyPrice: "¥18",
        specialtyDesc: "精品咖啡，性价比之王",
        emoji: "☕",
        color: "#8B4513",
        avgPrice: "¥15-25",
        category: "咖啡"
    },
    {
        id: 27,
        name: "Grid Coffee",
        location: "瑞虹路181号瑞虹新天地太阳宫(临平路地铁站出入口旁)",
        rating: 4.1,
        specialty: "Grid咖啡",
        specialtyPrice: "¥22",
        specialtyDesc: "网格咖啡，现代风格",
        emoji: "⚡",
        color: "#8B4513",
        avgPrice: "¥18-28",
        category: "咖啡"
    },
    {
        id: 28,
        name: "Peet's Coffee 皮爷咖啡",
        location: "天虹路瑞虹天地太阳宫地下一层LG-10(麦当劳对面)",
        rating: 4.3,
        specialty: "经典拿铁",
        specialtyPrice: "¥32",
        specialtyDesc: "美式精品咖啡，香醇浓郁",
        emoji: "🇺🇸",
        color: "#8B4513",
        avgPrice: "¥25-40",
        category: "咖啡"
    },
    {
        id: 29,
        name: "LAVAZZA咖啡",
        location: "瑞虹路188号瑞虹新天地月亮湾L1层",
        rating: 4.3,
        specialty: "意式浓缩",
        specialtyPrice: "¥28",
        specialtyDesc: "意大利经典，浓郁香醇",
        emoji: "🇮🇹",
        color: "#8B4513",
        avgPrice: "¥20-35",
        category: "咖啡"
    },
    {
        id: 30,
        name: "瑞幸咖啡",
        location: "临平路1号一层106室",
        rating: 4.1,
        specialty: "生椰拿铁",
        specialtyPrice: "¥19",
        specialtyDesc: "椰香浓郁，口感丝滑",
        emoji: "🥥",
        color: "#45b7d1",
        avgPrice: "¥15-25",
        category: "咖啡"
    },
    {
        id: 31,
        name: "Geographer地理学家咖啡",
        location: "瑞虹路188号月亮湾2楼",
        rating: 4.4,
        specialty: "手冲咖啡",
        specialtyPrice: "¥35",
        specialtyDesc: "精品手冲，地理学家情怀",
        emoji: "🗺️",
        color: "#8B4513",
        avgPrice: "¥25-40",
        category: "咖啡"
    }
];

// 全局变量
let isSpinning = false;
let currentResult = null;

// DOM元素
const lotteryWheel = document.getElementById('lotteryWheel');
const wheelSections = document.getElementById('wheelSections');
const lotteryBtn = document.getElementById('lotteryBtn');
const btnSpinner = document.getElementById('btnSpinner');
const resultSection = document.getElementById('resultSection');
const storesGrid = document.getElementById('storesGrid');

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    renderWheel();
    renderStores();
});

// 渲染转盘
function renderWheel() {
    wheelSections.innerHTML = '';
    
    stores.forEach((store, index) => {
        const section = document.createElement('div');
        section.className = 'wheel-section';
        section.style.cssText = `
            --index: ${index};
            --total: ${stores.length};
            background: linear-gradient(135deg, ${store.color}20, ${store.color}40);
            border-color: ${store.color};
        `;
        section.innerHTML = `
            <div class="section-content">
                <div class="section-emoji">${store.emoji}</div>
                <div class="section-name">${store.name}</div>
            </div>
        `;
        wheelSections.appendChild(section);
    });
}

// 渲染店铺列表
function renderStores() {
    storesGrid.innerHTML = '';

    // 按分类分组
    const teaStores = stores.filter(store => store.category === '奶茶');
    const coffeeStores = stores.filter(store => store.category === '咖啡');

    // 创建奶茶店分类标题
    const teaTitle = document.createElement('h3');
    teaTitle.className = 'category-title';
    teaTitle.innerHTML = '🧋 奶茶店 (20家)';
    teaTitle.style.cssText = 'grid-column: 1 / -1; text-align: center; margin: 20px 0 15px 0; color: #ff6b6b; font-size: 1.5rem;';
    storesGrid.appendChild(teaTitle);

    // 渲染奶茶店
    teaStores.forEach(store => {
        const storeCard = document.createElement('div');
        storeCard.className = 'store-card';
        storeCard.innerHTML = `
            <h3>${store.emoji} ${store.name}</h3>
            <p>📍 ${store.location}</p>
            <div class="rating">
                <span class="rating-stars">${generateStars(store.rating)}</span>
                <span>${store.rating}</span>
            </div>
            <p>💰 ${store.specialty}: ${store.specialtyPrice}</p>
            <p>💵 人均: ${store.avgPrice}</p>
            <p>${store.specialtyDesc}</p>
            <span class="specialty">奶茶推荐</span>
        `;
        storesGrid.appendChild(storeCard);
    });

    // 创建咖啡店分类标题
    const coffeeTitle = document.createElement('h3');
    coffeeTitle.className = 'category-title';
    coffeeTitle.innerHTML = '☕ 咖啡店 (11家)';
    coffeeTitle.style.cssText = 'grid-column: 1 / -1; text-align: center; margin: 30px 0 15px 0; color: #4ecdc4; font-size: 1.5rem;';
    storesGrid.appendChild(coffeeTitle);

    // 渲染咖啡店
    coffeeStores.forEach(store => {
        const storeCard = document.createElement('div');
        storeCard.className = 'store-card';
        storeCard.innerHTML = `
            <h3>${store.emoji} ${store.name}</h3>
            <p>📍 ${store.location}</p>
            <div class="rating">
                <span class="rating-stars">${generateStars(store.rating)}</span>
                <span>${store.rating}</span>
            </div>
            <p>💰 ${store.specialty}: ${store.specialtyPrice}</p>
            <p>💵 人均: ${store.avgPrice}</p>
            <p>${store.specialtyDesc}</p>
            <span class="specialty">咖啡推荐</span>
        `;
        storesGrid.appendChild(storeCard);
    });
}

// 生成星级评分
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '⭐';
    }
    
    if (hasHalfStar) {
        stars += '✨';
    }
    
    return stars;
}

// 开始抽奖
function startLottery() {
    if (isSpinning) return;

    isSpinning = true;
    lotteryBtn.disabled = true;
    btnSpinner.classList.add('active');
    btnSpinner.style.display = 'inline-block';

    // 隐藏之前的结果
    resultSection.style.display = 'none';

    // 随机选择结果
    const randomIndex = Math.floor(Math.random() * stores.length);
    currentResult = stores[randomIndex];

    // 计算旋转角度
    const anglePerSection = 360 / stores.length;
    const targetAngle = randomIndex * anglePerSection;
    const totalRotation = 1800 + (360 - targetAngle); // 至少转5圈

    // 设置CSS变量
    lotteryWheel.style.setProperty('--rotation', `${totalRotation}deg`);

    // 开始旋转动画
    lotteryWheel.classList.add('wheel-spinning');

    // 3秒后显示结果
    setTimeout(() => {
        showResult();
        isSpinning = false;
        lotteryBtn.disabled = false;
        btnSpinner.classList.remove('active');
        btnSpinner.style.display = 'none';
    }, 3000);
}

// 显示结果
function showResult() {
    const resultDate = document.getElementById('resultDate');
    const storeName = document.getElementById('storeName');
    const storeLocation = document.getElementById('storeLocation');
    const ratingStars = document.getElementById('ratingStars');
    const ratingScore = document.getElementById('ratingScore');
    const recommendedDrink = document.getElementById('recommendedDrink');

    // 设置日期
    const today = new Date();
    const dateStr = today.toLocaleDateString('zh-CN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long'
    });
    resultDate.textContent = dateStr;

    // 设置店铺信息
    storeName.textContent = currentResult.name;
    storeLocation.textContent = currentResult.location;
    ratingStars.textContent = generateStars(currentResult.rating);
    ratingScore.textContent = currentResult.rating;

    // 设置推荐饮品
    recommendedDrink.innerHTML = `
        <div class="drink-info">
            <div class="drink-name">${currentResult.emoji} ${currentResult.specialty}</div>
            <div class="drink-price">${currentResult.specialtyPrice}</div>
            <div class="drink-desc">${currentResult.specialtyDesc}</div>
            <div class="drink-avg-price">💵 人均: ${currentResult.avgPrice}</div>
        </div>
    `;

    // 显示结果区域
    resultSection.style.display = 'block';
    resultSection.scrollIntoView({ behavior: 'smooth' });
}

// 导航前往
function navigateToStore() {
    if (currentResult) {
        const query = encodeURIComponent(currentResult.name + ' ' + currentResult.location);
        const url = `https://uri.amap.com/navigation?to=${query}&mode=car&policy=1&src=myapp`;
        window.open(url, '_blank');
    }
}

// 分享推荐
function shareRecommendation() {
    if (currentResult) {
        const shareContent = `
🎉 今日饮品推荐 🎉

🏪 店铺：${currentResult.name}
📍 地址：${currentResult.location}
⭐ 评分：${currentResult.rating}分
🌟 推荐：${currentResult.specialty} - ${currentResult.specialtyPrice}
💵 人均：${currentResult.avgPrice}
📝 描述：${currentResult.specialtyDesc}

来自瑞虹太阳宫饮品抽奖推荐系统
        `.trim();

        showShareModal(shareContent);
    }
}

// 显示分享模态框
function showShareModal(content) {
    const modal = document.getElementById('shareModal');
    const shareContent = document.getElementById('shareContent');
    
    shareContent.textContent = content;
    modal.style.display = 'block';
}

// 复制到剪贴板
function copyToClipboard() {
    const shareContent = document.getElementById('shareContent');
    const text = shareContent.textContent;
    
    navigator.clipboard.writeText(text).then(() => {
        alert('已复制到剪贴板！');
    }).catch(() => {
        // 降级方案
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert('已复制到剪贴板！');
    });
}

// 微信分享
function shareToWechat() {
    alert('请使用微信扫描二维码或复制链接分享给朋友');
}

// 关闭模态框
function closeModal() {
    const modal = document.getElementById('shareModal');
    modal.style.display = 'none';
}

// 事件监听
lotteryBtn.addEventListener('click', startLottery);

document.getElementById('navigateBtn').addEventListener('click', navigateToStore);
document.getElementById('shareBtn').addEventListener('click', shareRecommendation);
document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('copyShare').addEventListener('click', copyToClipboard);
document.getElementById('wechatShare').addEventListener('click', shareToWechat);

// 点击模态框外部关闭
document.getElementById('shareModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});