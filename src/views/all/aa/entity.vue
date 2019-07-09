<script>
export default {
  Student(obj) {
    return new FlyEntity({
      studentId: "",
      studentName: "",
      classId: "",
      studentNo: ""
    }).InitInfos(obj);
  }
};
</script>
