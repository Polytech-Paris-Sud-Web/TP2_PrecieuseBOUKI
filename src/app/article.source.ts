import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {Article, createArticle} from "./article.model";
import {Author} from "./author.model";

export interface ArticleSource {

  getArticles(): Observable<Article[]>;

  getArticle(id:string): Observable<Article>;

  deleteArticle(id: string);

  createArticle(article : createArticle);

  getAuthor(name:string): Observable<Author>;


}
