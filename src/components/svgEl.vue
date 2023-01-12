<!--
 * @Author: 秦少卫
 * @Date: 2022-09-03 19:16:55
 * @LastEditors: 秦少卫
 * @LastEditTime: 2022-09-07 00:19:55
 * @Description: 素材面板
-->

<template>
  <div>
    <el-divider content-position="left">卡通</el-divider>
    <div class="box">
      <img :src="`../../svg/${item}.svg`" alt="" :key="item" v-for="(item) in getIndex(460, 489)" @click="addItem">
    </div>
    <el-divider content-position="left">卡通水果</el-divider>
    <div class="box">
      <img :src="`../../svg/${item}.svg`" alt="" :key="item" v-for="(item) in getIndex(386, 409)" @click="addItem">
    </div>
    <el-divider content-position="left">体育</el-divider>
    <div class="box">
      <img :src="`../../svg/${item}.svg`" alt="" :key="item" v-for="(item) in getIndex(410, 459)" @click="addItem">
    </div>
    <el-divider content-position="left">秋天</el-divider>
    <div class="box">
      <img :src="`../../svg/${item}.svg`" alt="" :key="item" v-for="(item) in getIndex(40, 49)" @click="addItem">
    </div>
    <el-divider content-position="left">计算机</el-divider>
    <div class="box">
      <img :src="`../../svg/${item}.svg`" alt="" :key="item" v-for="(item) in getIndex(50, 75)" @click="addItem">
    </div>
    <el-divider content-position="left">卡通水果</el-divider>
    <div class="box">
      <img :src="`../../svg/${item}.svg`" alt="" :key="item" v-for="(item) in getIndex(76, 89)" @click="addItem">
    </div>
    <el-divider content-position="left">服饰</el-divider>
    <div class="box">
      <img :src="`../../svg/${item}.svg`" alt="" :key="item" v-for="(item) in getIndex(89, 136)" @click="addItem">
    </div>
    <el-divider content-position="left">旗子</el-divider>
    <div class="box">
      <img :src="`../../svg/${item}.svg`" alt="" :key="item" v-for="(item) in getIndex(137, 151)" @click="addItem">
    </div>
    <el-divider content-position="left">树木</el-divider>
    <div class="box">
      <img :src="`../../svg/${item}.svg`" alt="" :key="item" v-for="(item) in getIndex(152, 181)" @click="addItem">
    </div>
    <el-divider content-position="left">食物</el-divider>
    <div class="box">
      <img :src="`../../svg/${item}.svg`" alt="" :key="item" v-for="(item) in getIndex(182, 201)" @click="addItem">
    </div>
    <el-divider content-position="left">其他</el-divider>
    <div class="box">
      <img :src="`../../svg/${item}.svg`" alt="" :key="item" v-for="(item) in getIndex(202, 222)" @click="addItem">
    </div>
    <el-divider content-position="left">奖牌</el-divider>
    <div class="box">
      <img :src="`../../svg/${item}.svg`" alt="" :key="item" v-for="(item) in getIndex(223, 252)" @click="addItem">
    </div>
    <el-divider content-position="left">商务</el-divider>
    <div class="box">
      <img :src="`../../svg/${item}.svg`" alt="" :key="item" v-for="(item) in getIndex(253, 261)" @click="addItem">
    </div>
    <el-divider content-position="left">活动</el-divider>
    <div class="box">
      <img :src="`../../svg/${item}.svg`" alt="" :key="item" v-for="(item) in getIndex(262, 270)" @click="addItem">
    </div>
    <el-divider content-position="left">卡通水果</el-divider>
    <div class="box">
      <img :src="`../../svg/${item}.svg`" alt="" :key="item" v-for="(item) in getIndex(271, 300)" @click="addItem">
    </div>
    <el-divider content-position="left">复古</el-divider>
    <div class="box">
      <img :src="`../../svg/${item}.svg`" alt="" :key="item" v-for="(item) in getIndex(301, 350)" @click="addItem">
    </div>
    <el-divider content-position="left">卡通</el-divider>
    <div class="box">
      <img :src="`../../svg/${item}.svg`" alt="" :key="item" v-for="(item) in getIndex(351, 385)" @click="addItem">
    </div>

    <el-divider content-position="left">动物</el-divider>
    <div class="box">
      <img :src="`../../svg/${item}.svg`" alt="" :key="item" v-for="(item) in getIndex(490, 519)" @click="addItem">
    </div>

    <el-divider content-position="left">手绘</el-divider>
    <div class="box">
      <img :src="`../../svg/${item}.svg`" alt="" :key="item" v-for="(item) in getIndex(0, 39)" @click="addItem">
    </div>

  </div>
</template>


<script setup>
import { v4 as uuid } from 'uuid';
const canvas = inject("canvas")
const fabric = inject("fabric")
const defaultPosition = {
  left: 100, top: 100, shadow: '', fontFamily: '1-1'
}
const getIndex = (start, end) => {
  const arr = Array(end - (start - 1)).fill('')
  return arr.map((item, i) => (i + start))
}
// 按照类型渲染
const addItem = (e) => {
  const url = e.target.src
  fabric.loadSVGFromURL(url, (objects, options) => {
    var item = fabric.util.groupSVGElements(objects, {
      ...options, ...defaultPosition,
      id: uuid(),
      name: 'svg元素'
    });
    canvas.c.add(item)
    canvas.c.renderAll()
  });
}
</script>

<style scoped lang="less">
img {
  display: inline-block;
  width: 53px;
  margin-left: 2px;
  margin-bottom: 2px;
  background: #F5F5F5;
  padding: 6px;
  cursor: pointer;
}
</style>
