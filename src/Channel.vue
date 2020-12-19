<template>
  <div>
    <el-button
      type="primary"
      size="medium"
      icon="el-icon-plus"
      @click="
        (channelInfo = { defaultBroadcastConfig: {} }), (addVisible = true)
      "
      :loading="loading"
    >添加频道</el-button>
    <el-input
      style="float:right;width:280px;"
      placeholder="请输入频道名称、频道地址筛选条件"
      v-model="filter"
      size="medium"
      clearable
    ></el-input>
    <hr />
    <PagedTable
      :tableData="tableData"
      :tableHeader="tableHeader"
      :filter="filter"
      :loading="loading"
    >
      <el-table-column
        label="自动推流"
        width="160px"
      >
        <template slot-scope="scope">
          <i
            class="el-icon-success"
            style="color:#67C23A"
            v-show="scope.row.defaultBroadcastConfig.autoBroadcast && account.saveCookies"
          ></i>
          <i
            class="el-icon-error"
            style="color:#F56C6C"
            v-show="!scope.row.defaultBroadcastConfig.autoBroadcast || !account.saveCookies"
          ></i>
        </template>
      </el-table-column>
      <el-table-column
        label="自动录像"
        width="160px"
      >
        <template slot-scope="scope">
          <i
            class="el-icon-success"
            style="color:#67C23A"
            v-show="scope.row.defaultBroadcastConfig.needRecord"
          ></i>
          <i
            class="el-icon-error"
            style="color:#F56C6C"
            v-show="!scope.row.defaultBroadcastConfig.needRecord"
          ></i>
        </template>
      </el-table-column>
      <el-table-column
        label="操作"
        width="160px"
      >
        <template slot-scope="scope">
          <el-button
            type="primary"
            size="mini"
            @click="
              (channelInfo = JSON.parse(JSON.stringify(scope.row))),
                (editVisible = true)
            "
          >编辑</el-button>
          <el-popover
            placement="bottom"
            width="200"
            :ref="`popover-${scope.$index}`"
          >
            <p><i class="el-icon-warning"></i> 删除频道后无法恢复, 是否继续?</p>
            <div style="text-align: right; margin-top:8px;">
              <el-button
                type="primary"
                size="mini"
                @click="removeChannel(scope.$index, scope.row)"
              >继续</el-button>
            </div>
            <el-button
              slot="reference"
              size="mini"
              type="danger"
            >删除</el-button>
          </el-popover>
        </template>
      </el-table-column>
    </PagedTable>
    <el-dialog
      title="频道编辑"
      :visible.sync="editVisible"
      width="640px"
    >
      <el-form :model="channelInfo">
        <el-form-item
          label="频道名称"
          key="channelName"
          label-width="120px"
        >
          <el-input
            v-model="channelInfo.channelName"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="频道地址"
          key="channelUrl"
          label-width="120px"
        >
          <el-input
            v-model="channelInfo.channelUrl"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          v-if="account.accountSite == 'bilibili'"
          label="默认开播分区"
          label-width="120px"
        >
          <area-selector v-if="account.accountSite == 'bilibili'" v-model="channelInfo.defaultBroadcastConfig.area"></area-selector>
        </el-form-item>
        <el-form-item
          label="自动推流设置"
          label-width="120px"
        >
          <el-checkbox v-if="account.saveCookies" v-model="channelInfo.defaultBroadcastConfig.autoBroadcast">自动推流</el-checkbox>
          <el-checkbox v-if="!account.saveCookies" disabled>自动推流(必须先开启自动保存Cookies功能)</el-checkbox>
          <el-checkbox
            v-if="channelInfo.defaultBroadcastConfig.autoBroadcast"
            v-model="channelInfo.defaultBroadcastConfig.autoBlur"
          >
            自动评论区打码
            <el-tooltip
              v-if="channelInfo.defaultBroadcastConfig.autoBroadcast"
              class="item"
              effect="dark"
              content="请确保拥有足够的AP点数，否则此设置无效！"
              placement="top"
            >
              <i class="el-icon-warning"></i>
            </el-tooltip>
          </el-checkbox>
          <el-checkbox
            v-if="channelInfo.defaultBroadcastConfig.autoBroadcast"
            v-model="channelInfo.defaultBroadcastConfig.autoImageSegment"
          >自动分离人物形象</el-checkbox>
        </el-form-item>
        <el-form-item
          label="默认转播分辨率"
          label-width="120px"
          v-if="channelInfo.defaultBroadcastConfig.autoBroadcast"
        >
          <el-select
            v-if="channelInfo.defaultBroadcastConfig.autoBroadcast"
            v-model="channelInfo.defaultBroadcastConfig.broadcastResolution"
            placeholder="请选择转播分辨率"
            style="width:100%"
          >
            <el-option
              :label="`480P@30FPS 价格:${account.serverPoints[1]}AP/小时`"
              value="R480F30"
            ></el-option>
            <el-option
              :label="`720P@30FPS 价格:${account.serverPoints[1]}AP/小时`"
              value="R720F30"
            ></el-option>
            <el-option
              :label="`720P@60FPS 价格:${account.serverPoints[2]}AP/小时`"
              value="R720F60"
            ></el-option>
            <el-option
              :label="`1080P@30FPS 价格:${account.serverPoints[2]}AP/小时`"
              value="R1080F30"
            ></el-option>
            <el-option
              :label="`1080P@60FPS 价格:${account.serverPoints[2]}AP/小时`"
              value="R1080F60"
            ></el-option>
          </el-select>
        </el-form-item>
        <!--<el-form-item
          label="其他设置"
          label-width="120px"
        >
          <el-checkbox v-model="channelInfo.defaultBroadcastConfig.needRecord">
            自动开启录像
          </el-checkbox>
        </el-form-item>-->
      </el-form>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button
          type="primary"
          size="medium"
          @click="(editVisible = false), editChannel()"
        >保 存</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="频道新增"
      :visible.sync="addVisible"
      width="640px"
    >
      <el-form :model="channelInfo">
        <el-form-item
          label="频道名称"
          key="channelName"
          label-width="120px"
        >
          <el-input
            v-model="channelInfo.channelName"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="频道地址"
          key="channelUrl"
          label-width="120px"
        >
          <el-input
            v-model="channelInfo.channelUrl"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          v-if="account.accountSite == 'bilibili'"
          label="默认开播分区"
          label-width="120px"
        >
          <area-selector v-if="account.accountSite == 'bilibili'" v-model="channelInfo.defaultBroadcastConfig.area"></area-selector>
        </el-form-item>
        <el-form-item
          label="自动推流设置"
          label-width="120px"
        >
          <el-checkbox v-if="account.saveCookies" v-model="channelInfo.defaultBroadcastConfig.autoBroadcast">自动推流</el-checkbox>
          <el-checkbox v-if="!account.saveCookies" disabled>自动推流(必须先开启自动保存Cookies功能)</el-checkbox>
          <el-checkbox
            v-if="channelInfo.defaultBroadcastConfig.autoBroadcast"
            v-model="channelInfo.defaultBroadcastConfig.autoBlur"
          >
            自动评论区打码
            <el-tooltip
              v-if="channelInfo.defaultBroadcastConfig.autoBroadcast"
              class="item"
              effect="dark"
              content="请确保拥有足够的AP点数，否则此设置无效！"
              placement="top"
            >
              <i class="el-icon-warning"></i>
            </el-tooltip>
          </el-checkbox>
          <el-checkbox
            v-if="channelInfo.defaultBroadcastConfig.autoBroadcast"
            v-model="channelInfo.defaultBroadcastConfig.autoImageSegment"
          >自动分离人物形象</el-checkbox>
        </el-form-item>
        <el-form-item
          label="默认转播分辨率"
          label-width="120px"
          v-if="channelInfo.defaultBroadcastConfig.autoBroadcast"
        >
          <el-select
            v-if="channelInfo.defaultBroadcastConfig.autoBroadcast"
            v-model="channelInfo.defaultBroadcastConfig.broadcastResolution"
            placeholder="请选择转播分辨率"
            style="width:100%"
          >
            <el-option
              :label="`480P@30FPS 价格:${account.serverPoints[1]}AP/小时`"
              value="R480F30"
            ></el-option>
            <el-option
              :label="`720P@30FPS 价格:${account.serverPoints[1]}AP/小时`"
              value="R720F30"
            ></el-option>
            <el-option
              :label="`720P@60FPS 价格:${account.serverPoints[2]}AP/小时`"
              value="R720F60"
            ></el-option>
            <el-option
              :label="`1080P@30FPS 价格:${account.serverPoints[2]}AP/小时`"
              value="R1080F30"
            ></el-option>
            <el-option
              :label="`1080P@60FPS 价格:${account.serverPoints[2]}AP/小时`"
              value="R1080F60"
            ></el-option>
          </el-select>
        </el-form-item>
        <!--<el-form-item
          label="其他设置"
          label-width="120px"
        >
          <el-checkbox v-model="channelInfo.defaultBroadcastConfig.needRecord">
            自动开启录像
          </el-checkbox>
        </el-form-item>-->
      </el-form>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button
          type="primary"
          size="medium"
          @click="(addVisible = false), addChannel()"
        >新 增</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<style>
