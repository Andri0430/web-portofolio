# 🌊 Andriansyah — Portfolio Website

> Website portofolio personal Web Developer dengan tema **Ocean Blue**, dibangun menggunakan React + Tailwind CSS.

---

## ✨ Fitur
- 🌙 **Dark / Light Mode** — toggle di navbar, tersimpan otomatis
- 📱 **Fully Responsive** — mobile, tablet, dan desktop
- 📲 **Bottom Navigation** — navigasi khusus tampilan mobile
- 🎞️ **Scroll Animations** — elemen muncul saat masuk viewport
- 📧 **Form Kontak Dinamis** — kirim email via EmailJS + redirect WhatsApp otomatis
- ⚡ **Skill Progress Bars** — animasi saat di-scroll
- 🔒 **Environment Variables** — API key tersimpan aman di `.env`

---

## 🗂️ Struktur Proyek
```
portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Sticky navbar + hamburger menu + dark mode toggle
│   │   ├── Hero.jsx         # Hero section dengan animasi & stats
│   │   ├── Skills.jsx       # Skill bars dengan animasi scroll
│   │   ├── Projects.jsx     # Grid 6 proyek dengan hover effect
│   │   ├── Contact.jsx      # Form kontak (EmailJS + WhatsApp)
│   │   ├── BottomNav.jsx    # Bottom navigation khusus mobile
│   │   └── Footer.jsx       # Footer
│   ├── App.jsx              # Root component + dark mode state
│   ├── main.jsx
│   └── index.css            # Tailwind directives + Google Fonts
├── .env                     # ← buat sendiri, jangan di-commit!
├── .gitignore
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## 🚀 Instalasi & Menjalankan
### 1. Prasyarat

Pastikan sudah terinstall:
- [Node.js](https://nodejs.org) versi **18 atau lebih baru**

### 2. Clone / Extract project
```bash
# Jika dari ZIP, extract lalu masuk ke foldernya
cd portfolio
```

### 3. Install dependencies

```bash
npm install
```

### 4. Buat file `.env`

Buat file `.env` di root folder (sejajar dengan `package.json`):

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
```

> Lihat bagian **Setup EmailJS** di bawah untuk cara mendapatkan nilai-nilai ini.

### 5. Jalankan

```bash
npm run dev
```

Buka browser ke **http://localhost:5173** 🎉

---

## 📧 Setup EmailJS

Agar form kontak berfungsi mengirim email sungguhan:

1. Daftar gratis di [emailjs.com](https://emailjs.com) (200 email/bulan)
2. **Email Services** → Add New Service → pilih Gmail → Connect Account → copy **Service ID**
3. **Email Templates** → Create New → isi template:

   ```
   Subject : Pesan baru dari {{from_name}}
   Content : {{from_name}} ({{from_email}}) mengirim pesan:
             {{message}}
   Reply To: {{from_email}}
   ```
   Copy **Template ID**

4. **Account** → General → copy **Public Key**
5. Isi `.env` dengan ketiga nilai tersebut
6. Ganti `WA_NUMBER` di `Contact.jsx` dengan nomor WhatsApp kamu (format: `628xxxxxxxxxx`)

---

## 🛠️ Kustomisasi

### Ganti data profil
Edit langsung di masing-masing komponen:

| Yang ingin diubah | File |
|---|---|
| Nama, deskripsi, stats | `src/components/Hero.jsx` |
| Daftar skill & persentase | `src/components/Skills.jsx` |
| Proyek & deskripsi | `src/components/Projects.jsx` |
| Email, LinkedIn, GitHub, WA | `src/components/Contact.jsx` |

### Ganti warna aksen
Warna utama cyan `#00C9B1` tersebar di semua komponen. Untuk ganti tema warna, cukup find & replace nilai hex tersebut.

---

## 📦 Build untuk Production

```bash
npm run build
```

Hasil build ada di folder `dist/` — siap di-deploy.

### Deploy gratis

| Platform | Cara |
|---|---|
| **Vercel** | Drag & drop folder `dist/` atau connect GitHub repo |
| **Netlify** | Drag & drop folder `dist/` ke netlify.com/drop |
| **GitHub Pages** | Upload isi `dist/` ke branch `gh-pages` |

> ⚠️ Jangan lupa set Environment Variables di platform hosting sesuai isi `.env` kamu.

---

## 🔐 Keamanan

File `.env` **tidak boleh** di-commit ke GitHub. Pastikan `.gitignore` sudah berisi:

```
node_modules/
dist/
.env
.env.local
.env.production
.DS_Store
```

---

## 📚 Tech Stack

| Teknologi | Kegunaan |
|---|---|
| [React 18](https://react.dev) | UI library |
| [Tailwind CSS 3](https://tailwindcss.com) | Styling utility-first |
| [Vite 5](https://vitejs.dev) | Build tool & dev server |
| [EmailJS](https://emailjs.com) | Kirim email tanpa backend |
| [Google Fonts](https://fonts.google.com) | Syne + DM Sans + JetBrains Mono |

---

## 📄 Lisensi

Proyek ini bebas digunakan dan dimodifikasi untuk keperluan pribadi maupun komersial.

---

<div align="center">
  <p>Dibuat dengan ☕ oleh <strong>Andriansyah</strong></p>
  <p>
    <a href="mailto:andriansyah0430@gmail.com">Email</a> ·
    <a href="https://github.com/username">GitHub</a> ·
    <a href="https://linkedin.com/in/username">LinkedIn</a>
  </p>
</div>