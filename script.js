// Language translations
const translations = {
    en: {
        title: "Pollen Guide",
        environment_conditions: "Environment Conditions",
        pollen_label: "Tree Pollen Count (grains/m³):",
        pollen_placeholder: "Current pollen reading",
        temperature_label: "Temperature (°C):",
        temperature_placeholder: "°C",
        wind_label: "Wind Speed (km/h):",
        wind_placeholder: "km/h",
        humidity_label: "Humidity (%):",
        humidity_placeholder: "Humidity %",
        weather_label: "Current Sky Condition:",
        weather_sunny: "Sunny & Clear",
        weather_partly_cloudy: "Partly Cloudy",
        weather_cloudy: "Cloudy",
        weather_overcast: "Overcast",
        weather_raining: "Currently Raining",
        rain_history: "Recent Rain History",
        hours_since_rain_label: "Hours Since Last Rain:",
        hours_since_rain_placeholder: "Hours",
        rain_amount_label: "Last Rain Amount:",
        rain_none: "No rain recently",
        rain_light: "Light (<5mm)",
        rain_moderate: "Moderate (5-10mm)",
        rain_heavy: "Heavy (>10mm)",
        dry_days_label: "Days Without Rain:",
        dry_days_0: "Today",
        dry_days_1: "1 day",
        dry_days_2: "2 days",
        dry_days_3: "3 days",
        dry_days_4: "4+ days",
        health_status: "Personal Health Status",
        inhaler_used: "Used rescue inhaler in last 24h",
        wheezing: "Wheezing or chest tightness",
        eye_itching: "Eye itching (30+ minutes)",
        runny_nose: "Runny nose (tissues hourly)",
        throat_scratch: "Throat scratching sensation",
        coughing: "Coughing (not from talking)",
        calculate_button: "✿ Calculate Risk Level ✿",
        current_time: "Current Time",
        updated: "Updated",
        early_morning: "Early Morning (Base Risk)",
        pollen_release_peak: "Pollen Release Peak (+50% Risk)",
        peak_dispersal: "Peak Dispersal (+100% Risk)",
        pollen_still_high: "Pollen Still High (+25% Risk)",
        evening: "Evening (Base Risk)",
        night: "Night - Pollen Settled (-25% Risk)",
        risk_levels: {
            peaceful: "Peaceful",
            caution: "Caution",
            high_risk: "High Risk",
            safe: "Safe"
        },
        decisions: {
            absolutely_stay: "Stay Indoors",
            essential_only: "Essential Trips Only",
            short_trips: "Short Trips Okay",
            relatively_safe: "Relatively Safe"
        },
        urgency: {
            critical: "Critical",
            high: "High",
            moderate: "Moderate",
            low: "Low",
            very_low: "Very Low"
        },
        main_reason: "Main Reason:",
        recommendation: "Recommendation:",
        detailed_analysis: "Detailed Analysis:",
        base_pollen_reading: "Base Pollen Reading",
        time_multiplier: "Time Multiplier",
        weather: "Weather",
        rain: "Rain",
        dry_days: "Dry Days",
        active_symptoms: "Active Symptoms",
        seasonal_advice_header: "Seasonal Advice",
        seasonal_advice_spring: "It's tree pollen season. Be careful with opening windows and remember to change clothes and wash hands when coming indoors.",
        seasonal_advice_text: "During peak pollen season, consider using air purifiers indoors and keep windows closed during high-pollen hours (typically 9 AM - 1 PM)."
    },
    ja: {
        title: "花粉ガイド",
        environment_conditions: "環境条件",
        pollen_label: "樹木花粉数 (grains/m³):",
        pollen_placeholder: "現在の花粉数値",
        temperature_label: "気温 (°C):",
        temperature_placeholder: "°C",
        wind_label: "風速 (km/h):",
        wind_placeholder: "km/h",
        humidity_label: "湿度 (%):",
        humidity_placeholder: "湿度 %",
        weather_label: "現在の天候:",
        weather_sunny: "晴天・快晴",
        weather_partly_cloudy: "晴れ時々曇り",
        weather_cloudy: "曇り",
        weather_overcast: "曇天",
        weather_raining: "現在雨",
        rain_history: "最近の雨の履歴",
        hours_since_rain_label: "最後の雨からの時間:",
        hours_since_rain_placeholder: "時間",
        rain_amount_label: "最後の雨量:",
        rain_none: "最近雨なし",
        rain_light: "軽雨 (<5mm)",
        rain_moderate: "中雨 (5-10mm)",
        rain_heavy: "大雨 (>10mm)",
        dry_days_label: "雨なしの日数:",
        dry_days_0: "今日",
        dry_days_1: "1日",
        dry_days_2: "2日",
        dry_days_3: "3日",
        dry_days_4: "4日以上",
        health_status: "個人的健康状態",
        inhaler_used: "過去24時間での救急吸入器使用",
        wheezing: "喘鳴または胸苦しさ",
        eye_itching: "目のかゆみ (30分以上)",
        runny_nose: "鼻水 (毎時ティッシュ)",
        throat_scratch: "のどのかゆみ",
        coughing: "咳 (話している時以外)",
        calculate_button: "✿ リスクレベル計算 ✿",
        current_time: "現在時刻",
        updated: "更新日時",
        early_morning: "早朝 (基本リスク)",
        pollen_release_peak: "花粉放出ピーク (+50% リスク)",
        peak_dispersal: "拡散ピーク (+100% リスク)",
        pollen_still_high: "花粉まだ高い (+25% リスク)",
        evening: "夜 (基本リスク)",
        night: "夜間 - 花粉沈降 (-25% リスク)",
        risk_levels: {
            peaceful: "平穏",
            caution: "注意",
            high_risk: "要注意",
            safe: "安全"
        },
        decisions: {
            absolutely_stay: "在宅推奨",
            essential_only: "必要時のみ外出",
            short_trips: "短時間外出可",
            relatively_safe: "比較的安全"
        },
        urgency: {
            critical: "危険",
            high: "高",
            moderate: "中",
            low: "低",
            very_low: "極低"
        },
        main_reason: "主要理由:",
        recommendation: "推奨事項:",
        detailed_analysis: "詳細分析:",
        base_pollen_reading: "基本花粉濃度",
        time_multiplier: "時間係数",
        weather: "天気",
        rain: "雨",
        dry_days: "乾燥日数",
        active_symptoms: "症状",
        seasonal_advice_header: "季節のアドバイス",
        seasonal_advice_spring: "樹木花粉の季節です。窓の開閉に注意し、帰宅時は衣服を払い、手洗いをしましょう。",
        seasonal_advice_text: "花粉の最盛期には、室内で空気清浄機の使用を検討し、花粉の多い時間帯（通常9時〜13時）は窓を閉めておきましょう。"
    },
    zh: {
        title: "花粉指南",
        environment_conditions: "环境条件",
        pollen_label: "树木花粉数量 (grains/m³):",
        pollen_placeholder: "当前花粉读数",
        temperature_label: "温度 (°C):",
        temperature_placeholder: "°C",
        wind_label: "风速 (km/h):",
        wind_placeholder: "km/h",
        humidity_label: "湿度 (%):",
        humidity_placeholder: "湿度 %",
        weather_label: "当前天气状况:",
        weather_sunny: "晴朗无云",
        weather_partly_cloudy: "局部多云",
        weather_cloudy: "多云",
        weather_overcast: "阴天",
        weather_raining: "正在下雨",
        rain_history: "最近降雨历史",
        hours_since_rain_label: "距离上次降雨小时数:",
        hours_since_rain_placeholder: "小时",
        rain_amount_label: "上次降雨量:",
        rain_none: "最近无雨",
        rain_light: "小雨 (<5mm)",
        rain_moderate: "中雨 (5-10mm)",
        rain_heavy: "大雨 (>10mm)",
        dry_days_label: "无雨天数:",
        dry_days_0: "今天",
        dry_days_1: "1天",
        dry_days_2: "2天",
        dry_days_3: "3天",
        dry_days_4: "4天以上",
        health_status: "个人健康状况",
        inhaler_used: "过去24小时使用救急吸入器",
        wheezing: "喘息或胸闷",
        eye_itching: "眼部瘙痒 (30分钟以上)",
        runny_nose: "流鼻涕 (每小时用纸巾)",
        throat_scratch: "喉咙发痒",
        coughing: "咳嗽 (非谈话时)",
        calculate_button: "✿ 计算风险等级 ✿",
        current_time: "当前时间",
        updated: "更新时间",
        early_morning: "清晨 (基础风险)",
        pollen_release_peak: "花粉释放高峰 (+50% 风险)",
        peak_dispersal: "扩散高峰 (+100% 风险)",
        pollen_still_high: "花粉仍然较高 (+25% 风险)",
        evening: "傍晚 (基础风险)",
        night: "夜间 - 花粉沉降 (-25% 风险)",
        risk_levels: {
            peaceful: "平静",
            caution: "注意",
            high_risk: "高风险",
            safe: "安全"
        },
        decisions: {
            absolutely_stay: "建议室内",
            essential_only: "仅必要出行",
            short_trips: "短途外出可行",
            relatively_safe: "相对安全"
        },
        urgency: {
            critical: "危险",
            high: "高",
            moderate: "中等",
            low: "低",
            very_low: "极低"
        },
        main_reason: "主要原因:",
        recommendation: "建议:",
        detailed_analysis: "详细分析:",
        base_pollen_reading: "基础花粉读数",
        time_multiplier: "时间系数",
        weather: "天气",
        rain: "雨",
        dry_days: "无雨天数",
        active_symptoms: "活跃症状",
        seasonal_advice_header: "季节建议",
        seasonal_advice_spring: "现在是树木花粉季节。注意窗户的开关，回家时请更换衣物并洗手。",
        seasonal_advice_text: "在花粉高峰期，可以考虑在室内使用空气净化器，并在花粉浓度高的时段（通常上午9点至下午1点）关闭窗户。"
    },
    ru: {
        title: "Справочник пыльцы",
        environment_conditions: "Условия окружающей среды",
        pollen_label: "Количество пыльцы деревьев (grains/m³):",
        pollen_placeholder: "Текущие показания пыльцы",
        temperature_label: "Температура (°C):",
        temperature_placeholder: "°C",
        wind_label: "Скорость ветра (км/ч):",
        wind_placeholder: "км/ч",
        humidity_label: "Влажность (%):",
        humidity_placeholder: "Влажность %",
        weather_label: "Текущие погодные условия:",
        weather_sunny: "Солнечно и ясно",
        weather_partly_cloudy: "Переменная облачность",
        weather_cloudy: "Облачно",
        weather_overcast: "Пасмурно",
        weather_raining: "Дождь",
        rain_history: "История недавних дождей",
        hours_since_rain_label: "Часов с последнего дождя:",
        hours_since_rain_placeholder: "Часы",
        rain_amount_label: "Количество последнего дождя:",
        rain_none: "Дождя не было",
        rain_light: "Легкий (<5мм)",
        rain_moderate: "Умеренный (5-10мм)",
        rain_heavy: "Сильный (>10мм)",
        dry_days_label: "Дней без дождя:",
        dry_days_0: "Сегодня",
        dry_days_1: "1 день",
        dry_days_2: "2 дня",
        dry_days_3: "3 дня",
        dry_days_4: "4+ дня",
        health_status: "Личное состояние здоровья",
        inhaler_used: "Использование ингалятора за 24ч",
        wheezing: "Одышка или стеснение в груди",
        eye_itching: "Зуд глаз (30+ минут)",
        runny_nose: "Насморк (платки каждый час)",
        throat_scratch: "Першение в горле",
        coughing: "Кашель (не от разговора)",
        calculate_button: "✿ Рассчитать уровень риска ✿",
        current_time: "Текущее время",
        updated: "Обновлено",
        early_morning: "Раннее утро (базовый риск)",
        pollen_release_peak: "Пик выброса пыльцы (+50% риск)",
        peak_dispersal: "Пик распространения (+100% риск)",
        pollen_still_high: "Пыльца все еще высока (+25% риск)",
        evening: "Вечер (базовый риск)",
        night: "Ночь - пыльца осела (-25% риск)",
        risk_levels: {
            peaceful: "Спокойно",
            caution: "Осторожно",
            high_risk: "Высокий риск",
            safe: "Безопасно"
        },
        decisions: {
            absolutely_stay: "Рекомендуется остаться дома",
            essential_only: "Только необходимые выходы",
            short_trips: "Короткие поездки возможны",
            relatively_safe: "Относительно безопасно"
        },
        urgency: {
            critical: "Критический",
            high: "Высокий",
            moderate: "Умеренный",
            low: "Низкий",
            very_low: "Очень низкий"
        },
        main_reason: "Основная причина:",
        recommendation: "Рекомендация:",
        detailed_analysis: "Подробный анализ:",
        base_pollen_reading: "Базовые показания пыльцы",
        time_multiplier: "Временной множитель",
        weather: "Погода",
        rain: "Дождь",
        dry_days: "Сухие дни",
        active_symptoms: "Активные симптомы",
        seasonal_advice_header: "Сезонный совет",
        seasonal_advice_spring: "Сейчас сезон пыльцы деревьев. Будьте осторожны с открыванием окон, меняйте одежду и мойте руки при входе в дом.",
        seasonal_advice_text: "В пиковый сезон пыльцы рассмотрите использование очистителей воздуха дома и держите окна закрытыми в часы высокой концентрации пыльцы (обычно 9:00-13:00)."
    }
};

