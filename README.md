# [API Project: Request Header Parser Microservice for freeCodeCamp](https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/request-header-parser-microservice)
![My Preview](https://lh3.googleusercontent.com/80bmBVeGOM9_JpgA-8WzuO9EfBJJj5Pl3G3IUsFrIeRUp5Cl8SpeIU7zissdc4ZsjHsV-ZsqeJA_R3lbKkYQ2ovmWpTUWC-vQGVIlWh0K6tqY1scJuVx7_UIvXUNNzrx9AyoXTQsvA=w2400)

My solution for this exercise can be found here: https://whoam-i.glitch.me

### User stories:
1. I can get the IP address, preferred languages (from header `Accept-Language`) and system infos (from header `User-Agent`) for my device.

### Tests 
Tests can be found in the folder /tests:
1. Postman test cases are in the "GET Suite.postman_collection.json"  file
2. Postman results are in the "GET Suite.postman_test_run.json" file
3. Automated test cases are in the "functional-tests.js" file

#### Example usage:
* [base_url]/api/whoami

#### Example output:
* `{"ipaddress":"159.20.14.100","language":"en-US,en;q=0.5","software":"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0"}`
