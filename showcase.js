const screens = [
  { code: 'HOME', title: 'SCM 工作儀表板', file: 'index.html?dashboard=1', category: 'overview', label: '系統總覽', description: '整合待辦、公告與訂單狀態，讓供應商快速掌握每日營運重點。', color: '#dce9ff', nav: '#24334d' },
  { code: 'D1101', title: '商品資料建檔', file: 'D1101.html', category: 'product', label: '商品管理', description: '大型商品表單與認證資料流程，支援複雜欄位、狀態與操作回饋。', color: '#fce4ec', nav: '#4a2735' },
  { code: 'D1102', title: '商品批次上傳', file: 'D1102.html', category: 'product', label: '商品管理', description: '以步驟化流程引導範本下載、檔案上傳與結果確認。', color: '#e4f5ee', nav: '#21453a' },
  { code: '3203', title: '品牌旗艦館管理', file: '3203.html', category: 'product', label: '商品管理', description: '視覺化設定品牌館 Logo、商品分類、展示排序與前台預覽。', color: '#efe6ff', nav: '#38284d' },
  { code: 'D1214', title: '行銷活動管理', file: 'D1214.html', category: 'marketing', label: '行銷營運', description: '建立與管理促銷活動，涵蓋門檻設定、贈品與發佈確認。', color: '#fff0da', nav: '#4a3924' },
  { code: 'M1101', title: 'mo 點數購買', file: 'M1101.html', category: 'marketing', label: '行銷營運', description: '點數方案選擇與購買流程，清楚呈現額度、費用與交易狀態。', color: '#e5efff', nav: '#243e66' },
  { code: 'Q1101', title: '商品問問', file: 'Q1101.html', category: 'service', label: '顧客服務', description: '集中處理商品提問與回覆，兼顧對話脈絡、商品資訊與處理效率。', color: '#e1f5f3', nav: '#204641' },
  { code: 'REVIEW', title: '商品評價管理', file: 'prdReview.html', category: 'service', label: '顧客服務', description: '彙整消費者評價與回覆任務，強化篩選、判讀與批次處理。', color: '#ffe5e1', nav: '#4d2924' },
  { code: 'S1107', title: '品類分析', file: 'S1107.html', category: 'analytics', label: '數據分析', description: '從 KPI、銷售組成到趨勢圖表，快速掌握品類營運表現。', color: '#e3eaff', nav: '#252f52' },
  { code: 'S1201', title: '商品表現', file: 'S1201.html', category: 'analytics', label: '數據分析', description: '以指標明細與比較視圖追蹤商品成效，協助找出成長機會。', color: '#e5f4df', nav: '#2b4827' },
  { code: 'S1507', title: '進階流量分析', file: 'S1507.html', category: 'analytics', label: '數據分析', description: '整合流量 KPI、來源分析與變化趨勢，呈現完整瀏覽漏斗。', color: '#eee5ff', nav: '#362951' },
  { code: 'S1701', title: '網路數據總覽', file: 'S1701.html', category: 'analytics', label: '數據分析', description: '高資訊密度的營運總覽，透過排行與視覺化協助快速決策。', color: '#dfefff', nav: '#233f57' },
  { code: 'X1201', title: '成效與滿意度分析', file: 'X1201.html', category: 'analytics', label: '數據分析', description: '將滿意度、回覆率與問卷結果轉為可掃讀的績效儀表板。', color: '#ffe8d9', nav: '#513225' }
];

const grid = document.querySelector('#screenGrid');
const searchInput = document.querySelector('#searchInput');
const filters = [...document.querySelectorAll('.filters button')];
const emptyState = document.querySelector('#emptyState');
const dialog = document.querySelector('#previewDialog');
const frame = document.querySelector('#previewFrame');
const deviceFrame = document.querySelector('#deviceFrame');
let currentFilter = 'all';

document.querySelector('#projectCount').textContent = screens.length;

function cardTemplate(screen) {
  return `
    <article class="screen-card" tabindex="0" role="button" aria-label="預覽 ${screen.title}" data-file="${screen.file}" style="--cover:${screen.color};--nav:${screen.nav}">
      <div class="card-cover" aria-hidden="true">
        <div class="mini-window">
          <div class="mini-nav"><i></i><i></i><i></i><i></i></div>
          <div class="mini-body"><b></b><span></span><span></span></div>
        </div>
      </div>
      <div class="card-content">
        <div class="card-meta"><span class="card-code">${screen.code}</span><span class="card-category">${screen.label}</span></div>
        <h3 class="card-title">${screen.title}</h3>
        <p class="card-description">${screen.description}</p>
        <div class="card-foot"><span>LIVE HTML PROTOTYPE</span><b>預覽畫面 →</b></div>
      </div>
    </article>`;
}

function renderScreens() {
  const keyword = searchInput.value.trim().toLowerCase();
  const visible = screens.filter(screen => {
    const matchesFilter = currentFilter === 'all' || screen.category === currentFilter;
    const haystack = `${screen.code} ${screen.title} ${screen.label} ${screen.description}`.toLowerCase();
    return matchesFilter && haystack.includes(keyword);
  });
  grid.innerHTML = visible.map(cardTemplate).join('');
  emptyState.hidden = visible.length > 0;
  grid.querySelectorAll('.screen-card').forEach(card => {
    const screen = screens.find(item => item.file === card.dataset.file);
    card.addEventListener('click', () => openPreview(screen));
    card.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openPreview(screen);
      }
    });
  });
}

function openPreview(screen) {
  document.querySelector('#dialogCode').textContent = `${screen.code} · ${screen.label}`;
  document.querySelector('#dialogTitle').textContent = screen.title;
  document.querySelector('#openOriginal').href = screen.file;
  frame.src = screen.file;
  dialog.showModal();
  document.body.style.overflow = 'hidden';
}

function closePreview() {
  dialog.close();
  frame.src = 'about:blank';
  document.body.style.overflow = '';
}

filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(item => item.classList.remove('active'));
  button.classList.add('active');
  currentFilter = button.dataset.filter;
  renderScreens();
}));

searchInput.addEventListener('input', renderScreens);
document.querySelector('#closeDialog').addEventListener('click', closePreview);
dialog.addEventListener('click', event => { if (event.target === dialog) closePreview(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && dialog.open) closePreview(); });

document.querySelectorAll('.viewport-switch button').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('.viewport-switch button').forEach(item => item.classList.remove('active'));
  button.classList.add('active');
  deviceFrame.className = `device-frame ${button.dataset.width}`;
}));

renderScreens();
