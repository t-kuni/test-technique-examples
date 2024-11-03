# DIありパターン

実装： [code](./index.ts)
テストコード： [code](./index.spwc.ts)

## 実行方法

```
npm --prefix ../ install
npm start
```

Run the DB.

```bash
docker run --name test-tech-db -e POSTGRES_PASSWORD=test -v ./init.sql:/docker-entrypoint-initdb.d/init.sql -d -p 5432:5432 postgres:13.16
npx prisma generate
```

```
docker exec -it test-tech-db psql -U postgres -d postgres -c "SELECT * FROM todos;"
```

## テスト実行方法

```
npm test
```