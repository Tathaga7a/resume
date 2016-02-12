"use strict";

var ready;
ready = function () {
	$('#mainnav')
	.sidebar('attach events', '.menu.button', 'toggle');
};

$(document).ready(ready);
$(document).on('page:load', ready);

(function(){
	angular
		.module('mkApp', [
					'ngRoute', 
					
	])

	
		.config(['$routeProvider', function ($routeprovider) {
			$routeprovider
				.when ('/', {
					templateUrl: 'partials/main.html', 
					controller: 'PageCtrl'})
				.when ('/climbing', {
					templateUrl: 'partials/climbing.html', 
					controller: 'PageCtrl'})
				.when ('/work', {
					templateUrl: 'partials/work.html', 
					controller: 'PageCtrl'})
				.when ('/media', {
					templateUrl: 'partials/media.html', 
					controller: 'PageCtrl'})
				.when ('/contact', {
					templateUrl: 'partials/contact.html', 
					controller: 'PageCtrl'})
				.otherwise ({
					redirectTo: '/'});
}]);

})();






