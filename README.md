# MODCAST - Diecast Collector Store

MODCAST adalah sebuah platform katalog dan marketplace premium untuk kolektor diecast. Aplikasi ini dibangun dengan stack modern menggunakan Next.js, Prisma, dan SQLite untuk memberikan performa yang cepat dan desain bergaya galeri yang elegan.

## 🚀 Fitur Utama

- **Premium Dark Gallery UI**: Desain seamless ala galeri otomotif profesional (terinspirasi dari Diecast Corner).
- **Live Inventory**: Data produk langsung diambil dari database, memungkinkan update real-time.
- **Admin Dashboard**: Halaman khusus untuk memasukkan data produk (diecast) baru secara instan tanpa perlu coding.
- **Filter Cerdas**: Filter berdasarkan Kategori (JDM, Muscle, Exotic, Classic) dan Skala (1:64, 1:43, 1:18).

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 (App Router), React, Tailwind CSS, Framer Motion, GSAP.
- **Backend**: Next.js API Routes.
- **Database & ORM**: SQLite & Prisma ORM.

---

## 💻 Panduan Instalasi (Untuk Tim & Contributor)

Ikuti langkah-langkah di bawah ini untuk menjalankan proyek ini di komputer Anda setelah melakukan *clone* dari GitHub.

### 1. Persiapan Awal
Pastikan Anda sudah menginstal **Node.js** (versi 18 ke atas) di komputer Anda.

### 2. Install Dependensi
Buka terminal di dalam folder proyek ini, lalu jalankan:
```bash
npm install
```

### 3. Setup Database (Prisma & SQLite)
Karena kita menggunakan SQLite lokal, Anda perlu men-generate client Prisma dan menyinkronkan skema database. Jalankan perintah ini:
```bash
npx prisma generate
npx prisma db push
```
*(Perintah ini akan otomatis membuat file `dev.db` di dalam folder `prisma/`)*

### 4. (Opsional) Masukkan Data Dummy (Seeding)
Jika Anda ingin melihat tampilan awal dengan beberapa mobil contoh, jalankan skrip *seeder*:
```bash
node prisma/seed.js
```

### 5. Jalankan Server Development
```bash
npm run dev
```
Buka browser dan akses **`http://localhost:3000`** untuk melihat website utama.

---

## 📝 Panduan Memasukkan Produk (Untuk Admin)

Jika Anda bertugas memasukkan data produk (mobil) ke dalam katalog, ikuti langkah berikut:

1. Pastikan server sudah berjalan (`npm run dev`).
2. Buka browser dan pergi ke **[http://localhost:3000/admin](http://localhost:3000/admin)**.
3. Anda akan melihat form **Admin Dashboard**.
4. Isi data mobil diecast baru:
   - **Nama**: Judul mobil (contoh: *Nissan Skyline GT-R R34*).
   - **Harga**: Masukkan angka (contoh: *45.00*).
   - **Upload Image**: Klik "Choose File" untuk mengunggah foto mobil dari komputer Anda langsung. (Otomatis akan dinonaktifkan jika Anda memilih pakai link).
   - **Atau Image URL Path**: Masukkan alamat gambar jika Anda tidak ingin mengupload. Untuk gambar lokal, gunakan format `/images/nama-file.jpg`. Atau paste link gambar dari internet.
   - **Kategori & Skala**: Pilih dari dropdown yang tersedia.
   - **Fitur**: Masukkan fitur khusus yang dipisahkan koma (contoh: *Diecast Metal, Real Riders, Opening Hood*).
   - **Deskripsi**: Penjelasan detail tentang model mobil tersebut.
5. Klik **"Add Product"**.
6. Selesai! Anda bisa mengecek hasilnya di menu **Catalog**.

---

## 📁 Struktur Direktori Penting

- `src/app/admin/page.tsx` - Halaman form admin.
- `src/app/api/products/route.ts` - Backend endpoint (GET dan POST data produk).
- `src/app/catalog/page.tsx` - Halaman katalog (menarik data dari database).
- `prisma/schema.prisma` - Skema database (kolom dan tipe data tabel Product).
- `public/images/` - Tempat Anda menyimpan file foto diecast secara lokal.
