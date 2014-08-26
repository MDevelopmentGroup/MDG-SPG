[RU] Одностраничный генератор проекта для InterSystems Caché
[EN] Single page Project Generator for InterSystems Caché
========
[Русский / Russian]
## Перед запуском проекта
* Убедитесь что у Вас работает интернет и доступен  http://akvant.pro/scrumbler/index.html  (здесь расположены библиотеки)
* Создайте область с веб-приложением по умолчанию или используйте существующую, например User
* Импортируйте локально файл mdg-spg.xml
* Скомпилируйте проект
## Внимание
* Проверено только в Windows 7, должно работать в только в Win среде
* В области будет создан брокер /broker777
* Cоздаcтся каталог c:\temp - в него будут генерироваться все проекты. 
  * Папки с префиксом __DB/ - база данных
  * Папки с префиксом __WEB/ - веб часть
## Запуск
* В пакете spg откройте класс SinglepageProjectGenerator и нажмите F5

## Работа. Генерация CRUD проекта на стороне клиента и сервера
На странице
* Заполните название проекта
* Заполните название пакета в котором будут созданы классы
* Создайте произвольное количество классов нажимая на + указав лишь их имена
  * в каждом классе создайте произвольное количество свойств
* При создании свойств доступно
  * указание типа свойства - строка, число или дата 
  * для числа, в настоящее время доступен контроль только положительного целого
  * описание свойства, которое в дальнейшем будет подсказкой в форме ввода

## По завершении - нажмите кнопку создать. 
Генерация проекта может занять некоторое время, по завершении которого появится ссылка на проект "Проект доступен..."
Если всё удовлетворяет правилам синтаксиса (пока проверок нет), то будут созданы:
* База данных
* Область к которой будет монтирована БД
* Веб приложение для файлов
* Веб приложение для брокера
* Классы и свойства в них
* Методы CRUD в каждом классе
* Соответствующий брокер, обслуживающий классы в пакете
* Веб часть с использованием bootstrap и angularjs
  * CRUD методы в контроллере и фабриках
  * роутинг
  * меню классов
  * формы просмотра,  создания и обновления свойств класса
  * в зависимости от типов в форме создания появится datepicker или проверка на положительное целое

[English]
## Before you start
* Make sure you have connect to internet and  http://akvant.pro/scrumbler/index.html is available
* Create new NameSpace or use an existing with default web-app, User for example
* Import to this NameSpase mdg-spg.xml
* Compile project
## Warning
* Tested in Windows 7, and must work only in Windows environment
* Broker named  /broker777 will be created
* Creates the directory c:\temp - it will be used to store by all generated projects.
  * Directories with prefix __DB/ - for databases
  * Directories with prefix  __WEB/ - web part
## Using
* In package spg open class SinglepageProjectGenerator and press F5

## Work. Generate CRUD web project on client and server side
On the page:
* Fill the project name
* Fill the package name in which will be created classes
* Create any number of classes by pressing on + just filled their names
  * in each class, create an arbitrary number of properties
* When you create the properties available some options:
  * directly set property type - %String, %Integer or %Data

## After you click Autocreate button. 
Project generation can take some time, after that you will see link to generatet project
If all ok, this parts of project will be generated:
* Database
* NameSpace
* Web app an broker
* On server side CRUD methods for each class
* On client side - web part with CRUD functional based on bootstrap & angularjs
  * class menu
  * view and create forms
