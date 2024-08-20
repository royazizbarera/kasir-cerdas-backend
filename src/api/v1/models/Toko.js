class Toko {
  id;
  nama_toko;
  alamat;
  email;
  phoneNumber;
  url_logo;

  constructor({ id, nama_toko, alamat, email, phoneNumber, url_logo = null }) {
    this.id = id;
    this.nama_toko = nama_toko;
    this.alamat = alamat;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.url_logo = url_logo;
  }

  static fromJson(json) {
    return new Toko({
      id: json.id,
      nama_toko: json.nama_toko,
      alamat: json.alamat,
      email: json.email,
      phoneNumber: json.phoneNumber,
      url_logo: json.url_logo,
    });
  }

  toJson() {
    return {
      id: this.id,
      nama_toko: this.nama_toko,
      alamat: this.alamat,
      email: this.email,
      phoneNumber: this.phoneNumber,
      url_logo: this.url_logo,
    };
  }
}
