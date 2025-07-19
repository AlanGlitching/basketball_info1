## 1. 文檔信息
- 版本：v1.0
- 編寫日期：2024-06-09
- 分發對象：後端開發、前端開發、測試

## 2. 架構：React 18 vite
- 本專案 API 設計配合 React 18 + Vite 前端架構，現階段資料來源為靜態資料，未來可擴展為 API。

## 3. API總覽
- 目前資料為靜態，未來可擴展API

## 4. 端點設計（範例）
### 4.1 取得球員資料
- GET /api/player/{id}
- 回傳：{ name, role, avatar }

### 4.2 取得賽季統計
- GET /api/player/{id}/stats
- 回傳：{ goals, assists, playtime }

### 4.3 取得比賽記錄
- GET /api/player/{id}/matches
- 回傳：[{ stats, opponent }]

### 4.4 取得賽季績效指標
- GET /api/player/{id}/metrics
- 回傳：[{ label, value, change, changeType }]

### 4.5 取得賽季比較
- GET /api/player/{id}/season-comparison
- 回傳：[{ season, points, assists, rebounds, games }]

## 5. 回傳格式範例
```json
{
  "name": "Ethan",
  "role": "Basketball Player",
  "avatar": "/profile.jpg"
}
```

## 6. 錯誤碼設計
- 404：查無資料
- 500：伺服器錯誤

## 7. 文件關聯
- 上游：SRD、設計文件
- 下游：前端/後端開發、測試 