// Current language
let currentLanguage = 'en';

// Language change function
function changeLanguage() {
    const select = document.getElementById('languageSelect');
    currentLanguage = select.value;
    document.documentElement.setAttribute('lang', currentLanguage);
    updateAllTexts();
    updateTimeIndicator();
}

// Update all texts in the interface
function updateAllTexts() {
    const t = translations[currentLanguage];
    
    // Update all elements with data-key attributes
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (t[key]) {
            if (element.tagName === 'INPUT') {
                element.placeholder = t[key];
            } else {
                element.textContent = t[key];
            }
        }
    });
    
    // Update weather options
    document.querySelectorAll('#weather option').forEach(option => {
        const key = option.getAttribute('data-key');
        if (key && t[key]) {
            option.textContent = t[key];
        }
    });
    
    // Update rain amount options
    document.querySelectorAll('#rainAmount option').forEach(option => {
        const key = option.getAttribute('data-key');
        if (key && t[key]) {
            option.textContent = t[key];
        }
    });
    
    // Update dry days options
    document.querySelectorAll('#dryDays option').forEach(option => {
        const key = option.getAttribute('data-key');
        if (key && t[key]) {
            option.textContent = t[key];
        }
    });
}

// Create more sakura petals dynamically
function createSakuraPetal() {
    const sakuraContainer = document.querySelector('.sakura-container');
    const petal = document.createElement('div');
    petal.className = 'sakura-petal';
    petal.style.left = Math.random() * 100 + '%';
    petal.style.animationDelay = Math.random() * 15 + 's';
    petal.style.animationDuration = (15 + Math.random() * 10) + 's';
    sakuraContainer.appendChild(petal);
    
    setTimeout(() => {
        petal.remove();
    }, 25000);
}

