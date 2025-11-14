---
description: "Task list for Profile Page feature implementation"
---

# Tasks: プロフィール画面

**Input**: Design documents from `/specs/003-profile-page/`
**Prerequisites**: plan.md (required), spec.md (required for user stories)

## Phase 1: Setup (Shared Infrastructure)

- [ ] [P] T001 プロフィールページ用のルートフォルダと Page コンポーネントの雛形を作成 `web/src/app/profile/Page.tsx`
- [ ] [P] T002 プロフィールページ用のレイアウトファイルを作成 `web/src/app/profile/layout.tsx`
- [ ] [P] T003 コンポーネント用ディレクトリ（atoms, molecules, organisms）を作成 `web/src/components/`
- [ ] [P] T004 置換用コンポーネントファイルを作成: `Icon.tsx`, `Text.tsx`, `ProfileInfo.tsx`, `SNSLinks.tsx`, `ProfilePage.tsx`
- [ ] [P] T005 プレースホルダー画像を公開ディレクトリへコピー `web/public/images/placeholder-avatar.png`

## Phase 3: User Story 1 - プロフィール確認 (Priority: P1)

**Goal**: Visit `/profile` and see icon, nickname, bio, SNS links.

### Tests for User Story 1

- [ ] [P] [US1] T008 ProfilePage コンポーネントのユニットテストを書き、必ず失敗させる `tests/unit/ProfilePage.test.tsx`
- [ ] [P] [US1] T009 ProfilePage の統合テストを書き、必ず失敗させる `tests/integration/ProfilePage.test.tsx`
- [ ] [P] [US1] T010 ProfilePage の Storybook ストーリーを作成 ` .storybook/organisms/ProfilePage.stories.tsx`

### Implementation for User Story 1

- [ ] [P] [US1] T011 ProfilePage コンポーネントを実装し、ProfileInfo と SNSLinks を組み合わせる `web/src/app/profile/Page.tsx`
- [ ] [P] [US1] T012 ProfileInfo コンポーネントを実装し、アイコン・ニックネーム・自己紹介（Markdown）を表示 `web/src/components/molecules/ProfileInfo/ProfileInfo.tsx`
- [ ] [P] [US1] T013 SNSLinks コンポーネントを実装し、SNS アイコン付きリンクを表示、無効 URL は非表示にする `web/src/components/molecules/SNSLinks/SNSLinks.tsx`
- [ ] [P] [US1] T014 ProfileInfo で IconURL がない場合のプレースホルダーを実装 `web/src/components/molecules/ProfileInfo/ProfileInfo.tsx`
- [ ] [P] [US1] T015 ProfileInfo で BioMarkdown が空の場合のプレースホルダーを実装 `web/src/components/molecules/ProfileInfo/ProfileInfo.tsx`
- [ ] [P] [US1] T016 ProfilePage の CSS レイアウトを作成 `web/src/components/organisms/ProfilePage/ProfilePage.tsx`

## Phase 4: User Story 2 - Markdown 自己紹介表示 (Priority: P2)

**Goal**: Render Markdown bio safely as HTML.

### Tests for User Story 2

- [ ] [P] [US2] T017 Markdown コンポーネントのユニットテストを書き、必ず失敗させる `tests/unit/MarkdownRenderer.test.tsx`
- [ ] [P] [US2] T018 ProfileInfo の Markdown 表示統合テストを書き、必ず失敗させる `tests/integration/ProfileInfo.test.tsx`
- [ ] [P] [US2] T019 ProfileInfo の Markdown ストーリーを作成 ` .storybook/molecules/ProfileInfo.stories.tsx`

### Implementation for User Story 2

- [ ] [P] [US2] T020 MarkdownRenderer コンポーネントを実装し、軽量パーサーを使用 `web/src/components/atoms/Markdown/Markdown.tsx`
- [ ] [P] [US2] T021 ProfileInfo で MarkdownRenderer を使用するように更新 `web/src/components/molecules/ProfileInfo/ProfileInfo.tsx`

## Phase 5: Polish & Cross‑Cutting Concerns

- [ ] T022 リンティング、フォーマッティング、CI チェックを実行し、プロジェクト基準に準拠することを確認する
- [ ] T023 すべてのテストが通過し、カバレッジが 90％以上であることを確認する
- [ ] T024 ドキュメントを更新し、新しいコンポーネントと使用例を反映する

---
