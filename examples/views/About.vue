<template>
  <div class="about">
    <div class="ui container">
      <fly-produce :fly-action="actions" id="tmp">
        <div>
          班级id&nbsp;&nbsp;&nbsp;<input
            type="text"
            v-model="data.input.classId"
          /><br />
          学生id&nbsp;&nbsp;&nbsp;<input
            type="text"
            v-model="data.input.studentId"
          /><br />
          学生名字&nbsp;&nbsp;&nbsp;<input
            type="text"
            v-model="data.input.studentName"
          /><br />
          学生编号&nbsp;&nbsp;&nbsp;<input
            type="text"
            v-model="data.input.studentNo"
          />
        </div>
        <button id="addEles">查询</button>
        <div>
          班级id&nbsp;&nbsp;&nbsp;<input
            type="text"
            disabled="disabled"
            v-model="data.output.classId"
          /><br />
          学生id&nbsp;&nbsp;&nbsp;<input
            type="text"
            disabled="disabled"
            v-model="data.output.studentId"
          /><br />
          学生名字&nbsp;&nbsp;&nbsp;<input
            type="text"
            disabled="disabled"
            v-model="data.output.studentName"
          /><br />
          学生编号&nbsp;&nbsp;&nbsp;<input
            type="text"
            disabled="disabled"
            v-model="data.output.studentNo"
          />
        </div>
      </fly-produce>
    </div>
  </div>
</template>

<script>
import { student } from "./newall/javaBackstage";
import $ from "jquery";

export default {
  data() {
    var all = {
      data: {
        input: student.objects.StudentEntity({ studentId: 1 }).instance(),
        output: student.objects.StudentEntity().instance(),
        init: true,
        submitId: "addEles"
      },
      operation: student.interfaces.selectFlyStudentInfo()
    };
    $.extend(all, {
      actions: all.operation.overrideBy(all.data)
    });
    return all;
  }
};
</script>
