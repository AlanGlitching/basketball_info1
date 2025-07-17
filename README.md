# basketball_info1

## 系統需求

- 架構：React 18 + Vite
- 技術棧：TypeScript、CSS Modules、Google Fonts（Roboto）、ImageMagick（favicon 生成，使用 imagemin 代替）
- 外部整合：Figma（設計來源）、靜態資源（public/）

## 安裝與啟動

```bash
npm install
npm run dev
```

## 主要技術說明

- **React 18 + Vite**：現代前端開發架構，支援快速開發與熱重載。
- **TypeScript**：靜態型別檢查，提升開發效率與可維護性。
- **CSS Modules**：元件化樣式，避免全域樣式衝突。
- **Google Fonts**：已於 `src/index.css` 透過 `@import` 引入 Roboto 字體。
- **ImageMagick（favicon 生成）**：專案使用 `imagemin` 進行 SVG 最佳化，可依需求擴充。
- **Figma**：設計稿來源，靜態資源請放置於 `public/` 目錄。

## 目錄結構

- `src/`：主要程式碼
- `public/`：靜態資源（如 favicon、圖片等）
- `vite.config.ts`：Vite 設定檔

## 其他

- 如需整合 Figma 設計稿，請將設計匯出後放入 `public/` 或 `src/assets/`。
- favicon 可用 `npx imagemin public/xxx.svg --out-dir=public --plugin=svgo` 進行最佳化。
