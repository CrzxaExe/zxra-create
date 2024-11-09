import { Card } from "./card";

const apps = [
  {
    name: "FbVid",
    href: "/app/fbvid",
    img: "https://raw.githubusercontent.com/CrzxaExe/CrzxaExe/refs/heads/main/asset/Tak%20berjudul24_20241106223951.png",
  },
  { name: "Gemini AI", href: "/app/gemini" },
];

const AppList = () => {
  return (
    <div className={`block mb-3`}>
      <ul
        className={`grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-8 gap-2.5`}
      >
        {apps
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((e, i) => {
            return (
              <li className="aspect-square " key={i}>
                <Card data={e}></Card>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default AppList;
