export type Article = {
  readonly id: string,
  readonly title: string,
  readonly content: string,
  readonly author: string };

export type createArticle = {
  readonly title: string,
  readonly content: string,
  readonly author: string };
