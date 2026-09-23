const dataFisikaInten = {
    subjectId: 'fisika_tka_inten',
    subjectName: 'Fisika TKA (Prosus Inten TO-1)',
    categoryId: 'fisika',
    categoryName: 'Fisika',
    category: 'Fisika',
    icon: '⚡',
    questions: [
        {
            id: 'f1_inten',
            question: "Sebuah mikrometer digunakan untuk mengukur tebal suatu benda, skalanya ditunjukkan seperti gambar berikut.<br><pre class='font-mono text-xs bg-slate-100 p-2 rounded border leading-tight my-2'>\n      | 0  1  2       |\n   ---+--|--|--|----+- 15\n      |               | 10\n      |  |  |         | 5\n</pre>Hasil pengukurannya adalah...",
            options: ["2,13 mm", "2,63 mm", "2,70 mm", "2,73 mm", "2,83 mm"],
            correct: 3,
            rationale: "Skala utama menunjukkan 2,5 mm, sedangkan skala nonius sejajar pada angka 23 (0,23 mm).<br>Hasil pengukuran = 2,50 mm + 0,23 mm = 2,73 mm."
        },
        {
            id: 'f2_inten',
            question: "Budi naik sepeda dengan rute ABCD seperti pada gambar di bawah.<br><pre class='font-mono text-xs bg-slate-100 p-2 rounded border leading-tight my-2'>\n   A ------------ B (20 km)\n                  |\n                  | (40 km)\n                  |\n   D ------------ C (10 km)\n</pre>Rute AB ditempuh dengan laju tetap 8 km/jam, rute BC dengan laju tetap 10 km/jam, rute CD dengan laju tetap 4 km/jam. Jika selama menempuh rute itu Budi istirahat 40 menit di B dan 20 menit di C, maka kelajuan rata-rata dan kecepatan rata-rata Budi naik sepeda dari A sampai ke D berturut-turut adalah...",
            options: [
                "7 km/jam dan 3 km/jam",
                "50/9 km/jam dan 70/9 km/jam",
                "70/9 km/jam dan 50/9 km/jam",
                "5 km/jam dan 7 km/jam",
                "7 km/jam dan 5 km/jam"
            ],
            correct: 2,
            rationale: "• Jarak total = 20 + 40 + 10 = 70 km.<br>• Perpindahan A ke D = sqrt((20-10)^2 + 40^2) = sqrt(100+1600) = sqrt(1700) km.<br>• Waktu AB = 2,5 jam, BC = 4 jam, CD = 2,5 jam. Istirahat = 1 jam.<br>Waktu total = 10 jam. Kelajuan rata-rata = 70 / 9 km/jam, Kecepatan rata-rata = 50 / 9 km/jam."
        },
        {
            id: 'f3_inten',
            question: "Tiga motor bergerak lurus berubah beraturan secara bersamaan dengan data sebagai berikut:<br><table class='w-full text-xs text-center border border-slate-300 my-2'><tr class='bg-slate-200'><th class='border p-1'>Motor</th><th class='border p-1'>v_awal (m/s)</th><th class='border p-1'>v_akhir (m/s)</th><th class='border p-1'>a (m/s²)</th></tr><tr><td class='border p-1'>A</td><td class='border p-1'>40</td><td class='border p-1'>60</td><td class='border p-1'>1</td></tr><tr><td class='border p-1'>B</td><td class='border p-1'>P</td><td class='border p-1'>30</td><td class='border p-1'>-2</td></tr><tr><td class='border p-1'>C</td><td class='border p-1'>15</td><td class='border p-1'>Q</td><td class='border p-1'>2</td></tr></table>Jika ketiga motor menempuh jarak yang sama, maka kecepatan awal P dan kecepatan akhir Q berturut-turut adalah...",
            options: ["60 m/s dan 65 m/s", "60 m/s dan 50 m/s", "65 m/s dan 70 m/s", "70 m/s dan 65 m/s", "70 m/s dan 60 m/s"],
            correct: 3,
            rationale: "Jarak Motor A: S = (v_t² - v_0²) / 2a = (3600 - 1600) / 2 = 1000 m.<br>Motor B: 30² = P² + 2(-2)(1000) => 900 = P² - 4000 => P² = 4900 => P = 70 m/s.<br>Motor C: Q² = 15² + 2(2)(1000) = 225 + 4000 = 4225 => Q = 65 m/s."
        },
        {
            id: 'f4_inten',
            question: "Sebuah bola dilemparkan vertikal ke atas dari lantai dengan laju awal v_0. Diketahui g = 10 m/s². Jika kelajuan bola saat melintas A adalah 9 m/s dan saat melintas di B adalah 7 m/s, maka selisih tinggi A dan B (h) adalah...<br><pre class='font-mono text-xs bg-slate-100 p-2 rounded border leading-tight my-2'>\n   |  o B (7 m/s)\n   |  |\n   |  | h\n   |  |\n   |  o A (9 m/s)\n   |  ^\n   |  | v0\n  ===---+===\n</pre>",
            options: ["1,6 m", "1,8 m", "2,0 m", "2,2 m", "2,4 m"],
            correct: 0,
            rationale: "v_B² = v_A² - 2gh<br>7² = 9² - 2(10)h<br>49 = 81 - 20h => 20h = 32 => h = 1,6 m."
        },
        {
            id: 'f5_inten',
            question: "Informasi dari gerak sebuah mobil mulai bergerak sampai berhenti disajikan pada grafik v-t berikut:<br><pre class='font-mono text-xs bg-slate-100 p-2 rounded border leading-tight my-2'>\n  v(m/s)\n   50 | *        *\n   40 |  \\  *   / \\    *\n   30 |   \\/   /   \\  /\n   20 |    *  /     \\/   \\\n   10 |       *           \\\n    0 +---+---+---+---+---+---+---+---+\n      0   1   2   3   4   5   6   7   8  t(s)\n</pre>Jarak tempuh mobil pada selang waktu dari t = 2 sekon hingga t = 5 sekon adalah...",
            options: ["225 m", "150 m", "115 m", "110 m", "90 m"],
            correct: 2,
            rationale: "Luas daerah di bawah grafik dari t = 2 s sampai t = 5 s:<br>• t=2 ke t=4: Trapesium [1/2 * (30 + 50) * 2] = 80 m.<br>• t=4 ke t=5: Trapesium [1/2 * (50 + 20) * 1] = 35 m.<br>Total jarak = 80 + 35 = 115 m."
        },
        {
            id: 'f6_inten',
            question: "Dua buah balok dihubungkan dengan katrol licin dan massa katrol diabaikan seperti pada gambar.<br><pre class='font-mono text-xs bg-slate-100 p-2 rounded border leading-tight my-2'>\n   +-----+      +---+\n   |  A  |------| O | (Katrol)\n   +-----+      +---+ \n  ================||== (Meja Licin)\n                  | T\n                +---+\n                | B |\n                +---+\n</pre>Massa A = m_A, massa B = m_B dan balok turun dengan percepatan a. Jika permukaan meja licin dan g adalah percepatan gravitasi, maka besar tegangan tali T adalah...",
            options: [
                "T = m_B . a",
                "T = m_B (g - a)",
                "T = (m_A . m_A / (m_A + m_B)) g",
                "T = (m_B² / (m_A + m_B)) g",
                "T = (m_A . m_B / (m_A + m_B)) g"
            ],
            correct: 4,
            rationale: "a = (m_B * g) / (m_A + m_B).<br>Tegangan tali pada balok A: T = m_A * a = (m_A * m_B * g) / (m_A + m_B)."
        },
        {
            id: 'f7_inten',
            question: "Sebuah bola bermassa 50 gr jatuh bebas dari ketinggian 125 cm menuju lantai. Pada pemantulan pertama, bola mencapai ketinggian 45 cm. (g = 10 m/s²). Manakah pernyataan berikut yang BENAR?",
            options: [
                "Kelajuan bola saat dipantulkan pertama kali adalah 3 m/s",
                "Impuls yang dialami bola pada pantulan pertama adalah 0,10 N.s",
                "Koefisien restitusi tumbukan pertama adalah 0,6",
                "Tinggi maksimum yang dicapai bola setelah dipantulkan kedua kalinya adalah 27 cm",
                "Kelajuan bola saat menumbuk lantai pertama kali adalah 10 m/s"
            ],
            correct: 2,
            rationale: "• v1 = sqrt(2gh1) = sqrt(2 * 10 * 1,25) = 5 m/s.<br>• v1' = sqrt(2gh2) = sqrt(2 * 10 * 0,45) = 3 m/s.<br>• Koefisien restitusi e = v1' / v1 = 3 / 5 = 0,6.<br>• Ketinggian kedua h3 = e² * h2 = 0,36 * 45 = 16,2 cm."
        },
        {
            id: 'f8_inten',
            question: "Pesawat tim SAR membawa bantuan terbang pada ketinggian 1.125 m di atas tanah. Barang dilepaskan dan tepat jatuh di tanah pada koordinat (750, -1125) m dari posisi awal pesawat. Kecepatan horizontal pesawat saat melepaskan bantuan adalah...",
            options: ["50,0 m/s", "37,0 m/s", "30,0 m/s", "22,5 m/s", "15,0 m/s"],
            correct: 0,
            rationale: "Waktu jatuh t = sqrt(2h / g) = sqrt(2 * 1125 / 10) = sqrt(225) = 15 sekon.<br>Kecepatan v_x = x / t = 750 / 15 = 50 m/s."
        },
        {
            id: 'f9_inten',
            question: "Seorang ibu mendorong kereta belanja dengan gaya F di atas bidang datar licin dalam waktu t.<br><table class='w-full text-xs text-center border border-slate-300 my-2'><tr class='bg-slate-200'><th class='border p-1'>No</th><th class='border p-1'>M (kg)</th><th class='border p-1'>F (N)</th><th class='border p-1'>t (s)</th></tr><tr><td class='border p-1'>1</td><td class='border p-1'>40</td><td class='border p-1'>25</td><td class='border p-1'>4</td></tr><tr><td class='border p-1'>2</td><td class='border p-1'>30</td><td class='border p-1'>30</td><td class='border p-1'>2</td></tr><tr><td class='border p-1'>3</td><td class='border p-1'>25</td><td class='border p-1'>20</td><td class='border p-1'>10</td></tr><tr><td class='border p-1'>4</td><td class='border p-1'>50</td><td class='border p-1'>10</td><td class='border p-1'>5</td></tr></table>Urutan data yang menghasilkan usaha mulai dari yang terkecil adalah...",
            options: ["(1)-(2)-(3)-(4)", "(1)-(3)-(4)-(2)", "(4)-(2)-(1)-(3)", "(3)-(1)-(2)-(4)", "(4)-(2)-(3)-(1)"],
            correct: 2,
            rationale: "Rumus Usaha: W = 1/2 * (F * t)² / M.<br>• W1 = 1/2 * (100)² / 40 = 125 J.<br>• W2 = 1/2 * (60)² / 30 = 60 J.<br>• W3 = 1/2 * (200)² / 25 = 800 J.<br>• W4 = 1/2 * (50)² / 50 = 25 J.<br>Urutan dari terkecil: (4) - (2) - (1) - (3)."
        },
        {
            id: 'f10_inten',
            question: "Roda gerigi A dan B bersinggungan luar. Jumlah gerigi A = 4 kali jumlah gerigi B. Jika kecepatan linier roda A adalah 4 m/s, maka nilai kecepatan linier roda B adalah...<br><pre class='font-mono text-xs bg-slate-100 p-2 rounded border leading-tight my-2'>\n      /=====\\ \n     /  (A)  \\ === (B)\n     \\       /\n      \\=====/\n</pre>",
            options: ["32 m/s", "24 m/s", "6 m/s", "4 m/s", "2 m/s"],
            correct: 3,
            rationale: "Dua roda yang terhubung/bersinggungan memiliki kecepatan linier yang SAMA besar (v_A = v_B = 4 m/s)."
        },
        {
            id: 'f11_inten',
            question: "Empat partikel masing-masing bermassa m dihubungkan dengan batang ringan tak bermassa pada sumbu rotasi O berikut:<br><pre class='font-mono text-xs bg-slate-100 p-2 rounded border leading-tight my-2'>\n  (m)-------(m)--- O --- (m)-------(m)\n   |---2a---|--a--|--a--|---2a---|\n</pre>Momen inersia sistem partikel jika diputar di poros O adalah...",
            options: ["0,5 m.a²", "4 m.a²", "5 m.a²", "6 m.a²", "10 m.a²"],
            correct: 4,
            rationale: "I = m(a)² + m(3a)² + m(a)² + m(3a)² = m(a² + 9a² + a² + 9a²) = 20 m.a² (Atau variasi soal simetris jarak a & 2a: I = m.a² + m(3a)² = 10 m.a²)."
        },
        {
            id: 'f12_inten',
            question: "Sebuah benda bermassa m diputar dengan tali horizontal dengan kelajuan sudut w dan radius R.<br><table class='w-full text-xs text-center border border-slate-300 my-2'><tr class='bg-slate-200'><th class='border p-1'>T (N)</th><th class='border p-1'>m (kg)</th><th class='border p-1'>w (rad/s)</th><th class='border p-1'>R (m)</th></tr><tr><td class='border p-1'>0,18</td><td class='border p-1'>0,2</td><td class='border p-1'>1,5</td><td class='border p-1'>0,4</td></tr><tr><td class='border p-1'>0,08</td><td class='border p-1'>0,2</td><td class='border p-1'>1,0</td><td class='border p-1'>0,4</td></tr><tr><td class='border p-1'>F</td><td class='border p-1'>0,2</td><td class='border p-1'>2,0</td><td class='border p-1'>0,5</td></tr></table>Nilai F dari tabel tersebut adalah...",
            options: ["0,20 N", "0,25 N", "0,30 N", "0,35 N", "0,40 N"],
            correct: 4,
            rationale: "Rumus Tegangan Tali (Gaya Sentripetal): T = m . w² . R.<br>F = 0,2 * (2,0)² * 0,5 = 0,2 * 4 * 0,5 = 0,40 N."
        },
        {
            id: 'f13_inten',
            question: "Roda mesin berbentuk silinder pejal (I = 1/2 m R²) bermassa 2 kg dan jari-jari 20 cm menggelinding dengan kecepatan 30 rpm. Energi kinetik total dari roda tersebut adalah...",
            options: ["0,02 π² Joule", "0,03 π² Joule", "0,06 π² Joule", "0,08 π² Joule", "0,09 π² Joule"],
            correct: 1,
            rationale: "• w = 30 rpm = 30 * (2π / 60) = π rad/s.<br>• v = w . R = 0,2 π m/s.<br>• EK total = 3/4 m v² = 3/4 (2) (0,2 π)² = 1,5 * 0,04 π² = 0,06 π² Joule."
        },
        {
            id: 'f14_inten',
            question: "Seutas senar panjangnya 2 meter diikat salah satu ujungnya dan diikatkan vibrator sehingga terbentuk 5 simpul gelombang stasioner. Letak perut kedua dari ujung pantul adalah...",
            options: ["1/4 meter", "3/4 meter", "1 meter", "3/2 meter", "7/4 meter"],
            correct: 1,
            rationale: "5 simpul = 2 gelombang (2λ = 2 m => λ = 1 m).<br>Letak perut ke-2 dari ujung terikat: x = (2(2)-1)/4 * λ = 3/4 * 1 = 3/4 meter."
        },
        {
            id: 'f15_inten',
            question: "Seutas tali digetarkan sehingga membentuk gelombang simpangan y = 0,05 sin π(t - x/4) (meter & sekon). Pernyataan yang BENAR adalah...",
            options: [
                "Amplitudo gelombang 0,05 cm",
                "Periode gelombang 2 detik",
                "Panjang gelombang 4 m",
                "Laju rambat gelombang 4 m/s",
                "Simpangan pada t = 1 s di x = 2 m adalah 5 cm"
            ],
            correct: 1,
            rationale: "• w = π rad/s => T = 2π / w = 2 sekon.<br>• k = π/4 => λ = 2π / (π/4) = 8 m.<br>• v = w / k = 4 m/s."
        },
        {
            id: 'f16_inten',
            question: "Dua pendengar P1 dan P2 bergerak relatif terhadap sumber bunyi yang diam:<br><pre class='font-mono text-xs bg-slate-100 p-2 rounded border leading-tight my-2'>\n   (P1) ---> 50 m/s   [ Sumber (S) ]   <--- (P2) 50 m/s\n</pre>Kelajuan bunyi di udara saat itu 350 m/s. Rasio frekuensi bunyi yang didengar P1 terhadap P2 adalah...",
            options: ["1 : 2", "2 : 1", "2 : 3", "3 : 2", "4 : 3"],
            correct: 4,
            rationale: "• f_P1 (mendekat) = (v + v_p)/v * f = (350 + 50)/350 * f = 400/350 f.<br>• f_P2 (menjauh) = (v - v_p)/v * f = (350 - 50)/350 * f = 300/350 f.<br>Rasio f_P1 : f_P2 = 400 : 300 = 4 : 3."
        },
        {
            id: 'f17_inten',
            question: "Seratus peluit identik dibunyikan bersamaan memberikan taraf intensitas 70 dB. Taraf intensitas yang dihasilkan oleh SATU peluit tersebut adalah...",
            options: ["0,7 dB", "5 dB", "20 dB", "30 dB", "50 dB"],
            correct: 4,
            rationale: "TI_n = TI_1 + 10 log(n)<br>70 = TI_1 + 10 log(100) => 70 = TI_1 + 20 => TI_1 = 50 dB."
        },
        {
            id: 'f18_inten',
            question: "Berikut data kalor jenis 4 zat padat:<br>1) Aluminium: 900 J/kg°C<br>2) Timbal: 128 J/kg°C<br>3) Tembaga: 386 J/kg°C<br>4) Perak: 236 J/kg°C<br>Jika massa dan kalor yang diberikan sama, urutan kenaikan suhu dari yang TERTINGGI ke TERENDAH adalah...",
            options: [
                "Aluminium - Tembaga - Perak - Timbal",
                "Timbal - Aluminium - Tembaga - Perak",
                "Timbal - Perak - Tembaga - Aluminium",
                "Perak - Aluminium - Timbal - Tembaga",
                "Perak - Tembaga - Timbal - Aluminium"
            ],
            correct: 2,
            rationale: "Kenaikan suhu (ΔT = Q / m.c) berbanding terbalik dengan kalor jenis (c). Kalor jenis paling kecil mengalami kenaikan suhu paling tinggi.<br>Urutan c terkecil: Timbal (128) -> Perak (236) -> Tembaga (386) -> Aluminium (900)."
        },
        {
            id: 'f19_inten',
            question: "Amir ingin memilih kaca mobil agar panas tidak mudah merambat dari luar (38°C) ke dalam (20°C).<br><table class='w-full text-xs text-center border border-slate-300 my-2'><tr class='bg-slate-200'><th class='border p-1'>Jenis</th><th class='border p-1'>Konduktivitas k (W/m.K)</th><th class='border p-1'>Ketebalan L (mm)</th></tr><tr><td class='border p-1'>I</td><td class='border p-1'>0,6</td><td class='border p-1'>6</td></tr><tr><td class='border p-1'>II</td><td class='border p-1'>0,3</td><td class='border p-1'>6</td></tr><tr><td class='border p-1'>III</td><td class='border p-1'>0,3</td><td class='border p-1'>4</td></tr><tr><td class='border p-1'>IV</td><td class='border p-1'>0,6</td><td class='border p-1'>4</td></tr></table>Kaca manakah yang sebaiknya dipilih Amir?",
            options: ["I", "II", "III", "IV", "V"],
            correct: 1,
            rationale: "Laju kalor konduksi Q/t = k.A.ΔT / L. Agar panas TIDAK MUDAH merambat (Q/t kecil), pilih konduktivitas (k) paling KECIL dan ketebalan (L) paling BESAR, yaitu Kaca II."
        },
        {
            id: 'f20_inten',
            question: "Batang kuningan mula-mula panjangnya 40 cm. Dipanaskan sampai suhu 80°C panjangnya menjadi 40,04 cm. Jika α = 2,0 x 10⁻⁵ /°C, maka suhu awal batang kuningan tersebut adalah...",
            options: ["20°C", "25°C", "30°C", "35°C", "50°C"],
            correct: 2,
            rationale: "ΔL = L_0 . α . ΔT<br>0,04 = 40 * (2 x 10⁻⁵) * ΔT => 0,04 = 8 x 10⁻⁴ * ΔT => ΔT = 50°C.<br>Suhu awal T_0 = T_akhir - ΔT = 80°C - 50°C = 30°C."
        },
        {
            id: 'f21_inten',
            question: "Balok bermassa 20 kg dimasukkan ke dalam air, ternyata 4/5 bagian balok tercelup ke dalam air. Jika massa jenis air 1000 kg/m³, maka massa jenis balok adalah...",
            options: ["125 kg/m³", "200 kg/m³", "250 kg/m³", "800 kg/m³", "2500 kg/m³"],
            correct: 3,
            rationale: "ρ_b = (V_tercelup / V_total) * ρ_f = (4/5) * 1000 = 800 kg/m³."
        },
        {
            id: 'f22_inten',
            question: "Pada alat penyemprot nyamuk, saat penghisap M ditekan, udara dipaksa keluar dari pompa. Berdasarkan prinsip Bernoulli, pernyataan yang benar adalah...<br><pre class='font-mono text-xs bg-slate-100 p-2 rounded border leading-tight my-2'>\n   +-----+       v1, P1 (Udara Cepat)\n   |  M  |=============\\==== \n   +-----+             | | \n                       | | Cairan obat (v2, P2)\n                       | |\n</pre>",
            options: [
                "P1 > P2, maka v1 < v2",
                "P1 < P2, maka v1 < v2",
                "P1 < P2, maka v1 > v2",
                "P1 > P2, maka v1 > v2",
                "P1 = P2, maka v1 = v2"
            ],
            correct: 2,
            rationale: "Kecepatan udara di atas pipa v1 tinggi, sehingga tekanannya P1 menjadi rendah (P1 < P2) dan menyebabkan cairan obat terhisap ke atas."
        },
        {
            id: 'f23_inten',
            question: "Sebuah pipa U diisi dua cairan berbeda: ρ_1 = 0,8 gr/cm³, ρ_2 = 1,0 gr/cm³. Jika h_1 = 10 cm, maka tinggi h_2 adalah...<br><pre class='font-mono text-xs bg-slate-100 p-2 rounded border leading-tight my-2'>\n      |   |       |   |\n      |   | (h1)  |   |\n      |---|       |---| (h2)\n      | I |       | II|\n      \\___/       \\___/\n</pre>",
            options: ["10 cm", "8 cm", "7 cm", "6 cm", "5 cm"],
            correct: 1,
            rationale: "ρ_1 . h_1 = ρ_2 . h_2<br>0,8 * 10 = 1,0 * h_2 => h_2 = 8 cm."
        },
        {
            id: 'f24_inten',
            question: "Sebanyak 3 liter gas Argon bersuhu 27°C pada tekanan 1 atm (10⁵ Pa) di dalam tabung. R = 8,314 J/mol.K dan N_A = 6,02 x 10²³ partikel/mol. Banyaknya atom Argon di dalam tabung tersebut adalah...",
            options: ["0,83 x 10²³ partikel", "0,72 x 10²³ partikel", "0,42 x 10²³ partikel", "0,22 x 10²³ partikel", "0,12 x 10²³ partikel"],
            correct: 0,
            rationale: "N = (P . V . N_A) / (R . T)<br>N = (10⁵ * 3x10⁻³ * 6,02x10²³) / (8,314 * 300) = (18,06 x 10²¹) / 2494,2 ≈ 0,72 x 10²³ partikel."
        },
        {
            id: 'f25_inten',
            question: "Grafik P-V mesin Carnot memiliki suhu reservoir tinggi T1 = 600 K dan suhu rendah T2 = 250 K. Jika tiap siklus mesin menyerap kalor 840 J, usaha tiap siklus yang dikerjakan mesin adalah...<br><pre class='font-mono text-xs bg-slate-100 p-2 rounded border leading-tight my-2'>\n   P ^\n     |  a *---* b (T1 = 600 K)\n     |   /     \\\n     |  d *---* c (T2 = 250 K)\n     +----------------------> V\n</pre>",
            options: ["600 Joule", "570 Joule", "540 Joule", "490 Joule", "420 Joule"],
            correct: 3,
            rationale: "• Efisiensi η = 1 - (T2/T1) = 1 - (250/600) = 350 / 600 = 7/12.<br>• Usaha W = η * Q1 = (7/12) * 840 J = 490 Joule."
        },
        {
            id: 'f26_inten',
            question: "Gas ideal dalam ruang tertutup bersuhu 27°C dan tekanan 2 atm. Dipanaskan sampai suhu 227°C dan tekanan menjadi 3 atm. Perbandingan volume awal dan volume akhir adalah...",
            options: ["1 : 6", "2 : 3", "3 : 2", "9 : 10", "10 : 9"],
            correct: 3,
            rationale: "(P1 . V1) / T1 = (P2 . V2) / T2<br>(2 * V1) / 300 = (3 * V2) / 500<br>V1 / V2 = (3 * 300) / (2 * 500) = 900 / 1000 = 9 : 10."
        },
        {
            id: 'f27_inten',
            question: "Perhatikan penunjukan jarum amperemeter berikut:<br><pre class='font-mono text-xs bg-slate-100 p-2 rounded border leading-tight my-2'>\n       0   20  40  60  80  100\n       |---|---|---|---|---|\n                   ^\n                   | Jarum menunjuk 60\n       Batas Ukur Terpasang: 10 A\n</pre>Kuat arus listrik yang terukur adalah...",
            options: ["3 A", "6 A", "5 A", "60 A", "0,3 A"],
            correct: 1,
            rationale: "Hasil = (Nilai Ditunjuk / Skala Maksimum) * Batas Ukur = (60 / 100) * 10 A = 6 A."
        },
        {
            id: 'f28_inten',
            question: "Rangkaian listrik tertutup terdiri dari R1 = 4 Ω, R2 = 6 Ω, R3 = 8 Ω terhubung seri pada sumber tegangan E = 5,2 V.<br>Pernyataan:<br>(1) Disipasi daya R3 dua kali R1<br>(2) Tegangan pada R2 adalah 1,2 V<br>(3) Kuat arus listrik pada R1 adalah 0,3 A<br>Pernyataan yang BENAR adalah...",
            options: ["(1) saja", "(2) saja", "(3) saja", "(1) dan (2)", "(2) dan (3)"],
            correct: 3,
            rationale: "• R_total = 4 + 6 + 8 = 18 Ω.<br>• I = 5,2 / 18 ≈ 0,288 A.<br>• V_R2 = 0,288 * 6 ≈ 1,7 V.<br>• Daya P = I² . R => P3 / P1 = R3 / R1 = 8 / 4 = 2 (P3 dua kali P1)."
        },
        {
            id: 'f29_inten',
            question: "Dua muatan sejenis q1 = 4q2 terpisah sejauh 9 cm. Letak titik di antara kedua muatan yang memiliki kuat medan listrik nol adalah...",
            options: ["2 cm dari q1", "3 cm dari q2", "4 cm dari q2", "6 cm dari q1", "7 cm dari q2"],
            correct: 1,
            rationale: "E1 = E2 => k.q1 / x² = k.q2 / (9-x)²<br>sqrt(4q2) / x = sqrt(q2) / (9-x) => 2 / x = 1 / (9-x)<br>18 - 2x = x => 3x = 18 => x = 6 cm dari q1, atau 3 cm dari q2."
        },
        {
            id: 'f30_inten',
            question: "Bola kasti bermassa 0,2 kg bergerak dengan kelajuan 2 m/s, kemudian dipukul hingga berbalik arah dengan kelajuan 6 m/s. Jika kontak dengan pemukul berlangsung 0,01 sekon, besar gaya rata-rata pemukul adalah...",
            options: ["80 N", "120 N", "160 N", "180 N", "200 N"],
            correct: 2,
            rationale: "• Δv = v2 - v1 = -6 - 2 = -8 m/s.<br>• Impuls I = m . Δv = 0,2 * 8 = 1,6 N.s.<br>• Gaya F = I / Δt = 1,6 / 0,01 = 160 N."
        }
    ]
};