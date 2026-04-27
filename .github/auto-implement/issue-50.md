# Auto implement task for #50

Source issue: #50

## Issue title
[TASK] 補齊專案基礎架構與開發環境缺口

## Issue body
### Body Type

Task

### Priority

P0

### 目的

補齊目前專案在基礎架構上的缺口，使 TB-DataBase 能正式進入可持續開發狀態，並符合 README 與 backlog 中對 Issue #3 / #8 的要求。

### 工作項目

1. 建立 Expo / React Native 專案基礎結構
   - 建立可開始開發的 app 目錄與基本檔案
   - 補齊必要設定檔，例如 `package.json`、`app.json` / `app.config.*`、`babel.config.*`、`metro.config.*`
   - 規劃基本資料夾結構

2. 鎖定 Expo SDK 54.0.2
   - 將 `expo`、`react-native`、`expo-router` 與相關套件版本對齊 Expo SDK 54.0.2
   - 確保版本組合可正常安裝與啟動
   - 如有 lockfile，需一併確認版本固定

3. 建立 CI 基本流程
   - 增加 lint / typecheck / test 等基本驗證流程
   - PR 時自動檢查主要品質門檻
   - 確保基礎流程可在 GitHub Actions 上執行

4. 確認分支保護與 PR 規範
   - 確保 main 分支受保護
   - 規劃至少需要 PR review / status checks 才能合併
   - 保留可追溯的提交與審查流程

### Definition of Done (DoD)

- `package.json` 明確鎖定 Expo SDK 54.0.2
- 專案可成功安裝與啟動
- repo 中存在清楚的 app 基礎結構
- GitHub Actions 可執行基本 CI 驗證
- 主分支具備保護設定與 PR 流程規範

### Labels（額外）

_No response_

### 相關備註

- 這個任務是 Issue #3 / #8 的補齊項目，目標是讓目前只有流程自動化的狀態，真正進入可開發、可驗證、可持續維護的基礎階段。