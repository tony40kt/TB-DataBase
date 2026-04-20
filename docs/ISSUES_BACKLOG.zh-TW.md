# TB-DataBase 專案 Issues 設計總表（繁體中文）

> 本文件用於「網頁版 GitHub」逐一建立 Issues。  
> 每筆都包含：Title、Body Type、Priority、Labels、目的、工作項目、DoD、備註。

---

## Issue 01
- **Title**：`[EPIC] 專案基礎架構與開發環境建立`
- **Body Type**：Epic
- **Priority**：P0
- **Labels**：`type:epic`, `priority:P0`, `area:infra`
- **目的**：建立可持續開發的基礎架構與分支流程。
- **工作項目**：
  - 設定分支保護與 PR 規範
  - 建立基本目錄結構
  - 建立 CI 基本流程
- **DoD**：
  - 團隊可用同一流程提交與審查程式碼
  - 主分支受保護且可追溯
- **備註**：所有後續 Issue 依賴此 Issue 完成。

## Issue 02
- **Title**：`[FEATURE] Google（Gmail）登入功能`
- **Body Type**：Feature
- **Priority**：P0
- **Labels**：`type:feature`, `priority:P0`, `area:auth`
- **目的**：提供使用者以 Gmail 快速登入。
- **工作項目**：
  - 啟用 Google OAuth
  - 實作登入 / 登出流程
  - 儲存基本使用者資料
- **DoD**：
  - 可成功登入 / 登出
  - 無登入者無法進入受保護頁面
- **備註**：需與權限模型同步設計。

## Issue 03
- **Title**：`[FEATURE] 使用者角色與權限模型（4 角色）`
- **Body Type**：Feature
- **Priority**：P0
- **Labels**：`type:feature`, `priority:P0`, `area:auth`, `area:security`
- **目的**：實作超級管理員、管理員、授權人士、訪客權限。
- **工作項目**：
  - 建立角色欄位與策略
  - API/資料存取權限管控
  - 前端頁面按權限顯示操作按鈕
- **DoD**：
  - 四角色限制皆符合需求
  - 未授權操作會被拒絕並有提示
- **備註**：需做權限測試案例。

## Issue 04
- **Title**：`[FEATURE] 超級管理員權限變更連結產生功能`
- **Body Type**：Feature
- **Priority**：P1
- **Labels**：`type:feature`, `priority:P1`, `area:auth`, `area:security`
- **目的**：由超級管理員發出可限時使用的角色變更連結。
- **工作項目**：
  - 連結 token 生成與有效期
  - 角色變更流程與審計紀錄
  - 一次性使用保護
- **DoD**：
  - 連結可安全生效且過期失效
  - 變更紀錄可查詢
- **備註**：避免連結重放攻擊。

## Issue 05
- **Title**：`[FEATURE] 故障日誌建立（Create）`
- **Body Type**：Feature
- **Priority**：P0
- **Labels**：`type:feature`, `priority:P0`, `area:logs`
- **目的**：建立標準化故障日誌輸入流程。
- **工作項目**：
  - 建立欄位與驗證規則
  - 儲存日誌與建立者資訊
  - 提交成功提示
- **DoD**：
  - 日誌可正確建立
  - 必填欄位未填會阻擋提交
- **備註**：欄位命名需可長期擴充。

## Issue 06
- **Title**：`[FEATURE] 故障日誌修改（Update）`
- **Body Type**：Feature
- **Priority**：P0
- **Labels**：`type:feature`, `priority:P0`, `area:logs`
- **目的**：可修正已建立日誌內容。
- **工作項目**：
  - 權限檢查（授權人士僅可改自己）
  - 編輯表單與版本時間更新
  - 操作結果提示
- **DoD**：
  - 依角色可/不可修改符合規格
  - 更新後資料正確顯示
- **備註**：建議保留修改歷史（可後續擴充）。

## Issue 07
- **Title**：`[FEATURE] 故障日誌刪除（Delete）`
- **Body Type**：Feature
- **Priority**：P0
- **Labels**：`type:feature`, `priority:P0`, `area:logs`
- **目的**：提供安全刪除流程。
- **工作項目**：
  - 權限檢查
  - 二次確認 UI
  - 刪除結果回饋
- **DoD**：
  - 僅有權限角色可刪除
  - 刪除後列表與搜尋不再顯示
- **備註**：可評估軟刪除機制。

## Issue 08
- **Title**：`[FEATURE] 故障日誌搜尋：關鍵字`
- **Body Type**：Feature
- **Priority**：P0
- **Labels**：`type:feature`, `priority:P0`, `area:search`
- **目的**：用關鍵字快速找到相似案例。
- **工作項目**：
  - 關鍵字查詢邏輯
  - 搜尋結果列表
  - 無結果提示
- **DoD**：
  - 輸入關鍵字可回傳相關資料
  - 回應時間可接受
- **備註**：後續可加入模糊搜尋。

## Issue 09
- **Title**：`[FEATURE] 故障日誌搜尋：相關部件`
- **Body Type**：Feature
- **Priority**：P1
- **Labels**：`type:feature`, `priority:P1`, `area:search`
- **目的**：依部件定位可能原因與處理方式。
- **工作項目**：
  - 部件欄位索引
  - 部件篩選 UI
  - 結果排序
- **DoD**：
  - 指定部件能回傳對應案例
  - 搜尋條件可清除重設
- **備註**：需統一部件命名規則。

## Issue 10
- **Title**：`[FEATURE] 故障日誌搜尋：故障碼`
- **Body Type**：Feature
- **Priority**：P0
- **Labels**：`type:feature`, `priority:P0`, `area:search`
- **目的**：透過故障碼精準查詢案例。
- **工作項目**：
  - 故障碼欄位規則
  - 故障碼查詢 API
  - 結果顯示與跳轉
