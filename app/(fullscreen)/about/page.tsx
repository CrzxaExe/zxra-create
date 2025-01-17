import React from "react";
import mks from "@/package.json";
import { metadata } from "@/app/layout";

const Page = () => {
  metadata.title = "Tentang";

  return (
    <div className="max-w-screen-2xl mx-auto mb-[2rem] pb-[3rem]">
      <section className="mb-5">
        <h1 className="text-4xl text-teal-500 font-bold">Zxra</h1>
        <span className="text-slate-300">Eazier your life with us</span>

        <p className="mt-6 text-slate-200 text-justify">
          Sekelompok orang random yang memiliki kemampuan yang sudah diluar
          nalar dan memiliki tujuan yang sama yaitu memudahkan orang lain dengan
          karya yang kita hasilkan dengan lebih menekan pada bidang IT serta
          kami juga lebih sering bereksperimen dengan karya kami yang pada
          akhirnya akan lebih nguwawor lagi hasilnya.
          <br />
          <br />
          Awalnya kami hanya ingin membuat proyek iseng untuk memudahkan kami
          saja namun perlahan lahan kami mulai mempamerkan dan mempiklikasikan
          karya kami entah itu hanya web biasa maupun sampai sebuah automisasi
          pada platform tertentu.
        </p>
      </section>

      <section className="mt-7">
        <h1 className="text-slate-300 text-2xl font-semibold">Timeline</h1>

        <div className="pt-5 border-0 border-l-[4px] border-teal-500 ml-3 pl-5">
          <span className="text-xl text-teal-400 mb-2">12 Juli 2021</span>
          <p className="text-sm text-slate-200 pl-1">
            Terciptanya kelompok ini
          </p>
        </div>
        <div className="pt-5 border-0 border-l-[4px] border-teal-500 ml-3 pl-5">
          <span className="text-xl text-teal-400 mb-2">3 Desember 2022</span>
          <p className="text-sm text-slate-200 pl-1">Logo Zxra dibuat</p>
        </div>
      </section>
      <section className="mt-7">
        <h1 className="text-slate-300 text-2xl font-semibold">
          Spesialitas Kami
        </h1>
        <p className="mt-6 text-slate-200 text-justify">
          Kami membuat proyek yang lebih berhubungan dengan automisasi dan juga
          website. Namun kami juga sering memebuat Plugin atau Mod untuk
          beberapa game yang kami main kan, seperti contohnya Minecraft,
          Mindustry dan lain sebagainya. Semua proyek yang kami buat merupakan
          projek open source dan kami namun jika ingin menggunakan repo kami
          tolong untuk tambahkan kami pada credits kalian.
        </p>
      </section>

      <section className="mt-20 mb-5">
        <h1 className="text-4xl text-teal-400 font-bold">Create Zx</h1>
        <span className="text-slate-300">Zxra Super App</span>

        <div className="mt-7">
          <h1 className="text-slate-200 text-2xl font-semibold">
            Bahasa Pemrograman
          </h1>
          <p className="mt-3 mb-3 text-slate-100 text-justify">
            Web App ini menggunakan beberapa bahasa pemrograman seperti
            TypeScript, JavaScript Serta Babel
          </p>

          <h1 className="text-slate-200 text-2xl font-semibold">Integrasi</h1>
          <p className="mt-3 text-slate-200 text-justify">
            Web App ini hampir terintegrasi ke semua layanan yang kami sediakan
            seperti contoh:
          </p>
          <ul className="mt-1 list-item mb-3">
            <li className="before:content-['>'] before:pr-2 pl-2 font-thin">
              Cz DB
            </li>
            <li className="before:content-['>'] before:pr-2 pl-2 font-thin">
              Zxra Elysia API
            </li>
            <li className="before:content-['>'] before:pr-2 pl-2 font-thin">
              Zxra Rest API
            </li>
          </ul>

          <h1 className="text-slate-500 text-2xl font-semibold">Lib</h1>
          <p className="mt-3 text-slate-200 text-justify">
            Module dan library yang kami gunakan untuk membangun web app ini
            sampai terlihat seperti ini yaitu:
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div>
              <p className="mt-3 text-slate-200 text-justify">Dependensi:</p>
              <ul className="mt-1 list-item">
                {Object.keys(mks.dependencies).map((a, i) => (
                  <li
                    className="before:content-['>'] before:pr-2 pl-2 font-thin"
                    key={i}
                  >
                    {a}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mt-3 text-slate-200 text-justify">
                Dev Dependensi:
              </p>
              <ul className="mt-1 list-item">
                {Object.keys(mks.devDependencies).map((a, i) => (
                  <li
                    className="before:content-['>'] before:pr-2 pl-2 font-thin"
                    key={i}
                  >
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
