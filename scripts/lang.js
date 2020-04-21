
var language ="english";
function playSigml(e) {
    CWASA.playSiGMLURL(e)
}
$(".cancel").attr("style","display:none");
Hindi=function(){
    allClick();
    clearInterval(show);
    $('.speedtxt').html(upperContent.Hindi[0].speed);$('.bttnSpeedReset').html(upperContent.Hindi[0].reset);
    var upper=upperDisplayElem.replace("%titlename%",upperContent.Hindi[0].titlename).replace("%id1%",upperContent.Hindi[0].id1).replace("%id2%",upperContent.Hindi[0].id2).replace("%lang%",upperContent.Hindi[0].select).replace("%cat%",upperContent.Hindi[0].cat).replace("%dic%",upperContent.Hindi[0].dic).replace("%about%",upperContent.Hindi[0].about).replace("%langname1%",upperContent.Hindi[0].lang1).replace("%langname2%",upperContent.Hindi[0].lang2).replace("%search%",upperContent.Hindi[0].Search);$("#upperContainer").append(upper);
    $('#title-name').attr("style","margin:0.7vw 0 0 23vw;");$('.title img').attr("style","margin-left:14vw;");Search();$('.overlay').hide();
    document.getElementsByClassName('search__input')[0].value = "";
    document.getElementById('display').scrollLeft = 0;
    $("#elemName").val("");
    language="hindi";
    assignCategory("hindi");
    $('.overlay').hide();
    $("#nameWindow").html(""), $(".displayWindow").html(""), $("#reload-sigml,.cancel").hide(), $("#title-name span").html("चाइल्ड एनसाइन: दिव्यंगजन के लिए एक प्रेस्चोलर सहायक तकनीक"), cleardisplaywindow(), $("#reload-sigml").unbind("click");
    $('#nameImage').attr('src','');
    $('#nameImage').hide();
    if(current_screen=="search"){
    PerformDictionarySearch(search_value)
    }else if(current_screen!="category"&&current_screen!=undefined&&current_screen.length!=1){
    $("#nameWindow").html(""), screen.height >= 400 && screen.height <= 749 && $(".second-menu").hide(), $("#reload-sigml").hide()
        cleardisplaywindow();
        $('#nameImage').attr('src','');
        $('#nameImage').hide();
        console.log(current_screen);
        for(let sample in sidebar.elements){if(current_screen.toLowerCase()==sidebar.elements[sample].listtext_english.toLowerCase()){var current_screen_hindi=sidebar.elements[sample].listtext_hindi;$("#category").html(current_screen_hindi);}}
        
        amount = '';
        console.log("Hindi");
        document.getElementsByClassName('search__input')[0].value = "";
        for (let e = 0; e < displayElements[current_screen].length; e++) {
            let i  = displayWindowElemHindi.replace("%imagesrc%", displayElements[current_screen][e].imagesrc).replace("%imagesrc%", displayElements[current_screen][e].imagesrc).replace("%data%", displayElements[current_screen][e].item_hindi),
                n = "'".concat(displayElements[current_screen][e].item_english).concat("'");
            i = i.replace("%sigmlurl%", n).replace("%sigmlurl%", n);
            let x = '<div class="elements">' + i + '</div>';
            $('.displayWindow').append(x);
        }

        document.getElementById('display').scrollLeft = 0;
        $(".displayWindow").attr("style", "flex-direction:column;overflow:hidden;");
    }else if(current_screen.length==1){
    PerformDictionarySearch(current_screen);
    $('.overlay').show();
    $(document.getElementById(current_screen)).attr("style","color: #00f;border-radius: 1vw 1vw 2vw 2vw;background: #fff;height: 2.5vw;line-height: 2.34vw;")
    $('.DictionaryElem').click(function(){dictionary(this);})
    }else{loadCategories("hindi");
    $('.side-list,.side-list-names,.cancel,#reload-sigml').unbind("click");
    $(".side-list").click(function() {
        v=$(this.children[0]),v=$(v[0]).attr("name"), a = $(this.children[0]), $("#nameWindow").html(""), screen.height >= 400 && screen.height <= 749 && $(".second-menu").hide(), $("#reload-sigml").hide(), a = a[0].id, 
        cleardisplaywindow();
        $('#nameImage').attr('src','');
        $('#nameImage').hide();
        console.log(a);
        current_screen=a;
		if(displayElements[a].length>8){$('.direction').show();}
        $("#category").html(v);
        amount = '';
        console.log("Hindi");
        document.getElementsByClassName('search__input')[0].value = "";
        for (let e = 0; e < displayElements[a].length; e++) {
            let i =  displayWindowElemHindi.replace("%imagesrc%", displayElements[a][e].imagesrc).replace("%imagesrc%", displayElements[a][e].imagesrc).replace("%data%", displayElements[a][e].item_hindi),
                n = "'".concat(displayElements[a][e].item_english).concat("'");
            i = i.replace("%sigmlurl%", n).replace("%sigmlurl%", n);
            let x = '<div class="elements">' + i + '</div>';
            $('.displayWindow').append(x);
        }
        document.getElementById('display').scrollLeft = 0;
        $(".displayWindow").attr("style", "flex-direction:column;overflow:hidden;")
    });
    $(".side-list-names").click(function() {
        v=$(this.children[0]),v=v[0].firstChild.data, a = $(this.children[0]), screen.height >= 400 && screen.height <= 749 && $(".second-menu").hide(), $("#nameWindow").html(""), $("#reload-sigml").hide(), a = a[0].className, a = a.split(" ")[1], a = a.slice(0, a.length - 8), 
        cleardisplaywindow();
        $('#nameImage').attr('src','');
        $('#nameImage').hide();
        current_screen=a;
		if(displayElements[a].length>8){$('.direction').show();}
        console.log(v);
        $("#category").html(v);
        amount = '';
        document.getElementsByClassName('search__input')[0].value = "";
        for (let e = 0; e < displayElements[a].length; e++) {
            let i =  displayWindowElemHindi.replace("%imagesrc%", displayElements[a][e].imagesrc).replace("%imagesrc%", displayElements[a][e].imagesrc).replace("%data%", displayElements[a][e].item_hindi),
                n = "'".concat(displayElements[a][e].item_english).concat("'");
            i = i.replace("%sigmlurl%", n).replace("%sigmlurl%", n);
            let x = '<div class="elements">' + i + '</div>';
            $('.displayWindow').append(x);
        }
        document.getElementById('display').scrollLeft = 0;
        $(".displayWindow").attr("style", "flex-direction:column;overflow:hidden;")
    });}
    $(".cancel").click(function() {
        z = $("#category").html();$("#category").html(z.substring(z.indexOf(':')+1,z.length));
        $("#category").attr("style","");
        clearInterval(show)
        document.getElementById('display').scrollLeft = 0;
        $('.cancel').hide();
        screen.height >= 400 && screen.height <= 749 && ($(".second-menu").hide(), $(".second-menu").remove()), cleardisplaywindow(), $("#nameWindow").html(""), $("#reload-sigml").hide(), $(".displayWindowImage").attr("style", "max-height:100px;max-width:100px;");
        $('#nameImage').attr('src','');
        $('#nameImage').hide();;
        let backElem = $(toBeBackElement).attr("src");
        document.getElementsByClassName('search__input')[0].value = "";
        for (let e = categoryBackElement, i = 0; i < displayElements[e].length; i++) {
            let n = displayWindowElemHindi.replace("%imagesrc%", displayElements[e][i].imagesrc);
            n = n.replace("%data%", displayElements[e][i].item_hindi);
            let s, a = "'".concat(displayElements[e][i].item_english).concat("'");
            n = n.replace("%sigmlurl%", a), x = '<div class="elements">' + n + '</div>', $(".displayWindow").append(x), -1 != backElem.indexOf(displayElements[e][i].imagesrc) ? (toBeBackElement = n, toBeBackElement = $(toBeBackElement).children()[0], console.log(toBeBackElement), (s = $("img[src$='" + displayElements[e][i].imagesrc + "']")).next().attr("style", "color:#00cec9;"), s.parent().parent().attr("style", "background-color:white"), $("#imageWindow").removeClass("flipInY"), setTimeout(function() {
                $("#imageWindow").addClass("flipInY"), $(".cancel").attr("style", "display:none")
            }, 250)) : (console.log("other"), (s = $("img[src$='" + displayElements[e][i].imagesrc + "']")).next().attr("style", "color:white;"), s.parent().attr("style", "background-color:transparent"))
        }
        console.log(backElem);
        let temp = $("img[src$='" + backElem + "']");
        temp.parent().parent().attr("style","background-color:white");
        temp.next().attr("style","color:black;");
}), $("#reload-sigml").click(function() {
    $("#Prog_Alert").append(ProgElem);
    document.getElementById("avat").style.opacity="0.8";
    clearGloss();
    sigmlURL = setSiGMLURL(sigmlReload), console.log("extra"), CWASA.playSiGMLURL(sigmlURL)
}), $("#reload-sigml").dblclick(function() {});
$("#button-hindi").click(function() {$("#upperContainer").html("");Hindi();allClick();});
$("#button-punjabi").click(function() {$("#upperContainer").html("");Punjabi();allClick();});
$("#button-english").click(function() {$("#upperContainer").html("");English();allClick();});
}
Punjabi=function(){
    allClick();clearInterval(show);
    $('.speedtxt').html(upperContent.Punjabi[0].speed);$('.bttnSpeedReset').html(upperContent.Punjabi[0].reset);
    var upper=upperDisplayElem.replace("%titlename%",upperContent.Punjabi[0].titlename).replace("%id1%",upperContent.Punjabi[0].id1).replace("%id2%",upperContent.Punjabi[0].id2).replace("%lang%",upperContent.Punjabi[0].select).replace("%cat%",upperContent.Punjabi[0].cat).replace("%dic%",upperContent.Punjabi[0].dic).replace("%about%",upperContent.Punjabi[0].about).replace("%langname1%",upperContent.Punjabi[0].lang1).replace("%langname2%",upperContent.Punjabi[0].lang2).replace("%search%",upperContent.Punjabi[0].Search);$("#upperContainer").append(upper);
    $('#title-name').attr("style","margin:0.7vw 0 0 23vw;");$('.title img').attr("style","margin-left:14vw;");Search();$('.overlay').hide();
    document.getElementsByClassName('search__input')[0].value = "";
    document.getElementById('display').scrollLeft = 0;
    $("#elemName").val("");
    language="punjabi";
    assignCategory("punjabi");
    $('.overlay').hide();
    $("#nameWindow").html(""), $(".displayWindow").html(""), $("#reload-sigml,.cancel").hide(), $("#title-name span").html("चाइल्ड एनसाइन: दिव्यंगजन के लिए एक प्रेस्चोलर सहायक तकनीक"), cleardisplaywindow(), $("#reload-sigml").unbind("click");
    $('#nameImage').attr('src','');
    $('#nameImage').hide();
    if(current_screen=="search"){
    PerformDictionarySearch(search_value)
    }else if(current_screen!="category"&&current_screen!=undefined&&current_screen.length!=1){
    $("#nameWindow").html(""), screen.height >= 400 && screen.height <= 749 && $(".second-menu").hide(), $("#reload-sigml").hide()
        cleardisplaywindow();
        $('#nameImage').attr('src','');
        $('#nameImage').hide();
        console.log(current_screen);
        for(let sample in sidebar.elements){if(current_screen.toLowerCase()==sidebar.elements[sample].listtext_english.toLowerCase()){current_screen_punjabi=sidebar.elements[sample].listtext_punjabi}}
        $("#category").html(current_screen_punjabi);
        amount = '';
        console.log("Punjabi");
        document.getElementsByClassName('search__input')[0].value = "";
        for (let e = 0; e < displayElements[current_screen].length; e++) {
            let i  = displayWindowElemPunjabi.replace("%imagesrc%", displayElements[current_screen][e].imagesrc).replace("%imagesrc%", displayElements[current_screen][e].imagesrc).replace("%data%", displayElements[current_screen][e].item_punjabi),
                n = "'".concat(displayElements[current_screen][e].item_english).concat("'");
            i = i.replace("%sigmlurl%", n).replace("%sigmlurl%", n);
            let x = '<div class="elements">' + i + '</div>';
            $('.displayWindow').append(x);
        }
        document.getElementById('display').scrollLeft = 0;
        $(".displayWindow").attr("style", "flex-direction:column;overflow:hidden;")
    }else if(current_screen.length==1){
    PerformDictionarySearch(current_screen);
    $('.overlay').show();
    $(document.getElementById(current_screen)).attr("style","color: #00f;border-radius: 1vw 1vw 2vw 2vw;background: #fff;height: 2.5vw;line-height: 2.34vw;")
    $('.DictionaryElem').click(function(){dictionary(this);})
    }else{loadCategories("punjabi");
    $('.side-list,.side-list-names,.cancel,#reload-sigml').unbind("click");
    $(".side-list").click(function() {
        v=$(this.children[0]),v=$(v[0]).attr("name"), a = $(this.children[0]), $("#nameWindow").html(""), screen.height >= 400 && screen.height <= 749 && $(".second-menu").hide(), $("#reload-sigml").hide(), a = a[0].id, 
        cleardisplaywindow();
        $('#nameImage').attr('src','');
        $('#nameImage').hide();
        current_screen=a;
		if(displayElements[a].length>8){$('.direction').show();}
        console.log(a);
        $("#category").html(v);
        amount = '';
        console.log("Punjabi");
        document.getElementsByClassName('search__input')[0].value = "";
        for (let e = 0; e < displayElements[a].length; e++) {
            let i =  displayWindowElemPunjabi.replace("%imagesrc%", displayElements[a][e].imagesrc).replace("%imagesrc%", displayElements[a][e].imagesrc).replace("%data%", displayElements[a][e].item_punjabi),
                n = "'".concat(displayElements[a][e].item_english).concat("'");
            i = i.replace("%sigmlurl%", n).replace("%sigmlurl%", n);
            let x = '<div class="elements">' + i + '</div>';
            $('.displayWindow').append(x);
        }
        document.getElementById('display').scrollLeft = 0;
        $(".displayWindow").attr("style", "flex-direction:column;overflow:hidden;")
    });
    $(".side-list-names").click(function() {
        v=$(this.children[0]),v=v[0].firstChild.data, a = $(this.children[0]), screen.height >= 400 && screen.height <= 749 && $(".second-menu").hide(), $("#nameWindow").html(""), $("#reload-sigml").hide(), a = a[0].className, a = a.split(" ")[1], a = a.slice(0, a.length - 8), 
        cleardisplaywindow();
        $('#nameImage').attr('src','');
        $('#nameImage').hide();
        current_screen=a;
		if(displayElements[a].length>8){$('.direction').show();}
        console.log(v);
        $("#category").html(v);
        amount = '';
        document.getElementsByClassName('search__input')[0].value = "";
        for (let e = 0; e < displayElements[a].length; e++) {
            let i =  displayWindowElemPunjabi.replace("%imagesrc%", displayElements[a][e].imagesrc).replace("%imagesrc%", displayElements[a][e].imagesrc).replace("%data%", displayElements[a][e].item_punjabi),
                n = "'".concat(displayElements[a][e].item_english).concat("'");
            i = i.replace("%sigmlurl%", n).replace("%sigmlurl%", n);
            let x = '<div class="elements">' + i + '</div>';
            $('.displayWindow').append(x);
        }
        document.getElementById('display').scrollLeft = 0;
        $(".displayWindow").attr("style", "flex-direction:column;overflow:hidden;")
    });}
    $(".cancel").click(function() {
        z = $("#category").html();$("#category").html(z.substring(z.indexOf(':')+1,z.length));
        $("#category").attr("style","");
        clearInterval(show)
        document.getElementById('display').scrollLeft = 0;
        $('.cancel').hide();
        screen.height >= 400 && screen.height <= 749 && ($(".second-menu").hide(), $(".second-menu").remove()), cleardisplaywindow(), $("#nameWindow").html(""), $("#reload-sigml").hide(), $(".displayWindowImage").attr("style", "max-height:100px;max-width:100px;");
        $('#nameImage').attr('src','');
        $('#nameImage').hide();;
        let backElem = $(toBeBackElement).attr("src");
        document.getElementsByClassName('search__input')[0].value = "";
        for (let e = categoryBackElement, i = 0; i < displayElements[e].length; i++) {
            let n = displayWindowElemPunjabi.replace("%imagesrc%", displayElements[e][i].imagesrc);
            n = n.replace("%data%", displayElements[e][i].item_punjabi);
            let s, a = "'".concat(displayElements[e][i].item_english).concat("'");
            n = n.replace("%sigmlurl%", a), x = '<div class="elements">' + n + '</div>', $(".displayWindow").append(x), -1 != backElem.indexOf(displayElements[e][i].imagesrc) ? (toBeBackElement = n, toBeBackElement = $(toBeBackElement).children()[0], console.log(toBeBackElement), (s = $("img[src$='" + displayElements[e][i].imagesrc + "']")).next().attr("style", "color:#00cec9;"), s.parent().parent().attr("style", "background-color:white"), $("#imageWindow").removeClass("flipInY"), setTimeout(function() {
                $("#imageWindow").addClass("flipInY"), $(".cancel").attr("style", "display:none")
            }, 250)) : (console.log("other"), (s = $("img[src$='" + displayElements[e][i].imagesrc + "']")).next().attr("style", "color:white;"), s.parent().attr("style", "background-color:transparent"))
        }
        console.log(backElem);
        let temp = $("img[src$='" + backElem + "']");
        temp.parent().parent().attr("style","background-color:white");
        temp.next().attr("style","color:black;");
}), $("#reload-sigml").click(function() {
    $("#Prog_Alert").append(ProgElem);
    document.getElementById("avat").style.opacity="0.8";
    clearGloss();
    sigmlURL = setSiGMLURL(sigmlReload), console.log("extra"), CWASA.playSiGMLURL(sigmlURL)
}), $("#reload-sigml").dblclick(function() {});
$("#button-hindi").click(function() {$("#upperContainer").html("");Hindi();allClick();});
$("#button-punjabi").click(function() {$("#upperContainer").html("");Punjabi();allClick();});
$("#button-english").click(function() {$("#upperContainer").html("");English();allClick();});
}
English=function(){
    allClick();clearInterval(show);
    $('.speedtxt').html(upperContent.English[0].speed);$('.bttnSpeedReset').html(upperContent.English[0].reset);
    var upper=upperDisplayElem.replace("%titlename%",upperContent.English[0].titlename).replace("%id1%",upperContent.English[0].id1).replace("%id2%",upperContent.English[0].id2).replace("%lang%",upperContent.English[0].select).replace("%cat%",upperContent.English[0].cat).replace("%dic%",upperContent.English[0].dic).replace("%about%",upperContent.English[0].about).replace("%langname1%",upperContent.English[0].lang1).replace("%langname2%",upperContent.English[0].lang2).replace("%search%",upperContent.English[0].Search);$("#upperContainer").append(upper);/*Manas Luthra*/
    Search();$('.overlay').hide()
    document.getElementsByClassName('search__input')[0].value = "";
    document.getElementById('display').scrollLeft = 0;
    $("#category").html("");$("#elemName").val("");
    language="english";
    assignCategory("english");
    $('.overlay').hide();
    $("#nameWindow").html(""), $(".displayWindow").html(""), $("#reload-sigml,#reload-div,#cancel-div,.cancel").hide(), cleardisplaywindow(), $("#reload-sigml").unbind("click");
    $('#nameImage').attr('src','');
    $('#nameImage').hide();
    if(current_screen=="search"){
    PerformDictionarySearch(search_value)
    }else  if(current_screen!="category"&&current_screen!=undefined&&current_screen.length!=1){
    document.getElementsByClassName('search__input')[0].value = "";
    $("#nameWindow").html(""), screen.height >= 400 && screen.height <= 749 && $(".second-menu").hide(), $("#reload-sigml").hide()
        cleardisplaywindow();
        $('#nameImage').attr('src','');
        $('#nameImage').hide();
        console.log(current_screen);
        $("#category").show();
        $("#category").html(current_screen);
        amount = '';
        console.log("Hindi");
        document.getElementsByClassName('search__input')[0].value = "";
        for (let e = 0; e < displayElements[current_screen].length; e++) {
            let i = displayWindowElemEnglish.replace("%imagesrc%", displayElements[current_screen][e].imagesrc).replace("%imagesrc%", displayElements[current_screen][e].imagesrc).replace("%data%", displayElements[current_screen][e].item_english),
                n = "'".concat(displayElements[current_screen][e].item_english).concat("'");
            i = i.replace("%sigmlurl%", n).replace("%sigmlurl%", n);
            let x = '<div class="elements">' + i + '</div>';
            $('.displayWindow').append(x);
        }
        document.getElementById('display').scrollLeft = 0;
        $(".displayWindow").attr("style", "flex-direction:column;overflow:hidden;");
     }else if(current_screen.length==1){
    PerformDictionarySearch(current_screen);
    $('.overlay').show();
    $(document.getElementById(current_screen)).attr("style","color: #00f;border-radius: 6vw 6vw 5vw 5vw;background: #fffd;")
    $('.DictionaryElem').click(function(){dictionary(this);})
    }else{loadCategories("english");}
    $('.side-list,.side-list-names,.cancel,#reload-sigml').unbind("click");
    listClick("english");
    $(".cancel").click(function() {
        z = $("#category").html();$("#category").html(z.substring(z.indexOf(':')+1,z.length));
        $("#category").attr("style","");
        clearInterval(show)
        document.getElementById('display').scrollLeft = 0;
        $('.cancel').hide();
        screen.height >= 400 && screen.height <= 749 && ($(".second-menu").hide(), $(".second-menu").remove()), cleardisplaywindow(), $("#nameWindow").html(""), $("#reload-sigml").hide(), $(".displayWindowImage").attr("style", "max-height:100px;max-width:100px;");
        $('#nameImage').attr('src','');
        $('#nameImage').hide();;
        let backElem = $(toBeBackElement).attr("src");
        document.getElementsByClassName('search__input')[0].value = "";
        for (let e = categoryBackElement, i = 0; i < displayElements[e].length; i++) {
            let n = displayWindowElemEnglish.replace("%imagesrc%", displayElements[e][i].imagesrc);
            n = n.replace("%data%", displayElements[e][i].item_english);
            let s, a = "'".concat(displayElements[e][i].item_english).concat("'");
            n = n.replace("%sigmlurl%", a), x = '<div class="elements">' + n + '</div>', $(".displayWindow").append(x), -1 != backElem.indexOf(displayElements[e][i].imagesrc) ? (toBeBackElement = n, toBeBackElement = $(toBeBackElement).children()[0], console.log(toBeBackElement), (s = $("img[src$='" + displayElements[e][i].imagesrc + "']")).next().attr("style", "color:#00cec9;"), s.parent().parent().attr("style", "background-color:white"), $("#imageWindow").removeClass("flipInY"), setTimeout(function() {
                $("#imageWindow").addClass("flipInY"), $(".cancel").attr("style", "display:none")
            }, 250)) : (console.log("other"), (s = $("img[src$='" + displayElements[e][i].imagesrc + "']")).next().attr("style", "color:white;"), s.parent().attr("style", "background-color:transparent"))
        }
        console.log(backElem);
        let temp = $("img[src$='" + backElem + "']");
        temp.parent().parent().attr("style","background-color:white");
        temp.next().attr("style","color:black;");
}), $("#reload-sigml").click(function() {
    $("#Prog_Alert").append(ProgElem);
    document.getElementById("avat").style.opacity="0.8";
    clearGloss();
    sigmlURL = setSiGMLURL(sigmlReload), console.log("extra"), CWASA.playSiGMLURL(sigmlURL)
}), $("#reload-sigml").dblclick(function() {});
$("#button-hindi").click(function() {$("#upperContainer").html("");Hindi();allClick();});
$("#button-punjabi").click(function() {$("#upperContainer").html("");Punjabi();allClick();});
$("#button-english").click(function() {$("#upperContainer").html("");English();allClick();});
}
$("#button-hindi").click(function() {$("#upperContainer").html("");Hindi();allClick();});
$("#button-punjabi").click(function() {$("#upperContainer").html("");Punjabi();allClick();});
$("#button-english").click(function() {$("#upperContainer").html("");English();allClick();});
