class NewsController {
  // [GET ] /news
  index(req, res) {
    res.render("news");
  }

  // [GET] /news/:plug
  detail(req, res) {
    res.send("Trang chi tiết !");
  }
}

module.exports = new NewsController();
