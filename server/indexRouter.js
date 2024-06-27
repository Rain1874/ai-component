/*
 * @Descripttion:
 * @version:
 * @Author: wangmin
 * @Date: 2021-11-04 09:43:22
 * @LastEditors: wangmin
 * @LastEditTime: 2021-11-04 09:43:23
 */
const express = require('express');

const router = express.Router();

router.all('*', (req, res) => {
  res.render('index.html', {});
});
module.exports = router;
