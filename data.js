// ------------------------------------------------------------------
// KONFIGURATION & LEKTIONEN
// ------------------------------------------------------------------

// Passwörter
const USER_PASS = "mbot";  // Für Joni
const ADMIN_PASS = "papa"; // Für dich (öffnet den Admin-Modus)

// Der Lehrplan: 100 Lektionen in 10 Seasons
const CURRICULUM = [
    {
        id: "s1",
        title: "Season 1: Das Erwachen",
        description: "Hardware: Display, LEDs, Audio. Wir hauchen dem Roboter Leben ein.",
        color: "blue",
        icon: "fa-bolt",
        lessons: [
            {
                id: 1,
                title: "Hallo Welt",
                type: "normal",
                goal: "Der Roboter zeigt ein lachendes Gesicht und macht ein Geräusch.",
                setup: ["USB-Kabel verbunden?", "mBot angeschaltet?", "Gerät 'mBot2' ausgewählt?", "Modus 'Live' aktiviert?"],
                steps: [
                    { text: "Ziehe 'Wenn grüne Flagge angeklickt' (Ereignisse).", hint: "Der gelbe Hut-Block." },
                    { text: "Hänge darunter: 'LED-Anzeige zeigt Bild...' (Optik).", hint: "Klicke auf das Bild im Block um zu malen." },
                    { text: "Hänge darunter: 'Spiele Aufnahme hallo...' (Audio).", hint: "Du kannst auch einen eigenen Sound aufnehmen!" }
                ],
                sos: [{ problem: "Blöcke sind grau?", solution: "Schalte oben den Schalter von 'Upload' auf 'Live'." }]
            },
            {
                id: 2,
                title: "Das Gefühls-Kino",
                type: "normal",
                goal: "Der Roboter wechselt endlos zwischen 'Froh' und 'Wütend'.",
                setup: ["Alten Code löschen oder zur Seite schieben."],
                steps: [
                    { text: "Nimm die Klammer 'wiederhole fortlaufend' (Steuerung).", hint: "Alles da drin passiert für immer." },
                    { text: "Zeige Bild 'Lachen'.", hint: "" },
                    { text: "WICHTIG: 'warte 1 sekunde' (Steuerung).", hint: "Ohne Warten ist er zu schnell." },
                    { text: "Zeige Bild 'Wütend'.", hint: "" },
                    { text: "Wieder: 'warte 1 sekunde'.", hint: "Vergisst man oft!" }
                ],
                sos: [{ problem: "Es flimmert nur?", solution: "Du hast die Warte-Blöcke vergessen!" }]
            },
            {
                id: 3,
                title: "Der Wächter (Logik Intro)",
                type: "challenge",
                goal: "Joystick drücken = Böses Gesicht. Sonst = Liebes Gesicht.",
                setup: ["Code von eben löschen."],
                steps: [
                    { text: "Nimm wieder 'fortlaufend'.", hint: "" },
                    { text: "Nimm 'falls ... dann ... sonst' (Steuerung).", hint: "Das ist eine Weiche." },
                    { text: "Bedingung (eckig): 'Joystick nach oben bewegt?' (Fühlen).", hint: "Türkise Kategorie." },
                    { text: "Bei DANN: Zeige Bild 'Wütend' + Spiele Sound.", hint: "" },
                    { text: "Bei SONST: Zeige Bild 'Lachen'.", hint: "Damit er wieder lieb wird, wenn du loslässt." }
                ],
                sos: [{ problem: "Reagiert nicht?", solution: "Drückst du den Joystick wirklich? Versuch mal ihn stark zu bewegen." }],
                needsPhoto: true
            },
            // Lektion 4-10 folgen...
        ]
    },
    {
        id: "s2",
        title: "Season 2: Die Fahrschule",
        description: "Hardware: Encoder Motoren. Präzises Fahren nach Zeit und Umdrehung.",
        color: "emerald",
        icon: "fa-car",
        lessons: [
            {
                id: 11,
                title: "Erste Fahrt",
                type: "normal",
                goal: "Fahre 2 Sekunden geradeaus.",
                setup: ["Roboter auf den Boden!", "Kabel lang genug oder Dongle?"],
                steps: [
                    { text: "Benutze 'bewege vorwärts mit 50 U/min für 1 sek'.", hint: "Blaue Kategorie 'Chassis' ganz unten." }
                ],
                sos: []
            }
            // Weitere Lektionen folgen...
        ]
    },
    {
        id: "s3",
        title: "Season 3: Die Fledermaus",
        description: "Hardware: Ultraschall-Sensor 2. Abstand messen und Hindernisse erkennen.",
        color: "indigo",
        icon: "fa-wifi", // Symbol für Wellen/Sensor
        lessons: [] // Wird gefüllt
    },
    {
        id: "s4",
        title: "Season 4: Der Spurensucher",
        description: "Hardware: Quad RGB Sensor. Linien folgen und Farben auf dem Boden erkennen.",
        color: "pink",
        icon: "fa-road",
        lessons: [] // Wird gefüllt
    },
    {
        id: "s5",
        title: "Season 5: Der eiserne Greifer",
        description: "Hardware: Servo & Mechanik. Objekte greifen, heben und transportieren.",
        color: "purple",
        icon: "fa-hand-rock",
        lessons: [] // Wird gefüllt
    },
    {
        id: "s6",
        title: "Season 6: Der Pilot",
        description: "Hardware: Gyroskop & Beschleunigungssensor. Winkelgenaues Drehen und Neigungssteuerung.",
        color: "orange",
        icon: "fa-compass",
        lessons: [] // Wird gefüllt
    },
    {
        id: "s7",
        title: "Season 7: Die Sinne",
        description: "Hardware: Mikrofon & Lichtsensor. Klatschen erkennen und Lichtmessung.",
        color: "cyan",
        icon: "fa-eye",
        lessons: [] // Wird gefüllt
    },
    {
        id: "s8",
        title: "Season 8: Das Gehirn",
        description: "Software: Variablen & Rechnen. Punktestände, Timer und Gedächtnis.",
        color: "yellow",
        icon: "fa-brain",
        lessons: [] // Wird gefüllt
    },
    {
        id: "s9",
        title: "Season 9: Der Architekt",
        description: "Software: Eigene Blöcke (Funktionen) & Nachrichten. Code aufräumen für Profis.",
        color: "teal",
        icon: "fa-cubes",
        lessons: [] // Wird gefüllt
    },
    {
        id: "s10",
        title: "Season 10: Die Legende",
        description: "Integration: Die große Abschlussprüfung. Alles kombinieren für volle Autonomie.",
        color: "red",
        icon: "fa-trophy",
        lessons: [
            // Platzhalter für das Finale
            {
                id: 100,
                title: "MEGA BOSS: Mission Mars",
                type: "boss",
                goal: "Der Roboter absolviert den Parcours vollautomatisch.",
                setup: ["Alles aufgebaut?", "Sensoren kalibriert?"],
                steps: [{ text: "Viel Glück, Commander.", hint: "Du hast alles gelernt, was du brauchst." }],
                sos: [],
                needsPhoto: true
            }
        ]
    }
];
