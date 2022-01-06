import CoffeeYinYang from "../../assets/images/Foods/Coffee/CoffeeYinYang.jpg";
import BreezeCoffee from "../../assets/images/Foods/Coffee/BreezeCoffee.jpg";
import KopiV6 from "../../assets/images/Foods/Coffee/KopiV6.jpg";
import MilkCoffeeAM from "../../assets/images/Foods/Coffee/MilkCoffeeAM.jpg";
import VietnamDrip from "../../assets/images/Foods/Coffee/VietnamDrip.jpg";
import KopiKampoeng from "../../assets/images/Foods/Coffee/KopiKampoeng.jpg";

import LemonTea from "../../assets/images/Foods/Tea/LemonTea.jpg";
import TehKayuManis from "../../assets/images/Foods/Tea/TehKayuManis.jpg";

import ShishaStandard from "../../assets/images/Foods/Shisha/ShishaStandard.jpg";
import ShishaSpecial from "../../assets/images/Foods/Shisha/ShishaSpecial.jpg";

import NasiGorengKampung from "../../assets/images/Foods/Maeman/NasiGorengKampung.jpg";
import NasiKikilPedas from "../../assets/images/Foods/Maeman/NasiKikilPedas.jpg";
import NasiTelorGeprek from "../../assets/images/Foods/Maeman/NasiTelorGeprek.jpg";
import NasiWaderSambel from "../../assets/images/Foods/Maeman/NasiWaderSambel.jpg";
import NasiAyamGeprek from "../../assets/images/Foods/Maeman/NasiAyamGeprek.jpg";

import Spaghetti from "../../assets/images/Foods/Cemilan/Spaghetti.jpg";
import BaksoBakarMalang from "../../assets/images/Foods/Cemilan/BaksoBakarMalang.jpg";
import PisangBakar from "../../assets/images/Foods/Cemilan/PisangBakar.jpg";
import PisangCrispy from "../../assets/images/Foods/Cemilan/PisangCrispy.jpg";
import PotatoWedges from "../../assets/images/Foods/Cemilan/PotatoWedges.jpg";
import RotiArab from "../../assets/images/Foods/Cemilan/RotiArab.jpg";
import RotiBakar from "../../assets/images/Foods/Cemilan/RotiBakar.jpg";

import BrowsugarLatte from "../../assets/images/Foods/Milk/BrownsugarLatte.jpg";
import ChocoCappuccino from "../../assets/images/Foods/Milk/ChocoCappuccino.jpg";
import FreshMilk from "../../assets/images/Foods/Milk/FreshMilk.jpg";
import HoneyLatte from "../../assets/images/Foods/Milk/HoneyLatte.jpg";
import OreoLatteShake from "../../assets/images/Foods/Milk/OreoLatteShake.jpg";
import StrawberryMilk from "../../assets/images/Foods/Milk/StrawberryMilk.jpg";

