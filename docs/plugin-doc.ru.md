# Описание работы с плагином

### Настройка

TODO. Нужны писатели

### Как использовать диаграмы

TODO. Нужны писатели

### Проведение триажа 

Подробнее про проведение триажа и описание сущностей можно почитать  
[на сайте сообщества Канбан-Практиков: Kanban Russia](https://kanbanguide.ru/opredelite-svoi-klassy-obsluzhivaniya-s-pomoshhyu-triazh-tablicz-podcast-kanban-talks-epizod-%E2%84%96-7/)

Для проведения триажа необходимо в конфигурации указать два обязательных поля и одно опциональное: 
* (_Обязательно_) Поле в котором сохраняется [паттерн функции жизненного цикла получения ценности](#паттерн-функции-жизненного-цикла-получения-ценности).
Значения может не быть, тогда если есть дата дедлайна, то используется шаблон "[Постоянный уровень](#постоянный-уровень)"
Если даты дедлайна нет, то используется шаблон "[Спад в последнюю минуту](#спад-в-последнюю-минуту~~~~)".
* (_Обязательно_) Поле в котором сохраняется дата когда **необходимо**, чтобы функционал был сделан.
Это дедлайны, даты, когда функционал необходимо выкатить на клиента и т.п.
Даты может не быть, тогда используется диапазон страта "Очень рано".  
* (_Опционально_) Поле в котором сохраняется оценка размера гипотезы/задачи.
Крайне рекомендуется указать и заполнять это поле, так как статистика по решению
подобных задач даст более точный прогноз старта.

#### Паттерн функции жизненного цикла получения ценности

##### РАЗОВАЯ ВОЗМОЖНОСТЬ С ИСТЕЧЕНИЕМ СРОКА

Эта функция подразумевает, что существует единоразовая возможность получить выгоду (заработать деньги) 
и после этой даты шанс будет упущен.

_Заказчик обращается вам с целью потратить остаток годового бюджета до начала возможностью, нового финансового года.
Вы либо воспользуетесь, либо потеряете сделку._

##### ПРИБЫЛЬ НА ОЧЕНЬ РАННИХ СРОКАХ

80% прибыли получено в первые 20% жизненного цикла.

_Производитель лыж выпускает новую модель каждый год в ноябре, и большая часть лыж продается в первые 3 месяца при
жизненном цикле продукта сроком в 1 год._

#####  ПРИБЫЛЬ НА РАННИХ СРОКАХ

80% прибыли получено в первые 50% жизненного цикла.

_Производитель велосипедов выпускает новую модель каждый год в ноябре-декабре, но
большинство продаж происходит в начале сезона, весной, и снижается к концу лета._

##### КОЛОКОЛООБРАЗНАЯ КРИВАЯ С ПРЕИМУЩЕСТВОМ ПЕРВОГО ХОДА

Колоколообразная кривая с преимуществом первого игрока рынка, который это сделал.
Существует сетевой эффект на рынке, который дает преимущество тому, кто первым
реализует функционал или продукт, но последующие игроки рынка этого преимущества  
не получают.

_Такой эффект в первую очередь ассоциируется с технологическими платформами,
такими как операционные системы, стандарты мобильной телефонии, средства обмена
сообщениями и коммуникации, социальные сети._

##### КОЛОКОЛООБРАЗНАЯ КРИВАЯ БЕЗ ПРЕИМУЩЕСТВА ПЕРВОГО ХОДА

Колоколообразная кривая без преимущества у первого,
кто реализовал  функционал или продукт.
Другие участники рынка могут догнать и обогнать первого.

_Первый производитель светодиодных ламп имел преимущество на рынке,
после чего следующему производителю потребовался год, чтобы предложить
эту же технологию. Еще несколько лет понадобилось
остальным производителям, чтобы догнать лидеров.
Тем не менее, первый игрок не имел господствующего положения
на рынке, и это не остановило продажи конкурирующих производителей._

#####   ПРИБЫЛЬ  НА ПОЗДНИХ  СРОКАХ

80% прибыли получено в последние 50% жизненного цикла.

_Рекламная кампания отеля к Пасхе начинается сразу после Нового года (жизненный цикл
составляет 90–100дней). Большинство бронирований будет сделано во
второй половине жизненного цикла._

##### ПРИБЫЛЬ НА ОЧЕНЬ ПОЗДНИХ СРОКАХ

80% прибыли получено в последние 20% жизненного цикла.

_Организатор конференций предлагает локальное мероприятие
в регионе, нацеленное на аудиторию из этого географического
округа. Если не предвидится дефицита билетов,
участники скорее всего будут ждать до последних 
20% жизненного цикла прежде, чем купить билет._

##### ПОСТОЯННЫЙ УРОВЕНЬ

Эта функция моделирует преимущества таких вещей, как экономия затрат.

_После выпуска продукта или услуги, расходы сокращаются —
возможно, работники или их вовлечение становится не нужным. 
Как следствие, если бы мы выпустили новый функционал сегодня, то
получили бы сокращение расходов завтра, и сэкономленная сумма
являлась бы фиксированной и постоянной._

##### КОЛОКОЛООБРАЗНАЯ ПРОДЛЕННАЯ КРИВАЯ, УГАСАЮЩИЕ ЖИЗНЕННЫЙ ЦИКЛ И ЛОЯЛЬНОСТЬ

Моделируют продленный, но угасающий жизненный
цикл с падением лояльности со временем. Отображает
ситуации, в которых задержка выпуска продукта,
функционала или услуги, не имеет сильного
негативного влияния по причине лояльности клиентов,
либо эксклюзивности технологии, либо монополии/
ограниченного выбора на рынке.
Однако длительные задержки приводят к сокращению жизненного
цикла и падению лояльности.

_Лояльные клиенты будут ждать, пока их любимый
бренд (например, мобильных телефонов, ноутбуков,
планшетов) не выпустит продукт с новейшей
технологией (например, процессор, видеокарта, камера
и т.д.). Задержка приводит к падению лояльности и
сокращению жизненного цикла продукта, потому что
лежащие в основе устаревшие технологии отойдут в прошлое 
и будут заменены новыми в рамках их собственного 
независимого жизненного цикла._

#####  КОЛОКОЛООБРАЗНАЯ КРИВАЯ, ПРОДЛЕННЫЙ ЖИЗНЕННЫЙ  ЦИКЛ, УГАСАЮЩАЯ ЛОЯЛЬНОСТЬ

Моделирует продленный жизненный цикл с падением лояльности со временем.
Отображает ситуации, в которых задержка выпуска продукта, функционала
или услуги не имеет сильного негативного влияния 
по причине, лояльности клиентов, либо закрытости технологии, 
либо монополии / ограниченного выбора на рынке.

_Apple Microsoft могут быть примером, но более  
наглядный – это очередной альбом какой-нибудь
популярной группы, например, Depeche Mode или Coldplay.
Depeche Mode выпускают новый альбом раз 
4 года, но даже если выход задержится, фанаты
все равно будут ждать и в итоге купят альбом.
Однако, лояльность, тем больше падает
чем дольше задержка._

##### СПАД В ПОСЛЕДНЮЮ МИНУТУ

Немедленная прибыль независимо от задержки, однако откладывание на
последний момент приводит к значительному падению реализованной
прибыли.

_Моделирует такой бизнес как реклама концертов популярных артистов.
В какой бы день билеты ни поступили в продажу, они будут распроданы в
течение нескольких часов. Если задержать начало продаж на неделю или
месяц, они все равно будут распроданы. Продажи в любом случае будут
мгновенными, несмотря на задержку, только если мы не запустим билеты
в продажу в последний момент, без объявления концерта._