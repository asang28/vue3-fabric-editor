<template>
  <el-button v-if="mSelectMode === 'one'" @click="clone" :icon="CopyDocument" size="small"></el-button>
</template>

<script setup>
import { CopyDocument } from '@element-plus/icons-vue'
import { v4 as uuid } from 'uuid';
let mSelectMode = inject('mSelectMode')
const canvas = inject("canvas")
const clone = () => {
  const activeObject = canvas.c.getActiveObject();
  activeObject.clone(cloned => {
    canvas.c.discardActiveObject()
    // 间距设置
    const grid = 10
    cloned.set({
      left: cloned.left + grid,
      top: cloned.top + grid,
      id: uuid()
    })
    canvas.c.add(cloned)
    canvas.c.setActiveObject(cloned);
    canvas.c.requestRenderAll();
  })
}
</script>

<style scoped lang="less">

</style>
