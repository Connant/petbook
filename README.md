
# 📚 Book Reading Tracker
A pet project app for reading books with progress tracking, reading statistics, and social elements.

### 🚀 Main features

**The app allows users to:**
> - 🔎 search for books
> - 📖 read books within the app
> - ⏳ track reading time
> - 📊 view reading statistics
> - 📚 keep a list of books read
> - 💬 leave comments on books

*** 
### 🧠 Main idea of the project

**The goal of the project is to create an app that combines:**
> -  a book catalog
> -  a reader
> -  a reading tracker
> -  social features
***


## ⚙️ Stack

### 🏗 Architecture
The project was built using Feature-Sliced Design (FSD).
> - Next.js
> - TypeScript
> - SCSS modules


# 🛠 Project start
``npm install``\
``npm run dev``

### pages
> -  pages/auth
> -  pages/search
> -  pages/book
> -  pages/read

### models 
```text
user {
  id: string
  email: string
  password_hash: string
  nickname: string
  created_at: Date
}
```

```text
book {
  id: number
  externalId: number
  title: string
  alternativeTitle: string | null
  author: string
  coverImage: string | null
  subjects: string[]
  issuedAt: string | null
  downloadCount: number | null
  readingEaseScore: number | null
  source: 'gutenberg'
}
```

```text
user_books {
  id: number
  userId: number
  bookId: number
  status: 'reading'
  lastPosition: string | null
  progressPercent: number
  startedAt: Date
  updatedAt: Date
}
```

## 📚 Source of books

The API is used to obtain a list of books and texts: \
[Gutenberg API](https://gutenbergapi.com/#documentation) \
**The API provides access to the public domain of books, so they can be used in demo projects without a license.**