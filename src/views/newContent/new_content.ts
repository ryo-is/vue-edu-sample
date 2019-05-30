import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class NewContent extends Vue {
  public text: string = "hogehoge"
  public array: string[] = ["apple", "banana", "orange"]
  public textShowFlag: boolean = false

  public created() {
    console.log("lifecycle Created")
  }

  public mounted() {
    console.log("lifecycle Mounted")
  }

  public updated() {
    console.log("lifecycle Updated")
  }

  /**
   * テキストを更新する
   * @param {String} updateText
   */
  public updateText(updateText: string) {
    this.text = updateText
  }

  /**
   * テキストの表示/非表示を切り替える
   */
  public showAndHideText() {
    this.textShowFlag = !this.textShowFlag
  }
}
