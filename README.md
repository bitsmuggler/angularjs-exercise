# AngularJS refactoring playground

Mit dem vorliegenden Beispielcode können Refactoring-Szenarien diskutiert und geübt werden.

##Szenario
+ Die Anwendung besteht aus zwei Ansichten.
    + Der Anmeldedialog - bestehend aus einer Eingabe für Benutzername 'foo' und Passwort 'password'.
    + Der Bilderansicht - bestehend aus zwei Bilder mit hinterlegten Metadaten, welche per Mouse-Hover gelesen werden können.
+ Der Benutzer gelangt zuerst auf die Login Sicht und gibt die Benutzerdaten ein.
    + Bei gültigen Benutzerdaten gelangt der Benutzer auf die Bilderansicht.
    + Bei ungültigen Benutzerdaten erscheint eine Benachrichtigung.

## Themen
Der Fokus liegt auf den folgenden Themen:

+ Software-Architektonische Aspekte wie z.B. SOLID
+ Refactoring Grundlagen
    + Basis für Refactoring schaffen
    + Bad smells erkennen, beheben & testen
+ Javascript Grundlagen
+ AngularJS Grundlagen
    + Aufbau einer AngularJS Anwendung
        + Erklärung Pattern MV* (MVC/MVVM)
    + Erkennen bzw. Erklären der Konzepte in AngularJS wie z.B.
        + Scopes
        + Data Binding (Two-Way Binding vs. One-Way Binding)
        + Depdendency Injection & Injector
        + Templates
        + Expressions
        + Filters
        + Direktiven
        + Modules
        + Routing
+ AngularJS und die Integration mit anderen JS-Frameworks, wie z.B. JQuery, ZeptoJS vs. JQlite
+ Dependency Mgmt
    + Optimierung -> Einsatz z.B. von Bower
+ Unit-Testing
+ Debugging
+ Automatisierung & Optimierung
    + Notwendigkeit und Potential der Automatisierung erkennen, wie z.B.
        + Serve bzw. Watchers
        + Browser Sync
        + Wireing von Abhängigkeiten
        + Automatisierung von (Unit-)Tests
    + Notwendigkeit der Optmierung erkennen, wie z.B.
        + Minification
        + Konkatenierung
        + Vendor-Prefixes
        + ngAnnotate
        + File Suffixes

## Aufsetzen der Umgebung

```bash
npm install
```

## Gulp Tasks

Folgende Gulp-Tasks stehen zur Verfügung:

Starten der gesamten Umgebung:
```bash
gulp
```


Starten der Überprüfung der Codierrichtlinien:
```bash
gulp jshint
```

Starten der "imaginären" Unit-Tests:
```bash
gulp test
```

Starten des Webservers:
```bash
gulp connect
```
