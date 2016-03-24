# JavaScript - egzamin

Zadanie 1-2 rozwiąż w pliku odpowiedzi.txt

Resztę zadań rozwiąż w odpowiednich plikach js.

Nie zmieniaj nic w plikach HTML.

## Zadania:
1. (2ptk) Co to jest propagacja eventów? Jakie znasz typy propagacji? Czym się od siebie różnią?

2. (1ptk) Wytłumacz dlaczego powinniśmy kod JavaScript umieszczać w następującym bloku kodu:
  ```
  document.addEventListener('DOMContentLoaded', function () {
    ... js code goes here...
  }
  ```
Do czego może prowadzić sytuacja, w której tego nie zrobimy?

3. (3ptk) Stwórz klasę User w JavaScript która:
  1.	Będzie miała konstruktor przyjmujący nazwę, mail i opis,
  2.	Miała funkcję (dodaną poprzez prototyp) ```welcomeUser```, która wyświetli w konsoli przywitanie,

Stwórz obiekt tej klasy i dopisz do niego dodatkową metodę ```sayGoodbye```. Metoda ta powinna wypisać pożegnanie w konsoli.


4. (5ptk) Używając JavaScript (lub jQuery):
  1. Znajdź wszystkie elementy o klasie ```sample_class``` i wypisz w konsoli ich tagi,
  2. Znajdź element o id ```sample_id``` i wypisz w konsoli jego wszystkie klasy,
  3. Znajdź wszystkie elementy listy znajdujące się w divie o klasie ```sample_class_2``` i wypisz znajdujący się w nich tekst,
  4. Znajdź wszystkie linki i wypisz adresy, na które wskazują,
  5. Znajdź element o klasie ```sample_class_3``` i wypisz w konsoli tagi wszystkich jego dzieci.

5. (3ptk) Używając JavaScript (lub jQuery) dopisz do wszystkich guzików znajdujących się na stronie event który po naciśnięciu spowoduje, że na divie pokaże się tekst trzymany w ```data-text```.

6. (6ptk) Używając JavaScript (lub jQuery) dopisz event do formularza. Event ma reagować na wysłanie formularza. Event ma:
  1. zapobiegać przeładowaniu strony,
  2. sprawdzić czy długość danych w polu Imię jest dłuższa niż 5 znaków. Jeżeli warunek nie jest spełniony odpowiednia wiadomość powinna być pokazana w divie o klasie ```error_message```,
  3. sprawdzić czy wartości pól Hasło i Hasło2 są identyczne. Jeżeli warunek nie jest spełniony odpowiednia wiadomość powinna być pokazana w divie o klasie ```error_message```,
  4. sprawdzić czy zaznaczony jest checkbox "Akceptuję warunki". Jeżeli warunek nie jest spełniony odpowiednia wiadomość powinna być pokazana w divie o klasie ```error_message```,
  5. Jeżeli wszystkie warunki są spełnione w konsoli wyświetl wszystkie informacje z formularza, a w divie o klasie ```success_message``` wyświetl informację o tym że rejestracja się udała.
