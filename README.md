# Stories @ FindFood.Guide

## Starting website

### 1. Set Up Backend 
In the `stories` folder, run the following:
```
python3 manage.py migrate      
python3 manage.py makemigrations
python3 manage.py runserver
```
This will start the backend Django server for our frontend to connect with.

### 2. Start Frontend
In the `stories_frontend` folder, run the following:
```
npm install
npm start
```
This will start the website at localhost:3000.

## Implementation Overview
The backend is implemented with Django in the `stories` folder. Frontend is implemented with React and JavaSript in the `stories_frontend` folder.