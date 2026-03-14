interface cheeseMong {
  name: string;
  validByDays: number;
  quality: number;
}

const MAX_QUALITY = 100;
const MIN_QUALITY = 0;

const cheeseNames = {
  Parmigiano: "Parmigiano Regiano",
  Caciocavallo: "Caciocavallo Podolico",
  TastingEvent: "Tasting with Chef Massimo",
  Ricotta: "Ricotta",
} as const;

type rules = {
  name: string;
  inGoodQual: (item: cheeseMong) => void;
  isLegendary?: boolean;
  inBadQual: (item: cheeseMong) => void;
};

const clampQuality = (quality: number): number => {
  if (quality < MIN_QUALITY) return MIN_QUALITY;
  if (quality > MAX_QUALITY) return MAX_QUALITY;
  return quality;
};

export class Program {
  private _item: cheeseMong[];
  private rules: Record<string, rules>;

  public constructor(items: cheeseMong[]) {
    this._item = items;
    // 1
    this.rules = this.createRules(items);
  }

  public updateQuality() {
    for (const item of this._item) {
      // 4
      const rule = this.getRule(item);
      rule.inGoodQual(item);

      if (!rule.isLegendary) {
        item.validByDays -= 1;
      }

      if(item.validByDays < 0){
        rule.inBadQual(item)
      }

       // after updating the quality to stay in the range less than 100 and greater than zero
      item.quality = clampQuality(item.quality);
    }
  }

  private createRules(items: cheeseMong[]): Record<string, rules> {
    // 2
    const normalRule = this.createNormlaRule(1);
    return {
      default: normalRule,
      [cheeseNames.Parmigiano]: {
        name: "aging",
        inGoodQual: (item) => {
          item.quality += 1;
        },
        inBadQual: () => {},
      },
      [cheeseNames.Caciocavallo]: {
        name: "legendary",
        isLegendary: true,
        inGoodQual: () => {},
        inBadQual: () => {},
      },
      [cheeseNames.TastingEvent]: {
        name: "Testing Event",
        inGoodQual: (item) => {
          let increase = 1;
          if (item.validByDays < 15) increase += 2;
          if (item.validByDays < 8) increase += 2;
          item.quality += increase;
        },
        inBadQual: () => {},
      },
      [cheeseNames.Ricotta]: this.createNormlaRule(3),
    };
  }

  private createNormlaRule(multi: number): rules {
    // 3
    return {
      name: multi === 3 ? "ricotta" : "normal",
      inGoodQual(item) {
        item.quality -= 1 * multi;
      },
      inBadQual(item) {
        item.quality -= 4 * multi;
      },
    };
  }

  private getRule(item: cheeseMong): rules {
    return this.rules[item.name] ?? this.rules.default;
  }
}

const items: cheeseMong[] = [
  { name: "Normal Cheese", validByDays: 10, quality: 20 },
  { name: "Parmigiano Regiano", validByDays: 5, quality: 10 },
  { name: "Caciocavallo Podolico", validByDays: 0, quality: 80 },
  { name: "Tasting with Chef Massimo", validByDays: 12, quality: 30 },
  { name: "Ricotta", validByDays: 4, quality: 25 },
];
const obj = new Program(items);

for (let day = 0; day < 5; day++) {
  console.table(items);
  obj.updateQuality();
}
