# Implementation Plan: CI Quality Check

**Branch**: `[002-ci-quality-check]` | **Date**: 2025-11-12 | **Spec**: [spec.md](spec.md)

**Input**: Feature specification from `/specs/002-ci-quality-check/spec.md`

## Summary

GitHub Actions による CI パイプラインを構築し、`web/` 配下で変更がある非 master ブランチへ push 時に静的解析（ESLint, Prettier）、テスト（Vitest）、Docker ビルドチェックを実施し、品質ゲートを設ける。

## Technical Context

- **Language/Version**: JavaScript / TypeScript（Next.js 16 構成）
- **Primary Dependencies**: GitHub Actions, ESLint, Prettier, Vitest, Docker
- **Storage**: N/A
- **Testing**: Vitest（ユニット/統合）
- **Target Platform**: GitHub Actions runner
- **Project Type**: single/web – 1 つのフロントエンドプロジェクト
- **Performance Goals**: CI 実行時間 ≤ 5 分
- **Constraints**: 非 master ブランチに push で、web/ 以下に変更がある場合のみ実行。Dockerfile は web/ 配下に配置。
- **Scale/Scope**: 本番用ビルド（Docker）を対象にする。

## Constitution Check

_GATE: Must pass before Phase 0 research. Re-check after Phase 1 design._

- コード品質: OK
- テスト基準: Vitest で網羅し、CI で自動実行。テストカバレッジ 90％以上を維持。
- ユーザー体験一貫性: UI は Atomic Design。WCAG 2.1 AA 取得。
- パフォーマンス要件: CI 実行時間 ≤ 5 分。
- 技術的意思決定ガバナンス: 選定済み。

**Gates Passed**: ✅

## Project Structure

### Documentation (this feature)

```
specs/002-ci-quality-check/
├── plan.md              # This file
├── research.md          # Phase 0 output (empty for now)
├── data-model.md        # Phase 1 output (empty for now)
├── quickstart.md        # Phase 1 output (empty for now)
├── contracts/           # Phase 1 output (empty for now)
└── tasks.md             # Phase 2 output (TODO)
```

### Source Code (repository root)

```
web/
├── Dockerfile
├── package.json
├── tsconfig.json
├── next.config.js
└── ... (Next.js app files)

.github/
└── workflows/
    └── ci.yml     # GitHub Actions workflow ファイル
```

**Structure Decision**: GitHub Actions を活用し、CI 設定を `.github/workflows/ci.yml` に配置する。Dockerfile は `web/` に置く。

## Complexity Tracking

この機能に対して構成上の問題は検出されません。

**Branch**: `[002-ci-quality-check]` | **Date**: 2025-11-12 | **Spec**: [spec.md](spec.md)

**Input**: Feature specification from `/specs/002-ci-quality-check/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.
