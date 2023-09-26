const express = require('express');
const app = express();

const gamesData = {
    count: 20,
    next: null,
    previous: null,
    results: [
        {
            title: "Fallout New Vegas",
            description: "Description for Fallout New Vegas",
            image: "https://imagor.network-xyz.com/unsafe/fit-in/846x700/https://cdn.media-xyz.com/media/%D1%84%D0%BE%D0%BB_gDQ6bMJ.png",
            release_year: "2010-10-19"
        },
        {
            title: "Resident Evil 3 Remake",
            description: "Description for Resident Evil 3 Remake",
            image: "https://st.overclockers.ru/images/soft/2019/12/03/re1.jpg",
            release_year: "2020-04-03"
        },
        // ... (для остальных игр)
    ]
};

app.get('/api/games/', (req, res) => {
    res.status(200).json(gamesData);
});

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});