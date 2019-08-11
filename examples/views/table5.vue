<template>
  <div id="app" class="ui container">
    <h1>&lt;Vuetable-2&gt;</h1>
    <fly-produce :fly-action="actions" id="tmp"></fly-produce>
    <vuetable
      ref="vuetable"
      :api-mode="false"
      :fields="data.fields"
      :data="data.output"
    >
      <div slot="actions" slot-scope="props">
        <button
          class="ui small button"
          @click="onActionClicked('view-item', props.rowData)"
        >
          <i class="zoom icon"></i>
        </button>
      </div>
    </vuetable>
    <div style="padding-top:10px">
      <vuetable-pagination
        ref="pagination"
        @vuetable-pagination:change-page="onChangePage"
      ></vuetable-pagination>
    </div>
  </div>
</template>

<script>
import Vuetable from "vuetable-2";
import VuetablePagination from "vuetable-2/src/components/VuetablePagination";
import { Aa } from "./all/flyproduce";
import $ from "jquery";

export default {
  name: "app",

  components: {
    Vuetable,
    VuetablePagination
  },

  data() {
    var all = {
      data: {
        fields: ["classId", "studentId", "studentNo", "studentName", "actions"],
        input: Aa.objects.Student({ classId: 123 }).instance(),
        output: Aa.objects
          .Student()
          .List()
          .instance(),
        submitId: "addEle",
        init: true,
        paginationRef: "pagination"
      },
      operation: Aa.interfaces.selectFlyStudentPage()
    };
    $.extend(all, {
      actions: all.operation.overrideBy(all.data)
    });
    return all;
  },
  methods: {
    onChangePage: function(page) {
      debugger;
      this._data.operation.flyChangePage(page);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20px;
}
button.ui.button {
  padding: 8px 3px 8px 10px;
  margin-top: 1px;
  margin-bottom: 1px;
}
@import "~semantic-ui/dist/semantic.css";
</style>
