$('.displayWindow').attr('style','flex-direction:column;overflow:hidden;');
var check=1,show,autoscroll,search_value='',elementClicked;
var histor=new Set([]);
var current_screen="category";$(".cancel").attr("style","display:none");
clearGloss = function(){document.getElementsByClassName("txtGloss")[0].value = "";}
var upper=upperDisplayElem.replace("%titlename%",upperContent.English[0].titlename).replace("%id1%",upperContent.English[0].id1).replace("%id2%",upperContent.English[0].id2).replace("%lang%",upperContent.English[0].select).replace("%cat%",upperContent.English[0].cat).replace("%dic%",upperContent.English[0].dic).replace("%about%",upperContent.English[0].about).replace("%langname1%",upperContent.English[0].lang1).replace("%langname2%",upperContent.English[0].lang2).replace("%search%",upperContent.English[0].Search);$("#upperContainer").append(upper);/*Manas Luthra*/
$('.overlay').hide();
function loadCategories(lang) {
    $(".displayWindow").attr("style", "flex-direction:column;overflow:hidden;");
    for (var i = 0; i < sidebar.elements.length; i++) {
        var formatedMain = mainSidebarElem.replace("%imagesrc%", sidebar.elements[i].imagesrc);
        if(lang=="english"){
            formatedMain = formatedMain.replace("%id%", sidebar.elements[i].id).replace("%cdata%",sidebar.elements[i].listtext_english);
            var formatedSecond = secondSidebarElem.replace("%listtitle%", sidebar.elements[i].listtext_english).replace("%cdata%",sidebar.elements[i].listtext_english);
        }else if(lang=="hindi"){
            formatedMain = formatedMain.replace("%id%", sidebar.elements[i].id).replace("%cdata%",sidebar.elements[i].listtext_hindi);
            var formatedSecond = secondSidebarElem.replace("%listtitle%", sidebar.elements[i].listtext_hindi).replace("%cdata%",sidebar.elements[i].listtext_hindi);
        }else if(lang=="punjabi"){
            formatedMain = formatedMain.replace("%id%", sidebar.elements[i].id).replace("%cdata%",sidebar.elements[i].listtext_punjabi);
            var formatedSecond = secondSidebarElem.replace("%listtitle%", sidebar.elements[i].listtext_punjabi).replace("%cdata%",sidebar.elements[i].listtext_punjabi);
        }
        formatedSecond = formatedSecond.replace("%class%", sidebar.elements[i].class);
        let x = '<div class="animated">' + formatedMain + formatedSecond + '</div>';
        $('.displayWindow').append(x);
    }
}
loadCategories("english");

$(".displayWindow").mousewheel(function(event, delta) {

  this.scrollLeft -= (delta * 10);

  event.preventDefault();

});
var amount = '';

