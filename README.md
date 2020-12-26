# Filters in Vue

## 2 interesting possibilities in vue

* filters that serve to transform data inside templates.
    - Example when need ***filters***
        - let's say the text that is output from the server but is in lower case and let's say we host to bring it all to the upper case.
        ```javascript
        export default {
            filters: {
                //in here we can write some function, exmaple uppercase
                uppercase(value) {
                    return value;
                }
            }
        }
        ```

        ```html
        <p>{{todo.title | uppercase}}</p> <!--specify our function wchich created in filters object-->
        ```
        [<img src="https://i.imgur.com/tyRAnhv.png">](http://google.com.au/)

        ⚠ when ***todo.title*** is true in passed as argument in uppercase funntion.



        
        