const listFood = {
  specials: {
    leftSide: [
      {
        id: "cf4",
        name: "Milk Coffee Special AM",
        price: 15_000,
        image: MilkCoffeeAM,
        description: "Kopi relaksasi yang iconic dari Awan Mbengi, memberikan rasa yang beda dan memberikan kenikmatan pada tubuh."
      },
      {
        id: "cml1",
        name: "Spaghetti",
        price: 12_000,
        image: Spaghetti,
        description: "Makanan ringan berbasis mie dan gandum dari Itali, dengan nuansa lokal."
      },
      {
        id: "cml7",
        name: "Pisang Bakar",
        price: 12_000,
        image: PisangBakar,
        description: "Pisang pilihan dengan topping keju dan coklat, dipadu dengan kental manis."
      },
      {
        id: "mlk4",
        name: "Oreo Latte Shake",
        price: 15_000,
        image: OreoLatteShake,
        description: "Awan Mbengi signature, minuman kalangan anak muda, dengan serbuk oreo yang bikin rasa coklat lebih kuat."
      },
    ],
    rightSide: [
      {
        id: "tea1",
        name: "Flower Tea / Lemon Tea",
        price: 15_000,
        image: LemonTea,
        description: "Teh dengan racikan dari berbagai macam aroma dan rempah-rempah pilihan dari Awan Mbengi."
      },
      {
        id: "mmn4",
        name: "Nasi Ayam Geprek",
        price: 15_000,
        image: NasiAyamGeprek,
        description: "Ayam Geprek, dengan sambal matah dan matang, tersedia dengan cabe untuk pelanggan yang demen pedas."
      },
      {
        id: "sh2",
        name: "Shisha Mix Special",
        price: 40_000,
        image: ShishaSpecial,
        description: "Shisha spesial dengan Mix rasa yang berbeda-beda, refill bara dengan gratis."
      },
      {
        id: "cml2",
        name: "Potato Wedges",
        price: 12_000,
        image: PotatoWedges,
        description: "Kentang diiris dan di deep fry dilengkapi dengan sambal dan mayonaise."
      },
    ],
  },
  menus: {
    coffee: [
      {
        id: "cf1",
        name: "Coffee Yin Yang",
        price: 15_000,
        image: CoffeeYinYang,
        description: ""
      },
      {
        id: "cf2",
        name: "Breeze Coffee",
        price: 15_000,
        image: BreezeCoffee,
        description: ""
      },
      {
        id: "cf3",
        name: "Kopi V6",
        price: 15_000,
        image: KopiV6,
        description: ""
      },
      {
        id: "cf4",
        name: "Milk Coffee Special AM",
        price: 15_000,
        image: MilkCoffeeAM,
        description: ""
      },
      {
        id: "cf5",
        name: "Vietnam Drip",
        price: 15_000,
        image: VietnamDrip,
        description: ""
      },
      {
        id: "cf6",
        name: "Kopi Kampoeng",
        price: 8_000,
        image: KopiKampoeng,
        description: ""
      },
    ],
    tea: [
      {
        id: "tea1",
        name: "Flower Tea / Lemon Tea",
        price: 15_000,
        image: LemonTea,
        description: ""
      },
      {
        id: "tea2",
        name: "Teh Kayu Manis",
        price: 7_000,
        image: TehKayuManis,
        description: ""
      },
    ],
    shisha: [
      {
        id: "sh1",
        name: "Shisha Standard",
        price: 30_000,
        image: ShishaStandard,
        description: ""
      },
      {
        id: "sh2",
        name: "Shisha Mix Special",
        price: 40_000,
        image: ShishaSpecial,
        description: ""
      },
    ],
    maeman: [
      {
        id: "mmn1",
        name: "Nasi Goreng Kampung",
        price: 15_000,
        image: NasiGorengKampung,
        description: ""
      },
      {
        id: "mmn2",
        name: "Nasi Telor Geprek",
        price: 10_000,
        image: NasiTelorGeprek,
        description: ""
      },
      {
        id: "mmn3",
        name: "Nasi Kikil Pedas",
        price: 14_000,
        image: NasiKikilPedas,
        description: ""
      },
      {
        id: "mmn4",
        name: "Nasi Ayam Geprek",
        price: 15_000,
        image: NasiAyamGeprek,
        description: ""
      },
      {
        id: "mmn5",
        name: "Nasi Wader / Iwak Kali",
        price: 15_000,
        image: NasiWaderSambel,
        description: ""
      },
    ],
    cemilan: [
      {
        id: "cml1",
        name: "Spaghetti",
        price: 12_000,
        image: Spaghetti,
        description: ""
      },
      {
        id: "cml2",
        name: "Potato Wedges",
        price: 12_000,
        image: PotatoWedges,
        description: ""
      },
      {
        id: "cml3",
        name: "Bakso Bakar Malang",
        price: 12_000,
        image: BaksoBakarMalang,
        description: ""
      },
      {
        id: "cml4",
        name: "Roti Arab",
        price: 14_000,
        image: RotiArab,
        description: ""
      },
      {
        id: "cml5",
        name: "Roti Bakar",
        price: 10_000,
        image: RotiBakar,
        description: ""
      },
      {
        id: "cml6",
        name: "Pisang Crispy",
        price: 10_000,
        image: PisangCrispy,
        description: ""
      },
      {
        id: "cml7",
        name: "Pisang Bakar",
        price: 12_000,
        image: PisangBakar,
        description: ""
      },
    ],
    milk: [
      {
        id: "mlk1",
        name: "Choco Cappuccino",
        price: 15_000,
        image: ChocoCappuccino,
        description: ""
      },
      {
        id: "mlk2",
        name: "Brownsugar Latte",
        price: 9_000,
        image: BrowsugarLatte,
        description: ""
      },
      {
        id: "mlk3",
        name: "Fresh Milk",
        price: 14_000,
        image: FreshMilk,
        description: ""
      },
      {
        id: "mlk4",
        name: "Oreo Latte Shake",
        price: 15_000,
        image: OreoLatteShake,
        description: ""
      },
      {
        id: "mlk5",
        name: "Strawberry Milk",
        price: 15_000,
        image: StrawberryMilk,
        description: ""
      },
      {
        id: "mlk6",
        name: "Honey Latte",
        price: 14_000,
        image: HoneyLatte,
        description: ""
      },
    ],
    popular: [
      {
        id: "mmn4",
        name: "Nasi Ayam Geprek",
        price: 15_000,
        image: NasiAyamGeprek,
        description: ""
      },
      {
        id: "sh1",
        name: "Shisha Standard",
        price: 30_000,
        image: ShishaStandard,
        description: ""
      },
      {
        id: "mlk4",
        name: "Oreo Latte Shake",
        price: 15_000,
        image: OreoLatteShake,
        description: ""
      },
    ],
  }
};

export default listFood;
