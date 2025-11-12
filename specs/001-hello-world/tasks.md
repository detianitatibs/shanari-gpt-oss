# Tasks: Hello World Environment

**Input**: Design documents from `/specs/001-hello-world/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

## Phase 1: Setup (Shared Infrastructure)

- [x] T001 [P] プロジェクト構造を実装計画に従って作成
- [x] T002 [P] TypeScript Next.js アプリを `web` ディレクトリに `npx create-next-app@latest web --ts` で初期化
- [x] T003 [P] ESLint と Prettier を Next.js 標準設定で構成

## Phase 2: Foundational (Blocking Prerequisites)

- [x] T004 [P] Tailwind CSS を設定：`tailwind.config.ts`、`postcss.config.js` を追加し、グローバル CSS に適用
- [x] T005 [P] Storybook を React、Next.js、Tailwind で設定 (Storybook 7)
- [x] T006 [P] Vitest をセットアップ：設定ファイル追加、テストスクリプト、jest スタイルのモックを用意

## Phase 3: User Story 1 - Browser で Hello World を表示する (Priority: P1)

- [x] T007 [US1] `web/src/app/page.tsx` を作成し "Hello World" を表示
- [x] T008 [US1] Text コンポーネント `web/src/components/atoms/Text/Text.tsx` を作成
- [x] T009 [US1] Text コンポーネントに対する Storybook ストーリー `web/src/components/atoms/Text/Text.stories.tsx` を作成
- [x] T010 [US1] Text コンポーネントに対するユニットテスト `web/tests/unit/Text.test.tsx` を作成
- [x] T011 [US1] 統合テスト `web/tests/integration/page.test.tsx` を作成し、`localhost:3000` が "Hello World" を表示することを検証

## Phase 4: Polish & Cross‑Cutting Concerns

- [ ] T012 README に quickstart.md の内容を追加する

## Dependencies & Execution Order

- **Setup** tasks can run in parallel.
- **Foundational** tasks depend on completion of Setup.
- **User Story 1** depends on Foundational.
- **Polish** depends on completion of User Story 1.

---

_All tasks follow the checklist format: `- [ ] TXXX [P] [USX] Description`_
