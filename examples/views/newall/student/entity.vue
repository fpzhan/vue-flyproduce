<script>
export default {
  /**
   * @returns {学生模块实体类,包含(学生所有字段)(班级所有字段)}
   */
  StudentEntity(obj) {
    return new FlyEntity({
      studentId: "" /** 学生id */,
      studentName: "" /** 学生姓名 */,
      studentNo: "" /** 学号 */,
      classId: "" /** 所属班级 */,
      classLevel: "" /** 年级 */,
      className: "" /** 班级名称 */,
      classHeadMan: "" /** 班主任 */
    }).InitInfos(obj);
  },
  /**
   * @returns {学生实体类}
   */
  FlyStudentPojo(obj) {
    return new FlyEntity({
      studentId: "" /** 学生id */,
      studentName: "" /** 学生姓名 */,
      studentNo: "" /** 学号 */,
      classId: "" /** 所属班级 */
    }).InitInfos(obj);
  }
};
</script>