function scroll() {
    $('#display').animate({
        scrollLeft: amount
    }, 100, 'linear',function() {
        if (amount != '') {
            scroll();
        }
    });
}
$('#next-btn').hover(function() {
    clearInterval(autoscroll);
    amount = '+=100';
    scroll();
}, function() {
    amount = '';
});
$('#prev-btn').hover(function() {
    clearInterval(autoscroll);
    amount = '-=100';
    scroll();
}, function() {
    amount = '';
});
function Search(){
document.getElementsByClassName('search__input')[0].onblur=function(){check=1;setTimeout(function(){$("#history").html("");$("#history").attr("style","border: none;"); }, 400);}
document.getElementsByClassName('search__input')[0].onfocus=function(){$("#history").html("");let historyElememt=Array.from(histor);
if(check==1){for(let c=0,i=historyElememt.length;i>=0&&c<6;i--,c++){if(historyElememt[i]!=undefined){console.log(historyElememt[i].sign_Name);$("#history").attr("style","border: solid 0.1vw #4285f4;");let list=historyElem.replace("%data%",historyElememt[i].sign_Name).replace("%class%","history-list").replace("%id%",historyElememt[i].sign_Name);/*Manas Luthra*/
$("#history").append(list);}}}console.log(historyElememt);check=2;
$(".history-list").click(function(){$(".elemName").html("");$("#category").html("");check=1;
v = $(this.children[0]);v=v[0].id;
$(".search__input").val(v);
PerformDictionarySearch(v);
$("#history").html("");
})}
PerformDictionarySearch=function(k){
        $("#category").attr("style","");
        clearInterval(show);
        console.log(k+" is Searched")
        let searchedArr=[];
        $("#history").html("");
        console.log(k);
        let val=k.trim();
        let l=val.length;
        if(l!=0){
        val=val.toLowerCase();
        for(let sample in displayElements.Dictionary) {
            if(typeof displayElements.Dictionary[sample].item_english !="undefined"){
            let value=displayElements.Dictionary[sample].item_english.substr(0,l).toLowerCase();    
            if(value == val) {
            searchedArr.push(displayElements.Dictionary[sample]);
            }}
        }
        if(searchedArr.length!=0){
                $("#category").html("");
               cleardisplaywindow();
               $('.elemName').html("");
               $('#nameImage').hide();
               $('.cancel,#reload-sigml').hide();
               for(let elem in searchedArr) {
                    if(language=="english"){var i =  dictionaryWindowElem.replace("%imagesrc%", searchedArr[elem].imagesrc).replace("%imagesrc%", searchedArr[elem].imagesrc).replace("%data%", searchedArr[elem].item_english)}
                    else if(language=="hindi"){var i = dictionaryWindowElem.replace("%imagesrc%", searchedArr[elem].imagesrc).replace("%imagesrc%", searchedArr[elem].imagesrc).replace("%data%", searchedArr[elem].item_hindi)}
                    else if(language=="punjabi"){var i = dictionaryWindowElem.replace("%imagesrc%", searchedArr[elem].imagesrc).replace("%imagesrc%", searchedArr[elem].imagesrc).replace("%data%", searchedArr[elem].item_punjabi)}
                    let n = "'".concat(searchedArr[elem].item_english).concat("'");
                    i = i.replace("%sigmlurl%", n).replace("%sigmlurl%", n);
                    let x = '<div class="elements Search">' + i + '</div>';
                    $('.displayWindow').append(x);
                }
            }
        }
        console.log(current_screen);
}
document.getElementsByClassName('search__input')[0].addEventListener('keypress',function (e) { if(e.keyCode == 13) {search_value=document.getElementsByClassName('search__input')[0].value;PerformDictionarySearch(search_value);current_screen="search";$("#history").attr("style","border: none;");}});}
function cleardisplaywindow() {$('.displayWindow').html("");}
function setSiGMLURL(e) {
var i = window.location.href,
    n = i.substring(0, i.lastIndexOf("/"));
    console.log(e);
    $("#category").attr("style","width:39.5vw;height:2.5vw;font-size:2vw");
    e=e.toLowerCase();
    return console.log("SiGML: " + e), console.log("Location Dir: " + n), e = n + "/SignFiles/" + e + ".sigml", console.log("URL " + e), e
}
Search();
function listClick(lan){
    $(".side-list").click(function() {
        console.log(lan);
        v=$(this.children[0]),v=$(v[0]).attr("name");a = $(this.children[0]), $(".elemName").html(""), screen.height >= 400 && screen.height <= 749 && $(".second-menu").hide(), $("#reload-sigml").hide(), a = a[0].id, 
        cleardisplaywindow();
        $('#nameImage').attr('src','');
        $('#nameImage').hide();
        console.log(a);
        current_screen=a;
        $("#category").show();
        $("#category").html(v);
        amount = '';
        if(displayElements[a].length>8){$('.direction').show();}
        document.getElementsByClassName('search__input')[0].value = "";
        for (let e = 0; e < displayElements[a].length; e++) {
        if(lan=="english"){
            var i =  displayWindowElemEnglish.replace("%imagesrc%", displayElements[a][e].imagesrc).replace("%imagesrc%", displayElements[a][e].imagesrc).replace("%data%", displayElements[a][e].item_english),
                n = "'".concat(displayElements[a][e].sign_Name).concat("'");
            i = i.replace("%sigmlurl%", n).replace("%sigmlurl%", n);
        }else if(lan=="hindi"){
            var i =  displayWindowElemHindi.replace("%imagesrc%", displayElements[a][e].imagesrc).replace("%imagesrc%", displayElements[a][e].imagesrc).replace("%data%", displayElements[a][e].item_hindi),
                n = "'".concat(displayElements[a][e].item_english).concat("'");
            i = i.replace("%sigmlurl%", n).replace("%sigmlurl%", n);
        }else if(lan=="punjabi"){
            var i =  displayWindowElemPunjabi.replace("%imagesrc%", displayElements[a][e].imagesrc).replace("%imagesrc%", displayElements[a][e].imagesrc).replace("%data%", displayElements[a][e].item_punjabi),
                n = "'".concat(displayElements[a][e].item_english).concat("'");
            i = i.replace("%sigmlurl%", n).replace("%sigmlurl%", n);
        }
            let x = '<div class="elements">' + i + '</div>';
            $('.displayWindow').append(x);
        }
        document.getElementById('display').scrollLeft = 0;
        $(".displayWindow").attr("style", "flex-direction:column;overflow:hidden;")
    });
    $(".side-list-names").click(function() {
        v=$(this.children[0]),v=$(v[0]).attr("name");
        a = $(this.children[0]), screen.height >= 400 && screen.height <= 749 && $(".second-menu").hide(), $(".elemName").html(""), $("#reload-sigml").hide(), a = a[0].className, a = a.split(" ")[1], a = a.slice(0, a.length - 8), 
        cleardisplaywindow();
        $('#nameImage').attr('src','');
        $('#nameImage').hide();;
        console.log(v);
        current_screen=a;
        if(displayElements[a].length>8){$('.direction').show();}
        $("#category").show();
        $("#category").html(v);
        amount = '';
        document.getElementsByClassName('search__input')[0].value = "";
        for (let e = 0; e < displayElements[a].length; e++) {
        if(lan=="english"){
            var i =  displayWindowElemEnglish.replace("%imagesrc%", displayElements[a][e].imagesrc).replace("%imagesrc%", displayElements[a][e].imagesrc).replace("%data%", displayElements[a][e].item_english),
                n = "'".concat(displayElements[a][e].sign_Name).concat("'");
            i = i.replace("%sigmlurl%", n).replace("%sigmlurl%", n);
        }else if(lan=="hindi"){
            var i =  displayWindowElemHindi.replace("%imagesrc%", displayElements[a][e].imagesrc).replace("%imagesrc%", displayElements[a][e].imagesrc).replace("%data%", displayElements[a][e].item_hindi),
                n = "'".concat(displayElements[a][e].item_english).concat("'");
            i = i.replace("%sigmlurl%", n).replace("%sigmlurl%", n);
        }else if(lan=="punjabi"){
            var i =  displayWindowElemPunjabi.replace("%imagesrc%", displayElements[a][e].imagesrc).replace("%imagesrc%", displayElements[a][e].imagesrc).replace("%data%", displayElements[a][e].item_punjabi),
                n = "'".concat(displayElements[a][e].item_english).concat("'");
            i = i.replace("%sigmlurl%", n).replace("%sigmlurl%", n);
        }
            let x = '<div class="elements">' + i + '</div>';
            $('.displayWindow').append(x);
        }
        document.getElementById('display').scrollLeft = 0;
        $(".displayWindow").attr("style", "flex-directi on:column;overflow:hidden;")
    });
}
listClick("english");

