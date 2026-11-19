import type { ReactElement, ReactNode } from 'react'
import type { WujieTabsManager, WujieTabsState } from '@melt-js/libs-wujie2-tabs-core'

export { createWujieTabs } from '@melt-js/libs-wujie2-tabs-core'
export type {
  WujieTab,
  WujieTabsListener,
  WujieTabsManager,
  WujieTabsState,
} from '@melt-js/libs-wujie2-tabs-core'

export interface WujieTabBarSlot extends WujieTabsState {
  activate: WujieTabsManager['activate']
  close: WujieTabsManager['close']
  closeOthers: WujieTabsManager['closeOthers']
  closeAll: WujieTabsManager['closeAll']
}

/** 订阅页签状态，基于 useSyncExternalStore，可安全用于并发渲染。 */
export declare function useWujieTabs(manager: WujieTabsManager): WujieTabsState

/** 无头组件：不渲染 DOM，通过 children 渲染函数交出状态与操作。 */
export declare function WujieTabBar(props: {
  manager: WujieTabsManager
  children: (slot: WujieTabBarSlot) => ReactNode
}): ReactElement
