import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      *//* empty css               *//* empty css                  *//* empty css             *//* empty css                   */$(function(){const s={sendTime:"2024/10/05",sendTimeDetail:"00:00:00",customerName:"黃*白",customerId:"123209150",orderNo:"25030798305540",productNo:"0399134906",moPoint:221},a=Array.from({length:12},(e,o)=>({...s,orderNo:`250307983055${String(o).padStart(2,"0")}`})),c=[],m=()=>{$("#buyMoPoint").addClass("d-none"),$("#moPointRecord").removeClass("d-none"),$(".record-page").removeClass("d-none")},i=()=>{$("#moPointRecord").addClass("d-none"),$("#buyMoPoint").removeClass("d-none"),$(".record-page").addClass("d-none")},p=e=>{const o=$("#giftRecordTbody"),n=e.length,d=$("#recordEndText"),r=$("#emptyState");if($(".table-wrap"),$("#giftRecordCount").text(`已顯示 ${n} 筆，共 ${n} 筆`),o.empty(),!n){r.removeClass("d-none"),d.addClass("d-none");return}r.addClass("d-none");const l=e.map(t=>`
          <tr>
            <td>
              ${t.sendTime}
              <span>${t.sendTimeDetail}</span>
            </td>
            <td>
              ${t.customerName}
              <span>${t.customerId}</span>
            </td>
            <td>${t.orderNo}</td>
            <td>${t.productNo}</td>
            <td>${t.moPoint}</td>
          </tr>
        `).join("");o.html(l),d.removeClass("d-none")};$(".btn-outline-primary-custom").on("click",function(){const e=$(this).data("type");let o=[];e==="hasData"&&(o=a),e==="empty"&&(o=c),p(o),m()}),$("#backToBuy").on("click",i)});
