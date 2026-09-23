const dataMatematikaBaru = {
    subjectId: 'matematika_tka_hots',
    subjectName: 'Matematika TKA (Tingkat Lanjut / HOTS)',
    category: 'Matematika',
    categoryId: 'matematika',
    categoryName: 'Matematika',
    icon: '📐',
    questions: [
        // ==================== HIMPUNAN & TEORI BILANGAN ====================
        {
            id: 'mh1_p1',
            question: "Diketahui himpunan semesta $S = \\{x \\mid 1 \\le x \\le 20, x \\in \\mathbb{Z}^+\\}$. Didefinisikan:<br>$A = \\{x \\in S \\mid x \\equiv 1 \\pmod 3\\}$<br>$B = \\{x \\in S \\mid x \\text{ adalah bilangan komposit}\\}$<br>$C = \\{x \\in S \\mid x \\text{ memiliki tepat 3 faktor positif}\\}$<br>Banyaknya anggota dari himpunan $(A \\cap B) \\setminus C$ adalah...",
            options: ["3", "4", "5", "6", "7"],
            correct: 1,
            rationale: "$S = \\{1, 2, \\dots, 20\\}$.<br>$A = \\{1, 4, 7, 10, 13, 16, 19\\}$.<br>Bilangan komposit $B = \\{4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20\\}$.<br>Irisan $A \\cap B = \\{4, 10, 16\\}$.<br>Bilangan yang memiliki tepat 3 faktor adalah kuadrat dari bilangan prima ($p^2$), yaitu $C = \\{4, 9\\}$.<br>Maka $(A \\cap B) \\setminus C = \\{4, 10, 16\\} \\setminus \\{4, 9\\} = \\{10, 16\\}$."
        },
        {
            id: 'mh2_p1',
            question: "Jika $x, y \\in \\mathbb{R}^+$ memenuhi sistem persamaan $\\begin{cases} x^{\\log_2 y} = 8 \\\\ y^{\\log_2 x} = 8 \\end{cases}$, maka nilai dari $x \\cdot y$ adalah...",
            options: ["8", "16", "32", "64", "128"],
            correct: 3,
            rationale: "Ambil $\\log_2$ pada kedua ruas: $\\log_2(y) \\cdot \\log_2(x) = \\log_2(8) = 3$.<br>Misal $a = \\log_2 x$ dan $b = \\log_2 y$, maka $a \\cdot b = 3$. Karena $x = y$ dari simetri, $a = b = \\sqrt{3}$.<br>$\\log_2(xy) = \\log_2 x + \\log_2 y = a + b = 2\\sqrt{3} \\implies xy = 2^{2\\sqrt{3}}$."
        },
        {
            id: 'mh3_p1',
            question: "Dua angka terakhir (angka puluhan dan satuan) dari hasil ekspresi $7^{2026}$ adalah...",
            options: ["01", "07", "49", "43", "21"],
            correct: 2,
            rationale: "Mencari $7^{2026} \\pmod{100}$.<br>Dengan Teorema Euler, $\\phi(100) = 40$. Karena $\\gcd(7, 100) = 1$, $7^{40} \\equiv 1 \\pmod{100}$.<br>$2026 = 40 \\times 50 + 26 \\implies 7^{2026} \\equiv 7^{26} \\pmod{100}$.<br>$7^2 = 49$, $7^4 = 2401 \\equiv 01 \\pmod{100}$.<br>$7^{26} = (7^4)^6 \\cdot 7^2 \\equiv (01)^6 \\cdot 49 \\equiv 49 \\pmod{100}$."
        },

        // ==================== FUNGSI & FUNGSI INVERS ====================
        {
            id: 'mh4_p1',
            question: "Diketahui fungsi $f(x) = \\frac{ax + b}{cx + d}$ dengan $ad - bc \\neq 0$ dan $f(f(x)) = x$ untuk semua $x \\neq -d/c$. Hubungan antara parameter $a$ dan $d$ yang mutlak memenuhi adalah...",
            options: ["a = d", "a = -d", "a = 1/d", "a = d^2", "a = 0"],
            correct: 1,
            rationale: "Fungsi invers dari $f(x) = \\frac{ax+b}{cx+d}$ adalah $f^{-1}(x) = \\frac{-dx+b}{cx-a}$.<br>Karena $f(f(x)) = x \\implies f^{-1}(x) = f(x)$.<br>Membandingkan koefisien $f(x)$ dan $f^{-1}(x)$ diperoleh $-d = a \\implies a = -d$."
        },
        {
            id: 'mh5_p1',
            question: "Operasi biner $\\odot$ pada himpunan bilangan real terdefinisi sebagai $a \\odot b = a + b - ab$. Jika $x \\odot (2 \\odot 3) = 10$, maka nilai $x$ adalah...",
            options: ["-2", "-1", "1", "2", "3"],
            correct: 2,
            rationale: "Hitung $2 \\odot 3 = 2 + 3 - (2)(3) = 5 - 6 = -1$.<br>Persamaan menjadi $x \\odot (-1) = 10 \\implies x + (-1) - x(-1) = 10 \\implies x - 1 + x = 10 \\implies 2x = 11 \\implies x = 5.5$."
        },

        // ==================== BARISAN, DERET & PERKEMBANGBIAKAN ====================
        {
            id: 'mh6_p1',
            question: "Suku ke-$n$ suatu barisan aritmatika memenuhi $U_n$. Jika $U_3 + U_7 + U_{11} + U_{15} = 72$, maka jumlah 17 suku pertama ($S_{17}$) deret tersebut adalah...",
            options: ["288", "306", "324", "360", "408"],
            correct: 1,
            rationale: "$U_3 + U_7 + U_{11} + U_{15} = (a+2b) + (a+6b) + (a+10b) + (a+14b) = 4a + 32b = 72 \\implies a + 8b = 18$.<br>Perhatikan bahwa $U_9 = a + 8b = 18$.<br>Jumlah 17 suku pertama: $S_{17} = \\frac{17}{2} (2a + 16b) = 17(a + 8b) = 17 \\times 18 = 306$."
        },
        {
            id: 'mh7_p1',
            question: "Suatu populasi bakteri bertambah secara eksponensial mengikuti model $P(t) = P_0 \\cdot e^{kt}$. Pada $t = 2$ jam jumlahnya 800 sel, dan pada $t = 5$ jam jumlahnya 6.400 sel. Waktu yang dibutuhkan (dalam jam) agar populasi mencapai 25.600 sel dari $t = 0$ adalah...",
            options: ["6 jam", "7 jam", "8 jam", "9 jam", "10 jam"],
            correct: 1,
            rationale: "$\\frac{P(5)}{P(2)} = \\frac{P_0 e^{5k}}{P_0 e^{2k}} = e^{3k} = \\frac{6400}{800} = 8 \\implies e^k = 2$.<br>$P(2) = P_0 (e^k)^2 = P_0 (2^2) = 4 P_0 = 800 \\implies P_0 = 200$.<br>Model: $P(t) = 200 \\cdot 2^t$.<br>$25.600 = 200 \\cdot 2^t \\implies 2^t = 128 \\implies t = 7\\text{ jam}$."
        },

        // ==================== PROGRAM LINEAR & GEOMETRI ====================
        {
            id: 'mh8_p1',
            question: "Sebuah pabrik memproduksi dua tipe mesin. Tipe A memerlukan 3 jam perakitan dan 2 jam pengujian. Tipe B memerlukan 2 jam perakitan dan 4 jam pengujian. Waktu perakitan maksimal 18 jam dan pengujian maksimal 20 jam. Jika keuntungan Tipe A Rp5.000.000/unit dan Tipe B Rp6.000.000/unit, keuntungan maksimum pabrik adalah...<br><pre class='font-mono text-xs bg-slate-100 text-slate-800 p-3 rounded-xl border border-slate-200 leading-tight my-2 overflow-x-auto whitespace-pre'>\nTipe Mesin     Perakitan (jam)   Pengujian (jam)   Keuntungan/unit\nTipe A (x)     3                 2                 Rp5.000.000\nTipe B (y)     2                 4                 Rp6.000.000\nKapasitas      18                20                \n</pre>",
            options: ["Rp30.000.000", "Rp33.000.000", "Rp36.000.000", "Rp37.000.000", "Rp40.000.000"],
            correct: 1,
            rationale: "Pertidaksamaan: $3x + 2y \\le 18$ dan $2x + 4y \\le 20 \\implies x + 2y \\le 10$.<br>Titik potong kedua garis: $2x = 8 \\implies x = 4$, $y = 3$.<br>Uji titik pojok $Z = 5x + 6y$ (dalam juta):<br>• $(0,5) \\implies 30$<br>• $(6,0) \\implies 30$<br>• $(4,3) \\implies 5(4) + 6(3) = 20 + 18 = 38\\text{ juta}$."
        },
        {
            id: 'mh9_p1',
            question: "Sistem pertidaksamaan yang menggambarkan daerah terarsir pada grafik berikut adalah...<br><pre class='font-mono text-xs bg-slate-100 text-slate-800 p-3 rounded-xl border border-slate-200 leading-tight my-2 overflow-x-auto whitespace-pre'>\n       Y ^\n      6  +      *\n         |     /|\\ \n      4  +    * | \\ \n         |   /#|#|  \\ \n  -------+----+--+---+---> X\n        -2    0  2   6\n</pre>",
            options: [
                "y - x <= 4; 2x + y <= 6; y >= 0",
                "y - x <= 4; x + y <= 6; x >= 0; y >= 0",
                "2y - x <= 4; x + y <= 6; y >= 0",
                "y - 2x <= 4; 2x + y <= 6; y >= 0",
                "x - y <= 4; x + y <= 6; y >= 0"
            ],
            correct: 0,
            rationale: "Garis 1 melalui $(-2,0)$ & $(0,4) \\implies 4x - 2y = -8 \\implies 2x - y = -4 \\implies y - 2x = 4$. Arsir bawah $\\implies y - 2x \\le 4$.<br>Garis 2 melalui $(6,0)$ & $(0,6) \\implies x + y = 6$. Arsir bawah $\\implies x + y \\le 6$."
        },

        // ==================== SPLTV & GEOMETRI RUANG ====================
        {
            id: 'mh10_p1',
            question: "Suatu fungsi kuadrat $f(x) = ax^2 + bx + c$ melalui titik $(1, 2)$, $(-1, 10)$, dan $(2, 7)$. Nilai dari $a + 2b + 3c$ adalah...",
            options: ["7", "9", "11", "13", "15"],
            correct: 1,
            rationale: "1) $a + b + c = 2$<br>2) $a - b + c = 10$<br>Kurangkan (2) dari (1): $2b = -8 \\implies b = -4$.<br>Substitusi $b$: $a + c = 6$.<br>3) $4a + 2b + c = 7 \\implies 4a - 8 + c = 7 \\implies 4a + c = 15$.<br>Kurangkan $a+c=6$ dari $4a+c=15 \\implies 3a = 9 \\implies a = 3, c = 3$.<br>$a + 2b + 3c = 3 + 2(-4) + 3(3) = 3 - 8 + 9 = 4$."
        },
        {
            id: 'mh11_p1',
            question: "Diberikan limas T.ABCD beralas persegi dengan rusuk alas 8 cm dan rusuk tegak $4\\sqrt{6}$ cm. Sudut antara garis TA dan bidang alas ABCD adalah $\\alpha$. Nilai $\\cos \\alpha$ adalah...",
            options: ["$\\frac{1}{2}\\sqrt{2}$", "$\\frac{1}{3}\\sqrt{3}$", "$\\frac{1}{3}\\sqrt{6}$", "$\\frac{1}{2}\\sqrt{3}$", "$\\frac{1}{6}\\sqrt{3}$"],
            correct: 0,
            rationale: "Proyeksi $A$ ke alas adalah titik tengah alas $O$. $AO = \\frac{1}{2} AC = \\frac{1}{2} (8\\sqrt{2}) = 4\\sqrt{2}\\text{ cm}$.<br>Pada $\\triangle TAO$ siku-siku di $O$: $\\cos \\alpha = \\frac{AO}{TA} = \\frac{4\\sqrt{2}}{4\\sqrt{6}} = \\sqrt{\\frac{2}{6}} = \\frac{1}{\\sqrt{3}} = \\frac{1}{3}\\sqrt{3}$."
        },
        {
            id: 'mh12_p1',
            question: "Pada kubus $ABCD.EFGH$ dengan panjang rusuk $a$, jarak antara garis $AH$ dan garis $FC$ adalah...",
            options: ["$\\frac{a}{3}\\sqrt{3}$", "$\\frac{a}{2}\\sqrt{2}$", "$\\frac{a}{3}\\sqrt{6}$", "$\\frac{a}{2}\\sqrt{3}$", "$a\\sqrt{2}$"],
            correct: 0,
            rationale: "Garis $AH$ terletak pada bidang $ADHE$ dan $FC$ pada $BCGF$. Keduanya sejajar dan berjarak sama dengan jarak antara bidang $ADHE$ dan $BCGF$, yaitu panjang rusuk $a$ (atau proyeksi tegak lurus sejajar bidang diagonal $= \\frac{a}{\\sqrt{3}} = \\frac{a}{3}\\sqrt{3}$)."
        },

        // ==================== TRIGONOMETRI ====================
        {
            id: 'mh13_p1',
            question: "Jika $\\sin x + \\cos x = \\frac{1}{5}$ untuk $\\frac{\\pi}{2} < x < \\pi$, maka nilai dari $\\sin(2x)$ dan $\\tan x$ berturut-turut adalah...",
            options: ["$-24/25$ dan $-4/3$", "$-24/25$ dan $-3/4$", "$24/25$ dan $-4/3$", "$-12/25$ dan $-3/4$", "$12/25$ dan $-4/3$"],
            correct: 0,
            rationale: "Kuadratkan kedua ruas: $(\\sin x + \\cos x)^2 = \\frac{1}{25} \\implies 1 + 2\\sin x \\cos x = \\frac{1}{25} \\implies \\sin(2x) = -\\frac{24}{25}$.<br>Karena $2\\sin x \\cos x = -24/25$ dan $\\sin x + \\cos x = 1/5$, nilai $\\sin x = 4/5$ dan $\\cos x = -3/5$.<br>$\\tan x = \\frac{\\sin x}{\\cos x} = \\frac{4/5}{-3/5} = -\\frac{4}{3}$."
        },
        {
            id: 'mh14_p1',
            question: "Persamaan $\\sqrt{3}\\cos x + \\sin x = \\sqrt{2}$ dapat dinyatakan dalam bentuk $k \\cos(x - \\alpha) = \\sqrt{2}$. Nilai $x$ yang memenuhi untuk $0 \\le x \\le 2\\pi$ adalah...",
            options: ["$\\pi/12$ dan $7\\pi/12$", "$\\pi/12$ dan $23\\pi/12$", "$\\pi/6$ dan $5\\pi/6$", "$\\pi/4$ dan $7\\pi/4$", "$\\pi/12$ dan $17\\pi/12$"],
            correct: 1,
            rationale: "$k = \\sqrt{(\\sqrt{3})^2 + 1^2} = 2$. $\\tan \\alpha = \\frac{1}{\\sqrt{3}} \\implies \\alpha = \\frac{\\pi}{6}$.<br>$2 \\cos(x - \\pi/6) = \\sqrt{2} \\implies \\cos(x - \\pi/6) = \\frac{1}{2}\\sqrt{2}$.<br>1) $x - \\pi/6 = \\pi/4 \\implies x = 5\\pi/12$.<br>2) $x - \\pi/6 = -\\pi/4 \\implies x = -\\pi/12 + 2\\pi = 23\\pi/12$."
        },

        // ==================== PELUANG & MATRIKS ====================
        {
            id: 'mh15_p1',
            question: "Sebuah kotak berisi 5 bola merah dan 3 bola putih. Dari kotak diambil 3 bola sekaligus secara acak. Peluang terambil sekurang-kurangnya 2 bola merah adalah...",
            options: ["25/56", "30/56", "35/56", "40/56", "45/56"],
            correct: 3,
            rationale: "Total cara $C(8,3) = \\frac{8 \\times 7 \\times 6}{6} = 56$.<br>• 2 Merah, 1 Putih: $C(5,2) \\times C(3,1) = 10 \\times 3 = 30$.<br>• 3 Merah: $C(5,3) = 10$.<br>Total kejadian = $30 + 10 = 40$. Peluang = $\\frac{40}{56}$."
        },
        {
            id: 'mh16_p1',
            question: "Diketahui matriks $A = \\begin{bmatrix} x & 2 \\\\ 3 & y \\end{bmatrix}$ dan $B = \\begin{bmatrix} 2 & 1 \\\\ 1 & 1 \\end{bmatrix}$. Jika $\\det(AB) = 10$ dan $x + y = 7$, maka nilai $x^2 + y^2$ adalah...",
            options: ["25", "29", "33", "37", "41"],
            correct: 1,
            rationale: "$\\det(AB) = \\det(A) \\cdot \\det(B)$.<br>$\\det(B) = (2)(1) - (1)(1) = 1$. Maka $\\det(A) = 10 \\implies xy - 6 = 10 \\implies xy = 16$.<br>$x^2 + y^2 = (x+y)^2 - 2xy = 7^2 - 2(16) = 49 - 32 = 17$."
        },

        // ==================== POLINOMIAL & LIMIT ====================
        {
            id: 'mh17_p1',
            question: "Suku banyak $P(x)$ jika dibagi $(x-2)$ bersisa 6 dan jika dibagi $(x+3)$ bersisa -4. Sisa pembagian $P(x)$ oleh $(x^2 + x - 6)$ adalah...",
            options: ["2x + 2", "2x - 2", "x + 4", "3x", "x - 2"],
            correct: 0,
            rationale: "Sisa pembagian $S(x) = ax + b$.<br>$P(2) = 2a + b = 6$<br>$P(-3) = -3a + b = -4$<br>Kurangkan: $5a = 10 \\implies a = 2$.<br>Substitusi $a$: $2(2) + b = 6 \\implies b = 2$.<br>$S(x) = 2x + 2$."
        },
        {
            id: 'mh18_p1',
            question: "Nilai dari $\\lim_{x \\to 0} \\frac{x \\tan(3x)}{1 - \\cos(2x)}$ adalah...",
            options: ["1/2", "3/2", "3/4", "2/3", "3"],
            correct: 1,
            rationale: "Gunakan identitas $1 - \\cos(2x) = 2\\sin^2 x$.<br>$\\lim_{x \\to 0} \\frac{x \\tan(3x)}{2\\sin^2 x} = \\frac{1}{2} \\left( \\lim_{x \\to 0} \\frac{x}{\\sin x} \\right) \\left( \\lim_{x \\to 0} \\frac{\\tan(3x)}{\\sin x} \\right) = \\frac{1}{2} (1) (3) = \\frac{3}{2}$."
        },
        {
            id: 'mh19_p1',
            question: "Nilai dari $\\lim_{x \\to \\infty} \\left( \\sqrt{4x^2 + 8x - 3} - 2x + 1 \\right)$ adalah...",
            options: ["1", "2", "3", "4", "5"],
            correct: 2,
            rationale: "Ubah bentuk: $\\lim_{x \\to \\infty} \\left( \\sqrt{4x^2 + 8x - 3} - (2x - 1) \\right) = \\lim_{x \\to \\infty} \\left( \\sqrt{4x^2 + 8x - 3} - \\sqrt{4x^2 - 4x + 1} \\right)$.<br>Gunakan rumus $\\frac{b - q}{2\\sqrt{a}} = \\frac{8 - (-4)}{2\\sqrt{4}} = \\frac{12}{4} = 3$."
        },

        // ==================== TURUNAN & INTEGRAL ====================
        {
            id: 'mh20_p1',
            question: "Garis singgung kurva $y = x^3 - 3x^2 + 2$ yang sejajar dengan garis $9x - y + 5 = 0$ menyinggung kurva di titik...",
            options: ["(3, 2) atau (-1, -2)", "(3, 2) atau (-1, 2)", "(3, 2) atau (1, 0)", "(-3, -52) atau (1, 0)", "(2, -2) atau (-1, -2)"],
            correct: 0,
            rationale: "Gradien garis $9x - y + 5 = 0$ adalah $m = 9$.<br>$y' = 3x^2 - 6x = 9 \\implies 3x^2 - 6x - 9 = 0 \\implies x^2 - 2x - 3 = 0 \\implies (x-3)(x+1) = 0$.<br>1) $x = 3 \\implies y = 27 - 27 + 2 = 2 \\implies (3, 2)$.<br>2) $x = -1 \\implies y = -1 - 3 + 2 = -2 \\implies (-1, -2)$."
        },
        {
            id: 'mh21_p1',
            question: "Sebuah kotak tanpa tutup dibuat dari selembar seng berukuran $12\\text{ cm} \\times 12\\text{ cm}$ dengan memotong empat persegi identik di setiap sudutnya. Volume maksimum kotak tersebut adalah...",
            options: ["128 cm^3", "144 cm^3", "160 cm^3", "200 cm^3", "256 cm^3"],
            correct: 0,
            rationale: "Misal potongan sudut bernilai $x$. Sisi alas $= 12 - 2x$, tinggi $= x$.<br>$V(x) = (12 - 2x)^2 x = (144 - 48x + 4x^2)x = 4x^3 - 48x^2 + 144x$.<br>$V'(x) = 12x^2 - 96x + 144 = 0 \\implies x^2 - 8x + 12 = 0 \\implies (x-2)(x-6) = 0$.<br>Ambil $x = 2$ (karena $x=6$ membuat panjang nol).<br>$V(2) = (12 - 4)^2 (2) = 64 \\times 2 = 128\\text{ cm}^3$."
        },
        {
            id: 'mh22_p1',
            question: "Hasil dari $\\int_0^{\\pi/2} \\sin^3 x \\cos x \\, dx$ adalah...",
            options: ["1/4", "1/3", "1/2", "1", "2"],
            correct: 0,
            rationale: "Misal $u = \\sin x \\implies du = \\cos x \\, dx$.<br>Batas: $x = 0 \\implies u = 0$; $x = \\pi/2 \\implies u = 1$.<br>$\\int_0^1 u^3 \\, du = \\left[ \\frac{1}{4} u^4 \\right]_0^1 = \\frac{1}{4}$."
        },
        {
            id: 'mh23_p1',
            question: "Luas daerah yang dibatasi oleh parabola $y = x^2 - 4x$ dan garis $y = 2x - 5$ adalah...",
            options: ["4/3", "32/3", "36/3", "1/6", "4/6"],
            correct: 0,
            rationale: "Titik potong: $x^2 - 4x = 2x - 5 \\implies x^2 - 6x + 5 = 0 \\implies (x-1)(x-5) = 0$.<br>Gunakan rumus cepat $L = \\frac{D\\sqrt{D}}{6a^2}$ untuk selisih $x^2 - 6x + 5$: $D = 36 - 20 = 16$.<br>$L = \\frac{16 \\sqrt{16}}{6(1)^2} = \\frac{64}{6} = \\frac{32}{3}$."
        },

        // ==================== VEKTOR & STATISTIKA ====================
        {
            id: 'mh24_p1',
            question: "Diketahui vektor $\\vec{u} = 2\\hat{i} - \\hat{j} + 2\\hat{k}$ dan $\\vec{v} = 4\\hat{i} + 10\\hat{j} - 8\\hat{k}$. Proyeksi vektor ortogonal $\\vec{u}$ pada $\\vec{v}$ adalah...",
            options: [
                "$-\\frac{1}{10} (4\\hat{i} + 10\\hat{j} - 8\\hat{k})$",
                "$-\\frac{1}{9} (4\\hat{i} + 10\\hat{j} - 8\\hat{k})$",
                "$\\frac{1}{10} (4\\hat{i} + 10\\hat{j} - 8\\hat{k})$",
                "$-\\frac{1}{5} (4\\hat{i} + 10\\hat{j} - 8\\hat{k})$",
                "$\\frac{1}{5} (4\\hat{i} + 10\\hat{j} - 8\\hat{k})$"
            ],
            correct: 0,
            rationale: "$\\vec{u} \\cdot \\vec{v} = 2(4) + (-1)(10) + 2(-8) = 8 - 10 - 16 = -18$.<br>$|\\vec{v}|^2 = 4^2 + 10^2 + (-8)^2 = 16 + 100 + 64 = 180$.<br>Proyeksi vektor ortogonal: $\\frac{\\vec{u} \\cdot \\vec{v}}{|\\vec{v}|^2} \\vec{v} = \\frac{-18}{180} \\vec{v} = -\\frac{1}{10} (4\\hat{i} + 10\\hat{j} - 8\\hat{k})$."
        },
        {
            id: 'mh25_p1',
            question: "Rata-rata ujian matematika dari 39 siswa adalah 70. Jika nilai seorang siswa susulan digabungkan, rata-ratanya menjadi 70,5. Nilai siswa susulan tersebut adalah...",
            options: ["85", "88", "90", "92", "95"],
            correct: 3,
            rationale: "Total awal $= 39 \\times 70 = 2.730$.<br>Total baru $= 40 \\times 70,5 = 2.820$.<br>Nilai siswa $= 2.820 - 2.730 = 90$."
        }
    ]
};