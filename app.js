
//===================================================Задание №1==============================
/*
KISS - Keep It Simple, Stupid

Принцип проектирования, принятый в военно-морских силах США в 1960. Принцип KISS утверждает, что большинство систем работают лучше всего, если они остаются простыми, а не усложняются. Поэтому в области проектирования простота должна быть одной из ключевых целей и следует избегать ненужной сложности.

Не придумывать к задаче более сложного решения, чем ей требуется. Чем проще код, тем легче в нём разобраться. Под простотой подразумевается отказ от использования хитроумных приемов и ненужного усложнения.

DRY - Don’t Repeat Yourself

Всё, что пишется в проекте, должно быть определено только один раз. При несоблюдении этого принципа программист будет вынужден вносить изменения в несколько повторяющихся фрагментов кода, вместо одного. Также дублирующийся код приводит к разрастанию программы, а значит, усложняет ее понимание, читабельность.

YAGNI - You Aren’t Gonna Need It

Не стоит писать функциональность наперед, если прямо сейчас в ней нет необходимости. Желание написать код на будущее может иметь много неприятных последствий:
Вы тратите драгоценное время, которое могло бы быть использовано на добавление, тестирование и улучшение действительно необходимой функциональности.
Новые функции должны быть протестированы, задокументированы.
Ваши ненужные новые функции могут впоследствии помешать добавить новые, но уже нужные.
Если написанный код в итоге понадобится, он может оказаться неправильным.
Лишний код может в итоге никогда и не понадобиться.
Лишний код усложняет вашу программу (см. KISS).
Добавление новой ненужной функциональности может привести к желанию добавить ещё больше новой лишней функциональности, приводя к эффекту «снежного кома».
Антипаттерны чистого кода

Преждевременная оптимизация

Сначала профилирование, потом оптимизация. Не меняйте простоту на эффективность, пока об этом не заявят эмпирически полученные данные.

Магические числа и строчки

Без поясняющего имени семантика числа или строки скрыта от нас. Это усложняет понимание кода, а необходимость поменять константу может привести к ошибкам.

Спагетти-код

Сложный и запутанный код, который трудно отладить или изменить. Читаемость такого кода очень низкая, и, как правило, практически невозможно понять, как именно он работает.

Изобретение колеса

Когда мы хотим сделать все сами и написать всё с нуля, не ища уже существующие методы, API или библиотеки.

Ад зависимости

Противоположность изобретению колеса. Если вместо того, чтобы писать все с нуля, мы используем слишком много сторонних библиотек, которые полагаются на конкретные версии других библиотек.

Trailing whitespaces

Пробелы в конце строки являются излишними, к тому же они усложняют commit-изменения в Github (вы видите лишнюю строчку/символ изменений, не несущего смыслового изменения).

Лодочный якорь (Boat Anchor)

Когда программисты оставляют неиспользуемый код в базе, потому что он может понадобиться им позже.

Мертвый код / Поток лавы (Lava Flow)

Код, который был когда-то написан, но на данный момент необходимости в нём нет.

Код, который имеет избыточные или некачественные части, которые кажутся неотъемлемой частью программы, но мы не до конца понимаем, что он делает или как он влияет на все приложение. Это делает рискованным удаление. Это обычно происходит с устаревшим кодом, или когда код был написан кем-то другим (обычно без надлежащей документации), или когда проект слишком быстро перешел с этапа разработки на этап производства.

Разрастание кода (The Proliferation of Classes)

Когда в кодовой базе есть объекты, существующие исключительно для вызова других, более важных объектов. То есть это объекты-посредники в чистом виде.

Божественный объект / Швейцарский нож (God Object)

Божественные объекты делают слишком много.
*/


