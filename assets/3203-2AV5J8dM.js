import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      *//* empty css               *//* empty css                  *//* empty css                   */const E=Array.from({length:124},(e,t)=>{const s=t+1,a=["銷售中","暫停銷售","已下架"],l=["品牌經典短袖上衣","輕量防潑水外套","休閒直筒長褲","聯名款帆布提袋","日常百搭休閒鞋"],o=320+t%8*45;return{goodsCode:String(1192e4+s),goodsName:`${l[t%l.length]} ${String(s).padStart(3,"0")}`,saleStatus:a[t%a.length],buyPrice:o,salePrice:o+180+t%5*20}}),Y=Array.from({length:23},(e,t)=>({item:t%2===0?"分類設定":"商品設定",categoryName:["新品推薦","品牌精選","期間限定"][t%3],actionText:["新增","修改","排序"][t%3],modifyDate:`2026/10/${String(24-t%20).padStart(2,"0")} ${String(9+t%9).padStart(2,"0")}:30:00`,modifyUser:t%2===0?"平台":"985 廠商人員"})),r={state:{products:[],currentPage:1,pageSize:10,totalProducts:0,hasSearched:!1,sortMode:!1,logoFile:null,hasImportedFile:!1,logs:[],logPage:1,logTotal:0},init(e){this.state.pageSize=e||100},getLogHistory({pageLimit:e,listPage:t}){const s=(t-1)*e;return Promise.resolve({success:!0,result:Y.slice(s,s+e),listSize:Y.length,pageLimit:e,listPage:t})},getSearchSchema({level:e,mode:t}){var l;const s={category:{key:"category",type:"category",label:"商品提報分類",width:"33%"},productBrand:{key:"productBrand",type:"productBrand",label:"商品品牌",width:"33%"},brandSeries:{key:"brandSeries",type:"brandSeries",label:"品牌系列",width:"33%"},keyword:{key:"keyword",type:"keyword",label:"商品名稱",width:"33%"},price:{key:"price",type:"price",label:"價格",width:"33%"},attribute:{key:"attribute",type:"attribute",label:"屬性",width:"33%"},status:{key:"status",type:"status",label:"銷售狀況",width:"33%"},productId:{key:"productId",type:"productId",label:"商品編號",width:"33%"}},a={system:{level1:[{...s.category,width:"33%"},{...s.productBrand,width:"33%"},{...s.brandSeries,width:"33%"},{...s.keyword,width:"33%"},{...s.price,width:"33%"},{...s.attribute,width:"33%"}],level2:[{...s.category,width:"33%"},{...s.productBrand,width:"33%"},{...s.brandSeries,width:"33%"},{...s.keyword,width:"33%"},{...s.price,width:"33%"},{...s.attribute,width:"33%"}]},manual:{level1:[{...s.category,width:"25%"},{...s.productBrand,width:"25%"},{...s.brandSeries,width:"25%"},{...s.status,width:"23%"},{...s.price,width:"36%"},{...s.productId,width:"30%"},{...s.keyword,width:"33%"}],level2:[{...s.category,width:"25%"},{...s.productBrand,width:"25%"},{...s.brandSeries,width:"25%"},{...s.status,width:"23%"},{...s.price,width:"36%"},{...s.productId,width:"30%"},{...s.keyword,width:"33%"}]}};return((l=a==null?void 0:a[t])==null?void 0:l[e])||[]},getPagedProducts(){const{products:e,currentPage:t,pageSize:s}=this.state,a=(t-1)*s;return e.slice(a,a+s)},getTotalPages(){return Math.ceil(this.state.products.length/this.state.pageSize)},getBlockLogs(){return[{name:"樓層看板與商品",action:"刪除",time:"2024/10/16 11:24:03",user:"平台"},{name:"影音商品_自訂標題顏色",action:"新增",time:"2024/10/13 11:24:03",user:"985 廠商人員"},{name:"橫條看板_10cut輪播",action:"新增",time:"2024/10/13 11:24:03",user:"平台"}]},getLevel(e){return e.data("level")||1},setPage(e){this.state.currentPage=e},setProducts(e){this.state.products=e,this.state.currentPage=1},setLogoFile(e){this.state.logoFile=e},toggleSortMode(){return this.state.sortMode=!this.state.sortMode,this.state.sortMode},saveSwitch(e){e.closest("tr").data("id"),e.is(":checked")},saveSort(e,t){},mockSearchProducts(){return this.setProducts(E),this.state.totalProducts=E.length,E},searchProducts(e={}){const t=Number(e.pageLimit)||this.state.pageSize||100,s=Number(e.listPage)||1,a=(s-1)*t;return Promise.resolve({success:!0,result:E.slice(a,a+t),listSize:E.length,pageLimit:t,listPage:s})}},Z={state:{logoFile:null,sortable:null},handleLogoFile(e){const t=e.target.files[0];if(!t)return;if(t.size>5*1024){alert("檔案不可超過 5KB"),$("#logoFileInput").val("");return}const s=new FileReader;s.onload=a=>{const l=new Image;l.onload=()=>{if(l.width!==160||l.height!==160){alert("圖片尺寸必須為 160 x 160 px"),$("#logoFileInput").val("");return}$(".file-name").text(t.name),this.state.logoFile=t,$(".logo-row img").attr("src",a.target.result)},l.src=a.target.result},s.readAsDataURL(t)},uploadLogo(){const e=this.state.logoFile;return e?Promise.resolve({success:!0,fileName:e.name}).then(()=>{alert("上傳成功（Mock）")}):alert("請先選檔")},updateCount(e){const t=e.val();e.closest(".rename-input-wrap").find(".rename-count").text(`${t.length}/15`)},toggleRow(e){const t=e.closest("tr"),s=t.data("id");t.hasClass("open")?($(`tr[data-parent="${s}"]:not(.add-child-row)`).hide(),t.removeClass("open"),e.removeClass("bi-chevron-down").addClass("bi-chevron-up")):(r.state.sortMode?$(`tr[data-parent="${s}"]:not(.add-child-row)`).show():$(`tr[data-parent="${s}"]`).show(),t.addClass("open"),e.removeClass("bi-chevron-up").addClass("bi-chevron-down"))},hideChildren(e){const t=$(`tr[data-parent="${e}"]`);t.each((s,a)=>{const l=$(a).data("id");this.hideChildren(l)}),t.hide()},startRename(e){const t=e.closest("td"),s=t.find(".cat-name");if(t.find(".rename-box").length)return;e.hide();const a=s.text().trim(),l=r.getLevel(t.closest("tr")),n={1:"一",2:"二"}[l]||l,i=`
      <div class="rename-box d-flex align-items-center gap-2" data-original="${a}">
        <div class="rename-input-wrap">
          <input class="form-control form-control-sm rename-input" maxlength="15" value=""
            placeholder="請輸入第${n}層分類名稱">
          <span class="rename-count">0/15</span>
        </div>
        <img class="rename-confirm" src="/img/confirm-icon.svg"/>
        <img class="rename-cancel" src="/img/cancel-icon.svg"/>
      </div>
    `;s.replaceWith(i),t.find(".rename-input").focus()},cancelRename(e){const t=e.closest(".rename-box"),s=t.data("original"),a=t.closest("td");t.replaceWith(`<span class="cat-name ps-3">${s}</span>`),a.find(".rename").show()},confirmRename(e){const t=e.closest(".rename-box"),s=t.find(".rename-input"),a=s.val().trim(),l=t.closest("tr"),o=t.closest("td"),n=r.getLevel(l);if(a.length===0){const c={1:"請輸入第一層分類名稱",2:"請輸入第二層分類名稱"}[n]||"請輸入分類名稱";this.showCustomAlert(c,"danger"),s.focus();return}if(t.replaceWith(`<span class="cat-name ps-3">${a}</span>`),o.find(".rename").show(),l.data("has-name",!0),this.updateToggleState(l),n===2){const i=l.data("parent"),c=l.find("td").last();c.find(".add-product").length||c.find(".btn-delete").before(`
          <button class="btn btn-outline-primary btn-outline-primary-custom btn-sm add-product">
            新增商品
          </button>
        `),this.renderAddChildRow(i)}this.updateRowUI(l,!0)},addRootCategory(e){if(e==="活動型"&&$(".level-1").filter((o,n)=>$(n).find(".badge-type-product").text().trim()==="活動型").length>=2){this.showConfirm(`最多僅能設定2個【活動促銷型】的分類，
請改新增【商品型】分類`,null,"確定",!0);return}const t=Date.now()+Math.floor(Math.random()*1e3),s=`
      <tr class="category-row level-1 promo-type" data-id="${t}" data-level="1" data-has-child="false" data-has-product="false">
        <td class="text-start text-title">
          <i class="bi bi-chevron-down toggle" style="display:none;"></i>
          <span class="cat-name ps-3">請輸入第一層分類名稱</span>
          <img class="img rename" src="/img/edit-icon.svg">
          <span class="badge badge-type-product ms-auto">${e}</span>
        </td>
        <td class="text-end">0</td>
        <td class="text-center">
          <div class="form-check form-switch">
            <input class="form-check-input toggle-show" type="checkbox">
          </div>
        </td>
        <td class="text-start">2024/10/15 11:24:03<br />568/廠商人員</td>
        <td class="text-start">
          <button class="btn btn-outline-primary btn-outline-primary-custom btn-sm add-child" data-action="add-child">新增第二層</button>
          <button class="btn btn-outline-primary btn-outline-primary-custom btn-sm add-product" data-action="add-product">新增商品</button>
          <button class="btn btn-outline-primary btn-outline-primary-custom btn-sm btn-delete" data-action="btn-delete">刪除</button>
          <img class="img drag-handle" src="/img/drag-icon.svg">
        </td>
      </tr>
    `;$("#categoryTable").append(s);const a=$(`#categoryTable tr[data-id="${t}"]`);this.updateToggleState(a),this.updateActionVisibility(),r.state.sortMode&&(this.destroySortable(),this.enableSortable())},addProduct(e){const t=e.closest("tr");if(t.data("has-child")){alert("已建立第二層分類，無法新增商品");return}const s=t.data("id"),a=Number(t.data("level"))===1?"level1":"level2";$("#productModal").data({targetRowId:s,level:a,mode:"add"}),$(".parent-btn, .child-btn").addClass("d-none"),a==="level1"?$(".parent-btn").removeClass("d-none"):$(".child-btn").removeClass("d-none"),this.renderSearchArea(a,this.getPlacementMode()),new bootstrap.Modal(document.getElementById("productModal")).show()},addChild(e){const t=e.closest("tr"),s=t.hasClass("add-child-row")?$(`tr[data-id="${t.data("parent")}"]`):t,a=s.data("id"),l=r.getLevel(s)+1,o=Date.now(),n=`
        <tr class="category-row level-${l}" data-id="${o}" data-parent="${a}" data-level="${l}"
            data-has-child="false" data-has-product="false">
          <td class="text-start d-flex align-items-center">
            <span style="padding-left:20px"></span>
            <span class="cat-name ps-3">請輸入第${l}層分類名稱</span>
            <img class="rename" src="/img/edit-icon.svg">
          </td>
          <td class="text-end">0</td>
          <td class="text-center">
            <div class="form-check form-switch">
              <input class="form-check-input toggle-show" type="checkbox">
            </div>
          </td>
          <td>--</td>
          <td class="text-start">
            <button class="btn btn-outline-primary btn-outline-primary-custom btn-sm btn-delete">刪除</button>
            <img class="drag-handle" src="/img/drag-icon.svg">
          </td>
        </tr>
      `,i=$(`tr[data-parent="${a}"]:not(.add-child-row)`);i.length?i.last().after(n):s.after(n),this.renderAddChildRow(a);const c=$(`tr[data-id="${o}"]`);this.updateToggleState(c),s.data({"has-child":!0,"had-child":!0}),this.updateRowUI(s);const m=$(`tr[data-id="${o}"]`);this.startRename(m.find(".rename")),this.updateActionVisibility(),r.state.sortMode&&(this.destroySortable(),this.enableSortable())},deleteRow(e){const t=e.closest("tr"),s=t.attr("data-parent");if(s!==void 0)this.showConfirm("確定要刪除這個分類嗎?",()=>{t.remove();const a=$(`tr[data-id="${s}"]`);if($(`tr[data-parent="${s}"]:not(.add-child-row)`).length===0){a.data("has-child",!1);const o=a.data("had-child"),n=a.find("td").last();o||n.find(".add-product").show()}this.renderAddChildRow(s),this.updateRowUI(a)});else{const a=t.data("id"),l=$(`tr[data-parent="${a}"]`);l.length>0?this.showConfirm(`該分類底下的第二層分類也會一併被刪除，
