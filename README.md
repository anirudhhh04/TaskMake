# TODO APIs in C++

A lightweight multithreaded REST API for managing TODO items, built from scratch using C++ socket programming and MySQL for persistent storage.

## Features

* Custom HTTP server using TCP sockets
* CRUD operations for TODO items
* Middleware support

  * Authentication Middleware
  * Logging Middleware
* Thread Pool for concurrent request handling
* Request/Response abstraction
* JSON request parsing using nlohmann/json
* MySQL-backed persistent storage
* Graceful server shutdown using signals

## Tech Stack

* C++
* POSIX Sockets
* MySQL
* Multithreading (std::thread)

## API Endpoints

| Method | Endpoint        | Description    |
| ------ | --------------- | -------------- |
| POST   | /create         | Create a TODO  |
| GET    | /get?id={id}    | Get TODO by ID |
| PUT    | /update         | Update TODO    |
| DELETE | /delete?id={id} | Delete TODO    |


## Future Improvements

* Connection Pooling
* Repository Pattern
* Enhanced Logging & Monitoring
