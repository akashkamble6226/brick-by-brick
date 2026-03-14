export interface CheeseMongersItem {
  name: string;
  validByDays: number;
  quality: number;
}

const MAX_QUALITY = 100;
const MIN_QUALITY = 0;

const CheeseName = {
  Parmigiano: "Parmigiano Regiano",
  Caciocavallo: "Caciocavallo Podolico",
  TastingEvent: "Tasting with Chef Massimo",
  Ricotta: "Ricotta",
} as const;

type CheeseRule = {
  label: string;
  isLegendary?: boolean;
  beforeSellDate: (item: CheeseMongersItem) => void;
  afterSellDate: (item: CheeseMongersItem) => void;
};

const clampQuality = (quality: number): number => {
  if (quality < MIN_QUALITY) return MIN_QUALITY;
  if (quality > MAX_QUALITY) return MAX_QUALITY;
  return quality;
};

export class Program {
  private _items: CheeseMongersItem[];
  private readonly _rules: Record<string, CheeseRule>;

  public constructor(items: CheeseMongersItem[]) {
    this._items = items;
    this._rules = this.createRules();
  }

  public updateQuality() {
    for (const item of this._items) {
      const rule = this.getRule(item);

      rule.beforeSellDate(item);

      if (!rule.isLegendary) {
        item.validByDays -= 1;
      }

      if (item.validByDays < 0) {
        rule.afterSellDate(item);
      }

      // after updating the quality to stay in the range less than 100 and greater than zero
      item.quality = clampQuality(item.quality);
    }
  }

  private createRules(): Record<string, CheeseRule> {
    const normalRule = this.createNormalRule(1);

    return {
      default: normalRule,

      [CheeseName.Parmigiano]: {
        label: "aging",
        beforeSellDate: (item) => {
          item.quality += 1;
        },
        afterSellDate: () => {},
      },

      [CheeseName.Caciocavallo]: {
        label: "legendary",
        isLegendary: true,
        beforeSellDate: () => {},
        afterSellDate: () => {},
      },

      [CheeseName.TastingEvent]: {
        label: "event",
        beforeSellDate: (item) => {
          let increase = 1;

          if (item.validByDays < 15) increase += 2;
          if (item.validByDays < 8) increase += 2;

          item.quality += increase;
        },
        afterSellDate: (item) => {
          item.quality = MIN_QUALITY;
        },
      },

      [CheeseName.Ricotta]: this.createNormalRule(3),
    };
  }

  private createNormalRule(multiplier: number): CheeseRule {
    return {
      label: multiplier === 3 ? "ricotta" : "normal",

      beforeSellDate: (item) => {
        item.quality -= 1 * multiplier;
      },

      afterSellDate: (item) => {
        item.quality -= 4 * multiplier;
      },
    };
  }

  private getRule(item: CheeseMongersItem): CheeseRule {
    return this._rules[item.name] ?? this._rules.default;
  }
}

/* ------------------ TEST RUNNER ------------------ */

const items: CheeseMongersItem[] = [
  { name: "Normal Cheese", validByDays: 10, quality: 20 },
  { name: "Parmigiano Regiano", validByDays: 5, quality: 10 },
  { name: "Caciocavallo Podolico", validByDays: 0, quality: 80 },
  { name: "Tasting with Chef Massimo", validByDays: 12, quality: 30 },
  { name: "Ricotta", validByDays: 4, quality: 25 },
];

const program = new Program(items);

for (let day = 0; day < 5; day++) {
  console.log(`\nDay ${day}`);
  console.table(items);

  program.updateQuality();
}
