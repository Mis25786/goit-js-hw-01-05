//! Завдання 1) створення змінної

// Змінні використовуються для зберігання даних. У кожної змінної є ідентифікатор (назва змінної). Значення кожної змінної зберігається в оперативній пам'яті.

// Змінну можна уявити як коробку з написом (ім'я змінної), в якій щось знаходиться (значення змінної).

// <ключове слово> <назва змінної> = <значення>
// Оголошення змінної починається з ключового слова const. Така змінна має бути одразу ініціалізована початковим значенням, і такій змінній не можна надати інше значення після її ініціалізації.

// Увага
// Створення змінної без ключового слова const призведе до помилки.

// const age = 20;
// const userName = "Mango";
// const socialProfileTag = "@gluck";
// const totalWorkerSalary = 4052;
// В JavaScript назва змінної записується в camelCase-нотації. Перше слово пишеться маленькими буквами, а кожне наступне починається з великої. Назви змінних чутливі до регістру, тобто user, usEr і User - це різні змінні.

//todo Оголоси дві змінні, productName для назви товару, і pricePerItem для зберігання ціни за штуку.
//todo При оголошенні надай змінним наступні значення:

//todo назва - рядок "Droid";
//todo ціна за штуку - число 2000.

//* Оголошена змінна productName
//* Значення змінної productName - це рядок "Droid"
//* Оголошена змінна pricePerItem
//* Значення змінної pricePerItem - це число 2000

// const productName = "Droid";
// console.log(productName);

// const pricePerItem = 2000;
// console.log(pricePerItem);

//! Завдання 2) змінити значення змінним
// Для того щоб оголосити змінну, якій у майбутньому можна буде присвоїти нове значення, використовується ключове слово let. Створення змінної без ключового слова let або const призведе до помилки.

// let age = 5;
// age = 10;

// let username = "Mango";
// username = "Poly";
// Спроба звернутися до змінної за ім'ям до її оголошення, викличе помилку.

// Наприклад, не можна намагатися прочитати або змінити значення змінної до її оголошення:

// ❌ Неправильно, буде помилка
// age = 15; // ReferenceError: Cannot access 'age' before initialization
// console.log(age); // ReferenceError: age is not defined

// Оголошення змінної age
// let age = 20;

// ✅ Правильно, звертаємося після оголошення
// age = 25;
// console.log(age); // 25

//todo Ім'я товару змінили на "Repair droid" і збільшили його ціну на 1500 кредитів.
//todo Перевизнач значення змінних pricePerItem і productName після їх оголошення.

//* Змінна pricePerItem оголошена за допомогою let
//* При оголошенні змінної pricePerItem присвоєно значення — число 2000
//* Змінній pricePerItem присвоєно нове значення, більше за попереднє на 1500
//* Змінна productName оголошена за допомогою let
//* При оголошенні змінної productName присвоєно значення — рядок "Droid"
//* Змінній productName присвоєно нове значення — рядок "Repair droid"

// let productName = "Droid";
// let pricePerItem = 2000;

// productName = "Repair droid";
// console.log(productName);
// pricePerItem = 3500;
// console.log(pricePerItem);

// Change code below this line

//! Завдання 3) створення змінних: число, рядок, буль
// В JavaScript змінна не асоціюється з будь-яким типом даних, тип є у її значення. Тобто змінна може зберігати значення різних типів.

// Number - цілі числа і числа з плаваючою комою (крапкою).
// String - рядки, послідовність від нуля або більше символів. Рядок починається і закінчується одинарною ' або подвійними лапками ".
// Boolean - логічний тип даних, прапорці стану. Всього два значення: true і false. Наприклад, на питання, чи увімкнено світло в кімнаті, можна відповісти так (true) або ні (false).
//todo Оголоси наступні змінні, використовуючи ключове слово const або let, і присвой їм відповідні значення.

//todo topSpeed - число 160.
//todo distance - число 617.54.
//todo login - рядок "mango935".
//todo isOnline - буль true.
//todo isAdmin - буль false.

//* Оголошена змінна topSpeed
//* Значення змінної topSpeed - це число 160
//* Оголошена змінна distance
//* Значення змінної distance - це число 617.54
//* Оголошена змінна login
//* Значення змінної login - це рядок "mango935"
//* Оголошена змінна isOnline
//* Значення змінної isOnline - це буль true
//* Оголошена змінна isAdmin
//* Значення змінної isAdmin - це буль false

// let topSpeed = 160;
// console.log(topSpeed);
// let distance = 617.54;
// console.log(distance);
// const login = "mango935";
// console.log("mango935");
// const isOnline = true;
// console.log(isOnline);
// const isAdmin = false;
// console.log(isAdmin);

//! Завдання 4) підрахунок загальної суми
// Призначення, функціонал і пріоритет (порядок) операцій нічим не відрізняються від шкільного курсу алгебри. Оператори повертають значення як результат виразу.

// const x = 10;
// const y = 5;

// // Додавання
// console.log(x + y); // 15

// // Віднімання
// console.log(x - y); // 5

// // Множення
// console.log(x * y); // 50

// // Ділення
// console.log(x / y); // 2
// Корисно
// Важливо запам'ятати правильне іменування складових алгебраїчного виразу: +, -, * і / називаються операторами, а те, на чому вони застосовуються (числа) - операнди.

//todo Доповни код, присвоївши змінній totalPrice вираз для підрахунку загальної суми замовлення. Змінна pricePerItem зберігає ціну однієї одиниці товару, а orderedQuantity - кількість одиниць товару в замовленні.

