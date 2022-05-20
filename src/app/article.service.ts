import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {Article, createArticle} from "./article.model";
import {Author} from "./author.model";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private httpClient : HttpClient) {
}
  public getArticles(): Observable<Article[]> {
    return this.httpClient.get<Article[]>("https://my-json-server.typicode.com/Polytech-Paris-Sud-Web/TP2_PrecieuseBOUKI/articles");
}

   public getArticle(id:string): Observable<Article> {
    return this.httpClient.get<Article>("https://my-json-server.typicode.com/Polytech-Paris-Sud-Web/TP2_PrecieuseBOUKI/articles/" + id);
  }

  public deleteArticle(id: string) {
      return this.httpClient.delete("https://my-json-server.typicode.com/Polytech-Paris-Sud-Web/TP2_PrecieuseBOUKI/articles/"+id);
  }

  public createArticle(article : createArticle){
    return this.httpClient.post<createArticle[]>("https://my-json-server.typicode.com/Polytech-Paris-Sud-Web/TP2_PrecieuseBOUKI/articles",article);
  }

  public getAuthor(name:string): Observable<Author> {
    return this.httpClient.get<Author>("https://my-json-server.typicode.com/Polytech-Paris-Sud-Web/TP2_PrecieuseBOUKI/authors/+"+name);
  }


}
