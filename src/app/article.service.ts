import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {Article, createArticle} from "./article.model";
import {Author} from "./author.model";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private static readonly baseurl: string;
  private  baseurl = "https://my-json-server.typicode.com/Polytech-Paris-Sud-Web/TP2_PrecieuseBOUKI/"; //`${baseurl}articles...`


  constructor(private httpClient : HttpClient) {
}
  public getArticles(): Observable<Article[]> {
    return this.httpClient.get<Article[]>("http://localhost:3000/articles");
}

   public getArticle(id:string): Observable<Article> {
    return this.httpClient.get<Article>("http://localhost:3000/articles/" + id);
  }

  public deleteArticle(id: string) {
      return this.httpClient.delete("http://localhost:3000/articles/"+id);
  }

  public createArticle(article : createArticle){
    return this.httpClient.post<createArticle[]>("http://localhost:3000/articles",article);
  }

  public getAuthor(name:string): Observable<Author> {
    return this.httpClient.get<Author>("http://localhost:3000/authors/+"+name);
  }


}