//* Значення змінної pricePerItem - це число 3500
//* Оголошена змінна orderedQuantity
//* Оголошена змінна pricePerItem
//* Значення змінної orderedQuantity - це число 4
//* Оголошена змінна totalPrice
//* Значення змінної totalPrice - це число 14000
//* Використаний оператор *

// const pricePerItem = 3500;
// const orderedQuantity = 4;

// let totalPrice = pricePerItem * orderedQuantity;
// console.log(totalPrice);

//! Завдання 5) створення - шаблонний рядок
// Шаблонні рядки — це альтернатива конкатенації зі зручнішим синтаксисом. Шаблонний рядок береться у зворотні (скісні) лапки, замість подвійних або одинарних, і може містити місцезаповнювачі, які позначаються знаком долара і фігурними дужками - ${вираз}.

// const guestName = "Mango";
// const roomNumber = 207;
// const greeting = `Ласкаво просимо ${guestName}, ви заселені у номер ${roomNumber}`;

//todo Оголоси змінну message і запиши в неї повідомлення про покупку, рядок у форматі: "You picked <назва товару>, price per item is <ціна товару> credits". Де <назва товару> і <ціна товару> — це значення змінних productName і pricePerItem. Використовуй синтаксис шаблонних рядків.

//* Оголошена змінна productName
//* Значення змінної productName - це рядок "Droid"
//* Оголошена змінна pricePerItem
//* Значення змінної price - це число 3500
//* Оголошена змінна message
//* Значення змінної message - це рядок "You picked Droid, price per item is 3500 credits"

// const productName = "Droid";
// const pricePerItem = 3500;

// // Change code below this line
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;
// console.log(message);

//! Завдання 6) використання шаблонного рядка і підрахунок загальної суми

// ЗАДАЧА: ЗАМОВЛЕННЯ ПРОДУКТУ
//todo Магазин з продажу ремонтних дроїдів готовий до відкриття, залишилося написати скрипт для їх замовлення. Оголоси змінні та присвой їм відповідні значення:

//todo pricePerDroid - ціна одного дроїда, значення 800
//todo orderedQuantity - кількість дроїдів у замовленні, значення 6
//todo deliveryFee - вартість доставки, значення 50
//todo totalPrice - загальна сума замовлення до сплати, не забудь про вартість доставки
//todo message - повідомлення про стан замовлення у форматі "You ordered droids worth <total price> credits. Delivery (<delivery fee> credits) is included in total price."

//* Оголошена змінна orderedQuantity
//* Значення змінної orderedQuantity - це число 6
//* Оголошена змінна pricePerDroid
//* Значення змінної pricePerDroid - це число 800
//* Оголошена змінна deliveryFee
//* Значення змінної deliveryFee - це число 50
//* Оголошена змінна totalPrice
//* Значення змінної totalPrice - це число 4850
//* Оголошена змінна message
//* Значення змінної message - це рядок "You ordered droids worth 4850 credits. Delivery (50 credits) is included in total price."

// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;

// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
// console.log(message);

//! Завдання 7) створення функції та виклик її
// Функція - це підпрограма, незалежна частина коду, призначена для багаторазового виконання конкретної задачі з різними початковими значеннями.

// Функцію можна уявити як чорний ящик — вона отримує щось на вході (дані), і повертає щось на виході (результат виконання коду всередині неї).

// // 1. Оголошення функції multiply
// function multiply() {
//   // Тіло функції
//   console.log("multiply function invocation");
// }

// // 2. Виклики функції multiply
// multiply(); // multiply function invocation
// multiply(); // multiply function invocation
// multiply(); // multiply function invocation
// Оголошення функції починається з ключового слова function, за яким йде її ім'я — дієслово, що відповідає на питання «Що зробити?» і пара круглих дужок. Тіло функції береться у фігурні дужки {} і містить інструкції, які необхідно виконати під час її виклику. Потім, коли необхідно, функція викликається за допомогою імені та пари круглих дужок.

//todo Оголоси функцію sayHi, всередині якої додай console.log() з рядком "Hello, this is my first function!". Після оголошення виклич функцію sayHi.

// Очікується оголошення функції
// Функції присвоєно ім'я sayHi
// В тілі функції sayHi є console.log("Hello, this is my first function!")
// Після оголошення є виклик функції sayHi

// function sayHi() {
//   console.log("Hello, this is my first function!");
// }
// sayHi();

//! Завдання 8) додавання параметрів, вивід шаблоннного рядка, виведення(обчислення) суми переданих чисел
// В круглих дужках після імені функції йдуть параметри - перелік даних, які функція очікує під час виклику.

// Параметри - це локальні змінні, доступні тільки у тілі функції. Вони розділяються комами. Параметрів може бути декілька або їх взагалі може не бути, тоді записуються просто порожні круглі дужки.

// Під час виклику функції, в круглих дужках можна передати аргументи - значення для оголошених параметрів функції.

// // 1. Оголошення параметрів x, y, z
// function multiply(x, y, z) {
//   console.log(`Результат множення дорівнює ${x * y * z}`);
// }

// // 2. Передача аргументів
// multiply(2, 3, 5); // Результат множення дорівнює 30
// multiply(4, 8, 12); // Результат множення дорівнює 384
// multiply(17, 6, 25); // Результат множення дорівнює 2550
// Порядок передачі аргументів повинен відповідати порядку оголошених параметрів: значення першого аргументу буде присвоєно першому параметру, другого аргументу - другому параметру тощо.

//todo Функція add повинна вміти додавати три числа і виводити результат у консоль. Додай функції add три параметри: a, b і c, які будуть отримувати значення аргументів під час її виклику.

//todo Доповни console.log() таким чином, щоб він логував рядок "Addition result equals <result>", де <result> - це сума переданих чисел.

//* Оголошена функція add(a, b, c)
//* Виклик add(15, 27, 10) виводить у консоль "Addition result equals 52"
//* Виклик add(10, 20, 30) виводить у консоль "Addition result equals 60"
//* Виклик add(5, 10, 15) виводить у консоль "Addition result equals 30"

// // Change code below this line
// function add(a, b, c) {
//   console.log(`Addition result equals ${a + b + c}`);
//   // Change code above this line
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

//! Завдання 9) застосування => return
// Оператор return використовується для передачі значення з тіла функції у зовнішній код. Коли інтерпретатор зустрічає return, він відразу ж виходить з функції (припиняє її виконання), і повертає вказане значення у те місце коду, де функція була викликана.

// function multiply(x, y, z) {
//   console.log("Код до return виконується звичайним чином");

//   // Повертаємо результат виразу множення
//   return x * y * z;

//   console.log("Цей лог ніколи не виконається, він стоїть після return");
// }

// // Результат роботи функції можна зберегти у змінну
// let result = multiply(2, 3, 5);
// console.log(result); // 30

// result = multiply(4, 8, 12);
// console.log(result); // 384

// result = multiply(17, 6, 25);
// console.log(result); // 2550
// Оператор return без явно вказаного значення повертає спеціальне значення undefined. За відсутності return у тілі функції, вона все одно поверне undefined.

//todo Доповни код функції add таким чином, щоб вона повертала результат додавання значень трьох параметрів: a, b і c.

//* Оголошена функція add(a, b, c)
//* У функції add є оператор return
//* Виклик add(15, 27, 10) повертає 52
//* Виклик add(10, 20, 30) повертає 60
//* Виклик add(5, 10, 15) повертає 30
//* Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// function add(a, b, c) {
//   // Change code below this line
//   return a + b + c;
//   // Change code above this line
// }

// add(2, 5, 8); // 15

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

//! Завдання 10) повернення (return) шаблонного рядка з значеннями( ${name} / ${price}) параметрів
// ЗАДАЧА: ШАБЛОННІ РЯДКИ 2.0

//todo Функція makeMessage(name, price) складає і повертає повідомлення про покупку. Вона оголошує два параметри, значення яких будуть задаватися під час її виклику.

//todo name - назва товару
//todo price - ціна товару
//todo Доповни код функції таким чином, щоб у змінну message записувався рядок "You picked <product name>, price per item is <product price> credits", де <product name> і <product price> - це значення параметрів name і price. Використовуй синтаксис шаблонних рядків.

//todo Увага
//todo Зверни увагу на те, що в коді відсутній виклик функції makeMessage. З цього завдання і далі ми самі будемо викликати твої функції і перевіряти те, як вони працюють. Результат наших перевірок ти побачиш у блоці Результати під редактором коду.

//* Оголошена функція makeMessage(name, price)
//* Виклик makeMessage('Radar', 6150) повертає "You picked Radar, price per item is 6150 credits"
//* Виклик makeMessage('Scanner', 3500) повертає "You picked Scanner, price per item is 3500 credits"
//* Виклик makeMessage('Reactor', 8000) повертає "You picked Reactor, price per item is 8000 credits"
//* Виклик makeMessage('Engine', 4070) повертає "You picked Engine, price per item is 4070 credits"

// function makeMessage(name, price) {
//   // Change code below this line
//   const message = `You picked ${name}, price per item is ${price} credits`;
//   // Change code above this line
//   return message;
// }

// console.log(makeMessage("Radar", 6150));
// console.log(makeMessage("Scanner", 3500));
// console.log(makeMessage("Reactor", 8000));
// console.log(makeMessage("Engine", 4070));

//! Завдання 11) рахує і повертає загальну суму => приймає два параметри
// ЗАДАЧА: МАТЕМАТИЧНІ ОПЕРАТОРИ 2.0

//todo Функція calculateTotalPrice рахує і повертає загальну суму покупки. Вона приймає два параметри, значення яких будуть задаватися під час її виклику.

//todo orderedQuantity - кількість одиниць товару в замовленні;
//todo pricePerItem - ціна однієї одиниці товару.
//todo Доповни код функції таким чином, щоб у змінну totalPrice записувалася загальна сума покупки - результат множення кількості товарів на ціну одного.

//* Оголошена функція calculateTotalPrice (orderedQuantity, pricePerItem)
//* Виклик calculateTotalPrice(5, 100) повертає 500
//* Виклик calculateTotalPrice(8, 60) повертає 480
//* Виклик calculateTotalPrice(3, 400) повертає 1200
//* Виклик calculateTotalPrice(1, 3500) повертає 3500
//* Виклик calculateTotalPrice(12, 70) повертає 840
//* Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// function calculateTotalPrice(orderedQuantity, pricePerItem) {
//   // Change code below this line
//   const totalPrice = pricePerItem * orderedQuantity;

//   // Change code above this line
//   return totalPrice;
// }

// console.log(calculateTotalPrice(5, 100));
// console.log(calculateTotalPrice(8, 60));
// console.log(calculateTotalPrice(3, 400));
// console.log(calculateTotalPrice(1, 3500));
// console.log(calculateTotalPrice(12, 70));

//! Завдання 12) рахуємо загальну сумму і виводимо в шаблонний рядок
// ЗАДАЧА: ЗАМОВЛЕННЯ ПРОДУКТУ 2.0

//todo Функція makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) складає і повертає повідомлення про покупку ремонтних дроїдів. Вона оголошує три параметри, значення яких будуть задаватися під час її виклику.

//todo orderedQuantity - кількість дроїдів у замовленні
//todo pricePerDroid - ціна одного дроїда
//todo deliveryFee - вартість доставки
//todo Доповни код функції таким чином, щоб вона повертала повідомлення про замовлення у форматі "You ordered droids worth <total price> credits. Delivery (<delivery fee> credits) is included in total price.". Не забудь про ціну доставки в обчисленнях загальної вартості.

//* Оголошена функція makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee)
//* Виклик makeOrderMessage(2, 100, 50) повертає "You ordered droids worth 250 credits. Delivery (50 credits) is included in total price."
//* Виклик makeOrderMessage(4, 300, 100) повертає "You ordered droids worth 1300 credits. Delivery (100 credits) is included in total price."
//* Виклик makeOrderMessage(10, 70, 200) повертає "You ordered droids worth 900 credits. Delivery (200 credits) is included in total price."

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   // Change code below this line
//   //   const message = `You ordered droids worth ${
//   //     pricePerDroid * orderedQuantity + deliveryFee
//   //   } credits. Delivery ${deliveryFee} credits) is included in total price.`;
//   // Change code above this line
//   const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
//   const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

//   return message;
// }

// console.log(makeOrderMessage(2, 100, 50));
// console.log(makeOrderMessage(4, 300, 100));
// console.log(makeOrderMessage(10, 70, 200));

//! Завдання 13) використання операторів < / >/ = / >= / <= і перевірка повноліття
// Використовується для порівняння двох значень. Результатом свого виконання повертають буль - true або false, тобто «так» або «ні».

// > - більше
// < - менше
// >= - більше або дорівнює
// <= - менше або дорівнює
// const a = 2;
// const b = 5;

// console.log(a > b); // false
// console.log(b > a); // true
// console.log(a >= b); // false
// console.log(b >= a); // true

// console.log(a < b); // true
// console.log(b < a); // false
// console.log(a <= b); // true
// console.log(b <= a); // false

//todo Функція isAdult оголошує один параметр age (вік), значення якого буде задаватися під час її виклику. Присвой змінній passed вираз перевірки віку користувача на повноліття. Людина вважається повнолітньою у віці 18 років і старше.

//* Оголошена функція isAdult(age)
//* У виразі перевірки використовується оператор >=
//* Виклик isAdult(20) повертає true
//* Виклик isAdult(14) повертає false
//* Виклик isAdult(8) повертає false
//* Виклик isAdult(37) повертає true

// function isAdult(age) {
//   // Change code below this line
//   const passed = age >= 18;

//   // Change code above this line
//   return passed;
// }

// console.log(isAdult(20));
// console.log(isAdult(14));
// console.log(isAdult(8));
// console.log(isAdult(37));

//! Завдання 14) використання строгого порівняння( ===) , провірка пароля (вхідного-параметром із збереженим)
// «Нестрогі» оператори == і != виконують перетворення типів значень, що порівнюються, що може призвести до помилок, особливо у початківців.

// // ❌ Погано, виконується приведення типів
// console.log(5 == "5"); // true
// console.log(5 != "5"); // false
// console.log(1 == true); // true
// console.log(1 != true); // false
// Тому для перевірки рівності або нерівності двох значень використовуються оператори === (строга рівність) і !== (строга нерівність), які не виконують приведення типів операндів.

// // ✅ Добре, приведення типів не виконується
// console.log(5 === "5"); // false
// console.log(5 === 5); // true
// console.log(5 !== "5"); // true
// console.log(5 !== 5); // false
// console.log(1 === true); // false
// console.log(1 !== true); // true

//todo Функція isValidPassword (password) перевіряє рівність збереженого і введеного паролів і повертає результат перевірки - буль true або false. Змінна SAVED_PASSWORD зберігає значення попередньо збереженого пароля. Введений пароль передається у параметр password.

//todo Присвой змінній isMatch вираз перевірки рівності введених і попередньо збережених паролів. Результатом виразу перевірки повинно бути true, якщо значення збігаються, і false - якщо ні.

//* Оголошена функція isValidPassword(password)
//* У виразі перевірки паролів використаний оператор ===
//* Виклик isValidPassword("mangodab3st") повертає false
//* Виклик isValidPassword("kiwirul3z") повертає false
//* Виклик isValidPassword("jqueryismyjam") повертає true

// function isValidPassword(password) {
//   const SAVED_PASSWORD = "jqueryismyjam";
//   // Change code below this line
//   const isMatch = password === SAVED_PASSWORD;

//   // Change code above this line
//   return isMatch;
// }

// console.log(isValidPassword("mangodab3st"));
// console.log(isValidPassword("kiwirul3z"));
// console.log(isValidPassword("jqueryismyjam"));

//! Завдання 15) перевірка повноліття і виведення повідомлення за допомогою if...else
// Розгалуження використовуються для виконання різного коду, залежно від умови. Принцип роботи простий - результат виразу в умові блоку if приводиться до буля true або false.

// if (умова) {
//   // тіло if
// } else {
//   // тіло else
// }
// Якщо умова приводиться до true, то виконується код у фігурних дужках тіла if, а блок else ігнорується.

// let cost;
// const subscription = "pro";

// if (subscription === "pro") {
//   cost = 100;
// } else {
//   cost = 0;
// }

// console.log(cost); // 100
// Якщо умова приводиться до false, код блоку if буде пропущений, і виконається код у фігурних дужках після блоку else.

// let cost;
// const subscription = "free";

// if (subscription === "pro") {
//   cost = 100;
// } else {
//   cost = 0;
// }

// console.log(cost); // 0

//todo Додай вираз перевірки повноліття користувача, значення параметра age, в умову для інструкції if.

//todo Якщо користувач повнолітній, повинен виконуватися блок if і у змінну message записується рядок "You are an adult".
//todo В іншому випадку повинен виконуватися блок else і записується рядок "You are a minor".

//* Оголошена функція checkAge(age).
//* У виразі перевірки віку використаний оператор >=
//* Виклик checkAge(20) повертає "You are an adult"
//* Виклик checkAge(8) повертає "You are a minor"
//* Виклик checkAge(14) повертає "You are a minor"
//* Виклик checkAge(38) повертає "You are an adult"

// function checkAge(age) {
//   let message;

//   if (age >= 18) {
//     // Change this line
//     message = "You are an adult";
//   } else {
//     message = "You are a minor";
//   }

//   return message;
// }

// console.log(checkAge(20));
// console.log(checkAge(8));
// console.log(checkAge(14));
// console.log(checkAge(38));

//! Завдання 16) if...else   провіряємо чи в замовленні(ordered) не перевищує кількість товару ніж є на складі(available)
// ЗАДАЧА: СКЛАД ТОВАРІВ

//todo Функція checkStorage(available, ordered) перевіряє можливість оформлення замовлення і повертає повідомлення про результат. Вона оголошує два параметри, значення яких будуть задаватися під час її виклику:

//todo available - загальна кількість товарів на складі
//todo ordered - одиниць товару в замовленні
//todo Використовуючи розгалуження, доповни код функції таким чином, що:

//todo Якщо в замовленні вказане число, яке перевищує кількість товарів на складі, у змінну message записується рядок "Not enough goods in stock!".
//todo В іншому випадку записується рядок "Order is processed, our manager will contact you.".

//* Оголошена функція checkStorage(available, ordered).
//* Виклик checkStorage(100, 50) повертає "Order is processed, our manager will contact you."
//* Виклик checkStorage(100, 130) повертає "Not enough goods in stock!"
//* Виклик checkStorage(200, 20) повертає "Order is processed, our manager will contact you."
//* Виклик checkStorage(200, 150) повертає "Order is processed, our manager will contact you."
//* Виклик checkStorage(150, 180) повертає "Not enough goods in stock!"

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   if (ordered > available) {
//     message = "Not enough goods in stock!";
//   } else {
//     message = "Order is processed, our manager will contact you.";
//   }
//   // Change code above this line
//   return message;
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 150));
// console.log(checkStorage(150, 180));

//! Завдання 17) збільшуємо значення змінної(age) на одиницю(1) від попереднього значення, і оновлюємо значення в змінній(age)
// Комбіновані оператори - це коротший спосіб присвоїти змінній нове значення, ґрунтуючись на її попередньому значенні.

// Будемо збільшувати значення змінної age на одиницю від попереднього, імітуючи оновлення віку після дня народження користувача.

// let age = 25;
// // Класичний запис
// age = age + 1;
// console.log(age); // 26
// Спочатку виконується права частина виразу. Замість age підставляється 25, виконується операція додавання, і у змінну age записується 26.

// Виконаємо рефакторинг операції оновлення віку, використовуючи комбінований оператор присвоєння з додаванням.

// let age = 25;
// // Просто коротший запис, працює так само
// age += 1;
// console.log(age); // 26

//todo Заміни вирази зі стандартними математичними операторами на комбінований оператор присвоєння з додаванням, відніманням, множенням і діленням.

//* Значення змінної a дорівнює 7
//* Використаний оператор +=
//* Значення змінної b дорівнює 6
//* Використаний оператор -=
//* Значення змінної c дорівнює 45
//* Використаний оператор *=
//* Значення змінної d дорівнює 2
//* Використаний оператор /=

// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// a = a + 2;
// b = b - 4;
// c = c * 3;
// d = d / 10;
// // Change code below this line
// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

//! Завдання 18) рахуємо сумму замовлення і провіряємо чи достатнь коштів на балансі для оплати у клієнта - виводимо повідомлення
// ЗАДАЧА: ПЕРЕВІРКА БАЛАНСУ

//todo Станція з продажу ремонтних дроїдів готова до запуску, залишилося написати програмне забезпечення для відділу продажів.

//todo Функція makeTransaction(pricePerDroid, orderedQuantity, customerCredits) виконує транзакцію з продажу дроїдів і повертає повідомлення про результат операції. Вона оголошує три параметри, значення яких будуть задаватися під час її виклику:

//todo pricePerDroid - ціна одного дроїда
//todo orderedQuantity - кіл-сть замовлених дроїдів
//todo customerCredits - сума коштів на рахунку клієнта
//todo Доповни її наступним функціоналом:

//todo Оголоси змінну totalPrice для зберігання загальної суми замовлення і присвой їй вираз розрахунку цієї суми.
//todo Додай перевірку, чи зможе клієнт оплатити замовлення:
//todo якщо сума до сплати перевищує кількість кредитів на рахунку клієнта, запиши у змінну message рядок "Insufficient funds!";
//todo в іншому випадку, відніми суму покупки з рахунку клієнта і запиши у змінну message повідомлення: "You ordered <число> droids, you have <число> credits left".

// Оголошена функція makeTransaction(pricePerDroid, orderedQuantity, customerCredits)
// Виклик makeTransaction(3000, 5, 23000) повертає "You ordered 5 droids, you have 8000 credits left"
// Виклик makeTransaction(1000, 3, 15000) повертає "You ordered 3 droids, you have 12000 credits left"
// Виклик makeTransaction(5000, 10, 8000) повертає "Insufficient funds!"
// Виклик makeTransaction(2000, 8, 10000) повертає "Insufficient funds!"
// Виклик makeTransaction(500, 10, 5000) повертає "You ordered 10 droids, you have 0 credits left"

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Change code below this line
//   let totalPrice = pricePerDroid * orderedQuantity;

//   if (totalPrice > customerCredits) {
//     message = "Insufficient funds!";
//   } else {
//     message = `You ordered ${orderedQuantity} droids, you have ${
//       customerCredits - totalPrice
//     } credits left`;
//   }

//   // Change code above this line
//   return message;
// }

// console.log(makeTransaction(3000, 5, 23000));
// console.log(makeTransaction(1000, 3, 15000));
// console.log(makeTransaction(5000, 10, 8000));
// console.log(makeTransaction(2000, 8, 10000));
// console.log(makeTransaction(500, 10, 5000));

//! Завдання 19) else...if  при провірці пароля виводимо повідомлення залежно від введених данних
// Конструкція if...else може перевірити і зреагувати на виконання або невиконання тільки однієї умови.

// let cost;
// const subscription = "pro";

// if (subscription === "pro") {
//   cost = 100;
// } else {
//   cost = 0;
// }

// console.log(cost); // 100
// Блок else...if дозволяє додати після else ще один оператор if з умовою. В кінці ланцюжка може бути класичний блок else, який виконається тільки у разі, коли жодна з умов не приведеться до true.

// let cost;
// const subscription = "premium";

// if (subscription === "free") {
//   cost = 0;
// } else if (subscription === "pro") {
//   cost = 100;
// } else if (subscription === "premium") {
//   cost = 500;
// } else {
//   console.log(`Invalid subscription type - ${subscription}`);
// }

// console.log(cost); // 500
// За першої ж задовільної умови перевірки припиняться і виконається тільки тіло відповідного блоку if. Тому подібний запис потрібно читати як: «шукаю перше виконання умови, ігнорую все інше».

//todo Функція checkPassword(password) отримує пароль користувача в параметр password, перевіряє його на збіг з паролем адміністратора у змінній ADMIN_PASSWORD і повертає повідомлення про результат порівняння, яке зберігається у змінній message.

//todo Якщо значення параметра password дорівнює null, значить користувач скасував операцію і в message записується рядок "Canceled by user!".
//todo Якщо значення параметра password збігається зі значенням ADMIN_PASSWORD, у змінну message присвоюється рядок "Welcome!".
//todo Якщо жодна з попередніх умов не виконалася, у змінну message записується рядок "Access denied, wrong password!".

//* Оголошена функція checkPassword(password)
//* Виклик checkPassword("mangohackzor") повертає "Access denied, wrong password!"
//* Виклик checkPassword(null) повертає "Canceled by user!"
//* Виклик checkPassword("polyhax") повертає "Access denied, wrong password!"
//* Виклик checkPassword("jqueryismyjam") повертає "Welcome!"

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;

//   if (password === null) {
//     // Change this line
//     message = "Canceled by user!";
//   } else if (password === ADMIN_PASSWORD) {
//     // Change this line
//     message = "Welcome!";
//   } else {
//     message = "Access denied, wrong password!";
//   }

//   return message;
// }

// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword(null));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));

//! Завдання 20) else...if перевіряємо замовлення чи була введена кількість і чи є така кількість на складі і виводимо повідомлення залежно від результату
// ЗАДАЧА: СКЛАД ТОВАРІВ 2.0

//todo Функція checkStorage(available, ordered) перевіряє можливість оформлення замовлення і повертає повідомлення про результат. Вона оголошує два параметри, значення яких будуть задаватися під час її виклику.

//todo available - доступна кількість товарів на складі
//todo ordered - одиниць товару в замовленні
//todo Використовуючи розгалуження, доповни код функції таким чином, що:

//todo Якщо в замовленні ще немає товарів, тобто значення параметра ordered дорівнює 0, у змінну message присвоюється рядок "There are no products in the order!".
//todo Якщо товарів у замовленні більше, ніж доступно товарів на складі, то у змінну message присвоюється рядок "Your order is too large, there are not enough items in stock!".
//todo В іншому випадку у змінну message присвоюється рядок "The order is accepted, our manager will contact you".

// Оголошена функція checkStorage(available, ordered)
// Виклик checkStorage(100, 50) повертає "The order is accepted, our manager will contact you"
// Виклик checkStorage(100, 130) повертає "Your order is too large, there are not enough items in stock!"
// Виклик checkStorage(70, 0) повертає "There are no products in the order!"
// Виклик checkStorage(200, 20) повертає "The order is accepted, our manager will contact you"
// Виклик checkStorage(200, 250) повертає "Your order is too large, there are not enough items in stock!"
// Виклик checkStorage(150, 0) повертає "There are no products in the order!"

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   if (ordered === 0) {
//     message = "There are no products in the order!";
//   } else if (ordered > available) {
//     message = "Your order is too large, there are not enough items in stock!";
//   } else {
//     message = "The order is accepted, our manager will contact you";
//   }
//   // Change code above this line
//   return message;
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));

//! Завдання 21) оператора-&& (повертає перше знайдене false) для провірки чи входить число в проміжок чисел start (number) end
// Логічні оператори використовуються для перевірки умов з багатьма виразами, наприклад у розгалуженнях.

// Оператор && приводить всі операнди до буля і повертає значення одного з них. Лівий операнд, якщо його можна привести до false, і правий - в інших випадках.

// вираз && вираз
// У наступному прикладі обидві умови повернуть true, тому результатом всього виразу буде true - повернеться значення правого операнда.

// const age = 20;
// console.log(age > 10 && age < 30); // true && true -> true
// Якщо хоча б один з операндів буде приведений до false, результатом виразу буде цей операнд.

// const age = 50;
// console.log(age > 10 && age < 30); // true && false -> false
// console.log(age > 80 && age < 120); // false && true -> false
// Тобто логічне «І» запинається на хибності і повертає те, на чому запнувся або останній операнд.

// console.log(true && false); // false
// console.log(false && true); // false
// console.log(true && true); // true

// console.log(3 && false); // false
// console.log(false && 3); // false
// console.log(3 && true); // true
// console.log(true && 3); // 3
// Корисно
// Запам'ятайте шість значень, які в булевому перетворенні приводяться до `false`: `0`, `NaN`, `null`, `undefined`, порожній рядок `""` або `''` і саме значення `false`. Абсолютно все інше приводиться до `true`.

// console.log(1 && 5); // true && true -> 5
// console.log(5 && 1); // true && true -> 1
// console.log(0 && 2); // false && true -> 0
// console.log(2 && 0); // true && false -> 0
// console.log("" && "Mango"); // false && true -> ''
// console.log("Mango" && ""); // true && false -> ''
// console.log("Mango" && "Poly"); // true && true -> 'Poly'
// console.log("Poly" && "Mango"); // true && true -> 'Mango'

//todo Функція isNumberInRange(start, end, number) перевіряє, чи входить число у проміжок. Вона оголошує три параметри, значення яких будуть задаватися під час її виклику:

//todo number - число, входження якого перевіряється
//todo start - початок числового проміжку
//todo end - кінець числового проміжку
//todo Присвой змінній isInRange вираз перевірки входження number у числовий проміжок від start до end. Тобто число повинно бути більшим або дорівнювати start, і меншим або дорівнювати end. Результатом виразу перевірки буде буль true або false.

// Оголошена функція isNumberInRange(start, end, number)
// У виразі перевірки використаний оператор &&
// Виклик isNumberInRange(10, 30, 17) повертає true
// Виклик isNumberInRange(10, 30, 5) повертає false
// Виклик isNumberInRange(20, 50, 24) повертає true
// Виклик isNumberInRange(20, 50, 76) повертає false

// function isNumberInRange(start, end, number) {
//   const isInRange = start <= number && number <= end; // Change this line

//   return isInRange;
// }
// console.log(isNumberInRange(10, 30, 17));
// console.log(isNumberInRange(10, 30, 5));
// console.log(isNumberInRange(20, 50, 24));
// console.log(isNumberInRange(20, 50, 76));

//! Завдання 22) Оператор || повертає перше знайдене true.
// Оператор || приводить всі операнди до буля і повертає значення одного з них. Лівий операнд, якщо його можна привести до true, і правий - в інших випадках.

// вираз || вираз
// У наступному прикладі умова зліва поверне true, тому результатом всього виразу буде true - повернеться значення першого операнда, яке було приведене до true.

// const age = 5;
// console.log(age < 10 || age > 30); // true || false -> true
// Тут результатом теж буде true, оскільки хоча б один з операндів, у цьому випадку правий, був приведений до true.

// const age = 40;
// console.log(age < 10 || age > 30); // false || true -> true
// А тут жодна з умов не виконується, тому отримуємо false - значення останнього операнда.

// const age = 20;
// console.log(age < 10 || age > 30); // false || false -> false
// Тобто логічне «АБО» запинається на істині і повертає те, на чому запнулося або останній операнд.

// console.log(true || false); // true
// console.log(false || true); // true
// console.log(true || true); // true

// console.log(3 || false); // 3
// console.log(false || 3); // 3
// console.log(3 || true); // 3
// console.log(true || 3); // true

//todo Функція checkIfCanAccessContent(subType) перевіряє, чи може користувач отримати доступ до контенту. Перевірка відбувається за типом передплати. Отримати доступ можуть тільки користувачі з передплатою pro або vip.

//todo Присвой змінній canAccessContent вираз перевірки передплати. Якщо значення параметра subType дорівнює рядкам "pro" або "vip", користувач отримає доступ. Результатом виразу перевірки буде буль true або false.

// Оголошена функція checkIfCanAccessContent(subType)
// У виразі перевірки використаний оператор ||
// Виклик checkIfCanAccessContent("pro") повертає true
// Виклик checkIfCanAccessContent("starter") повертає false
// Виклик checkIfCanAccessContent("vip") повертає true
// Виклик checkIfCanAccessContent("free") повертає false

// function checkIfCanAccessContent(subType) {
//   const canAccessContent = subType === "pro" || subType === "vip"; // Change this line

//   return canAccessContent;
// }

// console.log(checkIfCanAccessContent("pro"));
// console.log(checkIfCanAccessContent("starter"));
// console.log(checkIfCanAccessContent("vip"));
// console.log(checkIfCanAccessContent("free"));

//! Завдання 23) Оператор ! перевіряємо чи входить число у проміжок і робимо інверсію значення
// Всі оператори, які ми розглядали до цього, були бінарними. Тобто вони містили два операнди: лівий і правий. Логічне «НЕ» - це унарний оператор, що виконує операцію над одним операндом справа.

// !вираз
// Оператор ! приводить операнд до буля, якщо необхідно, а потім робить інверсію - замінює його на протилежний true -> false або false -> true.

// console.log(!true); // false
// console.log(!false); // true
// console.log(!3); // !3 -> !true -> false
// console.log(!"Mango"); // !'Mango' -> !true -> false
// console.log(!0); // !0 -> !false -> true
// console.log(!""); // !'' -> !false -> true

// const isOnline = true;
// const isNotOnline = !isOnline; // !isOnline -> !true -> false

//todo Функція isNumberNotInRange(start, end, number) перевіряє, чи не входить число у проміжок. Тобто число повинно бути меншим або дорівнювати start і більшим або дорівнювати end. Результатом виразу перевірки буде буль true або false.

//todo Вона оголошує три параметри, значення яких будуть задаватися під час її виклику:

//todo number - число, невходження якого перевіряється
//todo start - початок числового проміжку
//todo end - кінець числового проміжку
//todo Присвой змінній isNotInRange вираз інверсії значення змінної isInRange, використовуючи оператор !.

//* Оголошена функція isNumberNotInRange(start, end, number)
//* У виразі використаний оператор !
//* Виклик isNumberNotInRange(10, 30, 17) повертає false
//* Виклик isNumberNotInRange(10, 30, 5) повертає true
//* Виклик isNumberNotInRange(20, 50, 24) повертає false
//* Виклик isNumberNotInRange(20, 50, 76) повертає true

// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   console.log(isInRange);

//   const isNotInRange = !isInRange; // Change this line

//   return isNotInRange;
// }

// console.log(isNumberNotInRange(10, 30, 17));
// console.log(isNumberNotInRange(10, 30, 5));
// console.log(isNumberNotInRange(20, 50, 24));
// console.log(isNumberNotInRange(20, 50, 76));

//! Завдання 24)
// ЗАДАЧА: ОБЧИСЛЕННЯ ЗНИЖКИ

//todo Функція getDiscount(totalSpent) визначає значення знижки, залежно від загальної суми витрачених грошей (параметр totalSpent) в магазині за весь час (партнерська програма). Знижка записується у змінну discount і повертається з функції як результат її роботи.

//todo Використовуючи розгалуження і логічні оператори, доповни код функції.

//todo Якщо витрачено від 50000 (включно) або більше кредитів - знижка 10% (золотий партнер)
//todo Якщо витрачено від 20000 (включно) до 50000 кредитів - знижка 5% (срібний партнер)
//todo Якщо витрачено від 5000 (включно) до 20000 кредитів - знижка 2% (бронзовий партнер)
//todo Якщо витрачено менше 5000 кредитів - знижка 0 (базовий партнер)
//todo Значення знижок кожного рівня зберігаються в однойменних константах BASE_DISCOUNT, BRONZE_DISCOUNT, SILVER_DISCOUNT і GOLD_DISCOUNT.

// Оголошена функція getDiscount(totalSpent)
// Виклик getDiscount(137000) повертає 0.1
// Виклик getDiscount(46900) повертає 0.05
// Виклик getDiscount(8250) повертає 0.02
// Виклик getDiscount(1300) повертає 0
// Виклик getDiscount(5000) повертає 0.02
// Виклик getDiscount(20000) повертає 0.05
// Виклик getDiscount(50000) повертає 0.1

function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 0.02;
  const SILVER_DISCOUNT = 0.05;
  const GOLD_DISCOUNT = 0.1;
  let discount;
  // Change code below this line
  if (totalSpent >= 50000) {
    discount = GOLD_DISCOUNT;
  } else if (totalSpent > 20000 && 50000 > totalSpent) {
    discount = SILVER_DISCOUNT;
  } else if (totalSpent > 5000 && 20000 < totalSpent) {
    discount = BRONZE_DISCOUNT;
  } else if (totalSpent < 5000) {
    discount = BASE_DISCOUNT;
  }
  // Change code above this line
  return discount;
}

console.log(getDiscount(137000));
console.log(getDiscount(46900));
console.log(getDiscount(8250));
console.log(getDiscount(1300));
console.log(getDiscount(5000));
console.log(getDiscount(20000));
console.log(getDiscount(50000));

//! Завдання 25)
//todo

//! Завдання 26)
//todo

//! Завдання 27)
//todo

//! Завдання 28)
//todo

//! Завдання 29)
//todo

//! Завдання 30)
//todo

//! Завдання 31)
//todo

//! Завдання 32)
//todo

//! Завдання 33)
//todo

//! Завдання 34)
//todo

//! Завдання 35)
//todo

//! Завдання 36)
//todo
