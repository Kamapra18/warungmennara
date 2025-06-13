// components/FAQ/data.tsx

export type FAQItemType = {
  question: string;
  answer: string;
};

export type FAQDataType = {
  [category: string]: FAQItemType[];
};

export const faqData: FAQDataType = {
  Produk: [
    {
      question: "Produk mana yang paling diminati?",
      answer:
        "Yang paling banyak diminati saat ini adalah Urutan Smoky (urutan babi asap)."
    },
    {
      question: "Apakah tersedia versi halalnya(ayam)?",
      answer:
        "Ya, tersedia. Kami punya Urutan Ayam sebagai versi halalnya, jadi tetap bisa menikmati cita rasa khas Bali dengan tenang."
    },
    {
      question: "Berapa lama masa simpan urutan dalam freezer?",
      answer:
        "Kalau kondisi kemasan masih tersegel dengan baik, bisa sampai 1 tahun, kalau sudah terbuka paling bagus di simpam selama 6 bulan"
    },
        {
      question: "Apakah produk sudah matang atau masih mentah?",
      answer:
        "Ada yang sudah matang dan ada yang belum matang (dalam kondisi sudah dilumuri bumbu)."
    },
  ],
  Pengiriman: [
    {
      question: "Apakah pengiriman tersedia ke seluruh bali atau luar kota juga?",
      answer:
        "Ya, pengiriman tersedia ke seluruh Bali dan juga luar kota dengan menggunakan jasa ekspedisi."
    },
    {
      question: "Apa saja jasa pengiriman yang digunakan?",
      answer:
        "Kami menggunakan kurir sendiri, ojek online (ojol), dan juga jasa ekspedisi."
    },
        {
      question: "Bagaimana pengemasan produk agar tetap aman saat pengiriman?",
      answer:
        "Pengemasan disesuaikan dengan jarak tujuan pengiriman, mulai dari menggunakan tas plastik atau goodybag untuk jarak dekat, hingga menggunakan box styrofoam untuk pengiriman yang lebih jauh."
    },
        {
      question: "Berapa lama produk bisa tahan selama pengiriman?",
      answer:
        "Produk bisa tahan hingga 7 hari, asalkan dikemas dengan baik dan tetap dalam kondisi beku selama pengiriman."
    },
  ],
  Pembayaran: [
    {
      question: "Apa saja metode pembayaran yang tersedia?",
      answer:
        "Pembayaran bisa dilakukan secara tunai atau melalui transfer"
    },
    {
      question: "Apakah harga sudah termasuk ongkos kirim?",
      answer:
        "harga belum termasuk ongkos kirim, jadi akan ada biaya tambahan sesuai dengan jarak pengiriman."
    }
  ]
};
