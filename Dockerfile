# Используем официальный образ Node.js
FROM node:18-alpine

# Создаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем файлы package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальные файлы проекта в контейнер
COPY . .

# Генерируем Prisma клиент
RUN npx prisma generate

# Сборка проекта Next.js
RUN npm run build

# Указываем порт, который контейнер будет слушать
EXPOSE 3000

# Запуск сервера Next.js
CMD ["npm", "run", "start"]
