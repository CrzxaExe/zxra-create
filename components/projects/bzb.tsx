"use client";

import { WeaponInput } from "@/lib/hooks";
import Image from "next/image";
import { DivWithHeader, SubSectionWithHeader } from "../components";
import { useState } from "react";

interface Link {
  github?: string;
  download?: string;
  discord?: string;
  whatsapp?: string;
  visit?: string;
}

interface Project {
  name: string;
  app: string;
  version: string;
  des: string;
  longDes: string;
  lang: Array<string>;
  framework: Array<string>;
  link: Link;
  img: string;
  status: number;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const weaponTraits: any = {
  artsword: "Can use elemental damage",
  breifcase: "Can use ranged and melee",
  century: "Deals AOE damage to target with small radius",
  dagger: "Every attack & skill, will steal target stamina",
  flute: "Use melody for casting",
  greatsword: "Has cooldown for every attack, while no cooldown deals 150% Atk",
  gun: "Use ranged attack, need ammo",
  hammer: "Every hit, deals additional damage 150%Target-HP (Max 150 Atk)",
  katana: "Deals 150% Atk while attacking Debuffed or Airbone target",
  lance: "Dashing ability",
  reaper:
    "Every attack deal AOE damage to front user, heal amount of health for every target",
  slayer:
    "Every hit, deals adiitional damage scaling with %User-HP + 20%Target-HP (Max 250 Atk) as Void damage, apply wither effect",
  spear: "Deals additional damage scaling by distance",
  staff: "Can casting magic",
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const weaponIcon: any = {
  artsword:
    "https://raw.githubusercontent.com/CrzxaExe/Better-Zxra-Bedrock/refs/heads/main/Resourcepack/textures/icon/artsword.png",
  breifcase:
    "https://raw.githubusercontent.com/CrzxaExe/Better-Zxra-Bedrock/refs/heads/main/Resourcepack/textures/icon/breifcase.png",
  century:
    "https://raw.githubusercontent.com/CrzxaExe/Better-Zxra-Bedrock/refs/heads/main/Resourcepack/textures/icon/century.png",
  dagger:
    "https://raw.githubusercontent.com/CrzxaExe/Better-Zxra-Bedrock/refs/heads/main/Resourcepack/textures/icon/dagger.png",
  flute:
    "https://raw.githubusercontent.com/CrzxaExe/Better-Zxra-Bedrock/refs/heads/main/Resourcepack/textures/icon/flute.png",
  greatsword:
    "https://raw.githubusercontent.com/CrzxaExe/Better-Zxra-Bedrock/refs/heads/main/Resourcepack/textures/icon/greatsword.png",
  gun: "https://raw.githubusercontent.com/CrzxaExe/Better-Zxra-Bedrock/refs/heads/main/Resourcepack/textures/icon/gun.png",
  hammer:
    "https://raw.githubusercontent.com/CrzxaExe/Better-Zxra-Bedrock/refs/heads/main/Resourcepack/textures/icon/hammer.png",
  katana:
    "https://raw.githubusercontent.com/CrzxaExe/Better-Zxra-Bedrock/refs/heads/main/Resourcepack/textures/icon/katana.png",
  lance:
    "https://raw.githubusercontent.com/CrzxaExe/Better-Zxra-Bedrock/refs/heads/main/Resourcepack/textures/icon/lance.png",
  reaper:
    "https://raw.githubusercontent.com/CrzxaExe/Better-Zxra-Bedrock/refs/heads/main/Resourcepack/textures/icon/reaper.png",
  slayer:
    "https://raw.githubusercontent.com/CrzxaExe/Better-Zxra-Bedrock/refs/heads/main/Resourcepack/textures/icon/slayer.png",
  spear:
    "https://raw.githubusercontent.com/CrzxaExe/Better-Zxra-Bedrock/refs/heads/main/Resourcepack/textures/icon/spear.png",
  staff:
    "https://raw.githubusercontent.com/CrzxaExe/Better-Zxra-Bedrock/refs/heads/main/Resourcepack/textures/icon/staff.png",
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const weaponRarity: any = {
  limited: "text-cyan-400",
  unique: "text-lime-400",
  epic: "text-purple-400",
  legend: "text-amber-400",
  rare: "text-slate-400",
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const weaponPasif: any = {
  chance: "While chance is trigger,",
  damage: "Damage increase,",
  debuff: "Apply debuff to target,",
  dash: "After dashing,",
  heal: "When healing target,",
  hit: "When attacking target,",
  hited: "When being hit,",
  kill: "When killing target,",
  reload: "While reloading,",
  shield: "While has shield,",
  skill: "Every time using skill,",
  stack: "Stack",
  status: "When target has",
  status_user: "When user has",
};

const BzbDisplay = ({
  project,
  weapon,
}: {
  project: Project;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  weapon: { weapons: Array<any> };
}) => {
  const thanks = [
    "FySena & Member Vanguard SMP",
    "Garmadon't (FB)",
    "Haris Adhi Saputra njir (FB)",
    "Nugraha tai (FB)",
    "Rahmad",
    "Omen (FB)",
  ];

  const [isMechanicsFull, setIsMechanicsFull] = useState(false);
  const [isWeaponFull, setIsWeaponFull] = useState(false);

  const wpn = WeaponInput("test");

  return (
    <>
      <section id="overview" className="mt-6">
        <div className="bg-[#202020] rounded-sm p-3">
          <h1 className="mb-1 text-lg md:text-xl lg:text-2xl font-bold text-teal-400">
            Overview
          </h1>
          <p className="text-sm md:text-base whitespace-pre-line w-full text-gray-400">
            {project.longDes}
          </p>

          <span className="mt-2 block text-sm lg:text-lg">
            Programming Languange: {project.lang.join(", ")}
          </span>
        </div>

        <div className="rounded-lg overflow-x-scroll overflow-y-hidden flex flex-row justify-start max-w-full max-h-[20rem] lg:max-h-[19rem] bg-[#202020] mt-4">
          <Image
            src="https://raw.githubusercontent.com/CrzxaExe/quick-bzb/refs/heads/master/img/render.png"
            alt="Better Zxra Bedrock"
            width={1920}
            height={1080}
            className="object-cover w-[47vw] lg:w-[23vw] aspect-video"
          />
        </div>
      </section>

      <section id="new" className="mt-5">
        <h1 className="text-teal-400 text-lg md:text-xl lg:text-2xl font-bold">
          What&apos;s New on v{project.version}?
        </h1>
      </section>

      <SubSectionWithHeader id="features" className="mt-5" name="Features">
        <div className="mt-3 bg-[#202020] px-4 w-full py-3">
          <DivWithHeader id="admin-panel" name="Admin Panel">
            <p>
              You can configure this addon feature and this can auto reload
              everytime you change the configure. Many sub feature in this. If
              you are lazy with custom command typing, you can use this panel to
              simply change anything
            </p>
          </DivWithHeader>
          <DivWithHeader id="death-loc" name="Death Location" className="mt-5">
            <p>
              Your death coodinates will be send via message, this feature are
              private and only user that death can see this message. This can
              set on/off in Admin Panel
            </p>
          </DivWithHeader>
          <DivWithHeader id="guild" name="Guild" className="mt-5">
            <p>
              You can create or join an available guild, you will gain benefits
              by joining guild. Guild will increase you Quest reward, and you
              can buy enchantment from this or maybe you can buy other rare item
              on this world. You can chat for guild user only by using +gd
              command.
            </p>
          </DivWithHeader>
          <DivWithHeader id="language" name="Language" className="mt-5">
            <p>
              For now, available language for this addon are 2 only.{" "}
              <span className="text-sky-400">Indonesia</span> and{" "}
              <span className="text-sky-400">English</span>
            </p>
          </DivWithHeader>

          <DivWithHeader id="mechanics" name="Mechanics" className="mt-5">
            <p>
              Bored with Minecraft&apos;s vanilla mechanics? We adding a few new
              mechanics to the game for increasing the playing experience. It
              will be your main focus because this will be your problem if you
              dont know whats are this mechanics, so be carefull and do it.
            </p>

            {isMechanicsFull && (
              <div className="mt-4 px-4 py-0.5">
                <p>Here all the mechanics you need to know:</p>

                <h2 className="text-lg lg:text-xl text-gray-400 mt-1">
                  Cooldown
                </h2>
                <p>
                  If you are using a weapon it will use this mechanics. Cooldown
                  are cannot be decrease for now, but you can only be clear for
                  some condition, cooldown will decrease by time. After you do
                  some activity such as running, swimming, attacking, attacked
                  and destroying you will ge Stamina Cooldown Status it basicly
                  will stop your stamina recovery. Importantly, cooldown will be
                  freeze if you get Silence Status.
                </p>
                <p>Here all the mechanics you need to know:</p>

                <h2 className="text-lg lg:text-xl text-gray-400 mt-1">Money</h2>
                <p>
                  Who dont know money?. It are a thing can be used to buy
                  anyting you want. This will be your economic feature. You can
                  buy some iten in Stats menu or you can find villager with
                  specific jobs for buying or selling items to them.
                </p>
                <h2 className="text-lg lg:text-xl text-gray-400 mt-1">
                  Reputation
                </h2>
                <p>
                  This is about respect to other player, villager and this game
                  again. Reputation can be increase by clearing a quest.
                  Inceasing this, will gain some benefits such as villager shop
                  will more cheaper, new quest with higher reputation will
                  appear and whats again yall, i forgor. If you die or killing
                  villager, your reputation will decrease by 20%
                </p>
                <h2 className="text-lg lg:text-xl text-gray-400 mt-2">
                  Stamina
                </h2>
                <p>
                  Yes, typical rpg game, we adding stamina mechanics to the
                  game. Stamina will going down if you are running, attacking,
                  destroying and swimming by some indicator. Stamina down can be
                  stop, decreasing or increasing with some conditions. If your
                  stamina are low than 10 you will get Slowness effect, and if
                  your stamina going low again to 0 your will get poison effect
                  and it will last forever until your heart are 1. You will
                  recovery the stamina when you idle for 3 sec, idle can be
                  walking or standing. Status %Tired will decrease your recovery
                  stamina. When you die, stamina are full again. Max stamina can
                  be increase by leveling up or read books that increase your
                  stamina.
                </p>
                <h2 className="text-lg lg:text-xl text-gray-400 mt-1">
                  Status
                </h2>
                <p>
                  This mechanics similar with entity effect from vanilla, but it
                  will more complex. It can be use by flexible way such as for
                  state, stack, debuff, buff, special condition, skill effect
                  and many more. And luckily it support for 3rd Party feature,
                  you can call scriptevent to add custom status to your target.
                  Status can change other feature behavior, that can be serious
                  problem if you dont know about this. It will be your main core
                  mechanic for Special Weapon user.
                </p>
                <h2 className="text-lg lg:text-xl text-gray-400 mt-1">
                  Thirst
                </h2>
                <p>
                  This mechanics will force you to drink water to survive. This
                  will decrease every time, the decrease value can be increase
                  by some condition. Do running or swimming, going to nether can
                  increase your thrist drop. If your thirst are low than 2 your
                  will get Nausea effect for unlimited duration until you drink
                  water again. It difference with stamina, you cannot increase
                  the max value. Max thirst of the player can increase to 110%,
                  but your will get some debuff if your thirst reach 105% or
                  more
                </p>
              </div>
            )}

            <button
              onClick={() => setIsMechanicsFull(!isMechanicsFull)}
              className="w-full bg-[#282828] rounded-lg mt-3 text-center py-2"
            >
              {isMechanicsFull ? "Show less" : "Show all Mechanics"}
            </button>
          </DivWithHeader>

          <DivWithHeader id="weapon" name="Weapons" className="mt-4">
            <p>
              There is 2 types of weapon, Normal Weapon and Special Weapon.
              Normal Weapon are weapons without special this, its like vanilla
              weapon that can be enchant, repair and many more vanilla weapon
              can do. Meanwhile, Special weapon are weapons with special
              behavior, has rarity, has trait, has pasif and skill, and the more
              important is it not have durability. But Special Weapon are rare
            </p>

            <h2 className="text-slate-500 text-lg font-bold mt-4">
              Special Weapon Rarity
            </h2>
            <ul className="inline-flex flex-row w-full gap-4">
              <li className={weaponRarity.limited}>Limited</li>
              <li className={weaponRarity.unique}>Unique</li>
              <li className={weaponRarity.epic}>Epic</li>
              <li className={weaponRarity.legend}>Legend</li>
              <li className={weaponRarity.rare}>Rare</li>
            </ul>
            <h2 className="text-slate-500 text-lg font-bold mt-6">
              All Special Weapon
            </h2>
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => wpn.setWeaponFilter(e.target.value)}
              className="block px-4 rounded-xs py-0.5 w-full max-w-[30rem] bg-[#323232] outline-hidden mt-2 text-base lg:text-lg text-slate-300"
            />
            <ul className="grid grid-cols-1 lg:grid-cols-3 gap-2 mt-4">
              {weapon?.weapons
                .sort((a, b) => a.displayName.localeCompare(b.displayName))
                /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
                .filter((e) => {
                  return wpn.weaponFilter === ""
                    ? true
                    : e.displayName
                        .toLowerCase()
                        .includes(wpn.weaponFilter.toLowerCase())
                    ? true
                    : false;
                })
                .slice(0, isWeaponFull ? weapon.weapons.length : 6)
                /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
                .map((e: any, i: number) => {
                  return (
                    <li
                      key={i}
                      className="bg-[#282828] px-3 py-2 text-sm relative hover:row-span-3 max-h-[10rem] hover:max-h-[100%] group/list transition-all ease-in-out duration-300"
                    >
                      <h1
                        className={`${
                          weaponRarity[e.rarity]
                        } font-valorant font-bold text-lg lg:text-xl mt-2 flex flex-row items-center gap-2`}
                      >
                        {weaponIcon[e.trait] && (
                          <Image
                            alt="Weapon icon"
                            src={weaponIcon[e.trait]}
                            width={20}
                            height={20}
                            className="grayscale-100"
                          />
                        )}
                        {e.displayName}
                      </h1>
                      <div className="mt-1 text-xs lg:text-sm">
                        <h1 className="-mt-1 block">
                          Type{" "}
                          <span>
                            {e.trait.charAt(0).toUpperCase() + e.trait.slice(1)}
                          </span>
                        </h1>
                        <span className="block -mt-0.5">
                          Atk&nbsp; : {e.atk}
                        </span>
                        <p className="block -mt-0.5">
                          Tags: {e.tags.join(", ")}
                        </p>
                        {e.ammo && (
                          <p className="block -mt-0.5">Ammo: {e.ammo}</p>
                        )}
                        <p className="mt-1 mb-3 block">
                          Trait: {weaponTraits[e.trait] || ""}
                        </p>

                        {e.pasif.length > 0 && (
                          <ul className="hidden group-hover/list:block">
                            Pasif: <br />
                            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                            {e.pasif.map((r: any, i: number) => {
                              return (
                                <li
                                  key={i}
                                  className="group/item cursor-pointer"
                                >
                                  <h1 className="text-purple-700 peer inline hover:block">
                                    {`[`}
                                    {r.name}
                                    {`]`}
                                  </h1>
                                  <p className="hidden peer-hover:block">
                                    {weaponPasif[r.type]} {r.effect}
                                  </p>
                                </li>
                              );
                            })}
                          </ul>
                        )}

                        {e.skill.length > 0 && (
                          <ul className="mt-3 hidden group-hover/list:block">
                            Skill: <br />
                            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                            {e.skill.map((r: any, i: number) => {
                              return (
                                <li key={i} className="group cursor-pointer">
                                  <h1 className="text-amber-400">
                                    {`[`}
                                    {r.skill}
                                    {`]`}
                                  </h1>
                                  <p className="hidden group-hover:block">
                                    CD {r.cooldown}, Stamina {r.stamina},
                                    Condition {r.condition}
                                    <br /> <br />
                                    {r.effect}
                                  </p>
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </div>
                    </li>
                  );
                })}
            </ul>

            <button
              onClick={() => setIsWeaponFull(!isWeaponFull)}
              className="w-full bg-[#282828] rounded-lg mt-3 text-center py-2"
            >
              {isWeaponFull ? "Show less" : "Show full"}
            </button>
          </DivWithHeader>
        </div>
      </SubSectionWithHeader>

      <SubSectionWithHeader id="about" className="mt-9" name="About">
        <p className="text-sm lg:text-base whitespace-pre-line w-full block">
          This addon is still in development, we will update lively for fixing
          bugs and increasing this performance. We also adding 3rd party and own
          module to use this addon function in your own world.{" "}
          <a href="/projects/zxralib" className="text-cyan-500 hover:underline">
            Here
          </a>{" "}
          you can download the module.
          <br />
          <br />
          Thanks for using this addon, and special thanks for:
          <br />
        </p>
        <ul className="list-disc ml-5">
          {thanks.map((e, i) => (
            <li key={i} className="text-sm lg:text-base">
              {e}
            </li>
          ))}
        </ul>
        <p className="text-sm lg:text-base whitespace-pre-line w-full block">
          <br />
          For helping us and contributing for this addon development and
          testing.
          <br /> We will always hear your feedback and suggestion for this
          addon. Thanks -Zxra
        </p>
      </SubSectionWithHeader>
    </>
  );
};

export { BzbDisplay };
