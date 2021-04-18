const fetch = require('node-fetch')
const fs = require('fs')

exports.getBase64 = getBase64 = async (url) => {
    const response = await fetch(url, { headers: { 'User-Agent': 'okhttp/4.5.0' } });
    if (!response.ok) throw new Error(`unexpected response ${response.statusText}`);
    const buffer = await response.buffer();
    const videoBase64 = `data:${response.headers.get('content-type')};base64,` + buffer.toString('base64');
    if (buffer)
        return videoBase64;
};

exports.getBuffer = getBuffer = async (url) => {
	const res = await fetch(url, {headers: { 'User-Agent': 'okhttp/4.5.0'}, method: 'GET' })
	const anu = fs.readFileSync('./src/emror.jpg')
	if (!res.ok) return { type: 'image/jpeg', result: anu }
	const buff = await res.buffer()
	if (buff)
		return { type: res.headers.get('content-type'), result: buff }
}

exports.fetchJson = fetchJson = (url, options) => new Promise(async (resolve, reject) => {
    fetch(url, options)
        .then(response => response.json())
        .then(json => {
            // console.log(json)
            resolve(json)
        })
        .catch((err) => {
            reject(err)
        })
})


exports.fetchText = fetchText = (url, options) => new Promise(async (resolve, reject) => {
    fetch(url, options)
        .then(response => response.text())
        .then(text => {
            // console.log(text)
            resolve(text)
        })
        .catch((err) => {
            reject(err)
        })
})
exports.modStick = (media, client, mek, from) => {
	out = getRandom('.webp')
	try {
		console.log(media)
		spawn('webpmux', ['-set','exif', './src/dat/ha_jadi.exif', media, '-o', out])
		.on('exit', () => {
			client.sendMessage(from, fs.readFileSync(out), 'stickerMessage', {quoted: mek})
			fs.unlinkSync(out)
			fs.unlinkSync(media)
		})
	} catch (e) {
		console.log(e)
		client.sendMessage(from, 'Terjadi keslahan', 'conversation', { quoted: mek })
		fs.unlinkSync(media)
	}
}
//exports.getBase64 = getBase64;
