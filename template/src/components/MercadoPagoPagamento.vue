<script setup lang="ts">
const mp = new MercadoPago("YOUR_PUBLIC_KEY", {
  locale: "pt",
});
const bricksBuilder = mp.bricks();
const renderCardPaymentBrick = async (bricksBuilder) => {
  const settings = {
    initialization: {
      amount: 100, // valor total a ser pago
    },
    customization: {
      paymentMethods:{
        creditCard: 'all',
        bankTransfer: ['pix']
      },
      visual: {
        style: {
          theme: "default", // | 'dark' | 'bootstrap' | 'flat'
        },
      },
    },
    callbacks: {
      onReady: () => {
        // callback chamado quando o Brick estiver pronto
      },
      onSubmit: (cardFormData) => {
        //  callback chamado o usuário clicar no botão de submissão dos dados
        //  exemplo de envio dos dados coletados pelo Brick para seu servidor
        return new Promise((resolve, reject) => {
          fetch("http://localhost/3000/process_payment", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(cardFormData),
          })
            .then((response) => {
              // receber o resultado do pagamento
              resolve();
            })
            .catch((error) => {
              // lidar com a resposta de erro ao tentar criar o pagamento
              reject();
            });
        });
      },
      onError: (error) => {
        // callback chamado para todos os casos de erro do Brick
      },
    },
  };
  const cardPaymentBrickController = await bricksBuilder.create(
    "cardPayment",
    "cardPaymentBrick_container",
    settings
  );
};
renderCardPaymentBrick(bricksBuilder);
</script>
<template>
  <div class="mt-20">
    <div class="text-5xl">Pagamento Mercado Pago</div>
    <div id="cardPaymentBrick_container" ></div>
  </div>
</template>
<style></style>
