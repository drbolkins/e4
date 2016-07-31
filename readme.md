# Podstawy PHP &ndash; egzamin 3

## Wytyczne

1. Stwórz [**fork**](forking) repozytorium z tym egzaminem.
2. [**Sklonuj**](ref-clone) repozytorium na swój komputer.
3. [**Skomituj**](ref-commit) zmiany do swojego repozytorium.
4. [**Wypchnij**](ref-push) zmiany do swojego repozytorium na GitHubie.
5. Stwórz [**pull request**](pull-request) do oryginalnego repozytorium, gdy skończysz zadanie.


**Pamiętaj, że pull request musi być stworzony, aby wykładowca dostał Twoje odpowiedzi**.

Odpowiedzi do zadań 1&ndash;2 wpisz w pliku **zadanie01_02.txt**.
Resztę zadań rozwiąż w odpowiednich plikach **js**.
Nie zmieniaj nic w plikach HTML.

* Podczas egzaminu możesz korzystać z notatek, kodu napisanego wcześniej, internetu i prezentacji.
* Zabroniona jest jakakolwiek komunikacja z innymi kursantami.

## Zadanie 1
(2 pkt)  
Co to jest propagacja eventów? Jakie znasz typy propagacji? Czym się od siebie różnią?

## Zadanie 2
(1 pkt)  
Wytłumacz, dlaczego dobrze jest umieszczać kod JavaScript w następującej funkcji:

  ```javascript
  document.addEventListener('DOMContentLoaded', function() {
    ... //JS code goes here
  }
  ```

Co się może stać, jeśli w powyższej funkcji kodu JavaScript nie umieścimy?


## Zadanie 3
(3 pkt)  
Stwórz klasę `User` w JavaScript, która będzie miała:
1.	Konstruktor przyjmujący nazwę, mail i opis.
2.	Funkcję (dodaną poprzez prototyp) ```welcomeUser```, która wyświetli w konsoli przywitanie.

Stwórz obiekt tej klasy i dopisz do niego (tylko i wyłącznie do tego stworzonego obiektu) dodatkową metodę ```sayGoodbye```. Metoda ta powinna wypisać pożegnanie w konsoli.

## Zadanie 4
(5 pkt)  
Wykonaj następujące polecenia:
1. Znajdź wszystkie elementy o **klasie** ```sample_class``` i wypisz w konsoli ich tagi.
2. Znajdź element o **id** ```sample_id``` i wypisz w konsoli jego wszystkie **klasy**.
3. Znajdź wszystkie elementy listy znajdujące się w elemencie o **klasie** ```sample_class_2``` i wypisz znajdujący się w nich tekst.
4. Znajdź wszystkie linki i wypisz adresy, na które wskazują.
5. Znajdź element o **klasie** ```sample_class_3``` i wypisz w konsoli tagi wszystkich jego dzieci.

Korzystaj z JavaScriptu lub jQuery.

## Zadanie 5
(3 pkt)  
Do wszystkich guzików znajdujących się na stronie dopisz event, który po naciśnięciu spowoduje, że na **divie** pokaże się tekst trzymany w `data-text`. Korzystaj z JavaScriptu lub jQuery.



## Zadanie 6
(6 pkt)  
Do formularza dopisz event reagujący na jego wysłanie. Po wciśnięciu przycisku ```submit``` funkcja eventu powinna:
1. Zapobiegać przeładowaniu strony.
2. Sprawdzić, czy długość danych w polu **Imię** jest dłuższa niż pięć znaków. Jeżeli warunek nie jest spełniony, odpowiednia wiadomość powinna być pokazana w **divie** o **klasie** ```error_message```,
3. Sprawdzić, czy wartości pól **Hasło** i **Hasło2** są identyczne. Jeżeli warunek nie jest spełniony, odpowiednia wiadomość powinna być pokazana w **divie** o **klasie**```error_message```.
4. Sprawdzić, czy zaznaczony jest checkbox "Akceptuję warunki". Jeżeli warunek nie jest spełniony, odpowiednia wiadomość powinna być pokazana w **divie** o **klasie** ```error_message```.
5. Jeżeli wszystkie warunki są spełnione, w konsoli wyświetl wszystkie informacje z formularza, a w **divie** o **klasie** ```success_message``` wyświetl informację o tym, że rejestracja się udała.

Korzystaj z JavaScriptu lub jQuery.
