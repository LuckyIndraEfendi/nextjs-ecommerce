import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const banners = [
  {
    id: 1,
    title: "Banner 1",
    img: "banner-1.webp",
  },
  {
    id: 2,
    title: "Banner 2",
    img: "banner-2.webp",
  },
  {
    id: 3,
    title: "Banner 3",
    img: "banner-3.webp",
  },
  {
    id: 4,
    title: "Banner 4",
    img: "banner-4.webp",
  },
  {
    id: 5,
    title: "Banner 5",
    img: "banner-5.webp",
  },
  {
    id: 6,
    title: "Banner 6",
    img: "banner-6.webp",
  },
  {
    id: 7,
    title: "Banner 7",
    img: "banner-7.webp",
  },
  {
    id: 8,
    title: "Banner 8",
    img: "banner-8.webp",
  },
  {
    id: 9,
    title: "Banner 9",
    img: "banner-9.webp",
  },
  {
    id: 10,
    title: "Banner 10",
    img: "banner-10.webp",
  },
];

export const homeFeeds = [
  {
    id: 1,
    title: "Valorant",
    img: "ID_Tile-Valorant.jpg",
  },
  {
    id: 2,
    title: "PUBG Mobile UC Vouchers",
    img: "pubg_ccid_tile.jpg",
  },
  {
    id: 3,
    title: "Free Fire",
    img: "ID_FF-tile-cb-sd100k.jpg",
  },
  {
    id: 4,
    title: "Clash of Clans",
    img: "Clash-of-Clans-Codacash.jpg",
  },
  {
    id: 5,
    title: "Call of Duty: Mobile",
    img: "ID_CODM-100k-cb-tile.jpg",
  },
  {
    id: 6,
    title: "Super Sus",
    img: "ID_ccTile-Supersus.jpg",
  },
  {
    id: 7,
    title: "Mobile Legends",
    img: "mobile-legends.webp",
  },
  {
    id: 8,
    title: "League of Legends: Wild Rift",
    img: "ID_ccTile-WildRift.jpg",
  },
  {
    id: 9,
    title: "EA SPORTS FC Mobile",
    img: "fc_mobile_tile.jpg",
  },
  {
    id: 9,
    title: "Steam Wallet Code",
    img: "ID_Steam-8k-disc-tile.jpg",
  },
  {
    id: 10,
    title: "Free Fire Max",
    img: "ID_FFMAX-tile-cb-sd100k.jpg",
  },
  {
    id: 11,
    title: "League of Legends",
    img: "ID_LoL_44k-disc_tile.jpg",
  },
];
