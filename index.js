//khởi tạo package.json $ npm init 
//thêm thư viện express $ npm install express
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World');
});

// Lắng nghe cổng
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
