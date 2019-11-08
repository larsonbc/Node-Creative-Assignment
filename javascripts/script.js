var app = new Vue({
  el: '#app',
  data: {
    cities: [],
    prefix: '',
    owlform: '',
    defenition: [],
  },
  methods: {
    owlREST() {
      this.defenition = [];
      console.log("In Owl " + this.owlform);
      var url = "owl?q=" + this.owlform;
      console.log("URL " + url);
      fetch(url)
        .then((data) => {
          return (data.json());
        })
        .then((def) => {
          console.log("Owl");
          console.log(def);
          for (let i = 0; i < def.length; i++) {
            this.defenition.push(def[i]);
          }
        });
    },
    
    fetchREST() {
      console.log("In Fetch " + this.prefix);
      var url = "/cities?q=" + this.prefix;
      console.log("URL " + url);
      fetch(url)
        .then((data) => {
          return (data.json());
        })
        .then((citylist) => {
          console.log("CityList");
          console.log(citylist);
          this.cities = [];
          for (let i = 0; i < citylist.length; i++) {
            console.log(citylist[i].city);
            this.cities.push({ name: citylist[i].city });
          };
          console.log("Got Citylist");
        });
    },
  },
});
