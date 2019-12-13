import mongoose from 'mongoose'

// Importing models
import Book from '../models/book'
import User from '../models/user'

// @Description     > Getting all books
// @Route           > /books
// @Access Control  > Public
export const getBooks = async (req, res, next) => {
  
}

// @Description     > Getting book by its id
// @Route           > /book/:id
// @Access Control  > Public
export const getBook = async (req, res, next) => {
  
}

// @Description     > Posting books
// @Route           > /book/add
// @Access Control  > Private
export const addBook = async (req, res, next) => {
  
}

// @Description     > Getting all of the books created by a user
// @Route           > /user/books
// @Access Control  > Private
export const getBooksByUser = async (req, res, next) => {
  
}

// @Description     > Deleting books
// @Route           > /book/:id
// @Access Control  > Private
export const deleteBook = async (req, res, next) => {
  
}
