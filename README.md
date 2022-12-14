Локально проект запускається за допомогою скрипту npm start. Для деплоя проекту
на Netlify необхідно застосувати скрипт npm run deploy.

При написанні тестового завдання по реалізації гаманця виконано наступні
завдання:

- дизайн для трьох ширин екрану (мобілка, планшет, десктоп);

- при натисканні користувачем на кнопку «Edit» (для редагування готівкових сум
  та грошових сум на картках) в модальному вікні з₴являється форма, в якій вже
  відображено сума коштів та валюта, яка на даний час зберігається в базі даних.
  При коригування суми користувачем введена сума коригується і відображається
  вже з двома цифрами після точки;

- вибір валюти: написано кастомний селект для обирання виду валюти з усіх
  можливих валют світу шляхом пошуку у випадаючому списку або шляхом введення в
  фільтр коду валюти з трьох літер / назви валюти / цифрового коду валюти (зараз
  відображається 7 видів валют, можна додати безліч інших видів валют);

- відображення загального Balanceу після опрацювання даних отриманих з бази
  даних;

- написано логіку відображення замаскованого номеру картки з можливістю показати
  та скопіювати повний номер картки;

- тип платіжної системи для Visa, Mastercard виводиться у вигляді логотипу, для
  інших ПС – текстом;

- написано три кастомні хуки (useMouseClose - закриття елементів кліком по
  екрану, useCloseByEsc - закриття елементів натисканням на Esc, useToggle – для
  зміни стану на протилежний).

  Розпочато виконання наступних завдань для розширення функціоналу проекту
  (виконання в процесі, ще не завершено):

  1. back-end частина:

  - реєстрація, верифікація та логінізація користувача;
  - зберігання отриманих даних з використанням бази даних MongoDB;
  - здійснення валідації даних отриманих з front-end частини від користувача;
  - написання мідлварів, контролерів для end-points;

  2. front-end частина буде написано:

  - логіку та верстку по реєстрації та логінізації користувача,
  - додано heder з навігаціїєю та logоut;
  - буде завершено написання логіки для всіх модальних вікон (додавання картки,
    коригування грошових сум, видалення картки);
  - логіку валідації значень номера картки, expire date, cvv;
  - логіку підтримки декількох мов інтерфейсу;
  - також є можливість розширити функціонал шляхом відображення статистики у
    вигляді графіка (в розрізі видів валют та сум).
