const path = require('path');
const fs = require('fs');

module.exports = {
    getImages: () => {
        const picsPath = path.join(path.dirname(require.main.path), '/src/public/assets/img/fullsize');

        let pics = [];

        fs.readdirSync(picsPath).forEach((pic) => {
            pics.push(path.join('/assets/img/fullsize/', pic));
        });

        return pics.sort();
    }
}