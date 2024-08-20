const BarangJasa = {
  DEFAULT: 0,
  BARANG: 0,
  JASA: 1,
};

const ShowToko = {
  DEFAULT: 0,
  TOKO_DAN_KATALOG: 0,
  TIDAK_TAMPIL_TOKO_DAN_KATALOG: 1,
  BARANG_DI_FAVORIT: 2,
  TIDAK_TAMPIL_DI_KATALOG: 3,
};

const TipeDiskon = {
  DEFAULT: 0,
  PERSEN: 0,
  RUPIAH: 1,
};

class Produk {
  kode_barang;
  nama_barang;
  barang_jasa;
  show_toko;
  harga_jual;
  harga_beli;
  minimum_stok;
  stok;
  tipe_diskon;
  diskon;
  berat_dan_satuan;
  berat;
  letak_rak;
  keterangan;
  kategori;
  tipe_barang;

  constructor({
    kode_barang,
    nama_barang,
    barang_jasa,
    show_toko = ShowToko.DEFAULT,
    harga_jual,
    harga_beli,

    minimum_stok = 0,

    stok,

    tipe_diskon = null,
    diskon = null,
    berat_dan_satuan = null,
    berat = null,
    letak_rak = null,
    keterangan = null,
    kategori,
    tipe_barang = "Default",
  }) {
    kode_barang = kode_barang;
    nama_barang = nama_barang;
    barang_jasa = barang_jasa;
    show_toko = show_toko;
    harga_jual = harga_jual;
    harga_beli = harga_beli;
    minimum_stok = minimum_stok;
    stok = stok;
    tipe_diskon = tipe_diskon;
    diskon = diskon;
    berat_dan_satuan = berat_dan_satuan;
    berat = berat;
    letak_rak = letak_rak;
    keterangan = keterangan;
    kategori = kategori;
    tipe_barang = tipe_barang;
  }

  static fromJson(json) {
    return new Produk({
      kode_barang: json.kode_barang,
      nama_barang: json.nama_barang,
      barang_jasa: json.barang_jasa,
      show_toko: json.show_toko,
      harga_jual: json.harga_jual,
      harga_beli: json.harga_beli,
      minimum_stok: json.minimum_stok,
      stok: json.stok,
      tipe_diskon: json.tipe_diskon,
      diskon: json.diskon,
      berat_dan_satuan: json.berat_dan_satuan,
      berat: json.berat,
      letak_rak: json.letak_rak,
      keterangan: json.keterangan,
      kategori: json.kategori,
      tipe_barang: json.tipe_barang,
    });
  }

  toJson() {
    return {
      kode_barang: this.kode_barang,
      nama_barang: this.nama_barang,
      barang_jasa: this.barang_jasa,
      show_toko: this.show_toko,
      harga_jual: this.harga_jual,
      harga_beli: this.harga_beli,
      minimum_stok: this.minimum_stok,
      stok: this.stok,
      tipe_diskon: this.tipe_diskon,
      diskon: this.diskon,
      berat_dan_satuan: this.berat_dan_satuan,
      berat: this.berat,
      letak_rak: this.letak_rak,
      keterangan: this.keterangan,
      kategori: this.kategori,
      tipe_barang: this.tipe_barang,
    };
  }
}
