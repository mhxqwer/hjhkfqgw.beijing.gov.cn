﻿//20240815 语音搜索
document.writeln("</script><script defer async type=\"text/javascript\" src=\"//wza.beijing.gov.cn/dist/aria.js?appid=04ec53cf5cade4156972fd532b200d8d\" charset=\"utf-8\" wapForceOldFixed=\"false\" loadData=\"false\" id=\"ariascripts\" ignoreapd=\'1\'></script>");
document.writeln("<style>");
document.writeln("    body{margin: 0;padding: 0;}");
document.writeln("   .clearfix:after{content:\'.\';display:block;height:0;clear:both;visibility:hidden;}");
document.writeln("   .clearfix{zoom:1;}");
document.writeln("   .fr{ float: right}");
document.writeln("   .fl{ float: left;}");
document.writeln("   .header {width: 100%;box-sizing: border-box;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;}");
document.writeln("   .header ul{list-style: none;margin: 0;}");
document.writeln("   .header a{text-decoration: none;}");
document.writeln("   .header .container {width: 1200px;margin: 0 auto;position: relative;box-sizing: border-box;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;}");
document.writeln("   .ty-head {height: 128px;background: #bd1a2d;border-bottom: 1px solid rgba(0,0,0,.3);box-sizing: border-box;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;}");
document.writeln("   .ty-head .container {height: 128px;background: #bd1a2d;border-bottom: 1px solid rgba(0,0,0,.3);}");
document.writeln("   #date1{color: #fff;float: left;margin-top: 10px;display: block;width: 100%;font-size: 14px;text-align:left;}");
document.writeln("   .ty-title {height: 128px;}");
document.writeln("   .m-wza{display:none;}");
document.writeln("   .ty-title .fhsy {height: 64px;display: inline-block;margin-top: 30px;}");
document.writeln("   .ty-title .search-div {display: inline-block;margin-left: 50px;text-align:left;}");
document.writeln("   .ty-title .sdzc {display: inline-block;margin-top: 30px;}");
document.writeln("   .wu-za {display: inline-block;margin-top: 30px;}");
document.writeln("   .wu-za ul{margin: 0;padding: 0;width: 188px;font-size:0;}");
document.writeln("   .wu-za ul li {text-align: left;font: normal 14px/26px \'微软雅黑\';display: inline-block;}");
document.writeln("   .wu-za ul li a {color: #fff;margin: 10px 0 0 15px;}");
document.writeln("   .wu-za ul li:hover a{text-decoration: underline;}");
document.writeln("   #form1 {margin:0;margin-top: 30px;font-size: 0;background: #fff;-moz-border-radius: 2px;-webkit-border-radius: 2px;border-radius:2px;width: 410px;position: relative;}");
document.writeln("   #form1 .Search {width: 360px;height: 50px;padding-left: 10px;background: transparent;border: 0;box-sizing: border-box;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;outline: none;font-size: 16px;text-align:left;color: #999;padding-right:30px;}");
document.writeln("   .Search-btn[type=\'submit\'] {display: inline-block;vertical-align: top;width: 50px;height: 50px;border: 0;color: #fff;margin-left: -4px;background: url(\'//kfqgw.beijing.gov.cn/images/search_gary_20210326.png\') no-repeat center center;}");
document.writeln("   .radio {display: inline-block;margin-top: 7px;}");
document.writeln("   .radio > input {display: none;}");
document.writeln("   .radio > label {position: relative;margin-right: 25px;font-size: 12px;vertical-align: baseline;color: #fff;display:inline-block}");
document.writeln("   .radio > label::before {display: inline-block;content: \'\';width: 9px;height: 9px;border-radius: 50%;border: 1px solid #bd1a2d;margin-right: 6px;background: transparent;border: 1px solid #fff;}");
document.writeln("   .radio > input:checked + label::before {width: 9px;height: 9px;background-color: #fff;}  ");
document.writeln("   .nav {height: 60px;background: #bd1a2d;position: relative;}");
document.writeln("   .nav.mb40{margin-bottom: 40px;}");
document.writeln("   .nav .container{height: 60px;background: #bd1a2d;position: static;}");
document.writeln("   .nav > ul {font-size: 0;padding: 0;}");
document.writeln("   .nav > ul >li {width: auto;text-align: center;display: inline-block;font: bold 24px/58px \'微软雅黑\';padding:0 41px;}");
document.writeln("   .nav > ul > li a {color: #fff;display: inline-block;}");
document.writeln("   .nav > ul > li:hover > a {border-bottom: 2px solid #dbbc83;}");
document.writeln("   .nav > ul > li.active > a {border-bottom: 2px solid #dbbc83;color: #DBBC83;}");
document.writeln("   .nav > ul > li:hover .nav_second,.nav > ul > li.active .nav_second{display: block;}");
document.writeln("   .nav_second{width: 100%;position: absolute;left: 0;top: 60px;display: none;height:40px;line-height:40px;background: #FFF6E2;border-bottom: 1px solid #F7CE8C;}");
document.writeln("   .nav_second ul{text-align: center;width: 100%;height: 40px;font-size: 0;}");
document.writeln("   .nav_second ul li{font:normal 16px/40px \'Microsoft YaHei\';width: auto;margin: 0;height: 40px;display: inline-block;margin-right: 30px;}");
document.writeln("   .nav_second ul li a{color: #fff;display: block;color: #333;}");
document.writeln("   .nav_second ul li:hover a{text-decoration: underline;}");
document.writeln("    /* 语音搜索 */");
document.writeln("    .voice-draw {display: none;position: fixed;top: 0;left: 0;width: 100%;height: 100%;background: rgba(0, 0, 0, .3);z-index:999;}");
document.writeln("    .voice-div {padding: 20px;box-sizing: border-box;width: 680px;height: 389px;background: #FFFFFF;border-radius: 10px;position: fixed;top: 0;left: 0;right: 0;bottom: 0;margin: auto;}");
document.writeln("    .voice-head {text-align: right;margin-bottom: 30px;}");
document.writeln("    .voice-head .voice-close {display: inline-block;width: 20px;height: 20px;background: url(\'https://kfqgw.beijing.gov.cn/images/speech/voice-close.png\') no-repeat;background-size: 100% 100%;cursor: pointer;}");
document.writeln("    .voice-con {height: 100px;font-size: 24px;line-height: 32px;text-align: center;}");
document.writeln("    .voice-tips-time {color: #CCCCCC;}");
document.writeln("    .identify-txt {max-height: 160px;overflow-y: scroll;}");
document.writeln("    .identify-txt::-webkit-scrollbar {display: none;}");
document.writeln("    .voice-button {text-align: center;}");
document.writeln("    .voice-button-png {display: inline-block;width: 100px;height: 100px;background: url(\'https://kfqgw.beijing.gov.cn/images/speech/voice-button-png.png\') no-repeat;background-size: 100% 100%;cursor: pointer;}");
document.writeln("    .voice-button-gif {display: inline-block;width: 100px;height: 100px;background: url(\'https://kfqgw.beijing.gov.cn/images/speech/voice-button-gif.gif\') no-repeat;background-size: 100% 100%;cursor: pointer;}");
document.writeln("    .noIdentify-txt, .voice-button-png {display: none;}");
document.writeln("    .inp {display: flex;align-items: center;position: relative;width: fit-content;}");
document.writeln("    #page_search {border-radius: 8px;width: 400px;padding-left: 20px;font-size: 16px;height: 40px;line-height: 40px;background: #fff;padding-right: 35px;}");
document.writeln("    .voiceBtn {position: absolute;width: 12px;height: 20px;background: url(\'https://kfqgw.beijing.gov.cn/images/speech/voice.png\') no-repeat;background-size: 100% 100%;right: 50px;top:15px;cursor: pointer;}");
document.writeln("    /* 语音搜索 */");
document.writeln("   @media only screen and (max-width: 414px){");
document.writeln("       .container{width: 100%;padding: 0 15px;}");
document.writeln("       .header .container{width: 100%;}");
document.writeln("       .ty-head .container{height: auto;}");
document.writeln("       .ty-head{height: auto;}");
document.writeln("       .ty-title{height: auto; position: relative;}");
document.writeln("       .ty-title .m-wza{display:block;position: absolute;top:10px;right:0;height:16px;overflow: hidden;}");
document.writeln("       .ty-title .m-wza a{color:#fff;font-size:14px;line-height:16px;}");
document.writeln("       .ty-title .fhsy{width: 100%;}");
document.writeln("       .ty-title .fhsy img{width:100%;height: auto;}");
document.writeln("       .ty-title .search-div{margin-left: 0;margin-bottom: 20px;width: 100%;}");
document.writeln("       .ty-title .search-div.fl{float: none;}");
document.writeln("       #form1{width: 100%;margin: 0 auto;}");
document.writeln("       #form1 .Search{width: 85%;}");
document.writeln("       .Search-btn[type=\'submit\']{width: 15%;}");
document.writeln("       .wu-za,.ty-title .sdzc{display: none;}");
document.writeln("       .nav{height: auto;}");
document.writeln("       .nav.mb40{margin-bottom: 0;}");
document.writeln("       .nav .container{height: auto;}");
document.writeln("       .nav > ul > li{width: 33.3%;font-size: 18px;line-height: 42px;font-weight: normal;padding: 0;}");
document.writeln("       .nav > ul .sy_dn,.nav_second,.nav > ul > li.active .nav_second{display: none;}");
document.writeln("        .voice-div{padding:2%;width:100%;height: 289px;}");
document.writeln("        .voice-con{height:80px;}");
document.writeln("        .voiceBtn{right: 17%;}");
document.writeln("   }");
document.writeln("</style>");
document.writeln("<div class=\'header\'>");
document.writeln("    <div class=\'ty-head\'>");
document.writeln("        <div class=\'container\'>");
document.writeln("            <div class=\'ty-title\'>");
document.writeln("            <div class=\'m-wza\'>");
document.writeln("              <a href=\"javascript:void(0)\" onclick=\"aria.oldFixedStart()\">适老版</a>");
document.writeln("            </div>");
document.writeln("                <a href=\'//kfqgw.beijing.gov.cn/\' class=\'fhsy fl\' title=\'北京经济技术开发区\'><img src=\'//kfqgw.beijing.gov.cn/images/ty_title_20210326.png\' alt=\'北京经济技术开发区\' ignoreapd=\'1\' /></a>");
document.writeln("                    <!-- 搜索 -->");
document.writeln("                    <div class=\'search-div fl\'>");
document.writeln("                        <form method=\'get\' name=\'search\' onsubmit=\'return SubmitSearchForm1()\' target=\'_blank\' id=\'form1\'>");
document.writeln("                            <input id=\'qt1\' autocomplete=\'off\' name=\'qt\' onblur=\"if (value ==\'\'){value=\'请输入您要搜索的关键词\'}\" onfocus=\"if (value ==\'请输入您要搜索的关键词\'){value =\'\'}\" type=\'text\' value=\'请输入您要搜索的关键词\' class=\'Search\' title=\'请输入您要搜索的关键词\' />");
document.writeln("<div class=\'voiceBtn\'></div>");
document.writeln("                            <input type=\'submit\' name=\'button\' id=\'button\' class=\'Search-btn search-all-btn\' value=\'\' />");
document.writeln("                        </form>");
document.writeln("                        <div class=\'radio\'>");
document.writeln("                            <input name=\'Fruit\' type=\'radio\' value=\'0\' id=\'owner\' checked /><label for=\'owner\'>搜本网</label>");
document.writeln("                            <input name=\'Fruit\' type=\'radio\' value=\'1\' id=\'total\' /><label for=\'total\'>一网通查</label>");
document.writeln("                        </div>");
document.writeln("                    </div>");
document.writeln("                    <!-- 搜索 -->");
document.writeln("                    <div class=\'wu-za fr\'>");
document.writeln("                        <ul>");
document.writeln("                            <li><a href=\'//kfqgw.beijing.gov.cn/sykfq/dlgrzxkfq/\' target=\'_blank\' title=\'登录个人中心\'>登录个人中心</a></li>");
document.writeln("                            <li><a href=\'http://www.beijingetown.com.cn/\' target=\'_blank\' title=\'English\'>EN</a></li>");
document.writeln("                            <li><a id=\'StranLink\' href=\'javascript:StranBody()\' title=\'點擊浏覽繁體中文網頁\'>繁體</a></li>");
document.writeln("                            <li><a href=\'//kfqgw.beijing.gov.cn/sykfq/znwd/\' target=\'_blank\' title=\'智能问答\'>智能问答</a></li> ");
document.writeln("                            <li><a href=\"javascript:;\" onclick=\"aria.start()\">无障碍</a></li>");
document.writeln("                            <li><a href=\'//kfqgw.beijing.gov.cn/sykfq/ydb/\' target=\'_blank\' title=\'移动版\'>移动版</a></li>");

