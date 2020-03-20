<template>
  <el-tabs>
    <el-tab-pane
      label="基础设置"
      style="width:640px"
    >
      <el-form :model="account">
        <el-form-item
          label="账号ID"
          label-width="120px"
        >
          <el-input
            v-model="account.accountId"
            autocomplete="off"
            readonly
          ></el-input>
        </el-form-item>
        <el-form-item
          label="账号描述"
          label-width="120px"
        >
          <el-input
            v-model="account.description"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="默认转播分辨率"
          label-width="120px"
        >
          <el-select
            size="small"
            v-model="account.broadcastResolution"
            placeholder="请选择转播分辨率"
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
        <el-form-item
          v-if="account.accountSite == 'bilibili'"
          label="推流设置"
          label-width="120px"
        >
          <el-checkbox v-model="account.postBiliDynamic">发送B站开播动态</el-checkbox>
          <el-checkbox v-model="account.autoRoomTitle">自动修改直播间标题</el-checkbox>
        </el-form-item>
        <template v-if="account.accountSite == 'qq_oauth2' || account.accountSite == 'google_oauth2'">
          <el-form-item
            label="串流地址"
            label-width="120px"
          >
            <el-input
              v-model="account.rtmpHost"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="串流秘钥"
            label-width="120px"
          >
            <el-input
              v-model="account.rtmpPassword"
              autocomplete="off"
            ></el-input>
          </el-form-item>
        </template>
        <el-form-item
          v-else
          label="自动保存Cookies"
          label-width="120px"
        >
          <el-switch
            v-model="account.saveCookies"
            @change="saveCookies"
          ></el-switch>
        </el-form-item>
      </el-form>
      <el-button
        size="medium"
        type="primary"
        :loading="loading"
        @click="editAccount"
      >保存</el-button>
    </el-tab-pane>
    <el-tab-pane
      label="AP共享管理"
      style="width:640px"
    >
      <el-alert
        title="您可以在这里查看、管理你的共享码，和其他账号共享账号中的AP点数。"
        type="info"
        :closable="false"
        show-icon
      >
      </el-alert>
      <p v-if="account.parentAccountName">
        此账号已绑定父账号：{{account.parentAccountName}}
        <el-button
          size="medium"
          type="danger"
          :loading="loading"
          @click="unbindParent"
        >解除绑定</el-button>
      </p>
      <div v-if="!account.parentAccountName">
        <el-input v-model="account.shareCode">
          <el-button
            slot="append"
            @click="createShareCode"
          >生成共享码</el-button>
        </el-input>
        <el-table
          :data="account.shardAccountIds"
          :tableHeader="tableHeader"
        >
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-popover
                placement="bottom"
                width="200"
                :ref="`popover-${scope.$index}`"
              >
                <p><i class="el-icon-warning"></i> 确定要删除与该账号的关联关系吗？</p>
                <div style="text-align: right; margin-top:8px;">
                  <el-button
                    type="primary"
                    size="mini"
                    @click="unbindSubAccount(scope.row)"
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
        </el-table>
        <p>
          <el-button
            size="medium"
            type="primary"
            :loading="loading"
            @click="bindShareCode"
          >绑定共享码</el-button>
        </p>
      </div>

    </el-tab-pane>
  </el-tabs>
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
export default {
  data() {
    return {
      account: JSON.parse(sessionStorage.getItem("account")),
      tableHeader: [
        { prop: "nickname", label: "推流账号" },
        { prop: "accountSite", label: "登录渠道" }
      ],
      loading: false
    };
  },
  methods: {
    saveCookies(newValue) {
      if (newValue) {
        this.$confirm(
          <div>
            <b>此操作将会把您的Cookie信息保存在服务器上！</b>
            虽然爱丽丝已经对其进行加密处理，除非拥有服务器的控制权，否则就算得到文件也无法解密，但依然无法保证您的账号一定没有安全风险，如果您不想使用自动推流服务，则不需要进行当前的操作，只需要去推流任务页面进行手动推流操作即可。
            <br />
            <span style="text-decoration: underline;">
              我已知晓使用本功能可能会带来的安全风险，且认同服务提供者及所有相关人员免于承担责任。
            </span>
          </div>,
          "账号安全及免责声明",
          {
            confirmButtonText: "同意",
            cancelButtonText: "取消",
            showClose: false,
            closeOnClickModal: false,
            closeOnPressEscape: false
          }
        )
          .then(() => {})
          .catch(() => {
            this.account.saveCookies = false;
          });
      }
    },
    unbindSubAccount(row) {
      this.$http
        .post("/api/account/unbindSubAccount.json?accountId=" + row.accountId)
        .then(
          function(response) {
            // 这里是处理正确的回调
            if (response.data.code === 0) {
              this.$http.get("/api/account/info.json").then(
              function(response) {
                if (response.data.code === 0) {
                  this.account = response.data.data;
                }
              });
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
    bindShareCode() {
      this.$prompt("请输入需要绑定的共享码", "共享码绑定")
        .then(({ value }) => {
          this.loading = true;
          this.$http
            .post("/api/account/bindShareCode.json?shareCode=" + value)
            .then(
              function(response) {
                // 这里是处理正确的回调
                if (response.data.code === 0) {
                  this.$http.get("/api/account/info.json").then(
                  function(response) {
                    if (response.data.code === 0) {
                      this.account = response.data.data;
                    }
                  });
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
        })
        .catch(() => {});
    },
    unbindParent() {
      this.loading = true;
      this.$http.get("/api/account/unbindParent.json").then(
        function(response) {
          // 这里是处理正确的回调
          if (response.data.code === 0) {
            this.$http.get("/api/account/info.json").then(
            function(response) {
              if (response.data.code === 0) {
                this.account = response.data.data;
              }
            });
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
    createShareCode() {
      this.$http.get("/api/account/createShareCode.json").then(
        function(response) {
          // 这里是处理正确的回调
          if (response.data.code === 0) {
            this.account.shareCode = response.data.data;
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
    editAccount() {
      this.editVisible = false;
      this.loading = true;
      let apiUrl = "/api/account/editAccount.json";
      this.$http.post(apiUrl, this.account).then(
        function(response) {
          // 这里是处理正确的回调
          if (response.data.code === 0) {
            this.$message({
              message: "账户设置修改成功",
              type: "success"
            });
            this.$http.get("/api/account/info.json").then(
            function(response) {
              if (response.data.code === 0) {
                this.account = response.data.data;
                sessionStorage.setItem("account", JSON.stringify(this.account));
              }
            });
            this.loading = false;
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
  }
};
</script>
