// OSHKHANA catering menu data.
// Edit dishes, pricing, and descriptions here — Menu.tsx reads from this file.
//
// Half tray: serves approximately 10–15 guests
// Full tray: serves approximately 20–30 guests
//
// To add a dish: copy an existing dish block and fill in the fields.
// To add a category: add a new object to the `menu` array.
// To add a photo later: add an `image` field to the Dish type and populate it.

export type PricingVariant = {
  /** Protein or preparation type — e.g. "Chicken", "Beef", "Mutton".
   *  Leave as an empty string for dishes with no protein distinction (e.g. Nihari). */
  protein: string;
  half: string;
  full: string;
};

export type Dish = {
  name: string;
  description: string;
  variants: PricingVariant[];
  /** Optional: relative path to dish photo, e.g. "/images/menu/afghani-pulao.jpg"
   *  Leave undefined until photos are ready. */
  image?: string;
};

export type MenuCategory = {
  category: string;
  dishes: Dish[];
};

export const menu: MenuCategory[] = [
  {
    category: "Rice Dishes",
    dishes: [
      {
        name: "Afghani Pulao",
        image: "/images/menu/afghani-pulao.jpg",
        description:
          "Fragrant long-grain rice slow-cooked in a rich meat broth with caramelized onions, raisins, and whole spices. Served alongside a tender slow-cooked korma.",
        variants: [
          { protein: "Chicken", half: "$70",  full: "$140" },
          { protein: "Beef",    half: "$80",  full: "$160" },
          { protein: "Mutton",  half: "$90",  full: "$180" },
        ],
      },
      {
        name: "Yakhni Pulao",
        description:
          "Delicate rice simmered in a spiced bone broth with whole spices and tender meat. Light, aromatic, and deeply nourishing — the dish that's always gone first.",
        variants: [
          { protein: "Chicken", half: "$60",  full: "$125" },
          { protein: "Beef",    half: "$70",  full: "$140" },
          { protein: "Mutton",  half: "$80",  full: "$160" },
        ],
      },
      {
        name: "Biryani",
        image: "/images/menu/biryani.jpg",
        description:
          "Long-grain rice layered with slow-cooked meat and whole spices, sealed and finished dum-style. Fragrant, full-flavored — the one everyone asks for by name.",
        variants: [
          { protein: "Chicken", half: "$65",  full: "$130" },
          { protein: "Beef",    half: "$70",  full: "$140" },
          { protein: "Mutton",  half: "$80",  full: "$160" },
        ],
      },
    ],
  },
  {
    category: "Karhai & Qorma",
    dishes: [
      {
        name: "Shinwari Karhai",
        description:
          "A bold, oil-forward karhai with tender meat cooked down in a deeply reduced masala with whole spices and fresh tomatoes. Less sauce than most karhais — more presence.",
        variants: [
          { protein: "Chicken", half: "$70",  full: "$140" },
          { protein: "Mutton",  half: "$85",  full: "$170" },
        ],
      },
      {
        name: "Qorma",
        image: "/images/menu/qorma.jpg",
        description:
          "Slow-braised meat in a rich, aromatic gravy of yogurt, caramelized onions, and whole spices. A classic of South Asian hospitality — steady, warming, unforgettable.",
        variants: [
          { protein: "Chicken", half: "$65",  full: "$130" },
          { protein: "Mutton",  half: "$85",  full: "$170" },
        ],
      },
      {
        name: "Beef Nihari",
        image: "/images/menu/nihari.jpg",
        description:
          "A slow-simmered stew of tender beef shank in a deeply spiced, velvety broth. Finished with fresh ginger, coriander, and lime — the kind of dish that takes all day and shows it.",
        variants: [
          { protein: "", half: "$80",  full: "$160" },
        ],
      },
    ],
  },
];
