import { CategoryService } from "./../shared/category.service";
import { Category } from "./../shared/category.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-category-list",
  templateUrl: "./category-list.component.html",
  styleUrls: ["./category-list.component.css"],
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [];
  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    this.categoryService.getAll().subscribe(
      (categories) => {
        this.categories = categories;
        console.log(this.categories);
      },
      (erro) => alert(erro)
    );
  }

  deleteCategory(category: Category) {
    const confirma = confirm("Deseja deletar o item?")
    if (confirma)
      this.categoryService.delete(category).subscribe(() => {
        this.categories = this.categories.filter((categoryFilter) => categoryFilter !== category),
          (error) => alert(error);
      });
  }
}
