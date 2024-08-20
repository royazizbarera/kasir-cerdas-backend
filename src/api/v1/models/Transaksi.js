
class Transaksi {
  id;
  id_toko;
  id_staf;
  id_pelanggan;
  keuntungan;
  total_tagihan;
  yang_di_bayarkan;
  metode_pembayaran;

  constructor({
    id,
    id_toko,
    id_staf,
    id_pelanggan,

    keuntungan = null,
    total_tagihan = null,
    yang_di_bayarkan = null,
    metode_pembayaran = null,
  }) {
    this.id = id;
    this.id_toko = id_toko;
    this.id_staf = id_staf;
    this.id_pelanggan = id_pelanggan;
    this.keuntungan = keuntungan;
    this.total_tagihan = total_tagihan;
    this.yang_di_bayarkan = yang_di_bayarkan;
    this.metode_pembayaran = metode_pembayaran;
  }

  static fromJson(json) {
    return new Transaksi({
      id: json.id,
      id_toko: json.id_toko,
      id_staf: json.id_staf,
      id_pelanggan: json.id_pelanggan,
      keuntungan: json.keuntungan,
      total_tagihan: json.total_tagihan,
      yang_di_bayarkan: json.yang_di_bayarkan,
      metode_pembayaran: json.metode_pembayaran,
    });
  }

  toJson() {
    return {
      id: this.id,
      id_toko: this.id_toko,
      id_staf: this.id_staf,
      id_pelanggan: this.id_pelanggan,
      keuntungan: this.keuntungan,
      total_tagihan: this.total_tagihan,
      yang_di_bayarkan: this.yang_di_bayarkan,
      metode_pembayaran: this.metode_pembayaran,
    };
  }
}