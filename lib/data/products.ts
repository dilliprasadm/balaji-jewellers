/**
 * Centralized Product Catalogue Data
 *
 * NOTE: The items below use curated imagery from the Stitch project as development placeholders.
 * When verified inventory photography and specifications are provided,
 * simply update or replace the items in this file. The UI and components will adapt automatically.
 *
 * RULES:
 * - Only two primary categories: "gold" | "silver".
 * - Gemstones/stones exist strictly as piece-level attributes (hasStoneDetail & stoneDetails).
 * - Never infer purity or hallmarks unless verified.
 */

export interface Product {
  id: string;
  name: string;
  category: "gold" | "silver";
  type: string;
  images: string[];
  description?: string;
  hasStoneDetail?: boolean;
  stoneDetails?: string;
  purity?: string;
  featured?: boolean;
}

export const PRODUCTS: Product[] = [
  // ================= GOLD JEWELLERY =================
  {
    id: "archival-kundan-collar",
    name: "Archival Kundan Collar Suite",
    category: "gold",
    type: "Collar Necklace",
    images: [
      "https://lh3.googleusercontent.com/aida/AEtjO1XB2XhfeLWZu0HKdZQfcHEXkCkzsJd2spa9s2wau-CuAlhe5HIz2pQZIK_ZAwlTP2i9HsM-zNOSIqkF2b2zLRqWL7cI9KMRgs8KMqNTMYQifmzO_FoS8TnMM7O2H4MUBx8R_2LbJOrhhjS6cKTQl2zQcH5iYRfcd_AVsp8AMVT5yM6gpkPM0Xs6wk7Zv7Aosz19VGc_O4xfpHAc3fVnhp0avMT8gco6yvE04M3iKeDw1jzX5tlMN_xEng=s0",
      "https://lh3.googleusercontent.com/aida/AEtjO1VG6xQSq9wkCqg8uUxhD8imdE8NGargLfw3RItRGhigy9lAxMiR82jErCXd0cGDDm4lqaAMuLeaVXaGeHTlvqS4ql1LGb39bCD9pTkp5edBzf-kPcUmbeSHxQCdEWiwGNsE50BTpd07D3IC3oFqmswfR2J-__dW0jrIzZ2h6AqBStJSuJpr-o3dlRttUeyuHTnjVcUzFABsi6KA86o7WggLRkXpWFmXVe0cH7YbFM97b1iD7LWz4aFdDw=s0",
    ],
    description:
      "Handcrafted gold collar necklace featuring delicate repoussé chasing and articulating fringe elements.",
    hasStoneDetail: true,
    stoneDetails: "Natural uncut stone accents set in traditional raised bezel mounts.",
    featured: true,
  },
  {
    id: "sculpted-gokhru-kadas",
    name: "Sculpted Gokhru Kadas",
    category: "gold",
    type: "Bangles & Kadas",
    images: [
      "https://lh3.googleusercontent.com/aida/AEtjO1Vt6RlAkQptTSyKEXn8ps6d7ylUOXWA6_msQ_o1rmQoohan1npOYeB4MiumMw9SIIxqvxx7P3cbxIiHg-bjYJJ2RVbuXgH03lKdwBqcSSq2XxoFeho2ysSluh4z1ulsUV1VDblSlAU4eMc4QERCo5FXAn0hRGS7NlnOBv9BWM7vqzQWYypuTO5xW5AOjCMJ2z9DLxO0-2uuXHyO05W-0SH7vNjNXvDD_xzgfwsGzMDT-5WVd-sVLBqBHEY=s0",
    ],
    description:
      "Substantial gold kadas sculpted with floral repoussé reliefs and hand-chiseled stippling.",
    hasStoneDetail: false,
    featured: true,
  },
  {
    id: "classic-chandbali-earrings",
    name: "Classic Chandbali Ear Pendants",
    category: "gold",
    type: "Earrings",
    images: [
      "https://lh3.googleusercontent.com/aida/AEtjO1VyDf5W3_uM8w1g-0BdmveHihGZifLVJKIkryLHjm6OA-96Ye7_3F3ASVtqe672KJLInZZw-WbvTBVUl50zdU-u8WcQGQ5H9rk4iNevZktANFitdzqSFC5mLUAlb4qmaXDDR20TcguW4g8VDc7dxxTu1dJc945iDPFJy_wBN9T4Sza0AYxxWrWIwYxZI9zV9RN-EJ4oOykSvncvHmOV3giD0MDbrVDfFMvz6uKnsik8LWP-6wMlbE8NdBw=s0",
      "https://lh3.googleusercontent.com/aida/AEtjO1U9aBNrcAcLcfV2o6ZadrzvAeNYg-MxuPgFcgYNdj4dLQLW2TKuRuvf92QcvB4mOpGgD_7eONcYy4X_dwr-jCwpCAigX7AxbY4MK3IoeYrIL-xGwoQKpAEusp77MQzX3vfjqaziwhLswaDaGRAlDaXnb3zZhmV5TmY6DOcMwDdCWsg2KtOzwQF7bmTU_fOU9UZMtnHa4V85w6Z8w3DIoonYjhbZNAFc9tnofKa5yfsCaIDokrzhzylbPoY=s0",
    ],
    description:
      "Handcrafted crescent ear ornaments adorned with intricate wire filigree and suspended seed accents.",
    hasStoneDetail: true,
    stoneDetails: "Micro-pearl and uncut crystal stone drop embellishments.",
    featured: false,
  },
  {
    id: "floral-kundan-cocktail-ring",
    name: "Floral Kundan Cocktail Ring",
    category: "gold",
    type: "Ring",
    images: [
      "https://lh3.googleusercontent.com/aida/AEtjO1WF8PSyZDaFFXJRmJCwfPMtZ7W_zjY57plUbb56p2VSrZqqcYdLzLVOqYocEHa2tEMXFWU-saWoQp-x8b05FQ3ZOLS4fWGjG2FCWaFEvgj09pIIFUFaQB03_TVtUFPT8Wqt8u2KjccGuF3mwwAZCaP-Hy0L6Hg1DYoLriiozsLL1SeIR-JWnATUZGaTPW4GNnJjgX2EPIKM-cBTGILagvmk3I6cw93_K900OQgfvoT98kdEKkBmXJhcq3Y=s0",
      "https://lh3.googleusercontent.com/aida/AEtjO1VRlafAXX1KpZ6gr6vs-xEvxs0utBBoCHMzjvT2MC3kyBlmRJyPzbmvKe4ofhYOCtjTuCGYkUjt2s2U4Is7WIUwALhf-twD0k0e-A3K3SAn6lQe-Cj0avN7y0gB6XTX9RffRF89X1yXn_naxxb0EhtyaR3FJA_paRkZNxepy6RLdt3np4Y7s49HG6AYrhW_vfI1nJF_TmIHl6sWVVYbnisYZadpnAkOMSoNjgtzYEq1nraTPqYKpL0cEw=s0",
    ],
    description:
      "Statement gold ring featuring a raised floral motif and hand-burnished bezel setting.",
    hasStoneDetail: true,
    stoneDetails: "Carved natural stone blossom encircled by gold prongs.",
    featured: true,
  },
  {
    id: "traditional-rani-haar",
    name: "Traditional Rani Haar",
    category: "gold",
    type: "Necklace",
    images: [
      "https://lh3.googleusercontent.com/aida/AEtjO1VIyopUBviDgeYin7L5KvSyXtPrKHGHcdB04rLjeVKkr_CMJM_8Z419tEEfw48I5at4lUrbu2hFCj_zTfFAn6i5gKDvxgdw56oS3gv3cBKfRGtyyG32jDFUepLib-zXr8TlF-sOxBbWQNSWtPMUfJE-wFTb6BJ7mVVztyRlRl-HJHb09cfPPdBH3bh8NkUk0gNYSlwYrmaucNDnDaZmyQXyhYi__2sNL5v8bfhnxzsh2I5uwLWcZJciZwE=s0",
      "https://lh3.googleusercontent.com/aida/AEtjO1VkTxoVSZHLNueX9HjqY1Ax7th6Hlz2Qp8dP6GA5-ODxPVSZq8Z8Z0oaeLKjMFEmEuS57OUprhFXDPJ_U_aK61p12e3VCrUOKZBPL_12Shkf4r9urhvsR8YhgNBGBC4NFJGHpQNB0pU0Mrhiieet1zjocK-UB-yEawPuGvrjP_wHshoB1op4CpprtUdhJ2TbIEJPl5mXS2Z2hdHvCDIZqFTXveBzqa8pls_CAXzfPFH9T-5WT4hYGzbDZ4=s0",
    ],
    description:
      "Grand multi-tiered gold necklace with cascading bead terminals and pierced openwork medallions.",
    hasStoneDetail: false,
    featured: false,
  },
  {
    id: "marwar-temple-rani-haar",
    name: "Marwar Imperial Temple Rani Haar",
    category: "gold",
    type: "Rani Haar",
    images: [
      "https://lh3.googleusercontent.com/aida/AEtjO1XnH8ftKWNSjn5HgVmzUItyXCxoY1XKgyv2x5WZS9UiCkZS4hzeLRYRTgmmEZ-o-F5PHSHYsV27Mbm0IitLEA-lku84ZOkd4iyD54moD4nP4rr4d8i7yTl5Up8rDz-QUhQ4mYGbqcqkv7KXqv85DZOfdj9PoRvYOHvnXyVbonHaLmYWIhd0-GDRGVNZwo1usVmZ-eRGuWCaSjJZpJ-plq3f95_vMwZZ3q7qhsBociB13sTvcd36P2NFffw=s0",
    ],
    description:
      "Layered temple pendant suspended from intricate granulated chains with floral nakashi motifs and delicate seed pearl drops.",
    hasStoneDetail: true,
    stoneDetails: "Hanging gold seed clusters and micro-pearl accents.",
    featured: true,
  },
  {
    id: "architectural-gold-ear-cuff",
    name: "Architectural Gold Ear Cuff",
    category: "gold",
    type: "Earrings",
    images: [
      "https://lh3.googleusercontent.com/aida/AEtjO1VDP-bvg_yzkgoR3TKI84jyHOpinFAoGH75DBbSknelOqMTo99tQipljG_x398Jab2fU7TWYelJirFEjF3s9ZY4yKpEFLVsRvXERHatBF-VM9p0GB1PDu1h9ZVquTLnQXF2N7wGW-jMj9VaHOPff-WH3y7I8WGf6fUUdonjWZW-pJjsJm9ph9vgk609yrOcCYMUsBfuC-UV1RxpbDf6kXf8xELmgJB6UPOFVnGy7-CoXyJ0pifuBCqvboM=s0",
    ],
    description:
      "Minimalist contemporary ear cuff designed with sweeping fluid contours in polished and matte gold finishes.",
    hasStoneDetail: false,
    featured: false,
  },

  {
    id: "peacock-filigree-bazuband",
    name: "Peacock Filigree Bazuband Armlet",
    category: "gold",
    type: "Armlet",
    images: [
      "https://lh3.googleusercontent.com/aida/AEtjO1VMISsoHRTRI1zSAPk78W1FzMv7OeZKMpejtlw2372yD-iWa5l2kQ810lfbF9ORzirpxs1pa2fQx6BvzHNHFFoVbaRqGx1-KSTD9wGjmIbVBqG1eL-ofJmQF-ETS0QFzIEBAph63xrj_n0BIoRi09efjeUJEbWsE9fGYJrGC74LS2PMcbrUwfL3tAnX3DejRZh8Y1dC8V-WmZ5j3CnNsUFts39M2TBK1oFctLG4re3ly7dX2TaSWdJebdA=s0",
    ],
    description:
      "Regal gold Rajput bazuband featuring intricate peacock filigree openwork and suspended pearl terminals.",
    hasStoneDetail: true,
    stoneDetails: "Suspended micro-pearl drops along the articulating fringe.",
    featured: false,
  },
  {
    id: "heritage-jadau-polki-choker",
    name: "Heritage Jadau Polki Choker",
    category: "gold",
    type: "Choker",
    images: [
      "https://lh3.googleusercontent.com/aida/AEtjO1VkTxoVSZHLNueX9HjqY1Ax7th6Hlz2Qp8dP6GA5-ODxPVSZq8Z8Z0oaeLKjMFEmEuS57OUprhFXDPJ_U_aK61p12e3VCrUOKZBPL_12Shkf4r9urhvsR8YhgNBGBC4NFJGHpQNB0pU0Mrhiieet1zjocK-UB-yEawPuGvrjP_wHshoB1op4CpprtUdhJ2TbIEJPl5mXS2Z2hdHvCDIZqFTXveBzqa8pls_CAXzfPFH9T-5WT4hYGzbDZ4=s0",
      "https://lh3.googleusercontent.com/aida/AEtjO1WCR_euShv_2J3wr8PlZM-iHksQ-r6QW1Xzdlljk9ka26DWdgJstHhyY8cycDrYfo_YEZzu3NKciiICoIuCgLyCb5uOfoz8fFYbbsSL0Km9xi57zOmYKcxVisEMiojzleOfhPvBnTSmrO4LDyn9CL9O-XDUEcNl1Nw3FHNbwTqs3sjN5tcPOhxzehyr0JpOEx3chn3LEE1HY3lZeCOSPt2FJ-ctmr06e3sABCKEyGFKjP3F2Ve2mZqs9Q=s0",
    ],
    description:
      "Handcrafted gold choker necklace with hand-burnished bezel foil mounts and articulating gold wire links.",
    hasStoneDetail: true,
    stoneDetails: "Natural uncut crystal stone settings in traditional bezel cavities.",
    featured: true,
  },
  {
    id: "nakashi-wirework-haar",
    name: "Nakashi Wirework Royal Haar",
    category: "gold",
    type: "Necklace",
    images: [
      "https://lh3.googleusercontent.com/aida/AEtjO1W2_DndU2HiCZdR-7PlWHkbphD6DWVk8r5S87KI4I9GBelpT_5G3NLroTbvkqhH5Gnd6PC6dHqeED0_tViywh6HHdM5hRHD8tB3_coFItJ-PlvU3zGn0Un48j5otnlh5LW5fndcVgk8q-2CBI1godeAYvOvE69CzifV5ScGvavTxEC7KImA3_2zc7doPwcOgtG2_iT23cjci21f0i_yxqvXXcrGSlBfBd0E7y97nZ__NwyEIkj2D-xD0y0=s0",
    ],
    description:
      "Substantial royal gold necklace with hand-chiseled Nakashi repoussé motifs and articulating links.",
    hasStoneDetail: true,
    stoneDetails: "Fine gemstone cabochon accents nestled within sculptural floral mounts.",
    featured: false,
  },
  {
    id: "concentric-filigree-pendant",
    name: "Concentric Filigree Gold Pendant",
    category: "gold",
    type: "Pendant",
    images: [
      "https://lh3.googleusercontent.com/aida/AEtjO1UXySz1FYrcYODoitYeRuyENTADiCTD3DRmKms3_DZVvIFkewz6EW9u0zYj_DY2FEjMqrUjjD4ulJ88YOaoOLq2MgIJIQWhZ7k2VWLo2q0DE349W4anJ8XB2wc1go-a_2wrIp-b6hOXPTSlIgq2Sen7mdYV6DJyGVIAIYBzWFK0A4dbiZ_4OUfUM8Rz6AJ1W-3rG6xKgjE8pIXjq0nG37Q559W2ukVX9uatlJeOCjrJU1qTfhIf6YydK-Q=s0",
    ],
    description:
      "Concentric circular gold medallion designed with micro-bead fringe and openwork filigree.",
    hasStoneDetail: false,
    featured: false,
  },
  {
    id: "antique-torque-choker",
    name: "Antique Sculptural Gold Torque",
    category: "gold",
    type: "Choker",
    images: [
      "https://lh3.googleusercontent.com/aida/AEtjO1V_stb4vkJNF79Vkl_lhgItNgbJ-XfUVa6qsrs-zlZOfVUvFebGXr-txVTMudRv1jRm_NIDdKsITQzqJmaHKl55y3Ec-oCVEjXkFlDREr4CAM-QR9wwHeXrkwIWBTQePzi0DAHz3AWQEMU4zV947vRjSiWzwabPro1rJqdvYJFbOWlj8nMe15dJc1QV2guGX5EOS_76wJzbn6kovxHAWIl2hcQJqttHQ1dgbIW3ep3aK1je7Fz2-hdTZBE=s0",
    ],
    description:
      "Heavy gold torque collar shaped with rigid geometric sweep and hand-hammered finish.",
    hasStoneDetail: false,
    featured: false,
  },
  {
    id: "bridal-filigree-bangles",
    name: "Bridal Gold Filigree Bangles",
    category: "gold",
    type: "Bangles & Kadas",
    images: [
      "https://lh3.googleusercontent.com/aida/AEtjO1XXoiDrcp3k7I4NIPP9Zdn53XdkhK69hHxxsT05cPWf-Z130Xunw4o8COtSsPNf_h03sNO1PJ7S6OJazaDbPsuoxD0HjclO5HTqxryXz5X7CTV4T7FADlviUmUnM9k_D4YWVIjbhiTockx3gxnk1NDxFXQsTDuKULMwiVjqyu-zmAEgXuz8bB2rBv-YZxbI2zJWnagux4qFeS-9DE168NoNj0aJm81cdjUSzw7_j-EWo_K5TKkAhd6ZmAc=s0",
    ],
    description:
      "Pair of ornate bridal gold bangles embellished with micro-granulation spheres and pierced openwork.",
    hasStoneDetail: false,
    featured: true,
  },

  // ================= SILVER JEWELLERY =================
  {
    id: "pure-silver-hasli-suite",
    name: "Pure Silver Hasli Suite",
    category: "silver",
    type: "Necklace",
    images: [
      "https://lh3.googleusercontent.com/aida/AEtjO1V-jJF4CwHBn64C81vi8BDsw3NjJhdr-SEqFWuK_5AB1mIO3jmun37jCYPbfQuVhaWiPWjSszgPk4WaXF2OX3kEfx5RHDBkEg4RFBXln99g-EPukr7np0rJA4yvLdblPbfQyjk4QPg4xySpb_6GRBiUMFGrow40S2vjf3IiApKRyU5i0OiYcrASM7f1sBclGiutuRxvpB3AQeJdlv4pBVye4rS9qDr5EnN6XpvXbg2NSSnBkDC3iAdIJIM=s0",
      "https://lh3.googleusercontent.com/aida/AEtjO1Xa1lbKYQfVaaXn9DaXF5j7617V-nOmWrai8zEVFCyFyojuOzI_bjGXjU8SO0UBh-b_XmsgPViLglRmRzMCdxfWDNEC11m7KUnC0YOD8aHPK5mZZh7Z9PFi6j7jqVTINdykS1zUykR1_dMdjca-4Y2PFGYFYd7QhFGWtckfoStw3ocQBtsZ6beMBGKPSmPF8k6vuYaVhVfA2OPMhIy2URprJ93KY35pGFnw3JCSqFOO8MtmxcydeenvcWs=s0",
    ],
    description:
      "Sculptural solid silver hasli torque necklace accompanied by ornate hand-forged accents.",
    hasStoneDetail: false,
    featured: true,
  },
  {
    id: "hammered-silver-tribal-cuff",
    name: "Hand-Hammered Silver Cuff",
    category: "silver",
    type: "Cuff & Bangles",
    images: [
      "https://lh3.googleusercontent.com/aida/AEtjO1Vxt6aboQZhCDvL1ubDhyfAdn2KHro_PLLDma-2zdwWQlufi3UW50cyg_sJxvSEcl-7HTg9wCJsJ133C9pJElMSo83NaBOSE49vFHebGvyuoA9h0bRR9VxnY7PtxdHwoQbAqhMZZRy0eiAnD31zh3ZgdPwurpGJEX8KS3Sj_5Qg340hWQhfFsFVDQRyIvfBUdo_MCMGMwRrR4vsNaEcwbjbchsj3Zd8aOkyObW4MBfIAK3RCddFA_kqQtA=s0",
      "https://lh3.googleusercontent.com/aida/AEtjO1UKrzlekFvxpeaLN9pjJBRCnAZLX2OuAB4_lv-evEcc8xzyXxie2hc-mwrXPgXDxo8jkJXnBIPerbuigChE5zsk7l83J9u-0qnwMoQCtGHAkN41-rDv4kIU8rLGXkcQCsBp0iIh5DPE3pXQ3TiB0K0Seo5iZmvAwJtefeZLTJZdmSB89KCKouF5xoJJNWKCd_M_ktWRDtwDJiV6nDqatKYJaawIyafGr79DXTCbRgna3Wc_GphEGMEd0fo=s0",
    ],
    description:
      "Satin-finished wide silver wrist cuff detailed with subtle geometric chevron stippling.",
    hasStoneDetail: false,
    featured: true,
  },
  {
    id: "sculptural-silver-jhumki",
    name: "Sculptural Silver Jhumki & Cuffs",
    category: "silver",
    type: "Earrings",
    images: [
      "https://lh3.googleusercontent.com/aida/AEtjO1UKrzlekFvxpeaLN9pjJBRCnAZLX2OuAB4_lv-evEcc8xzyXxie2hc-mwrXPgXDxo8jkJXnBIPerbuigChE5zsk7l83J9u-0qnwMoQCtGHAkN41-rDv4kIU8rLGXkcQCsBp0iIh5DPE3pXQ3TiB0K0Seo5iZmvAwJtefeZLTJZdmSB89KCKouF5xoJJNWKCd_M_ktWRDtwDJiV6nDqatKYJaawIyafGr79DXTCbRgna3Wc_GphEGMEd0fo=s0",
    ],
    description:
      "Handcrafted sterling silver jhumki earrings paired with sculptural architectural wrist cuff curves.",
    hasStoneDetail: false,
    featured: true,
  },
  {
    id: "raw-moonstone-silver-ring",
    name: "Raw Moonstone Silver Ring",
    category: "silver",
    type: "Ring",
    images: [
      "https://lh3.googleusercontent.com/aida/AEtjO1Xy1HvHhHeC0g1xTd2tvjewlDcTOe5HvM0OJIH-UksFAl8BHV7N_AG9z8JxXxSyMrFuTM7DHvt4BipDzBy0DiCQATwpNufjbym1nc-hafWZOjrjfMOYie_uDoQcP7lH_cV358VJTz7Mx3VIL1mwAHlXGQxDX67eoi5pU_60dFYN2Bt9ZEgPOZ0jCK046HBfPhxnidPmQTuDKAI7ikun8WPrpGwjYFZ-BhN0gqS-3XgqzjbjzzUjg4IQl0w=s0",
    ],
    description:
      "Silver cocktail ring featuring an uncut natural cabochon stone secured in a granular bezel.",
    hasStoneDetail: true,
    stoneDetails: "Raw uncut natural stone with delicate filigree rim setting.",
    featured: false,
  },
  {
    id: "coin-drop-silver-choker",
    name: "Coin Drop Silver Choker",
    category: "silver",
    type: "Choker",
    images: [
      "https://lh3.googleusercontent.com/aida/AEtjO1Xa1lbKYQfVaaXn9DaXF5j7617V-nOmWrai8zEVFCyFyojuOzI_bjGXjU8SO0UBh-b_XmsgPViLglRmRzMCdxfWDNEC11m7KUnC0YOD8aHPK5mZZh7Z9PFi6j7jqVTINdykS1zUykR1_dMdjca-4Y2PFGYFYd7QhFGWtckfoStw3ocQBtsZ6beMBGKPSmPF8k6vuYaVhVfA2OPMhIy2URprJ93KY35pGFnw3JCSqFOO8MtmxcydeenvcWs=s0",
    ],
    description:
      "Artisan silver neckpiece adorned with suspended coin terminals and tactile repoussé plates.",
    hasStoneDetail: false,
    featured: false,
  },
  {
    id: "geometric-silver-statement-ring",
    name: "Geometric Silver Statement Ring",
    category: "silver",
    type: "Ring",
    images: [
      "https://lh3.googleusercontent.com/aida/AEtjO1U9Rh4mWy_2vGLPwPOQPqVxRWtjJxpSe99NrXP0Iq5NR7VU_JhjkzOHWbkDgFfJ0MsuG14Qpioal6oZkTFVw-SO7SJNL39-lpVGXFiGYeSQBix78NXRa2x-qktssJ1D_rkJV6-34uc_FZJvD2j09iHLJKwPa5W_2oQeCuIyGi_J4lmtcGEdP3Jq0a1u-eVliGuzK-w5axPyhArUv3haVdVLmzUnr6Udgz3yxrjCtNFg7UIE9XsgYoQwPIs=s0",
    ],
    description:
      "Bold contemporary sterling silver ring designed with clean architectural facets and brushed matte surfaces.",
    hasStoneDetail: false,
    featured: true,
  },
  {
    id: "oxidized-silver-antique-kada",
    name: "Antique Oxidized Silver Kada",
    category: "silver",
    type: "Cuff & Bangles",
    images: [
      "https://lh3.googleusercontent.com/aida/AEtjO1V-jJF4CwHBn64C81vi8BDsw3NjJhdr-SEqFWuK_5AB1mIO3jmun37jCYPbfQuVhaWiPWjSszgPk4WaXF2OX3kEfx5RHDBkEg4RFBXln99g-EPukr7np0rJA4yvLdblPbfQyjk4QPg4xySpb_6GRBiUMFGrow40S2vjf3IiApKRyU5i0OiYcrASM7f1sBclGiutuRxvpB3AQeJdlv4pBVye4rS9qDr5EnN6XpvXbg2NSSnBkDC3iAdIJIM=s0",
    ],
    description:
      "Hand-chiseled heavy silver kada featuring traditional oxidized recesses and lion-head terminal motifs.",
    hasStoneDetail: false,
    featured: false,
  },
  {
    id: "filigree-silver-chandbali",
    name: "Filigree Silver Chandbali Drops",
    category: "silver",
    type: "Earrings",
    images: [
      "https://lh3.googleusercontent.com/aida/AEtjO1Xa1lbKYQfVaaXn9DaXF5j7617V-nOmWrai8zEVFCyFyojuOzI_bjGXjU8SO0UBh-b_XmsgPViLglRmRzMCdxfWDNEC11m7KUnC0YOD8aHPK5mZZh7Z9PFi6j7jqVTINdykS1zUykR1_dMdjca-4Y2PFGYFYd7QhFGWtckfoStw3ocQBtsZ6beMBGKPSmPF8k6vuYaVhVfA2OPMhIy2URprJ93KY35pGFnw3JCSqFOO8MtmxcydeenvcWs=s0",
    ],
    description:
      "Delicate crescent silver earrings featuring intricate filigree openwork and hand-wired micro-bead fringe.",
    hasStoneDetail: false,
    featured: false,
  },
];

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}

export function getProductsByCategory(category: "gold" | "silver"): Product[] {
  return PRODUCTS.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return PRODUCTS.filter((p) => p.featured);
}
