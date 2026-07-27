import type { Recipe } from './types';
import { RECIPE_CATEGORY_LABEL } from './types';

export interface RecipeArticle {
  whyItFits: string;
  mealPrep?: string;
  swaps?: string;
  ingredientNotes?: string;
  servingNotes?: string;
}

/** Unique prose per recipe — fights AdSense “low value content” thinness. */
export const RECIPE_ARTICLES: Record<string, RecipeArticle> = {
  'scrambled-eggs-spinach': {
    whyItFits:
      'Eggs and spinach deliver protein and micronutrients with almost no digestible carbohydrate. For strict keto or insulin-resistance plans, this plate is a reliable first meal after overnight fasting because it rarely spikes glucose the way toast or cereal does. Cook the spinach until just wilted so volume stays high without watering down the eggs.',
    mealPrep: 'Crack eggs into a jar the night before; wash spinach and store dry. Cook fresh — scrambled eggs reheated poorly.',
    swaps: 'Swap cheddar for feta, or add smoked salmon for more protein. Skip cheese if you need the absolute lowest net carbs.',
  },
  'chicken-salad-lettuce-cups': {
    whyItFits:
      'Chicken salad in lettuce wraps removes the bread that usually drives lunchtime carbs. Mayo and Dijon keep calories satisfying while celery adds crunch without much starch. This pattern — protein salad + leaf “shell” — is a staple for keto and IR-friendly meal prep.',
    mealPrep: 'Mix the chicken salad up to 3 days ahead. Keep lettuce separate so cups stay crisp.',
    swaps: 'Greek yogurt can replace half the mayo for a tangier, slightly leaner mix — check the yogurt label for added sugar.',
  },
  'baked-salmon-broccoli': {
    whyItFits:
      'Fatty fish plus a non-starchy vegetable is a classic metabolic-health dinner: high protein, meaningful omega-3s, and modest net carbs from broccoli. Sheet-pan timing keeps weeknights simple without rice or potatoes.',
    mealPrep: 'Season salmon and portion broccoli in the morning; roast at dinner. Leftovers keep 2 days refrigerated.',
    swaps: 'Swap broccoli for asparagus or green beans. Trout or sardines work if salmon is unavailable.',
  },
  'cauliflower-rice-stir-fry': {
    whyItFits:
      'Cauliflower rice mimics takeout texture without the glucose load of white rice. Pairing it with eggs or leftover chicken turns a side into a full meal under most low-carb budgets.',
    mealPrep: 'Rice cauliflower in a food processor and freeze flat in bags. Stir-fry from frozen — no thaw needed.',
    swaps: 'Use coconut aminos instead of soy sauce if you prefer. Add shrimp for a faster protein hit.',
  },
  'greek-yogurt-berries': {
    whyItFits:
      'Plain Greek yogurt and a measured berry portion make a practical cold snack when you want something lightly sweet without building the meal around granola or juice. The listed 3/4-cup yogurt portion supplies the base, while 1/4 cup of raspberries or blackberries keeps the fruit amount visible instead of turning it into an unmeasured handful. This recipe is tagged for insulin-resistance and moderate-low-carb plans rather than strict keto because yogurt and berries both contribute carbohydrate.',
    ingredientNotes:
      'Compare tubs using the nutrition panel, not the front label. Choose plain, unsweetened Greek yogurt and check the serving size because carbohydrate and protein vary by brand and milk-fat level. Frozen berries work, but thaw them separately and drain excess liquid before spooning them over the yogurt. If using walnuts, measure the tablespoon before chopping so the portion does not quietly grow.',
    mealPrep:
      'Portion the yogurt into a covered jar up to two days ahead. Keep berries and walnuts in separate small containers, then add them just before eating so the nuts stay crisp and thawed berries do not thin the yogurt. For a packed snack, keep it chilled with an ice pack.',
    swaps:
      'Use raspberries or blackberries as listed; either gives a tart contrast to the yogurt. For a lower-fruit version, omit the berries and use the optional walnuts plus cinnamon. Recalculate rather than assuming the same estimate if you change the yogurt quantity, use flavored yogurt, or add sweetener.',
    servingNotes:
      'Stir the cinnamon into the yogurt for even flavor or leave the toppings layered for more texture. The recipe makes one measured serving. If it needs to become a larger meal, pair it with a separate savory protein rather than doubling every topping; doubling the bowl also doubles its estimated net carbs.',
  },
  'taco-bowl-no-tortilla': {
    whyItFits:
      'Seasoned meat, salsa, cheese, and lettuce give taco flavor without tortillas. Most of the carb risk sits in jarred salsa and any beans you add — keep salsa to a measured spoonful and skip sweet sauces.',
    mealPrep: 'Brown a large batch of taco meat for 3–4 bowls. Reheat and assemble with fresh lettuce.',
    swaps: 'Use ground turkey or shredded chicken. Sour cream instead of cheese if you prefer.',
  },
  'egg-muffins': {
    whyItFits:
      'Baked egg muffins are portable protein for busy mornings and post-fast refeeds. Vegetables stay low-carb if you avoid potatoes and sweet peppers in large amounts; spinach, mushrooms, and cheddar stay friendly for most keto days.',
    mealPrep: 'Bake a dozen on Sunday; refrigerate 4 days or freeze. Microwave 45–60 seconds.',
    swaps: 'Dairy-free: skip cheese and add extra olive oil. Spice with chili flakes for variety.',
  },
  'zucchini-noodles-meat-sauce': {
    whyItFits:
      'Zucchini noodles replace pasta while meat sauce supplies protein and fat. Spiralize just before serving so noodles do not turn watery. Jarred sauce can add sugar — read the label or make a quick crushed-tomato simmer.',
    mealPrep: 'Sauce freezes well. Spiralize zucchini the day you eat.',
    swaps: 'Ground beef, turkey, or Italian sausage all work. Add mushrooms for bulk without many carbs.',
  },
  'cottage-cheese-cucumber': {
    whyItFits:
      'This bowl uses a measured portion of cottage cheese as the protein-centered base and cucumber for cool crunch, so it works as a snack or small no-cook meal without crackers. Because cottage cheese naturally contains some carbohydrate, the label matters even when the product is plain. The olive oil is optional; it adds richness, while everything bagel seasoning gives a sharper, saltier finish.',
    ingredientNotes:
      'Look for unflavored cottage cheese and compare labels at the same serving size. Some products include starches or gums for texture, so use the tub you actually buy when checking the estimate. English or Persian cucumber stays especially crisp, but a standard cucumber works if you peel any tough skin and scoop out watery seeds. Taste before salting because cottage cheese and seasoning blends can already be salty.',
    mealPrep:
      'Portion the cottage cheese in a sealed container up to two days ahead. Store sliced cucumber separately with a dry paper towel, then combine at serving time; this prevents cucumber water from loosening the cheese. Add olive oil and dry seasonings last. Keep the bowl refrigerated and do not leave a packed portion at room temperature for an extended period.',
    swaps:
      'Use fresh dill, black pepper, or everything bagel seasoning as listed. Celery or radish can replace the cucumber when you want a firmer crunch. Chili crisp changes the carb count and can add substantial oil and sodium, so check its label and measure it rather than treating it as a free garnish.',
    servingNotes:
      'Cut the cucumber into small dice for a spoonable bowl or into rounds for a dip-and-scoop snack. The listed quantities make one serving. For a more substantial lunch, add a separate egg or leftover plain chicken and recalculate any additions instead of relying on the bowl’s 5g estimate.',
  },
  'sheet-pan-sausage-peppers': {
    whyItFits:
      'Sausage and peppers roast together for a one-pan dinner. Choose sausage without added sugar or fillers; peppers contribute most of the net carbs, so keep portions honest on strict keto days.',
    mealPrep: 'Slice peppers ahead. Leftovers reheat well for lunch bowls over cauliflower rice.',
    swaps: 'Chicken sausage or sliced kielbasa. Add onions sparingly if you are under 20g net carbs.',
  },
  'avocado-egg-boats': {
    whyItFits:
      'Avocado halves baked with eggs combine fat and protein in a single boat — filling enough for breakfast or a light dinner. Season aggressively; avocado alone can taste flat.',
    mealPrep: 'Best cooked fresh. Halve avocados just before baking so they do not brown.',
    swaps: 'Top with salsa or crumbled bacon. Use duck eggs if available for richer yolks.',
  },
  'smoked-salmon-cream-cheese-roll-ups': {
    whyItFits:
      'No-cook roll-ups deliver protein and fat with minimal carbs — ideal after longer fasts when chewing a steak feels like too much. Capers and dill add flavor without sugar.',
    mealPrep: 'Assemble up to a day ahead; wrap tightly so cream cheese does not dry out.',
    swaps: 'Dairy-free cream cheese alternatives vary widely — verify labels. Cucumber spears can replace some salmon for volume.',
  },
  'turkey-avocado-roll-ups': {
    whyItFits:
      'Deli turkey and avocado beat sandwiches without bread. Watch for honey-roasted or maple turkey — those add sugar. Plain oven-roasted slices keep net carbs near zero beyond the avocado.',
    mealPrep: 'Roll just before eating so avocado stays green. Pack turkey and avocado separately for work.',
    swaps: 'Roast beef or chicken slices. Add mustard instead of mayo.',
  },
  'tuna-salad-stuffed-peppers': {
    whyItFits:
      'Tuna salad stuffed into mini pepper halves is a complete no-cook lunch format: the tuna supplies the main protein, mayonnaise binds the filling, and celery, onion, and peppers provide contrast without bread. Using the peppers as cups also makes the two-serving batch easy to divide. The listed estimate assumes plain tuna and mayonnaise without sweet relish or a sweetened dressing.',
    ingredientNotes:
      'Drain the tuna thoroughly so the filling stays in the pepper cups. Tuna packed in water or oil both work, but the final texture will differ; oil-packed tuna may need slightly less mayonnaise. Choose firm mini peppers without wrinkled skin, and halve them lengthwise to make stable cups. Mince the onion finely so no bite overwhelms the filling, then add lemon gradually because brands of mayonnaise vary in acidity.',
    mealPrep:
      'Mix the tuna filling and refrigerate it in a covered container for up to two days. Wash, halve, and dry the peppers separately. Stuff them shortly before serving so they remain crisp and the filling does not become watery. For transport, pack the filling and pepper halves in separate compartments and assemble at lunch.',
    swaps:
      'Canned salmon or cooked shredded chicken can replace tuna, but their texture may require a little more or less mayonnaise. Cucumber boats or celery sticks can replace the mini peppers. Skip sweet relish unless you have checked and included its label values; chopped dill pickle gives a similar tang with more predictable portioning.',
    servingNotes:
      'Spoon equal amounts of filling into all eight pepper halves, then divide four halves per serving. If the peppers tip, trim only a very thin strip from the rounded side without cutting through the cup. Serve cold, or let the tuna mixture sit out just long enough to lose its refrigerator chill before filling the peppers.',
  },
  'steak-salad-arugula': {
    whyItFits:
      'Steak over bitter greens is a restaurant-style dinner that still fits low carb. Dress with olive oil and vinegar; creamy bottled dressings often hide sugar. Leftover steak from dinner becomes tomorrow’s salad protein.',
    mealPrep: 'Grill extra steak; slice cold over arugula the next day.',
    swaps: 'Chicken thighs or lamb. Spinach or mixed spring greens instead of arugula.',
  },
  'lemon-garlic-chicken-thighs': {
    whyItFits:
      'Bone-in or boneless thighs stay juicy and pair with lemon-garlic for repeatable weeknight protein. Serve with a pile of non-starchy vegetables instead of rice to keep the plate IR-friendly.',
    mealPrep: 'Marinate morning of; roast at dinner. Shred leftovers into lettuce cups.',
    swaps: 'Drumsticks or chicken breasts (watch dryness). Lime instead of lemon.',
  },
  'pork-chops-green-beans': {
    whyItFits:
      'Pan-seared pork chops and green beans are a simple American plate without breadcrumbs or sweet glazes. Dry the chops well for browning; finish beans with butter and salt for satiety.',
    mealPrep: 'Trim beans ahead. Chops are best day-of; leftovers slice into salads.',
    swaps: 'Asparagus or broccoli. Pork tenderloin medallions for a leaner cut.',
  },
  'shrimp-garlic-butter-zucchini': {
    whyItFits:
      'Shrimp cooks in minutes and barely contributes carbs. Garlic butter zucchini noodles keep the skillet to one pan. Pat shrimp dry so they sear instead of steam.',
    mealPrep: 'Thaw shrimp in the fridge overnight. Spiralize zucchini the day you cook.',
    swaps: 'Scallops or cubed white fish. Summer squash instead of zucchini.',
  },
  'hard-boiled-eggs-everything-seasoning': {
    whyItFits:
      'Hard-boiled eggs are the ultimate grab-and-go protein for keto and fasting transitions. Everything seasoning adds flavor without carbs. Batch-cook so “I need something now” does not become a drive-thru.',
    mealPrep: 'Boil a dozen; refrigerate up to a week. Peel when you eat for best texture.',
    swaps: 'Smoked paprika or chili salt instead of everything seasoning.',
  },
  'cheese-olive-nut-plate': {
    whyItFits:
      'A composed snack plate beats random grazing. Measure nuts — they are easy to overeat. Olives and cheese fill fat needs when you are not hungry enough for a full meal after a fast.',
    mealPrep: 'Pre-portion nut servings into small containers. Assemble the plate in 2 minutes.',
    swaps: 'Swap almonds for macadamias (usually fewer carbs). Add cucumber if you want volume.',
  },
  'break-fast-bone-broth-eggs': {
    whyItFits:
      'Bone broth plus soft eggs is a gentle break-fast: fluid, sodium, and protein without a heavy starch load. Many fasting protocols suggest easing in before a large mixed meal — this plate follows that idea without medical claims.',
    mealPrep: 'Warm broth and cook eggs fresh. Keep boxed or homemade broth ready in the fridge.',
    swaps: 'Chicken broth if bone broth is unavailable. Add a pinch of salt if you feel lightheaded (discuss with your clinician if you have blood-pressure concerns).',
  },
  'chia-pudding-coconut': {
    whyItFits:
      'Chia pudding using unsweetened coconut milk can fit low carb when portions are measured. Chia adds fiber; net carbs depend on the milk and any sweetener. Taste after overnight soak before adding berries.',
    mealPrep: 'Mix at night; eat cold next morning. Keeps 3 days refrigerated.',
    swaps: 'Almond milk (unsweetened) instead of coconut. Stevia or monk fruit if you need sweetness — avoid sugar syrups.',
  },
  'cobb-salad-jar': {
    whyItFits:
      'Layered Cobb jars travel well and keep dressing off the greens until lunch. Protein from eggs, chicken, and bacon makes this a full meal; skip candied nuts or sugary dressings.',
    mealPrep: 'Build jars 2–3 days ahead with dressing at the bottom and greens on top. Shake when you eat.',
    swaps: 'Turkey bacon or omit bacon. Blue cheese or cheddar.',
  },
  'shakshuka-spinach-feta': {
    whyItFits:
      'Eggs poached in a tomato-spinach skillet feel like weekend brunch without toast. Tomatoes contribute most net carbs — keep the sauce portion reasonable on strict keto days and load spinach.',
    mealPrep: 'Make the sauce ahead; reheat and crack eggs when serving.',
    swaps: 'Omit feta for dairy-free. Add ground lamb for a denser dinner version.',
  },
  'lettuce-wrap-burger-bowl': {
    whyItFits:
      'All the burger toppings, none of the bun. Serving as a bowl with chopped lettuce keeps assembly fast for families. Watch ketchup and relish — mustard and pickles are usually safer.',
    mealPrep: 'Cook patties in a batch; reheat and bowl-up through the week.',
    swaps: 'Turkey or bison patties. Portobello “bun” if you want a handheld without bread.',
  },
  'ginger-chicken-bone-broth-soup': {
    whyItFits:
      'Brothy ginger chicken soup is hydrating and protein-rich for cooler evenings or post-fast evenings when you want something warm. Skip noodles; add cabbage or zucchini ribbons for bulk.',
    mealPrep: 'Soup keeps 4 days refrigerated and freezes well without zucchini (add fresh when reheating).',
    swaps: 'Turkey leftovers instead of chicken. Extra ginger if you like heat.',
  },
  'salmon-avocado-poke-bowl': {
    whyItFits:
      'A poke-style bowl over greens or cauliflower rice keeps sushi vibes without sugary sauces or rice mounds. Use sashimi-grade salmon if eating raw; otherwise quickly sear. Avocado adds fat for satiety.',
    mealPrep: 'Cube salmon day-of. Prep cauliflower rice ahead.',
    swaps: 'Cooked shrimp or tofu (check carbs). Cucumber and radish for crunch.',
  },
  'sheet-pan-chicken-thighs-cabbage': {
    whyItFits:
      'Crispy chicken thighs and roasted cabbage fill a plate with protein, fat, and fiber — strong OMAD or dinner option. Cabbage caramelizes into sweetness without added sugar. This is one of the highest satiety dinners in the library.',
    mealPrep: 'Season thighs ahead. Leftovers reheat in a hot oven to re-crisp skin.',
    swaps: 'Drumsticks or pork chops. Red or green cabbage both work.',
  },
};

export function getRecipeArticle(recipe: Recipe): RecipeArticle {
  return (
    RECIPE_ARTICLES[recipe.slug] ?? {
      whyItFits: `${recipe.title} is a ${RECIPE_CATEGORY_LABEL[recipe.category].toLowerCase()} option with about ${recipe.netCarbsPerServing}g estimated net carbs per serving. Pair it with non-starchy sides and verify any packaged ingredients using the net carb calculator.`,
    }
  );
}
