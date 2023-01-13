import { cloneDeep } from 'lodash-es'
import { v4 as uuid } from 'uuid'
import onHotKeys from '@/core/hotkeys'
import keyNames from '@/core/hotkeys/constantKey'
import { ElMessage } from 'element-plus'

// 快捷键上下左右
export function hotKeyOnLRDU() {
    if (!this) return
    return onHotKeys(keyNames.lrdu, (event, handler) => {
        const activeObject = this.getActiveObject()
        if (activeObject) {
            switch (handler.key) {
                case 'left':
                    activeObject.set('left', activeObject.left - 1)
                    break;
                case 'right':
                    activeObject.set('left', activeObject.left + 1)
                    break;
                case 'down':
                    activeObject.set('top', activeObject.top + 1)
                    break;
                case 'up':
                    activeObject.set('top', activeObject.top - 1)
                    break;
                default:
            }
            this.renderAll()
        }
    })
}

// 快捷键删除
export function hotKeyOnBackSpace() {
    if (!this) return
    return onHotKeys(keyNames.backspace, () => {
        const activeObject = this.getActiveObjects()
        if (activeObject) {
            activeObject.map(item => this.remove(item))
            this.requestRenderAll()
            this.discardActiveObject()
        }
    })
}


// 快捷键ctrl+c mac control+c
export function hotkeyOnCtrlC() {
    if (!this) return
    return onHotKeys(keyNames.ctrlc, (event, handler) => {
        const activeObject = this.getActiveObjects()
        if (activeObject.length === 0) return
        const copyEl = cloneDeep(activeObject[0])
        if (copyEl.left === activeObject[0].left) {
            copyEl.left += 10
            copyEl.top += 10
        }
        this.copyEl = copyEl
        ElMessage.success('复制成功')
    })
}

// 快捷键ctrl+v mac control+v
export function hotkeyOnCtrlV() {
    if (!this) return
    return onHotKeys(keyNames.ctrlv, (event, handler) => {
        const copyEl = cloneDeep(this.copyEl)
        if (!copyEl) return ElMessage.warning('暂无复制内容')
        this.copyEl.left += 10 // 让复制那个元素位置偏移，那每次ctrl+v就会不会重叠
        this.copyEl.top += 10
        copyEl.id = uuid()  // 更换id
        this.add(copyEl)
        this.setActiveObject(copyEl)
    })
}