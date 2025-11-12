<!--
## Sync Impact Report
- Version change: 0.1.0 → 0.1.1 (minor) - principl refinement
- Modified principles:
  - コード品質
  - テスト基準
  - ユーザー体験一貫性
  - パフォーマンス要件
  - 技術的意思決定ガバナンス
- Added sections: none
- Removed sections: none
- Templates requiring updates:
  - ✅ .specify/templates/tasks-template.md (task categories updated)
  - ⚠ .specify/templates/plan-template.md (review needed)
- Follow-up TODOs:
  - TODO(RATIFICATION_DATE): 実際の採択日を確認
-->

# Shanari GPT OSS Constitution

## Core Principles

### コード品質

コードは明快で再利用しやすい設計とし、設計時に設計文書を日本語で作成すること。コードは単一責任を持ち、依存関係は明示的に管理し、テストカバレッジは 90％以上を維持する。

### テスト基準

全機能はユニットテスト、統合テスト、E2E テストを網羅し、テストは CI で自動実行する。テストはテスト駆動設計（TDD）を採用し、失敗してから実装し、Red‑Green‑Refactor を厳守する。

### ユーザー体験一貫性

UI は Atomic Design の再利用可能コンポーネントで構成し、アクセシビリティは WCAG 2.1 AA を満たす。ドキュメントは日本語で完結し、ユーザーマニュアルはビジュアルで理解できるようにする。

### パフォーマンス要件

ロード時間は 2 秒以内、CPU 使用率は 25％以下に抑える。メモリリークは発見次第修正し、キャッシュ戦略は期限付き LRU を原則とする。

### 技術的意思決定ガバナンス

技術選定はレビュー委員会が審議し、決定は日本語でドキュメント化する。

## 追加制約

設計書とドキュメントは全て日本語で記載されること
（今後、本プロジェクトで必要となるセキュリティ・規格要件等を追記）

## 開発ワークフロー

GitHub Actions を用いた CI/CD を実施し、PR は必ずテスト通過・コードレビュー完了後にマージする。リリースは Semantic Versioning に基づき、リリースノートは自動生成する。

## Governance

1. 本憲章は全開発者の合意に基づき制定される。
2. 設計書とドキュメントは日本語で作成される。
3. 変更が既存コードに重大な影響を与える場合、ラージブレークプランを作成する。
4. 本憲章の最新改訂日は README 等に記載し、CI でチェックを行う。

**Version**: 0.1.2 | **Ratified**: TODO(RATIFICATION_DATE) | **Last Amended**: 2025-11-11
