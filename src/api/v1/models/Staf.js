

class Staf {
  constructor({
    id,
    id_toko,
    id_user,
    role,
  }) {
    this.id = id;
    this.id_toko = id_toko;
    this.id_user = id_user;
    this.role = role;
  }

  static fromJson(json) {
    return new Staf({
      id: json.id,
      id_toko: json.id_toko,
      id_user: json.id_user,
      role: json.role,
    });
  }

  toJson() {
    return {
      id: this.id,
      id_toko: this.id_toko,
      id_user: this.id_user,
      role: this.role,
    };
  }
}