[![Contributors][contributors-shield]][contributors-url]
[![Issues][issues-shield]][issues-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/luksluki/dilo-final-bookstore-be">
    <img src="https://via.placeholder.com/80" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Book Store API</h3>

  <p align="center">
    A Book Store BackEnd API created with node.js!
    <br />
    <a href="#"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/luksluki/dilo-final-bookstore-fe">View FrontEnd</a>
    ·
    <a href="https://github.com/luksluki/dilo-final-bookstore-be/issues">Report Bug</a>
    ·
    <a href="https://github.com/luksluki/dilo-final-bookstore-be/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
  * [Structure](#structure)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)



<!-- ABOUT THE PROJECT -->
## About The Project

Project Final in DILO BCamp.
To Create Book Store Online, including FrontEnd BackEnd.

Here's the assessment:
+ Pengguna / User
    - pengguna dapat mendaftar pada sistem.
    - pengguna dapat login pada sistem.
    - pengguna dapat melihat daftar buku.
    - pengguna dapat mencari buku.
    - pengguna dapat memfilter buku berdasarkan kategori.
    - pengguna dapat memilih buku dan menampilkan detail buku dan stok buku.
    - pengguna yang sudah login dapat membeli buku menggunakan cart.
    - stok buku berpengaruh pada transaksi pembelian oleh pengguna.

+ Admin
    - admin dapat memasukan data buku.
    - admin dapat melihat daftar pengguna.
    - admin dapat melihat data transaksi.

### Built With
* [Bootstrap](https://getbootstrap.com)
* [React.js](https://reactjs.org)
* [Node.js](https://nodejs.org)



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites
#### On Mac
This is the list things you need to use the software and how to install them.
* npm
* mongoodb
* react

### Installation

1. Clone the repo
```sh
git clone https://github.com/luksluki/dilo-final-bookstore-be.git
```
2. Install NPM packages
```sh
npm install
```
3. Start the server (default port is 3000)
```sh
npm start
```

### Structure
- POST Admin.Login
    - Admin Panel
        - POST Book
        - GET Pengguna
        - GET Transaksi
- POST User.Daftar
- POST User.Login
    - Dashboard User
        - GET Daftar Buku
        - GET Daftar Buku / where
        - GET Buku / id
        - GET User.buku
        - POST User.buku
        - POST transaksi

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/luksluki/dilo-final-bookstore-be/issues) for a list of proposed features (and known issues).

<!-- USAGE -->
## Usage

### USER

- Registering User
```sh
url : /users
method : POST
head.param : {
	"Content-Type": "application/json"
}
body.param : {
	"name": "rona",
	"email": "irfanrona@test.com",
	"password": "qwerty123",
	"umur": 23,
	"role": "Administrator"
}
```
- Ambil Data ALL User where TOKEN (next update harusnya admin)
```sh
url : /users
method : GET
head.param : {
	"Content-Type": "application/json",
	"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGYxZjJmNjMxZWQzMTFkZDRlMWFmNjQiLCJpYXQiOjE1NzYxMzc0NjJ9.b-mVSypeerZKmLZy0c3yYJfHEXArpzzhBicXoRmTI34"
}
```

- Ambil Data This User where TOKEN
```sh
url : /users/me
method : GET
head.param : {
	"Content-Type": "application/json",
	"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGYxZjJmNjMxZWQzMTFkZDRlMWFmNjQiLCJpYXQiOjE1NzYxMzc0NjJ9.b-mVSypeerZKmLZy0c3yYJfHEXArpzzhBicXoRmTI34"
}
```

- Ambil TOKEN This User where TOKEN
```sh
url : /users/get-token
method : GET
head.param : {
	"Content-Type": "application/json",
	"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGYxZjJmNjMxZWQzMTFkZDRlMWFmNjQiLCJpYXQiOjE1NzYxMzc0NjJ9.b-mVSypeerZKmLZy0c3yYJfHEXArpzzhBicXoRmTI34"
}
```

- Login
```sh
url : /users/login
method : POST
head.param : {
	"Content-Type": "application/json"
}
body.param : {
	"email": "irfanrona@test.com",
	"password": "qwerty123"
}
```

- Logout
```sh
url : /users/logout
method : POST
head.param : {
	"Content-Type": "application/json",
	"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGYxZjJmNjMxZWQzMTFkZDRlMWFmNjQiLCJpYXQiOjE1NzYxMzc0NjJ9.b-mVSypeerZKmLZy0c3yYJfHEXArpzzhBicXoRmTI34"
}
```

- Logout ALL Devices
```sh
url : /users/logoutAll
method : POST
head.param : {
	"Content-Type": "application/json",
	"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGYxZjJmNjMxZWQzMTFkZDRlMWFmNjQiLCJpYXQiOjE1NzYxMzc0NjJ9.b-mVSypeerZKmLZy0c3yYJfHEXArpzzhBicXoRmTI34"
}
```

- Delete User
```sh
url : /users/me
method : DELETE
head.param : {
	"Content-Type": "application/json",
	"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGYxZjJmNjMxZWQzMTFkZDRlMWFmNjQiLCJpYXQiOjE1NzYxMzc0NjJ9.b-mVSypeerZKmLZy0c3yYJfHEXArpzzhBicXoRmTI34"
}
```

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

None.



<!-- CONTACT -->
## Contact

1. Fanji - [@irfanrona](https://t.me/irfanrona) - irfanrona@outlook.com
2. Irfan Rona - [@irfanrona](https://t.me/irfanrona) - irfanrona@outlook.com
3. Luki - [@irfanrona](https://t.me/irfanrona) - irfanrona@outlook.com
4. Teguh - [@irfanrona](https://t.me/irfanrona) - irfanrona@outlook.com
5. Oghink - [@irfanrona](https://t.me/irfanrona) - irfanrona@outlook.com

- Project Link Backend: [https://github.com/luksluki/dilo-final-bookstore-be](https://github.com/luksluki/dilo-final-bookstore-be)
- Project Link Frontend: [https://github.com/luksluki/dilo-final-bookstore-fe](https://github.com/luksluki/dilo-final-bookstore-fe)





<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/badge/Contributors-5-green
[contributors-url]: https://github.com/luksluki/dilo-final-bookstore-fe/graphs/contributors
[issues-shield]: https://img.shields.io/badge/Issues-0%20Open-green
[issues-url]: https://github.com/luksluki/dilo-final-bookstore-fe/issues