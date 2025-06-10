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
      question: "Apa saja produk yang tersedia di Warung Mennara?",
      answer:
        "Kami menyediakan berbagai macam frozen food khas Bali seperti ayam betutu, sate lilit, dan lawar siap saji."
    },
    {
      question: "Apakah produk harus disimpan di freezer?",
      answer:
        "Ya, semua produk kami adalah frozen food dan harus disimpan di freezer untuk menjaga kualitasnya."
    }
  ],
  Pengiriman: [
    {
      question: "Apakah Warung Mennara melayani pengiriman ke seluruh Indonesia?",
      answer:
        "Saat ini kami melayani pengiriman ke sebagian besar wilayah Indonesia melalui jasa ekspedisi terpercaya."
    },
    {
      question: "Kapan pesanan saya akan dikirim?",
      answer:
        "Pesanan akan dikirim dalam 1-2 hari kerja setelah pembayaran dikonfirmasi."
    }
  ],
  Pembayaran: [
    {
      question: "Metode pembayaran apa saja yang tersedia?",
      answer:
        "Kami menerima pembayaran melalui transfer bank, e-wallet (OVO, GoPay, DANA), dan QRIS."
    },
    {
      question: "Apakah pembayaran aman?",
      answer:
        "Ya, sistem pembayaran kami menggunakan gateway yang telah tersertifikasi untuk memastikan keamanan transaksi."
    }
  ]
};
