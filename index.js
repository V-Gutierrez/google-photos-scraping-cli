const GooglePhotosAlbum = require('google-photos-album-image-url-fetch')
const fs = require('fs')

const url = process.argv[2]

const main = async () => {
  const re = await GooglePhotosAlbum.fetchImageUrls(url)

  fs.writeFileSync('result.json', JSON.stringify(re, null, 2))
}
main().catch(er => console.error(er))