//===================================================Задание №2==============================
/*
Local Storage

Реализация Web Storage (интерфейса взаимодействия с хранилищем).

Данные хранятся в формате ключ-значение. Значения хранятся в виде строк. При попытке сохранения других типов данных, они будут приведены к строке.

Максимальный объем хранимых данных — 5 Мб.

В теории, является бессрочным хранилищем данных. Хотя данные и должны храниться бессрочно, браузеры все равно вводят свои ограничения.

При переполнении хранилища оно полностью очищается. Safari очищает Local Storage если к нему не обращались в течение семи дней.

Session Storage

Похож на LocalStorage, но данные хранятся только в течение сессии.

Сессия страницы создаётся при открытии новой вкладки браузера. Сессия остаётся активной до тех пор, пока открыта вкладка, а состояние сессии сохраняется между перезагрузками. Открытие новой вкладки с таким же адресом приведёт к созданию новой сессии.

Cookie

Данные, хранящиеся в куках, также передаются на сервер в виде HTTP-заголовка и могут быть им изменены.

Куки передаются при каждом запросе к серверу. Их размер ограничен 4096 байтами (4 Кб). В содержимом не должно быть пробелов или запятых, оно должно быть закодировано и быть безопасным, чтобы не сломать отправляемый запрос.

Куки не являются постоянным хранилищем, срок хранения данных по умолчанию ограничен длинной сессии, и для продления хранения кук используется дополнительный параметр.

Как правило, этим способом пользуются для хранения авторизационных данных или когда доступ к записанным данным нужен на сервере. Ещё куки используются для отслеживания поведения пользователя на сайте.

Все куки хранятся в свойстве document.cookie. Это свойство представляет собой строку в формате имя=значение, где пары имён и значений разделяются знаком ;. Если присвоить document.cookie новое значение, то оно не заменит полностью старую строку, а добавит или изменит значение по ключу.
*/


//===================================================Задание №3==============================

/*БЭМ методология

БЭМ (Блок, Элемент, Модификатор) — компонентный подход к веб-разработке. В его основе лежит принцип разделения интерфейса на независимые блоки. Он позволяет легко и быстро разрабатывать интерфейсы любой сложности и повторно использовать существующий код, избегая «Copy-Paste».

В CSS по БЭМ также не рекомендуется использовать селекторы по тегам или id. */


//===================================================Задание №4==============================
/*
В основе функционального программирования — чистые функции и неизменяемые структуры данных.

Функция - это элемент композиции.

Чистые функции (Pure Functions):

Чистая функция не имеет побочных эффектов, она зависит только от своих входных параметров и всегда возвращает одинаковый результат для одних и тех же входных данных.


Функции высшего порядка (Higher-Order Functions):

Функции, которые принимают другие функции в качестве аргументов или возвращают их как результат, называются функциями высшего порядка.

Пример: map, filter, reduce.


Каррирование (Currying):

Процесс преобразования функции с несколькими аргументами в последовательность функций, каждая из которых принимает только один аргумент.



Рекурсия (Recursion):

Замена циклов в функциональном программировании. Функция вызывает саму себя для решения задачи.

Пример: Функция для вычисления факториала.


Неизменяемость (Immutability):

Использование неизменяемых (immutable) структур данных, чтобы избежать изменений в состоянии программы.

Пример: Использование методов, таких как map или filter, для создания новых массивов вместо изменения существующих.



Функции композиции (Function Composition):

Комбинирование нескольких функций в одну, чтобы выполнить последовательную обработку данных.



Мемоизация (Memoization):

Сохранение результатов выполнения функции для определенных входных данных и повторное использование их при последующих вызовах функции с теми же входными данными.

Пример: Использование кэширования для улучшения производительности.
 */




//===================================================Задание №5==============================
/*
inherit
static - значение по умалчанию
relative
absolute
fixed
sticky
*/



//===================================================Задание №6==============================
/*
Типы селекторов по убыванию специфичности:

Селекторы по id (#title);
Селекторы по классу (.title), атрибуту ([type="radio"]) и селекторы с псевдоклассами (:hover);
Селекторы по тегу (h1), селекторы с псевдоэлементами (::before).
Комбинаторы +, >, ~, универсальный селектор * и псевдокласс :where() веса не имеют.

Псевдоклассы :is(), :has() и :not() принимают вес наиболее специфичного селектора внутри скобок.

CSS-свойства, написанные в атрибуте style внутри HTML-разметки, перебивают свойства, написанные для этого элемента во внешних CSS-файлах или внутри тега <style>.