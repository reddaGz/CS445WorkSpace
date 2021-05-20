## Lab2 assigment 
####  how JS engine optimize JavaScript code.
The java scripts engine parses and turns in to abstract syntax tree based on that the interperator changes to bytcode 
To make it run faster, the bytecode can be sent to the optimizing compiler along with profiling data. The optimizing compiler makes certain assumptions based on the profiling data it has, and then produces highly-optimized machine code.
#### this is diagram how js engine works 
 ![js engine](https://github.com/reddaGz/CS445WorkSpace/blob/master/CS445Assigment/Lab2/image/Jsengine.png)
 ### there are different way to optimize our source code
 1. Object shape <br>
      do not change object shape 
```
     let obj={
    x:9
}
```
 ### if we want to add some new attribute

```
  obj.y=8
```

### but we are changing the object shape 
### solution for this is the above problems to get optimized code 

```
obj={...obj,y:8}

```
### Let’s assume we have an object with the properties x and y, and it uses the dictionary data structure it contains the keys as strings, and those point to their respective property attributes.
 [Object image](https://github.com/reddaGz/CS445WorkSpace/blob/master/CS445Assigment/Lab2/image/obj.png)
 ### If we assume that we’ll be seeing more objects with this shape later, then it’s wasteful to store the full dictionary containing the property names and attributes on the JSObject itself, as the property names are repeated for all objects with the same shape. That’s a lot of duplication and unnecessarily memory usage. As an optimization, engines store the Shape of the object separately.
 [optimazed object](https://github.com/reddaGz/CS445WorkSpace/blob/master/CS445Assigment/Lab2/image/optIObj.png)
 
2. keep function argument constant :  
    the more you change the types of the attribute you use to call your function the more complex the function becomes in the eye of compiler so that keep the function monomorphic
    ```
   function add(x,y){
    return x+y;
}
```
```
```
add(3,6);
add("3",6) arguments 
add(6,7)
```
solution 
avoid calling the function with  differnt arguments so that we will have optimized code


    
