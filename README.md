# Uppgift-SHUI

Denna app använder sig av **Docker compose** (kräver docker desktop) för att start igång frontend/backend - containers samtidigt.
Skriv in **docker-compose up --build** för att bygga och starta image/containers.

## Installation
Innan du kan börja använda appen så behöver du efter att du laddat ner repot lägga till en .env fil inuti **api** undermappen med en innehållande secret - key. Sedan krävs det att
du av-kommenterar raderna på Stream.js inuti models/api undermapparna då detta initialt lägger in hårdkodad data som sedan kan simuleras som "streams". Värt att påpeka är att det räcker med att av-kommentera, spara och sedan kommentera av dessa rader igen så att data inte läggs in i databasen för varje gång man sparar en fil via backend.

## Hur fungerar appen?
Först vill jag påpeka att appen endast är designad för mobila enheter. För att navigera runt på webbplatsen så behöver användare först klicka på ikonen som visas i mitten på första sidan.
Användaren navigeras då till inloggnings sidan där hen kan logga in på sitt konto men om så behövs så kan användaren registrera sig genom att klicka på ikonen uppe till höger hörn. Efter registrering så loggas användaren in direkt och kan sedan börja prenumerera på olika kanaler. Om så önskas så kan användaren radera vardera kanal. Till sist har användaren rättighet till att radera sitt egna konto via settings menyn.
