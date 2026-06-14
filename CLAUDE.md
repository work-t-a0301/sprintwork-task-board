# task-board

タスク管理ボードアプリ。

## 技術スタック

※ 決定後に更新すること

- **フロントエンド**: （未定）
- **バックエンド**: （未定）
- **データストア**: （未定）

## ファイル構成

※ 実装開始後に更新すること

```
task-board/
└── （未定）
```

## 開発ルール

- `innerHTML` の使用は禁止。XSS防止のため `textContent` / `createElement` を使うこと。
- グローバル変数は最小限に抑える。
- `console.log` はデバッグ用途のみ。本番コードに残さない。
- コメントは「なぜ（WHY）」が自明でない箇所にのみ記述する。
- スタイルは inline style を書かず、CSS ファイルにまとめる。

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

※ 実装開始後に更新すること
