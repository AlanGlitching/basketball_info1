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

## 環境變數設定

為了安全起見，Supabase 的 URL 和 API 金鑰已移至環境變數中。請按照以下步驟設定：

1. 在專案根目錄建立 `.env` 檔案
2. 在 `.env` 檔案中加入以下內容：

```env
VITE_SUPABASE_URL=your_supabase_url_here
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

3. 將你的實際 Supabase URL 和 Anon Key 替換上述的佔位符

**重要：** `.env` 檔案已被加入 `.gitignore`，不會被提交到版本控制系統中。

## 其他

- 如需整合 Figma 設計稿，請將設計匯出後放入 `public/` 或 `src/assets/`。
- favicon 可用 `npx imagemin public/xxx.svg --out-dir=public --plugin=svgo` 進行最佳化。
