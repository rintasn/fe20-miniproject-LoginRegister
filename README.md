# Reqres Frontend Application

## **Deskripsi Proyek**
Proyek ini adalah sebuah aplikasi frontend yang dibangun dengan React.js dan terintegrasi dengan API dari [Reqres](https://reqres.in/). Aplikasi ini menawarkan fitur seperti login, registrasi, daftar pengguna, dan detail pengguna. Desain proyek ini bersifat responsif.

---

## **Fitur Utama**
1. **Register**
   - Pengguna dapat melakukan pendaftaran dengan email dan password.
   - Menampilkan pesan sukses atau error berdasarkan respons API.

2. **Login**
   - Pengguna dapat login menggunakan email dan password.
   - Token yang diperoleh disimpan di local storage.

3. **List Users**
   - Menampilkan daftar pengguna yang diambil dari API.
   - Dilengkapi dengan fitur pagination.

4. **User Detail**
   - Menampilkan detail informasi pengguna tertentu berdasarkan ID.

5. **Responsiveness**
   - Aplikasi dapat digunakan di berbagai ukuran layar (desktop, tablet, dan ponsel).

---

## **Tech Stack**
- **Frontend Framework**: React.js with Vite
- **HTTP Client**: Axios
- **Routing**: React Router v7
- **UI Framework**: Tailwind CSS
- **API**: Reqres (https://reqres.in/)

---

## **Instalasi dan Penggunaan**

### **1. Clone Repository**
```bash
git clone https://github.com/farismasud/dibimbing-miniproject-LoginRegister.git
cd repo-name
```

### **2. Install Dependencies**
```bash
npm install
```

### **3. Jalankan Aplikasi**
```bash
npm run dev
```
Aplikasi akan berjalan di `http://localhost:3000`.

---

## **Endpoint API yang Digunakan**
Berikut adalah daftar endpoint dari API Reqres yang digunakan:

1. **Register**
   - URL: `POST /api/register`
   - Data: `{ email, password }`

2. **Login**
   - URL: `POST /api/login`
   - Data: `{ email, password }`

3. **List Users**
   - URL: `GET /api/users?page=1`

4. **Single User**
   - URL: `GET /api/users/:id`

---

## **Preview Fitur**
1. **Register**
   - Form pendaftaran untuk pengguna baru.
2. **Login**
   - Halaman login dengan validasi token.
3. **List Users**
   - Tabel daftar pengguna dengan pagination.
4. **Single User**
   - Informasi detail pengguna berdasarkan ID.