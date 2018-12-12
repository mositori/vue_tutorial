var items = [
	{
  	name:'鉛筆',
    price: 300,
    quantity: 2
  },
	{
  	name:'消しゴム',
    price: 100,
    quantity: 4
  },
	{
  	name:'ノート',
    price: 4000,
    quantity: 6
  }
]

var vm = new Vue({
	el: "#app2",
  data: {
  	items: items
  },
  filters: {
  	numberWithDelimiter: function(value){
    	if (!value) {
      	return '0'
      }
      return value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')
    }
  },
  computed: {
  	totalPrice: function () {
    	return this.items.reduce(function (sum, item) {
				return sum + (item.price * item.quantity)
      }, 0)
    },
    totalPriceWithTax: function () {
			return Math.floor(this.totalPrice * 1.08)
    },
    canBuy: function() {
    	return this.totalPrice >= 100000
    },
    errorMessageClass: function() {
			return { error: !this.canBuy }
    },
    errorMessageStyle: function() {
    	return {
      	border: this.canBuy ? '' : '1px solid red',
      	color: this.canBuy ? '' : 'red'
      }
    }
  }
})

vm.$watch(function () {
	return this.items[0].quantity
}, function (quantity) {
	console.log(quantity)
})