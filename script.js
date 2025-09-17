// 瑞虹太阳宫周边奶茶咖啡店数据
const stores = [
    {
        id: 1,
        name: "喜茶",
        location: "瑞虹太阳宫B1层",
        rating: 4.5,
        specialty: "多肉葡萄",
        specialtyPrice: "¥28",
        specialtyDesc: "新鲜葡萄果肉，口感丰富",
        emoji: "🍇",
        color: "#ff6b6b"
    },
    {
        id: 2,
        name: "奈雪的茶",
        location: "瑞虹太阳宫1层",
        rating: 4.3,
        specialty: "霸气芝士草莓",
        specialtyPrice: "¥32",
        specialtyDesc: "浓郁芝士奶盖配新鲜草莓",
        emoji: "🍓",
        color: "#ff8e8e"
    },
    {
        id: 3,
        name: "星巴克",
        location: "瑞虹太阳宫2层",
        rating: 4.2,
        specialty: "焦糖玛奇朵",
        specialtyPrice: "¥35",
        specialtyDesc: "经典意式咖啡，香浓顺滑",
        emoji: "☕",
        color: "#4ecdc4"
    },
    {
        id: 4,
        name: "瑞幸咖啡",
        location: "瑞虹太阳宫B1层",
        rating: 4.1,
        specialty: "生椰拿铁",
        specialtyPrice: "¥19",
        specialtyDesc: "椰香浓郁，口感丝滑",
        emoji: "🥥",
        color: "#45b7d1"
    },
    {
        id: 5,
        name: "茶百道",
        location: "瑞虹太阳宫1层",
        rating: 4.4,
        specialty: "豆乳玉麒麟",
        specialtyPrice: "¥18",
        specialtyDesc: "豆香浓郁，茶味清香",
        emoji: "🫘",
        color: "#96ceb4"
    },
    {
        id: 6,
        name: "一点点",
        location: "瑞虹太阳宫B1层",
        rating: 4.0,
        specialty: "波霸奶茶",
        specialtyPrice: "¥12",
        specialtyDesc: "经典台式奶茶，Q弹波霸",
        emoji: "🧋",
        color: "#feca57"
    },
    {
        id: 7,
        name: "CoCo都可",
        location: "瑞虹太阳宫1层",
        rating: 4.2,
        specialty: "珍珠奶茶",
        specialtyPrice: "¥13",
        specialtyDesc: "经典珍珠奶茶，口感顺滑",
        emoji: "🥤",
        color: "#ff9ff3"
    },
    {
        id: 8,
        name: "蜜雪冰城",
        location: "瑞虹太阳宫B1层",
        rating: 3.8,
        specialty: "柠檬水",
        specialtyPrice: "¥4",
        specialtyDesc: "清爽柠檬，夏日必备",
        emoji: "🍋",
        color: "#54a0ff"
    }
];

// 全局变量
let isSpinning = false;
let currentResult = null;

// DOM 元素
const lotteryBtn = document.getElementById('lotteryBtn');
const lotteryWheel = document.getElementById('lotteryWheel');
const wheelSections = document.getElementById('wheelSections');
const resultSection = document.getElementById('resultSection');
const storesGrid = document.getElementById('storesGrid');
const shareModal = document.getElementById('shareModal');
const btnSpinner = document.getElementById('btnSpinner');

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    initializeWheel();
    renderStores();
    setupEventListeners();
    checkDailyLottery();
});

// 初始化转盘
function initializeWheel() {
    wheelSections.innerHTML = '';
    const sectionCount = stores.length;
    const anglePerSection = 360 / sectionCount;
    
    stores.forEach((store, index) => {
        const section = document.createElement('div');
        section.className = 'wheel-section';
        section.style.backgroundColor = store.color;
        section.style.transform = `rotate(${index * anglePerSection}deg)`;
        section.innerHTML = `
            <div style="transform: rotate(${-index * anglePerSection}deg); text-align: center;">
                <div style="font-size: 0.8rem; margin-bottom: 5px;">${store.emoji}</div>
                <div style="font-size: 0.7rem; line-height: 1.2;">${store.name}</div>
            </div>
        `;
        wheelSections.appendChild(section);
    });
}

