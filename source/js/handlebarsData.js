//handlebars
var mainNavigation = {
	items: [
		{
			title: 'Автомобили',
			link: '#',
			childrens: [
				{
					title: 'Подбор авто',
					link: '#'
				},
				{
					title: 'Автомобили с пробегом',
					link: '#'
				},
				{
					title: 'Карта цен',
					link: '#'
				},
			]
		},
		{
			title: 'Акции',
			link: '#',
			childrens: []
		},
		{
			title: 'Услуги',
			link: '#',			
			childrens: []
		}
	]
};
var mainNavigation_tpl_scr = $("#mainNavigation").html().replace(/[\u200B]/g, '');;  
 var mainNavigation_tpl = Handlebars.compile(mainNavigation_tpl_scr);  
$('#main-nav').append(mainNavigation_tpl(mainNavigation));

var carList = {
	cars: [
		{
			type: '1.6 MT Ambiente 85 л.с. МКПП',
			year: '2012',
			description: '+ доп. опция "Радио-навигационная система Amundassen" 2DIN, CD, MP3',
			color: '#000',
			status: 'Ожидается',
			price: 1689000
		},
		{
			type: '1.6 MT Ambiente Plus 105 л.с. МКПП',
			year: '2012',
			description: '',
			color: '#fff',
			status: 'Ожидается',
			price: 1189900
		},
		{
			type: '1.6 MT Trend 105 л.с. МКПП',
			year: '2012',
			description: '',
			color: '#000',
			status: 'В наличии',
			price: 1459000
		},
		{
			type: '1.6 PowerShift Trend Sport 105 л.с. АКПП',
			year: '2012',
			description: '',
			color: '#ccc',
			status: 'Ожидается',
			price: 1459000
		},
		{
			type: '2.0 MT Trend Sport 150 л.с. МКПП',
			year: '2012',
			description: '',
			color: 'red',
			status: 'Ожидается',
			price: 786000
		},
		{
			type: '2.0 PowerShift Trend Sport 150 л.с. АКПП',
			year: '2012',
			description: '+ доп. опция "Радио-навигационная система Amundassen" 2DIN, CD, MP3',
			color: 'green',
			status: 'Нет в наличии',
			price: 821000
		}
	]
};
var carListDesktop_tpl_scr = $("#carListDesktop").html();  
 var carListDesktop_tpl = Handlebars.compile(carListDesktop_tpl_scr);  
$('#car-list-desktop').append(carListDesktop_tpl(carList));

var carListMobile_tpl_scr = $("#carListMobile").html();  
 var carListMobile_tpl = Handlebars.compile(carListMobile_tpl_scr);  
$('#car-list-mobile').append(carListMobile_tpl(carList));

var mainSlider = {
	slides: [
		{
			title: 'Burton Зима 2016',
			img: 'img/burton.png',
			products: [
				{
					type: 'Куртка',
					name: 'Burton Poacher Jacket',
					pos: {
						top: '24%',
						left: '53%'
					},
					price: 6430
				},
				{
					type: 'Штаны',
					name: 'Burton Pants',
					pos: {
						top: '57%',
						left: '39%'
					},
					price: 7820
				}
			]
		},
		{
			title: 'T-800 Kit',
			img: 'img/t-800-1.jpg',
			products: [
				{
					type: 'Куртка',
					name: 'BadAss Black Leather Coat',
					pos: {
						top: '39%',
						left: '68%'
					},
					price: 6665
				},
				{
					type: 'Мотоцикл',
					name: 'Harley-Davdison Fat Boy 1991',
					pos: {
						top: '70%',
						left: '30%'
					},
					price: 1875000
				}
			]
		}
	]
};
var mainSlider_tpl_scr = $("#mainSlider").html();  
 var mainSlider_tpl = Handlebars.compile(mainSlider_tpl_scr);  
$('#main-slider').append(mainSlider_tpl(mainSlider));