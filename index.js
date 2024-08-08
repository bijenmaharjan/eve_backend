import express from "express";

const app = express();
const port = 5000;

console.log(app);

const array = [1, 2, 3, 4, 5];
let total = 0;

for (let i = 0; i < array.length; i++) {
  total += array[i];
}

console.log(total);

app.get('/', (req, res) => {
  return res.status(200).json({
    data: "lios",
    total
  });
});



app.listen(port, () => {
  console.log('connected')
})