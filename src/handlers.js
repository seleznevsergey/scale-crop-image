function createHandlers({ axios, sharp }) {
  async function getImg(req, res) {
    const { href, x, y, w, h, s } = req.query;
    try {
      const { data } = await axios({ url: href, responseType: 'arraybuffer' });
      const outImage = await sharp(Buffer.from(data))
        .extract({ left: x, top: y, width: w, height: h })
        .resize(Math.round(w * s), Math.round(h * s))
        .png()
        .toBuffer();
      res.setHeader('Content-Type', 'image/png');
      return res.status(200).send(outImage);
    } catch(e) {
      console.error(e.message);
      return res.status(500).send(e.message);
    }
  }
  return {
    getImg,
  };
}

module.exports = createHandlers;
