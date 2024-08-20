

class TransaksiBarang {
  constructor({
    id,
    id_transaksi,
    id_barang,
    jumlah,
  }) {
    this.id = id;
    this.id_transaksi = id_transaksi;
    this.id_barang = id_barang;
    this.jumlah = jumlah;
  }

  static fromJson(json) {
    return new TransaksiBarang({
      id: json.id,
      id_transaksi: json.id_transaksi,
      id_barang: json.id_barang,
      jumlah: json.jumlah,
    });
  }

  toJson() {
    return {
      id: this.id,
      id_transaksi: this.id_transaksi,
      id_barang: this.id_barang,
      jumlah: this.jumlah,
    };
  } 
}