<!--#37b754-->
<template>
  <div class="third-wrapper clearfix" id="thirdPage">
    <!--顶部背景-->
    <div class="top-bg" ref="topBg">
      <div class="bg-content">
        <div class="bg-left-wrapper">
          <div class="bg-left"></div>
          <div class="bg-left-after"></div>
        </div>

        <div class="bg-skew-wrapper">
          <div class="bg-skew"></div>
          <div class="bg-skew-after"></div>
        </div>

        <div class="bg-right-wrapper">
          <div class="bg-right"></div>
          <div class="bg-right-after"></div>
        </div>
      </div>
    </div>
    <!--用户头像-->
    <dash-parent class="user-heads-wrapper">
      <edit-image class="user-head" :width="'120'" :height="'150'" :isCircle="false"></edit-image>
    </dash-parent>
    <!--姓名模块-->
    <dash-parent class="name-areas-wrapper" @eventShowDialog="ShowDialogListener" :editBgColor="'#00c091'">
      <name-area class="name-area" :nameInfo="userName"></name-area>
    </dash-parent>

    <!--内容模块-->
    <div class="page-content-wrapper clearfix">
      <div class="page-third-right-wrapper" ref="pageThirdRight">
        <!--基本信息-->
        <dash-parent class="clearfix base-msg-wrapper" @eventShowDialog="ShowDialogListener" :editBgColor="'#00c091'">
          <base-info-item class="base-msg" v-for="item in userInfoArr" :key="item.id"
                          :icon="item.icon" :title="item.title" :holder="item.holder"></base-info-item>
        </dash-parent>
        <!--技能特长-->
        <dash-parent class="skill" @eventAdd="skillBarAddListener" :addBgColor="'#00c091'">
          <h2 class="skill-title" contenteditable="true">技能特长</h2>
          <skill-bar class="skill-bar-item" v-for="bar in skillBarArr" :key="bar.id"></skill-bar>
        </dash-parent>
      </div>
      <div class="page-third-left-wrapper">
        <!--求职意向-->
        <dash-parent>
          <module-item :title="'求职意向'"
                       :moduleIconStyle="moduleIconStyle"
                       :moduleTitleStyle="moduleTitleStyle"
                       :moduleIcon="'like.png'"></module-item>
        </dash-parent>
        <!--教育经历-->
        <dash-parent @eventAdd="itemEducationAddListener" :addBgColor="'#00c091'">
          <module-item :title="'教育经历'"
                       :moduleIconStyle="moduleIconStyle"
                       :moduleTitleStyle="moduleTitleStyle"
                       :moduleIcon="'education.png'">
            <module-item-list v-for="item in itemEducationArr" :key="item.id"></module-item-list>
          </module-item>
        </dash-parent>
        <!--项目经验-->
        <dash-parent @eventAdd="itemExperienceAddListener" :addBgColor="'#00c091'">
          <module-item :title="'项目经验'"
                       :moduleIconStyle="moduleIconStyle"
                       :moduleTitleStyle="moduleTitleStyle"
                       :moduleIcon="'experience.png'">
            <module-item-list v-for="item in itemExperienceArr" :key="item.id"></module-item-list>
          </module-item>
        </dash-parent>
        <!--专业技能-->
        <dash-parent>
          <module-item :title="'专业技能'"
                       :moduleIconStyle="moduleIconStyle"
                       :moduleTitleStyle="moduleTitleStyle"
                       :moduleIcon="'skill.png'"></module-item>
        </dash-parent>
        <!--自我评价-->
        <dash-parent>
          <module-item :title="'自我评价'"
                       :moduleIconStyle="moduleIconStyle"
                       :moduleTitleStyle="moduleTitleStyle"
                       :moduleIcon="'self_val.png'"></module-item>
        </dash-parent>
        <!--自定义模块-->
        <dash-parent>
          <module-item :title="'自定义模块'"
                       :moduleIconStyle="moduleIconStyle"
                       :moduleTitleStyle="moduleTitleStyle"
                       :moduleIcon="'self_val.png'"></module-item>
        </dash-parent>
      </div>
    </div>

    <!--编辑基础信息的弹窗-->
    <base-dialog v-show="false" id="idBaseDialog"
                 @dialogEventSave="dialogSaveListener"
                 @dialogEventCancel="dialogCancelListener">
    </base-dialog>
  </div>
</template>

