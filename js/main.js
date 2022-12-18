const { createApp } = Vue;

createApp({
  data() {
    return {
      disks: [],
      diskClicked: 0,
      active: false,
      genre: "",
    };
  },
  methods: {
    getIndex(index) {
      this.toggleOffcanvas();
      this.diskClicked = index;
    },
    toggleOffcanvas() {
      this.active = true;
    },
    takeDisks() {
      axios.get("http://localhost/php-dischi-json/php/api.php").then((resp) => {
        this.disks = resp.data;
      });
    },
    filterDisk() {
      axios
        .get("http://localhost/php-dischi-json/php/api.php", {
          params: {
            genre: this.genre,
          },
        })
        .then((resp) => {
          this.disks = [];
          resp.data.forEach((element) => {
            if (element.genre.toLowerCase() === this.genre.toLowerCase()) {
              this.disks.push(element);
            } else if (this.genre === "") {
              this.disks.push(element);
            }
          });
        });
    },
  },
  created() {
    this.takeDisks();
  },
}).mount("#app");