- **DoD**：
  - 輸入故障碼可命中對應案例
  - 可從結果進入詳情
- **備註**：建議支援多廠牌碼制。

## Issue 11
- **Title**：`[FEATURE] 日誌詳情頁（完整故障處理記錄）`
- **Body Type**：Feature
- **Priority**：P1
- **Labels**：`type:feature`, `priority:P1`, `area:logs`, `area:ui`
- **目的**：集中呈現故障現象、根因、處理步驟與結果。
- **工作項目**：
  - 詳情頁版面設計
  - 欄位分段顯示
  - 操作按鈕權限控制
- **DoD**：
  - 內容完整且易讀
  - 權限按鈕顯示正確
- **備註**：可加入列印/分享功能（後續）。

## Issue 12
- **Title**：`[FEATURE] 日誌清單頁與分頁/載入優化`
- **Body Type**：Feature
- **Priority**：P2
- **Labels**：`type:feature`, `priority:P2`, `area:logs`, `area:performance`
- **目的**：在資料量成長後仍維持可用性。
- **工作項目**：
  - 分頁或無限滾動
  - 基本排序（新到舊）
  - 載入中狀態
- **DoD**：
  - 清單載入流暢
  - 操作不造成明顯卡頓
- **備註**：與搜尋效能一起驗證。

## Issue 13
- **Title**：`[TASK] 欄位字典與故障碼命名規範`
- **Body Type**：Task
- **Priority**：P1
- **Labels**：`type:task`, `priority:P1`, `area:data`
- **目的**：確保資料可被長期維護與搜尋。
- **工作項目**：
  - 制定欄位字典
  - 統一部件、故障碼格式
  - 文件化規範
- **DoD**：
  - 有可遵循的命名規範文件
  - 新資料輸入符合規範
- **備註**：避免同義詞造成搜尋落差。

## Issue 14
- **Title**：`[TASK] 權限測試案例（角色邊界）`
- **Body Type**：Task
- **Priority**：P1
- **Labels**：`type:task`, `priority:P1`, `area:test`, `area:security`
- **目的**：驗證角色權限不會越權。
- **工作項目**：
  - 4 角色 CRUD 測試矩陣
  - 搜尋權限驗證
  - 權限拒絕訊息驗證
- **DoD**：
  - 主要邊界情境都有測試
  - 越權情境可穩定被阻擋
- **備註**：每次權限調整都需回歸。

## Issue 15
- **Title**：`[TASK] 行動端 UI（繁體中文）一致性檢查`
- **Body Type**：Task
- **Priority**：P1
- **Labels**：`type:task`, `priority:P1`, `area:ui`
- **目的**：確保所有頁面與提示訊息皆為繁體中文且用詞一致。
- **工作項目**：
  - 頁面文案盤點
  - 按鈕與提示一致化
  - 錯誤訊息在地化
- **DoD**：
  - 關鍵流程均為繁體中文
  - 無混雜簡體/英文殘留
- **備註**：可建立文案詞庫。

## Issue 16
- **Title**：`[TASK] 搜尋效能基準與索引策略`
- **Body Type**：Task
- **Priority**：P2
- **Labels**：`type:task`, `priority:P2`, `area:search`, `area:performance`
- **目的**：建立可持續優化的效能基準。
- **工作項目**：
  - 定義基準資料量
  - 測試關鍵字/部件/故障碼查詢
  - 建議索引策略
- **DoD**：
  - 有量化結果與優化建議
  - 查詢效能達可接受範圍
- **備註**：資料量擴大後需重測。

## Issue 17
- **Title**：`[TASK] 資料備份與復原流程`
- **Body Type**：Task
- **Priority**：P1
- **Labels**：`type:task`, `priority:P1`, `area:ops`, `area:data`
- **目的**：確保資料遺失風險可控。
- **工作項目**：
  - 定義備份週期
  - 建立復原演練流程
  - 紀錄責任與步驟
- **DoD**：
  - 可執行完整備份與復原演練
  - 有明確操作文件
- **備註**：建議至少月度演練一次。

## Issue 18
- **Title**：`[TASK] 事件審計與操作紀錄`
- **Body Type**：Task
- **Priority**：P2
- **Labels**：`type:task`, `priority:P2`, `area:security`, `area:ops`
- **目的**：追蹤重要操作（登入、刪除、權限變更）。
- **工作項目**：
  - 定義審計事件清單
  - 建立查詢介面
  - 保留期限設定
- **DoD**：
  - 重要操作皆可追溯
  - 可依時間/人員查詢
- **備註**：需注意隱私與留存政策。

## Issue 19
- **Title**：`[TASK] 上線前安全檢查清單`
- **Body Type**：Task
- **Priority**：P1
- **Labels**：`type:task`, `priority:P1`, `area:security`
- **目的**：降低上線安全風險。
- **工作項目**：
  - 檢查權限設定與密鑰管理
  - 檢查 API 與資料存取限制
  - 檢查第三方登入設定
- **DoD**：
  - 安全檢查清單全數通過
  - 高風險項目已修復或有補償措施
- **備註**：上線前必做 Gate。

## Issue 20
- **Title**：`[TASK] MVP 驗收與使用者教學文件`
- **Body Type**：Task
- **Priority**：P1
- **Labels**：`type:task`, `priority:P1`, `area:docs`
- **目的**：確保非工程背景使用者可實際操作。
- **工作項目**：
  - MVP 功能驗收
  - 建立圖文教學（登入、建檔、搜尋）
  - 常見問題整理
- **DoD**：
  - 非工程背景使用者可獨立完成主要流程
  - 文件可被持續更新
- **備註**：建議附短影片教學。
