<script setup lang="ts">
let price = 250;
</script>

<template>
  <div>
    <div
      class="hack-width before:rotate-2 before:bg-gradient-to-br before:-z-10 before:-top-20 before:from-indigo-50 before:origin-top-left before:to-violet-200 before:absolute before:content-['hello']"
    >
      <header class="text-center text-2xl mt-10 font-['Zeyada']">
        Papelaria Rascunho
      </header>
      <div class="max-w-6xl mx-auto px-10 py-20 md:py-64">
        <div
          class="flex flex-col md:flex-row md:space-x-10 space-y-20 md:space-y-0"
        >
          <div class="w-1/2">
            <h1 class="text-5xl text-indigo-900 font-semibold">
              Canetas Pincel Marcadoras Profissionais
            </h1>
            <p class="text-md text-black font-regular">
              Conjunto Pasco 5M 6 Cores Intensas
            </p>
          </div>
          <div class="md:w-1/3">
            <div>
              <img class="bg-none" src="/img/canetas1.png" alt="canetas" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="max-w-6xl mx-auto mb-20">
      <h2 class="text-4xl text-indigo-900 font-semibold">
        Aderente em diversas superficies
      </h2>
      <p class="text-md text-black font-regular">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
        culpa fugiat ipsam quos fugit a, pariatur explicabo vitae vero nulla
        asperiores corrupti sint nesciunt tempore est quia ipsum obcaecati
        possimus.
      </p>
      <div>
        <ul class="flex space-4xl justify-between py-10">
          <li
            class="text-indigo-500 border border-indigo-200 p-2 rounded cursor-default"
          >
            Parede
          </li>
          <li
            class="text-indigo-500 border border-indigo-200 p-2 rounded cursor-default"
          >
            Plástico
          </li>
          <li
            class="text-indigo-500 border border-indigo-200 p-2 rounded cursor-default"
          >
            Madeira
          </li>
          <li
            class="text-indigo-500 border border-indigo-200 p-2 rounded cursor-default"
          >
            Tecido
          </li>
          <li
            class="text-indigo-500 border border-indigo-200 p-2 rounded cursor-default"
          >
            Couro
          </li>
          <li
            class="text-indigo-500 border border-indigo-200 p-2 rounded cursor-default"
          >
            Vidro
          </li>
        </ul>
      </div>
    </div>
    <div class="max-w-6xl mx-auto mb-20">
      <h2 class="text-4xl text-indigo-900 font-semibold">Cores Vibrantes</h2>
      <p class="text-md text-black font-regular">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
        culpa fugiat ipsam quos fugit a, pariatur explicabo vitae vero nulla
        asperiores corrupti sint nesciunt tempore est quia ipsum obcaecati
        possimus.
      </p>
    </div>
    <div class="max-w-6xl mx-auto mb-20">
      <div>
        <div
          class="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 items-stretch"
        >
          <div
            class="bg-cover bg-center bg-[url('/img/arte3.jfif')] rounded"
          ></div>
          <div class="md:col-span-2 md:row-span-2">
            <img
              class="block object-cover rounded"
              src="/img/arte2.webp"
              alt="principal"
            />
          </div>
          <div
            class="md:row-span-2 bg-cover bg-center bg-[url('/img/arte1.jfif')] rounded"
          ></div>
          <div
            class="bg-cover bg-center bg-[url('/img/arte4.jpg')] rounded"
          ></div>
        </div>
      </div>
    </div>
    <div class="max-w-6xl mx-auto mb-20">
      <h2 class="text-4xl text-indigo-900 font-semibold">E Muito Mais...</h2>
      <p class="mb-8">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit,
        ducimus atque molestiae beatae quaerat accusantium
      </p>
      <div
        class="flex flex-col md:flex-row md:space-x-10 space-y-20 md:space-y-0"
      >
        <div class="w-1/2">
          <div class="mb-5">
            <h3 class="text-2xl text-indigo-900 font-medium">Title 1</h3>
            <p class="text-md text-black font-regular">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Asperiores, ad quis vel obcaecati exercitationem eligendi est
              laudantium quasi, consectetur odit corrupti numquam saepe! Aperiam
              delectus iste nisi voluptas quam asperiores?
            </p>
          </div>
          <div class="mb-5">
            <h3 class="text-2xl text-indigo-900 font-medium">Title 2</h3>
            <p class="text-md text-black font-regular">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
              eum ad voluptate. Consequuntur itaque sapiente in labore deserunt,
              possimus optio similique vel cupiditate doloremque. Quibusdam
              laboriosam libero eligendi sapiente dignissimos.
            </p>
          </div>
        </div>
        <div class="w-1/2">
          <div class="mb-5">
            <h3 class="text-2xl text-indigo-900 font-medium">Title 3</h3>
            <p class="text-md text-black font-regular">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              ipsam, maiores nostrum facere numquam earum perspiciatis
              reiciendis tenetur ducimus enim cupiditate cumque. Qui amet in
              quas deserunt sint, consectetur numquam.
            </p>
          </div>
          <div class="mb-5">
            <h3 class="text-2xl text-indigo-900 font-medium">Title 4</h3>
            <p class="text-md text-black font-regular">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis,
              suscipit dolores veniam facere quam animi commodi, magnam alias,
              nemo odio itaque. Consequuntur autem delectus modi esse eius
              alias, ut corrupti.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="buy-content bg-gradient-to-br from-indigo-50 to-violet-200">
      <div
        class="flex flex-col md:flex-row md:space-x-10 space-y-20 md:space-y-0 py-20"
      >
        <div class="md:w-1/2">
          <div class="flex flex-col justify-center items-center">
            <h1 class="text-5xl text-indigo-900 font-semibold mb-10">
              Compre Já!
            </h1>
            <img class="bg-none" src="/img/produto.png" alt="canetas" />
          </div>
        </div>
        <div class="w-1/2 flex flex-col justify-between">
          <div class="">
            <h2 class="text-4xl text-indigo-900 font-medium mb-3">
              Conjunto com 20 Cores
            </h2>
            <h3 class="text-2xl text-indigo-900 font-regular">Conjunto 5M</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
              quo vitae omnis itaque voluptatibus dolor. Ab libero, optio
              distinctio quas facere repellat nemo autem provident
              exercitationem sed iusto aut hic.
            </p>
          </div>
          <div class="flex">
            <div class="mr-40 md:mr-60">
              <p class="text-indigo-900 font-regular">
                10x<span class="text-indigo-900 text-3xl font-semibold"
                  >R${{ price / 10 }},00
                </span>
              </p>
              <p class="text-indigo-900 font-regular">
                Total:<span class="text-indigo-900 text-2xl font-regular">
                  R${{ price }},00
                </span>
              </p>
            </div>
            <div class="flex justify-center align-center">
              <button
                class="bg-indigo-900 text-3xl rounded-lg text-white border p-2"
              >
                Comparar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer class="bg-indigo-900 py-5">
      <div class="flex justify-between align-center">
        <p class="text-white ml-5">Papelaria rascunho(cnpj)</p>
        <p class="text-white mr-5">Como podemos ajudar?</p>
      </div>
    </footer>
  </div>
</template>
<style scoped>
.hack-width::before {
  width: 100%;
  height: 500px;
}
.buy-content {
  width: 100%;
}
</style>
