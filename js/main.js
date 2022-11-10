// aos
AOS.init();

//vuejs
const { createApp } = Vue;

const myFooter = {
  template: `
    <footer class="p-5 bg-gray-200 text-center">
      <p>
        copyright &copy; 2022 - built with <i class="fa-solid fa-heart"></i> by
        Dodi
      </p>
    </footer>
    `,
};

const Navbar = {
  props: ["title"],
  template: `
    <header
      class="bg-white p-5 shadow rounded-xl w-full fixed top-0 left-0 right-0 z-10"
    >
      <div class="container-h-article">
        <div class="logo font-bold text-2xl text-green-800 box-border">
          <a href="/pages/artikel.html" class="mr-5 p-3">
            <i class="fa-solid fa-arrow-left"></i>
          </a>
        </div>
        <div class="text-center w-full">
          <h1 class="text-xl font-bold">
            {{title}}
          </h1>
        </div>
      </div>
    </header>
    `,
};

const ActionTools = {
  props: ["url_download", "url_video"],
  template: `
    <hr class="mb-3" />
    <div class="action mt-5 flex justify-between items-center flex-col sm:flex-row gap-5">
        <a
            :href="url_download"
            class="px-4 py-3 bg-green-600 shadow-md shadow-emerald-400 rounded-lg text-white font-semibold"
            ><i class="fa-solid fa-download mr-2"></i> Download Artikel</a
        >
        <a
            :href="url_video"
            class="px-4 py-3 text-green-600 shadow-md shadow-emerald-400 rounded-lg bg-white border-2 border-green-600 font-semibold"
            ><i class="fa-solid fa-video mr-2"></i> tonton materi pendukung</a
        >
    </div>
    `,
};

createApp({
  data() {
    return {};
  },
  components: {
    "my-footer": myFooter,
    "action-tools": ActionTools,
    "my-navbar": Navbar,
  },
}).mount("#app");
