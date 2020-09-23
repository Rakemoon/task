## PERMASALAHAN
- Beberapa aplikasi yang beroperasi dengan prinsip client-server dapat mengalami kegagalan operasi maupun gangguan koneksi.

- Total waktu ping dapat bertambah secara signifikan terlebih jika server virtual yang digunakan tidak beroperasi secara optimal atau kelebihan beban.

- Komputer maupun perangkat lain dalam jaringan kesulitan mendapatkan dynamic ip.

- Kendala pengiriman berkas antarperangkat dalam jaringan.

- Gangguan koneksi dalam jaringan terutama jika server mengalami kelebihan beban dari jaringan lain.

## KONFIGURASI
- Gunakan 4 Switch 2950-24.
- Gunakan 16 PC Generic.
- Hubungkan 4 PC dengan 1 Switch yang masing-masing menggunakan kabel Copper Straight-Through.
- Hubungkan ke-4 Switch dengan kabel Copper Cross-Over.

- Sekarang, mulai setting masing-masing IP PC. Klik PC => Desktop => IP Configuration.
<img src="https://novayuliya18.files.wordpress.com/2015/10/vlan2.png">
<img src="https://novayuliya18.files.wordpress.com/2015/10/vlan3.png">
<img src="https://novayuliya18.files.wordpress.com/2015/10/valn4.png">
<img src="https://novayuliya18.files.wordpress.com/2015/10/ralat.png">
<img src="https://novayuliya18.files.wordpress.com/2015/10/ralat2.png">
<img src="https://novayuliya18.files.wordpress.com/2015/10/ralat-3.png">

- Sebelum melakukan setting switch, kita tentukan dahulu IP mana yang akan masuk ke VLAN 10 dan VLAN 20. Perhatikan juga port yang digunakan.

> **VLAN 10**
> ```ascii
> - PC4 (192.168.10.14)
> - PC5 (192.168.10.15)
> - PC0 (192.168.10.10)
> - PC1 (192.168.10.10)
> - PC8 (192.168.10.18)
> - PC9 (192.168.10.19)
> - PC13 (192.168.10.23)
> - PC12 (192.168.10.22)
> ```
> **VLAN 20**
> ```ascii
> - PC6 (192.168.20.16),
> - PC7 (192.168.20.17),
> - PC2 (192.168.20.12),
> - PC5 (192.168.20.15),
> - PC10 (192.168.20.20),
> - PC11 (192.168.20.21),
> - PC15 (192.168.20.25),
> - PC14 (192.168.20.24)

> :warning: IP tidak perlu sesuai contoh juga tidak apa apa

- Selanjutnya kita lakukan setting pada masing-masing switch. Pertama, buat VLAN 10 dan VLAN 20.
<img src="https://novayuliya18.files.wordpress.com/2015/10/vlan-14.png">

- Verifikasi VLAN yang sudah dibuat
<img src="https://novayuliya18.files.wordpress.com/2015/10/vlan-15.png">

- Masukan PORT menjadi anggota VLAN
<img src="https://novayuliya18.files.wordpress.com/2015/10/yg-bner.png">

- Lakukan ping pada vlan yang sama maka koneksi akan reply, tapi jika beda vlan akan time out alias tdak terhubung pada koneksi.
<img src="https://novayuliya18.files.wordpress.com/2015/10/pingvlan-10.png">
<img src="https://novayuliya18.files.wordpress.com/2015/10/ping.png">
<img src="https://novayuliya18.files.wordpress.com/2015/10/ping-beda-vlan.png">

- Konfigurasi VLAN
<img src="https://novayuliya18.files.wordpress.com/2015/10/conf-vlan-20.png">

