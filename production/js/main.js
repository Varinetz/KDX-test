!function(i){i(document).ready(function(){function t(t){i(t).each(function(){var t=i(this).text();i(this).text(t.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g,"$1 "))})}i("#main-slider").slick(),i(".js-menu-item-parent a").click(function(){i(this).parent(".js-menu-item-parent").toggleClass("menu-item-active")}),i(window).load(function(){t(".js-format-price")}),i(".js-main-slider__slide__prod__plus").click(function(){i(".main-slider__slide__prod_active").removeClass(".main-slider__slide__prod_active"),i(this).parent().toggleClass("main-slider__slide__prod_active")})})}(jQuery);var mainNavigation={items:[{title:"Автомобили",link:"#",childrens:[{title:"Подбор авто",link:"#"},{title:"Автомобили с пробегом",link:"#"},{title:"Карта цен",link:"#"}]},{title:"Акции",link:"#",childrens:[]},{title:"Услуги",link:"#",childrens:[]}]},mainNavigation_tpl_scr=$("#mainNavigation").html().replace(/[\u200B]/g,""),mainNavigation_tpl=Handlebars.compile(mainNavigation_tpl_scr);$("#main-nav").append(mainNavigation_tpl(mainNavigation));var carList={cars:[{type:"1.6 MT Ambiente 85 л.с. МКПП",year:"2012",description:'+ доп. опция "Радио-навигационная система Amundassen" 2DIN, CD, MP3',color:"#000",status:"Ожидается",price:1689e3},{type:"1.6 MT Ambiente Plus 105 л.с. МКПП",year:"2012",description:"",color:"#fff",status:"Ожидается",price:1189900},{type:"1.6 MT Trend 105 л.с. МКПП",year:"2012",description:"",color:"#000",status:"В наличии",price:1459e3},{type:"1.6 PowerShift Trend Sport 105 л.с. АКПП",year:"2012",description:"",color:"#ccc",status:"Ожидается",price:1459e3},{type:"2.0 MT Trend Sport 150 л.с. МКПП",year:"2012",description:"",color:"red",status:"Ожидается",price:786e3},{type:"2.0 PowerShift Trend Sport 150 л.с. АКПП",year:"2012",description:'+ доп. опция "Радио-навигационная система Amundassen" 2DIN, CD, MP3',color:"green",status:"Нет в наличии",price:821e3}]},carListDesktop_tpl_scr=$("#carListDesktop").html(),carListDesktop_tpl=Handlebars.compile(carListDesktop_tpl_scr);$("#car-list-desktop").append(carListDesktop_tpl(carList));var carListMobile_tpl_scr=$("#carListMobile").html(),carListMobile_tpl=Handlebars.compile(carListMobile_tpl_scr);$("#car-list-mobile").append(carListMobile_tpl(carList));var mainSlider={slides:[{title:"Burton Зима 2016",img:"img/burton.png",products:[{type:"Куртка",name:"Burton Poacher Jacket",pos:{top:"24%",left:"53%"},price:6430},{type:"Штаны",name:"Burton Pants",pos:{top:"57%",left:"39%"},price:7820}]},{title:"T-800 Kit",img:"img/t-800-1.jpg",products:[{type:"Куртка",name:"BadAss Black Leather Coat",pos:{top:"39%",left:"68%"},price:6665},{type:"Мотоцикл",name:"Harley-Davdison Fat Boy 1991",pos:{top:"70%",left:"30%"},price:1875e3}]}]},mainSlider_tpl_scr=$("#mainSlider").html(),mainSlider_tpl=Handlebars.compile(mainSlider_tpl_scr);$("#main-slider").append(mainSlider_tpl(mainSlider));