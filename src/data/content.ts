export type BadgeType = 'most-popular' | 'best-overall' | 'best-fitness';

export interface TopCard {
  name: string;
  offer: string;
  rating: number;
  logo: string;
  featured?: boolean;
  badge?: BadgeType;
}

export interface RankingItem {
  rank: number;
  name: string;
  logo: string;
  features: string[];
  rating: number;
  websiteLabel: string;
  badge?: BadgeType;
}

export interface GuideLink {
  title: string;
  href: string;
}

export interface ReviewLink {
  title: string;
  logo: string;
  href: string;
}

export interface ContentSection {
  title: string;
  paragraphs?: string[];
  subsections?: { title: string; items: string[] }[];
}

export const topCards: TopCard[] = [
  {
    name: 'Factor',
    offer: 'Up to $130 off + Free Breakfast for 1 Year',
    rating: 9.7,
    logo: '/assets/logo-factor.png',
  },
  {
    name: 'Home Chef',
    offer: '$4.99/serving + Free Shipping on 1st Box + Free Extra for Life',
    rating: 9.8,
    logo: '/assets/logo-home-chef.png',
    featured: true,
    badge: 'most-popular',
  },
  {
    name: 'Cook Unity',
    offer: '50% Off Your First Week + 10% off the Next 3',
    rating: 9.6,
    logo: '/assets/logo-cook-unity.png',
  },
];

export const rankings: RankingItem[] = [
  {
    rank: 1,
    name: 'Home Chef',
    logo: '/assets/logo-home-chef.png',
    badge: 'most-popular',
    features: [
      '$4.99/serving + Free Shipping on 1st Box + Free Extra for Life',
      'Ranked #1 in Customer Satisfaction, sign up with no commitment',
      '30+ weekly menu options',
    ],
    rating: 9.8,
    websiteLabel: "On Home Chef's Website",
  },
  {
    rank: 2,
    name: 'Factor',
    logo: '/assets/logo-factor.png',
    badge: 'best-fitness',
    features: [
      'Up to $130 off + Free Breakfast for 1 Year',
      'New Proteins Every Week—90+ Rotating Options',
      'New Global Flavors, Same 2-Minute Convenience',
    ],
    rating: 9.7,
    websiteLabel: "On Factor's Website",
  },
  {
    rank: 3,
    name: 'Cook Unity',
    logo: '/assets/logo-cook-unity.png',
    features: [
      '50% Off Your First Week + 10% off the Next 3',
      'Pre-made meals arrive fresh with the easiest instruction',
      '300+ gourmet meal options',
    ],
    rating: 9.6,
    websiteLabel: "On Cook Unity's Website",
  },
  {
    rank: 4,
    name: 'Fuel Meals',
    logo: '/assets/logo-home-chef.png',
    features: [
      'Use code Forbes40 for 40% off + a free meal',
      '20% off the next three weeks',
      'Bonus meals included in weeks two and three',
    ],
    rating: 9.5,
    websiteLabel: "On Fuel Meals' Website",
  },
  {
    rank: 5,
    name: 'Forkful',
    logo: '/assets/logo-factor.png',
    features: [
      '50% off your first order followed by 10% off your next three',
      'The first seed oil free meal delivery service',
      'Chef-crafted ready to eat meals in two minutes',
    ],
    rating: 9.4,
    websiteLabel: "On Forkful's Website",
  },
  {
    rank: 6,
    name: 'Tovala',
    logo: '/assets/logo-cook-unity.png',
    features: [
      'Free Tovala Smart Oven when you sign up for meals',
      'Each meal cooks itself perfectly in 20 minutes',
      'Choose from 35+ delicious weekly options',
    ],
    rating: 9.3,
    websiteLabel: "On Tovala's Website",
  },
  {
    rank: 7,
    name: 'Family Menu',
    logo: '/assets/logo-home-chef.png',
    features: [
      'Kids Eat Free + Free Shipping',
      'Introducing a new menu specifically designed for families',
      '18 weekly menu options, including convenient options like Oven-Ready and Express Meals',
    ],
    rating: 9.2,
    websiteLabel: "On Family Menu's Website",
  },
  {
    rank: 8,
    name: 'Tempo',
    logo: '/assets/logo-factor.png',
    features: [
      '60% Off your 1st Box + 10% off your 2nd-4th boxes + 30% off your 5th box',
      'Balanced, nutrient-rich meals for a healthier take on classics',
      '20 rotating weekly options, including new pescatarian meals and cold-pressed juices',
    ],
    rating: 9.1,
    websiteLabel: "On Tempo's Website",
  },
  {
    rank: 9,
    name: 'HelloFresh',
    logo: '/assets/logo-home-chef.png',
    features: [
      'Free ZWILLING Dragon Wok + 10 Free Meals',
      'Spice up your routine with 100+ weekly recipes',
      'Ditch processed. Cook Fresh',
    ],
    rating: 9.0,
    websiteLabel: "On HelloFresh's Website",
  },
  {
    rank: 10,
    name: 'Green Chef',
    logo: '/assets/logo-cook-unity.png',
    features: [
      '50% off + 20% off for two months',
      'Eat healthier, lose weight with Green Chef*',
      'For a limited time, try Free Organic Protein Upgrades, $0 More',
    ],
    rating: 8.9,
    websiteLabel: "On Green Chef's Website",
  },
];

