Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

var app = new Vue({
    el: '#app',
    data: {
      groceryList: [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 2, text: 'Whatever else humans are supposed to eat' }
      ]
    }
})

var app2 = new Vue({
  el: "#app-2",
  data: {
    message: "You loaded this page on" + new Date().toLocaleString()
  }
})

var app3 = new Vue({
  el: "#app-3",
  data: {
    seen: true
  }
})

var app4 = new Vue({
  el: "#app-4",
  data: {
    todos: [
      { text:"Learn JavaScript"},
      { text: "Learn Vue"},
      { text: "Build something awesome"}
    ]
  }
})

var app5 = new Vue({
  el: "#app-5",
  data: {
    message: "Hello Vue.js"
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message.split("").reverse().join("")
    }
  }
})

var app6 = new Vue({
  el: "#app-6",
  data: {
    message: "Hello Vue!"
  }
})

var app7 = new Vue({
  el: "#app-7",
  data: {
    groceryList: [
      {id: 0, text: "Vegetables"},
      {id: 1, text: "Cheese"},
      {id: 2, text: "Whatever else humens are supposed to eat"}
    ]
  }
})

var data = { a : 1 };
var vm = new Vue({
  el: "#example",
  data: {
    msg : "Reactive Message",
    rawHtml: "<span style='color:red'> This should be red!</span> ",
    ok: false,
    url: "https://www.google.com"
  },
  computed: {
    reversedMsg: function(){
      return this.msg.split("").reverse().join("")
    }
  }
})

vm.$watch("a", function(newValue, oldValue) {

})