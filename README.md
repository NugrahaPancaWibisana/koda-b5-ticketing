# WEEK 7

## 1. Perbedaan antara Linux Kernel dan Linux Distro

- **Linux Kernel** adalah **inti (core)** sistem operasi yang mengatur komunikasi antara hardware dan software (CPU, RAM, disk, dll).
- **Linux Distro** adalah **paket sistem operasi lengkap** yang berisi kernel + tools + library + package manager + desktop/server environment.

**Intinya:**

> Semua distro Linux **pasti pakai Linux kernel**, tapi kernel saja **belum bisa dipakai** tanpa distro.

---

## 2. Linux FHS (Filesystem Hierarchy Standard)

FHS adalah **standar susunan direktori di Linux** agar semua distro konsisten.

| Direktori | Fungsi             | Contoh Kegunaan        |
| --------- | ------------------ | ---------------------- |
| `/home`   | Data user          | `/home/wibi/Documents` |
| `/root`   | Home user root     | Config admin           |
| `/etc`    | File konfigurasi   | `nginx.conf`, `passwd` |
| `/bin`    | Binary penting     | `ls`, `cp`, `rm`       |
| `/usr`    | Aplikasi & library | `/usr/bin/node`        |
| `/var`    | Data yang berubah  | log, cache             |
| `/mnt`    | Mount manual       | Mount HDD              |
| `/media`  | Mount otomatis     | Flashdisk              |

---

## 3. Sistem Permission dan Owner di Linux

Linux mengatur akses file dengan **owner, group, dan other**.

- **Owner** → pemilik file
- **Group** → kelompok user
- **Other** → user lain

### Permission

| Simbol | Angka | Arti    |
| ------ | ----- | ------- |
| `r`    | 4     | Read    |
| `w`    | 2     | Write   |
| `x`    | 1     | Execute |

### Contoh

```bash
chmod 755 script.sh
```

Artinya:

- Owner → rwx
- Group → r-x
- Other → r-x

### Ubah Owner

```bash
chown user:group file.txt
```

---

## 4. Prinsip Enkripsi pada SSH

SSH menggunakan **3 teknik kriptografi utama**:

1. **Asymmetric Encryption**
   Untuk autentikasi (public & private key)

2. **Symmetric Encryption**
   Untuk komunikasi data (lebih cepat)

3. **Hashing**
   Untuk memastikan data tidak diubah (integritas)

👉 Hasilnya: koneksi **aman, terenkripsi, dan terverifikasi**.

---

## 5. Perbedaan HTTP dan HTTPS

| HTTP                   | HTTPS                    |
| ---------------------- | ------------------------ |
| Port 80                | Port 443                 |
| Data plain-text        | Data terenkripsi         |
| Mudah disadap          | Lebih aman               |
| Tidak ada SSL          | Pakai SSL/TLS            |
| Tidak aman untuk login | Aman untuk data sensitif |

---

## 6. Docker OCI Compliance Standard

**OCI (Open Container Initiative)** adalah standar:

- **Image format**
- **Container runtime**

Docker mendukung standar OCI, sehingga:

- Image Docker bisa jalan di runtime lain (containerd, CRI-O)
- Lebih portable dan interoperable

---

## 7. Perbedaan Container dan Virtual Machine

| Aspek    | VM          | Container     |
| -------- | ----------- | ------------- |
| OS       | Full OS     | Share kernel  |
| Size     | Besar (GB)  | Kecil (MB)    |
| Startup  | Lama        | Cepat         |
| Resource | Berat       | Ringan        |
| Isolasi  | Sangat kuat | Cukup         |
| Use case | OS berbeda  | Microservices |

---

## 8. Image Layer pada Docker

Docker image terdiri dari **layer read-only**.

Manfaat:

- **Build lebih cepat** (cache)
- **Hemat storage**
- **Efisien distribusi**

Contoh:

```dockerfile
FROM node
COPY package.json .
RUN npm install
```

Setiap baris = **1 layer**

---

## 9. Docker Volume & Network

### Docker Volume

Digunakan untuk **menyimpan data persisten**.

Contoh:

```bash
docker volume create dbdata
```

Dipakai untuk:

- Database
- Upload file
- Data yang tidak boleh hilang

### Docker Network

Digunakan agar container bisa **saling komunikasi**.

Contoh:

```bash
docker network create app-network
```

Dipakai untuk:

- App ↔ Database
- Microservices

---

## 10. Web Server dan Reverse Proxy

### Web Server

Bertugas:

- Melayani request HTTP
- Menyajikan file / aplikasi

Contoh:

- Nginx
- Apache

### Reverse Proxy

Bertugas:

- Meneruskan request ke backend
- Load balancing
- SSL termination

Contoh:

- Nginx sebagai reverse proxy ke Node.js / Docker container

---
