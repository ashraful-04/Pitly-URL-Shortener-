const { nanoid } = require('nanoid');
const URL = require('../models/url');

async function handleGenerateShortURL(req, res) {
    const body = req.body;
    if (!body.url) return res.status(400).json({ error: 'URL is requried.' });
    if (!body.url.startsWith('https://')) return res.status(400).json({error: 'URL must start with "https://"'})
    const shortID = nanoid(8);
    await URL.create({
        user: body.user,
        shortId: shortID,
        redirectURL: body.url,
        visitHistory: []
    })

    return res.json({ id: shortID });

}

async function handleTracking(req, res) {
    const user = req.params.user;
    if (!user) return res.sendStatus(404);
    const result = await URL.find({ user });

    const formattedResult = result.map((currentObject) => ({
       shortId: currentObject.shortId,
       redirectURL: currentObject.redirectURL,
       clicks: currentObject.visitHistory.length 
    }))
    
    return res.json({
        result: formattedResult
    })
}

module.exports = {
    handleGenerateShortURL,
    handleTracking
};