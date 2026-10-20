## Veckans Mat

## Om sidan

Veckans Mat är en webbplats som gör det enklare att hitta inspiration till veckans måltider. Sidan riktar sig till personer som vill ha goda och enkla maträtter under en hektisk vardag.

Webbplatsen presenterar fem måltider, en för varje vardag från måndag till fredag. Varje måltid har en bild, en rubrik och en beskrivning. Målet är att göra det enkelt för besökaren att se veckans meny.

Webbplatsen är byggd med HTML, CSS och JavaScript.

## Skiss

Jag gjorde en skiss för att planera webbplatsens struktur och utseende innan jag började bygga sidan.

Skissen visar sidans olika delar:

Header: Webbplatsens namn och navigering.

Navigation: Länkar till Hem, Meny, Recept och Om oss.

Hero-sektion: En stor bild, en rubrik, en kort presentation och en länk till veckans meny.

Måltidssektion: Fem måltidskort, från måndag till fredag.

Footer: Webbplatsens namn, en kort slogan och navigeringslänkar.

Jag anpassade layouten för både dator och mobil. På dator visas måltidskorten bredvid varandra i en rad, medan de på mobil visas ett i taget under varandra.

Den färdiga sidan följer skissens grundidé. Jag justerade vissa detaljer under arbetets gång för att få layouten att fungera bättre på olika skärmstorlekar.

## Funktionalitet

Besökaren kan navigera på webbplatsen och läsa om veckans måltider. Det finns också knappar för att välja en måltid.

Funktionerna är uppdelade mellan HTML, CSS och JavaScript.

index.html: Innehåller sidans struktur, rubriker, bilder, länkar och knappar.

style.css: Bestämmer sidans färger, avstånd, måltidskort, knappar och responsiva layout.

script.js: Hanterar klick på måltidsknapparna och visar ett meddelande på sidan.

Jag använder addEventListener() för att lyssna efter klick på knapparna. När besökaren klickar på en måltidsknapp anropas en funktion som använder textContent för att visa vilken måltid besökaren har valt.

Länken ”Se veckans meny” leder till måltidssektionen. Webbplatsen är responsiv, vilket betyder att layouten anpassas till både dator och mobil.

Beställningsknapparna visar ett bekräftelsemeddelande. De genomför inte en riktig beställning eller betalning.

## AI-användning

Jag använde ChatGPT som stöd under utvecklingen av webbplatsen.

Exempel 1: CSS och responsiv design

Vad bad jag om? Jag bad om hjälp med att utforma måltidskorten och anpassa webbplatsen för mobil och dator.

Vad fick jag? Jag fick förslag på CSS för Flexbox, avstånd, färger, bilder och media queries.

Vad gjorde jag med det? Jag använde förslagen som stöd och testade hur webbplatsen såg ut i webbläsaren. Jag behöll färger som passade min design och kontrollerade layouten på olika skärmstorlekar.

Exempel 2: JavaScript och knappar

Vad bad jag om? Jag bad om hjälp med att få måltidsknapparna att visa ett meddelande när besökaren klickar på dem.

Vad fick jag? Jag fick exempel på hur querySelector(), addEventListener(), funktioner och textContent kan användas.

Vad gjorde jag med det? Jag anpassade koden till mina egna måltider och knappar. Jag testade knapparna i webbläsaren och rättade fel när vissa meddelanden inte visades.

## Tekniska val (VG)

Jag valde HTML för att skapa sidans struktur, CSS för designen och JavaScript för interaktionen.

Jag använde semantiska HTML-element, till exempel header, main, section och footer, för att göra koden tydligare och lättare att förstå.

Jag använde Flexbox för att placera måltidskort och andra delar av sidan. Jag använde även en media query för att anpassa layouten till mindre skärmar.

Jag delade upp koden i tre filer: index.html, style.css och script.js. Det gör det lättare att hitta och ändra rätt del av projektet.

Jag använde en funktion för att visa ett meddelande när en måltid väljs. På så sätt kan samma funktion användas för flera måltider utan att all kod behöver upprepas.

Jag valde en grön och ljus färgskala eftersom den passar webbplatsens tema. Jag använde också liknande utformning på måltidskorten för att skapa en enhetlig design.

## Bedömning av AI-innehåll (VG)

Jag granskade AI-förslagen genom att testa koden i webbläsaren och kontrollera om resultatet stämde med min design och funktionalitet.

Jag behöll de förslag som fungerade och passade webbplatsens syfte. Jag anpassade bland annat färger, text, måltider och knappar så att de passade mitt eget projekt.

När en funktion inte fungerade som förväntat undersökte jag koden och rättade felet. Jag lärde mig till exempel att en selektor måste matcha elementets ID eller klass för att JavaScript ska hitta rätt element.

Jag använde AI som ett stöd för att förstå och lösa problem, men jag testade resultatet själv. Jag vill kunna förklara hur HTML, CSS och JavaScript samverkar på min webbpla