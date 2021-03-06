
<h1 align="center">
    SustainaBnb
</h1>


<p align="center">
    <a href="https://sustainabnb.herokuapp.com/">Live App</a>
</p>

<p align="center">
    Sustainabnb is an Airbnb clone that allows us to stay at sustainable places around the world while travelling. Sustainable properties can be hosted by anyone. Property Owners also have the ability to change and delete their listings. Everyone but the property owner can also create reviews for various listings. Explore the uniquely beautiful sustainable properties around the world!
</p>


<h2>
    Project Preview
</h2>


<p align="center">
    Home Page
</p>

<p align="center">
    <img src="https://media.giphy.com/media/wspRwT45FrxGNvK5Xc/giphy.gif" />
</p>

<p align="center">
    Properties Around The World
</p>

<p align="center">
    <img src="https://media.giphy.com/media/45GBQe6U1xeKDryRa1/giphy.gif" />
</p>

<p align="center">
    Property
</p>

<p align="center">
    <img src="https://media.giphy.com/media/P6Ar5OEg2mVMfwGO1r/giphy.gif" />
</p>

<p align="center">
    Hosting Your Property
</p>

<p align="center">
    <img src="https://media.giphy.com/media/y8mjvwRckLQkg7VVP9/giphy.gif" />
</p>


<h2>
    Getting Started
</h2>

1. Clone this repo at:

* git clone git@github.com:sbyri97/SustainaBnb.git

2. Next Install dependencies:

* go into the directory where you cloned the repo and in the root and run ``` npm install ``` in your terminal.

3. After installing your dependencies, create a POSTGRESQL user with a PASSWORD and allow CREATEDB privledges using CREATEDB

    ```CREATE USER 'user' WITH PASSWORD 'password' CREATEDB;``` (note: make sure to include the semicolon at the end)

4. Next from your root directory, cd into the backend folder ``` cd backend ``` and create a ```.env``` file. Follow the ```.env.example``` file in the backend directory and use it as a reference.

5. Use your database USERNAME (e.g. 'user') and PASSWORD (e.g. 'password'). Next add a databse name of your choice as well as a PORT for the localhost (note: 5000 is the preferred PORT to use). After the PORT of your choice, create a ``` JWT_SECRET ``` of your choice (make a secured combination).

6. Next add a proxy to the package.json file that is located in your frontend directory. Make sure to use the PORT that you created. 

    ```"proxy": "http://localhost:PORT THAT YOU USED" ``` 
    
    Example: ```"proxy": "http://localhost:5000"```
    
7. Now its time to create your database. Run the following command in your backend terminal.

    ```npx dotenv sequelize db:create```
  
8. Now migrate and seed the exisiting models using the following commands.
  
    ```npx dotenv sequelize db:migrate```
    
    ```npx dotenv sequelize db:seed:all```
    
9. Its now time to start your backend server using the following command: 

    ```npm start```

10. The frontend server should also be started using the same command. However open a new terminal and navigate to the frontend folder and run the ``` npm start ``` command.

11. You can now use the application. Feel free to user the demo user login found under the sign up tab or craete a user of your own.
