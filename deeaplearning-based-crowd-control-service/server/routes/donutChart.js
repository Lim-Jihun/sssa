const express = require('express');
const AnalyzeInfo = require('../model/analyze_info');
const router = express.Router();

// userID = 'user1';

// todo 1전시관부터 4전시관까지 한번에 받아와야함
// ! ID는 세션값에 있으니깐 ID값으로 전체 전시관 조회하기?k

router.get('/', (req, res) => {
    const userID = req.session.userId;
    AnalyzeInfo.getByExhb(userID, (err, results) => {
        console.log(req.body);
        console.log(req.session.userID);
        if(!userID) {
            return res.status(400).json({error: 'ID is null'});
        }
        if (err) {
            console.error('Error fetching analyze info:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        console.log(results);
        res.json(results);
        

        
    })
})

module.exports = router;