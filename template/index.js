import mercadopago from "mercadopago";
import express from "express";


const app = express();

app.get("/test", (req, res) => {
  res.send("Hello");
});

mercadopago.configurations.setAccessToken("YOUR_ACCESS_TOKEN");

app.post("/process_payment", (req, res) => {
  mercadopago.payment
    .save(req.body)
    .then(function (response) {
      const { status, status_detail, id } = response.body;
      res.status(response.status).json({ status, status_detail, id });
    })
    .catch(function (error) {
      console.error(error);
    });
});

app.listen(3000, ()=>{
  console.log('App funcionando')
})
