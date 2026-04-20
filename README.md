# TB-DataBase（升降機故障排除協作資料庫）

> 目標：建立一個可多人協作、可快速搜尋的「升降機故障排除工作日誌」系統，支援 iOS / Android 使用。

---

## 1. 專案背景

此專案用於記錄每次升降機故障排除的完整工作內容，讓團隊日後遇到類似狀況時，可以用關鍵字、部件、故障碼快速查到可行建議與歷史處理紀錄。

---

## 2. 核心需求（依需求整理）

### 2.1 帳號與權限
- 使用 **Google（Gmail）登入**
- 權限角色：
  - **超級管理員**：建立 / 修改 / 刪除 / 搜尋所有資料，並可產生權限變更連結
  - **管理員**：建立 / 修改 / 刪除 / 搜尋所有資料
  - **授權人士**：建立 / 修改 / 刪除自己建立的資料，搜尋所有資料
  - **訪客**：僅可搜尋所有資料

### 2.2 故障日誌
- 建立日誌
- 修改日誌
- 刪除日誌

### 2.3 搜尋日誌
- 依關鍵字搜尋
- 依相關部件搜尋
- 依故障碼搜尋

### 2.4 平台與語言
- 行動端：iOS / Android
- UI 語言：**繁體中文**
- 原則：盡量低成本

---

## 3. 建議技術路線（低成本優先）

> 此處是建議架構，後續可在 Issues 中逐步落地。

- 前端：React Native（單一程式碼支援 iOS / Android）
- 後端與資料庫：Supabase（PostgreSQL + Auth + Storage）
- 驗證：Google OAuth（Gmail 登入）
- 權限：資料表角色欄位 + Row Level Security（RLS）
- 部署：
  - App 測試階段：Expo 測試佈署
  - 後端：Supabase 雲端託管

---

## 4. 資料結構（初版草案）

### 4.1 users
- id（UUID）
- email（Gmail）
- display_name
- role（super_admin / admin / authorized / guest）
- created_at / updated_at

### 4.2 fault_logs
- id（UUID）
- title（故障標題）
- description（故障描述）
- fault_code（故障碼）
- component（相關部件）
- symptoms（現象）
- root_cause（根因）
- action_taken（處理步驟）
- result（處理結果）
- created_by（user id）
- created_at / updated_at

### 4.3 role_change_links
- id（UUID）
- target_user_id
- new_role
- token
- expires_at
- created_by（super_admin）
- used_at

---

## 5. GitHub 協作規範（本專案已建立）

本倉庫已加入：

1. **完整 Issue 規劃文件**
   請參考：`/docs/ISSUES_BACKLOG.zh-TW.md`

2. **Issue Form（網頁版可直接填）**
   - 功能需求：`Feature Request`
   - 任務：`Task`
   - 錯誤回報：`Bug Report`

3. **Issue 自動化 Workflow**
   - 依 `Body Type` / `Priority` 自動加標籤
   - 檢查必要欄位是否完整，若不足會自動留言提醒

4. **Labels 自動同步 Workflow**
   - 由 `.github/labels.yml` 統一管理標籤

---

## 6. 建議開發順序

1. 先完成資料庫與權限模型（Google 登入 + 角色）
2. 完成故障日誌 CRUD
3. 完成搜尋（關鍵字 / 部件 / 故障碼）
4. 補上權限變更連結（僅超級管理員）
5. 做 UI 優化與上線準備

---

## 7. 目前文件清單

- `README.md`：專案總覽與需求整理
- `docs/ISSUES_BACKLOG.zh-TW.md`：完整 Issue 清單設計（含 DoD）
- `.github/ISSUE_TEMPLATE/*.yml`：網頁版 Issue 表單
- `.github/workflows/issue-triage.yml`：Issue 自動分類與檢查
- `.github/workflows/sync-labels.yml`：標籤同步
- `.github/labels.yml`：標籤定義

---

## 8. 你現在可以直接做的事（純網頁版 GitHub）

1. 進入 GitHub 倉庫頁面 → `Actions`
2. 手動執行一次 **Sync Labels**（建立所有標籤）
3. 進入 `Issues` → `New issue`，用表單建立第一批需求
4. 依 `docs/ISSUES_BACKLOG.zh-TW.md` 逐一建立（可先建立 P0/P1）
5. 指派負責人與里程碑，開始執行
