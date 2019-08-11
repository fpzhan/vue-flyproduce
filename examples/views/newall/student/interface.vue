<script>
import path from "../path";
import commonParam from "../commonParam";
export default {
  /**
   * @returns {列表查询学生}
   */
  selectFlyStudentList() {
    return new FlyInterface({
      url: path.projectUrl + "/Student/selectFlyStudentList",
      input: {} /**查询参数*/,
      output: {} /**返回结果*/
    })
      .overrideBy(commonParam)
      .overrideBy({
        /** 覆盖公共参数 */
      });
  },
  /**
   * @returns {查询学生详情}
   */
  selectFlyStudentInfo() {
    return new FlyInterface({
      url: path.projectUrl + "/Student/selectFlyStudentInfo",
      input: {} /**查询参数*/,
      output: {} /**返回结果*/
    })
      .overrideBy(commonParam)
      .overrideBy({
        /** 覆盖公共参数 */
      });
  },
  /**
   * @returns {新增学生详情}
   */
  insertFlyStudentInfo() {
    return new FlyInterface({
      url: path.projectUrl + "/Student/insertFlyStudentInfo",
      input: {} /**查询参数*/,
      output: {} /**返回结果*/
    })
      .overrideBy(commonParam)
      .overrideBy({
        /** 覆盖公共参数 */
      });
  },
  /**
   * @returns {修改学生详情}
   */
  updateFlyStudentInfo() {
    return new FlyInterface({
      url: path.projectUrl + "/Student/updateFlyStudentInfo",
      input: {} /**查询参数*/,
      output: {} /**返回结果*/
    })
      .overrideBy(commonParam)
      .overrideBy({
        /** 覆盖公共参数 */
      });
  },
  /**
   * @returns {删除学生详情}
   */
  deleteFlyStudentInfo() {
    return new FlyInterface({
      url: path.projectUrl + "/Student/deleteFlyStudentInfo",
      input: {} /**查询参数*/,
      output: {} /**返回结果*/
    })
      .overrideBy(commonParam)
      .overrideBy({
        /** 覆盖公共参数 */
      });
  },
  /**
   * @returns {分页查询学生}
   */
  selectFlyStudentPage() {
    return new FlyInterface({
      url: path.projectUrl + "/Student/selectFlyStudentPage",
      input: {} /**查询参数*/,
      output: {} /**返回结果*/
    })
      .overrideBy(commonParam)
      .overrideBy({
        /** 覆盖公共参数 */
      });
  }
};
</script>
