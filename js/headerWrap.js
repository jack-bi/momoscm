;(function ($, document) {
  'use strict'

  var currentScript = document.currentScript

  // Header styles belong to the component so every consuming page uses the same UI.
  if (!document.querySelector('link[data-header-wrap-styles]')) {
    var styleLink = document.createElement('link')
    var scriptUrl = currentScript && currentScript.src ? currentScript.src : '/js/headerWrap.js'

    styleLink.rel = 'stylesheet'
    styleLink.href = scriptUrl.replace(/headerWrap\.js(?:\?.*)?$/, 'headerWrap.css')
    styleLink.setAttribute('data-header-wrap-styles', '')
    document.head.appendChild(styleLink)
  }

  //#region header HTML
  var header = `<div class="headerWrap">
<div class="topBlock">
    <a class="logo" href="/showcase.html"><img src="img/scmlogo.png" alt="" width="100%" height="auto"></a>
    <p class="companyname">您好！閃閃金光閃閃有限公司(金光閃閃流行精品)</p>
    <dl class="topnav">
        <dt>操作剩餘時間：<b>180分鐘</b></dt>
        <dd><span>登出</span></dd>
        <dd><span>下載APP</span></dd>
        <dd class="dropMenu top-nav-notification position-relative">
        <span class="dropBtn">推播通知<i></i></span>
        <b class="position-absolute top-0 start-100 notify-num-translate-middle badge notify-radius-pill notify-badge-num-bg">99+</b>
        <div class="dropList drop_R drop-notify notify-list">
            <div class="notify-list-header d-flex justify-content-between">
                <p class="notify-list-title">最新通知</p>
                <p class="notify-link">查看全部</p>
            </div>
            <div class="notify-item">
                <div class="d-flex justify-content-between">
                    <p class="notify-item-title">問問訊息</p>
                    <p class="notify-item-text-secondary">01/20 10:30</p>
                </div>
                <p class="notify-item-text-secondary line-clamp line2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident vero officiis maxime, similique ad totam corrupti voluptatum deleniti, inventore molestias repudiandae ab rerum architecto itaque mollitia molestiae, ducimus ipsam expedita?</p>
                </div>
            <div class="notify-item notify-item-unread">
                <div class="d-flex justify-content-between">
                    <p class="notify-item-title">問問訊息</p>
                    <p class="notify-item-text-secondary">01/20 10:30</p>
                </div>
                <p class="notify-item-text-secondary line-clamp line2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima illum recusandae facilis maxime laudantium nemo expedita nulla repellat!</p>
            </div>
            <div class="notify-item notify-item-read">
                <div class="d-flex justify-content-between">
                    <p class="notify-item-title">問問訊息</p>
                    <p class="notify-item-text-secondary">01/20 10:30</p>
                </div>
                <p class="notify-item-text-secondary line-clamp line2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima illum recusandae facilis maxime laudantium nemo expedita nulla repellat!</p>
            </div>
            <div class="notify-item">
                <div class="d-flex justify-content-between">
                    <p class="notify-item-title">問問訊息</p>
                    <p class="notify-item-text-secondary">01/20 10:30</p>
                </div>
                <p class="notify-item-text-secondary line-clamp line2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima illum recusandae facilis maxime laudantium nemo expedita nulla repellat!</p>
            </div>
        </div>
    </dd>    
        <dd class="dropMenu">
            <span class="dropBtn">聯絡我們<i></i></span>
            <ul class="dropList drop_R">
                <li><a href="javascript:void(0)">聯絡momo</a></li>
                <li><a href="javascript:void(0)">窗口查詢</a></li>
                <li><a href="javascript:void(0)">常見問題</a></li>
                <li><a href="/LearningCenter.scm">SCM學堂</a></li>
            </ul>
        </dd>
    </dl>
</div>
<!-- 主選單 -->
<dl class="mainbav">
    <dt class="mainbavTab">
        <ul>
            <li class="selected"><span>供應商</span></li>
            <li><span>通路</span></li>
            <li><span>訂單</span></li>
            <li><span>商品</span></li>
            <li><span>帳務</span></li>
            <li><span>外物流</span></li>
            <li><span>寄倉</span></li>
            <li><span>商談</span></li>
            <li><span>機票</span></li>
            <li><span>運輸</span></li>
            <li><span>銷售分析</span></li>
            <li><span>問問(0)</span></li>  
            <li><span>評價</span></li>  
            <li><span>廣告設定</span></li>
            <li><span>活動</span></li>
        </ul>
        <button>我想了解富邦電商貸！</button>
    </dt>
    <dd class="mainbavCon">
        <dl>
            <dd class="dropMenu">
                <span class="dropBtn">供應商<i></i></span>
                <ul class="dropList">
                    <li><a href="/h1102.html">[H1102]使用人管理</a></li>
                    <li><a href="/h1103.html">[H1103]使用人權限管理</a></li>
                    <li><a href="/h1104.html">[H1104]供應商資料異動</a></li>
                    <li><a href="/h1105.html">[H1105]供應商資料異動清單</a></li>
                    <li><a href="/h1106.html">[H1106]線上同意書</a></li>
                    <li><a href="/h1107.html">[H1107]品牌管理</a></li>
                    <li><a href="/h1108.html">[H1108]分店管理</a></li>
                    <li><a href="/h1111.html">[H1111]後扣線上同意書</a></li>
                    <li><a href="/h1112.html">[H1112]API串接IP位址管理</a></li>
                    <li><a href="/h1113.html">[H1113]包底同意書</a></li>
                </ul>
            </dd>
            <dd class="dropMenu">
                <span class="dropBtn">課程報名<i></i></span>
                <ul class="dropList">
                    <li><a href="/1701.html">[1701]課程線上報名</a></li>
                </ul>
            </dd>
            <dd class="dropMenu">
                <span class="dropBtn">問卷調查<i></i></span>
                <ul class="dropList">
                    <li><a href="/1601.html">[1601]問卷調查</a></li>
                </ul>
            </dd>
            <dd class="dropMenu">
                <span class="dropBtn">資料下載<i></i></span>
                <ul class="dropList">
                    <li><a href="/1501.html">[1501]文件下載</a></li>
                </ul>
            </dd>
            <dd class="dropMenu">
                <span class="dropBtn">富邦電商貸<i></i></span>
                <ul class="dropList">
                    <li><a href="/1801.html">[1801]富邦電商貸</a></li>
                </ul>
            </dd>
        </dl>
    </dd>
    <dd class="mainbavCon">
        <dl>
            <dd class="dropMenu">
                <span class="dropBtn">通路上架資料<i></i></span>
                <ul class="dropList">
                    <li><a href="/3101.html">[3101]電視通路</a></li>
                    <li><a href="/3102.html">[3102]型錄通路</a></li>
                    <li><a href="/3103.html">[3103]網路通路</a></li>
                    <li><a href="/3104.html">[3104]促銷內容</a></li>
                </ul>
            </dd>
        </dl>
    </dd>
    <dd class="mainbavCon">
        <dl>
            <dd class="dropMenu">
                <span class="dropBtn">出貨管理<i></i></span>
                <ul class="dropList">
                    <li><a href="/a1101.html">[A1101]未出貨商品總覽</a></li>
                    <li><a href="/a1102.html">[A1102]未出貨訂單管理</a></li>
                    <li><a href="/a1103.html">[A1103]配送單查詢下載</a></li>
                    <li><a href="/a1104.html">[A1104]未押出庫客辦退</a></li>
                    <li><a href="/a1105.html">[A1105]出貨中(已印單)訂單查詢</a></li>
                    <li><a href="/a1106.html">[A1106]已出貨/已回收訂單管理</a></li>
                    <li><a href="/a1107.html">[A1107]保代出庫管理</a></li>
                    <li><a href="/a1108.html">[A1108]旅遊使用結訂單管理</a></li>
                    <li><a href="/a1109.html">[A1109]汽機車訂單領牌人資料回填</a></li>
                    <li><a href="/a1110.html">[A1110]訂單商品接單統計</a></li>
                </ul>
            </dd>
            <dd class="dropMenu">
                <span class="dropBtn">回收管理<i></i></span>
                <ul class="dropList">
                    <li><a href="/a1201.html">[A1201]未回收訂單管理</a></li>
                </ul>
            </dd>
            <dd class="dropMenu">
                <span class="dropBtn">特殊訂單列印管理<i></i></span>
                <ul class="dropList">
                    <li><a href="/a1301.html">[A1301]內湖精品倉宅配列印</a></li>
                    <li><a href="/a1303.html">[A1303]貴重甲配送驗單/標籤列印</a></li>
                </ul>
            </dd>
        </dl>
    </dd>
    <dd class="mainbavCon">
        <dl>
            <dd class="dropMenu">
                <span class="dropBtn">商品提報<i></i></span>
                <ul class="dropList">
                    <li><a href="/D1101.html">[D1101]商品提報管理(單筆)</a></li>
                    <li><a href="/D1102.html">[D1102]商品提報管理(批次)</a></li>
                    <li><a href="/d1103.html">[D1103]商品提報進度查詢</a></li>
                    <li><a href="/d1104.html">[D1104]TV商品提報管理</a></li>
                    <li><a href="/d1105.html">[D1105]TVAPP商品提報管理</a></li>
                    <li><a href="/d1106.html">[D1106]SET組合商品提報</a></li>
                    <li><a href="/d1107.html">[D1107]商品規格設定</a></li>
                </ul>
            </dd>
            <dd class="dropMenu">
                <span class="dropBtn">商品管理<i></i></span>
                <ul class="dropList">
                    <li><a href="/d1201.html">[D1201]商品內容查詢</a></li>
                    <li><a href="/d1202.html">[D1202]商品退貨原因查詢</a></li>
                    <li><a href="/d1203.html">[D1203]商品加減量申請</a></li>
                    <li><a href="/d1204.html">[D1204]商品加減量歷史紀錄</a></li>
                    <li><a href="/d1205.html">[D1205]商品上下架申請</a></li>
                    <li><a href="/d1206.html">[D1206]商品異動管理</a></li>
                    <li><a href="/d1207.html">[D1207]歷史價格查詢</a></li>
                    <li><a href="/d1208.html">[D1208]MD申請變價確認</a></li>
                    <li><a href="/d1209.html">[D1209]網路商品顧客問貨/賣貴通報查詢</a></li>
                    <li><a href="/d1210.html">[D1210]商品銷售狀況查詢</a></li>
                    <li><a href="/d1211.html">[D1211]TV商品異動待確認(MD → 廠商)</a></li>
                    <li><a href="/d1212.html">[D1212]TV商品異動管理(MD → 廠商)</a></li>
                    <li><a href="/d1213.html">[D1213]TV提報內容確認</a></li>
                    <li><a href="/D1214.html">[D1214]商品贈品行銷活動</a></li>
                    <li><a href="/d1215.html">[D1215]商品預購申請/項目</a></li>
                    <li><a href="/d1216.html">[D1216]SET組合商品異動管理</a></li>
                    <li><a href="/d1220.html">[D1220]TV商品異動管理(雛型)</a></li>
                    <li><a href="/d1221.html">[D1221]圖片批次異動</a></li>
                </ul>
            </dd>
            <dd class="dropMenu">
                <span class="dropBtn">特殊商品管理<i></i></span>
                <ul class="dropList">
                    <li><a href="/d1301.html">[D1301]匯出商品資料</a></li>
                    <li><a href="/d1302.html">[D1302]雨場票券</a></li>
                    <li><a href="/d1303.html">[D1303]商品品牌分店管理</a></li>
                    <li><a href="/d1304.html">[D1304]電子票券商品券號匯入</a></li>
                </ul>
            </dd>
        </dl>
    </dd>
    <dd class="mainbavCon">
        <dl>
            <dd class="dropMenu">
                <span class="dropBtn">對帳資料<i></i></span>
                <ul class="dropList">
                    <li><a href="/c1106.html">[C1106]日對帳</a></li>
                    <li><a href="/c1101.html">[C1101]供應商對帳單</a></li>
                    <li><a href="/c1102.html">[C1102]供應商付款明細表</a></li>
                    <li><a href="/c1103.html">[C1103]服務性票券控管查詢</a></li>
                    <li><a href="/c1104.html">[C1104]旅遊對帳資料下載</a></li>
                    <li><a href="/c1105.html">[C1105]對帳訂單明細</a></li>
                    <li><a href="/c1107.html">[C1107]電子票券使用結對帳</a></li>
                    <li><a href="/c1108.html">[C1108]電子票券使用狀況</a></li>
                    <li><a href="/c1109.html">[C1109]電子發票維護</a></li>
                    <li><a href="/c1110.html">[C1110]開立發票作業</a></li>
                    <li><a href="/c1111.html">[C1111]作廢發票</a></li>
                    <li><a href="/c1112.html">[C1112]媒體申報檔</a></li>
                </ul>
            </dd>
            <dd class="dropMenu">
                <span class="dropBtn">扣款明細<i></i></span>
                <ul class="dropList">
                    <li><a href="/c1201.html">[C1201]寄倉派工/耗材費用扣款明細</a></li>
                    <li><a href="/c1202.html">[C1202]超取/甲指(第三方)運費</a></li>
                    <li><a href="/c1203.html">[C1203]贊助款/獎勵金扣款</a></li>
                    <li><a href="/c1204.html">[C1204]物流處理費、分攤運費扣款明細</a></li>
                    <li><a href="/c1205.html">[C1205]延遲罰款明細</a></li>
                    <li><a href="/c1206.html">[C1206]延遲罰款/減免申請</a></li>
                    <li><a href="/c1207.html">[C1207]佣金</a></li>
                    <li><a href="/c1208.html">[C1208]新品上刊費扣款明細</a></li>
                    <li><a href="/c1209.html">[C1209]動態密碼鎖扣款明細</a></li>
                    <li><a href="/c1210.html">[C1210]活動贊助金/置入</a></li>
                    <li><a href="/c1211.html">[C1211]分攤包裝費</a></li>
                    <li><a href="/c1212.html">[C1212]倉租費查詢</a></li>
                    <li><a href="/c1213.html">[C1213]違反包材規範扣款明細</a></li>
                    <li><a href="/c1214.html">[C1214]約定送貨延遲扣款明細</a></li>
                    <li><a href="/c1215.html">[C1215]換貨延遲扣款明細</a></li>
                    <li><a href="/c1216.html">[C1216]配送虛構扣款明細</a></li>
                    <li><a href="/c1217.html">[C1217]顧客通報逾期罰款(商談/賣貴/問貨)</a></li>
                    <li><a href="/c1218.html">[C1218]重大案件扣款</a></li>
                    <li><a href="/c1219.html">[C1219]銷補金查詢</a></li>
                    <li><a href="/c1220.html">[C1220]週期購訂單補貼扣款明細</a></li>
                </ul>
            </dd>
        </dl>
    </dd>
    <dd class="mainbavCon">
        <dl>
            <dd class="dropMenu">
                <span class="dropBtn">站所管理<i></i></span>
                <ul class="dropList">
                    <li><a href="/y1101.html">[Y1101]站所管理</a></li>
                    <li><a href="/y1102.html">[Y1102]出貨/回收地址確認</a></li>
                    <li><a href="/y1103.html">[Y1103]貨運公司商談</a></li>
                    <li><a href="/y1104.html">[Y1104]基本資料查詢</a></li>
                    <li><a href="/y1105.html">[Y1105]宅單與退編查詢</a></li>
                    <li><a href="/y1106.html">[Y1106]退清單號內容物查詢</a></li>
                </ul>
            </dd>
        </dl>
    </dd>
    <dd class="mainbavCon">
        <dl>
            <dd class="dropMenu">
                <span class="dropBtn">寄倉報表<i></i></span>
                <ul class="dropList">
                    <li><a href="/f1101.html">[F1101]寄倉商品銷售統計</a></li>
                    <li><a href="/f1102.html">[F1102]寄倉即時庫存</a></li>
                    <li><a href="/f1103.html">[F1103]商品寄倉區間進銷存</a></li>
                    <li><a href="/f1104.html">[F1104]網路寄倉商品降價賣更多確認</a></li>
                    <li><a href="/f1105.html">[F1105]網路寄倉商品滯銷降價明細</a></li>
                    <li><a href="/f1106.html">[F1106]期初/末庫存查詢</a></li>
                    <li><a href="/f1107.html">[F1107]寄倉商品效期查詢</a></li>
                </ul>
            </dd>
            <dd class="dropMenu">
                <span class="dropBtn">入庫管理<i></i></span>
                <ul class="dropList">
                    <li><a href="/f1201.html">[F1201]入庫通知</a></li>
                    <li><a href="/f1202.html">[F1202]歷史入庫單查詢</a></li>
                    <li><a href="/f1203.html">[F1203]庫存現況</a></li>
                    <li><a href="/f1204.html">[F1204]申請入庫</a></li>
                    <li><a href="/f1205.html">[F1205]耗材申請</a></li>
                    <li><a href="/f1206.html">[F1206]產生條碼檔</a></li>
                    <li><a href="/f1207.html">[F1207]進貨檢驗異常通知單</a></li>
                    <li><a href="/f1208.html">[F1208]精品倉檢驗異常通知單</a></li>
                    <li><a href="/f1209.html">[F1209]滯銷商品明細</a></li>
                    <li><a href="/f1210.html">[F1210]MD申請採購確認</a></li>
                    <li><a href="/f1211.html">[F1211]採購明細(圖書專用)</a></li>
                </ul>
            </dd>
            <dd class="dropMenu">
                <span class="dropBtn">退倉管理<i></i></span>
                <ul class="dropList">
                    <li><a href="/f1301.html">[F1301]退倉通知</a></li>
                    <li><a href="/f1302.html">[F1302]歷史退倉紀錄</a></li>
                    <li><a href="/f1305.html">[F1305]客直退訂單管理</a></li>
                    <li><a href="/f1306.html">[F1306]良品退倉申請</a></li>
                </ul>
            </dd>
            <dd class="dropMenu">
                <span class="dropBtn">倉庫管理<i></i></span>
                <ul class="dropList">
                    <li><a href="/f1401.html">[F1401]刷件建退程式</a></li>
                </ul>
            </dd>
        </dl>
    </dd>
    <dd class="mainbavCon">
        <dl>
            <dd class="dropMenu">
                <span class="dropBtn">商談管理<i></i></span>
                <ul class="dropList">
                    <li><a href="/b1101.html">[B1101]商談進度查詢</a></li>
                    <li><a href="/b1102.html">[B1102]商談案件分析</a></li>
                    <li><a href="/b1103.html">[B1103]電視商品問貨</a></li>
                </ul>
            </dd>
        </dl>
    </dd>
    <dd class="mainbavCon">
        <dl>
            <dd class="dropMenu">
                <span class="dropBtn">開票<i></i></span>
                <ul class="dropList">
                    <li><a href="/t1101.html">[T1101]開票作業</a></li>
                    <li><a href="/t1102.html">[T1102]開票代轉作業</a></li>
                    <li><a href="/t1103.html">[T1103]開票查詢</a></li>
                </ul>
            </dd>
            <dd class="dropMenu">
                <span class="dropBtn">作廢<i></i></span>
                <ul class="dropList">
                    <li><a href="/t1201.html">[T1201]機票作廢</a></li>
                </ul>
            </dd>
            <dd class="dropMenu">
                <span class="dropBtn">改票<i></i></span>
                <ul class="dropList">
                    <li><a href="/t1301.html">[T1301]改票作業</a></li>
                </ul>
            </dd>
            <dd class="dropMenu">
                <span class="dropBtn">退票<i></i></span>
                <ul class="dropList">
                    <li><a href="/t1401.html">[T1401]改票退票作業</a></li>
                    <li><a href="/t1402.html">[T1402]退票退款</a></li>
                    <li><a href="/t1403.html">[T1403]退票作業</a></li>
                </ul>
            </dd>
            <dd class="dropMenu">
                <span class="dropBtn">對帳<i></i></span>
                <ul class="dropList">
                    <li><a href="/t1801.html">[T1801]對帳</a></li>
                    <li><a href="/t1802.html">[T1802]對帳資料下載</a></li>
                </ul>
            </dd>
        </dl>
    </dd>
    <dd class="mainbavCon">
        <dl>
            <dd class="dropMenu">
                <span class="dropBtn">第三方物流機制<i></i></span>
                <ul class="dropList">
                    <li><a href="/h1101.html">[H1101]出貨/回收地址管理</a></li>
                </ul>
            </dd>
            <dd class="dropMenu">
                <span class="dropBtn">超商取貨物流機制<i></i></span>
                <ul class="dropList">
                    <li><a href="/h1109.html">[H1109]便利達康超取測標</a></li>
                    <li><a href="/h1114.html">[H1114]全家超取測標</a></li>
                    <li><a href="/h1110.html">[H1110]7-11超取測標</a></li>
                </ul>
            </dd>
            <dd class="dropMenu">
                <span class="dropBtn">寄倉物流機制<i></i></span>
                <ul class="dropList">
                    <li><a href="/tr1301.html">[TR1301]週退/直退地址管理</a></li>
                </ul>
            </dd>
        </dl>
    </dd>
    <dd class="mainbavCon">
        <dl>
            <dd>
                <span class="borderR">
                    <a href="S1602.html">網路數據首頁</a>
                </span>
            </dd>
            <dd class="dropMenu">
                <span class="dropBtn">網路銷售分析<i></i></span>
                <ul class="dropList">
                    <li><a href="/s101.html">[S101]銷售狀況分析</a></li>
                    <li><a href="/s1102.html">[S1102]銷售高低峰期</a></li>
                    <li><a href="/s1103.html">[S1103]銷售排行榜</a></li>
                    <li><a href="/s1104.html">[S1104]指定區間銷售分析</a></li>
                    <li><a href="/s1105.html">[S1105]退貨狀況分析</a></li>
                    <li><a href="/s1106.html">[S1106]全站銷售排行</a></li>
                </ul>
            </dd>
            <dd class="dropMenu">
                <span class="dropBtn">網路商品分析<i></i></span>
                <ul class="dropList">
                    <li><a href="S1201.html">[S1201]商品表現</a></li>
                    <li><a href="/s1202.html">[S1202]追蹤清單總覽</a></li>
                    <li><a href="S1203.html">[S1203]自定義商品追蹤</a></li>
                </ul>
            </dd>
            <dd class="dropMenu">
                <span class="dropBtn">客戶分析<i></i></span>
                <ul class="dropList">
                    <li><a href="/s1301.html">[S1301]客戶輪廓分析</a></li>
                    <li><a href="/s1302.html">[S1302]客群行為分析</a></li>
                </ul>
            </dd>
            <dd class="dropMenu">
                <span class="dropBtn">物流庫存分析<i></i></span>
                <ul class="dropList">
                    <li><a href="S1401.html">[S1401]物流配送分析</a></li>
                    <li><a href="/s1402.html">[S1402]高庫存商品</a></li>
                </ul>
            </dd>
            <dd class="dropMenu">
                <span class="dropBtn">流量<i></i></span>
                <ul class="dropList">
                    <li><a href="/s1501.html">[S1501]流量總覽</a></li>
                    <li><a href="S1502.html">[S1502]訪客分析</a></li>
                    <li><a href="S1503.html">[S1503]外部廣告成效分析</a></li>
                    <li><a href="/s1504.html">[S1504]媒體對應表</a></li>
                </ul>
            </dd>
            <dd class="dropMenu">
                <span class="dropBtn">市場分析<i></i></span>
                <ul class="dropList">
                    <li><a href="/s1801.html">[S1801]市場關鍵詞趨勢</a></li>
                </ul>
            </dd>
            <dd class="dropMenu">
                <span class="dropBtn">活動<i></i></span>
                <ul class="dropList">
                    <li><a href="S1901.html">[S1901]單品折價券分析</a></li>
                </ul>
            </dd>
            <dd>
                <span class="borderL">
                    <a href="javascript:void(0)">電視銷售分析</a>
                </span>
            </dd>
        </dl>
        <button class="datacenterBtn">雙11戰情</button>
        <div class="tableMg dropMenu">
            <span class="dropBtn">報表管理<i></i></span>
            <ul class="dropList drop_R">
                <li><a href="extendMg.html">擴充功能管理</a></li>
            </ul>
        </div>
    </dd>
    <dd class="mainbavCon">
        <dl>
            <dd class="dropMenu">
                <span class="dropBtn">問問<i></i></span>
                <ul class="dropList">
                    <li><a href="/Q1101.html">[Q1101]問問</a></li>
                    <li><a href="/q1102.html">[Q1102]問問答錄</a></li>
                </ul>
            </dd>
        </dl>
    </dd>


    <dd class="mainbavCon">
        <dl>
            <dd class="dropMenu">
                <span class="dropBtn">商品評價管理<i></i></span>
                <ul class="dropList">
                    <li><a href="/x1101.html">[X1101]商品評價管理</a></li>
                    <li><a href="/x1102.html">[X1102]mo點評價加碼</a></li>
                </ul>
            </dd>
            <dd class="dropMenu">
                <span class="dropBtn">約配問卷調查<i></i></span>
                <ul class="dropList">
                    <li><a href="/X1201.html">[X1201]約配問卷調查</a></li>
                </ul>
            </dd>
        </dl>
    </dd>
    <dd class="mainbavCon">
        <dl>
            <dd class="dropMenu">
                <span class="dropBtn">廣告設定<i></i></span>
                <ul class="dropList">
                    <li><a href="/z1101.html">[Z1101]廣告設定管理</a></li>
                    <li><a href="/z1103.html">[Z1103]登入momo Ads廣告平台</a></li>
                </ul>
            </dd>
        </dl>
    </dd>
    <dd class="mainbavCon">
        <dl>
            <dd class="dropMenu">
                <span class="dropBtn">mo幣購買<i></i></span>
                <ul class="dropList">
                    <li><a href="/M1101.html">[M1101]購買mo幣</a></li>
                    <li><a href="/m1102.html">[M1102]發票明細列印</a></li>
                </ul>
            </dd>
            <dd class="dropMenu">
                <span class="dropBtn">網路管理<i></i></span>
                <ul class="dropList">
                    <li><a href="/3201.html">[3201]Banner管理</a></li>
                    <li><a href="/3202.html">[3202]商品排序管理</a></li>
                    <li><a href="/3203.html">[3203]品牌旗艦館管理</a></li>
                </ul>
            </dd>
        </dl>
    </dd>
    
</dl>
</div>`
  //#endregion

  if (currentScript && currentScript.parentNode) {
    currentScript.insertAdjacentHTML('beforebegin', header)
  } else {
    // 舊版瀏覽器 fallback；避免改變既有 header 的插入位置。
    document.write(header)
  }

  $(function () {
    // 20201223_SCM_天UI調整
    // 主選單頁籤切換（支援 click 與 hover 兩種觸發方式）
    var $header = $('.headerWrap').first()
    var $mainbav = $header.children('.mainbav')
    var $mainbavTab = $mainbav.children('.mainbavTab').find('li')
    var $mainbavCon = $mainbav.children('.mainbavCon')
    var hoverTimer = null

    // 目前專案內已有實作的頁面。新增頁面時只要在此補上檔名，
    // 對應的選單項目就會自動恢復連結、hover 文字色與 pointer cursor。
    var availableRoutes = [
      '3203.html',
      'd1101.html',
      'd1102.html',
      'd1214.html',
      'm1101.html',
      'q1101.html',
      's1201.html',
      'x1201.html',
      'extendmg.html',
    ]

    // 共用的切換邏輯，click 跟 hover 都呼叫這個。
    function switchTab(tabIndex) {
      $mainbavTab.removeClass('selected').eq(tabIndex).addClass('selected')
      $mainbavCon.hide().eq(tabIndex).show()
    }

    var currentPath = window.location.pathname.toLowerCase()
    var currentFile = currentPath.substring(currentPath.lastIndexOf('/') + 1)
    var currentTabIndex = 0

    $mainbav.find('.dropList a').each(function () {
      var linkPath = (this.getAttribute('href') || '').toLowerCase()
      var linkFile = linkPath.substring(linkPath.lastIndexOf('/') + 1)
      var $link = $(this)
      var $menuItem = $link.closest('li')
      var isAvailable = availableRoutes.indexOf(linkFile) !== -1

      $menuItem.toggleClass('route-available', isAvailable)
      $menuItem.toggleClass('route-unavailable', !isAvailable)

      if (!isAvailable) {
        $link.attr({
          'aria-disabled': 'true',
          tabindex: '-1',
        })
      }

      if (isAvailable && linkFile === currentFile) {
        var $section = $menuItem.closest('.mainbavCon')

        currentTabIndex = $mainbavCon.index($section)
        $menuItem.addClass('active')
        $menuItem.closest('dd.dropMenu').addClass('active')
        return false
      }
    })

    switchTab(currentTabIndex)

    $mainbavTab.on({
      click: function () {
        switchTab($(this).index())
      },
      mouseenter: function () {
        var tabIndex = $(this).index()

        clearTimeout(hoverTimer)
        hoverTimer = setTimeout(function () {
          switchTab(tabIndex)
        }, 120)
      },
      mouseleave: function () {
        clearTimeout(hoverTimer)
      },
    })

    $mainbavCon.children('dl').children('dd').on('click', function () {
      $(this).addClass('active').siblings('dd').removeClass('active')
    })

    $mainbav.find('.dropMenu .dropList li.route-available').on('click', function () {
      $(this).addClass('active').siblings('li').removeClass('active')
    })

    $mainbav.find('.dropMenu .dropList li.route-unavailable a').on('click', function (event) {
      event.preventDefault()
    })
  })
})(jQuery, document)
