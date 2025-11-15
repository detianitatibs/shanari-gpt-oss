---
description: "Task list for Profile Page feature implementation"
---

# Tasks: プロフィール画面

**Input**: Design documents from `/specs/003-profile-page/`
**Prerequisites**: plan.md (required), spec.md (required for user stories)

## Phase 1: Setup (Shared Infrastructure)

- [x] [P] T001 プロフィールページ用のルートフォルダと Page コンポーネントの雛形を作成 `web/src/app/profile/Page.tsx`
- [x] [P] T002 プロフィールページ用のレイアウトファイルを作成 `web/src/app/profile/layout.tsx`
- [x] [P] T003 コンポーネント用ディレクトリ（atoms, molecules, organisms）を作成 `web/src/components/`
- [x] [P] T004 Icon コンポーネントを作成 `web/src/components/atoms/Icon/Icon.tsx` と `web/src/components/atoms/Icon/Icon.stories.tsx`
- [x] [P] T005 Text コンポーネントを作成 `web/src/components/atoms/Text/Text.tsx` と `web/src/components/atoms/Text/Text.stories.tsx`
- [x] [P] T006 ProfileInfo コンポーネントを作成 `web/src/components/molecules/ProfileInfo/ProfileInfo.tsx` と `web/src/components/molecules/ProfileInfo/ProfileInfo.stories.tsx`
- [x] [P] T007 SNSLinks コンポーネントを作成 `web/src/components/molecules/SNSLinks/SNSLinks.tsx` と `web/src/components/molecules/SNSLinks/SNSLinks.stories.tsx`
- [x] [P] T008 ProfilePage コンポーネントを作成 `web/src/components/organisms/ProfilePage/ProfilePage.tsx` と `web/src/components/organisms/ProfilePage/ProfilePage.stories.tsx`
- [x] [P] T009 置換用プレースホルダー画像を公開ディレクトリに作成 `web/public/images/placeholder-avatar.png`

## Phase 2: Test Infrastructure

- [x] T010 テストフォルダ構成を設定し、integration & unit さらに例として `web/tests/integration/page.test.tsx` と `web/tests/unit/component.test.tsx` を作成する。

## Phase 3: User Story 1 - プロフィール確認 (Priority: P1)

**Goal**: Visit `/profile` and see icon, nickname, bio, SNS links.

### Tests for User Story 1

- [x] [P] [US1] T011 ProfilePage コンポーネントのユニットテストを書き、必ず失敗させる `web/tests/unit/ProfilePage.test.tsx`
- [x] [P] [US1] T012 ProfilePage の統合テストを書き、必ず失敗させる `web/tests/integration/ProfilePage.test.tsx`
- [x] [P] [US1] T013 ProfilePage の Storybook ストーリーを作成 `web/src/components/organisms/ProfilePage/ProfilePage.stories.tsx`

### Implementation for User Story 1

- [x] [P] [US1] T014 ProfileInfo コンポーネントを実装し、アイコン・ニックネーム・自己紹介（Markdown）を表示 `web/src/components/molecules/ProfileInfo/ProfileInfo.tsx`
- [x] [P] [US1] T015 SNSLinks コンポーネントを実装し、SNS アイコン付きリンクを表示、無効 URL は非表示にする `web/src/components/molecules/SNSLinks/SNSLinks.tsx`
- [x] [P] [US1] T016 ProfilePage コンポーネントを実装して ProfileInfo と SNSLinks を組み合わせる `web/app/profile/Page.tsx`
- [x] [P] [US1] T017 ProfileInfo で IconURL がない場合のプレースホルダーを実装 `web/src/components/molecules/ProfileInfo/ProfileInfo.tsx`
- [x] [P] [US1] T018 ProfileInfo で BioMarkdown が空の場合のプレースホルダーを実装 `web/src/components/molecules/ProfileInfo/ProfileInfo.tsx`
- [x] [P] [US1] T019 ProfilePage の CSS レイアウトを作成 `web/src/components/organisms/ProfilePage/ProfilePage.tsx`

## Phase 4: User Story 2 - Markdown 自己紹介表示 (Priority: P2)

**Goal**: Render Markdown bio safely as HTML.

### Tests for User 2

- [x] [P] [US2] T020 Markdown コンポーネントのユニットテストを書き、必ず失敗させる `web/tests/unit/MarkdownRenderer.test.tsx`
- [x] [P] [US2] T021 ProfileInfo の Markdown 表示統合テストを書き、必ず失敗させる `web/tests/integration/ProfileInfo.test.tsx`
- [x] [P] [US2] T022 Markdown コンポーネントの Storybook ストーリーを作成 `web/src/components/atoms/Markdown/Markdown.stories.tsx`

### Implementation for User 2

- [x] [P] [US2] T023 MarkdownRenderer コンポーネントを実装し、軽量パーサーを使用 `web/src/components/atoms/Markdown/Markdown.tsx`
- [x] [P] [US2] T024 ProfileInfo で MarkdownRenderer を使用するように更新 `web/src/components/molecules/ProfileInfo/ProfileInfo.tsx`

## Phase 5: Polish & Cross‑Cutting Concerns

- [x] T033 リンティング、フォーマッティング、CI チェックを実行し、プロジェクト基準に準拠することを確認する
- [x] T034 すべてのテストが通過し、カバレッジが 90％以上であることを確認する
- [x] T035 `README.md`ドキュメントを更新し、新しいコンポーネントと使用例を反映する

---
