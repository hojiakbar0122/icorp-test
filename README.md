# ICorp Test API – TypeScript Example

Bu loyiha test uchun API bilan HTTP so‘rovlar orqali ishlashni ko‘rsatadi.  
Ma'lumotlar `POST` va `GET` orqali yuboriladi va yakuniy xabar olinadi.

---

## Maqsad
- `POST` so‘rov orqali test serverga xabar yuborish.
- Serverdan birinchi kod qismini olish.
- Server tomonidan yuborilgan ikkinchi qismini `/receive` route orqali qabul qilish.
- Ikkala qismini birlashtirib, `GET` orqali yakuniy xabarni olish.

---

## Texnologiyalar
- **Node.js**
- **TypeScript**
- **Express.js**
- **Axios**
- **Ngrok**

---

## Ishga tushirish

1. **Ngrok orqali internetga ulanish (public URL olish)**  
   Agar sizning serveringizga tashqi API ikkinchi qismni yuborishi kerak bo‘lsa, lokal serveringizni internetga ochishingiz zarur:

   - Ngrok o‘rnatilganini tekshiring yoki o‘rnating:
     ```bash
     npm install -g ngrok
     ```
   - Authtoken oling va sozlang:
     ```bash
     ngrok config add-authtoken <sizning_tokeningiz>
     ```
   - 3000-portni internetga oching:
     ```bash
     ngrok http 3000
     ```
   - Terminalda chiqqan `https://xxxxx.ngrok-free.dev` URLni oling va `index.ts` faylida:
     ```ts
     const myUrl = "https://xxxxx.ngrok-free.dev/receive";
     ```

2. **Serverni ishga tushirish**
    Terminalda:
    npm start
