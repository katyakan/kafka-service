# Kafka Notification System

Микросервисная система для отправки уведомлений в Telegram с использованием Apache Kafka. Состоит из трёх сервисов:

- **Producer Service** — принимает HTTP-запросы и отправляет сообщения в Kafka
- **Consumer Service** — получает и логирует сообщения из Kafka (демо-сервис)
- **Notification Service** — получает сообщения из Kafka и отправляет уведомления в Telegram

## Технологии

- Node.js
- NestJS
- Apache Kafka
- Docker
- Telegram Bot API

## Swagger

Документация API доступна по адресу: [http://localhost:3000/api](http://localhost:3000/api)

## Структура проекта

```
apps/
├── producer-service/      # Приём сообщений и отправка в Kafka
├── consumer-service/      # Демонстрационный потребитель
└── notification-service/  # Отправка сообщений в Telegram

libs/
└── shared/                # Общие интерфейсы и утилиты
```

## Переменные окружения

| Переменная           | Описание                         | Значение по умолчанию |
|----------------------|----------------------------------|------------------------|
| TELEGRAM_BOT_TOKEN   | Токен Telegram-бота              | —                      |
| KAFKA_BROKERS        | Адреса Kafka-брокеров            | localhost:9092         |
| PORT                 | Порт сервиса                     | 3000 / 3001 / 3002    

## Установка
1. Клонируйте репозиторий
```bash
git clone https://github.com/katyakan/kafka-service .
```
2. Создайте .env file в корне репозитория:
```
TELEGRAM_BOT_TOKEN=<your_telegram_bot_token_here>

```
## Запуск докер контейнера
```bash
docker-compose build
docker-compose up -d

```

## Локальный запуск

1. Установите зависимости:

```bash
npm install
```
2. Запустите Kafka и Zookeeper:
```bash
 docker-compose up -d zookeeper kafka
```
3. Запустите сервисы в отдельных терминалах:

**Терминал 1 (Producer)**

```bash
export PORT=3000
npm run start:dev:producer
```

**Терминал 2 (Consumer)**

```bash
export PORT=3001
npm run start:dev:consumer
```

**Терминал 3 (Notification)**

```bash
export  PORT=3002
npm run start:dev:notification
```

## Отправка уведомлений

Пример запроса:

```bash
curl -X POST http://localhost:3000/messages \
-H "Content-Type: application/json" \
-d '{
  "type": "notification",
  "payload": {
    "chatId": ВАШ_CHAT_ID,
    "text": "Привет от Producer!"
  }
}'
```

## Получение Chat ID

1. Найдите  бота https://t.me/userinfobot в Telegram
2. Напишите ему `/start`
3. Просмотрите ваш chat ID