.el-icon-warning {
  color: #e6a23c;
}

.el-input.is-disabled .el-input__inner,
.el-textarea.is-disabled .el-textarea__inner {
  background-color: #fff;
  border-color: #dcdfe6;
  color: #606266;
  cursor: default;
}
</style>


<script>
import PagedTable from "./PagedTable.vue";
import AreaSelector from "./AreaSelector.vue";
export default {
  data() {
    var tableHeader;
    var account = JSON.parse(sessionStorage.getItem("account"));
    if (account.admin) {
      tableHeader = [
        { prop: "nickName", label: "账号昵称", width: "200px" },
        { prop: "channelName", label: "频道名称", width: "300px" },
        { prop: "channelUrl", label: "频道地址" }
      ];
    } else {
      tableHeader = [
        { prop: "channelName", label: "频道名称", width: "300px" },
        { prop: "channelUrl", label: "频道地址" }
      ]
    }
    return {
      account,
      tableData: [],
      tableHeader,
      loading: false,
      editVisible: false,
      addVisible: false,
      channelInfo: {
        defaultBroadcastConfig: {}
      },
      filter: ""
    };
  },
  methods: {
    channelList() {
      this.loading = true;
      this.$http.get("/api/channel/channelList.json").then(
        function(response) {
          // 这里是处理正确的回调
          if (response.data.code === 0) {
            this.tableData = [];
            this.tableData = response.data.data;
          } else {
            this.$message.error(response.data.message);
          }
          this.loading = false;
        },
        function(response) {
          if (response.status === 401) {
            this.$router.push({ path: "/login" });
          }
          this.$message.error("请求失败");
          this.loading = false;
        }
      );
    },
    removeChannel(index, row) {
      this.$http.post("/api/channel/removeChannel.json", row).then(
        function(response) {
          // 这里是处理正确的回调
          if (response.data.code === 0) {
            this.$refs["popover-" + index].doClose();
            this.$message({
              message: "频道已删除",
              type: "success"
            });
            this.channelList();
          } else {
            this.$message.error(response.data.message);
          }
        },
        function(response) {
          if (response.status === 401) {
            this.$router.push({ path: "/login" });
          }
          this.$message.error("请求失败");
        }
      );
    },
    editChannel() {
      this.loading = true;
      this.$http.post("/api/channel/editChannel.json", this.channelInfo).then(
        function(response) {
          // 这里是处理正确的回调
          if (response.data.code === 0) {
            this.$message({
              message: "频道保存成功",
              type: "success"
            });
            this.channelList();
          } else {
            this.$message.error(response.data.message);
            this.loading = false;
          }
        },
        function(response) {
          if (response.status === 401) {
            this.$router.push({ path: "/login" });
          }
          this.$message.error("请求失败");
          this.loading = false;
        }
      );
    },
    addChannel() {
      this.loading = true;
      this.$http.post("/api/channel/addChannel.json", this.channelInfo).then(
        function(response) {
          // 这里是处理正确的回调
          if (response.data.code === 0) {
            this.$message({
              message: "频道添加成功",
              type: "success"
            });
            this.channelList();
          } else {
            this.$message.error(response.data.message);
            this.loading = false;
          }
        },
        function(response) {
          if (response.status === 401) {
            this.$router.push({ path: "/login" });
          }
          this.$message.error("请求失败");
          this.loading = false;
        }
      );
    }
  },
  components: { PagedTable, AreaSelector },
  created() {
    this.channelList();
  }
};
</script>
