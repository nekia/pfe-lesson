# 📘 Platform Engineer 技術課題：マイクロサービス基盤構築トライアル

## 🎯 課題概要

この課題は、モノリシックな商品注文管理システムをベースに、**マイクロサービスアーキテクチャへの分割、クラウド上へのインフラ構築、可観測性・開発者体験の整備**を通じて、Platform Engineer として必要な基礎能力を実践的に評価するものです。

## 🧾 提出物

- GitHub上のForkリポジトリ（Pull Request形式で提出）
- 再現可能なTerraformコード、サービスコード、README
- 簡易な設計意図や工夫ポイントの説明
- 任意: スクリーンショットやアーキテクチャ図（Backstage画面、CloudWatchログ、Grafanaなど）

## ストーリー

あなたは社内Platformチームに新たに加わったエンジニアです。現状はモノリスで動いている注文管理システムを、スケーラビリティや可視性を考慮しつつ、マイクロサービス化して開発基盤へ載せるプロジェクトが始動しました。あなたのタスクは、**次の要件に沿って設計・実装し、動作するシステムを構築すること**です。

## 🧩 技術課題の構成

### 1. モノリシックアプリの理解と分割
- `monolith-app/` 配下にある簡易な注文管理システムを読解してください
- 機能は3つの責務に分かれています：
  - Product（商品一覧・追加）
  - Customer（顧客登録・取得）
  - Order（注文登録・取得）
- この構成をもとに、**次の3サービスにマイクロサービス化**してください：

| サービス          | API例                  | 備考                        |
|-------------------|------------------------|-----------------------------|
| service-product   | `GET /products`        | 商品データの取得・追加     |
| service-customer  | `GET /customers`       | 顧客データの取得・追加     |
| service-order     | `POST /orders`         | 顧客・商品と連携して注文処理 |

- 各サービスは**独立したDockerコンテナ**として実行できるようにしてください
- Order Service から Product / Customer Service への連携は**REST APIで実装**してください（例: `axios` / `node-fetch`）

### 2. クラウド環境への構築（AWS + Terraform）

以下の構成をTerraformで構築してください：

- **Amazon ECS (Fargate)** を利用したコンテナ実行環境
- **3サービスのコンテナデプロイ**
- **サービス間通信の構成（同一VPC内またはサービスディスカバリ）**
- **外部公開（例: Order Service のみ ALB 経由で公開）**
- **ログの出力（CloudWatch Logs）**
- **ECR（Elastic Container Registry）でのイメージ管理**

Terraformの再現性を意識し、READMEに手順を記述してください。

### 3. 可観測性の追加（Observability）

- 各サービスの**ログがCloudWatch Logsに記録されていること**
- 少なくとも以下のログを出力してください：
  - API呼び出しログ
  - Service間連携のリクエストログ
- 以下を導入してください：
  - カスタムメトリクス（CloudWatch Metrics）
  - Grafanaダッシュボード

### 4. Backstage カタログ登録

- ECS上に **Backstage** を構築し、以下を行ってください：
  - 各サービスの `Component` YAML を作成（例：`service-product.yaml`）
  - Backstage の Software Catalog に登録
  - サービスの説明・ライフサイクル・オーナーなどを記述

例：
```yaml
apiVersion: backstage.io/v1alpha1
kind: Component
metadata:
  name: service-product
  description: 商品情報を管理するサービス
spec:
  type: service
  lifecycle: development
  owner: platform-team
```

### 5. 簡易フロントエンドの利用

- `frontend-app/index.html` を利用して、Order Service にPOSTできるフォームに加え、
  顧客一覧・商品一覧・注文一覧を取得して表示するUIも確認してください
- サーバを起動するか、S3 + CloudFront等で簡易ホスティングしても構いません

## ✅ 評価基準

| 観点             | 評価内容                                                                 |
|------------------|--------------------------------------------------------------------------|
| 設計の妥当性     | サービス分割が責務ごとに整理され、通信・依存関係が適切に構成されているか   |
| コード品質       | Dockerfile, Terraform, 各サービスのコードが整然としているか                |
| 再現性           | README通りに `terraform apply` や `docker-compose` で構築できるか         |
| 観測性の導入     | CloudWatch Logs, メトリクス, Grafanaなどが設定されているか（最低ログ）     |
| Backstage活用    | サービスがカタログ登録されており、情報が整理されているか                   |
| ドキュメント整備 | READMEの構成、構築手順、考慮事項や補足説明が明瞭か                         |

## 🔚 提出方法

1. この課題テンプレートを **GitHubにFork** してください
2. 課題毎に実装・構成を行い、1つのPull Requestにまとめてください
3. PRのタイトル例：
   ```
   [課題1] マイクロサービス化
   ```
4. PR本文に次を記述してください：
   - 作業時間の目安
   - 自信がないポイント
   - 未完部分があればその理由と補完案


## 📦 素材（開始点）

内容物：
- `monolith-app/`：モノリシックアプリ
- `frontend-app/`：注文用フロントエンド

---

ご不明点はPR内に記載いただいても構いません。良いチャレンジを！💪🚀