<script type="text/ecmascript-6">

  import editImage from '../editImg/EditImage.vue';
  import nameArea from '../nameArea/nameArea.vue';
  import baseInfoItem from '../baseInfoItem/baseInfoItem.vue';
  import skillBar from '../skillBar/skillBar.vue';
  import dashParent from '../dashParent/dashParent.vue';
  import moduleItem from '../moduleItem/moduleItem.vue';
  import moduleItemList from '../moduleItemList/moduleItemList.vue';
  import baseDialog from '../baseDialog/baseDialog.vue';
  import {saveAs} from '../../assets/js/saveAs';

  export default {
    components: {
      editImage,
      nameArea,
      baseInfoItem,
      skillBar,
      dashParent,
      moduleItem,
      moduleItemList,
      baseDialog
    },
    data() {
      return {
        skillBarArr: [1, 1],
        itemEducationArr: [1],
        itemExperienceArr: [1],
        // 编辑基础信息的弹框
        dialogIndex: 0,
        // 用户信息数组
        userInfoArr: [{
          icon: 'age.png',
          holder: '年龄',
          title: ''
        }, {
          icon: 'add.png',
          holder: '居住地',
          title: ''
        }, {
          icon: 'workage.png',
          holder: '工作经验',
          title: ''
        }, {
          icon: 'phone.png',
          holder: '电话号码',
          title: ''
        }, {
          icon: 'email.png',
          holder: '邮箱号码',
          title: ''
        }],
        // 用户姓名和描述
        userName: {
          name: '',
          desc: ''
        },
        // 模块图标样式
        moduleIconStyle: {
          'background': '#37b754'
        },

        // 模块标题样式
        moduleTitleStyle: {
          'color': '#37b754',
          'border-bottom': '1px solid #37b754'
        }
      };
    },
    created() {
      // 接收到保存的信息
      this.$hub.$on('saveAs', (type) => {
        saveAs(type, 'thirdPage');
      });
      // 接收到切换颜色的信息
      this.$hub.$on('userPickedColor', (color) => {
        // 构造模块图标样式
        this.moduleIconStyle = {'background-color': color};
        // 构造模块标题样式
        this.moduleTitleStyle = {
          'color': color,
          'border-bottom-color': color
        };
        // JQuery实现切换颜色效果
        this.$jquery(this.$refs.topBg).find('.bg-left').css({
          'background': color
        });
        this.$jquery(this.$refs.topBg).find('.bg-skew').css({
          'background': color
        });
        this.$jquery(this.$refs.topBg).find('.bg-left-after').css({
          'border-top-color': color,
          'border-left-color': color
        });
        this.$jquery(this.$refs.topBg).find('.bg-right').css({
          'background': color
        });
        this.$jquery(this.$refs.topBg).find('.bg-right-after').css({
          'border-right-color': color,
          'border-bottom-color': color
        });
        this.$refs.pageThirdRight.style.backgroundColor = color;
      });
    },
    methods: {
      // 增加skillBar的数量
      skillBarAddListener() {
        this.skillBarArr.push(1);
      },

      // 添加教育项数量
      itemEducationAddListener() {
        this.itemEducationArr.push(1);
      },

      // 添加经验数量
      itemExperienceAddListener() {
        this.itemExperienceArr.push(1);
      },
      // 打开编辑基础信息框
      ShowDialogListener() {
        this.dialogIndex = this.$layer.open({
          type: 1,
          shadeClose: true,
          title: '编辑基础信息',
          skin: 'layui-layer-molv',
          area: ['740px', '400px'],
          content: this.$jquery('#idBaseDialog')
        });
      },
      // 基础信息编辑保存
      dialogSaveListener(userInfo, userName) {
        // 遍历赋值
        this.userInfoArr.forEach((info, index) => {
          info.title = userInfo[index].name;
          console.log(info.title);
        });
        // 姓名
        this.userName.name = userName.name;
        this.userName.desc = userName.desc;
        this.$layer.close(this.dialogIndex);
      },

      // 基础信息编辑取消
      dialogCancelListener() {
        this.$layer.close(this.dialogIndex);
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

  #id-name-content
    color: #ffffff

  .third-wrapper
    width: 100%
    height: 100%
    overflow: hidden
    background-color :#ffffff
    .top-bg
      left: 0
      top: 70px
      height: 100px
      position: absolute
      width 100%
      text-align: left
      .bg-left-wrapper
        display: inline-block
        position: relative
        .bg-left
          display: inline-block
          position: relative
          height: 100px
          width: 610px
          /*xx*/
          background: #37b754
        .bg-left-after
          content: ''
          position: absolute
          width: 0
          height: 0
          border-width: 50px 28.87px
          /*xx*/
          border-top-color: #37b754
          border-left-color: #37b754
          border-style: solid
          border-right-color: transparent
          border-bottom-color: transparent
          top: 0
          margin-left: 610px

      .bg-skew-wrapper
        position: relative
        display: inline-block
        height: 100px
        margin-left: 23px
        width: 50px
        top: -9px
        .bg-skew
          display: inline-block
          width: 50px
          height: 100px
          /*xx*/
          background: #37b754
          transform: skew(-30deg, -20deg)
        .bg-skew-after
          content: ''
          background: #000
          position: absolute
          height: 100px
          top: 0
          left: 0
          width: 50px
          opacity: 0.2
          transform: skew(-30deg, -20deg)

      .bg-right-wrapper
        position: absolute
        right: 0
        top: -18px
        .bg-right
          width: 165px
          /*xx*/
          background: #37b754
          height: 100px
        .bg-right-after
          content: ''
          position: absolute
          top: 0
          width: 0
          height: 0
          margin-left: -57px
          border-width: 50px 28.87px
          /*xx*/
          border-right-color: #37b754
          border-bottom-color: #37b754
          border-style: solid
          border-top-color: transparent
          border-left-color: transparent

  .user-heads-wrapper
    width: 200px
    position: absolute
    left: 0
    top: 0

  .name-areas-wrapper
    position: absolute
    width: 600px
    top: 60px
    left: 180px

    .name-content
      color: #ffffff
    /deep/
    .desc-content
      color: #ffffff

  .page-content-wrapper
    position: relative
    height: 100%
    margin-top: 200px
    .page-third-right-wrapper
      position: relative
      float: right
      width: 270px
      background: #37b754
      height: 100%
      padding-top: 20px
      &:before
        z-index: 2
        position: absolute
        content: ''
        width: 0
        height: 0
        left: 0
        top: 0
        border 18px solid #ffffff
        border-bottom-color: transparent
        border-right-color: transparent
      .base-msg
        /deep/
        .text
          color: #ffffff
      .skill
        .skill-title
          outline: none
          color: #ffffff
        .skill-bar-item
          color: #ffffff
    .page-third-left-wrapper
      float: left
      width: 610px
      height: 100%
</style>