確定要刪除嗎?`,()=>{l.remove(),t.remove(),$(".level-1").length===0&&this.renderEmptyRoot()}):this.showConfirm("確定要刪除第一層分類嗎?",()=>{t.remove(),$(".level-1").length===0&&this.renderEmptyRoot()})}this.updateActionVisibility(),r.state.sortMode&&(this.destroySortable(),this.enableSortable())},updateToggleIcon(e){const t=e.data("id"),s=$(`tr[data-parent="${t}"]:not(.add-child-row)`),a=e.find(".toggle");!e||!e.length||(s.length===0?(a.hide(),e.removeClass("open"),a.removeClass("bi-chevron-down").addClass("bi-chevron-up")):a.show(),this.checkToggleStateForAddChildRow())},checkToggleStateForAddChildRow(){r.state.sortMode&&$("i.bi-chevron-down.toggle").each(function(){const s=$(this).closest("tr").data("id");$(`tr.add-child-row[data-parent="${s}"]`).hide()})},searchProducts(){const e=this.collectSearchParams();if(!r.mockSearchProducts(e).length){this.setSearchState("empty");return}this.setSearchState("data"),this.renderProducts()},setSearchState(e){$(".search-first").toggleClass("d-none",e!=="first"),$(".no-data").toggleClass("d-none",!(state.searchPhase==="empty"||state.searchPhase==="noInput")),$(".had-data").toggleClass("d-none",e!=="data")},enableSortable(){const e=document.getElementById("categoryTable");this.rootSortable=new Sortable(e,{animation:150,handle:".drag-handle",draggable:".level-1",ghostClass:"dragging",onStart:t=>{const s=$(t.item),a=this.getSubTree(s);s.data("drag-subtree",a.toArray()),a.detach()},onMove:t=>{const s=$(t.dragged),a=$(t.related);return s.hasClass("level-1")?!a.attr("data-parent"):!0},onEnd:t=>{const s=$(t.item);if(!s.hasClass("level-1"))return;const a=s.data("drag-subtree");let l=s.prev();if(l.length&&l.hasClass("level-1")){const o=this.getSubTree(l);(o.length?o.last():l).after(s)}if(a&&a.length){let o=s;a.forEach(n=>{o.after(n),o=$(n)})}s.removeData("drag-subtree"),r.saveSort("level-1",this.getSortData("level-1"))}}),this.childSortable=new Sortable(e,{animation:150,handle:".drag-handle",draggable:".level-2",ghostClass:"dragging",onMove:t=>{const s=$(t.dragged),a=$(t.related),l=s.data("parent"),o=a.data("parent");return l===o&&!a.hasClass("add-child-row")},onEnd:t=>{const a=$(t.item).data("parent");r.saveSort("level-2",this.getSortData("level-2",a))}}),this.checkToggleStateForAddChildRow()},destroySortable(){this.rootSortable&&(this.rootSortable.destroy(),this.rootSortable=null),this.childSortable&&(this.childSortable.destroy(),this.childSortable=null)},getSubTree(e){const t=e.data("id");let s=$();return $(`tr[data-parent="${t}"]`).each((l,o)=>{const n=$(o);s=s.add(n),s=s.add(this.getSubTree(n))}),s},saveSort(){this.showCustomAlert("排序存檔成功","success"),r.state.sortMode=!1,this.toggleSortUI(!1)},cancelSort(){this.showConfirm("確定要放棄異動嗎?",()=>{r.state.sortMode=!1,this.toggleSortUI(!1)})}},R={category:"category",productBrand:"brand",brandSeries:"brandSeries",attribute:"attribute",productAttribute:"attribute"},d={...Z,state:{...Z.state},splitRowsByWidth(e){const t=[];let s=[],a=0;return e.forEach(l=>{let o=0;typeof l.width=="string"&&l.width.includes("%")?o=parseFloat(l.width):o=100,a+o>100&&(t.push(s),s=[],a=0),s.push(l),a+=o}),s.length&&t.push(s),t},getPlacementMode(){return $('input[name="placementType"]:checked').val()||"system"},checkHasSearchInput(){let e=!1;return $("#productSearchArea .dynamic-fields input").each(function(){const t=$(this),s=t.attr("type");if(!(s==="checkbox"||s==="radio")&&(t.val()||"").trim()!=="")return e=!0,!1}),$("#productSearchArea .dynamic-fields select").each(function(){if($(this).val())return e=!0,!1}),$("#productSearchArea .categorySelector").each(function(){var s;const t=$(this).data("categoryState");if(((s=t==null?void 0:t.selectedMap)==null?void 0:s.size)>0)return e=!0,!1}),e},getCategorySelected(e){const t=[];return $(e).find("select option:selected").each(function(){t.push($(this).val())}),t},getSortData(e,t=null){let s=[];return e==="level-1"&&$(".level-1").each((a,l)=>{s.push({id:$(l).data("id"),sort:a+1})}),e==="level-2"&&$(`tr[data-parent="${t}"]`).each((a,l)=>{s.push({id:$(l).data("id"),parentId:t,sort:a+1})}),s},collectSearchParams(){const e={};return $("#productSearchArea [data-field]").each((t,s)=>{const a=$(s),l=a.data("field");if(!a.hasClass("categorySelector")&&a.is("input, select, textarea")){const o=a.val();o!==""&&o!=null&&(e[l]=o)}}),$("#productSearchArea .categorySelector").each((t,s)=>{const l=$(s).data("field"),o=this.getCategorySelected(s);o.length&&(e[l]=o)}),e},setResultView(e){const t=this.getPlacementMode();$(".search-first").toggleClass("d-none",e!=="first"),$(".no-data").toggleClass("d-none",!(e==="empty"||e==="noInput")),e==="data"?(t==="manual"&&($("#productResult").removeClass("d-none"),$(".had-data").addClass("d-none")),t==="system"&&($(".had-data").removeClass("d-none"),$("#productResult").addClass("d-none"))):($("#productResult").addClass("d-none"),$(".had-data").addClass("d-none"))},setResultState(e){switch($(".search-first").addClass("d-none"),$(".no-data").addClass("d-none"),$(".had-data").addClass("d-none"),$(".batchImportResult").addClass("d-none"),$("#productResult").addClass("d-none"),e){case"first":$(".search-first").removeClass("d-none");break;case"no-data":$(".no-data").removeClass("d-none");break;case"data":$(".had-data").removeClass("d-none"),$("#productResult").removeClass("d-none");break;case"batch":$(".batchImportResult").removeClass("d-none");break}},resetSearchResult(){r.state.products=[],r.state.totalProducts=0,this.renderProducts([]),this.renderPagination(),this.updateApplyButtonState()},async searchProducts(e=1){const t=e===1?this.collectSearchParams():r.state.lastSearchParams||{};e===1&&(r.state.lastSearchParams=t);try{const s=await r.searchProducts({...t,pageLimit:r.state.pageSize,listPage:e});if(!s.success)return this.resetSearchResult();const a=s.result||[];r.state.currentPage=s.listPage||e,r.state.pageSize=s.pageLimit||r.state.pageSize,r.state.totalProducts=s.listSize||0,r.state.products=a,r.state.hasSearched=!0,this.renderProducts(a),this.renderPagination(),this.updateApplyButtonState()}catch(s){console.error("searchProducts error:",s),this.resetSearchResult()}},async loadLogs(e){const t=Number($(".log-page-size-select").val())||10,s=r.state.logPage||1,a=await r.getLogHistory({entpCode:"008648",pCategoryCode:e,pageLimit:t,listPage:s});if(!a.success){this.setResultState("no-data");return}const l=(a==null?void 0:a.result)||[],o=(a==null?void 0:a.listSize)||0;r.state.logs=l,r.state.logTotal=o,this.renderLogs(l),this.renderLogPagination(o,t,s),$(".log-total-count").text(o)},renderLogs(e=[]){const t=$("#logTableBody"),s=e.map(a=>`
      <tr>
        <td>${a.item||""}</td>
        <td>${a.categoryName||"-"}</td>
        <td>${a.actionText||""}</td>
        <td>${a.modifyDate||""}</td>
        <td>${a.modifyUser||""}</td>
      </tr>
    `).join("");t.html(s)},renderLogPagination(e,t,s){const a=Math.ceil(e/t),l=$(".log-pagination");if(l.empty(),a<=1)return;const o=(i,c,m=!1,p=!1)=>`
      <li class="page-item ${m?"disabled":""} ${p?"active":""}">
        <a class="page-link log-page-btn" data-page="${c}">${i}</a>
      </li>
    `;l.append(o('<i class="bi bi-chevron-left"></i>',s-1,s===1));let n=[];a<=5?n=Array.from({length:a},(i,c)=>c+1):s<=3?n=[1,2,3,"...",a]:s>=a-2?n=[1,"...",a-2,a-1,a]:n=[1,"...",s-1,s,s+1,"...",a],n.forEach(i=>{i==="..."?l.append(`
          <li class="page-item disabled">
            <span class="page-link">...</span>
          </li>
        `):l.append(o(i,i,!1,i===s))}),l.append(o('<i class="bi bi-chevron-right"></i>',s+1,s===a)),l.off("click",".log-page-btn").on("click",".log-page-btn",i=>{const c=parseInt($(i.currentTarget).data("page"));c>=1&&c<=a&&(r.state.logPage=c,this.loadLogs($("#logModal").data("id")))})},renderBlcokLogs(e){const t=$("#blockLogTableBody");t.empty();let s="";e.forEach(a=>{s+=`
          <tr>
            <td>${a.name}</td>
            <td class="text-center">${a.action}</td>
            <td class="text-center">${a.time}</td>
            <td>${a.user}</td>
          </tr>
        `}),t.html(s)},showProductLoading(){$("#productTableBody").html(`
    <tr>
      <td colspan="6" class="text-center text-muted">
        Loading...
      </td>
    </tr>
  `)},showProductError(){$("#productTableBody").html(`
    <tr>
      <td colspan="6" class="text-center text-danger">
        載入失敗，請稍後再試
      </td>
    </tr>
  `)},async loadProducts(e=1){this.showProductLoading();try{const t=await r.searchProducts({pageLimit:r.state.pageSize,listPage:e}),s=(t==null?void 0:t.result)||[];r.state.currentPage=t.listPage||e,r.state.totalProducts=t.listSize||0,r.state.products=s,this.renderProducts(s),this.renderPagination()}catch(t){console.error(t),this.showProductError()}},renderProducts(e=[]){const t=$("#productTableBody");if($(".had-data").addClass("d-none"),$(".alert-box").addClass("d-none"),$("#productResult").removeClass("d-none"),!e.length){t.html(`
      <tr>
        <td colspan="6" class="text-center text-muted">
          無資料
        </td>
      </tr>
    `),$(".totalCount").text(0);return}const s=e.map(a=>`
    <tr>
      <td class="text-center checkbox-col">
        <input type="checkbox" class="modal-product-check">
      </td>
      <td>${a.goodsCode}</td>
      <td>${a.goodsName||""}</td>
      <td class="text-center">${a.saleStatus||""}</td>
      <td class="text-end">${a.buyPrice||""}</td>
      <td class="text-end">${a.salePrice||""}</td>
    </tr>
  `).join("");t.html(s),$(".totalCount").text(e.length)},renderPagination(){const e=r.state.totalProducts,t=r.state.pageSize,s=r.state.currentPage;let a=Math.ceil(e/t);const l=$(".result-pagination");l.empty(),a<1&&(a=1);const o=(i,c,m=!1,p=!1)=>`
      <li class="page-item ${m?"disabled":""} ${p?"active":""}">
        <a class="page-link page-btn" data-page="${c}">${i}</a>
      </li>
    `;l.append(o('<img class="img prev-icon" src="/img/next-icon.svg" data-default="/img/next-icon.svg" data-active="/img/next-icon-active.svg" />',s-1,s===1));let n=[];a<=5?n=Array.from({length:a},(i,c)=>c+1):s<=3?n=[1,2,3,"...",a]:s>=a-2?n=[1,"...",a-2,a-1,a]:n=[1,"...",s-1,s,s+1,"...",a],n.forEach(i=>{i==="..."?l.append(`
        <li class="page-item disabled">
          <span class="page-link">...</span>
        </li>
      `):l.append(o(i,i,!1,i===s))}),l.append(o('<img class="img" src="/img/next-icon.svg" />',s+1,s===a)),l.off("click",".page-btn").on("click",".page-btn",i=>{const c=parseInt($(i.currentTarget).data("page"));c>=1&&c<=a&&this.searchProducts(c)})},renderField(e){let t="";switch(e.type){case"category":t=`
          <div class="row-group d-flex justify-content-between align-items-center position-relative">
            <span class="label">${e.label}</span>
            <div class="categorySelector w-100 relative" data-field="${e.key}" data-source="${R[e.type]}"></div>
            ${this.renderClearBtn(e)}
          </div>
        `;break;case"productBrand":t=`
          <div class="row-group d-flex justify-content-between align-items-center position-relative">
            <span class="label">${e.label}</span>
            <div class="categorySelector w-100 relative" data-field="${e.key}" data-source="${R[e.type]}"></div>
            ${this.renderClearBtn(e)}
          </div>
        `;break;case"brandSeries":t=`
          <div class="row-group d-flex justify-content-between align-items-center position-relative">
            <span class="label">${e.label}</span>
            <div class="categorySelector w-100 relative" data-field="${e.key}" data-source="${R[e.type]}"></div>
            ${this.renderClearBtn(e)}
          </div>
        `;break;case"keyword":t=`
          <div class="row-group">
            <span class="label">${e.label}</span>
            <input class="form-control search-input" 
                   data-field="${e.key}" 
                   placeholder="${e.placeholder||"輸入關鍵字，請用,分隔"}">
            <img class="img search" src="/img/search-icon.svg">
            ${this.renderClearBtn(e)}
          </div>
        `;break;case"price":t=`
          <div class="row-group bg-white">
            <span class="label">${e.label}</span>
            <div class="input-group">
              <input type="number" data-field="priceMin" class="form-control" placeholder="最低價格">
              <span class="input-group-text">-</span>
              <input type="number" data-field="priceMax" class="form-control" placeholder="最高價格">
            </div>
            ${this.renderClearBtn(e)}
          </div>
        `;break;case"attribute":case"productAttribute":t=`
          <div class="row-group d-flex justify-content-between align-items-center position-relative">
            <span class="label">${e.label}</span>
            <div class="categorySelector w-100 relative" data-field="${e.key}" data-source="${R[e.type]}"></div>
            ${this.renderClearBtn(e)}
          </div>
        `;break;case"productId":t=`
          <div class="row-group">
            <span class="label">${e.label}</span>
            <input class="form-control search-input" data-field="${e.key}" />
            ${this.renderClearBtn(e)}
          </div>
        `;break;case"status":t=`
          <div class="row-group">
            <span class="label">${e.label}</span>
            <select class="form-select search-input" data-field="${e.key}" required>
              <option value="" disabled selected hidden>單選</option>
              <option value="單售">單售</option>
              <option value="促銷">促銷</option>
              <option value="停售">停售</option>
            </select>
            ${this.renderClearBtn(e)}
          </div>
        `;break;case"salesGroup":t=`
          <div class="row-group">
            <span class="label">${e.label}</span>
            <select class="form-select search-input" data-field="${e.key}" required>
              <option value="" disabled selected hidden>單選</option>
              <option value="供應商倉">供應商倉</option>
              <option value="其他">其他</option>
            </select>
            ${this.renderClearBtn(e)}
          </div>
        `;break;case"dateRange":t=`
          <div class="row-group">
            <span class="label">${e.label}</span>
            <div class="input-group">
              <input type="date" class="form-control" data-field="startDate" style="color:#9E9E9E;font-size:14px">
              <span class="input-group-text">-</span>
              <input type="date" class="form-control" data-field="endDate" style="color:#9E9E9E;font-size:14px">
            </div>
            ${this.renderClearBtn(e)}
          </div>
        `;break;case"select":t=`
          <div class="row-group">
            <span class="label">${e.label}</span>
            <select class="form-select search-input" data-field="${e.key}">
              <option value="">請選擇</option>
              <option value="A">A</option>
              <option value="B">B</option>
            </select>
            ${this.renderClearBtn(e)}
          </div>
        `;break;default:t=`
          <div class="row-group">
            <span class="label">${e.label}</span>
            <input class="form-control search-input" data-field="${e.key}" />
            ${this.renderClearBtn(e)}
          </div>
        `}return t},renderClearBtn(e){return e.clearable?`
    <button type="button" class="btn btn-clear d-flex align-items-center gap-1 flex-shrink-0">
      <img src="/img/refresh-icon.svg" alt="清空" style="width:16px; height:16px; margin-right:4px;">
      <span>清空</span>
    </button>
  `:""},renderSearchArea(e,t){const s=r.getSearchSchema({level:e,mode:t});if(!s.length){console.warn("schema empty",{level:e,mode:t});return}const a=$("#productSearchArea"),l=$('<div class="dynamic-fields"></div>'),o=$(".parent-btn"),n=$(".child-btn");o.addClass("d-none"),n.addClass("d-none"),e==="level1"?o.removeClass("d-none"):e==="level2"&&n.removeClass("d-none"),this.splitRowsByWidth(s).forEach(c=>{const m=$('<div class="search-row"></div>'),p=c.map(u=>u.width||"1fr").join(" ");m.css({display:"grid",gridTemplateColumns:p,gap:"8px"}),c.forEach(u=>{const b=$('<div class="field-col"></div>');b.html(this.renderField(u)),m.append(b)}),l.append(m)}),a.find(".dynamic-fields").remove(),a.find(".mt-3.d-flex.align-items-center.lh-lg").first().before(l),this.initCategorySelectors(l)},renderAddChildRow(e){const t=`tr.add-child-row[data-parent="${e}"]`;$(t).remove();const s=$(`tr[data-parent="${e}"]:not(.add-child-row)`);if(!s.length)return;const a=`
      <tr class="add-child-row" data-parent="${e}">
        <td colspan="5" class="text-start">
          <button class="btn btn-link p-0 text-start fw-bold ms-4 add-child">
            ＋ 新增第二層分類
          </button>
        </td>
      </tr>
    `;s.last().after(a)},renderEmptyRoot(){$("#categoryTable").empty(),this.updateActionVisibility()},toggleSortUI(e){const t=$("#categoryTable"),s=$(".table-footer"),a=$(".alert-box-info"),l=$("#categoryActions"),o=$(".sort-save");t.toggleClass("sort-mode",e),e?(this.enableSortable(),$("#categoryTable .add-child-row").hide()):(this.destroySortable(),$("#categoryTable .add-child-row").show()),s.toggleClass("d-none",e),s.toggleClass("d-flex",!e),a.toggleClass("d-none",!e),a.toggleClass("d-flex",e),l.addClass("d-none"),o.toggleClass("d-none",!e),o.toggleClass("d-flex",e),t.find("tr").each((n,i)=>{const c=$(i);c.find(".add-child, .add-product, .btn-delete").toggle(!e),c.find(".drag-handle").toggle(e)})},updateActionVisibility(){const e=$("#categoryTable tr").length>0;$("#categoryActions").toggleClass("d-none",!e)},updateRowUI(e,t=!1){const s=e.data("id"),a=$(`tr[data-parent="${s}"]:not(.add-child-row)`).length>0,l=!!e.data("has-product"),o=e.find("td").last();t||(a?o.find(".add-child, .add-product").hide():o.find(".add-child, .add-product").show()),e.find(".add-product").prop("disabled",a),e.find(".add-child").prop("disabled",l),this.updateToggleIcon(e)},updateApplyButtonState(){const e=parseInt($("#selectedCount").text())||0,t=r.state.hasSearched||e>0||r.state.hasImportedFile;$("#applyProductBtn").prop("disabled",!t)},updateProductSettingUI(){const e=$('input[name="placementType"]:checked').val(),t=$('input[name="productSettingType"]:checked').val();e==="manual"&&t==="batchImport"?($("#productSearchArea").addClass("d-none"),$(".batchImportText").removeClass("d-none"),this.setResultState("first")):($("#productSearchArea").removeClass("d-none"),$(".batchImportText").addClass("d-none"),this.setResultState("first")),this.updateApplyButtonState()},clearSearchFields(){const e=$(".product-search-box");e.find("input").val(""),e.find("select").each(function(){this.selectedIndex=0}).trigger("change"),e.find('input[type="checkbox"]').prop({checked:!1,indeterminate:!1}),e.find(".categorySelector").each((t,s)=>{const a=$(s).data("categoryState");a&&(a.selectedMap.clear(),a.activePath=[]),$(s).find(".category-item").removeClass("selected active"),$(s).find('input[type="checkbox"]').prop({checked:!1,indeterminate:!1}),$(s).find(".dropdown-menu").removeClass("show"),$(s).find(".resultInput").html('<span class="placeholder-text text-muted">請選擇分類</span>')}),$("#product-check-all").prop("checked",!1),$("#selectedCount").text(0),this.updateApplyButtonState()},showCustomAlert(e,t="success"){const s=$("#custom-alert"),a=$("#custom-alert-text"),l=$("#toastBackdrop"),o=$("#alert-icon");switch(a.text(e),o.removeClass("bg-danger bg-success bg-warning text-white text-dark"),t){case"success":o.addClass("bg-success text-white"),o.text("✓");break;case"warning":o.addClass("bg-warning text-dark"),o.text("!");break;case"error":default:o.addClass("bg-danger text-white"),o.text("×");break}s.removeClass("d-none").addClass("d-flex"),l.removeClass("d-none"),setTimeout(()=>{s.removeClass("d-flex").addClass("d-none"),l.addClass("d-none")},2e3)},showConfirm(e,t,s="確定",a=!1){const l=document.getElementById("confirmModal"),o=document.getElementById("confirmText"),n=document.getElementById("confirmOkBtn"),i=l.querySelector(".btn-cancel");o.innerText=e,n.innerText=s,a?i==null||i.classList.add("d-none"):i==null||i.classList.remove("d-none");const c=new bootstrap.Modal(l),m=()=>{t==null||t(),n.removeEventListener("click",m),c.hide()};n.addEventListener("click",m),c.show()},openLogModal(e){const t=new bootstrap.Modal(document.getElementById("logModal"));$("#logModal").data("id",e),r.state.logPage=1,this.loadLogs(e),t.show()},openBlockLogModal(e){const t=new bootstrap.Modal(document.getElementById("blockLogModal"));this.renderBlcokLogs(e),t.show()},initCategorySelectors(e){e.find(".categorySelector").each((t,s)=>{fetch("category-selector.html").then(a=>a.text()).then(a=>{document.body.contains(s)&&(s.innerHTML=a,initMenu(s))}).catch(a=>{console.error("載入分類選擇器錯誤:",a)})})},updateToggleState(e){const t=e.find(".toggle-show");e.data("has-name")?(t.prop("disabled",!1),t.removeClass("disabled-toggle")):(t.prop("checked",!1),t.addClass("disabled-toggle"))}},q={state:{allData:[],currentPage:1,pageSize:100,selectedIds:new Set,mode:"system"},init(e){this.state.pageSize=e||100},render(e,t="system"){$("#categoryPanel").addClass("d-none"),$("#productPanel").removeClass("d-none");const s=$("#productPanel");s.data("row-id",e);const a=`
      <!-- 返回 -->
      <div class="mb-3 ps-3">
        <a href="javascript:;" class="text-decoration-none d-flex align-items-center gap-2 back-to-category">
          <img src="/img/arrow-left.svg" class="section-header-arrow me-2"/>返回館分類列表
        </a>
      </div>

      <!-- 上方分類資訊卡 -->
      <div class="card border-0 shadow-sm p-3 mb-3">

        <!-- breadcrumb -->
        <div class="product-title mb-3 fw-bold">
          品牌旗艦館 &gt; adidas 愛迪達 &gt; 女性服飾
        </div>

        <!-- 分類資訊 -->
        <div class="d-flex justify-content-between align-items-center">

          <div>
            <div class="mb-3 d-flex">
              <span class="product-category me-2">館分類名稱</span>
              <span class="product-name">女性背心</span>
              <img class="img rename d-block" src="/img/edit-icon.svg">
            </div>

            <div class="ms-3 product-info">

              置品方式
              <span class="manual ms-2 me-4 ${t==="manual"?"d-none":""}">
                系統置品
              </span>
              <span class="system ms-2 me-4 ${t==="manual"?"":"d-none"}">
                人工置品/手動挑選
              </span>
              商品數<span class="ms-2">500</span>
            </div>
          </div>

          <!-- 右側開關 -->
          <div class="form-check form-switch d-flex me-3">
            <div class="form-check form-switch">
              <input class="form-check-input toggle-show" type="checkbox" checked>
            </div>
            <label class="form-check-label ms-2">前台顯示分類</label>
          </div>

        </div>
      </div>

      <!-- 商品列表 -->
      <div class="card border-0 shadow-sm p-3">

        <!-- header -->
        <div class="d-flex">
          <div class="product-title fw-bold mb-3">商品列表</div>
          <div class="alert alert-box py-2 px-2 ms-4 system ${t==="manual"?"d-none":""}">
            <img class="img" src="/img/info-icon.svg" style="margin-top: -2px" />
            每天08:00/10:00/12:00/14:00/16:00/18:00/20:00/22:00/00:30 系統會更新置入的商品
          </div>
          <button class="btn btn-primary btn-primary-custom btn-sm panel-edit-product ms-auto">編輯商品</button>
        </div>

        <!-- table -->
        <div class="table-responsive border rounded product-table-wrapper">
          <table class="table align-middle mb-0 product-table">
            <thead>
              <tr>
                <th width="50">
                  <input type="checkbox" class="product-check-all mb-2 manual ${t==="manual"?"":"d-none"}">
                </th>
                <th width="140">
                <div class="d-flex align-items-center gap-1">

                  <span class="manual ${t==="manual"?"":"d-none"}">
                    已選 <span id="selectedNum">0</span> 個
                  </span>

                  <span class="system ${t==="manual"?"d-none":""}">
                    商品編號
                  </span>

                  <button class="btn btn-primary btn-primary-custom btn-sm btn-sm-delete ms-2 manual
                    ${t==="manual"?"":"d-none"}">
                    刪除
                  </button>
                </div>
                </th>
                <th>商品名稱</th>
                <th width="120">銷售狀況</th>
                <th width="120">進價</th>
                <th width="120">售價</th>
                <th width="180">新增資訊</th>
              </tr>
            </thead>
            <tbody class="product-table-body"></tbody>
          </table>
        </div>

        <!-- footer -->
        <div class="d-flex justify-content-between align-items-center mt-3">
          <button class="btn btn-outline-secondary btn-sm btn-select-all manual ${t==="manual"?"":"d-none"}">全選</button>
          <div class="d-flex align-items-center gap-3 ms-auto me-4">
            <div class="text-nowrap" style="color: #343a40; font-size: 14px">共 <span class="totalNum">0</span> 筆</div>

            <ul class="pagination pagination-sm mb-0"></ul>

            <select class="form-select form-select-sm text-center pageSize" style="-webkit-appearance: none; -moz-appearance: none; appearance: none; background: transparent; padding-right: 0.5rem; background-color: #f3f4f6">
              <option value="10">10筆/頁</option>
              <option value="20">20筆/頁</option>
              <option value="50">50筆/頁</option>
              <option value="100" selected="">100筆/頁</option>
            </select>
          </div>
        </div>

      </div>
    `;s.html(a).removeClass("d-none"),$("#applyProductBtn").addClass("d-none"),$("#importProductBtn").removeClass("d-none");const l=Number($("#productPanel .pageSize").val())||100;this.state.allData=r.mockSearchProducts(),this.state.pageSize=l,this.state.currentPage=1,this.state.selectedIds.clear(),this.state.mode=t,this.renderPage()},bindEvents(){$(document).on("click",".panel-edit-product",()=>{const e=$("#productPanel").data("row-id");if(!e)return;$("#productModal").data({targetRowId:e,mode:"edit"}),$("#applyProductBtn").addClass("d-none"),$("#importProductBtn").removeClass("d-none"),new bootstrap.Modal("#productModal").show()}),$(document).off("change","#productPanel .product-check").on("change","#productPanel .product-check",()=>{this.updateSelection()}),$(document).on("change","#productPanel .product-check-all",e=>{const t=$(e.currentTarget).is(":checked");$("#productPanel .product-check").each((s,a)=>{const l=$(a).data("id");$(a).prop("checked",t),t?this.state.selectedIds.add(l):this.state.selectedIds.delete(l)}),this.updateSelection()}),$(document).on("click","#productPanel .btn-select-all",()=>{const e=$("#productPanel .product-check"),t=e.length===e.filter(":checked").length;e.prop("checked",!t),this.updateSelection()}),$(document).on("click","#productPanel .page-btn",e=>{e.preventDefault();const t=$(e.currentTarget);if(t.closest(".page-item").hasClass("disabled"))return;const s=Number(t.data("page")),a=Math.ceil(this.state.allData.length/this.state.pageSize);s<1||s>a||(this.state.currentPage=s,this.renderPage())}),$(document).on("change","#productPanel .pageSize",e=>{const t=Number($(e.currentTarget).val());this.state.pageSize=t,this.state.currentPage=1,this.renderPage()}),$(document).on("click","#productPanel .btn-sm-delete",()=>{if(Array.from(this.state.selectedIds).length===0){d.showConfirm("請先選擇要刪除的商品");return}d.showConfirm("確定要刪除商品嗎?",()=>{this.deleteSelected()})}),$(document).on("click",".back-to-category",()=>{q.reset()})},renderTable(e){const t=this.state.mode,s=$("#productPanel .product-table-body");if(!e.length){s.html('<tr><td colspan="6" class="text-center">尚無商品</td></tr>');return}const a=e.map(l=>`
          <tr>
            <td class="text-center">
              <input type="checkbox" class="product-check manual ${t==="manual"?"":"d-none"}"
              data-id="${l.id}">
            </td>
            <td>${l.id}</td>
            <td>${l.name}</td>
            <td>${l.status}</td>
            <td class="text-end">${l.cost}</td>
            <td class="text-end">${l.price}</td>
            <td class="text-start">${l.date}${l.user}</td>
          </tr>
        `).join("");s.html(a)},renderPage(){const e=(this.state.currentPage-1)*this.state.pageSize,t=this.state.allData.slice(e,e+this.state.pageSize);this.renderTable(t),this.renderPagination(),this.syncUI()},syncUI(){this.syncCheckboxState(),$("#selectedNum").text(this.state.selectedIds.size),$("#productPanel .totalNum").text(this.state.allData.length)},renderPagination(){const e=Math.ceil(this.state.allData.length/this.state.pageSize),t=this.state.currentPage,s=$("#productPanel .pagination");if(s.empty(),e<=1)return;const a=(o,n,i=!1,c=!1)=>`
        <li class="page-item ${i?"disabled":""} ${c?"active":""}">
          <a class="page-link page-btn" data-page="${n}">
            ${o}
          </a>
        </li>
      `;s.append(a('<img class="img prev-icon" src="/img/next-icon.svg" style="transform: rotate(180deg);" />',t-1,t===1));let l=[];if(e<=5)for(let o=1;o<=e;o++)l.push(o);else t<=3?l=[1,2,3,"...",e-1,e]:t>=e-2?l=[1,2,"...",e-2,e-1,e]:l=[1,"...",t-1,t,t+1,"...",e];l.forEach(o=>{o==="..."?s.append(`
          <li class="page-item disabled">
            <span class="page-link">...</span>
          </li>
        `):s.append(a(o,o,!1,o===t))}),s.append(a('<img class="img" src="/img/next-icon.svg" />',t+1,t===e))},updateSelection(){const e=$("#productPanel .product-check:visible");e.each((a,l)=>{const o=$(l).data("id");$(l).is(":checked")?this.state.selectedIds.add(o):this.state.selectedIds.delete(o)}),$("#selectedNum").text(this.state.selectedIds.size);const t=e.length,s=e.filter(":checked").length;$("#productPanel .product-check-all").prop("checked",t>0&&t===s)},syncCheckboxState(){$("#productPanel .product-check:visible").each((e,t)=>{const s=$(t).data("id");$(t).prop("checked",this.state.selectedIds.has(s))}),$("#selectedNum").text(this.state.selectedIds.size)},deleteSelected(){this.state.allData=this.state.allData.filter(e=>!this.state.selectedIds.has(e.id)),this.state.selectedIds.clear(),$("#productPanel .product-check").prop("checked",!1),$("#productPanel .product-check-all").prop("checked",!1),this.state.currentPage=Math.min(this.state.currentPage,Math.max(1,Math.ceil(this.state.allData.length/this.state.pageSize))),this.renderPage()},reset(){this.state.selectedIds.clear(),this.state.currentPage=1,$("#productPanel").addClass("d-none").empty(),$("#categoryPanel").removeClass("d-none")}},we={init(){const e=parseInt($(".pageSize").val())||100;r.init(e),this.bindEvents()},bindEvents(){const e=$(document);e.on("click",".setting-tabs .tab",function(){const t=$(this);t.siblings().removeClass("active"),t.addClass("active"),t.index()===0?($("#categoryTableWrapper").removeClass("d-none"),$("#blockSettingsWrapper").addClass("d-none"),$(".blockSettingsWrapper-text").addClass("d-none")):($("#categoryTableWrapper").addClass("d-none"),$("#blockSettingsWrapper").removeClass("d-none"),$(".blockSettingsWrapper-text").removeClass("d-none"),q.reset())}),e.on("click",".toggle",t=>d.toggleRow($(t.currentTarget))),e.on("click",".rename",t=>d.startRename($(t.currentTarget))),e.on("click",".rename-confirm",t=>d.confirmRename($(t.currentTarget))),e.on("click",".rename-cancel",t=>d.cancelRename($(t.currentTarget))),e.on("input",".rename-input",t=>d.updateCount($(t.currentTarget))),e.on("keypress",".rename-input",t=>{t.which===13&&$(t.currentTarget).siblings(".rename-confirm").click()}),e.on("click",".add-child",t=>d.addChild($(t.currentTarget))),e.on("click",".add-product",t=>d.addProduct($(t.currentTarget))),e.on("click",".btn-delete",t=>d.deleteRow($(t.currentTarget))),e.on("click",".toggle-show.disabled-toggle",t=>{t.preventDefault(),t.stopPropagation(),d.showCustomAlert("請先新增商品或新增第二層分類","danger")}),e.on("click",".btn-clear-all",()=>{d.clearSearchFields()}),e.on("click",".btn-sort-save",()=>{d.saveSort()}),e.on("click",".btn-cancel",()=>{d.cancelSort()}),e.on("change",".toggle-show",t=>{r.saveSwitch($(t.currentTarget))}),e.on("click","#toggleSortMode",()=>{const t=r.toggleSortMode();d.toggleSortUI(t)}),e.on("click",".search-btn",async()=>{var a;const t=d.getPlacementMode();if(!d.checkHasSearchInput()){d.setResultView("noInput");return}const s={entpCode:"008648",placementCategoryCode:"2161100000",listPage:1,pageLimit:10};try{const l=await r.searchProducts(s);if(!(l!=null&&l.success)||!((a=l==null?void 0:l.result)!=null&&a.length)){d.setResultView("empty");return}const o=l.result;r.state.currentPage=l.listPage||1,r.state.pageSize=l.pageLimit||r.state.pageSize,r.state.totalProducts=l.listSize||0,r.state.products=o,t==="manual"&&(d.setResultView("data"),d.renderProducts(o),d.renderPagination()),t==="system"&&(r.state.hasSearched=!0,d.setResultView("data")),d.updateApplyButtonState()}catch(l){console.error("search API error:",l),d.showCustomAlert("查詢失敗","error")}}),e.on("click",".clear-search",()=>d.clearSearch()),e.on("click",".page-btn",t=>{const s=$(t.currentTarget).data("page");r.setPage(s),d.renderProducts()}),e.on("click",".btn-import-file",()=>{$("#xlsFileInput").click()}),e.on("change","#xlsFileInput",t=>{const s=t.target.files[0];if(!s)return;if(s.name.split(".").pop().toLowerCase()!=="xls"){d.showCustomAlert("僅支援 .xls 檔案","error"),$("#xlsFileInput").val("");return}r.state.hasImportedFile=!0,d.setResultState("batch"),d.updateApplyButtonState()}),e.on("click","#downloadExample",()=>{const t=[["商品編號","商品名稱","銷售狀況","匯入結果"],["11920000","UV漁夫帽","進行中","非綁定品貨的商品"],["11921235","LV手提包","進行中","非該廠商的商品"],["11922222","","","查無品號"]],s=XLSX.utils.aoa_to_sheet(t),a=XLSX.utils.book_new();XLSX.utils.book_append_sheet(a,s,"範例匯入檔"),XLSX.writeFile(a,"範例匯入檔.xls")}),e.on("change",".pageSize",t=>{const s=parseInt($(t.currentTarget).val());r.state.pageSize=s,r.setPage(1),d.searchProducts(1)}),e.on("change",".log-page-size-select",async()=>{r.state.logPage=1,await d.loadLogs($("#logModal").data("id"))}),e.on("change","#modal-product-check-all",t=>{const s=$(t.currentTarget).is(":checked");$("#productModalTable .modal-product-check").prop("checked",s),$("#selectedCount").text(s?$("#productModalTable .modal-product-check").length:0),d.updateApplyButtonState()}),e.on("change",".modal-product-check",()=>{const t=$("#productModalTable .modal-product-check").length,s=$("#productModalTable .modal-product-check:checked").length;$("#selectedCount").text(s),$("#product-check-all").prop("checked",t===s),d.updateApplyButtonState()}),e.on("click",".btn-select-all-toggle",()=>{const t=$("#modal-product-check-all"),s=t.is(":checked");t.prop("checked",!s).trigger("change")}),e.on("click","#applyProductBtn",()=>{const t=$("#productModal"),s=t.data("targetRowId"),a=$(`tr[data-id="${s}"]`);if(!a.length)return;a.data("has-product",!0);const l=a.find("td").last();l.find(".add-child").hide(),l.find(".add-product").hide(),l.find(".edit-product").length?l.find(".edit-product").show():l.prepend(`
        <button class="btn btn-outline-primary btn-outline-primary-custom btn-sm edit-product">
          編輯商品
        </button>
      `),d.updateRowUI(a,!0);const o=document.getElementById("productModal");bootstrap.Modal.getOrCreateInstance(o).hide(),t.removeData("targetRowId mode level")}),$(document).on("click","#importProductBtn",function(){const t=document.getElementById("productModal"),s=bootstrap.Modal.getInstance(t);s==null||s.hide()}),e.on("click","tr .edit-product",function(){var a;const t=$(this).closest("tr").data("id");if(!t)return;const s=((a=d.getPlacementMode)==null?void 0:a.call(d))||"system";q.render(t,s)}),e.on("change",'input[name="placementType"]',()=>{const t=$("#productModal").data("level")||"level1",s=d.getPlacementMode();d.renderSearchArea(t,s),d.setResultView("first"),s==="manual"?$("#productSetting").removeClass("d-none"):$("#productSetting").addClass("d-none"),d.updateProductSettingUI()}),e.on("change",'input[name="productSettingType"]',function(){d.updateProductSettingUI(),$("#selectedCount").text(0),d.updateApplyButtonState()}),e.on("click","#chooseLogoBtn",()=>$("#logoFileInput").click()),e.on("change","#logoFileInput",t=>d.handleLogoFile(t)),e.on("click","#uploadLogoBtn",()=>d.uploadLogo()),e.on("click",".add-root-category",()=>d.addRootCategory("商品型")),e.on("click",".add-root-promo",()=>d.addRootCategory("活動型")),e.on("click",".btn-log",t=>{d.openLogModal(t)}),e.on("click",".btn-block-log",t=>{const a=$(t.currentTarget).closest("tr").data("id"),l=r.getBlockLogs(a);d.openBlockLogModal(l)}),e.on("click","#logModal .log-page-btn",async t=>{const s=$(t.currentTarget),a=Number(s.data("page"));if(!a||a<1)return;const l=$("#logModal").data("id");if(r.state.logPage!==a&&!r.state.loadingLog){r.state.loadingLog=!0;try{r.state.logPage=a,await d.loadLogs(l)}finally{r.state.loadingLog=!1}}})}};$(function(){we.init(),q.init(),q.bindEvents()});let T=null;const xe=e=>{e=e.replace("#",""),e.length===3&&(e=e.split("").map(s=>s+s).join(""));const t=parseInt(e,16);return[t>>16&255,t>>8&255,t&255]},Se=(e,t,s)=>"#"+[e,t,s].map(a=>a.toString(16).padStart(2,"0")).join(""),Ce=(e,t,s)=>{e/=255,t/=255,s/=255;const a=Math.max(e,t,s),l=Math.min(e,t,s),o=a-l;let n=0,i=a===0?0:o/a,c=a;return o!==0&&(a===e?n=(t-s)/o%6:a===t?n=(s-e)/o+2:n=(e-t)/o+4,n=Math.round(n*60),n<0&&(n+=360)),[n,i,c]},Ie=(e,t,s)=>{let a=s*t,l=a*(1-Math.abs(e/60%2-1)),o=s-a,n=0,i=0,c=0;return e<60?(n=a,i=l,c=0):e<120?(n=l,i=a,c=0):e<180?(n=0,i=a,c=l):e<240?(n=0,i=l,c=a):e<300?(n=l,i=0,c=a):(n=a,i=0,c=l),[Math.round((n+o)*255),Math.round((i+o)*255),Math.round((c+o)*255)]},Le=()=>`
  <div class="figma-picker">
    <div class="picker-header">
      <span>選擇顏色</span>
      <span class="close-btn">✕</span>
    </div>
    <div class="color-area">
      <div class="white-gradient"></div>
      <div class="black-gradient"></div>
      <div class="picker-dot"></div>
    </div>
    <div class="controls-row">
      <div class="eyedropper">
        <img src="/img/eyedropper.svg" />
      </div>
      <div class="sliders">
        <div class="slider hue"><div class="slider-thumb"></div></div>
        <div class="slider opacity"><div class="slider-thumb"></div></div>
      </div>
    </div>
    <div class="inputs">
      <span>HEX</span>
      <div class="input-group color-input">
        <input class="hex-input" readonly />
        <input class="alpha-input" readonly />
      </div>
    </div>
  </div>
