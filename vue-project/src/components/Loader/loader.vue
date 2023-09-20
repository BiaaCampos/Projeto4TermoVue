  
  <script>
  import { defineComponent } from "vue";
  import LoaderImage from "./../../image/loader.svg";
  import "../style.css/loader.css";
  
  export default defineComponent({
    components: {
      LoaderImage,
    },
  });
  </script>
  
  <template>
    <div id="loader" data-testid="loader">
      <LoaderImage class="loader-image" />
    </div>
  </template>

  
  