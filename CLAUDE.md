# task-board

タスク管理ボードアプリ。

## 技術スタック

- **フロントエンド**: React 18 + Vite
- **スタイリング**: CSS3（CSS Modules なし、BEM 命名規則）
- **バックエンド**: なし（フロントエンド完結）
- **データストア**: useState（ブラウザメモリのみ）

## ファイル構成

```
task-board/
├── index.html
├── package.json
├── vite.config.js
├── .gitignore
└── src/
    ├── main.jsx
    ├── index.css          # グローバルリセット
    ├── App.jsx
    ├── App.css            # 全コンポーネントのスタイル
    └── components/
        ├── TaskInput.jsx  # タスク入力フォーム
        ├── TaskList.jsx   # タスク一覧
        └── TaskItem.jsx   # タスク1件
```

## 開発ルール

- JSX 内で `dangerouslySetInnerHTML` は使用禁止。
- グローバル変数は使わない。状態は React の useState で管理する。
- `console.log` はデバッグ用途のみ。本番コードに残さない。
- コメントは「なぜ（WHY）」が自明でない箇所にのみ記述する。
- inline style は書かず、`App.css` にまとめる。

## Git 運用ルール

**コードを変更するたびに、必ず GitHub にプッシュすること。**

```bash
git add <変更ファイル>
git commit -m "変更内容を簡潔に記述"
git push origin main
```

- コミットメッセージは日本語可。変更の「なぜ」が伝わる内容にする。
- `git add .` や `git add -A` は機密ファイル（.env 等）を誤って含めるリスクがあるため、原則としてファイルを個別に指定する。
- force push（`--force`）は禁止。main ブランチへの force push は特に厳禁。
- `.env` などの機密情報を含むファイルはコミットしない。`.gitignore` に必ず追加する。

## GitHubリポジトリ

https://github.com/work-t-a0301/sprintwork-task-board.git

## 動作確認

```bash
npm install   # 初回のみ
npm run dev   # 開発サーバー起動 → http://localhost:5173
```