// Create petals periodically
setInterval(createSakuraPetal, 3000);

function toggleCheckbox(id) {
    const checkbox = document.getElementById(id);
    checkbox.checked = !checkbox.checked;
    updateCheckboxStyle(checkbox);
    
    // Add gentle ripple effect
    const group = checkbox.closest('.checkbox-group');
    group.style.transform = 'scale(0.98)';
    setTimeout(() => {
        group.style.transform = 'scale(1)';
    }, 100);
}

function updateCheckboxStyle(checkbox) {
    const group = checkbox.closest('.checkbox-group');
    if (checkbox.checked) {
        group.classList.add('checked');
    } else {
        group.classList.remove('checked');
    }
}

// Initialize checkbox styles
document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => updateCheckboxStyle(checkbox));
    });
    
    // Initialize timestamp
    updateTimestamp();
    
    // Initialize language
    updateAllTexts();
});

function updateTimestamp() {
    const ts = document.getElementById("timestamp");
    const now = new Date();
    const t = translations[currentLanguage];
    
    let formattedTime;
    if (currentLanguage === 'ja') {
        formattedTime = now.toLocaleString('ja-JP', { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    } else if (currentLanguage === 'zh') {
        formattedTime = now.toLocaleString('zh-CN', { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    } else if (currentLanguage === 'ru') {
        formattedTime = now.toLocaleString('ru-RU', { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    } else {
        formattedTime = now.toLocaleString('en-US', { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    }
    
    ts.textContent = `${t.updated}: ${formattedTime}`;
}

function updateTimeIndicator() {
    const now = new Date();
    const hour = now.getHours();
    const timeIndicator = document.getElementById('timeIndicator');
    const t = translations[currentLanguage];
    
    let timeStatus = '';
    let intensity = '';
    let riskClass = '';
    
    if (hour >= 6 && hour < 9) {
        timeStatus = t.early_morning;
        intensity = t.risk_levels.peaceful;
        riskClass = 'success-soft';
    } else if (hour >= 9 && hour < 11) {
        timeStatus = t.pollen_release_peak;
        intensity = t.risk_levels.caution;
        riskClass = 'warning-soft';
    } else if (hour >= 11 && hour < 17) {
        timeStatus = t.peak_dispersal;
        intensity = t.risk_levels.high_risk;
        riskClass = 'danger-soft';
    } else if (hour >= 17 && hour < 20) {
        timeStatus = t.pollen_still_high;
        intensity = t.risk_levels.caution;
        riskClass = 'warning-soft';
    } else if (hour >= 20 && hour < 22) {
        timeStatus = t.evening;
        intensity = t.risk_levels.peaceful;
        riskClass = 'success-soft';
    } else {
        timeStatus = t.night;
        intensity = t.risk_levels.safe;
        riskClass = 'success-soft';
    }
    
    let formattedTime;
    if (currentLanguage === 'ja') {
        formattedTime = now.toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit' });
    } else if (currentLanguage === 'zh') {
        formattedTime = now.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' });
    } else if (currentLanguage === 'ru') {
        formattedTime = now.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
    } else {
        formattedTime = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    }
    
    timeIndicator.innerHTML = `
        <div style="font-size: 22px; margin-bottom: 8px; color: var(--text-accent); font-family: inherit;">${intensity}</div>
        <div style="font-size: 16px; color: var(--text-primary);">${t.current_time}: ${formattedTime}</div>
        <div style="font-weight: 400; margin-top: 6px; font-size: 14px;">${timeStatus}</div>
    `;
    
    // Update visual indicator based on risk level
    timeIndicator.className = `time-indicator time-glow ${riskClass}`;
}

function calculateDecision() {
    // Add calculating animation
    const button = document.querySelector('.calculate-btn');
    const t = translations[currentLanguage];
    button.style.transform = 'scale(0.95)';
    button.innerHTML = '✧ Analyzing... ✧';
    
    setTimeout(() => {
        button.style.transform = 'scale(1)';
        button.innerHTML = t.calculate_button;
        performCalculation();
    }, 800);
}

function performCalculation() {
    const t = translations[currentLanguage];
    
    // Get input values
    const pollen = parseFloat(document.getElementById('pollen').value) || 0;
    const temp = parseFloat(document.getElementById('temperature').value) || 0;
    const wind = parseFloat(document.getElementById('wind').value) || 0;
    const humidity = parseFloat(document.getElementById('humidity').value) || 0;
    const weather = document.getElementById('weather').value;
    const hoursSinceRain = parseFloat(document.getElementById('hoursSinceRain').value) || 0;
    const rainAmount = document.getElementById('rainAmount').value;
    const dryDays = parseInt(document.getElementById('dryDays').value) || 0;
    
    // Symptoms
    const inhalerUsed = document.getElementById('inhalerUsed').checked;
    const wheezing = document.getElementById('wheezing').checked;
    const eyeItching = document.getElementById('eyeItching').checked;
    const runnyNose = document.getElementById('runnyNose').checked;
    const throatScratch = document.getElementById('throatScratch').checked;
    const coughing = document.getElementById('coughing').checked;
    
    const hasSymptoms = eyeItching || runnyNose || throatScratch || coughing;
    const hasAsthmaSymptoms = wheezing || inhalerUsed;
    
    // Enhanced time-based risk calculation with smoother transitions
    const hour = new Date().getHours();
    let timeMultiplier = 1;
    
    // More nuanced time calculations - universal pollen release patterns
    if (hour >= 9 && hour < 11) {
        timeMultiplier = 1.5 + (hour - 9) * 0.1; // Trees generally release pollen in late morning
    } else if (hour >= 11 && hour < 15) {
        timeMultiplier = 2; // Peak dispersal period worldwide
    } else if (hour >= 15 && hour < 17) {
        timeMultiplier = 1.75 - (hour - 15) * 0.15; // Gradual decrease
    } else if (hour >= 17 && hour < 20) {
        timeMultiplier = 1.25 - (hour - 17) * 0.05; // Further decrease
    } else if (hour >= 22 || hour < 6) {
        timeMultiplier = 0.75 - Math.abs(hour - 2) * 0.05; // Lowest at night
    }
    
    // Calculate effective pollen with improved algorithm
    let effectivePollen = pollen * timeMultiplier;
    
    // Enhanced weather multipliers (universal patterns)
    if (weather === 'sunny') {
        effectivePollen *= 1.5;
        if (temp > 25) effectivePollen *= 1.2;
    }
    
    // Wind effects
    if (wind > 30) effectivePollen *= 2.5;
    else if (wind > 20) effectivePollen *= 2;
    else if (wind > 10) effectivePollen *= 1.2;
    
    // Temperature effects
    if (temp > 20) {
        const tempMultiplier = 1 + (temp - 20) * 0.02;
        effectivePollen *= tempMultiplier;
        if (humidity < 40) effectivePollen *= 1.3;
    }
    
    // Humidity effects
    if (humidity < 30) effectivePollen *= 1.8;
    else if (humidity < 50) effectivePollen *= 1.3;
    else if (humidity > 80) effectivePollen *= 0.8;
    
    // Dry days exponential effect
    if (dryDays >= 3) effectivePollen *= Math.pow(1.15, dryDays);
    
    // Rain effects
    if (weather === 'raining') {
        effectivePollen = 0;
    } else if (rainAmount === 'heavy') {
        if (hoursSinceRain <= 2) effectivePollen *= 0.05;
        else if (hoursSinceRain <= 6) effectivePollen *= 0.3;
        else if (hoursSinceRain <= 12) effectivePollen *= 0.6;
    } else if (rainAmount === 'moderate') {
        if (hoursSinceRain <= 1) effectivePollen *= 0.2;
        else if (hoursSinceRain <= 4) effectivePollen *= 0.5;
        else if (hoursSinceRain <= 8) effectivePollen *= 0.7;
    } else if (rainAmount === 'light') {
        if (hoursSinceRain <= 0.5) effectivePollen *= 0.5;
        else if (hoursSinceRain <= 2) effectivePollen *= 0.8;
    }
    
    // Symptom adjustments
    if (hasSymptoms) {
        let symptomCount = 0;
        if (eyeItching) symptomCount += 1;
        if (runnyNose) symptomCount += 1;
        if (throatScratch) symptomCount += 0.5;
        if (coughing) symptomCount += 1;
        effectivePollen *= 1.5 + symptomCount * 0.3;
    }
    
    if (hasAsthmaSymptoms) {
        effectivePollen *= 4;
        if (wheezing && inhalerUsed) effectivePollen *= 1.5;
    }
    
    // Universal decision logic
    let decision, className, advice;
    let specificReason = '';
    let urgencyLevel = '';
    
    const decisions = t.decisions;
    const urgency = t.urgency;
    
    // Decision thresholds adjusted for universal tree pollen
    if (pollen >= 80 || effectivePollen >= 160) {
        decision = decisions.absolutely_stay;
        className = "absolutely-stay";
        advice = "Extremely high pollen concentration";
        specificReason = "Extreme pollen concentration";
        urgencyLevel = urgency.critical;
    } else if (pollen > 60 && hasAsthmaSymptoms) {
        decision = decisions.absolutely_stay;
        className = "absolutely-stay";
        advice = "Dangerous combination for asthma sufferers";
        specificReason = "High pollen + asthma symptoms";
        urgencyLevel = urgency.critical;
    } else if (pollen > 50 && inhalerUsed) {
        decision = decisions.absolutely_stay;
        className = "absolutely-stay";
        advice = "Safety priority after inhaler use";
        specificReason = "Recent inhaler use + high pollen";
        urgencyLevel = urgency.high;
    } else if (temp > 25 && wind > 20 && humidity < 40 && weather === 'sunny') {
        decision = decisions.absolutely_stay;
        className = "absolutely-stay";
        advice = "Perfect conditions for pollen dispersal";
        specificReason = "Optimal pollen dispersal conditions";
        urgencyLevel = urgency.high;
    } else if (dryDays >= 4 && temp > 15) {
        decision = decisions.absolutely_stay;
        className = "absolutely-stay";
        advice = "Significant pollen accumulation";
        specificReason = "Extended dry period + warm weather";
        urgencyLevel = urgency.high;
    } else if (wheezing) {
        decision = decisions.absolutely_stay;
        className = "absolutely-stay";
        advice = "Active respiratory symptoms";
        specificReason = "Current respiratory distress";
        urgencyLevel = urgency.high;
    }
    
    // Essential trips only
    else if (pollen >= 50 && pollen < 80) {
        decision = decisions.essential_only;
        className = "essential-only";
        advice = "High pollen - use full protection";
        specificReason = "High pollen concentration (50-79)";
        urgencyLevel = urgency.moderate;
    } else if (pollen >= 40 && hasSymptoms) {
        decision = decisions.essential_only;
        className = "essential-only";
        advice = "Active symptoms - minimize exposure";
        specificReason = "Symptoms + elevated pollen";
        urgencyLevel = urgency.moderate;
    } else if (temp >= 20 && wind >= 15 && humidity < 60) {
        decision = decisions.essential_only;
        className = "essential-only";
        advice = "Favorable dispersal conditions";
        specificReason = "Good dispersal weather";
        urgencyLevel = urgency.moderate;
    } else if (weather === 'sunny' && humidity > 60 && temp > 15) {
        decision = decisions.essential_only;
        className = "essential-only";
        advice = "Sunny but humid - exercise caution";
        specificReason = "Mixed weather conditions";
        urgencyLevel = urgency.moderate;
    } else if (rainAmount === 'light' && hoursSinceRain >= 2 && hoursSinceRain <= 6) {
        decision = decisions.essential_only;
        className = "essential-only";
        advice = "Rain effect diminishing";
        specificReason = "Light rain benefits fading";
        urgencyLevel = urgency.moderate;
    }
    
    // Short trips okay
    else if (pollen >= 30 && pollen < 50) {
        decision = decisions.short_trips;
        className = "short-trips";
        advice = "Moderate pollen - use mask";
        specificReason = "Moderate pollen levels";
        urgencyLevel = urgency.low;
    } else if (pollen >= 20 && hasSymptoms) {
        decision = decisions.short_trips;
        className = "short-trips";
        advice = "Some symptoms - brief trips with protection";
        specificReason = "Mild symptoms present";
        urgencyLevel = urgency.low;
    } else if (weather === 'overcast' && humidity > 70) {
        decision = decisions.short_trips;
        className = "short-trips";
        advice = "Overcast and humid - better conditions";
        specificReason = "Favorable overcast conditions";
        urgencyLevel = urgency.low;
    } else if (wind < 10 && temp < 25) {
        decision = decisions.short_trips;
        className = "short-trips";
        advice = "Calm conditions - limited risk";
        specificReason = "Calm weather conditions";
        urgencyLevel = urgency.low;
    } else if (rainAmount === 'moderate' && hoursSinceRain >= 6 && hoursSinceRain <= 12) {
        decision = decisions.short_trips;
        className = "short-trips";
        advice = "Some rain benefits remain";
        specificReason = "Moderate rain effects lingering";
        urgencyLevel = urgency.low;
    }
    
    // Relatively safe
    else if (pollen < 30) {
        decision = decisions.relatively_safe;
        className = "relatively-safe";
        advice = "Low pollen concentration";
        specificReason = "Low pollen levels";
        urgencyLevel = urgency.very_low;
    } else if (weather === 'raining') {
        decision = decisions.relatively_safe;
        className = "relatively-safe";
        advice = "Rain washing away pollen";
        specificReason = "Active precipitation";
        urgencyLevel = urgency.very_low;
    } else if (rainAmount === 'heavy' && hoursSinceRain <= 3) {
        decision = decisions.relatively_safe;
        className = "relatively-safe";
        advice = "Recent heavy rain cleared air";
        specificReason = "Recent heavy rain";
        urgencyLevel = urgency.very_low;
    } else if (temp < 5 || humidity > 85) {
        decision = decisions.relatively_safe;
        className = "relatively-safe";
        advice = "Extreme conditions limit pollen";
        specificReason = "Extreme weather conditions";
        urgencyLevel = urgency.very_low;
    } else if ((hour >= 22 || hour < 6) && weather !== 'sunny') {
        decision = decisions.relatively_safe;
        className = "relatively-safe";
        advice = "Night hours with settled pollen";
        specificReason = "Night hours";
        urgencyLevel = urgency.very_low;
    }
    
    // Default
    else {
        decision = decisions.essential_only;
        className = "essential-only";
        advice = "Mixed conditions require caution";
        specificReason = "Mixed conditions";
        urgencyLevel = urgency.moderate;
    }
    
    // Generate result
    let resultHTML = `
        <div class="result ${className}">
            <div style="font-size: 24px; margin-bottom: 12px; font-family: inherit;">${decision}</div>
            <div style="font-size: 14px; opacity: 0.8;">Risk Level: ${urgencyLevel}</div>
        </div>
        <div class="details">
            <strong style="color: var(--sakura-pink); font-size: 15px;">${t.main_reason}</strong><br>
            <span style="font-size: 14px; color: var(--text-primary);">${specificReason}</span><br><br>
            
            <strong style="color: var(--sakura-pink); font-size: 15px;">${t.recommendation}</strong><br>
            <span style="font-size: 14px; color: var(--text-primary);">${advice}</span>
    `;
    
    // Add detailed analysis for complex conditions
    if (hasAsthmaSymptoms || effectivePollen > 100) {
        resultHTML += `
            <div class="calculation-details breath-animation">
                <strong style="color: var(--text-accent);">${t.detailed_analysis}</strong><br>
                • ${t.base_pollen_reading}: ${pollen} grains/m³<br>
                • ${t.time_multiplier}: ${timeMultiplier.toFixed(2)}<br>
                • ${t.weather}: ${weather}, ${temp}°C, Wind Speed ${wind} km/h, Humidity ${humidity}%<br>
                • ${t.rain}: ${rainAmount}, ${hoursSinceRain}h ago<br>
                • ${t.dry_days}: ${dryDays}<br>
                • ${t.active_symptoms}: ${hasSymptoms ? 'Yes' : 'No'}${hasAsthmaSymptoms ? ' (including asthma)' : ''}<br>
                • Effective Pollen: ${Math.round(effectivePollen)} grains/m³
            </div>
        `;
    }
    
    // Add seasonal advice
    const month = new Date().getMonth();
    if (month >= 2 && month <= 4) { // Spring months (Northern Hemisphere)
        resultHTML += `
            <div style="margin-top: 16px; padding: 12px; background: var(--sakura-pink); border-radius: 12px; font-size: 13px;">
                <strong>${t.seasonal_advice_header}:</strong><br>
                ${t.seasonal_advice_spring}<br><br>
                <em>${t.seasonal_advice_text}</em>
            </div>
        `;
    }
    
    resultHTML += '</div>';
    
    document.getElementById('result').innerHTML = resultHTML;
}

// Enhanced time indicator updates
updateTimeIndicator();
setInterval(updateTimeIndicator, 60000);
setInterval(updateTimestamp, 60000);

// Add subtle parallax effect for decorative elements
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const clouds = document.querySelector('.cloud-pattern');
    if (clouds) {
        clouds.style.transform = `translateY(${scrolled * 0.1}px)`;
    }
});