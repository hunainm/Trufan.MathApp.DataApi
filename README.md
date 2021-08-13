# Trufan.MathApp.DataApi

This is the dataapi for simple math functions
The endpoints are NOT protected by any auth method just to allow testing via postman/swagger interface. 

## HOW TO RUN
Run `cd src` -> `npm start` to start the application at http://localhost:5000 by default.

If you have docker installed locally then run the following command instead at the root of project 
`docker build . -t trufan-data-api` -> `docker run -p 5000:5000 -d trufan-data-api`

## HOW TO TEST
Run `npm run test` to run unit and integration tests.

## APIDOCS
To see apidocs navigate to http://localhost:5000/api-docs

<img width="1163" alt="Screen Shot 2021-08-13 at 2 27 46 AM" src="https://user-images.githubusercontent.com/5270403/129314893-01c54039-0dbe-4bb7-9e1c-e9561f2d537b.png">

