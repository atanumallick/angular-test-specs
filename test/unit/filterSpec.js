describe('filters', function () {
	beforeEach(module('angularUnitTest'));
	
	describe('reverse', function () {
		var reverse;

		beforeEach(inject(function ($filter) {
			reverse = $filter('reverse', {}); 
		}));

		it('should reverse given string', function() {
			expect(reverse('atanu')).toBe('unata');
			expect(reverse('ratul')).toBe('lutar');
			expect(reverse('ratul')).not.toBe(null);
		});
	});

	describe('sort', function () {
		var sort;

		beforeEach(inject(function ($filter) {
			sort = $filter('sort', {}); 
		}));

		it('should sort given string', function() {
			expect(sort('atanu')).toBe('aantu');
			expect(sort('ratul')).toBe('alrtu');
			expect(sort('ratul')).not.toBe(null);
		});
	});
});

describe('controllers', function () {
	beforeEach(module('angularUnitTest'));

	describe('mainCtrl', function () {
		var mainCtrl;
		var $scope = {};

		beforeEach(inject(function ($controller) {
			mainCtrl = $controller('mainCtrl', {$scope : $scope});
		}));

		it('should have a initialize methode', function () {
			 expect($scope.initialize).toBeDefined();
			 expect($scope.pageHeader).toBeDefined();
			 expect($scope.pageHeader.title).toBe('Main Page');
		});
	});
});