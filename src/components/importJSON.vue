<!--
 * @Author: 秦少卫
 * @Date: 2022-09-03 19:16:55
 * @LastEditors: 秦少卫
 * @LastEditTime: 2022-09-05 22:46:24
 * @Description: 导入JSON文件
-->

<template>
  <div style="display: inline-block">
    <el-button @click="insert" size="small">{{ t('import_files') }}</el-button>
    <el-dialog v-model="showModal" :title="t('please_choose')">
      <el-upload :before-upload="handleUpload">
        <el-button :icon="UploadFilled">{{ $t('select_json') }}</el-button>
      </el-upload>
      <template #footer>
        <el-button @click="(showModal = false), (jsonFile = null)" size="small">{{ t('alert.cancel') }}</el-button>
        <el-button @click="insertSvgFile" size="small">{{ t('alert.confirm') }}</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { UploadFilled } from '@element-plus/icons-vue'
import { downFontByJSON } from '@/utils/utils'
import { ElMessage } from 'element-plus'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const canvas = inject("canvas")
let showModal = ref(false)
let jsonFile = ref(false)
const insert = () => {
  // svg = ''
  showModal.value = true
}
const insertSvgFile = () => {
  if (!jsonFile.value) {
    ElMessage(t('alert.select_file'))
    return
  }
  // 加载字体后导入
  downFontByJSON(jsonFile.value).then(() => {
    let obj = JSON.parse(jsonFile.value);
    canvas.c.setWidth(obj.width);
    canvas.c.setHeight(obj.height);
    canvas.c.renderAll()
    delete obj.width
    delete obj.height
    canvas.c.loadFromJSON(JSON.stringify(obj), canvas.c.renderAll.bind(canvas.c));
    showModal.value = false
  })
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