`,Pe=e=>{if(!e)return;e.querySelectorAll(".color-field").forEach(s=>{const a=s.querySelector(".color-preview"),l=s.querySelector("input");Ee(a,l)})},Be=(e,t,s)=>{if(!e)return;const a={h:0,s:1,v:1,a:1},l=e.querySelector(".color-area"),o=e.querySelector(".picker-dot"),n=e.querySelector(".hue"),i=n.querySelector(".slider-thumb"),c=e.querySelector(".opacity"),m=c.querySelector(".slider-thumb"),p=e.querySelector(".hex-input"),u=e.querySelector(".alpha-input");if(!l||!o||!n||!i||!c||!m||!p||!u){console.warn("color picker init failed: missing required elements");return}const b=12,g=b/2;if(s.value){const[y,v,k]=xe(s.value),[S,L,K]=Ce(y,v,k);a.h=S,a.s=L,a.v=K}const x=()=>{const[y,v,k]=Ie(a.h,a.s,a.v),S=Se(y,v,k);p.value=S,u.value=Math.round(a.a*100)+"%",t.style.background=S,s.value=S,l.style.background=`hsl(${a.h},100%,50%)`;const L=(y*299+v*587+k*114)/1e3;o.style.borderColor=L>128?"#000":"#fff",i.style.background=`hsl(${a.h},100%,50%)`,i.style.left=g+a.h/360*(n.clientWidth-b)+"px",m.style.left=g+a.a*(c.clientWidth-b)+"px",c.style.background=`linear-gradient(to right, rgba(${y},${v},${k},0), rgba(${y},${v},${k},1)),
      repeating-conic-gradient(#ccc 0% 25%, #fff 0% 50%) 50% / 10px 10px`},I=(y,v)=>{y.onmousedown=k=>{const S=y.getBoundingClientRect(),L=K=>v(K,S);L(k),window.onmousemove=L,window.onmouseup=()=>window.onmousemove=null}};I(l,(y,v)=>{let k=Math.max(0,Math.min(y.clientX-v.left,v.width)),S=Math.max(0,Math.min(y.clientY-v.top,v.height));a.s=k/v.width,a.v=1-S/v.height,o.style.left=k+"px",o.style.top=S+"px",x()}),I(n,(y,v)=>{let k=Math.max(g,Math.min(y.clientX-v.left,v.width-g));a.h=(k-g)/(v.width-b)*360,x()}),I(c,(y,v)=>{let k=Math.max(g,Math.min(y.clientX-v.left,v.width-g));a.a=(k-g)/(v.width-b),x()}),x()},Ee=(e,t)=>{if(!e||!t)return;e.style.background=t.value;let s=null;e.addEventListener("click",()=>{if(s)return;T&&T.remove();const a=document.createElement("div");a.innerHTML=Le(),s=a.firstElementChild,T=s,document.body.appendChild(s);const l=e.getBoundingClientRect();s.style.position="absolute",s.style.top=l.bottom+8+"px",s.style.left=l.left+"px",s.style.zIndex=9999,Be(s,e,t),s.querySelector(".close-btn").onclick=()=>{s.remove(),s=null,T=null};const o=n=>{s&&!s.contains(n.target)&&n.target!==e&&(s.remove(),s=null,T=null,document.removeEventListener("click",o))};setTimeout(()=>document.addEventListener("click",o))})},Q={1:e=>`
    <div class="editor-section">
      <div class="section-title">
        區塊內容設定
      </div>
      ${te()}
      ${ee({name:`displayType-${e.instanceId}`,blockId:e.instanceId,hidden:e.hidden})}

      <div class="row g-3 mb-3 ms-2">
        <div class="col-6">
          ${h({blockId:e.instanceId,field:"banner",sizeText:"尺寸：586*340 px｜限100KB"})}
        </div>
        <div class="col-6">
          ${f({blockId:e.instanceId,field:"link"})}
        </div>
      </div>
    </div>
  `,2:()=>`
    <div class="editor-section pb-5">
      <div class="section-title">區塊內容設定</div>

      ${se({label:"設定商品",buttonText:"新增商品",hint:"最多設定 <span>100</span> 個商品，若不足 6 個進行且展售的商品，前台將隱藏該區塊"})}

      ${ae({rowControlsId:"2-row-1"})}

      ${le()}
    </div>
  `,3:e=>`
  <div class="editor-section pb-5">
    <div class="section-title">區塊內容設定</div>
    ${A()}
    <hr class="hr-dash mx-auto">

    <div class="d-flex align-items-center gap-2 align-self-start ms-3"">
      ${h({blockId:e.instanceId,field:"banner",sizeText:"尺寸：960*141 px｜限50KB"})}
      <div class="ms-auto" style="margin-top: -2.8rem">
        ${f({blockId:e.instanceId})}
      </div>
    </div>

    <hr class="hr-dash mx-auto mt-0">
    ${se({label:"設定商品",buttonText:"新增商品",hint:"最多設定 <span>100</span> 個商品，若不足 6 個進行且展售的商品，前台將隱藏該區塊"})}
      
    ${ae({rowControlsId:"3-row-1"})}

    ${le()}
  </div>
  `,4:e=>{var t,s;return`
    <div class="editor-section">
      <div class="section-title">區塊內容設定</div>
      <div class="d-flex gap-3 mb-3">

        <!-- 左區 -->
        <div class="flex-fill flex-content w-50">
          <div class="mb-3 fw-bold">左圖</div>
          <div class="ps-3">
            ${h({blockId:e.instanceId,field:"left",sizeText:"尺寸：586*340 px｜限100KB",fileName:(t=e==null?void 0:e.images)==null?void 0:t.leftFileName})}

            ${f({blockId:e.instanceId,field:"leftLink"})}
          </div>
        </div>

        <!-- 右區 -->
        <div class="flex-fill flex-content w-50">
          <div class="mb-3 fw-bold">右圖</div>
          <div class="ps-3">
            ${h({blockId:e.instanceId,field:"right",sizeText:"尺寸：586*340 px｜限100KB",fileName:(s=e==null?void 0:e.images)==null?void 0:s.rightFileName})}

            ${f({blockId:e.instanceId,field:"rightLink"})}
          </div>
        </div>
      </div>
    </div>
  `},5:e=>`
  <div class="editor-section">
    <div class="section-title">區塊內容設定</div>
    <div class="form-row ">
        <div class="form-content align-items-center gap-2 d-flex ms-4 ps-1 my-3">
          <label class="label">文字顏色</label>
          <div class="color-field">
            <button class="color-preview ms-2 position-absolute" style="background:#FFDADA"></button>
            <input id="bg-input" class="form-control edit-form color-form" value="#FFDADA">
          </div>
        </div>
      </div>
    <div class="row g-4">
      ${Array.from({length:4},(t,s)=>{var a,l;return`
        <div class="col-6" data-clone-target data-layer="items">
          <div class="board-card p-3 position-relative flex-fill flex-content">
            <div class="d-flex mb-3">
              <div class="fw-bold layer-title">圖</div>
              <div class="ms-auto">
                ${pe({blockId:`${e.instanceId}-${s}`})}
              </div>
            </div>
            <div class="ms-3">
              ${h({blockId:`${e.instanceId}-${s}`,field:"items",sizeText:"尺寸：280*280 px｜限150KB",fileName:((l=(a=e==null?void 0:e.images)==null?void 0:a.itemsFileName)==null?void 0:l[s])??"未選擇檔案"})}
              ${f({blockId:`${e.instanceId}-${s}`})}
            </div>
          </div>
        </div>
      `}).join("")}
    </div>

    ${w({type:"block-5",text:"新增看板",maxCount:40,minCount:4,className:"mt-3 ms-auto d-flex"})}
  </div>
  `,6:e=>{const t=[{key:"top",label:"上"},{key:"bottom",label:"下"}];return`
      <div class="editor-section">
        <div class="section-title">區塊內容設定</div>
        ${A({className:"mb-3"})}
        <div class="row g-4 mb-4">
          ${t.map(s=>`
                ${Array.from({length:4},(a,l)=>{var o,n;return`
                  <div class="col-6" data-clone-target>
                    <div class="board-card p-3 position-relative flex-fill flex-content">

                      <div class="fw-bold mb-3">${s.label}圖${l+1}</div>

                      <div class="ms-3">
                        ${h({blockId:`${e.instanceId}-${s.key}-${l}`,field:"image",sizeText:"尺寸：250*300 px｜限30KB",fileName:((n=(o=e==null?void 0:e.images)==null?void 0:o.itemsFileName)==null?void 0:n[l])??"未選擇檔案"})}

                        ${f({blockId:`${e.instanceId}-${s.key}-${l}`})}
                      </div>

                    </div>
                  </div>
                `}).join("")}
              `).join("")}
        </div>
      </div>
    `},7:e=>`
  <div class="editor-section editor-section-7 pb-4">
    <div class="section-title">區塊內容設定</div>

    <div class="tab-block mb-3 flex-fill flex-content" data-clone-target>
      <div class="tab-header d-flex justify-content-between align-items-center">
        <div class="d-flex align-items-center gap-2">
          <label class="fw-bold tab-title">頁籤1</label>
          <img src="/img/arrow-toggle-down.svg"
            class="tab-arrow"
            data-bs-toggle="collapse"
            data-bs-target="#board-${e.instanceId}">
        </div>
        <div
          class="btn btn-delete-block ms-auto"
          data-action="delete-block"
          data-block-id="${e.instanceId}">
        </div>
      </div>

      <div id="board-${e.instanceId}" class="collapse show">
        <div class="tab-content">
          <div class="row g-3 py-3">
            ${Array.from({length:8}).map((t,s)=>{var a,l;return`
                  <div class="col-6">
                    <div class="flex-fill flex-content">
                      <div class="fw-bold mb-3">圖${s+1}</div>
                      <div class="ms-3">
                        ${h({blockId:`${e.instanceId}-${s}`,field:`image${s+1}`,sizeText:"尺寸：195*195 px｜限150KB",fileName:(l=(a=e==null?void 0:e.images)==null?void 0:a.itemsFileName)==null?void 0:l[s]})}
                
                        ${f({blockId:`${e.instanceId}-${s}`,field:`link${s+1}`})}
                          
                      </div>            
                    </div>
                  </div>
                `}).join("")}
          </div>
        </div>
      </div>
    </div>
    ${w({type:"block-7",text:"新增頁籤",className:"d-flex justify-content-end mt-3 ms-auto",maxCount:4,minCount:1})}
  </div>
  `,8:e=>`
  <div class="editor-section pb-5">
    <div class="section-title">區塊內容設定</div>
    <div class="row g-4 pb-3 drag-content">
      ${Array.from({length:8},(t,s)=>{var a,l;return`
        <div class="col-6" data-clone-target>
          <div class="board-card p-3 position-relative flex-fill flex-content">
            <div class="position-absolute end-0 d-flex align-items-center gap-1 me-1 pe-2">
              ${P({blockId:`${e.instanceId}-${s}`})}
            </div>    
            <div class="fw-bold mb-3">看板設定</div>

            ${h({blockId:`${e.instanceId}-${s}`,field:"image",sizeText:"尺寸：210*210 px｜限20KB",fileName:(l=(a=e.images)==null?void 0:a.itemsFileName)==null?void 0:l[s-1]})}

            ${f({blockId:`${e.instanceId}-${s}`})}
          </div>
        </div>
      `}).join("")}
    </div>

    ${w({type:"block-8",text:"新增看板",maxCount:24,minCount:8,className:"float-end"})}
  </div>
  `,9:e=>`
    <div class="editor-section">
      <div class="section-title">區塊內容設定</div>
      <div class="form-row mb-3">
        <div class="form-content align-items-center gap-2 d-flex ms-4 ps-1">
          <label class="label required text-nowrap">看板文字色碼</label>
          <div class="color-field">
            <button class="color-preview ms-2 position-absolute" style="background:#FFDADA"></button>
            <input id="bg-input" class="form-control edit-form color-form" value="#FFDADA">
          </div>
        </div>
      </div>

      <hr class="hr-dash">

      <div class="d-flex gap-3 mb-3">
        <div class="row g-4">
          ${Array.from({length:5}).map((t,s)=>{var a,l;return`
            <div class="col-6" data-clone-target>
              <div class="flex-fill flex-content"">
                <div class="mb-4">
                  ${re({title:"看板設定",blockId:`${e.instanceId}-${s}`})}
                </div>
                ${h({blockId:`${e.instanceId}-${s}`,field:"image",sizeText:"尺寸：108*108 px｜限50KB",fileName:((l=(a=e==null?void 0:e.images)==null?void 0:a.itemsFileName)==null?void 0:l[s])??"未選擇檔案"})}
                ${f({blockId:`${e.instanceId}-${s}`})}
                <div class="form-row mt-3 ms-2">
                  <div class="form-content d-flex align-items-center gap-2">
                    <label class="label">標題文字</label>
                    <input class="form-control edit-form w-100" placeholder="請輸入標題文字">
                  </div>
                </div>
              </div>
            </div>
          `}).join("")}
        </div>
      </div>
      <div class="d-flex justify-content-end mt-4">
        ${w({type:"block-9",text:"新增看板",maxCount:10,minCount:5})}
      </div>
    </div>
  `,10:e=>`
    <div class="editor-section">
      <div class="section-title">區塊內容設定</div>
      <div class="form-row mb-3">
        <div class="d-flex gap-3 ms-3" style="line-height: 2.2;">
          <label class="label">歷標圖檔</label>
          <button class="btn btn-outline-primary btn-outline-primary-custom btn-sm btn-upload">
            選擇檔案
          </button>
        </div>
      </div>
      <div class="form-row ms-3" style="margin-top: -15px;">
        <span class="hint ms-5 ps-4">尺寸：175*80 px｜限100KB</span>
      </div>
      <hr class="hr-dash">
      <div class="form-board drag-content">

      ${Array.from({length:2},(t,s)=>{var a,l;return`
          <div class="form-content pt-3 px-3 mb-3 position-relative" data-clone-target>
            <div class="d-flex justify-content-between align-items-center mb-4">
              <div class="d-flex align-items-center gap-2">
                <span>看板設定</span>

                <label class="switch m-auto">
                  <input type="checkbox" ${s===1?"checked":""}>
                  <span></span>
                </label>

                <span class="switch-title">
                  ${s===1?"顯示歷標":"隱藏歷標"}
                </span>
              </div>

              ${P({blockId:`${e.instanceId}-${s}`})}
            </div>

            <div class="d-flex align-items-center gap-3 flex-wrap">
              ${h({blockId:`${e.instanceId}-${s}`,field:"banner",sizeText:"尺寸：852*354 px｜限125KB",fileName:(l=(a=e.images)==null?void 0:a.itemsFileName)==null?void 0:l[s-1]})}

              ${f({blockId:`${e.instanceId}-${s}`,field:"link",className:"ms-auto"})}
            </div>

          </div>
        `}).join("")}
      </div>

      ${w({type:"block-10",text:"新增看板",className:"mt-3 ms-auto d-flex"})}
    </div>
  `,11:e=>`
    <div class="editor-section">
      <div class="section-title">區塊內容設定</div>
      <div class="row g-4">
        ${Array.from({length:2}).map(t=>Te({blockId:`${e.instanceId}-${t}`})).join("")}
      </div>

      ${w({type:"block-11",text:"新增看板",maxCount:20,minCount:2,className:"d-flex justify-content-end mt-4 ms-auto"})}
    </div>
  `,12:e=>`
    <div class="editor-section">
      <div class="section-title">區塊內容設定</div>

      <div class="board-card p-3 position-relative flex-fill flex-content mb-3" data-clone-target>
        <div class="d-flex align-items-center gap-2">
          <label class="fw-bold tab-title">頁籤1</label>
          <img src="/img/arrow-toggle-down.svg"
            class="tab-arrow"
            data-bs-toggle="collapse"
            data-bs-target="#board-${e.instanceId}">
            
          <div class="btn btn-delete-block ms-auto"
          data-action="delete-block"
            data-block-id="${e.instanceId}">
          </div>
        </div>

        <div id="board-${e.instanceId}" class="collapse show">
          <hr>
          ${Array.from({length:6}).map((t,s)=>Ae({blockId:`${e.instanceId}-${s}`})).join("")}
        </div>
      </div>
      <div class="d-flex justify-content-end mt-4">
        ${w({type:"block-12",text:"新增頁籤",maxCount:5,minCount:1})}
      </div>
    </div>
  `,13:e=>`
  <div class="editor-section">
    <div class="section-title">區塊內容設定</div>
    <div class="row g-4 mb-4">
      ${Array.from({length:5},(t,s)=>{var a;return`
        <div class="col-6" data-clone-target>
          <div class="board-card p-3 position-relative flex-fill flex-content">
            <div
              class="btn btn-delete-block position-absolute end-0 me-2"
              data-action="delete-block"
              data-block-id="13-${s}">
            </div>
            <div class="fw-bold mb-3">看板設定</div>

            <div class="form-row mb-3 ps-3">
              ${h({blockId:`${e.instanceId}-${s}`,field:"image",sizeText:"尺寸：280*280 px｜限150KB",fileName:((a=e.images)==null?void 0:a[s])||"未選擇檔案"})}
            </div>

            <div class="form-row mb-3 ps-3">
              ${f({blockId:`${e.instanceId}-${s}`})}
            </div>
          </div>
        </div>
      `}).join("")}

    </div>

    <div class="d-flex justify-content-end mt-4">
      ${w({type:"block-13",text:"新增看板",maxCount:12,minCount:5})}
    </div>
  </div>
  `,14:e=>`
    <div class="editor-section pb-4">
      <div class="section-title">區塊內容設定</div>
      <div class="row g-4 mb-4 drag-content">
      ${Array.from({length:6},(t,s)=>{var a;return`
          <div class="col-6" data-clone-target>
            <div class="board-card p-3 position-relative flex-fill flex-content">
              <div class="position-absolute end-0 d-flex align-items-center gap-1 me-1 pe-2">
                ${P({blockId:`${e.instanceId}-${s}`})}
              </div>
              <div class="fw-bold mb-3">看板設定</div>
              <div class="form-row mb-3">
                ${h({blockId:`${e.instanceId}-${s}`,field:"image",sizeText:"尺寸：284*475px｜限80KB",fileName:((a=e.images)==null?void 0:a[s])||"未選擇檔案"})}
              </div>
              <div class="form-row mb-0">
                ${f({blockId:`${e.instanceId}-${s}`})}
              </div>
            </div>
          </div>
        `}).join("")}
      </div>

      <div class="mt-3 text-end">
        ${w({type:"block-14",text:"新增看板",maxCount:18,minCount:6})}
      </div>
    </div>
  `,15:e=>`
    <div class="editor-section">
      <div class="section-title">區塊內容設定</div>
      ${A({className:"mb-3"})}
      <hr class="hr-dash">
      <div class="d-flex gap-3 mb-3 ps-3">
        <div class="flex-fill">
          ${h({blockId:e.instanceId,field:"image",sizeText:"尺寸：960*141 px｜限50KB"})}
        </div>

        <div class="flex-fill">
          <div class="form-row mb-3">
            ${f({blockId:e.instanceId})}
          </div>
        </div>
      </div>

      <div class="form-board mt-3">
        <div class="form-content p-3 mb-3" data-clone-target>
          <div class="d-flex align-items-center gap-2">
            <label class="fw-bold tab-title">頁籤1</label>
            <img src="/img/arrow-toggle-down.svg"
              class="tab-arrow"
              data-bs-toggle="collapse"
              data-bs-target="#board-${e.instanceId}">

            <div class="position-absolute end-0 me-4 pe-1">
              <div
                class="btn btn-delete-block"
                data-action="delete-block"
                data-block-id="${e.instanceId}">
              </div>
            </div>
          </div>

          <div id="board-${e.instanceId}" class="collapse show">
            <hr class="hr-dash mt-4 mb-3 mx-auto">

          ${Array.from({length:3}).map((t,s)=>`
            <div class="d-flex gap-3 mb-3 ms-3 me-1">

              <div class="flex-fill">
                ${h({blockId:`${e.instanceId}-${s}`,field:`image${s}`})}
              </div>

              <div class="flex-fill">
                ${f({blockId:`${e.instanceId}-${s}`,field:`link${s}`})}
              </div>
            </div>
          `).join("")}
        </div>
      </div>
      <div class="mt-2 text-end">
        ${w({type:"block-15",text:"新增賣點",maxCount:5,minCount:1})}
      </div>
    </div>
    </div>
  `,16:e=>`
    <div class="editor-section">
      <div class="section-title">區塊內容設定</div>
      ${A({className:"ps-3"})}
      
      <div class="board-card p-3 position-relative flex-fill flex-content mb-3" data-clone-target>
        <div class="d-flex justify-content-between align-items-center">
          <div class="d-flex align-items-center gap-2">
            <div class="fw-bold">左圖輪播banner設定</div>
            <img src="/img/arrow-toggle-down.svg"
              class="tab-arrow"
              data-bs-toggle="collapse"
              data-bs-target="#board-${e.instanceId}">
          </div>
        </div>

        <div id="board-${e.instanceId}" class="collapse show">
          <hr>
          <div class="form-row mb-3 p-3 bg-white">
            <div class="row">
              <div class="d-flex justify-content-between align-items-center mb-2">
                <div class="fw-bold mb-3">左背景圖</div>
              </div>
                <div class="col-6">
                  <div class="form-content d-flex align-items-center gap-2">
                    <label class="label required">看板圖檔</label>
                    <button class="btn btn-outline-primary btn-outline-primary-custom btn-sm btn-upload">
                      選擇檔案
                    </button>
                    <label class="label file-name text-truncate w-50">
                      未選擇檔案
                    </label>
                  </div>
                  <div class="form-content ms-1">
                    <span class="hint ms-5 ps-4">尺寸：280*504 px｜限60KB</span>
                  </div>
                </div>
                <div class="col-6">
                  ${f({blockId:e.instanceId,field:"link"})}
                </div>
              </div>
            </div>
            <hr>

            <!-- 左圖1（單一卡片） -->
            <div class="form-row mb-3 p-3 w-50" style="border:1px dashed #d2d5da;">
              
              <div class="d-flex justify-content-between align-items-center mb-2">
                <div class="fw-bold mb-2">左圖1</div>
                <div
                  class="btn btn-delete-block"
                  data-action="delete-block"
                  data-block-id="${e.instanceId}">
                </div>
              </div>

              <div class="form-content d-flex align-items-center gap-2">
                <label class="label required">看板圖檔</label>
                <button class="btn btn-outline-primary btn-outline-primary-custom btn-sm btn-upload">
                  選擇檔案
                </button>
                <label class="label file-name text-truncate w-50">
                  未選擇檔案
                </label>
              </div>

              <div class="form-content ms-1">
                <span class="hint ms-5 ps-4">尺寸：280*504 px｜限60KB</span>
              </div>
              ${f({blockId:e.instanceId,field:"link",className:"mt-2"})}
            </div>

            <div class="d-flex justify-content-end">
              ${w({type:"block-16",text:"新增看板",maxCount:10,minCount:1})}
            </div>
          </div>
      </div>

    </div>
  `,17:e=>`
    <div class="editor-section pb-5">
      <div class="section-title">區塊內容設定</div>
      <div class="label fw-bold mb-2">右側四小圖</div>
      <div class="d-flex gap-3 mb-3">
        ${[{title:"左上圖",i:1},{title:"右上圖",i:2}].map(t=>D({blockId:`${e.instanceId}-${t.i}`,title:t.title,sizeText:"尺寸：233*317px｜限30KB",imageField:`image${t.i}`,linkField:`link${t.i}`})).join("")}
      </div>
      <div class="d-flex gap-3 mb-3">
        ${[{title:"左小圖",i:3},{title:"右小圖",i:4}].map(t=>D({blockId:`${e.instanceId}-${t.i}`,title:t.title,sizeText:"尺寸：233*317px｜限30KB",imageField:`image${t.i}`,linkField:`link${t.i}`})).join("")}
      </div>
      <hr class="hr-dash">

      <div class="label fw-bold mb-2">左側輪播Banner</div>
      <div class="d-flex gap-3 mb-3">
        ${[{title:"看板設定",i:1},{title:"看板設定",i:2}].map(t=>D({blockId:`${e.instanceId}-${t.i}`,title:t.title,sizeText:"尺寸：466*634 px｜限113KB",imageField:`banner${t.i}`,linkField:`bannerLink${t.i}`})).join("")}
      </div>
      <div class="d-flex gap-3 mb-3">
        ${[{title:"看板設定",i:3},{title:"看板設定",i:4}].map(t=>D({blockId:`${e.instanceId}-${t.i}`,title:t.title,sizeText:"尺寸：466*634 px｜限113KB",imageField:`banner${t.i}`,linkField:`bannerLink${t.i}`})).join("")}
      </div>

      ${w({type:"block-17",text:"新增看板",maxCount:20,minCount:4,className:"float-end"})}
    </div>
  `,18:e=>`
    <div class="editor-section">
    <div class="section-title">區塊內容設定</div>
    ${A({className:"ps-3"})}

    <hr class="hr-dash">

    ${[{title:"左圖",id:"18-left"},{title:"右上中圖",id:"18-right-top"},{title:"左小圖",id:"18-left-small"},{title:"右小圖",id:"18-right-small"}].reduce((t,s,a,l)=>(a%2===0&&t.push(l.slice(a,a+2)),t),[]).map(t=>`
          <div class="d-flex gap-3 mb-3">
            ${t.map(({title:s})=>`
                  <div class="flex-fill flex-content">
                    <div class="mt-1 mb-3 fw-bold">
                      ${s}
                    </div>

                    ${h({blockId:e.instanceId,field:"image",sizeText:"尺寸：586*340 px｜限100KB"})}

                    ${f({blockId:e.instanceId})}
                  </div>
                `).join("")}
          </div>
        `).join("")}
    </div>
  `,19:e=>`
    <div class="editor-section">
      <div class="section-title">區塊內容設定</div>
      <div class="row g-3 drag-content">
        ${Array.from({length:4},(t,s)=>`
          <div class="col-12" data-clone-target>
            <div class="board-card pb-0 position-relative flex-fill flex-content">
              <div class="position-absolute end-0 d-flex align-items-center pe-3" style="top: 15px;">
                ${P({blockId:`${e.instanceId}-${s}`})}
              </div>

              <div class="fw-bold mb-3">看板設定</div>

              <div class="d-flex align-items-start gap-4">
                <div class="flex-fill">
                  ${h({blockId:`${e.instanceId}-${s}`,field:"image",sizeText:"尺寸：(1220/看板數)*343px｜限300KB"})}
                </div>
                <div class="flex-fill">
                  ${f({blockId:`19-${s}`})}
                </div>
              </div>
            </div>
          </div>
        `).join("")}
      </div>

      ${w({type:"block-19",text:"新增看板",className:"d-flex justify-content-end mt-4 ms-auto"})}
    </div>
  `,20:e=>` 
    <div class="editor-section pb-4">
      <div class="section-title">區塊內容設定</div>
      <div class="row g-3 mb-3">
      ${Array.from({length:2},(t,s)=>`
        <div class="col-6" data-clone-target>
          <div class="flex-content">
            <div class="mb-3 fw-bold d-flex justify-content-between align-items-center">
              <label class="label">關鍵字設定</label>
              <div
                class="btn btn-delete-block"
                data-action="delete-item"
                data-block-id="${e.instanceId}"
                data-index="${s}">
              </div>
            </div>

            <div class="form-row mb-3">
              <div class="form-content d-flex align-items-center gap-2 mb-2">
                <label class="label text-end required text-nowrap" style="width:110px;">
                  關鍵字
                </label>
                <input
                  class="form-control edit-form w-100"
                  placeholder="請輸入關鍵字名稱"
                  data-field="keyword"
                  data-block-id="${e.instanceId}"
                  data-index="${s}"
                />
              </div>
              <div class="form-content d-flex align-items-center gap-2">
                <label class="label text-end required text-nowrap" style="width:100px;">
                  關鍵字連結
                </label>
                <input
                  class="form-control edit-form w-100"
                  placeholder="請輸入 momo 網域連結"
                  data-field="link"
                  data-block-id="${e.instanceId}"
                  data-index="${s}"
                />            
                </div>
              </div>
            </div>
          </div>
        `).join("")}
      </div>

      <div class="d-flex justify-content-end">
        ${w({type:"block-20",text:"新增關鍵字",maxCount:25,minCount:2,blockId:e.instanceId})}
      </div>
    </div>
  `,21:e=>`
    <div class="editor-section">
      <div class="section-title">區塊內容設定</div>
      <div class="form-content d-flex align-items-center gap-2" style="padding-left: 15px;">
        <label class="label fw-bold text-nowrap">主標</label>
        <label class="switch me-1">
          <input type="checkbox">
          <span style="top: -3px"></span>
        </label>
        <span>隱藏</span>

        <label class="label fw-bold text-nowrap ms-4">副標</label>
        <label class="switch me-1">
          <input type="checkbox">
          <span style="top: -3px"></span>
        </label>
        <span>隱藏</span>
      </div>

      <hr class="hr-dash mt-4 mb-3">

      <div class="row g-4 mb-4 drag-content">
      ${Array.from({length:4},(t,s)=>`
          <div class="col-6" data-clone-target>
            <div class="board-card p-3 position-relative flex-fill flex-content">

              <!-- 右上角 -->
              <div class="position-absolute end-0 d-flex align-items-center pe-2 gap-2" style="top: 16px;">
                ${P({blockId:`${e.instanceId}-${s}`})}
              </div>
              <div class="fw-bold mb-3">圖文設定</div>
              <div class="form-row mb-3 ps-3">
                ${h({blockId:`${e.instanceId}-${s}`,field:"image",sizeText:"586*340 px｜限100KB"})}
              </div>
              <div class="form-row mb-3 ps-3">
                ${f({blockId:`${e.instanceId}-${s}`})}
              </div>

              <!-- 文字色碼 -->
              <div class="form-row mb-3 ps-3">
                <div class="form-content d-flex align-items-center gap-2">
                  <label class="label required text-nowrap">文字色碼</label>
                  <input class="form-control edit-form w-100" style="max-width:120px" value="#FFDADA" />
                </div>
              </div>

              <!-- 主標 -->
              <div class="form-row mb-3 ps-3">
                <div class="form-content d-flex align-items-center gap-2">
                  <label class="label text-nowrap" style="padding-left: 10px">主標名稱</label>
                  <input class="form-control edit-form w-100" placeholder="主標1" />
                  <input class="form-control edit-form w-100" placeholder="主標2" />
                </div>
              </div>

              <!-- 副標 -->
              <div class="form-row mb-3 ps-3">
                <div class="form-content d-flex align-items-center gap-2">
                  <label class="label text-nowrap" style="padding-left: 10px">副標名稱</label>
                  <input
                    class="form-control edit-form w-100"
                    placeholder="請輸入副標名稱"
                  />
                </div>
              </div>

              <!-- 價錢 / 文案 -->
              <div class="form-row mb-2 ms-1 ps-2 ">
                <div class="form-content d-flex align-items-center gap-2">
                  <label class="label required text-nowrap">價錢/文案</label>
                  <input class="form-control edit-form w-100" placeholder="輸入價錢" />
                  <input class="form-control edit-form w-100" placeholder="輸入文案" />
                </div>
              </div>

              <!-- 影音設定 -->
              <div class="form-row mb-3">
                <div class="form-content d-flex align-items-center gap-2" style="padding-left: 15px;">
                  <label class="label required text-nowrap">影音設定</label>
                  <label class="switch me-1">
                    <input type="checkbox" checked="">
                    <span style="top: -3px"></span>
                  </label>
                  <span>關閉影音</span>
                </div>

                <div class="form-content mt-2">
                  <input
                    class="form-control edit-form ms-auto" style="width: 75%"
                    placeholder="輸入影音連結"
                  />
                </div>
              </div>
            </div>
          </div>
        `).join("")}
      </div>

      <div class="d-flex justify-content-end mt-4">
        ${w({type:"block-21",text:"新增圖文設定",maxCount:12,minCount:4})}
      </div>
    </div>
  `,22:e=>`
    <div class="editor-section">
      <div class="section-title">
        區塊內容設定
      </div>
      ${te()}
      ${ee({name:`bg-display-type-${e.instanceId}`,blockId:`${e.instanceId}`,hidden:e.hidden})}
      
      <div class="form-row mb-3">
        <div class="form-content gap-2 d-flex ms-3 align-items-center">
          <label class="label required">大網背景</label>
          <input type="radio" name="bgType" checked>
          <div class="color-field">
            <label class="label">輸入色碼</label>
            <button class="color-preview position-absolute" style="background:#FFDADA"></button>
            <input id="bgType-input" class="form-control edit-form color-form" value="#FFDADA">
          </div>

          <input type="radio" name="bgType" class="ms-4">
          <span>上傳圖片</span>
          <button class="btn btn-outline-primary btn-outline-primary-custom btn-sm btn-upload" data-action="upload" data-block-id="22-bg" data-field="background" data-index="">
            選擇檔案
          </button>
          <label class="label file-name text-truncate w-50">
            未選擇檔案
          </label>
          <input type="file" class="file-input d-none" accept="image/*" data-action="file-input" data-block-id="22-bg" data-field="background" data-index="">
        </div>
      </div>
    </div>
  `,23:e=>`
  <div class="editor-section">
    <div class="section-title">區塊內容設定</div>
    <div class="d-flex gap-4 flex-wrap">
      <div class="form-row col-5 ms-3">
        ${h({blockId:e.instanceId,field:"htmlZip",uploadText:"選擇檔案",fileName:"未選擇檔案"})}
      </div>

      <div class="form-row col-5 ms-auto">
        <div class="form-content d-flex align-items-center gap-2">
          <label class="label text-nowrap">
            <span class="text-danger">*</span> 寬高比
          </label>
          <span>1:</span>
          <input class="form-control edit-form w-100" placeholder="請輸入數字">
        </div>
      </div>

      <div class="form-row w-100">
        <div class="form-border py-3 px-2">
          <label class="label ms-2 fw-bold">上傳說明</label>
          <a href="#" class="ms-2 text-decoration-none" style="font-size: 12px;">下載範例檔</a>

          <ol class="mt-4 mb-0 text-wrap">
            <li>寬度限制1220，超過不顯示</li>
            <li>壓縮檔限制5MB，zip必須有html檔、images資料夾</li>
            <li>單張圖檔限制1000KB，支援jpg、png、gif</li>
            <li>HTML檔不支援link、script 標籤語法</li>
            <li>
              HTML檔style標籤內容，限使用class及id設定，一般標籤不可使用，
              命名需以momoStyle開頭，
              例：「.momoStyleXXX」、「#momoStyleXXX」
            </li>
          </ol>
        </div>
      </div>

    </div>
  </div>
  `},ee=({name:e="displayType",blockId:t="",hidden:s=!1}={})=>`
  <div class="form-row mb-3">
    <div class="form-content gap-2 d-flex ms-3 lh-lg align-items-center">
      <label class="label lh-lg required">
        前台呈現
      </label>

      <label class="d-flex align-items-center gap-1">
        <input
          type="radio"
          name="${e}"
          value="show"
          data-action="toggle-display"
          data-block-id="${t}"
          ${s?"":"checked"}
        >
        <span>顯示區塊</span>
      </label>

      <label class="d-flex align-items-center gap-1">
        <input
          type="radio"
          name="${e}"
          value="hide"
          data-action="toggle-display"
          data-block-id="${t}"
          ${s?"checked":""}
        >
        <span>不顯示區塊</span>
      </label>
    </div>
  </div>
`,te=()=>`
  <div class="form-row mb-3">
    <div class="label">
      ※ 此區塊僅有電腦版會顯示
    </div>
  </div>
`,A=({className:e="",name:t="displayType",checked:s="discount",showHint:a=!0}={})=>`
  <div class="form-row ${e}">
    <div class="form-content d-flex align-items-center gap-2 ms-3">
      <label class="label required text-nowrap">
        推薦商品
      </label>

      <label>
        <input
          type="radio"
          name="${t}"
          value="discount"
          ${s==="discount"?"checked":""}
        >
        降價好貨
      </label>

      <label>
        <input
          type="radio"
          name="${t}"
          value="new"
          ${s==="new"?"checked":""}
        >
        新品搶先看
      </label>
    </div>

    ${a?`
      <div class="form-content ms-5 ps-5">
        <span class="hint ps-1">
          若推薦商品數量不足，將以其他商品進行替補或隱藏此區塊
        </span>
      </div>
    `:""}
  </div>
`,h=({blockId:e,field:t,index:s,sizeText:a="",className:l="",fileName:o="未選擇檔案",uploadText:n="選擇檔案"})=>`
  <div class="form-row mb-3" data-block-id="${e}" data-field="${t}">
    <div class="d-flex align-items-center gap-2">
      <label class="label required text-nowrap">看板圖檔</label>

      <button
        class="btn btn-outline-primary btn-outline-primary-custom btn-sm btn-upload"
        data-action="upload"
        data-block-id="${e}"
        data-field="${t}"
        data-index="${s??""}"
      >
        ${n}
      </button>

      <label class="label file-name text-truncate w-50">
        ${o}
      </label>

      <input
        type="file"
        class="file-input d-none"
        accept="image/*"
        data-action="file-input"
        data-block-id="${e}"
        data-field="${t}"
        data-index="${s??""}"
      />
    </div>

    ${a?`<div class="ms-1">
            <span class="hint ms-5 ps-4">${a}</span>
           </div>`:""}
  </div>
`,D=({blockId:e,title:t,sizeText:s,imageField:a="image",linkField:l="link",i:o})=>`
  <div class="flex-fill flex-content">
    <div class="mb-3 fw-bold">${t}</div>

    ${h({blockId:e,field:a,sizeText:s,uploadText:"選擇檔案",fileName:"未選擇檔案"})}

    ${f({blockId:e,field:l})}
  </div>
`,f=({blockId:e,field:t="link",placeholder:s="請輸入 momo 網域連結",value:a="",index:l=null,className:o=""})=>`
  <div class="d-flex align-items-center gap-2 ${o}"
       data-block-id="${e}"
       data-field="${t}"
       data-index="${l??""}">

    <label class="label required text-nowrap">看板連結</label>

    <input
      class="form-control edit-form w-100"
      data-action="input"
      data-block-id="${e}"
      data-field="${t}"
      data-index="${l??""}"
      value="${a}"
      placeholder="${s}"
    />
  </div>
`,w=({type:e,text:t,countText:s="",maxCount:a=null,minCount:l=null,blockId:o="",className:n=""})=>`
  <button
    class="btn btn-primary btn-primary-custom btn-add-block ${n}"
    data-action="add-block"
    data-type="${e}"
    ${a!=null?`data-max-count="${a}"`:""}
    ${l!=null?`data-min-count="${l}"`:""}
    ${o?`data-block-id="${o}"`:""}
  >
    ＋ ${t}
    <span class="count-text">${s}</span>
  </button>
`,Te=({blockId:e})=>`
  <div class="board-card pb-0 position-relative flex-fill flex-content" data-clone-target>
    ${re({title:"看板設定",blockId:e})}

    <div class="row mt-3">
      <div class="col-6">
        ${h({blockId:e,field:"image",sizeText:"960*270 px｜限150KB",fileName:"未選擇檔案"})}
      </div>
      <div class="col-6">
        ${f({blockId:e})}
      </div>
    </div>
  </div>
`,re=({title:e,blockId:t,showToggle:s=!1,checked:a=!1})=>`
  <div class="d-flex justify-content-between align-items-center mb-2">
    <div class="d-flex align-items-center gap-2">
      <span class="fw-bold">${e}</span>
      ${s?`
        <label class="switch m-auto">
          <input type="checkbox" ${a?"checked":""}>
          <span></span>
        </label>
      `:""}
    </div>
    ${pe({blockId:t})}
  </div>
`,Ae=({blockId:e})=>`
  <div class="row mb-3 ms-3 me-1">

    <div class="col-6">
      ${h({blockId:e,field:"image",sizeText:"320x400px｜限150KB",fileName:"未選擇檔案"})}
    </div>

    <div class="col-6">
      ${f({blockId:e})}
    </div>

  </div>
`,pe=({blockId:e})=>`
  <div class="d-flex align-items-center gap-2">
    <div
      class="btn btn-delete-block"
      data-action="delete-block"
      data-block-id="${e}">
    </div>
  </div>
`,P=({blockId:e})=>`
  <div class="d-flex align-items-center gap-2">
    <div
      class="btn btn-delete-block"
      data-action="delete-block"
      data-block-id="${e}">
    </div>
    <div
      class="btn btn-drag-block"
      data-action="drag-block"
      data-block-id="${e}">
    </div>
  </div>
`,se=({label:e="設定商品",buttonText:t="新增商品",hint:s})=>`
  <div class="form-row mb-3">
    <div class="form-content d-flex align-items-center gap-2 ms-3">
      <label class="label required text-nowrap">${e}</label>
      <button class="btn btn-outline-primary btn-outline-primary-custom btn-sm btn-edit-products">
        ${t}
      </button>
      ${`<span class="hint">${s}</span>`}
    </div>
  </div>
`,ae=({rowId:e="blockTableBody",rowControlsId:t})=>`
  <div class="product-list-wrapper">

    <span class="hint hint-product lh-lg">
      共 18 個商品，可調整商品順序，調整後的順序即為前台展示順序
    </span>

    <table class="table product-table align-middle w-100">
      <thead>
        <tr>
          <th style="width:35%">商品品號｜名稱</th>
          <th style="width:10%">銷售狀況</th>
          <th style="width:25%">影音</th>
          <th style="width:10%">進價</th>
          <th style="width:10%">售價</th>
          <th style="width:10%">操作</th>
        </tr>
      </thead>

      <tbody id="${e}" class="drag-content">
        <tr class="product-row">
          <td>
            <div class="d-flex gap-2">
              <div class="position-relative product-img-wrapper">
                <img src="/img/product.png" width="64" class="product-img">
                <div class="img-popup d-none">
                  <div class="hint text-nowrap">尺寸：320*320 px｜限150KB</div>
                  <div class="btn btn-change text-start ps-3">更改商品圖檔</div>
                  <div class="btn btn-reset text-start ps-3">恢復預設主圖</div>
                  <input type="file" class="file-input d-none" accept="image/*">
                </div>
                <button class="img-edit">修改圖檔</button>
              </div>

              <div>
                <input class="form-control mb-1" placeholder="商品品號">
                <input class="form-control" placeholder="商品名稱">
              </div>
            </div>
          </td>

          <td>銷售中</td>

          <td class="text-start">
            <div class="video-control d-flex align-items-center gap-1 lh-g">
              <label class="switch">
                <input type="checkbox" class="video-toggle">
                <span></span>
              </label>
              <span class="video-label">關閉影音</span>
            </div>
            <input class="form-control video-input" placeholder="影音連結">
          </td>

          <td class="text-end">1,000</td>
          <td class="text-end">13,000</td>

          <td>
            ${P({blockId:t})}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
`,le=()=>`
  <div class="d-flex align-items-center page-text position-absolute">

    <div class="text-nowrap" style="color:#343a40;font-size:14px">
      共 <span>124</span> 筆
    </div>

    <ul class="pagination pagination-sm mb-0">
      <li class="page-item"><a class="page-link">＜</a></li>
      <li class="page-item active"><a class="page-link">1</a></li>
      <li class="page-item"><a class="page-link">2</a></li>
      <li class="page-item"><a class="page-link">3</a></li>
      <li class="page-item"><a class="page-link">4</a></li>
      <li class="page-item"><a class="page-link">5</a></li>
      <li class="page-item"><a class="page-link">＞</a></li>
    </ul>

    <select class="form-select form-select-sm text-center">
      <option value="10">10筆/頁</option>
      <option value="20">20筆/頁</option>
      <option value="50">50筆/頁</option>
      <option value="100" selected>100筆/頁</option>
    </select>
  </div>
`,qe="/img/3203/default.png",oe=e=>e||qe,U={4:e=>{var t,s;return`
    <div class="block-content">
      <img class="img-left w-50 d-block object-fit-contain" src="${oe((t=e.images)==null?void 0:t.left)}" />
      <img class="img-right w-50 d-block object-fit-contain" src="${oe((s=e.images)==null?void 0:s.right)}" />
    </div>
  `},5:e=>{var o;const t=((o=e.images)==null?void 0:o.items)||[],s=2,a=t.length?Array.from({length:Math.ceil(t.length/s)}).map((n,i)=>t.slice(i*s,i*s+s)):[[]];return`
    <div id="${`carousel-${e.instanceId||e.id||"block5"}`}" class="carousel slide" data-bs-ride="carousel">

      <div class="carousel-inner">

        ${a.map((n,i)=>`
            <div class="carousel-item ${i===0?"active":""}">
              <div class="d-flex flex-wrap">

                ${Array.from({length:8}).map((c,m)=>{const p=n[m];return`
                    <div style="width:12.5%; padding:2px;">
                      <img
                        src="${(p==null?void 0:p.src)||"/img/3203/default.png"}"
                        style="width:100%; aspect-ratio:1/1; object-fit:cover;"
                      />
                    </div>
                  `}).join("")}

              </div>
            </div>
          `).join("")}

      </div>

    </div>
  `},7:e=>`
    <div class="block-content d-flex flex-wrap">
      ${Array.from({length:8}).map((t,s)=>{var l,o,n;return`
          <div class="flex-grow-0" style="width:12.5%">
            <img
              class="img-fluid w-100"
              style="aspect-ratio:1/1; object-fit:cover;"
              src="${((n=(o=(l=e.images)==null?void 0:l.items)==null?void 0:o[s])==null?void 0:n.src)||"/img/3203/default.png"}"
            />
          </div>
        `}).join("")}
    </div>
  `,default:e=>`
    <div class="block-content" style="background:${e.bgColor}">
      <img src="${e.image||"/img/3203/block-image-default.svg"}" />
    </div>
  `},me=["logo","image-text-bg"],ne=e=>me.indexOf(e),M=e=>me.includes(e==null?void 0:e.key),ue=()=>{let e=document.getElementById("editorPanel");return e||(e=document.createElement("div"),e.id="editorPanel",e.classList.add("editor-panel","d-none"),(document.getElementById("settingsPanel")||document.body).appendChild(e)),e},Me=(e={})=>`
    <div class="block-tools">
      <button class="tool-btn tool-btn-edit">
        <img src="/img/edit.svg" />
      </button>

      ${M(e)?"":`
        <button class="tool-btn tool-btn-drag">
          <img src="/img/drag.svg" />
        </button>
        <button class="tool-btn tool-btn-delete">
          <img src="/img/delete.svg" />
        </button>
      `}
    </div>
  `,N=(e,t)=>{const s=M(t);e.classList.add("canvas-block"),s&&e.classList.add("is-fixed"),e.dataset.id=t.instanceId,e.dataset.templateId=String(t.templateId??t.id),e.dataset.key=t.key,e.dataset.config=JSON.stringify(t),_(e)},_=e=>{if(!e)return;const t=JSON.parse(e.dataset.config||"{}"),s=Number(e.dataset.templateId);let a=U.default;U[s]&&(a=U[s]),e.innerHTML=`
    <div class="canvas-block-inner">
      <div class="block-label">
        ${t.title||""}${t.hidden?"(隱藏)":""}
      </div>

      ${a(t)}

      ${Me(t)}
    </div>
  `},Ne=(e=[])=>{const t=Fe();if(!t)return;t.querySelectorAll(".canvas-block").forEach(a=>a.remove()),F.filter(a=>M(a)).sort((a,l)=>ne(a.key)-ne(l.key)).map(a=>({...structuredClone(a),instanceId:crypto.randomUUID(),templateId:a.id})).forEach(a=>{const l=document.createElement("div");N(l,a),l.classList.add("is-fixed"),t.appendChild(l)}),e.forEach(a=>{if(M(a))return;const l=document.createElement("div");N(l,a),t.appendChild(l)}),Re(t)},Fe=()=>{const e=document.getElementById("canvas");return e||console.warn("[canvas] not found"),e};let H=null;const Re=e=>{e&&(H&&H.destroy(),H=new Sortable(e,{group:{name:"blocks",pull:!1,put:!0},animation:150,handle:".tool-btn-drag",draggable:".canvas-block:not(.is-fixed)",filter:".is-fixed",onMove:t=>{var s;return!((s=t.related)!=null&&s.classList.contains("is-fixed"))},onStart:t=>{var a;t.item.classList.contains("is-fixed")||(a=document.querySelector(".block-footer"))==null||a.classList.remove("d-none")},onEnd:()=>{var t;(t=document.querySelector(".block-footer"))==null||t.classList.add("d-none")}}))},z=()=>{var t;const e=!((t=document.querySelector(".block-footer"))!=null&&t.classList.contains("d-none"));document.querySelectorAll(".tool-btn-edit").forEach(s=>{s.style.display=e?"none":""})},F=[{id:1,key:"logo",title:"置頂大Banner",bgColor:"#f3f4f6",image:"",type:"Logo圖",titleStyle:"none"},{id:2,key:"carousel",title:"輪播商品100品",bgColor:"#f3f4f6",image:"/img/3203/block-image2.png",type:"商品類",titleStyle:"desktop+mobile"},{id:3,key:"floor",title:"樓層看板與商品",bgColor:"#f3f4f6",image:"/img/3203/block-image3.png",type:"商品類",titleStyle:"mobile-only"},{id:4,key:"image-text-2",title:"兩小看板",bgColor:"#f3f4f6",image:"/img/3203/block-image4.png",type:"圖文類",titleStyle:"desktop+mobile"},{id:5,key:"image-text-8-slider",title:"八小幅看板_左右滑",bgColor:"#f3f4f6",image:"/img/3203/block-image5.png",type:"圖文類",titleStyle:"desktop+mobile"},{id:6,key:"image-text-8",title:"八小看板",bgColor:"#f3f4f6",image:"/img/3203/block-image6.png",type:"圖文類",titleStyle:"mobile-only"},{id:7,key:"image-text-8-195",title:"八小看板_195X195",bgColor:"#f3f4f6",image:"/img/3203/block-image7.png",type:"圖文類",titleStyle:"desktop+mobile"},{id:8,key:"image-text-icon",title:"圖示看板",bgColor:"#f3f4f6",image:"/img/3203/block-image8.png",type:"圖文類",titleStyle:"desktop+mobile"},{id:9,key:"image-text-10",title:"十小幅看板",bgColor:"#f3f4f6",image:"/img/3203/block-image9.png",type:"圖文類",titleStyle:"desktop+mobile"},{id:10,key:"image-text-carousel",title:"輪播大看板",bgColor:"#f3f4f6",image:"/img/3203/block-image10.png",type:"圖文類",titleStyle:"desktop+mobile"},{id:11,key:"image-text-banner",title:"橫條看板",bgColor:"#f3f4f6",image:"/img/3203/block-image11.png",type:"圖文類",titleStyle:"desktop+mobile"},{id:12,key:"image-text-6",title:"六小看板",bgColor:"#f3f4f6",image:"/img/3203/block-image12.png",type:"圖文類",titleStyle:"desktop+mobile"},{id:13,key:"image-text-bank",title:"銀行看板",bgColor:"#f3f4f6",image:"/img/3203/block-image13.png",type:"圖文類",titleStyle:"desktop+mobile"},{id:14,key:"image-text-vertical-brand",title:"直式看板_品牌專區",bgColor:"#f3f4f6",image:"/img/3203/block-image14.png",type:"圖文類",titleStyle:"desktop+mobile"},{id:15,key:"image-text-1-3",title:"一帶三",bgColor:"#f3f4f6",image:"/img/3203/block-image15.png",type:"圖文類",titleStyle:"mobile-only"},{id:16,key:"image-text-3-large",title:"三大主題看板",bgColor:"#f3f4f6",image:"/img/3203/block-image16.png",type:"圖文類",titleStyle:"mobile-only"},{id:17,key:"image-text-carousel-1-4",title:"輪播組圖一大四小看板",bgColor:"#f3f4f6",image:"/img/3203/block-image17.png",type:"圖文類",titleStyle:"desktop+mobile"},{id:18,key:"image-text-4",title:"四合一看板",bgColor:"#f3f4f6",image:"/img/3203/block-image18.png",type:"圖文類",titleStyle:"mobile-only"},{id:19,key:"image-text-multi-ad",title:"新多合一廣告版位",bgColor:"#f3f4f6",image:"/img/3203/block-image19.png",type:"圖文類",titleStyle:"desktop+mobile"},{id:20,key:"image-text-keyword",title:"熱搜關鍵字",bgColor:"#f3f4f6",image:"/img/3203/block-image20.png",type:"圖文類",titleStyle:"desktop+mobile"},{id:21,key:"image-text-box",title:"好物開箱",bgColor:"#f3f4f6",image:"/img/3203/block-image21.png",type:"圖文類",titleStyle:"desktop+mobile"},{id:22,key:"image-text-bg",title:"背景圖",bgColor:"#f3f4f6",image:"",type:"圖文類",titleStyle:"none"},{id:23,key:"image-text-html",title:"自訂HTML",bgColor:"#f3f4f6",image:"/img/3203/block-image23.png",type:"圖文類",titleStyle:"none"}],De=e=>{const t=e.titleStyle==="none"?"d-none":"";return`<div class="editor-panel-inner">
    <div class="schedule-section d-none">
      <div class="return-arrow d-inline-block d-none">
        <img src="/img/arrow-left.svg" class="section-header-arrow me-2"/>返回
      </div>
      <div class="editor-header center-header">
        <div class="title panel-header schedule-header position-relative">預約排程列表</div>
        <div class="header-actions">
          <button class="btn btn-outline-primary btn-primary-custom btn-add-schedule">+ 新增排程</button>
        </div>
      </div>
      <div class="product-list-wrapper">
        <table class="schedule-list-table w-100">
          <thead>
            <tr>
              <th>預約時間</th>
              <th>排程名稱</th>
              <th>最後異動時間</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2024/10/15 11:24:03</td>
              <td class="text-start">雙12活動區塊</td>
              <td class="text-start">
                2024/10/15 11:24:03<br>
                568/廠商人員
              </td>
              <td class="col-actions">
                <button class="action-btn action-btn-edit">編輯</button>
                <button class="action-btn action-btn-delete">刪除</button>
              </td>
            </tr>
            <tr>
              <td>2024/10/15 11:24:03</td>
              <td class="text-start">雙12活動區塊</td>
              <td class="text-start">
                2024/10/15 11:24:03<br>
                568/廠商人員
              </td>
              <td class="col-actions">
                <button class="action-btn action-btn-edit">編輯</button>
                <button class="action-btn action-btn-delete">刪除</button>
              </td>
            </tr>
          </tbody>
        </table>
        <hr class="mt-4">
      </div>
    </div>

    <!-- Header -->
    <div class="editor-header center-header">
      <div class="title panel-header block-edit-title">編輯區塊內容</div>
      <div class="title panel-header schedule-edit-title d-none">編輯中的排程：雙12活動區塊</div>
      <div class="title panel-header online-block-title d-none">
        編輯線上區塊
        
        <span class="ms-2 align-middle fw-normal">
        <i class="bi bi-check-circle-fill text-success"></i>
          最後異動於2024/10/13 11:24:34  平台 or 569 廠商人員
        </span>
      </div>
      <div class="title panel-header schedule-create-title d-none">新增排程</div>

      <div class="header-actions">
        <button class="btn btn-outline-primary btn-outline-primary-custom btn-preview">預覽電腦版</button>
      </div>
    </div>

    <!-- 區塊設定 -->
    <div class="editor-section">
      <div class="section-title">區塊設定</div>

      <div class="form-row mb-3">
        <div class="form-content align-items-center gap-3 d-flex ms-3">
          <label class="label required">發佈時間</label>
          <label class="now-publish">
            <input type="radio" name="publishType" value="now" checked>
            立即發佈
          </label>
          <label>
            <input type="radio" name="publishType" value="schedule">
            預約發佈
          </label>

          <!-- 預約時間 -->
          <div class="schedule-time d-none d-flex align-items-center gap-2">
            <input type="date" class="form-control form-control-sm schedule-date">

            <select class="form-select form-select-sm schedule-hour">
              ${Array.from({length:24},(s,a)=>`<option>${String(a).padStart(2,"0")}</option>`).join("")}
            </select>
            :

            <select class="form-select form-select-sm schedule-minute">
              ${["00","10","20","30","40","50"].map(s=>`<option>${s}</option>`).join("")}
            </select>
          </div>
        </div>
      </div>

      <div class="form-row schedule-name-row mb-3 d-none">
        <div class="form-content align-items-center gap-3 d-flex ms-3">
          <label class="label required">排程名稱</label>
          <input
            class="form-control edit-form schedule-name-input"
            maxlength="10"
            placeholder="排程名稱限制10字，僅供商店辨識，不會顯示於前台">
        </div>
      </div>

      <div class="form-row ${t}">
        <div class="form-content align-items-center gap-2 d-flex ms-4 ps-1">
          <label class="label lh-lg">區塊背景</label>
          <div class="color-field">
            <button class="color-preview ms-2 position-absolute" style="background:#FFDADA"></button>
            <input id="bg-input" class="form-control edit-form color-form" value="#FFDADA">
          </div>
        </div>
      </div>
    </div> 
  `},ze=e=>{const t=e.titleStyle==="desktop+mobile"?"":"d-none",s=e.titleStyle==="mobile-only"?"":"d-none";return`
    <div class="editor-section ${e.titleStyle==="none"?"d-none":""}">
      <div class="section-title with-switch d-flex">
        <div class="me-4">標題設定</div>
        <label class="switch me-1">
          <input type="checkbox" checked>
          <span></span>
        </label>
        <span class="switch-title ${t}">顯示標題</span>
        <span class="switch-title ${s}">顯示手機版標題</span>
      </div>

      <div class="form-row mb-3 ${t}">
        <div class="form-content form-content gap-3 d-flex ms-3">
          <label class="label required">樣式設定</label>
          <label> 上傳圖檔</label>
        </div>
      </div>
      <div class="form-row mb-3 ${s}">
        <div class="form-content form-content gap-3 d-flex ms-3">
          <label class="label required">手機版標題</label>
          <label> 上傳圖檔</label>
        </div>
      </div>

      <div class="form-row title-image-row mb-3 ${t}">
        <div class="form-content d-flex align-items-center gap-2 ms-5 ps-5">
          <label class="label required">電腦版</label>
          <button class="btn btn-outline-primary btn-outline-primary-custom btn-sm">
            選擇檔案
          </button>
          <label class="label">未選擇檔案</label>

          <label class="label required ms-5 ps-5">手機版</label>
          <button class="btn btn-outline-primary btn-outline-primary-custom btn-sm">
            選擇檔案
          </button>
          <label class="label">未選擇檔案</label>
        </div>
        <div class="form-content ms-5 ps-5">
          <span class="hint ms-5 ps-3">尺寸：1220*70 px｜限50KB</span>
          <span class="hint">尺寸：960*141 px｜限50KB</span>
        </div>
      </div>

      <div class="form-row title-image-row mb-3 ms-3 ${s}">
        <div class="form-content d-flex align-items-center gap-2 ms-5 ps-5">
          <button class="btn btn-outline-primary btn-outline-primary-custom btn-sm">
            選擇檔案
          </button>
          <label class="label">未選擇檔案</label>
        </div>
        <div class="form-content ms-5 ps-5">
          <span class="hint">尺寸：960*141 px｜限50KB</span>
        </div>
      </div>

      <div class="form-row mb-3 ${t}">
        <div class="form-content gap-3 d-flex ms-4 text-nowrap align-items-center">
          <label class="label">標題連結</label>
          <input class="form-control edit-form edit-form-link w-100" placeholder="請輸入 momo 網域連結">
        </div>
      </div>
      <div class="form-row mb-3 ${s}">
        <div class="form-content gap-3 d-flex ms-3 text-nowrap align-items-center">
          <label class="label">手機標題連結</label>
          <input class="form-control edit-form edit-form-link w-100" placeholder="請輸入 momo 網域連結">
        </div>
      </div>
    </div>
  `},W=e=>{const t=Number(e.templateId||e.id);return Q[t]?Q[t](e):`
    <div class="editor-section">
      <div class="section-title">區塊內容設定</div>
      <div class="form-row">
        <label>預設內容（未定義 block 類型）</label>
      </div>
    </div>
  `},ge=e=>`
    ${De(e)}

      <!-- 標題設定 -->
    ${ze(e)}

     <!-- 區塊內容設定 -->
    <div id="blockContentSlot">
      ${W(e)}
    </div>

    <!-- Footer -->
    <div class="editor-footer position-absolute w-100 bottom-0 start-0">
      <button class="btn btn-gray btn-gray-close editor-footer__btn--close">關閉</button>
      <button class="btn btn-primary btn-primary-custom editor-footer__btn--save">發佈區塊內容</button>
      <button class="btn btn-primary btn-primary-custom editor-footer__btn--publish d-none">立即發佈</button>
      <button class="btn btn-primary btn-primary-custom editor-footer__btn--schedule d-none">預約發佈</button>
    </div>
  `,_e=e=>{const t=document.querySelector("#blockSettingsWrapper .left-panel .panel-body");if(!t)return;t.innerHTML="";const s=e.filter(l=>!["logo","image-text-bg"].includes(l.key)),a={};s.forEach(l=>{const o=l.type||"other";a[o]||(a[o]=[]),a[o].push(l)}),Object.keys(a).forEach(l=>{const o=document.createElement("div");o.className="block-section",o.innerHTML=`<div class="section-header d-flex w-100">
    <span>${l}</span>
      <img src="/img/arrow-down.svg" class="section-header-arrow ms-auto me-1"/>
    </div>`;const n=document.createElement("div");n.className="grid-2",a[l].forEach(i=>{const c=document.createElement("div");c.className="block-card position-relative",c.dataset.id=i.id,c.dataset.key=i.key,c.dataset.type=i.type,c.dataset.image=i.image||"",c.innerHTML=`
        <div class="thumb" style="position: relative; min-height:80px; display:flex; justify-content:center; border-radius: 6px; align-items:center; background:${i.image?"#FAFAFA":"#FFF"};">
          <span class="tag">電腦版</span>
          ${i.image?`<img src="${i.image}" style="max-width:100%; max-height:100%;" />`:'<div style="color:white; background: #D2D5DA;width: 100%; height: 108px; line-height: 108px;">圖片區域</div>'}
          <div class="plus-btn"></div>
        </div>
        <div class="title" title="${i.title}">${i.title}</div>
        <div class="drag-label">拖拉區塊</div>
      `,n.appendChild(c)}),o.appendChild(n),t.appendChild(o),o.querySelector(".section-header-arrow").addEventListener("click",i=>{n.classList.toggle("d-none"),i.currentTarget.style.transform=n.classList.contains("d-none")?"rotate(0deg)":"rotate(180deg)"})})};document.addEventListener("mouseover",e=>{const t=e.target.closest(".tag");if(!t)return;const s=t.closest(".block-card").dataset.image;if(!s)return;let a=document.querySelector(".tooltip-img");a?a.src=s:(a=document.createElement("img"),a.src=s,a.className="tooltip-img",document.body.appendChild(a));const l=t.getBoundingClientRect();a.style.top=`${l.bottom+window.scrollY}px`,a.style.left=`${l.left+window.scrollX}px`,a.classList.add("show")});document.addEventListener("mouseout",e=>{if(!e.target.closest(".tag"))return;const s=document.querySelector(".tooltip-img");s&&s.classList.remove("show")});const je=()=>{document.addEventListener("click",e=>{var u;const t=e.target.closest(".plus-btn");if(!t)return;const s=t.closest(".block-card");if(!s)return;const a=F.find(b=>b.id===Number(s.dataset.id)),l={id:Number(s.dataset.id),key:s.dataset.key,type:s.dataset.type,image:s.dataset.image||"",title:((u=s.querySelector(".title"))==null?void 0:u.textContent)||"",titleStyle:a==null?void 0:a.titleStyle};let o=l.image;o&&(o=o.replace("block-image","block-image-sample"));const n={...structuredClone(l),image:o,instanceId:crypto.randomUUID(),templateId:l.id},i=document.createElement("div");if(N(i,n),!document.getElementById("canvas"))return;if(M(l)){console.log("fixed block 不可重複新增");return}St(n);const m=ue();m.innerHTML=ge(n);const p=m.querySelector("#blockContentSlot");p.innerHTML=W(n)})};document.addEventListener("DOMContentLoaded",()=>{ue(),_e(F),Ne([]),je()});const Ke=e=>{const t=document.createElement("div");t.className="preview-modal",t.innerHTML=`
    <div class="preview-overlay"></div>
    <div class="preview-content">
      <div class="preview-btn preview-close">X 退出預覽</div>
      <img src="${e}" />
    </div>
  `,document.body.appendChild(t);const s=()=>t.remove();t.querySelector(".preview-overlay").onclick=s,t.querySelector(".preview-content").onclick=s},Ue=()=>{const e=document.createElement("div");e.className="preview-online-modal",e.innerHTML=`
    <div class="preview-overlay"></div>
    <div class="preview-content">
      <div class="preview-btn tab-btn" data-type="mobile" style="margin-left:-8rem">手機版預覽</div>
      <div class="preview-btn tab-btn active" data-type="pc">電腦版預覽</div>
      <div class="preview-btn preview-close" style="margin-left:8rem">X 退出預覽</div>
      <img class="preview-img" src="/img/pic.svg" />
    </div>
  `,document.body.appendChild(e);const t=e.querySelector(".preview-img"),s=e.querySelectorAll(".tab-btn"),a=e.querySelector(".preview-content");s.forEach(o=>{o.addEventListener("click",()=>{s.forEach(i=>i.classList.remove("active")),o.classList.add("active"),o.dataset.type==="pc"?(t.src="/img/pic.svg",a.classList.remove("mobile")):(t.src="/img/mobile-preview.png",a.classList.add("mobile"))})});const l=()=>e.remove();e.querySelector(".preview-overlay").onclick=l,e.querySelector(".preview-close").onclick=l},He=(e,t)=>{e&&(Oe(e,t),Xe(e),Je(e),Ye(e),Ge(e,t),Ze(e,t),Pe(e))},Oe=(e,t)=>{e&&e.querySelectorAll("input, textarea, select").forEach(s=>{s.addEventListener("input",()=>t.isDirty=!0),s.addEventListener("change",()=>t.isDirty=!0)})},Xe=e=>{const t=e.querySelector("#videoToggle"),s=e.querySelector("#videoLabel"),a=e.querySelector(".video-input");if(!t||!s||!a)return;const l=()=>{s.textContent=t.checked?"開啟影音":"關閉影音",a.disabled=!t.checked};l(),t.addEventListener("change",l)},Je=e=>{e.addEventListener("click",t=>{const s=t.target.closest(".product-img-wrapper");if(s){const a=s.querySelector(".img-popup");e.querySelectorAll(".img-popup").forEach(l=>{l!==a&&l.classList.add("d-none")}),a.classList.toggle("d-none");return}e.querySelectorAll(".img-popup").forEach(a=>{a.classList.add("d-none")})})},be=e=>{try{return JSON.parse(e||"{}")}catch{return{}}},We=(e,t)=>{const s=e.closest(".form-row, .form-content, .board-card, .tab-block");if(!s)return;const a=s.querySelector(".banner-file-name");a&&(a.textContent=t)},Ve=e=>{const t=e.closest("#settingsPanel");return t!=null&&t._block?t._block:null},Ge=(e,t)=>{const s=e.querySelector(".btn-banner-upload"),a=e.querySelector(".banner-file-input");!s||!a||(s.addEventListener("click",()=>{a.click()}),a.addEventListener("change",l=>{var c;const o=(c=l.target.files)==null?void 0:c[0];if(!o)return;const n=100*1024;if(o.size>n){d.showCustomAlert("圖片不可超過100KB","danger"),a.value="";return}We(a,o.name);const i=new FileReader;i.onload=m=>{const p=e==null?void 0:e._block;if(!p)return;const u=be(p.dataset.config);u.image=m.target.result,u.isConfigured=!0,p.dataset.config=JSON.stringify(u),_(p),t.isDirty=!0},i.readAsDataURL(o)}))},Ye=(()=>{let e=!1;return()=>{e||(e=!0,document.addEventListener("click",t=>{const s=t.target.closest(".btn-upload");if(!s)return;const a=s.closest("[data-uploader]");if(!a)return;const l=a.querySelector(".file-input");l==null||l.click()}),document.addEventListener("change",t=>{var i;const s=t.target;if(!s.classList.contains("file-input"))return;const a=(i=s.files)==null?void 0:i[0];if(!a)return;const l=s.closest("[data-uploader]");if(!l)return;const o=Ve(s);if(!o)return;const n=new FileReader;n.onload=c=>{var I;const m=c.target.result,p=be(o.dataset.config);p.images=p.images||{};const u=l.dataset.field,b=Number(l.dataset.index),g=(I=s.files)==null?void 0:I[0];g&&(p.images=p.images||{},u==="left"?p.images.leftFileName=g.name:u==="right"?p.images.rightFileName=g.name:u==="items"?(Array.isArray(p.images.itemsFileName)||(p.images.itemsFileName=Array(8).fill(null)),p.images.itemsFileName[b]=g.name):p.images[`${u}FileName`]=g.name),u==="items"?(Array.isArray(p.images.items)||(p.images.items=Array(8).fill(null)),p.images.items=p.images.items||[],p.images.items[b]={src:m,fileName:g.name}):p.images[u]=m,p.isConfigured=!0,o.dataset.config=JSON.stringify(p);const x=l.querySelector(".file-name");x&&(x.textContent=g.name),_(o)},n.readAsDataURL(a)}))}})(),Ze=(e,t)=>{const s=e.querySelectorAll('input[name="publishType"]'),a=e.querySelector(".schedule-time"),l=e.querySelector(".schedule-name-row"),o=e.querySelector(".schedule-name-input");!a||!l||!o||(s.forEach(n=>n.checked=!1),s.forEach(n=>{n.addEventListener("change",()=>{n.value==="schedule"&&n.checked?(a.classList.remove("d-none"),l.classList.remove("d-none")):(a.classList.add("d-none"),l.classList.add("d-none"),o.value=""),t.isDirty=!0})}),o.addEventListener("input",()=>{o.value.length>10&&(o.value=o.value.slice(0,10))}))},Qe=(e=null,t=null)=>{var l,o;let s="level1";if(e){const n=e.closest("tr");if(n){const i=n.dataset.hasChild,c=n.dataset.level;if(i){alert("已建立第二層分類，無法新增商品");return}s=t||(c==="1"?"level1":"level2")}}else t&&(s=t);$("#productModal").data("level",s);const a=((l=d.getPlacementMode)==null?void 0:l.call(d))||"default";(o=d.renderSearchArea)==null||o.call(d,s,a),$(".parent-btn").addClass("d-none"),$(".child-btn").addClass("d-none"),s==="level1"&&$(".parent-btn").removeClass("d-none"),s==="level2"&&$(".child-btn").removeClass("d-none"),new bootstrap.Modal(document.getElementById("productModal")).show()},ve=()=>{const e=document.getElementById("blockSettingsWrapper"),t=document.getElementById("settingsPanel"),s=document.getElementById("settings-empty"),a=document.querySelector("#blockSettingsWrapper .left-panel");e==null||e.classList.remove("editing"),t&&(t.style.display="none"),s&&(s.style.display="block"),a&&(a.style.display="flex"),document.querySelectorAll(".block-footer").forEach(l=>{l.classList.add("d-none")})},et=()=>Array.from(document.querySelectorAll("#canvas .canvas-block")),tt=()=>et().map(e=>e.dataset.type+(e.dataset.id||"")).join(","),st=()=>({selectedBlock:null,isEditing:!1,isDirty:!1});document.addEventListener("click",e=>{const t=e.target.closest("[data-action]");if(!t)return;const{action:s,blockId:a}=t.dataset;switch(s){case"delete-block":it(a,t);break;case"add-block":lt(t);break;case"upload":at(t);break}});document.addEventListener("click",e=>{const t=e.target.closest(".tab-arrow");if(!t)return;const s=document.querySelector(t.dataset.bsTarget);s.addEventListener("shown.bs.collapse",()=>{t.classList.remove("collapsed")}),s.addEventListener("hidden.bs.collapse",()=>{t.classList.add("collapsed")})});document.addEventListener("change",e=>{var o;const t=e.target.closest('[data-action="file-input"]');if(!t)return;const s=(o=t.files)==null?void 0:o[0];if(!s)return;const a=t.closest(".form-row"),l=a==null?void 0:a.querySelector(".file-name");l&&(l.textContent=s.name)});document.addEventListener("change",e=>{const t=e.target.closest('[data-action="toggle-display"]');if(!t)return;const s=t.dataset.blockId,a=document.querySelector(`.canvas-block[data-id="${s}"]`);if(!a)return;const l=JSON.parse(a.dataset.config||"{}");l.hidden=t.value==="hide",a.dataset.config=JSON.stringify(l),_(a)});const fe=()=>{var t;const e=(t=crypto==null?void 0:crypto.randomUUID)==null?void 0:t.call(crypto);return e?`block-${e}`:`block-${Date.now()}-${Math.random().toString(16).slice(2)}`},at=e=>{const{blockId:t,field:s,index:a=""}=e.dataset,l=document.querySelector(`.file-input[data-block-id="${t}"][data-field="${s}"][data-index="${a}"]`);if(!l){console.warn("找不到 file input",{blockId:t,field:s,index:a});return}l.click()},lt=e=>{switch(e.dataset.type){case"block-7":case"block-12":case"block-15":ot(e);return;default:nt(e);return}},ot=e=>{const t=e.closest("#blockContentSlot .editor-section");if(!t)return;const s=Number(e.dataset.maxCount||999),a=t.querySelectorAll("[data-clone-target]");if(a.length>=s)return;const l=a.length+1,o=a[a.length-1];if(!o)return;const n=o.cloneNode(!0),i=fe();n.dataset.instanceId=i;const c=n.querySelector(".tab-title");c&&(c.textContent=`頁籤${l}`);const m=n.querySelector(".collapse"),p=n.querySelector(".tab-arrow");if(m&&p){const u=`board-${i}`;m.id=u,p.dataset.bsTarget=`#${u}`}ye(n),o.after(n),V(t),j(t)},nt=e=>{const t=e.closest("#blockContentSlot .editor-section");if(!t)return;const s=Number(e.dataset.maxCount||999),a=t.querySelectorAll("[data-clone-target]");if(a.length>=s)return;const l=a[a.length-1];if(!l){console.warn("找不到 clone target");return}const o=l.cloneNode(!0),n=fe();o.querySelectorAll("[data-block-id]").forEach(i=>{i.dataset.blockId=n}),ye(o),l.after(o),he(t),G(t),j(t)},it=(e,t)=>{const s=t.closest("[data-clone-target]");if(s){const a=t.closest("#blockContentSlot .editor-section"),l=a==null?void 0:a.querySelector('[data-action="add-block"]'),o=Number((l==null?void 0:l.dataset.minCount)||1);if(a.querySelectorAll("[data-clone-target]").length<=o)return;s.remove(),G(a),V(a),j(a),he(a);return}if(e){const a=document.querySelector(`.canvas-block[data-id="${e}"]`);a==null||a.remove()}},V=e=>{e.querySelectorAll(".tab-block[data-clone-target]").forEach((s,a)=>{const l=s.querySelector(".tab-title");l&&(l.textContent=`頁籤${a+1}`)})},G=e=>{e.querySelectorAll("[data-clone-target]").forEach((s,a)=>{const l=s.querySelector(".layer-title");l&&(l.textContent=`圖${a+1}`)})},j=e=>{const t=e.querySelector('[data-action="add-block"]');if(!t)return;const s=t.dataset.maxCount,a=s!==void 0?Number(s):null,l=e.querySelectorAll("[data-clone-target]").length,o=t.querySelector(".count-text");o&&(a!==null&&!Number.isNaN(a)?o.textContent=`(${l}/${a})`:o.textContent="")},he=e=>{e.querySelectorAll("[data-clone-target]").forEach((s,a)=>{s.dataset.instanceId=`item-${a+1}`})},ye=e=>{e.querySelectorAll("input").forEach(t=>{switch(t.type){case"text":case"url":case"number":t.value="";break;case"file":t.value="";break;case"radio":case"checkbox":t.checked=!1;break}}),e.querySelectorAll(".file-name").forEach(t=>{t.textContent="未選擇檔案"})},ie=new Map,$e=()=>{document.querySelectorAll(".drag-content").forEach(e=>{if(ie.has(e))return;const t=new window.Sortable(e,{animation:150,handle:'[data-action="drag-block"]',draggable:"[data-clone-target]",ghostClass:"drag-ghost",chosenClass:"drag-chosen"});ie.set(e,t)})},ke=()=>{document.querySelectorAll("#blockContentSlot .editor-section").forEach(t=>{G(t),V(t),j(t)})};document.addEventListener("DOMContentLoaded",()=>{$e(),ke()});const C=st();let ct="",ce=!1;const dt=()=>{const e=document.createElement("div");return e.className="drop-slot",e.innerHTML=`
    <div class="drop-inner">
      <span class="icon">＋</span>
      <span class="text">將區塊拖曳到此位置</span>
    </div>
  `,e},B=()=>{const e=document.getElementById("canvas");if(!e)return;const t=e.querySelectorAll(".canvas-block");e.querySelectorAll(".drop-slot").forEach(s=>s.remove()),t.forEach(s=>{const a=dt();rt(s)&&(a.innerHTML=`
        <div class="drop-inner">
          <span class="icon"><i class="bi bi-x-circle-fill text-danger"></i></span>
          <span class="text">區塊不可拖曳到此位置</span>
        </div>
      `),s.appendChild(a)})},rt=e=>{const t=e.dataset.key;return["logo"].includes(t)},O=()=>{const e=document.getElementById("canvas");if(!e)return;const t=e.querySelector('.canvas-block[data-key="logo"]'),s=e.querySelector('.canvas-block[data-key="image-text-bg"]');if(t&&e.prepend(t),s){const a=e.querySelector('.canvas-block:not([data-key="logo"])');a?e.insertBefore(s,a):e.appendChild(s)}},pt=()=>{document.addEventListener("click",e=>{if(e.target.closest(".btn-preview")){const a=document.querySelector(".canvas-block.is-selected");if(!a)return alert("請先選擇一個區塊");const l=a.querySelector(".block-content img");if(!(l!=null&&l.src))return alert("找不到可預覽的圖片");Ke(l.src);return}if(e.target.closest(".btn-online-preview")){Ue();return}})},mt=()=>{document.addEventListener("click",e=>{const t=e.target.closest(".tool-btn-delete");if(!t)return;const s=t.closest(".canvas-block");d.showConfirm("確定要刪除此區塊嗎?",()=>{s.remove();const a=document.getElementById("canvas");a.querySelectorAll(".canvas-block").length>0||a.classList.add("empty"),B()})})},ut=()=>{document.addEventListener("click",e=>{const t=e.target.closest(".tool-btn-edit");if(t){const a=t.closest(".canvas-block");JSON.parse(a.dataset.config),J(a);return}const s=e.target.closest(".btn-edit-products");s&&Qe(s,"level2")})},gt=e=>{document.addEventListener("click",t=>{const s=t.target.closest(".block-card, .canvas-block");if(!s){e.selectedBlock&&e.selectedBlock.classList.remove("is-selected"),e.selectedBlock=null;return}if(e.isEditing&&s!==e.selectedBlock){if(!e.isDirty){JSON.parse(s.dataset.config),J(s);return}e.pendingBlock=s,d.showConfirm("您正在編輯的內容尚未儲存，若切換至其他區塊，所有異動將會遺失。確定要離開異動嗎？",()=>{e.isEditing=!1,e.isDirty=!1,JSON.parse(e.pendingBlock.dataset.config),J(e.pendingBlock)});return}s!==e.selectedBlock&&(e.selectedBlock&&e.selectedBlock.classList.remove("is-selected"),e.selectedBlock=s,e.selectedBlock.classList.add("is-selected"))})},bt=()=>{document.body.addEventListener("click",e=>{const t=e.target.closest("button");if(t){if(t.classList.contains("btn-block-sort-save")){d.showCustomAlert("區塊排序存檔成功！可選取區塊設定區塊內容","success"),document.querySelectorAll(".block-footer").forEach(s=>s.classList.add("d-none")),z();return}if(t.classList.contains("btn-block-sort-close")&&d.showConfirm("將離開區塊編輯畫面，區塊的任何異動將不會保留，確定要離開嗎?",()=>{C.isEditing=!1,C.isDirty=!1,ve()}),t.classList.contains("editor-footer__btn--save")){const s=document.querySelector('input[name="publishType"]:checked');if(!s)return;const a={now:"立即發佈區塊成功！",schedule:"預約發佈區塊成功！可至預約排程列表查看"};d.showCustomAlert(a[s.value],"success")}if(t.classList.contains("editor-footer__btn--publish")){d.showCustomAlert("立即發佈區塊成功！","success");const s=document.getElementById("settingsPanel"),a=s==null?void 0:s.querySelector(".schedule-section"),l=s==null?void 0:s.querySelector(".block-edit-title"),o=s==null?void 0:s.querySelector(".online-block-title");a&&a.classList.remove("d-none"),l&&l.classList.add("d-none"),o&&o.classList.remove("d-none")}t.classList.contains("editor-footer__btn--schedule")&&d.showCustomAlert("預約發佈區塊成功！可至預約排程列表查看","success")}})},vt=()=>{const e=document.getElementById("settingsPanel");e&&e.addEventListener("change",t=>{const s=t.target;if(s.name==="publishType"){const a=e.querySelector(".editor-footer__btn--save"),l=e.querySelector(".editor-footer__btn--publish");s.value==="now"||s.value==="schedule"?(a&&a.classList.add("d-none"),l&&l.classList.remove("d-none")):(a&&a.classList.remove("d-none"),l&&l.classList.add("d-none"))}})},ft=()=>{document.addEventListener("click",e=>{e.target.closest(".editor-footer__btn--close")&&(C.isEditing=!1,C.isDirty=!1,ve())})},ht=e=>{const t=e.querySelectorAll('input[name="titleType"]'),s=e.querySelector(".title-text-row");e.querySelector(".title-image-row");const a=()=>{var o;(((o=e.querySelector('input[name="titleType"]:checked'))==null?void 0:o.value)||"text")==="text"?s==null||s.classList.remove("d-none"):s==null||s.classList.add("d-none")};t.forEach(l=>l.addEventListener("change",a)),a()},yt=()=>{document.addEventListener("dragover",e=>{const t=document.getElementById("canvas"),s=document.querySelector(".is-dragging");if(!t||!s||!t.contains(e.target))return;const a=e.target.closest(".canvas-block");if(!a)return;const l=a.querySelector(".drop-slot");l&&(document.querySelectorAll(".drop-slot").forEach(o=>o.classList.remove("active")),l.classList.add("active"),document.addEventListener("dragleave",()=>{document.querySelectorAll(".drop-slot").forEach(o=>o.classList.remove("active"))}))})},$t=()=>{const e=document.getElementById("canvas");new Sortable(e,{group:{name:"blocks",pull:!1,put:!0},animation:150,draggable:".canvas-block:not(.is-fixed)",onMove:t=>{var a,l;const s=(l=(a=t.related)==null?void 0:a.dataset)==null?void 0:l.key;return!(s==="logo"||s==="image-text-bg")},onEnd:()=>{var t;O(),B(),(t=document.querySelector(".block-footer"))==null||t.classList.remove("d-none"),z()},onAdd:t=>{const s=t.item;if(!s.dataset.config){console.warn("missing dataset.config, rebuild from key");const o=s.dataset.key;let n=F.find(i=>i.key===o);n?(n=structuredClone(n),n.instanceId=Date.now()):n={id:Date.now(),key:o,title:"新區塊",bgColor:"#f3f4f6",image:"/img/block-image1.svg",type:"other"},s.dataset.config=JSON.stringify(n)}const l=JSON.parse(s.dataset.config);N(s,l),O(),B()},onUpdate:()=>{var t;O(),B(),(t=document.querySelector(".block-footer"))==null||t.classList.remove("d-none"),z()}})},kt=()=>{const e=document.getElementById("canvas");document.querySelectorAll(".grid-2").forEach(t=>{new Sortable(t,{group:{name:"blocks",pull:"clone",put:!1},sort:!1,animation:150,draggable:".block-card",ghostClass:"is-ghost",chosenClass:"is-chosen",dragClass:"is-drag",onStart:s=>{const a=s.item,l=a.dataset.key;if(a.classList.add("is-dragging"),["logo","image-text-bg"].includes(l)||e==null||e.classList.add("show-drop-zone"),!a.dataset.config){const n=F.find(i=>i.key===l);n&&(a.dataset.config=JSON.stringify(n))}},onEnd:s=>{const a=s.item,l=a.dataset.key;a.classList.remove("is-dragging"),["logo","image-text-bg"].includes(l)||(e==null||e.classList.remove("show-drop-zone"),e==null||e.classList.remove("show-drop-first"));const n=tt();!ce&&n!==ct&&($(".block-footer").removeClass("d-none"),z()),ce=!1}})})},J=(e,t)=>{C.isEditing=!0,C.isDirty=!1,C.selectedBlock=e;const s=document.getElementById("blockSettingsWrapper"),a=document.querySelector("#blockSettingsWrapper .left-panel");s.classList.add("editing"),document.getElementById("settings-empty").style.display="none",a&&(a.style.display="none");const l=document.getElementById("settingsPanel");l.style.display="block";const o=e.dataset.type,n=JSON.parse(e.dataset.config);l.innerHTML=ge({type:o,...n}),l._block=e;const i=l.querySelector("#blockContentSlot");i&&(i.innerHTML=W(n)),ke(),$e(),ht(l),He(l,C)},X=({section:e,panelInner:t,mode:s})=>{const a=e.querySelector(".editor-header"),l=e.querySelector(".product-list-wrapper"),o=e.querySelector(".return-arrow"),n=t.querySelector(".schedule-edit-title"),i=t.querySelector(".now-publish"),c=t.querySelector(".online-block-title"),m=t.querySelector(".schedule-create-title"),p=t.querySelector(".schedule-time"),u=document.querySelector(".editor-footer"),b=u==null?void 0:u.querySelector(".editor-footer__btn--publish"),g=u==null?void 0:u.querySelector(".editor-footer__btn--schedule"),x=t.querySelector('input[name="publishType"][value="schedule"]');switch(s){case"edit":a==null||a.classList.add("d-none"),l==null||l.classList.add("d-none"),o==null||o.classList.remove("d-none"),n==null||n.classList.remove("d-none"),i==null||i.classList.add("d-none"),c==null||c.classList.add("d-none"),m==null||m.classList.add("d-none"),b==null||b.classList.remove("d-none"),g==null||g.classList.add("d-none"),x&&(x.checked=!0),p==null||p.classList.remove("d-none");break;case"add":a==null||a.classList.add("d-none"),l==null||l.classList.add("d-none"),o==null||o.classList.remove("d-none"),n==null||n.classList.add("d-none"),i==null||i.classList.add("d-none"),c==null||c.classList.add("d-none"),m==null||m.classList.remove("d-none"),b==null||b.classList.add("d-none"),g==null||g.classList.remove("d-none"),x&&(x.checked=!0),p==null||p.classList.remove("d-none");break;case"back":a==null||a.classList.remove("d-none"),l==null||l.classList.remove("d-none"),n==null||n.classList.add("d-none"),o==null||o.classList.add("d-none"),c==null||c.classList.remove("d-none"),m==null||m.classList.add("d-none"),b==null||b.classList.remove("d-none"),g==null||g.classList.add("d-none");break}};document.addEventListener("click",e=>{const t=e.target.closest("button, .return-arrow");if(!t)return;const s=t.closest(".schedule-section"),a=t.closest(".editor-panel-inner");!s||!a||(t.classList.contains("action-btn-edit")?X({section:s,panelInner:a,mode:"edit"}):t.classList.contains("btn-add-schedule")?X({section:s,panelInner:a,mode:"add"}):t.classList.contains("return-arrow")&&X({section:s,panelInner:a,mode:"back"}))});const wt=()=>{pt(),mt(),ut(),gt(C),bt(),vt(),ft(),yt()};let de=!1;const xt=()=>{de||(de=!0,wt(),$t(),kt(),B())};document.addEventListener("DOMContentLoaded",()=>xt());const St=(e,t=null)=>{const s=document.getElementById("canvas");let a=structuredClone(e);a.instanceId=Date.now();const l=document.createElement("div");N(l,a),t===0?s.prepend(l):s.appendChild(l),s.classList.remove("empty"),B()};
