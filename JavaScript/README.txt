Dokumentasi Penggunaan Aplikasi To-Do List Berbasis Console (Node.js)


---

Deskripsi Program

Aplikasi ini adalah program berbasis console untuk membuat, mengelola, dan menghapus daftar tugas (to-do list). Dibangun menggunakan Node.js dengan library prompt-sync untuk menangani input pengguna.


---

Persyaratan

1. Node.js harus terinstal pada komputer Anda. Jika belum, unduh dan instal dari Node.js official website.


2. Library prompt-sync harus diinstal pada proyek ini.




---

Langkah-langkah Instalasi

1. Inisialisasi Proyek
Buka terminal Anda, navigasikan ke folder tempat Anda ingin menyimpan proyek ini, lalu jalankan perintah:

npm init -y


2. Instalasi prompt-sync
Instal library prompt-sync untuk menangani input console:

npm install prompt-sync


3. Salin Kode Program
Buat file dengan nama todo.js di folder proyek Anda dan salin kode berikut ke file tersebut: Kode Program Lengkap




---

Cara Menjalankan Program

1. Buka Terminal Pastikan terminal terbuka pada direktori tempat file todo.js disimpan.


2. Jalankan Program Ketik perintah berikut di terminal:

node todo.js


3. Ikuti Instruksi Anda akan melihat menu utama dengan opsi untuk mengelola to-do list Anda. Pilih opsi sesuai kebutuhan Anda dengan memasukkan nomor menu.




---

Fitur Program

1. Tampilkan Semua Tugas

Pilih opsi 1 di menu utama.

Menampilkan semua tugas yang ada dalam to-do list.

Tugas yang belum selesai akan ditampilkan dengan [ ], sedangkan tugas selesai ditandai dengan [✔].



2. Tambah Tugas

Pilih opsi 2 di menu utama.

Masukkan deskripsi tugas baru, lalu tekan Enter.

Tugas akan ditambahkan ke dalam to-do list.



3. Tandai Tugas Selesai

Pilih opsi 3 di menu utama.

Program akan menampilkan daftar tugas. Masukkan nomor tugas yang ingin ditandai sebagai selesai.

Status tugas tersebut akan berubah menjadi [✔].



4. Hapus Tugas

Pilih opsi 4 di menu utama.

Program akan menampilkan daftar tugas. Masukkan nomor tugas yang ingin dihapus.

Tugas tersebut akan dihapus dari daftar.



5. Keluar dari Program

Pilih opsi 5 di menu utama.

Program akan menutup dan Anda kembali ke terminal.





---

Contoh Interaksi

Berikut adalah simulasi penggunaan program:

Tampilan di terminal:

=== To-Do List ===
1. Tampilkan semua tugas
2. Tambah tugas
3. Tandai tugas selesai
4. Hapus tugas
5. Keluar
Pilih menu (1-5): 2
Masukkan nama tugas: Belajar JavaScript
Tugas berhasil ditambahkan!

=== To-Do List ===
1. Tampilkan semua tugas
2. Tambah tugas
3. Tandai tugas selesai
4. Hapus tugas
5. Keluar
Pilih menu (1-5): 1

Daftar Tugas:
1. [ ] Belajar JavaScript

=== To-Do List ===
1. Tampilkan semua tugas
2. Tambah tugas
3. Tandai tugas selesai
4. Hapus tugas
5. Keluar
Pilih menu (1-5): 3
Masukkan nomor tugas yang selesai: 1
Tugas berhasil ditandai selesai!


---

Error Handling

1. Input Kosong atau Tidak Valid

Saat menambahkan tugas: Program akan meminta Anda untuk mengisi deskripsi tugas yang valid.

Saat memilih nomor tugas: Program akan menampilkan pesan bahwa nomor tugas tidak valid jika Anda memasukkan angka di luar daftar.



2. To-Do List Kosong

Jika Anda mencoba menampilkan, menandai selesai, atau menghapus tugas saat to-do list kosong, program akan memberi tahu bahwa daftar kosong.





---

Catatan

Anda dapat memodifikasi program ini untuk menambahkan fitur lain, seperti menyimpan daftar ke file atau memuat daftar dari file.

Jika Anda ingin program ini berjalan lebih otomatis atau memiliki antarmuka grafis, gunakan teknologi tambahan seperti Electron atau framework berbasis web.