var toBeBackElement = null,
    categoryBackElement = null,
    sigmlReload = null;
function startPlayerDictionary(e, i) { 
    console.log(e), screen.height >= 400 && screen.height <= 749 && $(".second-menu").hide()
    $("#ProgElem").show();
    document.getElementById("avat").style.opacity="0.8";
    clearGloss();
    let clickedSrc = $(i).attr('src');
    for(let elem in displayElements) {
        for(let sample in displayElements[elem]) {
            if(clickedSrc.localeCompare(displayElements[elem][sample].imagesrc)==0) {
                if(language=='hindi'){$(".elemName").html(displayElements[elem][sample].item_hindi);}else if(language=='english'){$(".elemName").html(displayElements[elem][sample].item_english);}else if(language=='punjabi'){$(".elemName").html(displayElements[elem][sample].item_punjabi);}
                toBeBackElement = i, categoryBackElement = elem, sigmlReload = e, $("#reload-sigml").show();
                elementClicked = displayElements[elem][sample];
                histor.add(displayElements[elem][sample]);
                break;
            }
        }
    }
    let r = window.location.href;
    return r.substring(0, r.lastIndexOf("/")), e = setSiGMLURL(e), CWASA.playSiGMLURL(e),$(".overlapNameWindow").html("");
}
function startPlayerEnglish(e, i) {
    $('.direction').hide();
    $(".displayWindow").attr("style", "flex-direction:column;overflow:hidden;");
    document.getElementsByClassName('search__input')[0].value = "";
    console.log(e), screen.height >= 400 && screen.height <= 749 && $(".second-menu").hide(), cleardisplaywindow(), $("#imageWindow").removeClass("flipInY");
    $("#ProgElem").show();
    document.getElementById("avat").style.opacity="0.8";
    clearGloss();
    $("#category").html("Category : "+current_screen);
    $('#nameImage').show();
    let clickedSrc = $(i).attr('src');
    console.log(clickedSrc);
    for(let elem in displayElements) {
        for(let sample in displayElements[elem]) {
            if(clickedSrc.localeCompare(displayElements[elem][sample].imagesrc)==0) {
                toBeBackElement = i, categoryBackElement = elem, sigmlReload = e, $("#reload-sigml").show(), $('.cancel').show();
                $('#nameImage').show();
                $('#nameImage').attr('src',displayElements[elem][sample].imagesrc);
                elementClicked = displayElements[elem][sample];
                $(".elemName").html(displayElements[elem][sample].item_english);
                if(displayElements[elem][sample].item_english.trim().length==0){$("#nameWindow").html(displayElements[elem][sample].sign_Name);}
                histor.add(displayElements[elem][sample]);
                console.log(numImages[displayElements[elem][sample].sign_Name]);
                for (let a = 0; a < numImages[displayElements[elem][sample].sign_Name]; a++) {
                    let t = displayWindowElem.replace("%imagesrc%", "./res/screenshots/" + displayElements[elem][sample].sign_Name + "/s" + (a + 1) + ".png");
                    if(numImages[displayElements[elem][sample].sign_Name]!=1){
                    t = t.replace("%data%", "Step " + (a + 1));
                    t = t.replace("%class%","dimension");
                    }else{
                    t = t.replace("%data%", "");
                    t = t.replace("%class%","dimension\"style=\"height:24vw;width:26vw");}
                    let x = '<div class="screenshots">' + t + '</div>';
                    $('.displayWindow').append(x);
                }
                break;
            }
        }
    }
    document.getElementById('display').scrollLeft = 0;

    loopCount = 1;
    show =setInterval(function () {
         if(loopCount-1 == numImages[elementClicked.sign_Name]) {
            clearInterval(this);
         }else {
            $($(".displayWindow").children()[loopCount-1]).attr("style","animation:screenshots 1s;opacity:1;");
            loopCount++;
         }
    },800);
    let r = window.location.href;
return r.substring(0, r.lastIndexOf("/")), e = setSiGMLURL(e), CWASA.playSiGMLURL(e)
}
function startPlayerPunjabi(e, i) {
    $('.direction').hide();
    $(".displayWindow").attr("style", "flex-direction:column;overflow:hidden;");
    document.getElementsByClassName('search__input')[0].value = "";
    console.log(e), screen.height >= 400 && screen.height <= 749 && $(".second-menu").hide(), cleardisplaywindow(), $("#imageWindow").removeClass("flipInY");
    $("#ProgElem").show();
    document.getElementById("avat").style.opacity="0.8";
    clearGloss();
    for(let sample in sidebar.elements){if(current_screen.toLowerCase()==sidebar.elements[sample].listtext_english.toLowerCase()){current_screen_punjabi=sidebar.elements[sample].listtext_punjabi}}$("#category").html("ਸ਼੍ਰੇਣੀ : "+current_screen_punjabi);
    $('#nameImage').show();
    let clickedSrc = $(i).attr('src');
    console.log(clickedSrc);
    for(let elem in displayElements) {
        for(let sample in displayElements[elem]) {
            if(clickedSrc.localeCompare(displayElements[elem][sample].imagesrc)==0) {
                toBeBackElement = i, categoryBackElement = elem, sigmlReload = e, $("#reload-sigml").show(), $('.cancel').show();
                $('#nameImage').show();
                $('#nameImage').attr('src',displayElements[elem][sample].imagesrc);
                elementClicked = displayElements[elem][sample];
                $(".elemName").html(displayElements[elem][sample].item_punjabi);
                if(displayElements[elem][sample].item_punjabi.trim().length==0){$("#nameWindow").html(displayElements[elem][sample].sign_Name);}
                histor.add(displayElements[elem][sample]);
                console.log(numImages[displayElements[elem][sample].sign_Name]);
                for (let a = 0; a < numImages[displayElements[elem][sample].sign_Name]; a++) {
                    let t = displayWindowElem.replace("%imagesrc%", "./res/screenshots/" + displayElements[elem][sample].sign_Name + "/s" + (a + 1) + ".png");
                    if(numImages[displayElements[elem][sample].sign_Name]!=1){
                    t = t.replace("%data%", "Step " + (a + 1));
                    t = t.replace("%class%","dimension");
                    }else{
                    t = t.replace("%data%", "");
                    t = t.replace("%class%","dimension\"style=\"height:24vw;width:26vw");}
                    let x = '<div class="screenshots">' + t + '</div>';
                    $('.displayWindow').append(x);
                }
                break;
            }
        }
    }
    document.getElementById('display').scrollLeft = 0;

    loopCount = 1;
    show =setInterval(function () {
         if(loopCount-1 == numImages[elementClicked.sign_Name]) {
            clearInterval(this);
         }else {
            $($(".displayWindow").children()[loopCount-1]).attr("style","animation:screenshots 1s;opacity:1;");
            loopCount++;
         }
    },800);
    let r = window.location.href;
return r.substring(0, r.lastIndexOf("/")), e = setSiGMLURL(e), CWASA.playSiGMLURL(e)
}
function startPlayerHindi(e, i) {
    $('.direction').hide();
    $(".displayWindow").attr("style", "flex-direction:column;overflow:hidden;");
    document.getElementsByClassName('search__input')[0].value = "";
    console.log(e), screen.height >= 400 && screen.height <= 749 && $(".second-menu").hide(), cleardisplaywindow(), $("#imageWindow").removeClass("flipInY");
    $("#ProgElem").show();
    document.getElementById("avat").style.opacity="0.8";
    clearGloss();
    for(let sample in sidebar.elements){if(current_screen.toLowerCase()==sidebar.elements[sample].listtext_english.toLowerCase()){current_screen_hindi=sidebar.elements[sample].listtext_hindi}}$("#category").html("श्रेणी  : "+current_screen_hindi);
    $('#nameImage').show();
    let clickedSrc = $(i).attr('src');
    console.log(clickedSrc);
    for(let elem in displayElements) {
        for(let sample in displayElements[elem]) {
            if(clickedSrc.localeCompare(displayElements[elem][sample].imagesrc)==0) {
                toBeBackElement = i, categoryBackElement = elem, sigmlReload = e, $("#reload-sigml").show(), $('.cancel').show();
                $('#nameImage').show();
                $('#nameImage').attr('src',displayElements[elem][sample].imagesrc);
                elementClicked = displayElements[elem][sample];
                $(".elemName").html(displayElements[elem][sample].item_hindi);
                if(displayElements[elem][sample].item_hindi.trim().length==0){$("#nameWindow").html(displayElements[elem][sample].sign_Name);}
                histor.add(displayElements[elem][sample]);
                console.log(numImages[displayElements[elem][sample].sign_Name]);
                for (let a = 0; a < numImages[displayElements[elem][sample].sign_Name]; a++) {
                    let t = displayWindowElem.replace("%imagesrc%", "./res/screenshots/" + displayElements[elem][sample].sign_Name + "/s" + (a + 1) + ".png");
                    if(numImages[displayElements[elem][sample].sign_Name]!=1){
                    t = t.replace("%data%", "Step " + (a + 1));
                    t = t.replace("%class%","dimension");
                    }else{
                    t = t.replace("%data%", "");
                    t = t.replace("%class%","dimension\"style=\"height:24vw;width:26vw");}
                    let x = '<div class="screenshots">' + t + '</div>';
                    $('.displayWindow').append(x);
                }
                break;
            }
        }
    }
    document.getElementById('display').scrollLeft = 0;

    loopCount = 1;
    show =setInterval(function () {
         if(loopCount-1 == numImages[elementClicked.sign_Name]) {
            clearInterval(this);
         }else {
            $($(".displayWindow").children()[loopCount-1]).attr("style","animation:screenshots 1s;opacity:1;");
            loopCount++;
         }
    },800);
    let r = window.location.href;
return r.substring(0, r.lastIndexOf("/")), e = setSiGMLURL(e), CWASA.playSiGMLURL(e)
}
function assignCategory(lang) {
    $('.square_btn').unbind("click");
    $('.elemName').html("");
    $('.cancel,#reload-sigml').hide();
    $('.square_btn').click(function() {
        $('.direction').hide();
        $("#category").attr("style","");
        current_screen="category";
        clearInterval(show);
        $('.overlay').hide("");
        $("#category").html("");
        document.getElementById('display').scrollLeft = 0;
        cleardisplaywindow();
        $('.elemName').html("");
        $('#nameImage').hide();
        $('.cancel,#reload-sigml').hide();
        document.getElementsByClassName('search__input')[0].value = "";
        loadCategories(lang);
        listClick(lang);
    });
}
assignCategory("english");
$(".cancel").click(function() {
    z = $("#category").html();$("#category").html(z.substring(z.indexOf(':')+1,z.length));
    $("#category").attr("style","");
    clearInterval(show)
    document.getElementById('display').scrollLeft = 0;
    cleardisplaywindow(), $(".elemName").html(""), $("#reload-sigml").hide(), $(".displayWindowImage").attr("style", "max-height:100px;max-width:100px;");
    $('#nameImage').attr('src','');
    $('#nameImage').hide();
    var backElem = $(toBeBackElement).attr("src");
    console.log(categoryBackElement);
    document.getElementsByClassName('search__input')[0].value = "";
    for (let e = categoryBackElement, i = 0; i < displayElements[e].length; i++) {
        console.log(displayElements[e].length);
        if(displayElements[e].length>8){$('.direction').show();}        
        if(language=="english"){
        n = displayWindowElemEnglish.replace("%imagesrc%", displayElements[e][i].imagesrc).replace("%imagesrc%", displayElements[e][i].imagesrc);
        n = n.replace("%data%", displayElements[e][i].item_english);
        }else if(language=="hindi"){
        n = displayWindowElemHindi.replace("%imagesrc%", displayElements[e][i].imagesrc).replace("%imagesrc%", displayElements[e][i].imagesrc);
        n = n.replace("%data%", displayElements[e][i].item_hindi);
        }else if(language=="punjabi"){
        n = displayWindowElemPunjabi.replace("%imagesrc%", displayElements[e][i].imagesrc).replace("%imagesrc%", displayElements[e][i].imagesrc);
        n = n.replace("%data%", displayElements[e][i].item_punjabi);
        }
        let s, a = "'".concat(displayElements[e][i].sign_Name).concat("'");
        n = n.replace("%sigmlurl%", a).replace("%sigmlurl%", a), x = '<div class="elements">' + n + '</div>', $(".displayWindow").append(x), -1 != backElem.indexOf(displayElements[e][i].imagesrc) ? (toBeBackElement = n, toBeBackElement = $(toBeBackElement).children()[0], console.log(toBeBackElement), (s = $("img[src$='" + displayElements[e][i].imagesrc + "']")).next().attr("style", "color:#00cec9;"), s.parent().parent().attr("style", "background-color:white"), $("#imageWindow").removeClass("flipInY"), setTimeout(function() {
            $("#imageWindow").addClass("flipInY")
        }, 250)) : (console.log("other"), (s = $("img[src$='" + displayElements[e][i].imagesrc + "']")).next().attr("style", "color:white;"), s.parent().attr("style", "background-color:transparent"))
    }
    console.log(backElem);
    let temp = $("img[src$='" + backElem + "']");
    temp.parent().parent().attr("style","background-color:white");
    temp.next().attr("style","color:black;");
    $(".cancel").attr("style","display:none");
}), $("#reload-sigml").click(function() {
    $("#ProgElem").show();
    document.getElementById("avat").style.opacity="0.8";
    clearGloss();
    sigmlURL = setSiGMLURL(sigmlReload), console.log("extra"), CWASA.playSiGMLURL(sigmlURL)
}), $("#reload-sigml").dblclick(function() {});

  window.onload = function (){
    $(".loader").fadeOut()
    $(".bts-popup").delay(100).fadeIn();
  }
  $('.bts-popup-trigger').on('click', function(event){
    event.preventDefault();
    $('.bts-popup').addClass('is-visible');
  });
  $('.bts-popup').on('click', function(event){
    if( $(event.target).is('.bts-popup-close') || $(event.target).is('.bts-popup') ) {
      event.preventDefault();
      $(".bts-popup-container").attr("style","animation: popup-hide 1s;");
      $(this).fadeOut();
    }
  });
  $(document).keyup(function(event){
      if(event.which=='27'){
      $(".bts-popup-container").attr("style","animation: popup-hide 1s;");
      $('.bts-popup').fadeOut();
      }
    });
  allClick=function(){
  $('.link').click(function(){
    clearInterval(show);
    $(".langmenu").animate({width: "toggle"});
    setTimeout(function(){$(".langmenu").attr("style","display:none")},8000)
  })
  $('.ABOUT').click(function(){
    $('.direction').hide();
    $("#category").attr("style","");
    $(".displayWindow").attr("style", "flex-direction:column;overflow:hidden;");
    $('.overlay').hide("");
    current_screen="category";
    document.getElementsByClassName('search__input')[0].value = "";
    clearInterval(show);
    $('.elemName').html("");
    $('#nameImage').hide();
    $('.cancel,#reload-sigml').hide();
    $("#category").html("");
    cleardisplaywindow();
    $('.displayWindow').append(aboutElem);

      $('#project').click(function(){
        $("#category").html("");
        cleardisplaywindow();
        $('.displayWindow').append(projectElem);
      })
      $('#team').click(function(){
        $("#category").attr("style","");
        $("#category").html("");
        cleardisplaywindow();
        $('.displayWindow').append(TeamElem);
        let cube = document.querySelector(".cube"),
        imageButtons = document.querySelector(".image-buttons");
        let cubeImageClass = cube.classList[1];
        imageButtons.addEventListener("click", function (e) {
        let targetNode = e.target.nodeName,targetClass = e.target.className;
        if (targetNode === "INPUT" && targetClass !== cubeImageClass) {cube.classList.replace(cubeImageClass, targetClass);cubeImageClass = targetClass;}});
    })
  })
  $('.Dictionary').click(function(){
        $('.direction').show();
        $("#category").attr("style","");
        current_screen="Dictionary";
        clearInterval(show);
        $("#category").html("");
        $(".elemName").html(""), screen.height >= 400 && screen.height <= 749 && $(".second-menu").hide(), $('.cancel,#reload-sigml').hide();
        cleardisplaywindow();
        $('#nameImage').attr('src','');
        $('#nameImage').hide();
        amount = '';
        document.getElementsByClassName('search__input')[0].value = "";
        $('.overlay').show();
        dictionary();
        document.getElementById('display').scrollLeft = 0;
        $('.DictionaryElem').click(function(){dictionary(this);CWASA.init(initCfg);document.getElementById('display').scrollLeft = 0;})
        })}
  function dictionary(m){
        document.getElementById('display').scrollLeft = 0;
        if(m!=undefined){a=m.children[0];a=a.id;}else(a='A')
            current_screen=a;
            $('.overlay').html("");
            $('.overlay').append(DictionaryElem);
            $(document.getElementById(a)).attr("style","color: #00f;border-radius: 1vw 1vw 2vw 2vw;background: #fff;height: 2.5vw;line-height: 2.34vw;")
            cleardisplaywindow();
            $('.displayWindow').attr("style","flex-direction:column;overflow:hidden;padding: 1.5vw 0 0 0;height: 37.6vw;");
            PerformDictionarySearch(a);
            $('.DictionaryElem').click(function(){dictionary(this);CWASA.init(initCfg);document.getElementById('display').scrollLeft = 0;})
        }
  allClick();