// 渲染店铺列表
function renderStores() {
    storesGrid.innerHTML = '';
    stores.forEach(store => {
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
            <p>${store.specialtyDesc}</p>
            <span class="specialty">特色推荐</span>
        `;
        storesGrid.appendChild(storeCard);
    });
}

// 生成星级评分
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '★'.repeat(fullStars);
    if (hasHalfStar) {
        stars += '☆';
    }
    return stars;
}

// 设置事件监听器
function setupEventListeners() {
    lotteryBtn.addEventListener('click', startLottery);
    
    // 分享按钮
    document.getElementById('shareBtn').addEventListener('click', showShareModal);
    document.getElementById('modalClose').addEventListener('click', hideShareModal);
    document.getElementById('wechatShare').addEventListener('click', shareToWechat);
    document.getElementById('copyShare').addEventListener('click', copyToClipboard);
    
    // 导航按钮
    document.getElementById('navigateBtn').addEventListener('click', openNavigation);
    
    // 点击模态框外部关闭
    shareModal.addEventListener('click', function(e) {
        if (e.target === shareModal) {
            hideShareModal();
        }
    });
}

// 开始抽奖
function startLottery() {
    if (isSpinning) return;
    
    // 检查今日是否已抽奖
    if (hasLotteryToday()) {
        showMessage('今日已抽奖，明天再来吧！', 'info');
        return;
    }
    
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
        
        // 记录今日抽奖
        recordDailyLottery();
    }, 3000);
}

// 显示抽奖结果
function showResult() {
    if (!currentResult) return;
    
    // 更新结果内容
    document.getElementById('storeName').textContent = currentResult.name;
    document.getElementById('storeLocation').textContent = currentResult.location;
    document.getElementById('ratingStars').textContent = generateStars(currentResult.rating);
    document.getElementById('ratingScore').textContent = currentResult.rating;
    document.getElementById('resultDate').textContent = new Date().toLocaleDateString('zh-CN');
    
    // 更新推荐饮品
    const recommendedDrink = document.getElementById('recommendedDrink');
    recommendedDrink.innerHTML = `
        <div class="drink-emoji">${currentResult.emoji}</div>
        <div class="drink-info">
            <h5>${currentResult.specialty}</h5>
            <p>${currentResult.specialtyDesc}</p>
        </div>
        <div class="drink-price">${currentResult.specialtyPrice}</div>
    `;
    
    // 显示结果区域
    resultSection.style.display = 'block';
    
    // 滚动到结果区域
    resultSection.scrollIntoView({ behavior: 'smooth' });
    
    // 显示成功消息
    showMessage('🎉 恭喜！今日推荐已生成', 'success');
}

// 检查今日是否已抽奖
function hasLotteryToday() {
    const today = new Date().toDateString();
    const lastLottery = localStorage.getItem('lastLotteryDate');
    return lastLottery === today;
}

// 记录今日抽奖
function recordDailyLottery() {
    const today = new Date().toDateString();
    localStorage.setItem('lastLotteryDate', today);
    localStorage.setItem('lastLotteryResult', JSON.stringify(currentResult));
}

// 检查每日抽奖状态
function checkDailyLottery() {
    if (hasLotteryToday()) {
        const lastResult = localStorage.getItem('lastLotteryResult');
        if (lastResult) {
            currentResult = JSON.parse(lastResult);
            showResult();
        }
    }
}

// 显示分享模态框
function showShareModal() {
    if (!currentResult) return;
    
    const shareContent = document.getElementById('shareContent');
    shareContent.innerHTML = `
        <h4>今日推荐：${currentResult.name}</h4>
        <p>📍 ${currentResult.location}</p>
        <p>🌟 特色：${currentResult.specialty} ${currentResult.specialtyPrice}</p>
        <p>${currentResult.specialtyDesc}</p>
        <p>⭐ 评分：${currentResult.rating}</p>
    `;
    
    shareModal.classList.add('show');
    shareModal.style.display = 'flex';
}

// 隐藏分享模态框
function hideShareModal() {
    shareModal.classList.remove('show');
    shareModal.style.display = 'none';
}

// 微信分享
function shareToWechat() {
    showMessage('请使用微信扫描二维码或复制链接分享', 'info');
    // 这里可以集成微信分享SDK
}

// 复制到剪贴板
function copyToClipboard() {
    if (!currentResult) return;
    
    const shareText = `今日饮品推荐：${currentResult.name}
📍 位置：${currentResult.location}
🌟 特色：${currentResult.specialty} ${currentResult.specialtyPrice}
${currentResult.specialtyDesc}
⭐ 评分：${currentResult.rating}
来自瑞虹太阳宫饮品抽奖推荐
🔗 ${window.location.href}`;
    
    // 兼容性处理
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(shareText).then(() => {
            showMessage('已复制到剪贴板！', 'success');
            hideShareModal();
        }).catch(() => {
            fallbackCopyToClipboard(shareText);
        });
    } else {
        fallbackCopyToClipboard(shareText);
    }
}

// 备用复制方法
function fallbackCopyToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
        showMessage('已复制到剪贴板！', 'success');
        hideShareModal();
    } catch (err) {
        showMessage('复制失败，请手动复制', 'error');
    }
    
    document.body.removeChild(textArea);
}

// 打开导航
function openNavigation() {
    if (!currentResult) return;
    
    // 检测设备类型
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    let navigationUrl;
    
    if (isMobile) {
        // 移动端优先使用高德地图
        const location = encodeURIComponent(currentResult.location + ' 瑞虹太阳宫');
        navigationUrl = `https://uri.amap.com/navigation?to=${location}&mode=car&policy=1&src=myapp`;
    } else {
        // 桌面端使用百度地图
        const location = encodeURIComponent('瑞虹太阳宫 ' + currentResult.location);
        navigationUrl = `https://map.baidu.com/search/${location}/@12958438.35,4825907.18,19z?querytype=s&da_src=shareurl&wd=${location}&c=289&src=0&pn=0&sug=0&l=19&b=(12958000,4825000;12959000,4827000)&from=webapi&biz_forward=%7B%22scaler%22:2,%22styles%22:%22pl%22%7D`;
    }
    
    // 尝试打开导航应用
    const newWindow = window.open(navigationUrl, '_blank');
    
    if (!newWindow) {
        showMessage('请允许弹出窗口以打开导航', 'info');
    } else {
        showMessage('正在为您打开导航...', 'info');
    }
}

// 显示消息提示
function showMessage(message, type = 'info') {
    // 移除之前的消息
    const existingMessage = document.querySelector('.message-toast');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `message-toast ${type}`;
    messageDiv.textContent = message;
    
    // 设置样式
    messageDiv.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: ${type === 'success' ? '#d4edda' : type === 'error' ? '#f8d7da' : '#d1ecf1'};
        color: ${type === 'success' ? '#155724' : type === 'error' ? '#721c24' : '#0c5460'};
        padding: 15px 25px;
        border-radius: 25px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 1001;
        font-weight: 500;
        animation: slideInDown 0.5s ease;
    `;
    
    document.body.appendChild(messageDiv);
    
    // 3秒后自动移除
    setTimeout(() => {
        messageDiv.style.animation = 'slideInUp 0.5s ease';
        setTimeout(() => {
            if (messageDiv.parentNode) {
                messageDiv.remove();
            }
        }, 500);
    }, 3000);
}

// 添加键盘快捷键支持
document.addEventListener('keydown', function(e) {
    // 空格键开始抽奖
    if (e.code === 'Space' && !isSpinning) {
        e.preventDefault();
        startLottery();
    }
    
    // ESC键关闭模态框
    if (e.code === 'Escape') {
        hideShareModal();
    }
});

// 添加触摸支持
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', function(e) {
    touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', function(e) {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartY - touchEndY;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // 向上滑动 - 可以添加刷新功能
            console.log('向上滑动');
        } else {
            // 向下滑动
            console.log('向下滑动');
        }
    }
}

// 添加页面可见性检测
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // 页面隐藏时暂停动画
        console.log('页面隐藏');
    } else {
        // 页面显示时恢复
        console.log('页面显示');
    }
});

// 错误处理
window.addEventListener('error', function(e) {
    console.error('页面错误:', e.error);
    showMessage('出现了一些问题，请刷新页面重试', 'error');
});

// 导出功能（用于调试）
window.lotteryApp = {
    stores,
    startLottery,
    showResult,
    currentResult: () => currentResult
};
