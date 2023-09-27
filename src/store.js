import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
  base_url: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0",
  cardinfo: null,
  cardArch: "",
  cardData() {
    axios.get(this.base_url).then((response) => {
      console.log(response);
      this.cardinfo = response.data.data;
      console.log(this.cardinfo);
    });

    /*  .catch(error => {
      console.log('Error:');
      console.error(error);
    }), */
  },
});
