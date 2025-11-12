# Shanari GPT OSS

## 1. 開発環境のセットアップ

### a. 依存関係のインストール

```bash
cd web
npm install
```

> **注意**：`package.json` は `web/` ディレクトリに存在しています。

## 2. Next.js の起動 (ローカル環境)

```bash
cd web
npm run dev
```

ブラウザで `http://localhost:3000` を開くと、Hello World が表示されます。<br>※開発モードのため、変更はホットリロードで即時反映されます。

## 3. テストの実行 (Vitest)

```bash
cd web
npm run test
```

すべてのテストがカバーされ、結果がコンソールに表示されます。

## 4. Storybook の起動

```bash
cd web
npm run storybook
```

`http://localhost:6006` で Storybook が起動します。コンポーネントのドキュメントや UI ストーリーを確認できます。

---

> このリポジトリは「Hello World」サンプルです。Next.js, Tailwind CSS, Vitest, Storybook を統合した最小構成を示しています。
