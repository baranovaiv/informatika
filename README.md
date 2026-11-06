# Сайт учителя информатики

Статический сайт для публикации уроков, материалов и тестов на GitHub Pages.
Чистый HTML + CSS + JavaScript, без сборки и базы данных.

## Структура

```
.
├── index.html                     главная
├── lessons.html                   каталог уроков (фильтр + поиск)
├── materials.html                 файлы для скачивания
├── tests.html                     тест с паролем и оценкой
├── about.html                     о сайте и инструкции
├── 404.html                       страница «не найдено»
├── lessons/
│   └── urok-inform-volume.html    пример урока
├── assets/
│   ├── css/style.css              дизайн-система
│   ├── js/main.js                 меню, тосты
│   └── files/                     PDF, DOCX, PPTX, ZIP
└── .nojekyll                      отключает Jekyll
```

## Публикация

1. Создайте репозиторий `informatika` на GitHub.
2. Загрузите файлы в ветку `main`:
   ```bash
   git init
   git add .
   git commit -m "Сайт учителя информатики"
   git branch -M main
   git remote add origin https://github.com/ВАШ-ЛОГИН/informatika.git
   git push -u origin main
   ```
3. **Settings → Pages → Deploy from a branch → main → / (root) → Save**.
4. Через 1–2 минуты сайт будет доступен:
   `https://ВАШ-ЛОГИН.github.io/informatika/`

Короткий адрес без названия репозитория: назовите репозиторий
`ВАШ-ЛОГИН.github.io`.

## Что поменять сразу

| Что | Где |
|---|---|
| Имя учителя / кабинета | `.brand` в каждой странице |
| Почта | `teacher@example.ru` (`Ctrl+Shift+F` по проекту) |
| Ссылка на репозиторий | подвал и `about.html` |
| Пароль теста | `tests.html`, константа `TEST_PASSWORD` |
| Ученики | `<input name="student">` на странице урока |

## Добавить урок

1. Скопируйте `lessons/urok-inform-volume.html`, переименуйте.
2. Замените `<title>`, заголовок `h1` и тексты задач.
3. Ответ задачи — в атрибуте `data-answer="2048"` на блоке `.task`.
4. В `lessons.html` добавьте карточку:
   ```html
   <a class="lesson" href="lessons/новый-урок.html" data-cls="8" data-title="ключевые слова">
     <div class="tags"><span class="tag t8">8 класс</span></div>
     <h3>Название урока</h3>
     <p>Короткое описание.</p>
     <span class="go">Открыть урок →</span>
   </a>
   ```

## Добавить файл

Положите файл в `assets/files/` и добавьте карточку в `materials.html`.
Классы иконок: `pdf`, `doc`, `xls`, `ppt`, `zip`, `img`, `code`.

## Ограничения GitHub Pages

- **100 МБ** на один файл, **1 ГБ** на сайт.
- Нет серверного кода: PHP, отправка форм на почту, база данных не работают.
- Пароль в `tests.html` виден в исходнике — это защита от случайного входа,
  а не от целенаправленного обхода.
- Приватный репозиторий → сайт публичный (на бесплатном тарифе).

Для больших файлов (>100 МБ) используйте **GitHub Releases**: тег → Attach binaries,
файлы до 2 ГБ, ссылка вида `https://github.com/ЛОГИН/РЕПО/releases/download/v1/file.zip`.

## Сбор ответов учеников

Статический сайт не может принимать POST-запросы. Варианты:

- **Google Forms / Яндекс Формы** — встроить `<iframe>`, ответы падают в таблицу.
- **Formspree / Getform** — бесплатный приём форм по AJAX.
- **Сохранить в браузере** — `localStorage` + кнопка «Скачать результат»
  (уже реализовано в уроке и тесте).

## Что уже лежит в `assets/files/`

Это демонстрационные файлы — замените их своими, не меняя имена,
или поправьте ссылки в `materials.html`.

| Файл | Что это |
|---|---|
| `7-izmerenie-informacii-konspekt.pdf` | конспект урока, 2 страницы |
| `8-sistemy-schisleniya-konspekt.pdf` | опорный конспект по системам счисления |
| `7-izmerenie-kartochki.docx` | 12 задач по вариантам + ответы для учителя |
| `7-izmerenie-prezentaciya.pptx` | 9 слайдов |
| `9-algoritmy-prezentaciya.pptx` | 7 слайдов |
| `rezultaty-shablon.xlsx` | ведомость с формулами и шкалой оценок |
| `python-praktikum.zip` | 6 задач с решениями и тестами |
| `plakat-edinicy-izmereniya.png` | плакат A3, 200 dpi |
| `grafik-uspevaemost.png` | пример инфографики |
| `python-shpargalka.md` | шпаргалка по синтаксису |

## Лицензия

Материалы можно свободно использовать в образовательных целях.