document.writeln("                        </ul>");
document.writeln("                    </div>");
document.writeln("                    <a href=\'https://www.beijing.gov.cn/\' class=\'sdzc fr\' target=\'_blank\' title=\'首都之窗\'><img src=\'//kfqgw.beijing.gov.cn/images/sdzc_white_20210326.png\' alt=\'首都之窗\' ignoreapd=\'1\' /></a>");
document.writeln("            </div>");
document.writeln("        </div>");
document.writeln("    </div>");
document.writeln("    <div class=\'nav\'>");
document.writeln("        <ul class=\'container\'>");
document.writeln("            <li class=\'active sy_dn\'><a href=\'//kfqgw.beijing.gov.cn/\' target=\'_blank\' title=\'首页\'>首页</a></li>");
document.writeln("            <li>");
document.writeln("              <a href=\'//kfqgw.beijing.gov.cn/zwgkkfq/\' target=\'_blank\' title=\'政务公开\'>政务公开</a>");
document.writeln("              <div class=\'nav_second\'>");
document.writeln("                <ul>");
document.writeln("                    <li><a href=\'//kfqgw.beijing.gov.cn/zwgkkfq/jgzn/' target=\'_blank\' title=\'职权信息\'>职权信息  </a></li>");
document.writeln("                    <li><a href=\'//kfqgw.beijing.gov.cn/zwgkkfq/zfxxgk/\' target=\'_blank\' title=\'政府信息公开\'>政府信息公开</a></li>");
document.writeln("                    <li><a href=\'//kfqgw.beijing.gov.cn/zwgkkfq/xwzx/\' target=\'_blank\' title=\'新闻中心\'>新闻中心</a></li>");
document.writeln("                    <li><a href=\'//kfqgw.beijing.gov.cn/zwgkkfq/2024zcwj/\' target=\'_blank\' title=\'政策文件\'>政策文件</a></li>");
document.writeln("                    <li><a href=\'//kfqgw.beijing.gov.cn/zwgkkfq/zdlyxxgk/\' target=\'_blank\' title=\'重点领域信息公开\'>重点领域信息公开</a></li>");
document.writeln("                    <li><a href=\'//kfqgw.beijing.gov.cn/zwgkkfq/djgz/\' target=\'_blank\' title=\'党建工作\'>党建工作</a></li>");
document.writeln("                    <li><a href=\'//kfqgw.beijing.gov.cn/zwgkkfq/rsxx/\' target=\'_blank\' title=\'人才服务\'> 人才服务</a></li>");
document.writeln("                    <li><a href=\'//kfqgw.beijing.gov.cn/zwgkkfq/ghjh/fzgh/\' target=\'_blank\' title=\'发展规划\'>发展规划</a></li>");
document.writeln("                    <li><a href=\'//kfqgw.beijing.gov.cn/zwgkkfq/sj/tjsj/\' target=\'_blank\' title=\'统计数据\'>统计数据</a></li>");
document.writeln("                    <li><a href=\'//kfqgw.beijing.gov.cn/zwgkkfq/qwjd/\' target=\'_blank\' title=\'权威解读\'>权威解读</a></li>");
document.writeln("                    <li><a href=\'//kfqgw.beijing.gov.cn/zwgkkfq/tj/\' target=\'_blank\' title=\'图解\'>图解</a></li>");
document.writeln("                    <li><a href=\'//kfqgw.beijing.gov.cn/zwgkkfq/bmfu/\' target=\'_blank\' title=\'便民服务\'>便民服务</a></li>");
document.writeln("                </ul>");
document.writeln("              </div>");
document.writeln("            </li>");
document.writeln("            <li>");
document.writeln("              <a href=\'https://banshi.beijing.gov.cn/?locationCode=110115403000\' target=\'_blank\' title=\'政务服务\'>政务服务</a>");
document.writeln("            </li>");
document.writeln("            <li>");
document.writeln("              <a href=\'https://zcdx.kfqgw.beijing.gov.cn/#/home\' target=\'_blank\' title=\'政策兑现\'>政策兑现</a>");
document.writeln("            </li>");
document.writeln("            <li>");
document.writeln("              <a href=\'//kfqgw.beijing.gov.cn/zmhdkfq/\' target=\'_blank\' title=\'政民互动\'>政民互动</a>");
document.writeln("              <div class=\'nav_second\'>");
document.writeln("                <ul>");
document.writeln("                    <li><a href=\'//kfqgw.beijing.gov.cn/zmhdkfq/zxts/\' target=\'_blank\' title=\'咨询投诉\'>咨询投诉</a></li>");
document.writeln("                    <li><a href=\'//kfqgw.beijing.gov.cn/zmhdkfq/xfjb/\' target=\'_blank\' title=\'信访举报\'>信访举报</a></li>");
document.writeln("                    <li><a href=\'//kfqgw.beijing.gov.cn/zmhdkfq/cydh/\' target=\'_blank\' title=\'常用电话\'>常用电话</a></li>");
document.writeln("                    <li><a href=\'//kfqgw.beijing.gov.cn/zmhdkfq/yjzj/\' target=\'_blank\' title=\'意见征集\'>意见征集</a></li>");
document.writeln("                    <li><a href=\'//kfqgw.beijing.gov.cn/zmhdkfq/zxft/\' target=\'_blank\' title=\'在线访谈\'>在线访谈</a></li>");
document.writeln("                    <li><a href=\'//kfqgw.beijing.gov.cn/zmhdkfq/cjwt/\' target=\'_blank\' title=\'常见问题\'> 常见问题</a></li>");
document.writeln("                </ul>");
document.writeln("              </div>");
document.writeln("            </li>");
document.writeln("            <li>");
document.writeln("              <a href=\'//kfqgw.beijing.gov.cn/cxyzkfq/\' target=\'_blank\' title=\'创新亦庄\'>创新亦庄</a>");
document.writeln("              <div class=\'nav_second\'>");
document.writeln("                <ul>");
document.writeln("                    <li><a href=\'//kfqgw.beijing.gov.cn/cxyzkfq/kjcgzhczq/\' target=\'_blank\' title=\'科技成果转化\'>科技成果转化</a></li>");
document.writeln("                    <li><a href=\'//kfqgw.beijing.gov.cn/cxyzkfq/jscxsfq/\' target=\'_blank\' title=\'技术创新\'>技术创新</a></li>");
document.writeln("                    <li><a href=\'//kfqgw.beijing.gov.cn/cxyzkfq/shggxxq/\' target=\'_blank\' title=\'深化改革\'> 深化改革</a></li>");
document.writeln("                    <li><a href=\'//kfqgw.beijing.gov.cn/cxyzkfq/yjyydlscq/\' target=\'_blank\' title=\'宜业宜居\'>宜业宜居</a></li>");
document.writeln("                </ul>");
document.writeln("              </div>");
document.writeln("            </li>");
document.writeln("            <li>");
document.writeln("              <a href=\'//kfqgw.beijing.gov.cn/rmxy/\' target=\'_blank\' title=\'融媒星云\'>融媒星云</a>");
document.writeln("            </li>");
document.writeln("          </ul>");
document.writeln("    </div>");
document.writeln("</div>");
// 语音搜索
document.writeln("<div class=\'voice-draw\'>");
document.writeln("    <div class=\'voice-div\'>");
document.writeln("        <div class=\'voice-head\'>");
document.writeln("            <span class=\'voice-close\'></span>");
document.writeln("        </div>");
document.writeln("        <div class=\'voice-con\'>");
document.writeln("            <div class=\'init-txt\'>");
document.writeln("                <span class=\'voice-tips-txt\'>我在听，请说话</span><span class=\'voice-tips-time\'>(10s)</span>");
document.writeln("            </div>");
document.writeln("            <div class=\'noIdentify-txt\'>");
document.writeln("                <span class=\'voice-tips-txt\'>抱歉，没听清，请再说一遍吧</span>");
document.writeln("            </div>");
document.writeln("            <div class=\'identify-txt\'>");
document.writeln("                <span class=\'voice-tips-txt\' id=\'voice-search-result\'></span>");
document.writeln("            </div>");
document.writeln("        </div>");
document.writeln("        <div class=\'voice-button\'>");
document.writeln("            <span class=\'voice-button-png\' id=\'btn_control\'></span>");
document.writeln("            <span class=\'voice-button-gif\'></span>");
document.writeln("        </div>");
document.writeln("    </div>");
document.writeln("</div>");
// 语音搜索
document.writeln("<script type=\'text/javascript\' src=\'//kfqgw.beijing.gov.cn/images/qs_zhcn.js\' ignoreapd=\'1\'></script>");
document.writeln("<script type=\'text/javascript\'>");
document.writeln("    //导航高亮");
document.writeln("    var allurl = window.location.pathname.substring(1, 5);");
document.writeln("    if (allurl == \'\') {$(\'.nav > ul > li\').removeClass(\'active\');$(\'.nav > ul > li:eq(0)\').addClass(\'active cur\');}");
document.writeln("    if (allurl == \'zwgk\') {$(\'.nav > ul > li\').removeClass(\'active\');$(\'.nav > ul > li:eq(1)\').addClass(\'active cur\');}");
document.writeln("    if (allurl == \'zmhd\') {$(\'.nav > ul > li\').removeClass(\'active\');$(\'.nav > ul > li:eq(4)\').addClass(\'active cur\');}");
document.writeln("    if (allurl == \'cxyz\') {$(\'.nav > ul > li\').removeClass(\'active\');$(\'.nav > ul > li:eq(5)\').addClass(\'active cur\');}");
document.writeln("    if (allurl == \'rmxy\') {$(\'.nav > ul > li\').removeClass(\'active\');$(\'.nav > ul > li:eq(6)\').addClass(\'active cur\');}");
document.writeln("    if($(\'.cur\').find(\'.nav_second\').length != 0) {");
document.writeln("        $(\'.nav\').addClass(\'mb40\');");
document.writeln("    }");
document.writeln("    $(\'.nav > ul > li\').hover(function(){");
document.writeln("	    $(\'.nav > ul > li\').removeClass(\'active\');");
document.writeln("	    $(this).addClass(\'active\');");
document.writeln("	    if($(this).find(\'.nav_second\').length == 0) {");
document.writeln("            $(\'.nav\').removeClass(\'mb40\');");
document.writeln("        }else {");
document.writeln("            $(\'.nav\').addClass(\'mb40\');");
document.writeln("        }");
document.writeln("    },function(){");
document.writeln("	    $(\'.nav > ul > li\').removeClass(\'active\');");
document.writeln("	    if($(\'.nav li\').hasClass(\'cur\')){ ");
document.writeln("            $(\'.cur\').addClass(\'active\');");
document.writeln("        }");
document.writeln("	    if($(\'.cur\').find(\'.nav_second\').length == 0) {");
document.writeln("            $(\'.nav\').removeClass(\'mb40\');");
document.writeln("        }");
document.writeln("	    else {");
document.writeln("            $(\'.nav\').addClass(\'mb40\');");
document.writeln("        }");
document.writeln("    });");
document.writeln("</script>");
document.writeln("<script type=\'text/javascript\' src=\'https://kfqgw.beijing.gov.cn/images/speech/speech.umd.js\'></script>");
document.writeln("<script type=\'text/javascript\' src=\'https://kfqgw.beijing.gov.cn/images/speech/speech.js\'></script>");
function SubmitSearchForm1() {
    var keyword_fulltext1 = document.getElementById('qt1').value;
    var list1 =  $("input:radio[name='Fruit']:checked").val();
    if (keyword_fulltext1 == '请输入您要搜索的关键词') {
        keyword_fulltext1 = '';
    }
    if (list1 == 0) {
        _vaq.push(['trackSiteSearch', keyword_fulltext1, 'search', '1']);
        var url = '//kfqgw.beijing.gov.cn/so/s?qt=' + encodeURIComponent(keyword_fulltext1);
        window.open(url);
        return false;
    }
    if (list1 == 1) {
        _vaq.push(['trackSiteSearch', keyword_fulltext1, 'tongcha', '1']);
        var url = 'https://www.beijing.gov.cn/so/s?qt=' + encodeURIComponent(keyword_fulltext1);
        window.open(url);
        return false;
    }
} 