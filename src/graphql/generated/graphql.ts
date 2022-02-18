import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Author = {
  __typename?: 'Author';
  books?: Maybe<Array<Maybe<Book>>>;
  name?: Maybe<Scalars['String']>;
};

export type Book = {
  __typename?: 'Book';
  authors?: Maybe<Array<Maybe<Author>>>;
  description?: Maybe<Scalars['String']>;
  firstThumbnailUrl?: Maybe<Scalars['String']>;
  isbn: Scalars['ID'];
  price?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<Scalars['String']>;
  thumbnails?: Maybe<Array<Maybe<Thumbnail>>>;
  title?: Maybe<Scalars['String']>;
};

export type BookInput = {
  description?: InputMaybe<Scalars['String']>;
  isbn?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['Int']>;
  subtitle?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createBook?: Maybe<Book>;
};


export type MutationCreateBookArgs = {
  book: BookInput;
};

export type Query = {
  __typename?: 'Query';
  authors?: Maybe<Array<Maybe<Author>>>;
  book?: Maybe<Book>;
  bookSearch?: Maybe<Array<Maybe<Book>>>;
  books?: Maybe<Array<Maybe<Book>>>;
  isbnExists?: Maybe<Scalars['Boolean']>;
};


export type QueryBookArgs = {
  isbn: Scalars['ID'];
};


export type QueryBookSearchArgs = {
  searchTerm?: InputMaybe<Scalars['String']>;
};


export type QueryIsbnExistsArgs = {
  isbn: Scalars['ID'];
};

export type Thumbnail = {
  __typename?: 'Thumbnail';
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ThumbnailInput = {
  title?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type BookListQueryVariables = Exact<{ [key: string]: never; }>;


export type BookListQuery = { __typename?: 'Query', books?: Array<{ __typename?: 'Book', isbn: string, title?: string | null, authors?: Array<{ __typename?: 'Author', name?: string | null } | null> | null } | null> | null };

export type SingleBookQueryVariables = Exact<{
  isbn: Scalars['ID'];
}>;


export type SingleBookQuery = { __typename?: 'Query', book?: { __typename?: 'Book', title?: string | null } | null };

export const BookListDocument = gql`
    query bookList {
  books {
    isbn
    title
    authors {
      name
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class BookListGQL extends Apollo.Query<BookListQuery, BookListQueryVariables> {
    override document = BookListDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SingleBookDocument = gql`
    query singleBook($isbn: ID!) {
  book(isbn: $isbn) {
    title
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SingleBookGQL extends Apollo.Query<SingleBookQuery, SingleBookQueryVariables> {
    override document = SingleBookDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }