//! завдання 1) патерн «раннє повернення»
// У функції може бути більше одного оператора return. Головне пам'ятати, що виконання функції переривається, коли інтерпретатор зустрічає повернення, і весь код після нього буде проігнорований в поточному виклику функції.

// Візьмемо вже знайому нам функцію перевірки повноліття. Вона працює, але тут є «зайвий» код, тобто тіло функції можна оптимізувати. В цьому випадку підійде спосіб (патерн) «раннє повернення».

// function checkAge(age) {
//   let message;

//   if (age >= 18) {
//     message = "Ви повнолітня людина";
//   } else {
//     message = "Ви неповнолітня людина";
//   }

//   return message;
// }
// Якщо умова в if виконується, тобто приводиться до true, повертаємо рядок "You are an adult", і код нижче вже не виконається.
// Якщо умова в if не виконується, тобто приводиться до false, повертаємо рядок "You are a minor".
// Використовуючи патерн «раннє повернення» і те, що виконання функції переривається на операторі return, ми позбавляємося зайвої змінної і блоку else. Тобто цей спосіб допомагає «розгладити» розгалуження.

//todo Запиши умову в інструкції if таким чином, щоб функція працювала правильно.

//* Оголошена функція checkAge(age).
//* У виразі перевірки віку використаний оператор >=
//* Виклик checkAge(20) повертає "You are an adult"
//* Виклик checkAge(8) повертає "You are a minor"
//* Виклик checkAge(14) повертає "You are a minor"
//* Виклик checkAge(38) повертає "You are an adult"
//* В тілі функції є тільки одна інструкція if
//* В тілі функції відсутні інструкції else або else if

// function checkAge(age) {
//   if (age >= 18) {
//     return "You are an adult";
//   }

//   return "You are a minor";
// }

// console.log(checkAge(23));

//! завдання 2) ЗАДАЧА: ПЕРЕВІРКА ПАРОЛЯ (РАННЄ ПОВЕРНЕННЯ)

// Функція checkPassword отримує пароль користувача у параметр password, перевіряє його на збіг з паролем адміністратора у змінній ADMIN_PASSWORD і повертає повідомлення про результат порівняння.

//todo Виконай рефакторинг коду функції checkPassword, використовуючи патерн «раннє повернення»:

// видали змінну message
// видали else
// код повинен працювати так само, як і до оптимізації

//* Оголошена функція checkPassword(password)
//* Виклик checkPassword("mangohackzor") повертає "Access denied, wrong password!"
//* Виклик checkPassword("polyhax") повертає "Access denied, wrong password!"
//* Виклик checkPassword("jqueryismyjam") повертає "Welcome!"

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";

//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   }
//   return "Access denied, wrong password!";
// }

// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));

//! завдання 3) ЗАДАЧА: СКЛАД ТОВАРІВ 3.0

// Функція checkStorage перевіряє можливість оформлення замовлення і повертає повідомлення про результат. Вона приймає два параметри, значення яких будуть задаватися під час її виклику.

// available - доступна кількість товарів на складі
// ordered - кількість одиниць товару в замовленні
//todo Виконай рефакторинг коду функції checkStorage, використовуючи патерн «раннє повернення».

// Оголошена функція checkStorage(available, ordered)
//* Виклик checkStorage(100, 50) повертає "The order is accepted, our manager will contact you"
//* Виклик checkStorage(100, 130) повертає "Your order is too large, not enough goods in stock!"
//* Виклик checkStorage(70, 0) повертає "Your order is empty!"
//* Виклик checkStorage(200, 20) повертає "The order is accepted, our manager will contact you"
//* Виклик checkStorage(200, 250) повертає "Your order is too large, not enough goods in stock!"
//* Виклик checkStorage(150, 0) повертає "Your order is empty!"

// function checkStorage(available, ordered) {
//   if (ordered === 0) {
//     return "Your order is empty!";
//   }
//   if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   }

//   return "The order is accepted, our manager will contact you";
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));

//! завдання 4) Масив / оголошується

// Масив використовується для зберігання впорядкованої колекції елементів. Він оголошується відкритою і закритою квадратною дужкою [] - літералом масиву. Всередині дужок кожен елемент масиву розділяється комою.

// const planets = ["Earth", "Mars", "Venus"];
// Корисно
// Оголошуючи змінну для об'єкта або масиву, програмісти, як правило, використовують const. Вони роблять це для того, щоб випадково не перезаписати значення, оскільки спроба перезапису викличе помилку до того, як код потрапить до користувача.

//todo Оголоси змінну fruits і присвой їй масив фруктів - рядків "apple", "plum", "pear" і "orange".

//* Оголошена змінна fruits
//* Значення змінної fruits - це масив ["apple", "plum", "pear", "orange"]

// const fruits = ["apple", "plum", "pear", "orange"];

// console.log(fruits);

//! завдання 5) доступ до значення елемента масиву

// Для доступу до значення елемента масиву застосовують синтаксис квадратних дужок масив[індекс]. Між ім'ям змінної масиву і квадратними дужками не повинно бути пробілу.

// Увага
// Індексація елементів масиву починається з нуля.

// const planets = ["Earth", "Mars", "Venus"];
// planets[0]; // "Earth"
// planets[2]; // "Venus"

//todo Оголоси три змінні і присвой кожній з них значення, використовуючи нотацію квадратних дужок.

// Ім'я змінної	Значення змінної
// firstElement	перший елемент масиву
// secondElement	другий елемент масиву
// lastElement	останній елемент масиву
// Оголошена змінна firstElement
// Значення змінної firstElement - це рядок "apple"
// Оголошена змінна secondElement
// Значення змінної secondElement - це рядок "plum"
// Оголошена змінна lastElement
// Значення змінної lastElement - це рядок "orange"

// const fruits = ["apple", "plum", "pear", "orange"];
// let last = fruits.length - 1;

// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[last];

// console.log(firstElement);
// console.log(secondElement);
// console.log(lastElement);

//! завдання 6) перевизначення значення елементів масиву

// На відміну від рядків, елементи масиву можна змінювати, звернувшись до них за індексом і присвоївши інше значення.

// const numbers = [1, 2, 3, 4, 5];
// numbers[0] = 7;
// numbers[2] = 14;
// console.log(numbers); // [7, 2, 14, 4, 5];

//todo Виконай перевизначення значення елементів з індексами 1 і 3. Заміни "plum" на "peach", а "orange" на "banana".

//* Оголошена змінна fruits
//* Значення змінної fruits - це масив ["apple", "peach", "pear", "banana"]

// const fruits = ["apple", "plum", "pear", "orange"];

// fruits[1] = "peach";
// fruits[3] = "banana";

// console.log(fruits);

//! завдання 7) Довжина масиву

// Довжина масиву, тобто кількість його елементів, зберігається у властивості length. Це динамічна величина, яка змінюється автоматично під час додавання або видалення елементів.

// const planets = ["Earth", "Mars", "Venus"];
// console.log(planets.length); // 3

//todo Оголоси змінну fruitsArrayLength і присвой їй довжину масиву fruits, використовуючи властивість length.

//* Оголошена змінна fruitsArrayLength
//* Значення змінної fruitsArrayLength - це число 4

// const fruits = ["apple", "peach", "pear", "banana"];

// const fruitsArrayLength = fruits.length;

// console.log(fruitsArrayLength);

//! завдання 8) отримати значення останнього елемента масиву

// Найчастіше ми заздалегідь у коді не знаємо, яка буде довжина масиву. Для того щоб отримати значення останнього елемента, застосовується наступний підхід - довжина масиву завжди на одиницю більша за індекс останнього елемента. Використовуючи формулу довжина_масиву - 1, можна отримати значення останнього елемента масиву довільної довжини.

// const planets = ["Earth", "Mars", "Venus"];
// const lastElementIndex = planets.length - 1;
// planets[lastElementIndex]; // "Venus"

//todo Оголоси дві зміні:

// Ім'я змінної	Очікуване значення
// lastElementIndex	Індекс останнього елемента масиву fruits через довжина_масиву - 1
// lastElement	Значення останнього елемента масиву

//* Оголошена змінна lastElementIndex
//* Значення змінної lastElementIndex - це число 3
//* Оголошена змінна lastElement
//* Значення змінної lastElement - це рядок "banana"

// const fruits = ["apple", "peach", "pear", "banana"];

// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];

// console.log(lastElementIndex);
// console.log(lastElement);

//! завдання 9) ЗАДАЧА: КРАЙНІ ЕЛЕМЕНТИ МАСИВУ

//todo Напиши функцію getExtremeElements(array), яка приймає один параметр array - масив елементів довільної довжини. Функція повинна повертати масив з двох елементів - першого і останнього елемента параметра array.

//* Оголошена функція getExtremeElements(array)
//* Виклик getExtremeElements([1, 2, 3, 4, 5]) повертає [1, 5]
//* Виклик getExtremeElements(["Earth", "Mars", "Venus"]) повертає ["Earth", "Venus"]
//* Виклик getExtremeElements(["apple", "peach", "pear", "banana"]) повертає ["apple", "banana"]

// function getExtremeElements(array) {
//   const arr = [];
//   const el = array.length - 1;

//   const firstEl = array[0];
//   const lastEl = array[el];

//   arr.push(firstEl, lastEl);

//   return arr;
// }

// function getExtremeElements(array) {
// array = [array[0], array[array.length - 1]];

// return array;
// }

// function getExtremeElements(array) {
//   return [array[0], array[array.length - 1]];
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));

//! завдання 10) Метод split(delimiter) дозволяє перетворити рядок на масив, "розбивши" його по роздільнику delimiter.

// Метод split(delimiter) дозволяє перетворити рядок на масив, "розбивши" його по роздільнику delimiter. Якщо роздільник - це порожній рядок, отримаємо масив окремих символів. Роздільником може бути один або кілька символів.

// const name = "Mango";
// console.log(name.split("")); // ["M", "a", "n", "g", "o"]

// const message = "JavaScript essentials";
// console.log(message.split(" ")); // ["JavaScript", "essentials"]

//todo Доповни код функції splitMessage(message, delimiter) таким чином, щоб вона повертала у змінній words результат поділу рядка message за роздільником delimiter - масив рядків.

//* Оголошена функція splitMessage(message, delimiter)
//* Виклик splitMessage("Mango hurries to the train", " ") повертає ["Mango", "hurries", "to", "the", "train"]
//* Виклик splitMessage("Mango", "") повертає ["M", "a", "n", "g", "o"]
//* Виклик splitMessage("best_for_week", "_") повертає ["best", "for", "week"]

// function splitMessage(message, delimiter) {
//   let words;

//   words = message.split(delimiter);

//   return words;
// }

// function splitMessage(message, delimiter) {
//   return message.split(delimiter);
// }

// console.log(splitMessage("Mango hurries to the train", " "));
// console.log(splitMessage("Mango", ""));
// console.log(splitMessage("best_for_week", "_"));

//! завдання 11)
