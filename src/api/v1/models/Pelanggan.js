class Pelanggan {
  id;
  nama;
  alamat;
  phoneNumber;

  constructor({ id, nama, alamat, phoneNumber }) {
    this.id = id;
    this.nama = nama;
    this.alamat = alamat;
    this.phoneNumber = phoneNumber;
  }

  static fromJson(json) {
    return new Pelanggan({
      id: json.id,
      nama: json.nama,
      alamat: json.alamat,
      phoneNumber: json.phoneNumber,
    });
  }

  toJson() {
    return {
      id: this.id,
      nama: this.nama,
      alamat: this.alamat,
      phoneNumber: this.phoneNumber,
    };
  }
}
