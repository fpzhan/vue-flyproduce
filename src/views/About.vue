<template>
  <div class="about">
    <router-link to="testTable5">
      <h1>table5</h1>
    </router-link>
    <div class="ui container">
      <action :fly-action="actions" id="tmp">
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
      </action>
    </div>
  </div>
</template>

<script>
import { Aa } from "@/views/all/flyproduce";
import $ from "jquery";

export default {
  data() {
    var all = {
      data: {
        input: Aa.objects.Student({ studentId: 1 }).instance(),
        output: Aa.objects.Student().instance(),
        init: true,
        submitId: "addEles"
      },
      operation: Aa.interfaces.selectFlyStudentInfo()
    };
    $.extend(all, {
      actions: all.operation.overrideBy(all.data)
    });
    return all;
  }
};
</script>