export const guides: GuideLink[] = [
  { title: 'Best Meal Delivery Services', href: '#' },
  { title: 'Best Keto Diet Meal Delivery Plans', href: '#' },
];

export const reviews: ReviewLink[] = [
  { title: 'Factor Review', logo: '/assets/review-factor.png', href: '#' },
  { title: 'HelloFresh Review', logo: '/assets/review-hellofresh.png', href: '#' },
  { title: 'Home Chef Review', logo: '/assets/review-home-chef.png', href: '#' },
];

export const contentSections: ContentSection[] = [
  {
    title: 'What is a Prepared Meal Delivery Service?',
    paragraphs: [
      'A prepared meal delivery service brings fully cooked, ready-to-eat meals directly to your door. Unlike meal kits that require chopping and cooking, prepared meals only need reheating—making them ideal for busy professionals, families, and anyone who wants nutritious food without the time commitment of cooking from scratch.',
      'These services typically offer weekly menus with rotating options, dietary filters (keto, vegan, gluten-free), and flexible subscription plans. Meals arrive chilled or frozen in insulated packaging to maintain freshness during transit.',
    ],
  },
  {
    title: 'Pros & Cons of Prepared Meal Delivery Services',
    paragraphs: [
      'Before committing to a subscription, it helps to weigh the convenience of prepared meals against their cost and environmental footprint. Here is what to consider when evaluating whether a service fits your lifestyle and budget.',
    ],
    subsections: [
      {
        title: 'Meal Delivery Service Pros',
        items: [
          'Save time on grocery shopping, meal planning, and cooking',
          'Portion-controlled meals can support weight management goals',
          'Access to chef-designed recipes and diverse cuisines',
          'Flexible plans with skip, pause, or cancel options',
          'Dietary-specific menus for keto, paleo, vegan, and more',
        ],
      },
      {
        title: 'Meal Delivery Service Cons',
        items: [
          'Per-meal cost is typically higher than cooking at home',
          'Packaging waste from individual meal containers',
          'Limited control over ingredients and seasoning',
          'Delivery windows may not suit every schedule',
        ],
      },
    ],
  },
  {
    title: 'How Much Do Prepared Meal Delivery Services Cost?',
    paragraphs: [
      'Most prepared meal delivery services charge between $8 and $15 per serving, depending on the plan size, meal type, and promotions. Many providers offer introductory discounts—such as free shipping on your first box or a percentage off your first several orders—to lower the barrier to trying their service.',
      'Subscription tiers often reward larger orders: a plan with 12 meals per week typically costs less per serving than a 6-meal plan. Factor in shipping fees, which some services waive on first orders or orders above a minimum threshold.',
    ],
  },
  {
    title: 'Are Prepared Meal Delivery Services Cheaper Than Grocery Stores?',
    paragraphs: [
      'On a per-serving basis, prepared meal delivery is generally more expensive than buying groceries and cooking at home. However, when you account for food waste, impulse purchases, and the time value of meal planning and prep, the gap narrows—especially for households that frequently order takeout.',
      'For individuals who would otherwise eat restaurant meals or delivery apps several times a week, a prepared meal service can actually reduce overall food spending while improving nutrition.',
    ],
  },
  {
    title: 'Are Prepared Meal Delivery Services Cheaper Than Restaurants?',
    paragraphs: [
      'Yes, in most cases. A restaurant entrée with tip and delivery fees often runs $15–$25, while a comparable prepared meal delivery serving costs $8–$15. Over a month, switching even a few restaurant meals to a delivery service can yield meaningful savings without sacrificing variety or quality.',
    ],
  },
  {
    title: 'How To Choose The Best Prepared Meal Delivery Service',
    paragraphs: [
      'Start by identifying your dietary needs, budget, and how many meals you need per week. Compare introductory offers, read customer reviews, and check whether the service delivers to your area. Look for flexible subscription terms so you can pause or cancel without penalty.',
      'Our top pick, Home Chef, balances affordability, menu variety, and customer satisfaction—but the best choice depends on your personal preferences. Use our comparison above to find the service that fits your lifestyle.',
    ],
  },
  {
    title: 'Bottom Line',
    paragraphs: [
      'Prepared meal delivery services offer a practical solution for eating well without spending hours in the kitchen. With options ranging from fitness-focused plans to family-friendly menus, there is a service for nearly every dietary goal and budget.',
      'Take advantage of introductory promotions to test a few providers before committing long-term. Our rankings above reflect pricing, menu quality, customer reviews, and overall value to help you make an informed decision.',
    ],
  },
];

export const badgeLabels: Record<BadgeType, string> = {
  'most-popular': 'Most Popular',
  'best-overall': 'Best Overall',
  'best-fitness': 'Great value',
};
