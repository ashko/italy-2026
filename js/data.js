/* ============================================================
   TRIP DATA — איטליה 2026  (משפחת ארז)
   מקור: אישורי הזמנה (Airbnb, Booking, מלון Touring, אל על, Europcar)
   + טיוטת המסלול. תאריכים: ISO "YYYY-MM-DD"; שעות: "HH:MM".
   ============================================================ */

const TRIP = {
  meta: {
    title: "איטליה 2026",
    subtitle: "טיול הקיץ של משפחת ארז",
    startDate: "2026-08-13",
    endDate: "2026-08-25",
    travelers: ["2 מבוגרים", "3 ילדים"],
    homeCity: "תל אביב",
    // קוד כניסה (4 ספרות). לשינוי — ערכו כאן. אבטחה בסיסית בלבד (האפליקציה ציבורית).
    passcode: "1325",
  },

  regions: [
    { id: "milan",     name: "מילאנו",       color: "#C75D3C" },
    { id: "garda",     name: "אגם גארדה",     color: "#3E78A8" },
    { id: "dolomites", name: "הדולומיטים",    color: "#4E7A56" },
    { id: "verona",    name: "ורונה",         color: "#9A5B33" },
  ],

  /* ---------------- מסלול יום-יום ---------------- */
  days: [
    {
      date: "2026-08-13", region: "milan", title: "נחיתה במילאנו",
      items: [
        { time: "18:30", type: "flight", title: "טיסה LY387 · נתב\"ג ← מילאנו", place: "טרמינל 3 → מלפנסה טרמינל 1",
          notes: "המראה 18:30, נחיתה 21:40 (4:10 שעות). אל על, Economy Lite.", confirmation: "X8V9D5" },
        { time: "21:40", type: "note", title: "נחיתה במלפנסה (MXP)", place: "Aeroporto di Milano-Malpensa, Terminal 1",
          address: "Malpensa Airport Terminal 1", notes: "איסוף מזוודות + מעבר למרכז מילאנו (מונית / Malpensa Express / שאטל)." },
        { time: "23:00", type: "stay", title: "צ׳ק-אין בדירה — Molino13", place: "Via Molino delle Armi 13, מילאנו",
          address: "Via Molino delle Armi 13, Milano 20123", notes: "מיד אחרי הדלת הראשית, מימין — אין צורך לעבור לחצר הפנימית. צ׳ק-אין מקוון מראש דרך Vikey. Wi-Fi: VodafoneMOLINO13 / Molino2023!", confirmation: "Vikey DB36XYNA" },
      ],
    },
    {
      date: "2026-08-14", region: "milan", title: "יום במילאנו",
      items: [
        { time: "בוקר", type: "sight", title: "הדואומו של מילאנו", place: "Piazza del Duomo",
          address: "Duomo di Milano", notes: "כדאי להזמין כרטיסים מראש (כולל עלייה לגג). הכניסה דורשת לבוש צנוע (כתפיים/ברכיים מכוסות)." },
        { time: "", type: "sight", title: "גלריה ויטוריו אמנואלה II", place: "ליד הדואומו",
          address: "Galleria Vittorio Emanuele II Milano", notes: "מעבר קניות מקורה היסטורי — סיבוב קצר וצילומים." },
        { time: "צהריים", type: "food", title: "גלידה איטלקית + פארק סמפיונה", place: "Parco Sempione / Castello Sforzesco",
          address: "Parco Sempione Milano", notes: "פארק ענק לצד טירת ספורצסקו — מושלם להפוגה עם הילדים." },
        { time: "אופציונלי", type: "sight", title: "סיור אצטדיון סן סירו", place: "Stadio San Siro",
          address: "Stadio San Siro Milano", notes: "סיור מאחורי הקלעים + מוזיאון (מילאן/אינטר). להזמין מראש." },
      ],
    },
    {
      date: "2026-08-15", region: "garda", title: "מילאנו ← אגם גארדה",
      items: [
        { time: "10:00", type: "car", title: "איסוף רכב — Europcar", place: "Milan D/T — Via Galvani",
          address: "Via Luigi Galvani 12, Milano", notes: "DS 7 אוטומטי או דומה. חובה: דרכון, רישיון נהיגה ישראלי + בינלאומי, וכרטיס אשראי בינלאומי לפיקדון (~€500).", confirmation: "1199350258 EC" },
        { time: "11:00", type: "stay", title: "צ׳ק-אאוט מהדירה במילאנו", place: "Molino13", notes: "להשאיר נקי, מפתחות לפי הוראות המארח פרנצ׳סקו." },
        { time: "12:00", type: "drive", title: "נסיעה ללאזיסה (~1.5 ש׳)", place: "מילאנו → Lazise, אגם גארדה",
          address: "Lazise VR Italia", notes: "כ-150 ק\"מ. שימו לב לכבישי אגרה (Autostrada) ולאזורי ZTL במרכזי ערים." },
        { time: "16:00–17:00", type: "stay", title: "צ׳ק-אין — Porto Vecchio Appartamenti", place: "via Francesco Fontana 14, Lazise",
          address: "via Francesco Fontana 14, 37017 Lazise VR", notes: "מישהו ייפגוש אתכם במקום. דירת פנטהאוז, 4 לילות. טלפון מארח: +39 338 825 3215.", confirmation: "5381027177" },
        { time: "אחה\"צ", type: "sight", title: "טיילת האגם וחוף בלאזיסה", place: "Lungolago di Lazise",
          address: "Lungolago Marconi Lazise", notes: "עיירת חומה ציורית על שפת האגם — טיילת, גלידה, רחצה ראשונה." },
      ],
    },
    {
      date: "2026-08-16", region: "garda", title: "גרדהלנד — יום מלא",
      items: [
        { time: "כל היום", type: "sight", title: "Gardaland Resort", place: "פארק השעשועים הגדול באיטליה",
          address: "Gardaland Castelnuovo del Garda", notes: "להגיע עם הפתיחה (בד\"כ 10:00). כרטיסים מראש באתר חוסכים תור וזול יותר. יש גם Gardaland SEA LIFE לצד הפארק." },
      ],
    },
    {
      date: "2026-08-17", region: "garda", title: "סביב אגם גארדה",
      items: [
        { time: "בוקר", type: "sight", title: "סירמיונה — טירת סקליגרי", place: "Sirmione",
          address: "Castello Scaligero Sirmione", notes: "חצי-אי קסום בלב האגם: טירה על המים, סמטאות, וחוף Jamaica Beach בקצה. ~30 דק׳ נסיעה." },
        { time: "אחה\"צ", type: "free", title: "שייט / חוף ושחייה", place: "אגם גארדה",
          notes: "שייט קצר בין העיירות (Bardolino / Garda) או יום רגוע בחוף ליד הדירה." },
      ],
    },
    {
      date: "2026-08-18", region: "garda", title: "יום אגם נינוח",
      items: [
        { time: "", type: "free", title: "חוף, שחייה ואופניים בטיילת", place: "Lazise / Bardolino",
          notes: "יום קליל לפני המעבר להרים — רחצה, קיאקים, אופניים על הטיילת." },
        { time: "אופציונלי", type: "sight", title: "פשקיירה דל גארדה / פארק מים", place: "Peschiera del Garda",
          address: "Peschiera del Garda", notes: "עיירת מבצר (אתר אונסק\"ו). באזור גם פארקי מים (Caneva Aquapark) ו-Movieland — לפי מצב הילדים." },
      ],
    },
    {
      date: "2026-08-19", region: "dolomites", title: "אגם גארדה ← הדולומיטים",
      items: [
        { time: "08:30–10:00", type: "stay", title: "צ׳ק-אאוט — Porto Vecchio", place: "Lazise", notes: "להחזיר מפתחות לפי הוראות המארח." },
        { time: "10:00", type: "drive", title: "נסיעה לוואל גרדנה (~2.5 ש׳)", place: "Lazise → Santa Cristina Valgardena",
          address: "Santa Cristina Valgardena BZ", notes: "עצירה מומלצת בדרך באגם קטן או עיירה אלפינית. הכבישים ההרריים מפותלים — לנהוג בנחת." },
        { time: "15:00", type: "stay", title: "צ׳ק-אין — Hotel Touring Val Gardena", place: "Via Dursan 71, Santa Cristina",
          address: "Hotel Touring Val Gardena, Via Dursan 71, Santa Cristina Valgardena", notes: "Family Suite, 4 לילות, ארוחת בוקר כלולה. יתרה לתשלום בצ׳ק-אין: €2,513.73 + מס תיירות ~€36 (במזומן). טלפון: +39 0471 793119.", confirmation: "3259471" },
      ],
    },
    {
      date: "2026-08-20", region: "dolomites", title: "ואל גרדנה",
      items: [
        { time: "בוקר", type: "hike", title: "רכבל ומסלול טבע קל", place: "Santa Cristina / Col Raiser",
          address: "Col Raiser cable car Santa Cristina", notes: "עלייה ברכבל לרמה האלפינית, מסלול הליכה מישורי ונופים של הסלה רונדה." },
        { time: "אחה\"צ", type: "free", title: "מגרש משחקים אלפיני", place: "Val Gardena",
          notes: "אזורי המשחק ההרריים בוואל גרדנה מצוינים לילדים (פארקי הרפתקאות עם מים ומתקני עץ)." },
      ],
    },
    {
      date: "2026-08-21", region: "dolomites", title: "Alpe di Siusi",
      items: [
        { time: "בוקר", type: "hike", title: "אלפה די סיוזי (Seiser Alm)", place: "הרמה האלפינית הגדולה באירופה",
          address: "Alpe di Siusi", notes: "עלייה ברכבל מ-Ortisei. נופים עוצרי נשימה, הליכות מישוריות, ושדות ירוקים אינסופיים." },
        { time: "צהריים", type: "food", title: "פיקניק עם נוף / בקתה אלפינית", place: "Seiser Alm",
          notes: "בקתות (Rifugio) להפסקת צהריים, או פיקניק על הדשא מול הפסגות." },
      ],
    },
    {
      date: "2026-08-22", region: "dolomites", title: "אגם קארצה + הרפתקאות",
      items: [
        { time: "בוקר", type: "sight", title: "אגם קארצה (Lago di Carezza)", place: "אגם הקשת",
          address: "Lago di Carezza", notes: "אחד האגמים היפים בדולומיטים — מים טורקיז על רקע פסגות הלאטמר. סיבוב קצר סביב האגם." },
        { time: "אחה\"צ", type: "sight", title: "Alpine Coaster / פארק חבלים / בריכה", place: "Val Gardena",
          notes: "מגלשת הרים (Alpine Coaster), פארק חבלים, או בריכת המלון לסיום היום. יום אינטנסיבי וכיפי." },
      ],
    },
    {
      date: "2026-08-23", region: "verona", title: "הדולומיטים ← ורונה",
      items: [
        { time: "10:00", type: "stay", title: "צ׳ק-אאוט — Hotel Touring", place: "Santa Cristina", notes: "לוודא תשלום יתרה + מס תיירות." },
        { time: "אחה\"צ", type: "drive", title: "נסיעה לורונה (~2 ש׳)", place: "Santa Cristina → Verona",
          address: "Verona Italia", notes: "ירידה מההרים חזרה לעיר." },
        { time: "", type: "stay", title: "צ׳ק-אין — דירה בורונה", place: "ורונה",
          notes: "⚠️ מתוך טיוטת המסלול — אין אישור הזמנה בתיקייה. כדאי לאמת/להזמין מראש." },
        { time: "ערב", type: "sight", title: "העיר העתיקה + ארנה דה ורונה", place: "Piazza Bra / Arena",
          address: "Arena di Verona", notes: "אמפיתיאטרון רומי מהמאה ה-1, פיאצה ברה התוססת, וארוחת ערב בעיר העתיקה." },
      ],
    },
    {
      date: "2026-08-24", region: "verona", title: "ורונה",
      items: [
        { time: "בוקר", type: "sight", title: "בית יוליה + העיר העתיקה", place: "Casa di Giulietta",
          address: "Casa di Giulietta Verona", notes: "המרפסת של רומיאו ויוליה, פיאצה דלה ארבה, וטירת קסטלווקיו על הנהר." },
        { time: "אחה\"צ", type: "free", title: "פונטה פייטרה / זמן חופשי", place: "Ponte Pietra",
          notes: "גשר רומי עתיק עם נוף לעיר, קניות, וגלידה אחרונה באיטליה." },
      ],
    },
    {
      date: "2026-08-25", region: "verona", title: "טיסה הביתה",
      items: [
        { time: "בוקר", type: "free", title: "בוקר חופשי בורונה", place: "ורונה", notes: "ארוזים ומוכנים — סיבוב אחרון/קפה לפני הדרך." },
        { time: "13:00", type: "drive", title: "נסיעה למלפנסה (~1.5–2 ש׳)", place: "Verona → Malpensa T1",
          address: "Malpensa Airport Terminal 1", notes: "לתדלק את הרכב לפני ההחזרה כדי להימנע מחיוב דלק." },
        { time: "16:00", type: "car", title: "החזרת רכב — Europcar", place: "Malpensa Terminal 1",
          address: "Europcar Malpensa Terminal 1", notes: "החזרה בטרמינל 1. לשמור קבלת תדלוק ודו\"ח החזרה.", confirmation: "1199350258 EC" },
        { time: "19:55", type: "flight", title: "טיסה LY282 · מילאנו ← נתב\"ג", place: "מלפנסה T1 → טרמינל 3",
          notes: "המראה 19:55, נחיתה 00:40 (26.8). אל על, Economy Lite.", confirmation: "X8V9D5" },
      ],
    },
  ],

  /* ---------------- לינה ---------------- */
  lodging: [
    {
      id: "milan", name: "Design Loft — Molino13", region: "milan",
      checkIn: "2026-08-13", checkOut: "2026-08-15", checkInTime: "15:00", checkOutTime: "11:00",
      address: "Via Molino delle Armi 13, Milano 20123", guests: 5,
      confirmation: "Airbnb · Vikey DB36XYNA", phone: "+393899085093", host: "פרנצ׳סקו",
      notes: "Wi-Fi: VodafoneMOLINO13 / Molino2023! · צ׳ק-אין מקוון מראש דרך Vikey",
      bookingUrl: "https://guest.vikey.it/checkin/DB36XYNA", linkLabel: "צ׳ק-אין מקוון (Vikey)", doc: "docs/lodging-milan.pdf",
    },
    {
      id: "garda", name: "Porto Vecchio Appartamenti", region: "garda",
      checkIn: "2026-08-15", checkOut: "2026-08-19", checkInTime: "16:00", checkOutTime: "10:00",
      address: "via Francesco Fontana 14, 37017 Lazise VR", guests: 5,
      confirmation: "Booking 5381027177", phone: "+393388253215", host: "מישהו ייפגוש אתכם במקום",
      notes: "דירת פנטהאוז · 4 לילות · שולם מראש €1,410.87", doc: "docs/lodging-garda.pdf",
    },
    {
      id: "dolomites", name: "Hotel Touring Val Gardena", region: "dolomites",
      checkIn: "2026-08-19", checkOut: "2026-08-23", checkInTime: "15:00", checkOutTime: "10:00",
      address: "Via Dursan 71, Santa Cristina Valgardena (BZ)", guests: 5,
      confirmation: "3259471", phone: "+390471793119", host: "Hotel Touring",
      notes: "Family Suite · ארוחת בוקר · יתרה €2,513.73 + מס תיירות ~€36 בצ׳ק-אין",
      bookingUrl: "https://www.hoteltouring.bz", linkLabel: "אתר המלון", doc: "docs/lodging-dolomites.pdf",
    },
    {
      id: "verona", name: "דירה בורונה (לאימות)", region: "verona",
      checkIn: "2026-08-23", checkOut: "2026-08-25", checkInTime: "", checkOutTime: "",
      address: "Verona", guests: 5,
      confirmation: "—", phone: "", host: "",
      notes: "⚠️ מתוך טיוטת המסלול בלבד — אין אישור הזמנה. לאמת/להזמין.",
    },
  ],

  /* ---------------- כרטיסים והזמנות ---------------- */
  tickets: [
    {
      id: "ly387", category: "flight", title: "טיסה הלוך · LY387",
      date: "2026-08-13", time: "18:30",
      from: "TLV", fromName: "נתב\"ג · טרמינל 3", to: "MXP", toName: "מלפנסה · טרמינל 1",
      confirmation: "X8V9D5", doc: "docs/flight-elal.pdf",
      notes: "נחיתה 21:40 · משך 4:10 · אל על Economy Lite · כרטיס 1142493634997",
    },
    {
      id: "ly282", category: "flight", title: "טיסה חזור · LY282",
      date: "2026-08-25", time: "19:55",
      from: "MXP", fromName: "מלפנסה · טרמינל 1", to: "TLV", toName: "נתב\"ג · טרמינל 3",
      confirmation: "X8V9D5", doc: "docs/flight-elal.pdf",
      notes: "נחיתה 00:40 (26.8) · משך 3:45 · אל על Economy Lite",
    },
    {
      id: "car", category: "car", title: "השכרת רכב · Europcar",
      date: "2026-08-15", time: "10:00",
      from: "מילאנו", fromName: "Via Galvani · 15.8 10:00", to: "מלפנסה", toName: "טרמינל 1 · 25.8 16:00",
      confirmation: "1199350258 EC", doc: "docs/car-europcar.pdf",
      notes: "DS 7 אוטומטי או דומה · 11 ימים · כולל ק\"מ חופשי, CDW+TP, נהג נוסף · שובר 624489 · נדרש רישיון בינלאומי + כרטיס אשראי לפיקדון",
    },
  ],

  /* ---------------- מסמכים מקוריים ---------------- */
  documents: [
    { name: "טיוטת המסלול (המקור)", url: "docs/itinerary-draft.jpg", note: "התמונה ששלחנו" },
    { name: "כרטיס טיסה — אל על", url: "docs/flight-elal.pdf", note: "הלוך + חזור" },
    { name: "שובר רכב — Europcar", url: "docs/car-europcar.pdf", note: "שובר 624489" },
    { name: "אישור לינה — מילאנו", url: "docs/lodging-milan.pdf", note: "Molino13" },
    { name: "אישור לינה — אגם גארדה", url: "docs/lodging-garda.pdf", note: "Porto Vecchio" },
    { name: "אישור לינה — דולומיטים", url: "docs/lodging-dolomites.pdf", note: "Hotel Touring" },
  ],

  /* ---------------- טלפונים ---------------- */
  contacts: [
    { label: "חירום (כללי באיטליה)", value: "112", type: "phone" },
    { label: "מארח מילאנו — פרנצ׳סקו", value: "+393899085093", type: "phone" },
    { label: "מארח לאזיסה (גארדה)", value: "+393388253215", type: "phone" },
    { label: "מלון Touring (דולומיטים)", value: "+390471793119", type: "phone" },
    { label: "Europcar — איסוף מילאנו", value: "+390266987826", type: "phone" },
    { label: "Europcar — מלפנסה T1", value: "+390230568786", type: "phone" },
    { label: "אל על (ישראל)", value: "+97239771111", type: "phone" },
  ],

  /* ---------------- מידע מהיר ---------------- */
  facts: [
    { icon: "cash", label: "מטבע", value: "אירו €" },
    { icon: "plug", label: "חשמל", value: "230V · C/F/L" },
    { icon: "lang", label: "שפה", value: "איטלקית" },
    { icon: "clock", label: "שעון", value: "‎-1 שעה מ-IL" },
  ],

  /* ---------------- טיפים ---------------- */
  tips: [
    {
      q: "נהיגה באיטליה — חובה לדעת",
      a: "נדרש רישיון נהיגה בינלאומי לצד הישראלי. היזהרו מאזורי ZTL (תנועה מוגבלת) במרכזי ערים — מצלמות מצלמות וקנסות מגיעים הביתה. כבישי אגרה (Autostrada) — שלמו בכרטיס/מזומן או שקלו Telepass. בהרים — כבישים מפותלים, נהגו בנחת. תדלקו לפני החזרת הרכב במלפנסה.",
    },
    {
      q: "תשלומים במזומן בצ׳ק-אין",
      a: "במלון Touring יש לשלם בצ׳ק-אין יתרה של €2,513.73 + מס תיירות ~€36. מס תיירות נפוץ גם במקומות אחרים (לרוב במזומן, ~€3–5 לאדם ללילה, ילדים מתחת ל-14 פטורים).",
    },
    {
      q: "מערכת EES החדשה באירופה",
      a: "מאוקטובר 2025 פועלת בגבולות האיחוד מערכת כניסה/יציאה (EES) הכוללת רישום ביומטרי (טביעות אצבע + תמונת פנים) בכניסה. ייתכן זמן המתנה נוסף בגבול — הגיעו לנמל התעופה מוקדם.",
    },
    {
      q: "טלפון, eSIM ואינטרנט",
      a: "כדאי להזמין eSIM מראש (Airalo / Holafly). באיחוד האירופי אין חיובי נדידה נוספים בין מדינות. האפליקציה הזו עובדת גם ללא אינטרנט (offline) — כל הפרטים זמינים לכם תמיד.",
    },
    {
      q: "מזג אוויר בדולומיטים",
      a: "גם באוגוסט הערבים בהרים קרירים (10–15°). קחו שכבות חמות, מעיל קל וגשם, ונעלי הליכה. במהלך היום נעים ושמשי — קרם הגנה חובה בגובה.",
    },
    {
      q: "כרטיסים מראש חוסכים זמן",
      a: "הזמינו מראש באונליין: גג הדואומו במילאנו, גרדהלנד, וסיור סן סירו. זה חוסך תורים ארוכים ולרוב גם זול יותר.",
    },
  ],

  /* ---------------- רשימת ציוד ---------------- */
  packing: [
    "דרכונים (בתוקף 6 חודשים) + צילום דיגיטלי",
    "רישיון נהיגה בינלאומי + ישראלי",
    "כרטיס אשראי בינלאומי לפיקדון הרכב",
    "אישורי הזמנה מודפסים (שובר רכב, מלון)",
    "מזומן באירו (מס תיירות + יתרת מלון)",
    "מטען + מתאם חשמל אירופאי (C/F)",
    "ביטוח נסיעות (כולל הילדים)",
    "תרופות אישיות + עזרה ראשונה קטנה",
    "שכבות חמות + מעיל קל לדולומיטים",
    "נעלי הליכה נוחות",
    "בגדי ים + מגבות (אגם + בריכות)",
    "קרם הגנה + משקפי שמש + כובעים",
    "בקבוקי מים רב-פעמיים",
    "חטיפים ומשחקים לילדים לנסיעות",
  ],
};

window.TRIP = TRIP;
