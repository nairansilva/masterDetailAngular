import { InMemoryDbService } from "angular-in-memory-web-api";
import { Category } from "./pages/categories/shared/category.model";

export class InMemoryDatabase implements InMemoryDbService {
  createDb() {
    const categories: Category[] = [
      { id: 1, name: "Lazer", description: "Jogos, bebidas e bolachas" },
      { id: 2, name: "Escola", description: "Pão de batata" },
      { id: 3, name: "Comida", description: "Tainha, Vinho e muito sexo" },
      { id: 4, name: "Outros", description: "Outros" },
    ];

    return { categories };
  }
}
