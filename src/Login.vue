<template>
  <div class="login-center">
    <img src="./assets/logo.png">
    <div class="box">
      <div class="left">
        <h3>直播平台账号登录<span class="tips">支持自动获取对应平台推流地址</span>
        </h3>
        <span
          @click="accountSiteChange('bilibili')"
          class="login-btn bilibili"
        ><i class="el-icon-bilibili"></i>哔哩哔哩直播</span>
        <span
          @click="accountSiteChange('douyu')"
          class="login-btn douyu"
        >
          <i class="el-icon-douyu">
            <svg
              viewBox="0 0 1024 1024"
              width="14"
              height="16"
            >
              <path
                fill="#231815"
                d="M1117.645 179.111c8.602-1.575 12.757-11.581 7.86-18.911l-12.851-19.217c-33.891-50.922-76.709-88.765-127.249-112.473C945.077 9.594 900.809-.001 853.836-.001 811.59-.007 774.813 8.03 751.283 16.611c-20.326-5.265-67.612-15.427-129.667-15.427-57.691 0-113.722 8.715-166.538 25.917-65.606 21.365-125.539 53.354-178.119 95.082-42.065 33.369-79.501 72.982-111.271 117.727-54.245 76.394-73.252 141.351-74.032 144.083l-1.902 6.623c-2.166 7.558.764 15.661 7.239 20.013l5.672 3.818c61.396 41.305 140.314 64.996 216.517 64.996 49.254 0 97.381-9.444 143.057-28.065 106.807-43.548 166.692-116.942 198.12-170.841a416.768 416.768 0 008.305-14.943c.802 25.572-1.297 55.524-9.245 88.27-16.204 66.738-50.337 122.568-101.448 165.933-38.706 32.84-73.219 45.891-73.565 46.019l-9.767 3.556-4.826 9.227c-5.502 10.374-31.896 64.712-11.361 116.001 6.392 15.955 21.31 25.483 39.921 25.483 17.66 0 37.321-8.298 53.349-17.224 8.432 9.717 15.005 16.089 20.628 20.836-1.803 22.239-15.16 33.58-30.457 46.703-12.356 10.591-27.888 13.622-43.52 13.622-28.125-44.31-69.349-55.689-120.4-55.689-20.843 0-41.059 4.497-60.093 13.368-21.761 10.134-20.733 41.784 1.632 50.46.599.234 65.216 26.045 103.493 78.887 36.969 51.039 15.577 103.307 14.087 106.78l-14.263 30.163c-3.897 8.237 3.314 17.402 12.114 15.393l32.545-7.418c13.181-2.916 47.451-12.845 80.859-41.834 29.043-25.205 49.507-58.451 59.884-96.996 65.551-10.624 125.974-34.443 179.85-70.94 55.075-37.309 102.179-87.942 136.208-146.426 34.727-59.687 56.07-127.722 61.72-196.753 5.398-65.992-3.617-133.259-26.114-195.578 59.104-68.959 134.438-84.057 135.235-84.207l22.514-4.118z"
              ></path>
              <path
                fill="#f0f1f2"
                d="M585.932 852.978C874.854 817.884 1031.603 517.98 929 262.776c67.816-89.055 161.223-106.145 161.223-106.145C980.145-8.762 802.153 24.145 752.805 45.772 729.846 38.854 604.664 7.5 463.366 53.519c-274.258 89.316-345.728 338.454-345.728 338.454 78.413 52.753 206.486 86.528 334.499 34.332 193.119-78.737 225.015-259.651 225.015-259.651s35.854 81.547 8.536 194.081c-42.916 176.829-192.036 231.162-192.036 231.162-7.261 13.69-24.905 55.847-10.125 92.75 7.305 18.248 43.417 4.068 74.049-17.297 25.009 32.306 35.364 38.355 42.065 43.158 1.369 36.118-12.485 60.885-37.142 82.027-24.789 21.265-50.766 30.073-68.846 33.821-29.637-64.262-104.208-87.516-164.46-59.439 0 0 71.888 27.882 115.629 88.264 47.907 66.143 16.88 134.367 16.88 134.367 34.749-7.708 107.962-42.457 124.231-136.57z"
              ></path>
              <path
                fill="#bcbcbc"
                d="M491.003 45.415c129.68-33.899 240.352-6.107 261.802.356 19.28-8.45 58.199-18.621 105.032-18.015-42.96 3.843-67.909 15.787-86.383 23.162-.859.343-1.704.676-2.537.998l-.107.602c39.403 25.41 64.004 61.855 64.004 61.855-79.389-100.992-288.72-62.958-322.211-53.434-5.297-5.303-13.452-11.287-19.6-15.525zM1071.083 161.784c-30.87 9.933-93.141 36.721-142.083 100.991 30.944 76.967 38.298 157.999 25.552 234.607a314.04 314.04 0 01-6.451 18.975c17.209-153.353-34.511-247.714-82.64-335.238 35.986 42.313 42.707 55.813 42.707 55.813 62.01-63.343 168.466-79.09 168.466-79.09l-5.55 3.941z"
              ></path>
              <path
                fill="#231815"
                d="M680.604 364.334c24.053-81.007-6.722-136.76-6.722-136.76-23.316 88.459-66.815 153.739-160.074 203.164-67.48 35.757-184.621 42.162-184.621 42.162l159.068 87.624c97.409-22.433 162.52-95.744 192.349-196.191z"
              ></path>
              <path
                fill="#fff"
                d="M664.598 240.419c12.637 52.681 4.766 90.391.158 99.212-6.303 12.042-30.358-4.749-30.358-4.749s9.849 80.358.251 90.047c-9.604 9.69-57.872-26.518-57.872-26.518s22.416 85.244 6.406 96.01c-16.004 10.767-91.891-48.827-91.891-48.827s25.188 97.302 9.511 101.704c-14.037 3.946-35.987-2.648-59.623-13.65l-36.806-19.547c-26.208-15.358-50.584-32.26-64.74-42.439 30.327-1.775 103.497-10.437 167.939-52.179 85.586-55.439 140.61-122.897 157.026-179.065z"
              ></path>
              <path
                fill="#2d0a03"
                stroke="#231815"
                stroke-width="35.31"
                d="M496.533 506.619c97.632 60.955 125.441 167.458 69.942 244.77-55.504 77.318-164.2 83.488-251.675 8.389-78.682-67.556-114.492-180.069-68.701-243.857 45.802-63.799 162.614-64.125 250.434-9.302z"
              ></path>
              <path
                fill="#231815"
                d="M610.523 624.884c-17.758-59.853-65.458-114.001-127.607-144.858-100.814-50.036-215.487-27.802-261.054 50.64-44.632 76.809-7.328 187.739 84.911 252.539 54.082 37.989 118.993 54.751 176.127 45.969a188.204 188.204 0 0012.059-2.258c45.124-10.033 80.536-35.234 102.406-72.88 21.974-37.818 26.645-83.687 13.158-129.153z"
              ></path>
              <path
                fill="#f8c100"
                d="M471.194 494.97c102.997 51.127 153.655 163.949 105.791 246.336-47.864 82.381-168.268 89.603-262.504 23.402-84.763-59.543-118.342-158.487-78.851-226.459s142.925-89.265 235.564-43.28z"
              ></path>
              <path
                fill="#231815"
                d="M444.805 479.517s-166.65 37.652-175.651 245.539l6.716 9.136s-7.64-64.231 65.337-158.72c58.02-75.121 106.825-93.1 106.825-93.1l-3.227-2.855z"
              ></path>
              <path
                fill="#231815"
                d="M196.833 705.283C88.696 650.349 19.114 577.713 37.441 534.649c20.323-47.756 141.022-41.061 269.581 14.958a687.116 687.116 0 0130.369 14.144c3.265-4.671 6.645-9.363 10.287-13.89a780.404 780.404 0 00-36.39-17.005C165.245 469.223 28.134 461.614 5.049 515.867c-16.276 38.238 28.466 96.99 107.443 150.629 31.118 21.133 65.288 30.165 84.342 38.786z"
              ></path>
              <path
                fill="#f0f1f2"
                d="M626.083 527.481c-43.177 57.667-111.594 94.915-188.602 94.915-5.857 0-11.654-.21-17.397-.631l-.109-.133c37.982 47.187 95.849 77.323 160.672 77.323 99.245 0 182.181-70.622 202.406-164.907z"
              ></path>
              <path
                fill="#231815"
                d="M454.2 635.335v.181c5.46 4.686 11.13 9.107 17.019 13.205 7.443 5.052 15.127 9.756 23.188 13.696 8.007 4.056 16.314 7.46 24.807 10.287 8.428 2.999 17.085 5.351 25.863 7.111 8.778 1.787 17.692 2.889 26.656 3.381l8.827.343c-.263.011.738-.011-.558.017h.109l.23-.006.908-.039 3.626-.127 14.405-.47c8.542-.902 17.162-1.688 26.098-3.769 4.468-.703 8.794-1.998 13.125-3.287 4.342-1.251 8.739-2.38 12.907-4.178 4.178-1.754 8.592-2.972 12.704-4.914l12.409-5.761c7.963-4.46 16.008-8.909 23.418-14.399 3.877-2.512 7.465-5.401 11.08-8.295 3.648-2.855 7.334-5.7 10.615-8.998 7.028-6.148 13.175-13.181 19.48-20.187 5.885-7.327 11.786-14.759 16.779-22.888 2.767-3.907 4.938-8.146 7.345-12.307 2.428-4.15 4.774-8.373 6.645-12.822 4.299-8.694 7.755-17.786 11.168-27.06-1.449 9.69-2.581 19.65-5.447 29.207-1.099 4.892-2.702 9.612-4.419 14.321-1.641 4.737-3.216 9.551-5.507 14.017-3.97 9.291-8.975 18.046-14.121 26.828-5.704 8.367-11.589 16.706-18.398 24.315-3.183 4.018-6.814 7.598-10.446 11.211-3.577 3.663-7.203 7.31-11.271 10.42-7.733 6.779-16.237 12.54-24.796 18.3-8.882 5.18-17.807 10.431-27.394 14.349-4.665 2.263-9.582 3.846-14.476 5.534-4.878 1.732-9.773 3.442-14.843 4.543-5.075 1.168-9.926 2.728-15.226 3.547l-15.904 2.463c-5.031.548-9.718.719-14.597.991l-4.534.238-1.613.022-1.947-.033-7.788-.166c-10.38-.393-20.749-1.5-30.992-3.392-10.249-1.865-20.377-4.444-30.271-7.769-19.77-6.757-38.332-16.795-55.368-28.82-8.406-6.17-16.647-12.634-24.009-20.054-3.974-3.797-7.718-7.824-11.319-11.974-4.158-3.352-9.463-9.959-10.28-12.51l-.002-.007c-4.189-6.035-3.208-14.414 2.461-19.266a14.094 14.094 0 0113.078-2.858c.251.02.537.052.86.096l10.826.676c3.921.31 9.062.05 13.541.116 9.27-.266 18.545-.802 27.799-1.981l13.809-2.258 13.672-3.171c8.996-2.584 18.069-5.152 26.863-8.644 4.348-1.832 8.854-3.392 13.082-5.545 4.293-2.031 8.625-4.023 12.775-6.369a208.188 208.188 0 0024.665-14.831c4.052-2.645 7.832-5.65 11.753-8.528 3.998-2.806 7.558-6.12 11.37-9.208 7.317-6.369 14.591-13.154 21.444-20.381-5.234 8.445-10.61 16.889-17.047 24.714-3.265 3.807-6.322 7.869-9.855 11.46-3.434 3.708-6.88 7.443-10.681 10.78a221.581 221.581 0 01-23.511 19.418c-4.074 3.104-8.46 5.7-12.786 8.439-4.277 2.839-8.871 5.086-13.344 7.614-9.078 4.776-18.458 9.075-28.16 12.584l-14.728 4.765-15.034 3.791c-8.825 1.823-17.738 3.418-26.738 4.289zM560.372 147.064c0 70.621-55.246 127.873-123.399 127.873-68.148 0-123.394-57.251-123.394-127.873 0-70.627 55.246-127.879 123.394-127.879 68.153 0 123.399 57.251 123.399 127.879z"
              ></path>
              <path
                fill="#e9e9e9"
                d="M560.372 162.855c0 61.903-48.424 112.085-108.159 112.085s-108.159-50.182-108.159-112.085c0-61.903 48.424-112.085 108.159-112.085s108.159 50.182 108.159 112.085z"
              ></path>
              <path
                fill="#fff"
                d="M556.487 161.403c0 54.908-44.622 99.415-99.662 99.415s-99.662-44.506-99.662-99.415c0-54.908 44.622-99.421 99.662-99.421s99.662 44.512 99.662 99.421z"
              ></path>
              <path
                fill="#231815"
                d="M539.742 161.403c0 45.681-37.125 82.713-82.919 82.713-45.789 0-82.914-37.032-82.914-82.713s37.125-82.713 82.914-82.713c45.795 0 82.919 37.032 82.919 82.713z"
              ></path>
              <path
                fill="#fff"
                d="M552.151 167.872c0 23.997-19.506 43.459-43.567 43.459-24.056 0-43.562-19.462-43.562-43.459 0-24.003 19.506-43.459 43.562-43.459 24.061 0 43.567 19.456 43.567 43.459zM416.269 135.985c0 13.416-10.903 24.298-24.357 24.298-13.449 0-24.357-10.882-24.357-24.298s10.909-24.298 24.357-24.298c13.454 0 24.357 10.882 24.357 24.298z"
              ></path>
            </svg>
          </i>斗鱼直播</span>
        <span
          @click="accountSiteChange('17live')"
          class="login-btn seventeen"
        >
          <i class="el-icon-seventeen">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="16"
              height="16"
              viewBox="0 0 28 28"
            >
              <defs>
                <path
                  id="a___hOn7C043"
                  d="M1.573.333c-.101.595-.572 1.005-1.15.973-.565-.03-.563.892 0 .923a1.79 1.79 0 00.777-.135c1.037 2.54 4.137 3.714 6.625 3.675 2.487.039 5.587-1.134 6.624-3.675.245.1.509.15.777.135.562-.03.565-.953 0-.923-.579.032-1.049-.378-1.15-.973-.04-.232-.199-.333-.368-.333a.49.49 0 00-.478.579c.065.38.24.722.486.995a.216.216 0 00-.016.034c-.918 2.281-3.62 3.222-5.82 3.236h-.11c-2.2-.014-4.902-.955-5.82-3.236a.31.31 0 00-.016-.034c.245-.273.421-.615.486-.995A.489.489 0 001.94 0c-.17 0-.328.1-.368.333z"
                ></path>
                <path
                  id="b___hOn7C043"
                  d="M.114 7.798C-.278 9.233.4 10.233 1.24 10.5c.84.267 2.246-.063 2.68-1.598.432-1.535-.154-3.248-1.174-3.474a1.22 1.22 0 00-.262-.028c-.96 0-2.011 1.083-2.37 2.398z"
                ></path>
              </defs>
              <g
                fill="#fff"
                fill-rule="evenodd"
                transform="translate(1 3)"
              >
                <use
                  transform="translate(5.078 11.232)"
                  xlink:href="#a___hOn7C043"
                ></use>
                <path d="M19.094 6.56c0 3.535-2.729 6.4-6.094 6.4-3.366 0-6.094-2.865-6.094-6.4C6.906 3.026 9.634 0 13 0c3.365 0 6.094 3.026 6.094 6.56"></path>
                <use xlink:href="#b___hOn7C043"></use>
                <path d="M25.886 7.798c.392 1.435-.285 2.435-1.125 2.702-.84.267-2.246-.063-2.68-1.598-.432-1.535.154-3.248 1.174-3.474a1.22 1.22 0 01.262-.028c.959 0 2.01 1.083 2.369 2.398z"></path>
              </g>
            </svg>
          </i>１７直播</span>
      </div>
      <div class="right">
        <h3>第三方账号授权<span class="tips">支持手动输入任意平台推流地址</span>
        </h3>
        <span
          @click="accountSiteChange('google_oauth2')"
          class="login-btn google"
        ></span>
        <span
          @click="accountSiteChange('qq_oauth2')"
          class="login-btn qq"
        ></span>
      </div>
    </div>
    <img
      class="alice"
      src="./assets/alice_half_body.jpg"
    >
    <el-dialog
      v-loading="loading"
      :title="`登录${accountSiteLabel}`"
      :visible.sync="userpwdDialog"
      :show-close="false"
      @closed="username = undefined, password = undefined"
      width="422px"
    >
      <el-form label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input
            type="password"
            v-model="password"
          ></el-input>
        </el-form-item>
      </el-form>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button
          size="small"
          @click="userpwdDialog = false"
        >取消</el-button>
        <el-button
          size="small"
          type="primary"
          @click="login"
        >登录</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<style>
