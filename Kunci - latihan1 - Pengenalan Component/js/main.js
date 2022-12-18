Vue.component("app-button", {
  data: function () {
    return {
      counter: 0,
    };
  },
  template: `
    <div>
        <h1>{{counter}}</h1>
        <button @click="counter++">add</button>
        <button @click="counter > 0 && counter--" style="background-color:red;">min</button>
    </div>
    `,
});

new Vue({
  el: "#app",
});
