## 1. 文檔信息
- 版本：v1.0
- 編寫日期：2024-06-09
- 分發對象：後端開發、資料庫管理、測試

## 2. 架構：React 18 vite
- 本專案資料庫設計配合 React 18 + Vite 前端架構，資料來源靜態硬編碼於前端元件。

## 3. ERD（實體關聯圖）
- User（球員）
- Stats（賽季統計）
- Match（比賽記錄）
- Metric（績效指標）
- SeasonComparison（賽季比較）

## 4. 資料表結構
### 4.1 User
| 欄位   | 型別   | 說明         |
|--------|--------|--------------|
| id     | int    | 主鍵         |
| name   | string | 姓名         |
| role   | string | 角色         |
| avatar | string | 頭像路徑     |

### 4.2 Stats
| 欄位     | 型別   | 說明         |
|----------|--------|--------------|
| id       | int    | 主鍵         |
| user_id  | int    | 關聯User     |
| goals    | int    | 進球         |
| assists  | int    | 助攻         |
| playtime | int    | 平均上場時間 |

### 4.3 Match
| 欄位     | 型別   | 說明         |
|----------|--------|--------------|
| id       | int    | 主鍵         |
| user_id  | int    | 關聯User     |
| stats    | string | 比賽數據摘要 |
| opponent | string | 對手         |

### 4.4 Metric
| 欄位      | 型別   | 說明         |
|-----------|--------|--------------|
| id        | int    | 主鍵         |
| user_id   | int    | 關聯User     |
| label     | string | 指標名稱     |
| value     | int    | 數值         |
| change    | string | 變化百分比   |
| changeType| string | 正/負        |

### 4.5 SeasonComparison
| 欄位     | 型別   | 說明         |
|----------|--------|--------------|
| id       | int    | 主鍵         |
| user_id  | int    | 關聯User     |
| season   | string | 賽季         |
| points   | int    | 得分         |
| assists  | int    | 助攻         |
| rebounds | int    | 籃板         |
| games    | int    | 出賽場次     |

## 5. 索引與關聯
- User.id 為主鍵，其它表以 user_id 關聯
- 可依 user_id、season 建立複合索引

## 6. 文件關聯
- 上游：SRD、API設計
- 下游：後端開發、資料庫管理 