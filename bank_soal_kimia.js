const dataKimia = {
    subjectId: 'kimia_tka',
    subjectName: 'Kimia TKA (Lengkap 25 Soal)',
    category: 'Kimia',
    categoryId: 'kimia',
    categoryName: 'Kimia',
    icon: '🧪',
    questions: [
        // ==================== PAKET 1 ====================
        {
            id: 'k1_p1',
            question: "Suatu unsur $X$ memiliki konfigurasi elektron $1s^2 2s^2 2p^6 3s^2 3p^4$. Pernyataan yang benar mengenai unsur tersebut adalah...",
            options: [
                "Merupakan logam alkali tanah",
                "Terletak pada Golongan VIA, Periode 3",
                "Cenderung membentuk ion $X^{2+}$",
                "Memiliki elektron valensi 4",
                "Sangat mudah bereaksi dengan unsur gas mulia"
            ],
            correct: 1,
            rationale: "Konfigurasi elektron berakhir pada $3s^2 3p^4$. Jumlah elektron valensi = $2 + 4 = 6$ (Golongan VIA) dan kulit terbesar $n = 3$ (Periode 3)."
        },
        {
            id: 'k2_p1',
            question: "Di antara senyawa berikut, manakah yang memiliki ikatan kovalen polar paling tinggi?",
            options: ["HF", "HCl", "HBr", "HI", "CH4"],
            correct: 0,
            rationale: "Kepolaran ikatan kovalen ditentukan oleh perbedaan keelektronegatifan. Fluorin (F) merupakan unsur paling elektronegatif, sehingga $HF$ memiliki perbedaan keelektronegatifan terbesar dan paling polar."
        },
        {
            id: 'k3_p1',
            question: "Massa molekul relatif ($M_r$) dari senyawa $Ca(OH)_2$ adalah... ($A_r\\text{ Ca} = 40, \\text{O} = 16, \\text{H} = 1$)",
            options: ["57", "74", "58", "98", "110"],
            correct: 1,
            rationale: "$M_r Ca(OH)_2 = A_r\\text{ Ca} + 2(A_r\\text{ O}) + 2(A_r\\text{ H}) = 40 + 2(16) + 2(1) = 40 + 32 + 2 = 74$."
        },
        {
            id: 'k4_p1',
            question: "Sebanyak 0,1 mol gas $CH_4$ dibakar sempurna menurut reaksi:<br>$CH_4(g) + 2O_2(g) \\rightarrow CO_2(g) + 2H_2O(g)$<br>Volume gas $CO_2$ yang dihasilkan pada kondisi STP adalah...",
            options: ["1,12 liter", "2,24 liter", "4,48 liter", "22,4 liter", "0,224 liter"],
            correct: 1,
            rationale: "Mol $CO_2$ = mol $CH_4 = 0,1\\text{ mol}$. Pada STP ($1\\text{ mol} = 22,4\\text{ L}$), volume $CO_2 = 0,1 \\times 22,4 = 2,24\\text{ liter}$."
        },
        {
            id: 'k5_p1',
            question: "Larutan $HCl$ $0,01\\text{ M}$ memiliki nilai pH sebesar...",
            options: ["1", "2", "3", "4", "12"],
            correct: 1,
            rationale: "$HCl$ adalah asam kuat, $[H^+] = M = 0,01 = 10^{-2}\\text{ M}$.<br>$\\text{pH} = -\\log[H^+] = -\\log(10^{-2}) = 2$."
        },
        {
            id: 'k6_p1',
            question: "Pasangan larutan penyangga (buffer) yang dapat mempertahankan pH darah manusia tetap stabil adalah...",
            options: [
                "H2CO3 dan HCO3-",
                "CH3COOH dan CH3COO-",
                "H3PO4 dan H2PO4-",
                "NH3 dan NH4+",
                "HCl dan NaCl"
            ],
            correct: 0,
            rationale: "Sistem penyangga utama dalam cairan luar sel (darah) manusia adalah $H_2CO_3 / HCO_3^-$ (Asam karbonat / Bikarbonat)."
        },
        {
            id: 'k7_p1',
            question: "Pada reaksi redoks:<br>$MnO_4^- + 8H^+ + 5e^- \\rightarrow Mn^{2+} + 4H_2O$<br>Zat yang bertindak sebagai oksidator adalah...",
            options: ["MnO4-", "H+", "Mn2+", "H2O", "e-"],
            correct: 0,
            rationale: "Oksidator adalah zat yang mengalami reduksi (penurunan bilangan oksidasi dan menangkap elektron). $MnO_4^-$ menangkap elektron sehingga mengoksidasi zat lain."
        },
        {
            id: 'k8_p1',
            question: "Nama IUPAC yang tepat untuk senyawa turunan alkana $CH_3-CH(CH_3)-CH_2-COOH$ adalah...",
            options: [
                "Asam 2-metilbutanoat",
                "Asam 3-metilbutanoat",
                "Asam isopentanoat",
                "Asam pentanoat",
                "Asam 3-metilpropanat"
            ],
            correct: 1,
            rationale: "Rantai utama asam karboksilat terdiri dari 4 karbon (butanoat) dengan gugus $-COOH$ di C-1. Cabang metil berada pada C-3, sehingga namanya asam 3-metilbutanoat."
        },

        // ==================== PAKET 2 ====================
        {
            id: 'k1_p2',
            question: "Diketahui nomor atom $Fe = 26$. Konfigurasi elektron untuk ion $Fe^{3+}$ adalah...",
            options: [
                "[Ar] 4s2 3d3",
                "[Ar] 4s1 3d4",
                "[Ar] 3d5",
                "[Ar] 4s2 3d6",
                "[Ar] 3d6"
            ],
            correct: 2,
            rationale: "Konfigurasi netral $Fe (26)$: $[Ar] 4s^2 3d^6$. Untuk membentuk ion $Fe^{3+}$, 3 elektron dilepas (2 elektron dari kulit outer $4s$ dan 1 elektron dari $3d$), menjadi $[Ar] 3d^5$."
        },
        {
            id: 'k2_p2',
            question: "Manakah di antara molekul berikut yang memiliki bentuk geometri trigonal planar (segitiga sama sisi)?",
            options: ["NH3", "BF3", "H2O", "CH4", "PCl5"],
            correct: 1,
            rationale: "$BF_3$ memiliki 3 pasangan elektron ikatan (PEI) dan 0 pasangan elektron bebas (PEB) pada atom pusat, sehingga bentuk molekulnya adalah trigonal planar."
        },
        {
            id: 'k3_p2',
            question: "Reaksi penetralan $25\\text{ mL } NaOH\\text{ 0,1 M}$ tepat bereaksi dengan $25\\text{ mL}$ larutan $H_2SO_4$. Konsentrasi larutan $H_2SO_4$ tersebut adalah...",
            options: ["0,05 M", "0,10 M", "0,20 M", "0,25 M", "0,50 M"],
            correct: 0,
            rationale: "$V_1 \\cdot M_1 \\cdot n_1 = V_2 \\cdot M_2 \\cdot n_2 \\implies 25 \\cdot 0,1 \\cdot 1 = 25 \\cdot M_2 \\cdot 2 \\implies M_2 = \\frac{0,1}{2} = 0,05\\text{ M}$."
        },
        {
            id: 'k4_p2',
            question: "Perubahan entalpi pembentukan standar ($\\Delta H_f^\\circ$) didefinisikan untuk pembentukan 1 mol senyawa dari...",
            options: [
                "Unsur-unsurnya dalam bentuk paling stabil pada kondisi standar",
                "Atom-atom netralnya di fase gas",
                "Ion-ionnya pada larutan aqueous",
                "Senyawa-senyawa penyusunnya",
                "Proton dan elektron"
            ],
            correct: 0,
            rationale: "$\\Delta H_f^\\circ$ adalah perubahan entalpi pada pembentukan 1 mol senyawa dari unsur-unsurnya dalam bentuk paling stabil pada kondisi standar ($25^\\circ\\text{C}, 1\\text{ atm}$)."
        },
        {
            id: 'k5_p2',
            question: "Laju reaksi $A + B \\rightarrow C$ mempunyai persamaan $v = k[A]^2 [B]$. Jika konsentrasi $A$ dinaikkan 2 kali dan konsentrasi $B$ dinaikkan 3 kali, laju reaksi akan menjadi...",
            options: ["6 kali", "12 kali", "18 kali", "24 kali", "36 kali"],
            correct: 1,
            rationale: "$v' = k (2[A])^2 (3[B]) = k \\cdot 4[A]^2 \\cdot 3[B] = 12 \\cdot k[A]^2[B] = 12v$."
        },
        {
            id: 'k6_p2',
            question: "Di antara garam-garam berikut, manakah yang mengalami hidrolisis total dalam air?",
            options: ["NaCl", "CH3COONa", "NH4Cl", "CH3COONH4", "K2SO4"],
            correct: 3,
            rationale: "$CH_3COONH_4$ berasal dari asam lemah ($CH_3COOH$) dan basa lemah ($NH_4OH$), sehingga kedua kation dan anionnya mengalami hidrolisis (hidrolisis total)."
        },
        {
            id: 'k7_p2',
            question: "Pengendapan zat kotoran pada proses penjernihan air menggunakan tawas merupakan penerapan dari sifat koloid...",
            options: ["Efek Tyndall", "Gerak Brown", "Adsorpsi dan Koagulasi", "Dialisis", "Elektroforesis"],
            correct: 2,
            rationale: "Tawas ($Al^{3+}$) mengadsorpsi kotoran bermuatan pada koloid air kotor lalu menetralkan muatannya hingga terjadi penggumpalan/pengendapan (koagulasi)."
        },
        {
            id: 'k8_p2',
            question: "Senyawa organik dengan rumus molekul $C_3H_6O$ dapat berupa alkohol/eter, aldehida/keton, atau asam/ester. Di bawah ini yang merupakan pasangan isomer fungsi dari $C_3H_6O$ adalah...",
            options: [
                "Propanal dan Propanon",
                "1-Propanol dan 2-Propanol",
                "Asam Propanat dan Metil Etanoat",
                "Propena dan Propuna",
                "Metoksi Etana dan Propanol"
            ],
            correct: 0,
            rationale: "Rumus $C_n H_{2n} O$ ($C_3H_6O$) merupakan rumus umum pasangan isomer fungsi untuk Alkanal (Propanal) dan Alkanon (Propanon/Aseton)."
        },
        {
            id: 'k9_p2',
            question: "Unsur $X$ dengan nomor atom 17 bereaksi dengan unsur $Y$ dengan nomor atom 12. Rumus kimia dan jenis ikatan dari senyawa yang terbentuk adalah...",
            options: [
                "YX2, ikatan ionik",
                "Y2X, ikatan ionik",
                "YX2, ikatan kovalen",
                "YX, ikatan ionik",
                "Y2X3, ikatan kovalen"
            ],
            correct: 0,
            rationale: "Unsur $Y (12): 2, 8, 2 \\implies Y^{2+}$ (logam). Unsur $X (17): 2, 8, 7 \\implies X^-$ (non-logam). Senyawa ionik yang terbentuk adalah $YX_2$."
        },
        {
            id: 'k10_p2',
            question: "Sebanyak $100\\text{ mL}$ larutan $CH_3COOH\\text{ 0,1 M}$ ($K_a = 10^{-5}$) dicampur dengan $50\\text{ mL}$ larutan $NaOH\\text{ 0,1 M}$. pH larutan campuran yang terbentuk adalah...",
            options: ["5", "6", "4", "9", "8"],
            correct: 0,
            rationale: "Mol $CH_3COOH = 10\\text{ mmol}$, Mol $NaOH = 5\\text{ mmol}$. Sisa $CH_3COOH = 5\\text{ mmol}$, terbentuk $CH_3COONa = 5\\text{ mmol}$. $[H^+] = K_a \\times \\frac{\\text{sisa asam}}{\\text{garam}} = 10^{-5} \\times \\frac{5}{5} = 10^{-5} \\implies \\text{pH} = 5$."
        },

        // ==================== SOAL DENGAN ILUSTRASI ASCII ====================
        {
            id: 'k11_p2',
            question: "Perhatikan struktur molekul Asam Askorbat (Vitamin C) berikut:<br><pre>\n      OH\n      |\n HO--CH2--CH---O\n          |    |\\ \n          |    | =O\n          HO--C=C--OH\n</pre><br>Berapakah persentase massa oksigen dalam molekul Asam Askorbat ($C_6H_8O_6$)? ($A_r\\text{ C}=12, \\text{H}=1, \\text{O}=16$)",
            options: ["9,1%", "20,0%", "40,9%", "54,5%", "68,2%"],
            correct: 3,
            rationale: "$\text{Rumus molekul Vitamin C} = C_6H_8O_6$. $M_r = (6 \\times 12) + (8 \\times 1) + (6 \\times 16) = 72 + 8 + 96 = 176$. $\%O = \\frac{96}{176} \\times 100\\% \\approx 54{,}5\\%$."
        },
        {
            id: 'k12_p2',
            question: "Perhatikan grafik hubungan titik didih terhadat bobot molekul dari fraksi minyak bumi berikut:<br><pre>\n Titik Didih (°C)\n ^\n |                   * Z (Pelumas/Aspal)\n |             * Y (Solar)\n |       * X (Bensin)\n | * Q (LPG)\n +--------------------------> Bobot Molekul\n</pre><br>Berdasarkan grafik di atas, senyawa yang dimanfaatkan sebagai bahan bakar LPG dan Bensin berturut-turut adalah...",
            options: [
                "Q dan X",
                "X dan Y",
                "Y dan Z",
                "Q dan Z",
                "X dan Z"
            ],
            correct: 0,
            rationale: "Q memiliki titik didih paling rendah dan bobot molekul terkecil (gas LPG, $C_1-C_4$). X memiliki titik didih menengah (bensin, $C_5-C_12$)."
        },
        {
            id: 'k13_p2',
            question: "Perhatikan dua isomer struktur dari pentena ($C_5H_{10}$) berikut:<br><pre>\n(1) CH2 = CH - CH2 - CH2 - CH3  (1-pentena)\n(2) CH3 - CH = CH - CH2 - CH3   (2-pentena)\n</pre><br>Pernyataan yang benar mengenai kedua isomer tersebut adalah...",
            options: [
                "Senyawa (1) dapat membentuk isomer geometri cis-trans",
                "Senyawa (2) dapat membentuk isomer geometri cis-trans",
                "Keduanya memiliki titik didih yang persis sama",
                "Senyawa (1) lebih stabil daripada senyawa (2)",
                "Senyawa (2) merupakan alkana jenuh"
            ],
            correct: 1,
            rationale: "2-pentena memiliki atom C ikatan rangkap yang masing-masing mengikat dua gugus berbeda ($H$ dan $CH_3$, serta $H$ dan $C_2H_5$), sehingga dapat membentuk isomer cis-trans."
        },
        {
            id: 'k14_p2',
            question: "Perhatikan bagan indikator universal dan perubahan warna pada sampel air limbah berikut:<br><pre>\nTrayek pH Indikator PP:\n[ pH < 8,0 : Tidak Berwarna ] ---> [ pH 8,0 - 10,0 : Merah Muda ]\n\nSampel A : HI (Asam Kuat)\nSampel B : Sr(OH)2 (Basa Kuat)\n</pre><br>Warna yang dihasilkan saat sampel A dan sampel B ditetesi indikator PP berturut-turut adalah...",
            options: [
                "Tidak berwarna dan Merah muda",
                "Merah muda dan Tidak berwarna",
                "Merah muda dan Merah muda",
                "Tidak berwarna dan Tidak berwarna",
                "Kuning dan Biru"
            ],
            correct: 0,
            rationale: "HI bersifat asam ($\text{pH} < 7$), sehingga larutan PP tidak berwarna. $Sr(OH)_2$ bersifat basa ($\text{pH} > 8$), sehingga larutan PP berwarna merah muda."
        },
        {
            id: 'k15_p2',
            question: "Perhatikan diagram fase P-T (Tekanan - Suhu) untuk pelarut murni dan larutan berikut:<br><pre>\n Tekanan (P)\n     ^          / Cair\n     |    A    /   B (Pelarut Murni)\n  1  |------ -/---/------- \n atm |       /   /  C (Larutan)\n     |  Padat   / \n     +-------------------------> Suhu (T)\n</pre><br>Pergeseran garis didih dari B ke C menunjukkan sifat koligatif larutan yaitu...",
            options: [
                "Kenaikan titik didih (ΔTb)",
                "Penurunan titik beku (ΔTf)",
                "Penurunan tekanan uap (ΔP)",
                "Tekanan osmotik (π)",
                "Kenaikan titik beku (ΔTf)"
            ],
            correct: 0,
            rationale: "Garis B menggambarkan pelarut murni dan garis C menggambarkan larutan. Pergeseran ke kanan pada garis didih menandakan terjadinya kenaikan titik didih ($\\Delta T_b$)."
        },
        {
            id: 'k16_p2',
            question: "Perhatikan pengukuran tekanan uap pada tiga wadah tertutup berikut:<br><pre>\n+---------------+  +---------------+  +---------------+\n|  C2H5OH (aq)  |  |  H2C2O4 (aq)  |  |  CaC2O4 (aq)  |\n| (Sangat Volatil)| | (Non-Volatil) |  | (Sangat Sukar |\n|               |  |               |  |     Larut)    |\n+---------------+  +---------------+  +---------------+\n    Wadah A            Wadah B            Wadah C\n</pre><br>Pernyataan yang tepat mengenai tekanan uap ketiga campuran tersebut adalah...",
            options: [
                "Wadah A memiliki tekanan uap campuran paling tinggi karena etanol bersifat volatil",
                "Wadah B memiliki tekanan uap paling tinggi karena mengion sempurna",
                "Wadah C memiliki tekanan uap paling tinggi karena membentuk endapan",
                "Ketiga wadah memiliki tekanan uap yang identik",
                "Wadah A memiliki tekanan uap paling rendah karena membentuk ikatan kovalen"
            ],
            correct: 0,
            rationale: "Etanol ($C_2H_5OH$) merupakan zat cair yang mudah menguap (volatil), sehingga kontribusinya terhadap tekanan uap total campuran paling besar dibanding zat non-volatil/sukar larut."
        },
        {
            id: 'k17_p2',
            question: "Perhatikan grafik perubahan konsentrasi reaktan dan produk terhadap waktu reaksi berikut:<br><pre>\n Konsentrasi (M)\n    ^ \n    |  \n  C |------------\\_______  Reaktan: S(s), H2O(g)\n    |             \\_______\n    |                     /______ Produk: SO2(g), H2(g)\n  0 +-------------------/--------> Waktu (s)\n</pre><br>Berdasarkan grafik di atas, seiring bertambahnya waktu reaksi, konsentrasi zat yang mengalami peningkatan adalah...",
            options: [
                "Produk reaksi (SO2 dan H2)",
                "Reaktan reaksi (S dan H2O)",
                "Katalisator sistem",
                "Pelarut air saja",
                "Zat pembatas"
            ],
            correct: 0,
            rationale: "Dalam grafik laju reaksi, kurva yang bergerak naik dari 0 seiring waktu mewakili konsentrasi produk reaksi ($SO_2$ dan $H_2$)."
        },
        {
            id: 'k18_p2',
            question: "Perhatikan grafik kesetimbangan reaksi eksoterm $4NH_3(g) + 5O_2(g) \\rightleftharpoons 4NO(g) + 6H_2O(g)$ pada dua suhu berbeda:<br><pre>\n [NH3] (M)\n   ^\n   |      /------------ T = 500°C (Konsentrasi sisa NH3 lebih tinggi)\n   |     /------------  T = 300°C (Konsentrasi sisa NH3 lebih rendah)\n 0 +-------------------> Waktu\n</pre><br>Agar pembentukan gas $NO$ dapat optimal, tindakan yang harus dilakukan adalah...",
            options: [
                "Menurunkan suhu reaksi (T < 500°C)",
                "Menaikkan suhu reaksi (T > 500°C)",
                "Mengurangi konsentrasi O2",
                "Memperbesar volume wadah",
                "Menambahkan zat NO dari luar"
            ],
            correct: 0,
            rationale: "Reaksi bersifat eksoterm ($\\Delta H < 0$). Menurunkan suhu akan menggeser kesetimbangan ke arah kanan (produk $NO$), sehingga sisa $NH_3$ berkurang dan produk optimal."
        },
        {
            id: 'k19_p2',
            question: "Perhatikan sel Volta sederhana berikut:<br><pre>\n       [ Voltmeter ]\n       /           \\\n  Zn (Anoda)     Cu (Katoda)\n  (-) |             | (+)\n  +-------+     +-------+\n  | ZnSO4 |=====| CuSO4 |\n  +-------+  J  +-------+\n            Jembatan Garam\n</pre><br>Reaksi sel: $Zn(s) + Cu^{2+}(aq) \\rightarrow Zn^{2+}(aq) + Cu(s)$. Zat yang bertindak sebagai reduktor adalah...",
            options: ["Zn(s)", "Cu2+(aq)", "Zn2+(aq)", "Cu(s)", "SO4 2-(aq)"],
            correct: 0,
            rationale: "Reduktor adalah spesi yang mengalami oksidasi (melepas elektron). Logam $Zn$ mengalami oksidasi menjadi $Zn^{2+}$, sehingga bertindak sebagai reduktor."
        },
        {
            id: 'k20_p2',
            question: "Perhatikan skema sel elektrolisis larutan $CuSO_4$ dengan elektroda Karbon (C) berikut:<br><pre>\n         ( - ) [Baterai] ( + )\n                 |       |\n        Katoda  |       | Anoda\n          (C)   |       |  (C)\n              +-----------+\n              |  CuSO4    |\n              |  (aq)     |\n              +-----------+\n</pre><br>Spesi yang mengalami reduksi di Katoda dan reaksi yang terjadi di Anoda berturut-turut adalah...",
            options: [
                "Ion Cu2+ tereduksi di Katoda; Air (H2O) teroksidasi di Anoda menghasilkan O2",
                "Ion H+ tereduksi di Katoda; Ion SO4 2- teroksidasi di Anoda",
                "Logam Cu teroksidasi di Katoda; Gas H2 terbentuk di Anoda",
                "Air (H2O) tereduksi di Katoda; Elektroda Karbon larut di Anoda",
                "Ion SO4 2- tereduksi di Katoda; Ion Cu2+ teroksidasi di Anoda"
            ],
            correct: 0,
            rationale: "Di katoda, $Cu^{2+}$ memiliki $E^\circ$ lebih positif dari $H_2O$ sehingga $Cu^{2+}$ tereduksi menjadi endapan $Cu$. Di anoda, $SO_4^{2-}$ adalah anion sisa asam oksil, sehingga $H_2O$ teroksidasi menghasilkan $O_2$."
        },
        {
            id: 'k21_p2',
            question: "Perhatikan sel galvani berikut dengan nilai potensial reduksi standar:<br><pre>\n  Anoda (Oksidasi)   : Mg  --> Mg2+ + 2e-   (E° = -2,37 V)\n  Katoda (Reduksi)   : Ag+ + e-  --> Ag     (E° = +0,80 V)\n</pre><br>Besar potensial sel standar ($E^\circ_{\\text{sel}}$) yang dihasilkan adalah...",
            options: ["+3,17 V", "+1,57 V", "-1,57 V", "-3,17 V", "+0,77 V"],
            correct: 0,
            rationale: "$E^\circ_{\\text{sel}} = E^\circ_{\\text{katoda}} - E^\circ_{\\text{anoda}} = (+0{,}80\\text{ V}) - (-2{,}37\\text{ V}) = +3{,}17\\text{ V}$."
        },
        {
            id: 'k22_p2',
            question: "Perhatikan diagram penurunan tekanan uap larutan berikut:<br><pre>\nTekanan Uap\n  ^\n P°|======== Pelarut Murni (Air)\n   |        \\ \n P |---------\\======== Larutan (Glukosa)\n   |          \\ \n  0+---------------------> Suhu (T)\n</pre><br>Selisih $\\Delta P = P^\circ - P$ menyatakan...",
            options: [
                "Penurunan tekanan uap jenuh larutan",
                "Kenaikan tekanan uap jenuh pelarut",
                "Tekanan osmotik larutan",
                "Titik didih larutan",
                "Titik beku pelarut"
            ],
            correct: 0,
            rationale: "Selisih antara tekanan uap pelarut murni ($P^\circ$) dan tekanan uap larutan ($P$) adalah definisi dari penurunan tekanan uap larutan ($\\Delta P$)."
        },
        {
            id: 'k23_p2',
            question: "Perhatikan susunan alat percobaan uji daya listrik larutan berikut:<br><pre>\n   [ Baterai ] ---- (Lampu Nyala Terang)\n     |     |\n     |     |\n  +-----------+\n  | [|]   [|] |\n  |  |     |  | ---> Gelembung Gas Banyak\n  | Larutan X |\n  +-----------+\n</pre><br>Larutan X yang memberikan gejala seperti pada gambar di atas adalah...",
            options: [
                "Larutan H2SO4 1M",
                "Larutan CH3COOH 0,1M",
                "Larutan Sugar/Glukosa 1M",
                "Larutan Urea 0,5M",
                "Alkohol 70%"
            ],
            correct: 0,
            rationale: "Lampu menyala terang dan terdapat banyak gelembung gas menandakan larutan elektrolit kuat. $H_2SO_4$ merupakan asam kuat/elektrolit kuat."
        },
        {
            id: 'k24_p2',
            question: "Perhatikan skema reaksi adisi pada alkena berikut:<br><pre>\nCH3 - CH = CH2 + HCl  -->  Produk Utama\n(Propena)\n</pre><br>Berdasarkan Aturan Markovnikov, struktur produk utama yang terbentuk adalah...",
            options: [
                "CH3 - CH(Cl) - CH3 (2-kloropropana)",
                "CH3 - CH2 - CH2Cl (1-kloropropana)",
                "CH3 - CH2 - CH3 (Propana)",
                "CHCl2 - CH2 - CH3",
                "CH2=CH-CH2Cl"
            ],
            correct: 0,
            rationale: "Menurut aturan Markovnikov, atom $H$ dari asam halida ($HCl$) akan terikat pada atom $C$ ikatan rangkap yang mengikat atom $H$ lebih banyak (C-1), sedangkan $Cl$ terikat pada C-2. Produk utamanya adalah 2-kloropropana."
        },
        {
            id: 'k25_p2',
            question: "Perhatikan struktur gugus fungsi senyawa karbon berikut:<br><pre>\n    O\n    ||\nR - C - OH\n</pre><br>Gugus fungsi di atas milik golongan senyawa...",
            options: [
                "Asam Karboksilat",
                "Alkanal / Aldehida",
                "Alkanon / Keton",
                "Ester / Alkil Alkanoat",
                "Alkanol / Alkohol"
            ],
            correct: 0,
            rationale: "Gugus $-COOH$ (karboksil) merupakan gugus fungsi khas dari golongan senyawa Asam Karboksilat."
        }
    ]
};