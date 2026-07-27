import { Link } from 'react-router-dom';
import LegalPageLayout from '../components/LegalPageLayout';
import { usePageMeta } from '../hooks/usePageMeta';
import { SITE_NAME } from '../lib/site';

export default function MethodologyPage() {
  usePageMeta({
    title: 'Methodology',
    description: `${SITE_NAME} methodology — current net-carb, BMR, TDEE, macro, fasting-timer, and recipe-estimate methods and limitations.`,
    path: '/methodology',
  });

  return (
    <LegalPageLayout title="Methodology">
      <p>
        This page documents how {SITE_NAME}&apos;s current calculators, fasting timers, and recipe values work. It
        describes planning conventions implemented by the site, not a clinical protocol or a prediction of an
        individual&apos;s health outcome. Results depend on the inputs and assumptions below.
      </p>

      <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200">Net carbs</h2>
      <p>
        The net-carb calculator uses:
      </p>
      <p className="font-medium text-slate-800 dark:text-slate-200">
        net carbs per serving = total carbohydrate − fiber − sugar alcohols
      </p>
      <p>
        A negative result is displayed as zero. The total is the per-serving result multiplied by the number of servings,
        with a minimum of one serving used by the calculation.
      </p>
      <p>
        Subtracting <em>all</em> entered sugar alcohols is a planning convention, not a claim that every sugar alcohol has
        zero metabolic effect. Ingredients differ, labeling rules vary by region, and products can use blends. Digestion
        and glucose response also vary by person. Check the product label and ingredients, and use glucose data or
        professional advice when the distinction matters medically. Try the{' '}
        <Link to="/net-carb-calculator" className="text-teal-600 dark:text-teal-400 hover:underline">
          net carb calculator
        </Link>
        .
      </p>

      <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200">BMR and activity estimate</h2>
      <p>
        Basal metabolic rate (BMR) uses the Mifflin–St Jeor equations after converting pounds to kilograms and feet and
        inches to centimeters:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>Male: 10 × weight (kg) + 6.25 × height (cm) − 5 × age + 5</li>
        <li>Female: 10 × weight (kg) + 6.25 × height (cm) − 5 × age − 161</li>
      </ul>
      <p>
        Estimated total daily energy expenditure (TDEE) is BMR multiplied by the selected activity factor, then rounded
        to a whole calorie:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>Sedentary: 1.2</li>
        <li>Light: 1.375</li>
        <li>Moderate: 1.55</li>
        <li>Active: 1.725</li>
        <li>Very active: 1.9</li>
      </ul>
      <p>
        These categories compress large differences in body composition, movement, training, health, and metabolism into
        a single multiplier. They estimate population-level energy needs; they do not measure an individual&apos;s actual
        expenditure.
      </p>

      <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200">Macro plan targets</h2>
      <p>
        The macro calculator assigns a fixed daily net-carb target according to the selected plan: 20 g for strict keto,
        50 g for low carb for insulin resistance, or 100 g for moderate low carb. Protein is set to 0.8 g per pound of
        entered body weight and rounded to a whole gram. Carbohydrate and protein are assigned 4 calories per gram. Fat is
        the remaining estimated TDEE calories after those carbohydrate and protein calories, divided by 9 calories per
        gram and rounded to a whole gram. Fat is never shown below zero.
      </p>
      <p>
        These are fixed site rules, not personalized targets. In particular, protein based only on total body weight does
        not account for lean mass, age, kidney considerations, training goals, pregnancy, or clinician-directed needs.
        The fixed carb plans do not establish that a given intake is safe, necessary, or effective for a particular
        condition.
      </p>

      <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200">TDEE deficit target</h2>
      <p>
        The TDEE target tool applies the entered deficit percentage to estimated TDEE. The code limits that percentage to
        0–40%, rounds the calorie deficit, and does not allow the resulting target to fall below the calculated BMR. The
        BMR floor is a software guardrail, not an assurance that the target is nutritionally complete or medically safe.
        Real energy needs and appropriate rates of weight change vary.
      </p>

      <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200">Fasting timers and stages</h2>
      <p>
        The fasting clock records a start timestamp in the browser and compares it with the current time to display
        elapsed time, remaining time, goals, milestones, and predefined stage labels. Closing the tab can preserve the
        timestamp in local browser storage.
      </p>
      <p>
        The timer measures clock time only. It does not measure glucose, insulin, ketones, glycogen, fat burning,
        autophagy, hydration, electrolyte status, or any other biological stage. Stage and milestone labels are
        educational time windows selected by the site; metabolism does not change on a universal schedule, and reaching
        a displayed threshold does not prove that a biological process has started or stopped. User-entered glucose and
        ketone values are not independently verified or measured by the timer.
      </p>

      <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200">Recipe estimates</h2>
      <p>
        Recipe net-carb and protein values are stored as working per-serving estimates for the listed ingredients,
        quantities, and number of servings. They are not dynamically calculated from the food a reader actually uses and
        are not laboratory analyses. Brands, produce size, preparation, optional ingredients, substitutions, and serving
        size can materially change the result. Check packaged-food labels and recalculate when accuracy matters.
      </p>

      <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200">Dr. Boz Ratio (optional)</h2>
      <p>
        When you enter glucose and ketone values on the fasting clock or ratio calculator, the site computes:
      </p>
      <p className="font-medium text-slate-800 dark:text-slate-200">
        Dr. Boz Ratio = Glucose (mg/dL) ÷ Ketones (mmol/L)
      </p>
      <p>
        Example: 90 mg/dL ÷ 1.5 mmol/L = 60. The result is rounded to one decimal place. This is the branded
        mg/dL-based formula — the site does not convert glucose to mmol/L (÷ 18) before dividing.
      </p>
      <p>
        Branded materials sometimes cite bands above 80, 40–80, and below 40. Published clinical guidelines do not
        validate these as treatment thresholds. The ratio is not a diagnostic test, does not prove autophagy or metabolic
        flexibility, and should not be used to justify medication changes, prolonged fasting, or tighter carb targets.
        User-entered meter values are not verified by the site.
      </p>

      <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200">Using the results safely</h2>
      <p>
        Rounding, incorrect inputs, formula limitations, and product variation can compound. Do not use these outputs to
        diagnose or treat a condition or to change medication. Seek individualized advice from a licensed healthcare
        professional, especially for diabetes or glucose-lowering medication, kidney disease, pregnancy or
        breastfeeding, eating-disorder history, or extended fasting. See our{' '}
        <Link to="/disclaimer" className="text-teal-600 dark:text-teal-400 hover:underline">
          Disclaimer
        </Link>{' '}
        and{' '}
        <Link to="/editorial-policy" className="text-teal-600 dark:text-teal-400 hover:underline">
          Editorial Policy
        </Link>
        .
      </p>
    </LegalPageLayout>
  );
}
