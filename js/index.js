$(function(){
    // 首頁公告輪播
    var bulletinSwiper = new Swiper('.indexStyle .bulletinArea .bulletinList', {
        slidesPerView: 3,
        spaceBetween: 10,
        slidesPerGroup: 3,
        loop: true,
        speed: 600,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false
        },
        navigation: {
            nextEl: '.indexStyle .bulletinArea .nextBtn',
            prevEl: '.indexStyle .bulletinArea .prevBtn'
        }
    })

    $(".indexStyle .itemList #openDetailFL ").click(function(){
        pubfloatingLayer(detailFL);
        closeFloat()
    })
    //明細浮層
    var detailFL={
        "title":"出貨訂單-第三方",
        "html":`
        <div class="detailCont">
            <p>第三方</p>
            <dl>
                <dt>未印單</dt>
                <dd><span>宅配通：</span><b><a>25</a></b></dd>
                <dd><span>新竹：</span><b>0</b></dd>
                <dd><span>宅急便：</span><b><a>25</a></b></dd>
            </dl>
            <dl>
                <dt>已印單</dt>
                <dd><span>宅配通：</span><b><a>25</a></b></dd>
                <dd><span>新竹：</span><b>0</b></dd>
                <dd><span>宅急便：</span><b><a>25</a></b></dd>
            </dl>
            <dl>
                <dt>更換地址</dt>
                <dd><span>宅配通：</span><b><a>25</a></b></dd>
                <dd><span>新竹：</span><b>0</b></dd>
                <dd><span>宅急便：</span><b><a>25</a></b></dd>
            </dl>
            <dl>
                <dt>已印單</dt>
                <dd><span>宅配通：</span><b><a>25</a></b></dd>
                <dd><span>新竹：</span><b>0</b></dd>
                <dd><span>宅急便：</span><b><a>25</a></b></dd>
            </dl>
        </div>
        `,
        "hideCloseBtn": false,
        "boxWidth":"600",
        "floatClass":'detailFL',
    }
})
