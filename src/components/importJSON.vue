<!--
 * @Author: 秦少卫
 * @Date: 2022-09-03 19:16:55
 * @LastEditors: 秦少卫
 * @LastEditTime: 2022-09-05 22:46:24
 * @Description: 导入JSON文件
-->

<template>
  <div style="display: inline-block">
    <el-button @click="insert" size="small">导入文件</el-button>
    <el-dialog v-model="showModal" title="请选择">
      <el-upload :before-upload="handleUpload">
        <el-button :icon="UploadFilled"> 选择JSON文件</el-button>
      </el-upload>
      <template #footer>
        <el-button @click="(showModal = false), (jsonFile = null)" size="small">取消</el-button>
        <el-button @click="insertSvgFile" size="small">确定</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { UploadFilled } from '@element-plus/icons-vue'
import { downFontByJSON } from '@/utils/utils'
import { ElMessage } from 'element-plus'
const canvas = inject("canvas")
let showModal = ref(false)
let jsonFile = ref(false)
const insert = () => {
  // svg = ''
  showModal.value = true
}
const insertSvgFile = () => {
  if (!jsonFile.value) {
    ElMessage('请选择文件')
    return
  }
  // 加载字体后导入
  downFontByJSON(jsonFile.value).then(() => {
    canvas.c.loadFromJSON(jsonFile.value, canvas.c.renderAll.bind(canvas.c));
  })
  showModal.value = false
}
const handleUpload = (file) => {
  const reader = new FileReader();
  reader.readAsText(file, 'UTF-8');
  reader.onload = () => {
    jsonFile.value = reader.result
  };
  return false;
}
</script>

<style scoped lang="less">

</style>
