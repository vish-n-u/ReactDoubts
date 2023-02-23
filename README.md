# ReactDoubts
Issue:-
  Does React lifecycle work differently when using useEffect ?
  
To Notice difference:- 
  - First copy the aboutUs and ProfileClass in your project (I used the swiggy project) and run it
  - Write down what you see in console (or just take that page offline)
  - Second copy the profile file and use it instead of profileClass and run it
  - You'll see the difference in console ...

Note:- in aboutUs file i have "<"Outlet/">" in which I passed the Profile class so these are nested routes

# This Doubt has been solved:-
 Basically, assuming that useEffect is equivalent to componentDidMount was Wrong , it doesnot work the same as lifecycle methods (which is more based on timing), it works  based on what code does
 A detail explanation cn be found in https://reacttraining.com/blog/useEffect-is-not-the-new-componentDidMount/


### Thanks to venkatRohit for providing the resource
