import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class NewContent extends Vue {
  public created() {
    console.log("lifecycle Created")
  }

  public mounted() {
    console.log("lifecycle Mounted")
  }

  public updated() {
    console.log("lifecycle Updated")
  }
}
