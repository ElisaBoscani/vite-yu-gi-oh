import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
  base_url: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0",
  arch_url: "https://db.ygoprodeck.com/api/v7/archetypes.php",
  cardsInfo: [],
  cardArch: [],
  archetypeTex: "",

  cardData(url) {
    axios.get(url).then((response) => {
      console.log(response);
      this.cardsInfo = response.data.data;
      console.log(this.cardsInfo);
    });

    /*  .catch(error => {
      console.log('Error:');
      console.error(error);
    }), */
  },
  archetypesDate(url) {
    axios.get(url).then((response) => {
      console.log(response.data);
      this.cardArch = response.data;
      console.log("cardArch:", this.cardArch);
    });
  },
});
