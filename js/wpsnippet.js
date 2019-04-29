
app.controller('prmSearchResultListController', ['$http', function ($http) {
	var vm = this;
	vm.getSearchTerm = getSearchTerm;
	vm.getArticle = getArticle;

	function getSearchTerm() {
		return vm.parentCtrl.query;
	}

	function getArticle() {

	$http({
  			method: 'GET',
  			url: 'https://en.wikipedia.org/api/rest_v1/page/summary/' + vm.parentCtrl.query
              }).then(function(response) {
           		 
           		 vm.fullText = response.data.extract;
      			}).catch(function(response) {
       //handle rejections here
    }); 

	} 
	getArticle();
}]);

app.component('prmSearchResultListAfter', {
	bindings: { parentCtrl: '<' }, 
	controller: 'prmSearchResultListController',
	template: '<md-card class="default-card zero-margin _md md-primoExlore-theme"><md-card-title><md-card-title-text><span translate="" class="md-headline">{{$ctrl.getSearchTerm()}}</span></md-card-title-text></md-card-title> <md-card-content>{{$ctrl.fullText}}</md-card-content></md-card>'
});