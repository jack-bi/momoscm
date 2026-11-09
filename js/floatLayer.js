function pubfloatingLayer(setting){
    var defSetting = {
      title: 'momo系統訊息',   //標題
      html:'<p>Welcome to momo</p>', //內容
      btnHtml:'', //客製按鈕內容
      id: 'pubfloatingLayerBox',   //id (切版不使用)
      hideCloseBtn: true,    //是否隱藏[X]按鈕
      zindex: 1000,              //浮層的z-index
      boxWidth: 600, //浮層寬度
      floatClass:'',
      scrollTo:$(window).scrollTop(), //關閉浮層後畫面的位置
    };
    $.extend(defSetting, setting);

    /** 寬版置中對齊 **/
    var alignPos = defSetting.boxWidth/2
    var div = $('<div class="pubfloatingLayer" style="width:'+defSetting.boxWidth+'px;left:calc(50% - '+alignPos+'px);z-index:'+defSetting.zindex+'"></div>').attr('id', defSetting.id);
    var innerArea = $('<div class="innerArea"></div>');
    if(defSetting.title !=""){
        div.append('<h4 class="title"><b>' + defSetting.title + '</b><span class="close"></span></h4>');
    }
    //添加客製Class
    if(defSetting.floatClass !=""){
      div.addClass(defSetting.floatClass)
    }
    innerArea.append(defSetting.html);
    
    var bottomBtn = $('<div class="bottomArea"></div>');
    if(defSetting.btnHtml !=""){
      bottomBtn.append(defSetting.btnHtml)
    }else{
      bottomBtn.hide()
    }
    div.append(innerArea);
    div.append(bottomBtn);
    
    $("body").append(div);

    // 隱藏[X]按鈕
    if(defSetting.hideCloseBtn == true) {
      $('.pubfloatingLayer .title .close').hide();
    }
  
    $(".pubfloatingLayer").show();
    $("html, body").css({"height":"100%","overflow-y":"hidden"});
    $('.blackBG').show();
    $('.blackBG').unbind('click');

    $(".pubfloatingLayer h4 .close").click(function(){
        $("html, body").removeAttr("style").animate({scrollTop : defSetting.scrollTo},100);
        $("#" + defSetting.id).remove();
        $('.blackBG').hide();
      });

  }