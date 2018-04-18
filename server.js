const express = require('express');
const useragent = require('express-useragent');

const app = express();

app.use((req, rex, next) => {
    const userAgent = useragent.parse(req.headers['user-agent']);
    req.userAgent = userAgent;
    next();
});

app.get('/', (req, res) => {
    const { isTablet, isMobile } = req.userAgent;
    if (isMobile) {
        return res.sendFile(__dirname + '/build/touch.html');
    } else if (isTablet) {
        return res.sendFile(__dirname + '/build/tablet.html');
    }
    res.sendFile(__dirname + '/build/desktop.html');
});

app.use(express.static('build'))

const PORT = 8088;

app.listen(PORT, () => {
    console.log(`app listening at port: ${PORT}`);
});
