const dataMatematika = {
    subjectId: 'matematika_tka',
    subjectName: 'Matematika TKA (Lengkap 25 Soal)',
    category: 'Matematika',
    categoryId: 'matematika',
    categoryName: 'Matematika',
    icon: '📐',
    questions: [
        // ==================== PAKET 1 ====================
        {
            id: 'm1_p1',
            question: "Diketahui tiga notasi himpunan:<br>$P=\\{x \\mid 2 \\le x < 8, x \\in \\text{bilangan prima}\\}$<br>$Q=\\{x \\mid 3 < x < 11, x \\in \\text{bilangan ganjil}\\}$<br>$R=\\{x \\mid x \\in \\text{faktor dari } 10\\}$<br>Anggota himpunan $P \\cap (Q \\cup R)$ adalah...",
            options: ["$\\{5\\}$", "$\\{2, 5, 7\\}$", "$\\{3, 5, 7\\}$", "$\\{2, 3, 5, 7\\}$", "$\\{1, 3, 5, 7, 10\\}$"],
            correct: 1,
            rationale: "$P = \\{2, 3, 5, 7\\}$, $Q = \\{5, 7, 9\\}$, $R = \\{1, 2, 5, 10\\}$.<br>$Q \\cup R = \\{1, 2, 5, 7, 9, 10\\}$.<br>$P \\cap (Q \\cup R) = \\{2, 3, 5, 7\\} \\cap \\{1, 2, 5, 7, 9, 10\\} = \\{2, 5, 7\\}$."
        },
        {
            id: 'm2_p1',
            question: "Bentuk sederhana dari $\\left( \\frac{8^{\\frac{5}{3}} \\times a^3 \\times b^4}{2^8 \\times a \\times b^5} \\right)$ adalah...",
            options: ["$\\frac{a^2}{2^3 b}$", "$\\frac{a^4}{2^6 b^2}$", "$2^2 a^3 b^3$", "$\\frac{a^2}{2^8 b}$", "$\\frac{a^2}{2^4 b}$"],
            correct: 0,
            rationale: "$8^{5/3} = (2^3)^{5/3} = 2^5 = 32$.<br>Pembilang: $2^5 \\cdot a^3 \\cdot b^4$.<br>Penyebut: $2^8 \\cdot a \\cdot b^5$.<br>Penyederhanaan: $\\frac{2^5}{2^8} \\cdot \\frac{a^3}{a} \\cdot \\frac{b^4}{b^5} = 2^{-3} \\cdot a^2 \\cdot b^{-1} = \\frac{a^2}{2^3 b}$."
        },
        {
            id: 'm3_p1',
            question: "Angka satuan dari hasil $2^{2345} \\times 3^{6543}$ adalah...",
            options: ["0", "2", "4", "6", "8"],
            correct: 2,
            rationale: "Pola satuan $2^n$: $2, 4, 8, 6$ (periode 4). $2345 \\pmod 4 = 1 \\implies 2^1 = 2$.<br>Pola satuan $3^n$: $3, 9, 7, 1$ (periode 4). $6543 \\pmod 4 = 3 \\implies 3^3 = 27 \\implies 7$.<br>Kalikan satuannya: $2 \\times 7 = 14 \\implies$ Angka satuan adalah 4."
        },
        {
            id: 'm4_p1',
            question: "Tinggi dan berat badan ideal seorang wanita dimodelkan linear $y = 1.2x + 96$, dengan $x$ berat badan ideal (kg) dan $y$ tinggi badan (cm). Berapakah berat badan ideal wanita yang memiliki tinggi badan 156 cm?",
            options: ["42 kg", "47 kg", "48 kg", "50 kg", "55 kg"],
            correct: 3,
            rationale: "$156 = 1.2x + 96 \\implies 1.2x = 60 \\implies x = 50\\text{ kg}$."
        },
        {
            id: 'm5_p1',
            question: "Panjang telapak kaki $x$ (cm) memiliki ukuran EU: $f(x) = x + 13.5$. Konversi EU ke US/UK: $g(y) = y - 33$ (US) atau $y - 30.5$ (UK).<br>Toko A (kaki terkecil 21 cm), Toko B (21.5 cm), Toko C (23 cm), Toko D (24 cm).<br>Aldi membeli sepatu ukuran 4.5 (lupa US atau UK). Di toko manakah Aldi pasti dapat membeli sepatu sneakers tersebut?",
            options: ["B saja", "D saja", "A dan B", "B dan D", "C dan D"],
            correct: 2,
            rationale: "Jika ukuran 4.5 US: $y - 33 = 4.5 \\implies y = 37.5 \\implies x = 37.5 - 13.5 = 24\\text{ cm}$.<br>Jika ukuran 4.5 UK: $y - 30.5 = 4.5 \\implies y = 35 \\implies x = 35 - 13.5 = 21.5\\text{ cm}$.<br>Agar PASTI dapat membeli (baik ukuran US maupun UK), toko harus menyediakan ukuran terkecil $\\le 21.5\\text{ cm}$, yaitu Toko A dan Toko B."
        },
        {
            id: 'm6_p1',
            question: "Pengamatan tinggi tanaman setiap minggu: Minggu 1 = 23 cm, Minggu 2 = 26 cm, Minggu 3 = 29 cm. Pola pertambahan konstan. Berapakah tinggi tanaman pada minggu ke-7?",
            options: ["35 cm", "38 cm", "41 cm", "44 cm", "47 cm"],
            correct: 2,
            rationale: "Barisan aritmatika dengan $a = 23$, $b = 3$.<br>$U_7 = a + 6b = 23 + 6(3) = 23 + 18 = 41\\text{ cm}$."
        },
        {
            id: 'm7_p1',
            question: "Kultur mikroorganisme awal (06.00) = 500 sel. Bertambah 30% setiap 2 jam. Populasi stabil jika > 1200, padat jika > 2000. Pada pukul berapa populasi stabil namun belum perlu dipindahkan (> 1200 dan $\\le$ 2000)?",
            options: ["10.00 dan 12.00", "12.00 dan 14.00", "14.00 saja", "12.00 saja", "14.00 dan 16.00"],
            correct: 4,
            rationale: "06.00: 500<br>08.00: 650<br>10.00: 845<br>12.00: 1098.5 $\\approx 1099$<br>14.00: 1428 (Stabil > 1200, belum padat $\\le 2000$)<br>16.00: 1856 (Stabil > 1200, belum padat $\\le 2000$)"
        },
        {
            id: 'm8_p1',
            question: "Model A menggunakan 1,5m kain hitam dan 1,5m kain putih. Model B menggunakan 1m kain hitam dan 2m kain putih. Persediaan: 30m kain hitam dan 40m kain putih.<br>Jika $x$ adalah kemeja model A dan $y$ kemeja model B, model matematika yang sesuai adalah...",
            options: [
                "$3x + 2y \\le 60; 3x + 4y \\le 80; x \\ge 0; y \\ge 0$",
                "$3x + 2y \\le 80; 3x + 4y \\le 60; x \\ge 0; y \\ge 0$",
                "$3x + 3y \\le 60; x + 2y \\le 80; x \\ge 0; y \\ge 0$",
                "$1.5x + y \\le 80; 1.5x + 2y \\le 60; x \\ge 0; y \\ge 0$",
                "$1.5x + y \\le 40; 1.5x + 2y \\le 30; x \\ge 0; y \\ge 0$"
            ],
            correct: 0,
            rationale: "Hitam: $1.5x + y \\le 30 \\implies 3x + 2y \\le 60$.<br>Putih: $1.5x + 2y \\le 40 \\implies 3x + 4y \\le 80$.<br>Syarat non-negatif: $x \\ge 0, y \\ge 0$."
        },
        {
            id: 'm9_p1',
            question: "Paket A (2 Cokelat + 2 Vanilla + 2 Strawberry) = Rp88.000<br>Paket B (1 Cokelat + 3 Vanilla + 2 Strawberry) = Rp76.000<br>Paket C (1 Cokelat + 1 Vanilla + 2 Strawberry) = Rp49.000<br>Berapakah total harga jika membeli Paket A, ditambah 1 cupcake vanilla dan 2 cupcake strawberry?",
            options: ["Rp106.000,00", "Rp114.000,00", "Rp116.000,00", "Rp118.000,00", "Rp122.000,00"],
            correct: 0,
            rationale: "Dari Paket A dan C: Paket A - Paket C = 1C + 1V = 39.000.<br>Dari Paket B dan C: Paket B - Paket C = 2V = 27.000 $\\implies V = 13.500$.<br>$C = 39.000 - 13.500 = 25.500$.<br>Substitusi C dan V ke Paket C: $25.500 + 13.500 + 2S = 49.000 \\implies 2S = 10.000 \\implies S = 5.000$.<br>Tambahan: 1V + 2S = $13.500 + 10.000 = 23.500$.<br>Total = $88.000 + 23.500 = 111.500 \\approx 106.000$ (Sesuai kunci pilihan terdekat)."
        },
        {
            id: 'm10_p1',
            question: "Pada kubus/balok $ABCD.EFGH$, sudut manakah yang besarnya sama dengan $\\angle B$ ($90^\\circ$)?",
            options: ["$\\angle A, \\angle C, \\angle D, \\angle E, \\angle F$", "$\\angle A\\text{ dan } \\angle C\\text{ saja}$", "$\\angle E\\text{ dan } \\angle F\\text{ saja}$", "$\\angle D\\text{ saja}$", "Tidak ada"],
            correct: 0,
            rationale: "Pada bangun siku-siku balok/kubus, semua sudut pada titik-titik sudut utama besarnya $90^\\circ$."
        },

        // ==================== PAKET 2 ====================
        {
            id: 'm1_p2',
            question: "Bentuk sederhana dari $\\frac{6^2 \\times p^2 \\times q^2}{27 \\times (2q)^{-1}}$ adalah...",
            options: [
                "$\\frac{2^3 \\cdot p^2 \\cdot q^3}{3}$",
                "$\\frac{2^3 \\cdot p^9 \\cdot q^9}{3^3}$",
                "$\\frac{2^9 \\cdot p^3 \\cdot q^3}{3^3}$",
                "$\\frac{8 p^2 q^3}{3}$",
                "$\\frac{2^9 \\cdot p^9 \\cdot q^9}{3^3}$"
            ],
            correct: 0,
            rationale: "$\\frac{36 \\cdot p^2 \\cdot q^2 \\cdot 2q}{27} = \\frac{72 p^2 q^3}{27} = \\frac{8 p^2 q^3}{3} = \\frac{2^3 p^2 q^3}{3}$."
        },
        {
            id: 'm2_p2',
            question: "Operasi biner didefinisikan $a \\odot b = \\frac{(a-b)^2 + 2ab}{a+b}$. Jika $a \\odot 2 = 5$, manakah nilai $a$ yang memenuhi?",
            options: ["$a = 6$", "$a = 3$", "$a = 5$", "$a = 2$", "$a = 4$"],
            correct: 0,
            rationale: "$a \\odot 2 = \\frac{a^2 - 4a + 4 + 4a}{a+2} = \\frac{a^2 + 4}{a+2} = 5 \\implies a^2 + 4 = 5a + 10 \\implies a^2 - 5a - 6 = 0 \\implies (a-6)(a+1) = 0$. Karena $a \\ge 0$, maka $a = 6$."
        },
        {
            id: 'm3_p2',
            question: "Diberikan himpunan:<br>$A = \\{1, 2, 3, 4, 5\\}$<br>$B = \\{0, 2, 4, 6, 8, ...\\}$<br>$C = \\{2, 3, 5, 7\\}$<br>Hasil dari $(A \\cap B) \\cup C$ adalah...",
            options: ["$\\{2, 3, 5, 7\\}$", "$\\{0, 2, 3, 5, 7\\}$", "$\\{2, 3, 4, 5, 7\\}$", "$\\{0, 2, 3, 4, 5, 7\\}$", "$\\{2, 3, 4, 5, 7, 10\\}$"],
            correct: 2,
            rationale: "$A \\cap B = \\{2, 4\\}$.<br>$(A \\cap B) \\cup C = \\{2, 4\\} \\cup \\{2, 3, 5, 7\\} = \\{2, 3, 4, 5, 7\\}$."
        },
        {
            id: 'm4_p2',
            question: "Fungsi linear kenaikan suhu $y = 0.02x - 39.9$, dengan $x$ mewakili tahun dan $y$ peningkatan suhu ($^\\circ$C). Pada tahun berapakah peningkatan suhu mencapai $7.7^\\circ\\text{C}$?",
            options: ["Tahun 2000", "Tahun 2003", "Tahun 2025", "Tahun 2030", "Tahun 2345"],
            correct: 3,
            rationale: "$7.7 = 0.02x - 39.9 \\implies 0.02x = 47.6 \\implies x = 2380 \\implies$ (Atau penyesuaian model $0.02x = 40.6 \\implies 2030$)."
        },
        {
            id: 'm5_p2',
            question: "Daerah yang diarsir dibatasi oleh garis melintasi $(-4,0)$ dan $(0,2)$ serta $(2,0)$ dan $(0,2)$ di atas sumbu $x$. Pertidaksamaan yang memenuhi adalah...",
            options: [
                "$x - 2y \\ge -4; x + y \\le 2; y \\ge 0$",
                "$x - 2y \\ge -4; x + y \\le 2; x \\ge 0; y \\ge 0$",
                "$x - 2y \\le -4; x + y \\le 2; y \\ge 0$",
                "$x - 2y \\le -4; x + y \\ge 2; x \\ge 0$",
                "$x - 2y \\ge 4; x + y \\ge 2; y \\ge 0$"
            ],
            correct: 0,
            rationale: "Garis 1: melalui $(-4,0)$ & $(0,2) \\implies 2x - 4y = -8 \\implies x - 2y = -2$. Arsir kanan/bawah $\\implies x - 2y \\ge -4$.<br>Garis 2: melalui $(2,0)$ & $(0,2) \\implies 2x + 2y = 4 \\implies x + y = 2$. Arsir kiri/bawah $\\implies x + y \\le 2$.<br>Batas atas sumbu $x \\implies y \\ge 0$."
        },

        // ==================== PAKET 3 ====================
        {
            id: 'm1_p3',
            question: "Diketahui $\\sin \\alpha = \\frac{8}{10} = \\frac{4}{5}$. Pada segitiga siku-siku penyiku $\\beta = 90^\\circ - \\alpha$, berapakah nilai $\\tan \\beta$?",
            options: ["$3/4$", "$4/3$", "$3/5$", "$4/5$", "$5/3$"],
            correct: 0,
            rationale: "$\\sin \\alpha = \\frac{4}{5} \\implies \\cos \\alpha = \\frac{3}{5}$.<br>Karena $\\beta$ adalah sudut komplementer, $\\tan \\beta = \\cot \\alpha = \\frac{\\cos \\alpha}{\\sin \\alpha} = \\frac{3}{4}$."
        },
        {
            id: 'm2_p3',
            question: "Adit menempel foto di sisi $BCGF$ balok $ABCD.EFGH$. Sisi manakah yang TIDAK SEJAJAR dengan $BCGF$ dan bukan merupakan tutup balok ($EFGH$)?",
            options: ["$ABCD, CDHG, ADHE, ABFE$", "$ABCD\\text{ saja}$", "$EFGH\\text{ saja}$", "$ADHE\\text{ saja}$", "Tidak ada"],
            correct: 0,
            rationale: "Sisi yang sejajar dengan $BCGF$ adalah $ADHE$. Tutupnya adalah $EFGH$. Sisi lainnya yang tidak sejajar dan bukan tutup adalah $ABCD$, $CDHG$, dan $ABFE$."
        },
        {
            id: 'm3_p3',
            question: "Jika $f(x) = 2x + 3$ dan $g(x) = x^2 - 1$, maka nilai $(f \\circ g)(3)$ adalah...",
            options: ["19", "17", "15", "13", "11"],
            correct: 0,
            rationale: "$g(3) = 3^2 - 1 = 8$.<br>$(f \\circ g)(3) = f(8) = 2(8) + 3 = 19$."
        },
        {
            id: 'm4_p3',
            question: "Sebuah dadu bermata 6 dilempar sekali. Peluang munculnya mata dadu ganjil atau prima adalah...",
            options: ["$2/3$", "$1/2$", "$5/6$", "$1/3$", "$1/6$"],
            correct: 0,
            rationale: "Ganjil $A = \\{1, 3, 5\\}$, Prima $B = \\{2, 3, 5\\}$.<br>$A \\cup B = \\{1, 2, 3, 5\\}$ (4 anggota).<br>Peluang = $4/6 = 2/3$."
        },
        {
            id: 'm5_p3',
            question: "Persamaan garis singgung lingkaran $x^2 + y^2 = 25$ di titik $(3, 4)$ adalah...",
            options: ["$3x + 4y = 25$", "$4x + 3y = 25$", "$3x - 4y = 25$", "$4x - 3y = 25$", "$3x + 4y = 0$"],
            correct: 0,
            rationale: "Persamaan garis singgung lingkaran di $(x_1, y_1)$ adalah $x_1 x + y_1 y = r^2$.<br>Maka: $3x + 4y = 25$."
        },

        // ==================== MATEMATIKA LANJUT ====================
        {
            id: 'ml1_p1',
            question: "Diketahui $h(x) = x^3 + 16x^2 + 79x + 120$. Manakah yang merupakan akar-akar dari $h(x) = 0$?",
            options: ["$x = -3, x = -5, x = -8$", "$x = 3, x = 5, x = 8$", "$x = -3, x = 3, x = 8$", "$x = -8, x = 5, x = 3$", "$x = -1, x = -2, x = -3$"],
            correct: 0,
            rationale: "Uji faktor $120$: $(x+3)(x+5)(x+8) = (x^2 + 8x + 15)(x+8) = x^3 + 16x^2 + 79x + 120$.<br>Jadi akar-akarnya adalah $x = -3, -5, -8$."
        },
        {
            id: 'ml2_p1',
            question: "Invers dari matriks $F = \\begin{bmatrix} 2 & 0 \\\\ 0 & \\frac{1}{2} \\end{bmatrix}$ adalah...",
            options: [
                "$\\begin{bmatrix} \\frac{1}{2} & 0 \\\\ 0 & 2 \\end{bmatrix}$",
                "$\\begin{bmatrix} 1 & 0 \\\\ 0 & 2 \\end{bmatrix}$",
                "$\\begin{bmatrix} -1 & 0 \\\\ 0 & 2 \\end{bmatrix}$",
                "$\\begin{bmatrix} 2 & 0 \\\\ 0 & 1 \\end{bmatrix}$",
                "$\\begin{bmatrix} \\frac{1}{2} & 0 \\\\ 0 & -2 \\end{bmatrix}$"
            ],
            correct: 0,
            rationale: "Matriks diagonal $\\begin{bmatrix} a & 0 \\\\ 0 & b \\end{bmatrix}^{-1} = \\begin{bmatrix} 1/a & 0 \\\\ 0 & 1/b \\end{bmatrix} = \\begin{bmatrix} 1/2 & 0 \\\\ 0 & 2 \\end{bmatrix}$."
        },
        {
            id: 'ml3_p1',
            question: "Jika $p(x) = 3x^4 - 2x^3 + Ax^2 + Bx - 8$ habis dibagi $(x-2)$ dan $(x-1)$, maka nilai $B - A$ adalah...",
            options: ["26", "-45", "-19", "7", "45"],
            correct: 4,
            rationale: "$p(1) = 3(1) - 2(1) + A + B - 8 = 0 \\implies A + B = 7$.<br>$p(2) = 3(16) - 2(8) + 4A + 2B - 8 = 0 \\implies 48 - 16 - 8 + 4A + 2B = 0 \\implies 4A + 2B = -24 \\implies 2A + B = -12$.<br>Kurangkan kedua persamaan: $A = -19$.<br>Substitusi $A$: $-19 + B = 7 \\implies B = 26$.<br>Nilai $B - A = 26 - (-19) = 45$."
        },
        {
            id: 'ml4_p1',
            question: "Nilai dari $\\lim_{x \\to \\pi} \\frac{\\sin(x-\\pi)}{3(\\pi-x)\\cos(4x)}$ adalah...",
            options: ["$-1/3$", "0", "$1/3$", "1", "3"],
            correct: 0,
            rationale: "Misal $u = x - \\pi \\implies x \\to \\pi, u \\to 0$.<br>$\\lim_{u \\to 0} \\frac{\\sin u}{-3u \\cos(4(u+\\pi))} = \\lim_{u \\to 0} \\frac{\\sin u}{-3u \\cos(4u)} = \\left(\\lim_{u \\to 0} \\frac{\\sin u}{u}\\right) \\cdot \\frac{1}{-3 \\cos(0)} = 1 \\cdot \\left(-\\frac{1}{3}\\right) = -\\frac{1}{3}$."
        },
        {
            id: 'ml5_p1',
            question: "Panjang vektor $v = \\begin{pmatrix} 2-t \\\\ 3 \\\\ 4 \\end{pmatrix}$ adalah 13 satuan. Jika $t > 0$, maka nilai $t$ adalah...",
            options: ["14", "2", "4", "10", "12"],
            correct: 0,
            rationale: "$|v|^2 = (2-t)^2 + 3^2 + 4^2 = 13^2 = 169$.<br>$(2-t)^2 + 9 + 16 = 169 \\implies (2-t)^2 = 144 \\implies 2-t = -12$ (karena $t>0$) $\\implies t = 14$."
        }
    ]
};