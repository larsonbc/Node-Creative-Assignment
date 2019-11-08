var app = new Vue({
  el: '#app',
  data: {
    players: [],
    mascots: [],
    coaches: [],
    prefix: '',
    prefix2: '',
    prefix3: '',
    //owlform: '',
    //defenition: [],
  },
  methods: {
    /*owlREST() {
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
    },*/
    
    fetchREST() {
      //console.log("In Fetch " + this.prefix);
      var url = "/players?q=" + this.prefix;
      //console.log("URL " + url);
      fetch(url)
        .then((data) => {
          return (data.json());
        })
        .then((playerlist) => {
          //console.log("CityList");
          //console.log(citylist);
          this.players = [];
          for (let i = 0; i < playerlist.length; i++) {
            //console.log(citylist[i].city);
            this.players.push({ name: playerlist[i].city });
          };
          console.log("Got Citylist");
        });
    },
    
    coachREST() {
      //console.log("In Fetch " + this.prefix);
      var url = "/coaches?q=" + this.prefix3;
      //console.log("URL " + url);
      fetch(url)
        .then((data) => {
          return (data.json());
        })
        .then((coachlist) => {
          //console.log("coachList");
          //console.log(coachlist);
          this.coaches = [];
          for (let i = 0; i < coachlist.length; i++) {
            //console.log(coachlist[i].city);
            this.coaches.push({ name: coachlist[i].city });
          };
          console.log("Got Coachlist");
        });
    },
    
    mascotREST() {
      //console.log("In Fetch " + this.prefix);
      var url = "/mascots?q=" + this.prefix2;
      //console.log("URL " + url);
      fetch(url)
        .then((data) => {
          return (data.json());
        })
        .then((mascotlist) => {
          //console.log("MacotList");
          //console.log(Mascotlist);
          this.mascots = [];
          for (let i = 0; i < mascotlist.length; i++) {
            //console.log(citylist[i].city);
            this.mascots.push({ name: mascotlist[i].city });
          };
          console.log("Got Mascotlist");
        });
    },
  },
});
