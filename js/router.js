var app = angular.module('headApp',['router','Ctrl','direc']);
var router = angular.module('router',['ui.router'])
router.config(['$stateProvider',function($stateProvider){
	$stateProvider.state('home',{
		url:'/home',
		templateUrl:'template/home.html',
		controller:'homeCtrl'
	})
}])
var controller = angular.module('Ctrl',[]);
controller.controller('homeCtrl',['$scope',function($scope){
	$scope.tabs=0;
	$scope.tab=function($index){
		$scope.tabs = $index
		console.log($index)
	}
	

	$scope.navs = [{
		title:'hi,欢迎来到xx',
		url:'#/home'

	},{
		title:'登录',
		url:'#/login'

	},{
		title:'注册',
		url:'#/register'
	}]
	$scope.nas = [{
		title:'我在慧聪'
	},{
		title:'采购单'
	},{
		title:'速卖通'
	},{
		title:'慧聪服务'
	},{
		title:'客服中心'
	},{
		title:'网站导航'
	} ]

	$scope.footer = [{
		title:'新手指南',
		text:[{
			title:'免费注册'
		},{title:'新手成长'
		},{title:'买家入门'
		},{title:'卖家入门'
		},{title:'找回密码'
		},{title:'客服中心'
		},{title:'热搜产品库'}
		]
	},{
		title:'慧聪服务 ',
		text:[{
			title:'免费注册'
		},{title:'新手成长'
		},{title:'买家入门'
		},{title:'卖家入门'
		},{title:'找回密码'
		},{title:'客服中心'
		},{title:'热搜产品库'}
		]
	},{
		title:'交易安全',
		text:[{
			title:'免费注册'
		},{title:'新手成长'
		},{title:'买家入门'
		},{title:'卖家入门'
		},{title:'找回密码'
		},{title:'客服中心'
		},{title:'热搜产品库'}
		]
	},{
		title:'移动慧聪',
		text:[{
			title:'免费注册'
		},{title:'新手成长'
		},{title:'买家入门'
		},{title:'卖家入门'
		},{title:'找回密码'
		},{title:'客服中心'
		},{title:'热搜产品库'}
		]

	}]
	

}])
var directive = angular.module('direc',[]);
directive.directive('xheader',function(){
	return{
		templateUrl:'directive/xheader.html'
	}
}).directive('xfooter',function(){
	return{
		templateUrl:'directive/xfooter.html'
	}
}).directive('xcarouse',function(){
	return{
		templateUrl:'directive/xcarouse.html',
		link:function(){
			var swiper = new Swiper('.swiper-container', {
		    autoplay: 2500})
		}
	}
})