// product.ts
import deeply from '../images/productimage/deeplynousringpaste.png';
import advance from '../images/productimage/advance.png';
import soundarya from '../images/productimage/soundarya.png';
import sunfluid from '../images/productimage/sunfiuid.png';
import lightdaylotion from '../images/productimage/lightday.png';
import tejasvi from '../images/productimage/tejasvibrighting.png';
import facialmoisture from '../images/productimage/facialmoisture.png';
import lightdaylotion2 from '../images/productimage/lightdaylotion.png';
import lightdaylotion3 from '../images/productimage/lightlotion.png';
import delicate from '../images/productimage/delicatefacialclearness.png';


export interface Product {
  name: string;
  size: string; 
  description: string;
  image: string;
}

export const products: Product[] = [
  {
    name: "Deeply Nourishing Facial Cleansing Paste Almond, Pistachio & Honey",
    size: "15 g e 0.52 oz",
    description: "The first rule of Organic skin care is to cleanse, tone and nourish. This Deeply Nourishing Facial Cleansing Paste is a tradional blend of rich Black Sesame, Almonds, Pistachio and fresh Turmeric paste that deeply cleanses, while nourishing and replenishing the skins moisture levels every day. This also contains natural hydrators like Buermilk, Floral waters & organic Honey, to gently polish and give the skin a fine porcelain texture and san feel. This cleansing paste comes stored in a compact, eco-friendly and reusable glass jar.",
    image: deeply
  },
  {
    name: "Advanced Sanjeevani Beauty Elixir",
    size: "15 g e 0.52 oz",
    description: "The Advanced Sanjeevani Elixir is a potent blend of Organic herbs including the ancient and iconic Sanjeevani herb infusion known to restore youthful and glowing skin. This elixir is an excellent pre- moisturizer or can be used as a makeup primer for achieving smooth velvet skin.\nA light gel-textured pre-moisturizer, it easily penetrates into the skin, while remaining suitable for all skin types.",
    image: advance
  },
  {
    name: "Soundarya Radiance Cream With 24K Gold & SPF 25",
    size: "15 g e 0.52 oz",
    description: "An exceponally rich yet light textured day face cream that incorporates a combinaon of precious herbs and real 24 Karat Gold, which helps to restore moisture and firmness of the skin, giving it a natural faceli.",
    image: soundarya
  },
  {
    name: "Sun Fluid Tender Coconut Water With Turmeric & Basil Leaf SPF 50 PA + +",
    size: "50 ml e 1.69 fl. oz",
    description: "Made with tender Coconut Water, fresh Basil leaves and cooling Aloe Vera, the Sun Fluid SPF 50| PA++ shields the skin from harmful UVA/UVB rays of the sun. Natural Mineral Organic Yashada Bhasma increases the intensity of sun protecon, thereby shielding the skin from early signs of aging and further enviromental damage.",
    image: sunfluid
  },
  {
    name: "Light Day Lotion Indian Rose & Marigold With SPF 25",
    size: "40ml e 1.35 fl. oz",
    description: "This Light Day Loon is a superbly light moisturizer, which contains aromac Rose Oil and soothing Marigold extracts that calm the skin. It is blended with highly emollient Plum Seed Oil and Rice Bran Oil to ensure intense hydraon and cell renewal. Yasada Bhasma, a natural sunscreen and herb infused derivave, is the source of SPF 25 which offers longlasng protecon from the harsh rays of the Sun.",
    image: lightdaylotion
  },
  {
    name: "Tejasvi Brightening Ghee Cream",
    size: "15 g e 0.52 oz",
    description: "The Tejasvi Brightening Ghee Cream is specially formulated by combining pure Cow's Ghee, which is aged with selected potent Organic herbs, to provide smoothness, suppleness and radiance to the skin. Cow's Ghee is used for massage because of its supreme penetrang qualies and ability to carry acves of herbs, deep into the skin. This rich textured massage balm comes in an eco-friendly, resusable glass jar. Use it for facial massages to deeply nourish dehydrated skin.",
    image: tejasvi
  },
  {
    name: "Hydrating Facial Moisturizer for Men Sandalwood & Orange Peel With SPF 25",
    size: "130ml e 4.39 fl. oz",
    description: "A unique light formulaon, the Sandalwood & Orange Peel Moisturiser with SPF 25 for men provides essenal nutrients to the skin and helps in restoring its natural hydraon level. This anoxidant rich moisturizer is easily absorbed by the skin, while protecng it from UVA & UVB rays.",
    image: facialmoisture
  },
  {
    name: "Light Day Lotion Madurai Jasmine & Mogra With SPF 25",
    size: "40ml e 1.35 fl. oz",
    description: "This Light Day Loon is a superbly light moisturizer, which contains Organic herbs including Ashwagandha and Gokharu along with emollient oils of Almonds, Wheat Germ and Olives, to intensely hydrate the skin. Yashad Bhasma, a natural sunscreen and herb infused derivave, is the source of SPF 25 which offers long-lasng protecon from harsh rays of the Sun",
    image: lightdaylotion2
  },
  {
    name: "Light Day Lotion Lavender & Neroli With SPF 25",
    size: "40ml e 1.35 fl. oz",
    description: "This Light Day Loon is a superbly light moisturizer, which contains pure Lavender water that is therapeuc and calming for the skin. Nourishing Oat Kernel Extract and smulang Neroli Oil help rejuvenate the skin. Yashad Bhasma, a natural sunscreen and herb infused derivave, is the source of SPF 25 which offers long-lasng protecon from harsh rays of the Sun.",
    image: lightdaylotion3
  },
  {
    name: "Travel Size Delicate Facial Cleanser Kashmiri Saffron & Neem",
    size: "50ml e 1.69 fl. oz",
    description: "Specially designed to treat sensive, acne-prone, and oily skin, the Delicate Facial Cleanser Kashmiri Saffron & Neem, leaves the skin clarified, glowing and balanced.",
    image: delicate
  }
];