# task-board

タスク管理ボードアプリ。

## 技術スタック

- **フロントエンド**: React 18 + Vite 5
- **スタイリング**: CSS3（CSS Modules なし、BEM 命名規則）
- **バックエンド**: なし（フロントエンド完結）
- **データ永続化**: localStorage（`task-board-tasks` キーで保存、ページリロード後も維持）
- **デプロイ**: GitHub Pages（GitHub Actions で main プッシュ時に自動デプロイ）

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

## 命名規約

### コンポーネント
- ファイル名・関数名ともに **PascalCase**（例: `TaskInput.jsx`, `function TaskInput`）
- `src/components/` 以下に配置する

### Props・変数・関数
| 種類 | 規則 | 例 |
|------|------|----|
| Props | camelCase | `onAdd`, `onToggle`, `onDelete` |
| state 変数 | camelCase | `tasks`, `value` |
| イベントハンドラ | `handle` プレフィックス + PascalCase | `handleSubmit` |
| 定数（モジュールスコープ） | SCREAMING_SNAKE_CASE | `STORAGE_KEY` |

### CSS クラス（BEM）
- **Block**: コンポーネント名をケバブケースで（例: `task-input`, `task-item`）
- **Element**: `block__element`（例: `task-input__field`, `task-item__text`）
- **Modifier**: `block--modifier`（例: `task-item--completed`）

```
.task-item           ← Block
.task-item__text     ← Element
.task-item--completed ← Modifier
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