@font-face {
  font-family: bilifont;
  src: url(//s1.hdslb.com/bfs/static/jinkela/international-home/asserts/iconfont.eot);
  src: url(//s1.hdslb.com/bfs/static/jinkela/international-home/asserts/iconfont.eot#iefix)
      format("embedded-opentype"),
    url(//s1.hdslb.com/bfs/static/jinkela/international-home/asserts/iconfont.woff)
      format("woff"),
    url(//s1.hdslb.com/bfs/static/jinkela/international-home/asserts/iconfont.ttf)
      format("truetype"),
    url(//s1.hdslb.com/bfs/static/jinkela/international-home/asserts/iconfont.svg#bilifont)
      format("svg");
}

img.alice {
  position: fixed;
  top: 60%;
  left: 50%;
  margin-left: -290px;
  z-index: -1;
}

.login-center {
  width: 722px;
  height: 320px;
  top: 50%;
  left: 50%;
  margin-top: -360px;
  margin-left: -360px;
  position: absolute;
  text-align: center;
  user-select: none;
}

.login-center .el-icon-back {
  transform: rotate(180deg);
  color: #409eff;
}

.login-center .input-userpwd > .el-input-group__append {
  border: none;
  padding: 0;
  margin: 0;
  width: auto;
}

.login-center .input-userpwd > .el-input-group__prepend > * {
  display: inline-block;
}

.login-center .label-username {
  border-left: 1px solid #dcdfe6;
  margin: -10px 0 -10px 20px;
  padding-left: 20px;
  height: 40px;
  line-height: 40px;
}

.login-center .el-input-group__append .el-input-group__prepend {
  border-left: none;
  border-radius: 0px;
}

.login-center .tips {
  padding: 0 4px;
  color: #888;
  font-size: 14px;
  font-weight: normal;
}

.login-center .el-select .el-input {
  width: 110px;
}

.login-center .el-dialog {
  text-align: left;
}

.login-center .el-dialog__body {
  padding: 10px 20px 15px 20px;
}

.captcha-prompt * {
  vertical-align: middle;
}

.captcha-prompt img {
  image-rendering: -moz-crisp-edges; /* Firefox */
  image-rendering: -o-crisp-edges; /* Opera */
  image-rendering: -webkit-optimize-contrast; /* Webkit (non-standard naming) */
  image-rendering: pixelated;
  -ms-interpolation-mode: nearest-neighbor; /* IE (non-standard property) */
}
.login-center h3 {
  margin-top: 5px;
  margin-bottom: 25px;
}

.login-center .box {
  justify-content: center;
  display: flex;
}

.login-center .left {
  width: 340px;
  padding: 0 10px 15px;
  border-right: 1px solid #ccc;
}

.login-center .right {
  width: 340px;
  padding: 0 10px 15px;
  border-left: 1px solid #ccc;
}

.login-center .login-btn {
  color: #fff !important;
  margin: 10px auto 0;
  display: block;
  width: 135px;
  height: 40px;
  text-align: center;
  border-radius: 3px;
  line-height: 40px;
  cursor: pointer;
  box-shadow: 1px 1px 1px 1px #aaa;
}

.login-center .login-btn * {
  vertical-align: middle;
}

.login-center .login-btn.bilibili {
  background-color: #f07096;
}

.login-center .login-btn.bilibili:hover {
  background-color: #f3769a;
}

.login-center .login-btn.douyu {
  background-color: #f70;
}

.login-center .login-btn.douyu:hover {
  background-color: #f80;
}

.login-center .login-btn.seventeen {
  background-color: #333;
}

.login-center .login-btn.seventeen:hover {
  background-color: #444;
}

.login-center .login-btn.google {
  background: url("data:image/png;base64,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")
    no-repeat center;
  width: 185px;
  height: 40px;
}

.login-center .login-btn.qq {
  background: url("data:image/png;base64,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")
    no-repeat center;
  width: 185px;
  height: 40px;
}

.login-center [class*=" el-icon-"],
.login-center [class^="el-icon-"] {
  margin-right: 4px;
}

.el-icon-bilibili {
  font-family: bilifont !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.el-icon-bilibili:before {
  content: "\E72B";
}
</style>

<script>
export default {
  data() {
    return {
      popoverVisible: false,
      loginModes: [
        { label: "账户/密码", value: "userpwd" },
        { label: "Cookies", value: "cookies" }
      ],
      accountSites: [
        { label: "Google登录", value: "google_oauth2", oauth2: true },
        { label: "QQ登录", value: "qq_oauth2", oauth2: true },
        { label: "哔哩哔哩", value: "bilibili", userpwd: true },
        { label: "斗鱼TV", value: "douyu", qrCode: true },
        { label: "17直播", value: "17live", userpwd: true }
      ],
      showCookiesTip: false,
      cookies: undefined,
      username: undefined,
      password: undefined,
      captcha: undefined,
      loginMode: "userpwd",
      loading: false,
      userpwdDialog: false,
      accountSite: "bilibili",
      accountSiteLabel: "哔哩哔哩"
    };
  },
  methods: {
    accountSiteChange(value) {
      this.accountSite = value;
      let item = {};
      item = this.accountSites.find(item => {
        return item.value === value;
      });
      this.accountSiteLabel = item.label;
      if (item.userpwd) {
        this.userpwdDialog = true;
      }
      if (item.oauth2) {
        window.location.href = "/api/login/oauth2/" + item.value + "/auth";
      }
      if (item.qrCode) {
        this.$confirm(
          <p class="captcha-prompt">
            <span>请使用{item.label}客户端扫描二维码登录</span>
            <img
              height="164"
              src={
                "/api/login/getCaptcha?accountSite=" +
                this.accountSite +
                "&_t=" +
                new Date().getTime()
              }
            />
          </p>,
          "安全验证",
          {
            center: true,
            confirmButtonText: "我已扫码",
            cancelButtonText: "取消"
          }
        )
          .then(() => {
            this.login();
          })
          .catch(() => {});
      }
    },
    reloadGif(e) {
      let img = e.target;
      let src = img.src;
      img.src = "";
      img.src = src;
    },
    login() {
      this.loading = true;
      this.$http
        .post("/api/login/login.json?loginMode=" + this.loginMode, {
          cookies: this.cookies,
          username: this.username,
          password: this.password,
          captcha: this.captcha,
          accountSite: this.accountSite
        })
        .then(
          function(response) {
            this.loading = false;
            // 这里是处理正确的回调
            if (response.data.code === 0) {
              sessionStorage.setItem(
                "account",
                JSON.stringify(response.data.data)
              );
              this.$router.push({ path: "/main/broadcast" });
            } else {
              if (response.data.code === -101) {
                this.$prompt(
                  <p class="captcha-prompt">
                    <span>请输入验证码</span>
                    <img
                      height="50"
                      alt="验证码图像"
                      src={
                        "/api/login/getCaptcha?accountSite=" +
                        this.accountSite +
                        "&_t=" +
                        new Date().getTime()
                      }
                    />
                  </p>,
                  "安全验证",
                  {
                    confirmButtonText: "确定",
                    cancelButtonText: "取消",
                    inputPattern: /.+/,
                    inputErrorMessage: "请输入验证码"
                  }
                )
                  .then(({ value }) => {
                    this.captcha = value.toUpperCase();
                    this.login();
                  })
                  .catch(() => {});
              }
              this.$message.error(response.data.message);
            }
          },
          function(response) {
            this.loading = false;
            this.$message.error("请求失败");
          }
        );
    }
  }
};
</script>
