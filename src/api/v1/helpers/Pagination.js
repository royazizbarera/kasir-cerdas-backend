

class Pagination {
  total;
  currPage;
  prevPage;
  nextPage;
  maxPage;
  constructor({
    total,
    currPage,
    allData = null,
  }) {
    this.total = total;
    this.currPage = currPage;
    this.prevPage = currPage - 1;
    this.nextPage = currPage + 1;
    var maxPage = 0;
    if(allData) maxPage = Math.ceil(allData / total);
    this.maxPage = maxPage;
  }

  static fromJson(json) {
    return new Pagination({
      total: json.total,
      allData: json.allData || null,
      currPage: json.currPage,
    });
  }

  toJson() {
    return {
      total: this.total,
      currPage: this.currPage,
      prevPage: this.prevPage,
      nextPage: this.nextPage,
      maxPage: this.maxPage,
    };
  }
}