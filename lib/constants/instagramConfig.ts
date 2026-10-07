/**
 * Instagram Feed & Embeds Configuration for Balaji Jewellers & Shyam Diamonds
 * 
 * METHOD 3 IMPLEMENTATION:
 * - Official profile: @balajijwellerssshyamdimond (Piyush Soni)
 * - To feature specific Instagram posts or reels, paste their direct links below in `posts`!
 *   e.g., "https://www.instagram.com/p/C_abc123/" or "https://www.instagram.com/reel/C_xyz456/"
 */

export interface InstagramFeedItem {
  id: string;
  /** Full Instagram post or reel URL */
  url: string;
  type: "reel" | "post";
  title: string;
  caption: string;
  previewImage: string;
  likes: string;
  comments: string;
  date: string;
  whatsappMessage: string;
}

export interface InstagramConfig {
  handle: string;
  profileName: string;
  subtitle: string;
  profileUrl: string;
  postsCount: string;
  followersCount: string;
  location: string;
  /** Optional third-party widget feed ID (e.g., from Behold.so) if you choose to connect one */
  beholdFeedId?: string;
  posts: InstagramFeedItem[];
}

export const INSTAGRAM_CONFIG: InstagramConfig = {
  handle: "balajijwellerssshyamdimond",
  profileName: "Piyush Soni · Balaji Jewellers",
  subtitle: "Haute Joaillerie · Handcrafted Gold & Silver Chronicles",
  profileUrl: "https://www.instagram.com/balajijwellerssshyamdimond",
  postsCount: "29 Posts",
  followersCount: "130+ Patrons",
  location: "Parvatsar, Rajasthan",
  
  // Set your Behold.so feed ID here if you want automatic live sync (Option B)
  beholdFeedId: "",

  // Curated showcase items linking directly to Instagram (Option A & Curated Mode)
  posts: [
    {
      id: "ig-1",
      url: "https://www.instagram.com/balajijwellerssshyamdimond/",
      type: "reel",
      title: "Archival Kundan Collar Suite",
      caption:
        "Handcrafted 22K gold collar necklace featuring delicate repoussé chasing, natural uncut stone accents, and pure Rajasthani Meenakari work. Live from the Parvatsar atelier.",
      previewImage:
        "https://lh3.googleusercontent.com/aida/AEtjO1XB2XhfeLWZu0HKdZQfcHEXkCkzsJd2spa9s2wau-CuAlhe5HIz2pQZIK_ZAwlTP2i9HsM-zNOSIqkF2b2zLRqWL7cI9KMRgs8KMqNTMYQifmzO_FoS8TnMM7O2H4MUBx8R_2LbJOrhhjS6cKTQl2zQcH5iYRfcd_AVsp8AMVT5yM6gpkPM0Xs6wk7Zv7Aosz19VGc_O4xfpHAc3fVnhp0avMT8gco6yvE04M3iKeDw1jzX5tlMN_xEng=s0",
      likes: "184",
      comments: "14",
      date: "Latest Dispatch",
      whatsappMessage: "Saw the Archival Kundan Collar Suite on your Instagram. Please share weight and details.",
    },
    {
      id: "ig-2",
      url: "https://www.instagram.com/balajijwellerssshyamdimond/",
      type: "post",
      title: "Sculpted Gokhru Kadas in 22K Gold",
      caption:
        "Heirloom Rajasthani bangles chiseled with ancestral floral reliefs and heavy solid gold file-work. Designed to endure generations.",
      previewImage:
        "https://lh3.googleusercontent.com/aida/AEtjO1Vt6RlAkQptTSyKEXn8ps6d7ylUOXWA6_msQ_o1rmQoohan1npOYeB4MiumMw9SIIxqvxx7P3cbxIiHg-bjYJJ2RVbuXgH03lKdwBqcSSq2XxoFeho2ysSluh4z1ulsUV1VDblSlAU4eMc4QERCo5FXAn0hRGS7NlnOBv9BWM7vqzQWYypuTO5xW5AOjCMJ2z9DLxO0-2uuXHyO05W-0SH7vNjNXvDD_xzgfwsGzMDT-5WVd-sVLBqBHEY=s0",
      likes: "212",
      comments: "19",
      date: "Vault Feature",
      whatsappMessage: "Inquiring about the Sculpted Gokhru Kadas featured on Instagram.",
    },
    {
      id: "ig-3",
      url: "https://www.instagram.com/balajijwellerssshyamdimond/",
      type: "reel",
      title: "Peacock Filigree Bazuband Armlet",
      caption:
        "Ceremonial Rajput armlet with intricate openwork peacock plumes and cascading natural Basra pearl fringe. Royal Marwari craftsmanship.",
      previewImage:
        "https://lh3.googleusercontent.com/aida/AEtjO1VMISsoHRTRI1zSAPk78W1FzMv7OeZKMpejtlw2372yD-iWa5l2kQ810lfbF9ORzirpxs1pa2fQx6BvzHNHFFoVbaRqGx1-KSTD9wGjmIbVBqG1eL-ofJmQF-ETS0QFzIEBAph63xrj_n0BIoRi09efjeUJEbWsE9fGYJrGC74LS2PMcbrUwfL3tAnX3DejRZh8Y1dC8V-WmZ5j3CnNsUFts39M2TBK1oFctLG4re3ly7dX2TaSWdJebdA=s0",
      likes: "329",
      comments: "38",
      date: "Atelier Video",
      whatsappMessage: "Saw the Peacock Filigree Bazuband Armlet reel on Instagram. Interested in custom ordering.",
    },
    {
      id: "ig-4",
      url: "https://www.instagram.com/balajijwellerssshyamdimond/",
      type: "post",
      title: "Floral Kundan Cocktail Ring",
      caption:
        "High-relief cocktail ring balancing a natural unheated cabochon gemstone against architectural tiered stepped gold mounts. BIS 916 hallmarked.",
      previewImage:
        "https://lh3.googleusercontent.com/aida/AEtjO1WF8PSyZDaFFXJRmJCwfPMtZ7W_zjY57plUbb56p2VSrZqqcYdLzLVOqYocEHa2tEMXFWU-saWoQp-x8b05FQ3ZOLS4fWGjG2FCWaFEvgj09pIIFUFaQB03_TVtUFPT8Wqt8u2KjccGuF3mwwAZCaP-Hy0L6Hg1DYoLriiozsLL1SeIR-JWnATUZGaTPW4GNnJjgX2EPIKM-cBTGILagvmk3I6cw93_K900OQgfvoT98kdEKkBmXJhcq3Y=s0",
      likes: "156",
      comments: "11",
      date: "Signature Design",
      whatsappMessage: "Interested in the Floral Kundan Cocktail Ring from your Instagram feed.",
    },
  ],
};
