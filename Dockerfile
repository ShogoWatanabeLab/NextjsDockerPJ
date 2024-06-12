# ベースイメージとしてNode.jsを指定
FROM node:18

# 作業ディレクトリを設定
WORKDIR /workspace/

# 必要なパッケージをインストール
RUN apt-get update && apt-get install -y \
    curl \
    git \
    && rm -rf /var/lib/apt/lists/*

# package.jsonとpackage-lock.lockをコピー
COPY ./my-app/package.json ./my-app/package-lock.json ./

# 依存関係をインストール
RUN yarn install

# プロジェクトの全ファイルをコピー
COPY . .

# デフォルトコマンド
CMD ["yarn", "dev"]